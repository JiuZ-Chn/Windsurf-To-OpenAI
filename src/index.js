const express = require('express');
const morgan = require('morgan');
const { v4: uuidv4 } = require('uuid');
const app = express();

const $root = require('./message.js');
const { generateJwtBody, generateChatBody, chunkToUtf8String } = require('./utils.js');

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use(morgan(process.env.MORGAN_FORMAT ?? 'tiny'));

app.post('/v1/chat/completions', async (req, res) => {
  
  try {
    const { model, messages, stream = false } = req.body;
    const bearerToken = req.headers.authorization?.replace('Bearer ', '');
    const userIds = bearerToken.split(',').map((key) => key.trim());

    // Randomly select one key to use
    const userId = userIds[Math.floor(Math.random() * userIds.length)]

    if (!messages || !Array.isArray(messages) || messages.length === 0 || !userId) {
      return res.status(400).json({
        error: 'Invalid request. Messages should be a non-empty array and authorization is required',
      });
    }

    // Get jwt token
    const jwtBody = generateJwtBody(userId)
    const jwtResponse = await fetch('https://server.codeium.com/exa.auth_pb.AuthService/GetUserJwt', {
      method: 'POST',
      headers: {
        'Host': 'server.codeium.com',
        'User-Agent': 'connect-go/1.17.0 (go1.23.4 X:nocoverageredesign)',
        'Accept-Encoding': 'gzip',
        'Connect-Protocol-Version': '1',
        'Connect-Timeout-Ms': '30000',
        'Content-Type': 'application/proto'
      },
      body: jwtBody
    })
    const jwtBuffer = await jwtResponse.arrayBuffer()
    const jwtResMessage = $root.JwtResMessage.decode(Buffer.from(jwtBuffer))
    const jwtToken = jwtResMessage.jwt

    const chatBody = generateChatBody(userId, jwtToken, req.body);
    const response = await fetch('https://server.codeium.com/exa.api_server_pb.ApiServerService/GetChatMessage', {
      method: 'POST',
      headers: {
        'Host': 'server.codeium.com',
        'User-Agent': 'connect-go/1.17.0 (go1.23.4 X:nocoverageredesign)',
        'Accept-Encoding': 'identity',
        'Connect-Accept-Encoding': 'gzip',
        'Connect-Content-Encoding': 'gzip',
        'Connect-Protocol-Version': '1',
        'Content-Type': 'application/connect+proto'
      },
      body: chatBody,
      timeout: {
        connect: 5000,
        read: 30000
      }
    });

    if (stream) {
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');

      const responseId = `chatcmpl-${uuidv4()}`;

      try {
        for await (const chunk of response.body) {
          let text = await chunkToUtf8String(chunk);

          if (text.length > 0) {
            res.write(
              `data: ${JSON.stringify({
                id: responseId,
                object: 'chat.completion.chunk',
                created: Math.floor(Date.now() / 1000),
                model: req.body.model,
                choices: [
                  {
                    index: 0,
                    delta: {
                      content: text,
                    },
                  },
                ],
              })}\n\n`
            );
          }
        }
      } catch (streamError) {
        console.error('Stream error:', streamError);
        if (streamError.name === 'TimeoutError') {
          res.write(`data: ${JSON.stringify({ error: 'Server response timeout' })}\n\n`);
        } else {
          res.write(`data: ${JSON.stringify({ error: 'Stream processing error' })}\n\n`);
        }
      } finally {
        res.write('data: [DONE]\n\n');
        res.end();
      }
    } else {
      try {
        let text = '';
        for await (const chunk of response.body) {
          text += await chunkToUtf8String(chunk);
        }
        text = text.replace(/^.*<\|END_USER\|>/s, '');
        text = text.replace(/^\n[a-zA-Z]?/, '').trim();

        return res.json({
          id: `chatcmpl-${uuidv4()}`,
          object: 'chat.completion',
          created: Math.floor(Date.now() / 1000),
          model,
          choices: [
            {
              index: 0,
              message: {
                role: 'assistant',
                content: text,
              },
              finish_reason: 'stop',
            },
          ],
          usage: {
            prompt_tokens: 0,
            completion_tokens: 0,
            total_tokens: 0,
          },
        });
      } catch (error) {
        console.error('Non-stream error:', error);
        if (error.name === 'TimeoutError') {
          return res.status(408).json({ error: 'Server response timeout' });
        }
        throw error;
      }
    }

  } catch (error) {

    console.error('Error:', error);
    if (!res.headersSent) {
      const errorMessage = {
        error: error.name === 'TimeoutError' ? 'Request timeout' : 'Internal server error'
      };
      if (req.body.stream) {
        res.write(`data: ${JSON.stringify(errorMessage)}\n\n`);
        return res.end();
      } else {
        return res.status(error.name === 'TimeoutError' ? 408 : 500).json(errorMessage);
      }
    }
  }

});

const PORT = process.env.PORT || 3011;
app.listen(PORT, () => {
  console.log(`The server listens port: ${PORT}`);
});