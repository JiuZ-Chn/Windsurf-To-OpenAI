/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ChatMessage = (function() {

    /**
     * Properties of a ChatMessage.
     * @exports IChatMessage
     * @interface IChatMessage
     * @property {ChatMessage.IMetadata|null} [metadata] ChatMessage metadata
     * @property {string|null} [instructions] ChatMessage instructions
     * @property {Array.<ChatMessage.IUserMessage>|null} [messages] ChatMessage messages
     * @property {number|null} [model] ChatMessage model
     * @property {number|null} [unknown7] ChatMessage unknown7
     * @property {ChatMessage.IConfiguration|null} [configruation] ChatMessage configruation
     * @property {ChatMessage.IToolChoice|null} [toolChoice] ChatMessage toolChoice
     * @property {ChatMessage.IUnknown13|null} [unknown13] ChatMessage unknown13
     * @property {ChatMessage.IUnknown15|null} [unknown15] ChatMessage unknown15
     * @property {string|null} [conversationId] ChatMessage conversationId
     */

    /**
     * Constructs a new ChatMessage.
     * @exports ChatMessage
     * @classdesc Represents a ChatMessage.
     * @implements IChatMessage
     * @constructor
     * @param {IChatMessage=} [properties] Properties to set
     */
    function ChatMessage(properties) {
        this.messages = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChatMessage metadata.
     * @member {ChatMessage.IMetadata|null|undefined} metadata
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.metadata = null;

    /**
     * ChatMessage instructions.
     * @member {string} instructions
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.instructions = "";

    /**
     * ChatMessage messages.
     * @member {Array.<ChatMessage.IUserMessage>} messages
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.messages = $util.emptyArray;

    /**
     * ChatMessage model.
     * @member {number} model
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.model = 0;

    /**
     * ChatMessage unknown7.
     * @member {number} unknown7
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.unknown7 = 0;

    /**
     * ChatMessage configruation.
     * @member {ChatMessage.IConfiguration|null|undefined} configruation
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.configruation = null;

    /**
     * ChatMessage toolChoice.
     * @member {ChatMessage.IToolChoice|null|undefined} toolChoice
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.toolChoice = null;

    /**
     * ChatMessage unknown13.
     * @member {ChatMessage.IUnknown13|null|undefined} unknown13
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.unknown13 = null;

    /**
     * ChatMessage unknown15.
     * @member {ChatMessage.IUnknown15|null|undefined} unknown15
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.unknown15 = null;

    /**
     * ChatMessage conversationId.
     * @member {string} conversationId
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.conversationId = "";

    /**
     * Creates a new ChatMessage instance using the specified properties.
     * @function create
     * @memberof ChatMessage
     * @static
     * @param {IChatMessage=} [properties] Properties to set
     * @returns {ChatMessage} ChatMessage instance
     */
    ChatMessage.create = function create(properties) {
        return new ChatMessage(properties);
    };

    /**
     * Encodes the specified ChatMessage message. Does not implicitly {@link ChatMessage.verify|verify} messages.
     * @function encode
     * @memberof ChatMessage
     * @static
     * @param {IChatMessage} message ChatMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
            $root.ChatMessage.Metadata.encode(message.metadata, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.instructions != null && Object.hasOwnProperty.call(message, "instructions"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.instructions);
        if (message.messages != null && message.messages.length)
            for (var i = 0; i < message.messages.length; ++i)
                $root.ChatMessage.UserMessage.encode(message.messages[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.model != null && Object.hasOwnProperty.call(message, "model"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.model);
        if (message.unknown7 != null && Object.hasOwnProperty.call(message, "unknown7"))
            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.unknown7);
        if (message.configruation != null && Object.hasOwnProperty.call(message, "configruation"))
            $root.ChatMessage.Configuration.encode(message.configruation, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.toolChoice != null && Object.hasOwnProperty.call(message, "toolChoice"))
            $root.ChatMessage.ToolChoice.encode(message.toolChoice, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        if (message.unknown13 != null && Object.hasOwnProperty.call(message, "unknown13"))
            $root.ChatMessage.Unknown13.encode(message.unknown13, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
        if (message.unknown15 != null && Object.hasOwnProperty.call(message, "unknown15"))
            $root.ChatMessage.Unknown15.encode(message.unknown15, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        if (message.conversationId != null && Object.hasOwnProperty.call(message, "conversationId"))
            writer.uint32(/* id 16, wireType 2 =*/130).string(message.conversationId);
        return writer;
    };

    /**
     * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link ChatMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChatMessage
     * @static
     * @param {IChatMessage} message ChatMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChatMessage message from the specified reader or buffer.
     * @function decode
     * @memberof ChatMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChatMessage} ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.metadata = $root.ChatMessage.Metadata.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.instructions = reader.string();
                    break;
                }
            case 3: {
                    if (!(message.messages && message.messages.length))
                        message.messages = [];
                    message.messages.push($root.ChatMessage.UserMessage.decode(reader, reader.uint32()));
                    break;
                }
            case 6: {
                    message.model = reader.uint32();
                    break;
                }
            case 7: {
                    message.unknown7 = reader.uint32();
                    break;
                }
            case 8: {
                    message.configruation = $root.ChatMessage.Configuration.decode(reader, reader.uint32());
                    break;
                }
            case 12: {
                    message.toolChoice = $root.ChatMessage.ToolChoice.decode(reader, reader.uint32());
                    break;
                }
            case 13: {
                    message.unknown13 = $root.ChatMessage.Unknown13.decode(reader, reader.uint32());
                    break;
                }
            case 15: {
                    message.unknown15 = $root.ChatMessage.Unknown15.decode(reader, reader.uint32());
                    break;
                }
            case 16: {
                    message.conversationId = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChatMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChatMessage} ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ChatMessage message.
     * @function verify
     * @memberof ChatMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ChatMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.metadata != null && message.hasOwnProperty("metadata")) {
            var error = $root.ChatMessage.Metadata.verify(message.metadata);
            if (error)
                return "metadata." + error;
        }
        if (message.instructions != null && message.hasOwnProperty("instructions"))
            if (!$util.isString(message.instructions))
                return "instructions: string expected";
        if (message.messages != null && message.hasOwnProperty("messages")) {
            if (!Array.isArray(message.messages))
                return "messages: array expected";
            for (var i = 0; i < message.messages.length; ++i) {
                var error = $root.ChatMessage.UserMessage.verify(message.messages[i]);
                if (error)
                    return "messages." + error;
            }
        }
        if (message.model != null && message.hasOwnProperty("model"))
            if (!$util.isInteger(message.model))
                return "model: integer expected";
        if (message.unknown7 != null && message.hasOwnProperty("unknown7"))
            if (!$util.isInteger(message.unknown7))
                return "unknown7: integer expected";
        if (message.configruation != null && message.hasOwnProperty("configruation")) {
            var error = $root.ChatMessage.Configuration.verify(message.configruation);
            if (error)
                return "configruation." + error;
        }
        if (message.toolChoice != null && message.hasOwnProperty("toolChoice")) {
            var error = $root.ChatMessage.ToolChoice.verify(message.toolChoice);
            if (error)
                return "toolChoice." + error;
        }
        if (message.unknown13 != null && message.hasOwnProperty("unknown13")) {
            var error = $root.ChatMessage.Unknown13.verify(message.unknown13);
            if (error)
                return "unknown13." + error;
        }
        if (message.unknown15 != null && message.hasOwnProperty("unknown15")) {
            var error = $root.ChatMessage.Unknown15.verify(message.unknown15);
            if (error)
                return "unknown15." + error;
        }
        if (message.conversationId != null && message.hasOwnProperty("conversationId"))
            if (!$util.isString(message.conversationId))
                return "conversationId: string expected";
        return null;
    };

    /**
     * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChatMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChatMessage} ChatMessage
     */
    ChatMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ChatMessage)
            return object;
        var message = new $root.ChatMessage();
        if (object.metadata != null) {
            if (typeof object.metadata !== "object")
                throw TypeError(".ChatMessage.metadata: object expected");
            message.metadata = $root.ChatMessage.Metadata.fromObject(object.metadata);
        }
        if (object.instructions != null)
            message.instructions = String(object.instructions);
        if (object.messages) {
            if (!Array.isArray(object.messages))
                throw TypeError(".ChatMessage.messages: array expected");
            message.messages = [];
            for (var i = 0; i < object.messages.length; ++i) {
                if (typeof object.messages[i] !== "object")
                    throw TypeError(".ChatMessage.messages: object expected");
                message.messages[i] = $root.ChatMessage.UserMessage.fromObject(object.messages[i]);
            }
        }
        if (object.model != null)
            message.model = object.model >>> 0;
        if (object.unknown7 != null)
            message.unknown7 = object.unknown7 >>> 0;
        if (object.configruation != null) {
            if (typeof object.configruation !== "object")
                throw TypeError(".ChatMessage.configruation: object expected");
            message.configruation = $root.ChatMessage.Configuration.fromObject(object.configruation);
        }
        if (object.toolChoice != null) {
            if (typeof object.toolChoice !== "object")
                throw TypeError(".ChatMessage.toolChoice: object expected");
            message.toolChoice = $root.ChatMessage.ToolChoice.fromObject(object.toolChoice);
        }
        if (object.unknown13 != null) {
            if (typeof object.unknown13 !== "object")
                throw TypeError(".ChatMessage.unknown13: object expected");
            message.unknown13 = $root.ChatMessage.Unknown13.fromObject(object.unknown13);
        }
        if (object.unknown15 != null) {
            if (typeof object.unknown15 !== "object")
                throw TypeError(".ChatMessage.unknown15: object expected");
            message.unknown15 = $root.ChatMessage.Unknown15.fromObject(object.unknown15);
        }
        if (object.conversationId != null)
            message.conversationId = String(object.conversationId);
        return message;
    };

    /**
     * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChatMessage
     * @static
     * @param {ChatMessage} message ChatMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChatMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.messages = [];
        if (options.defaults) {
            object.metadata = null;
            object.instructions = "";
            object.model = 0;
            object.unknown7 = 0;
            object.configruation = null;
            object.toolChoice = null;
            object.unknown13 = null;
            object.unknown15 = null;
            object.conversationId = "";
        }
        if (message.metadata != null && message.hasOwnProperty("metadata"))
            object.metadata = $root.ChatMessage.Metadata.toObject(message.metadata, options);
        if (message.instructions != null && message.hasOwnProperty("instructions"))
            object.instructions = message.instructions;
        if (message.messages && message.messages.length) {
            object.messages = [];
            for (var j = 0; j < message.messages.length; ++j)
                object.messages[j] = $root.ChatMessage.UserMessage.toObject(message.messages[j], options);
        }
        if (message.model != null && message.hasOwnProperty("model"))
            object.model = message.model;
        if (message.unknown7 != null && message.hasOwnProperty("unknown7"))
            object.unknown7 = message.unknown7;
        if (message.configruation != null && message.hasOwnProperty("configruation"))
            object.configruation = $root.ChatMessage.Configuration.toObject(message.configruation, options);
        if (message.toolChoice != null && message.hasOwnProperty("toolChoice"))
            object.toolChoice = $root.ChatMessage.ToolChoice.toObject(message.toolChoice, options);
        if (message.unknown13 != null && message.hasOwnProperty("unknown13"))
            object.unknown13 = $root.ChatMessage.Unknown13.toObject(message.unknown13, options);
        if (message.unknown15 != null && message.hasOwnProperty("unknown15"))
            object.unknown15 = $root.ChatMessage.Unknown15.toObject(message.unknown15, options);
        if (message.conversationId != null && message.hasOwnProperty("conversationId"))
            object.conversationId = message.conversationId;
        return object;
    };

    /**
     * Converts this ChatMessage to JSON.
     * @function toJSON
     * @memberof ChatMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChatMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ChatMessage
     * @function getTypeUrl
     * @memberof ChatMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ChatMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ChatMessage";
    };

    ChatMessage.Metadata = (function() {

        /**
         * Properties of a Metadata.
         * @memberof ChatMessage
         * @interface IMetadata
         * @property {string|null} [name] Metadata name
         * @property {string|null} [codeiumVersion] Metadata codeiumVersion
         * @property {string|null} [userId] Metadata userId
         * @property {string|null} [lang] Metadata lang
         * @property {string|null} [os] Metadata os
         * @property {string|null} [windsurfVersion] Metadata windsurfVersion
         * @property {string|null} [hardwareInfo] Metadata hardwareInfo
         * @property {string|null} [windsurfName] Metadata windsurfName
         * @property {string|null} [token] Metadata token
         */

        /**
         * Constructs a new Metadata.
         * @memberof ChatMessage
         * @classdesc Represents a Metadata.
         * @implements IMetadata
         * @constructor
         * @param {ChatMessage.IMetadata=} [properties] Properties to set
         */
        function Metadata(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Metadata name.
         * @member {string} name
         * @memberof ChatMessage.Metadata
         * @instance
         */
        Metadata.prototype.name = "";

        /**
         * Metadata codeiumVersion.
         * @member {string} codeiumVersion
         * @memberof ChatMessage.Metadata
         * @instance
         */
        Metadata.prototype.codeiumVersion = "";

        /**
         * Metadata userId.
         * @member {string} userId
         * @memberof ChatMessage.Metadata
         * @instance
         */
        Metadata.prototype.userId = "";

        /**
         * Metadata lang.
         * @member {string} lang
         * @memberof ChatMessage.Metadata
         * @instance
         */
        Metadata.prototype.lang = "";

        /**
         * Metadata os.
         * @member {string} os
         * @memberof ChatMessage.Metadata
         * @instance
         */
        Metadata.prototype.os = "";

        /**
         * Metadata windsurfVersion.
         * @member {string} windsurfVersion
         * @memberof ChatMessage.Metadata
         * @instance
         */
        Metadata.prototype.windsurfVersion = "";

        /**
         * Metadata hardwareInfo.
         * @member {string} hardwareInfo
         * @memberof ChatMessage.Metadata
         * @instance
         */
        Metadata.prototype.hardwareInfo = "";

        /**
         * Metadata windsurfName.
         * @member {string} windsurfName
         * @memberof ChatMessage.Metadata
         * @instance
         */
        Metadata.prototype.windsurfName = "";

        /**
         * Metadata token.
         * @member {string} token
         * @memberof ChatMessage.Metadata
         * @instance
         */
        Metadata.prototype.token = "";

        /**
         * Creates a new Metadata instance using the specified properties.
         * @function create
         * @memberof ChatMessage.Metadata
         * @static
         * @param {ChatMessage.IMetadata=} [properties] Properties to set
         * @returns {ChatMessage.Metadata} Metadata instance
         */
        Metadata.create = function create(properties) {
            return new Metadata(properties);
        };

        /**
         * Encodes the specified Metadata message. Does not implicitly {@link ChatMessage.Metadata.verify|verify} messages.
         * @function encode
         * @memberof ChatMessage.Metadata
         * @static
         * @param {ChatMessage.IMetadata} message Metadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Metadata.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.codeiumVersion != null && Object.hasOwnProperty.call(message, "codeiumVersion"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.codeiumVersion);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.userId);
            if (message.lang != null && Object.hasOwnProperty.call(message, "lang"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.lang);
            if (message.os != null && Object.hasOwnProperty.call(message, "os"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.os);
            if (message.windsurfVersion != null && Object.hasOwnProperty.call(message, "windsurfVersion"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.windsurfVersion);
            if (message.hardwareInfo != null && Object.hasOwnProperty.call(message, "hardwareInfo"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.hardwareInfo);
            if (message.windsurfName != null && Object.hasOwnProperty.call(message, "windsurfName"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.windsurfName);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 21, wireType 2 =*/170).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified Metadata message, length delimited. Does not implicitly {@link ChatMessage.Metadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ChatMessage.Metadata
         * @static
         * @param {ChatMessage.IMetadata} message Metadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Metadata.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Metadata message from the specified reader or buffer.
         * @function decode
         * @memberof ChatMessage.Metadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ChatMessage.Metadata} Metadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Metadata.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatMessage.Metadata();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.codeiumVersion = reader.string();
                        break;
                    }
                case 3: {
                        message.userId = reader.string();
                        break;
                    }
                case 4: {
                        message.lang = reader.string();
                        break;
                    }
                case 5: {
                        message.os = reader.string();
                        break;
                    }
                case 7: {
                        message.windsurfVersion = reader.string();
                        break;
                    }
                case 8: {
                        message.hardwareInfo = reader.string();
                        break;
                    }
                case 12: {
                        message.windsurfName = reader.string();
                        break;
                    }
                case 21: {
                        message.token = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Metadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ChatMessage.Metadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ChatMessage.Metadata} Metadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Metadata.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Metadata message.
         * @function verify
         * @memberof ChatMessage.Metadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Metadata.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.codeiumVersion != null && message.hasOwnProperty("codeiumVersion"))
                if (!$util.isString(message.codeiumVersion))
                    return "codeiumVersion: string expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.lang != null && message.hasOwnProperty("lang"))
                if (!$util.isString(message.lang))
                    return "lang: string expected";
            if (message.os != null && message.hasOwnProperty("os"))
                if (!$util.isString(message.os))
                    return "os: string expected";
            if (message.windsurfVersion != null && message.hasOwnProperty("windsurfVersion"))
                if (!$util.isString(message.windsurfVersion))
                    return "windsurfVersion: string expected";
            if (message.hardwareInfo != null && message.hasOwnProperty("hardwareInfo"))
                if (!$util.isString(message.hardwareInfo))
                    return "hardwareInfo: string expected";
            if (message.windsurfName != null && message.hasOwnProperty("windsurfName"))
                if (!$util.isString(message.windsurfName))
                    return "windsurfName: string expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ChatMessage.Metadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ChatMessage.Metadata} Metadata
         */
        Metadata.fromObject = function fromObject(object) {
            if (object instanceof $root.ChatMessage.Metadata)
                return object;
            var message = new $root.ChatMessage.Metadata();
            if (object.name != null)
                message.name = String(object.name);
            if (object.codeiumVersion != null)
                message.codeiumVersion = String(object.codeiumVersion);
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.lang != null)
                message.lang = String(object.lang);
            if (object.os != null)
                message.os = String(object.os);
            if (object.windsurfVersion != null)
                message.windsurfVersion = String(object.windsurfVersion);
            if (object.hardwareInfo != null)
                message.hardwareInfo = String(object.hardwareInfo);
            if (object.windsurfName != null)
                message.windsurfName = String(object.windsurfName);
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a Metadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ChatMessage.Metadata
         * @static
         * @param {ChatMessage.Metadata} message Metadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Metadata.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.codeiumVersion = "";
                object.userId = "";
                object.lang = "";
                object.os = "";
                object.windsurfVersion = "";
                object.hardwareInfo = "";
                object.windsurfName = "";
                object.token = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.codeiumVersion != null && message.hasOwnProperty("codeiumVersion"))
                object.codeiumVersion = message.codeiumVersion;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.lang != null && message.hasOwnProperty("lang"))
                object.lang = message.lang;
            if (message.os != null && message.hasOwnProperty("os"))
                object.os = message.os;
            if (message.windsurfVersion != null && message.hasOwnProperty("windsurfVersion"))
                object.windsurfVersion = message.windsurfVersion;
            if (message.hardwareInfo != null && message.hasOwnProperty("hardwareInfo"))
                object.hardwareInfo = message.hardwareInfo;
            if (message.windsurfName != null && message.hasOwnProperty("windsurfName"))
                object.windsurfName = message.windsurfName;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this Metadata to JSON.
         * @function toJSON
         * @memberof ChatMessage.Metadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Metadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Metadata
         * @function getTypeUrl
         * @memberof ChatMessage.Metadata
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Metadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ChatMessage.Metadata";
        };

        return Metadata;
    })();

    ChatMessage.UserMessage = (function() {

        /**
         * Properties of a UserMessage.
         * @memberof ChatMessage
         * @interface IUserMessage
         * @property {number|null} [role] UserMessage role
         * @property {string|null} [content] UserMessage content
         * @property {number|null} [token] UserMessage token
         * @property {number|null} [unknown5] UserMessage unknown5
         * @property {ChatMessage.UserMessage.IUnknown8|null} [unknown8] UserMessage unknown8
         */

        /**
         * Constructs a new UserMessage.
         * @memberof ChatMessage
         * @classdesc Represents a UserMessage.
         * @implements IUserMessage
         * @constructor
         * @param {ChatMessage.IUserMessage=} [properties] Properties to set
         */
        function UserMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserMessage role.
         * @member {number} role
         * @memberof ChatMessage.UserMessage
         * @instance
         */
        UserMessage.prototype.role = 0;

        /**
         * UserMessage content.
         * @member {string} content
         * @memberof ChatMessage.UserMessage
         * @instance
         */
        UserMessage.prototype.content = "";

        /**
         * UserMessage token.
         * @member {number} token
         * @memberof ChatMessage.UserMessage
         * @instance
         */
        UserMessage.prototype.token = 0;

        /**
         * UserMessage unknown5.
         * @member {number} unknown5
         * @memberof ChatMessage.UserMessage
         * @instance
         */
        UserMessage.prototype.unknown5 = 0;

        /**
         * UserMessage unknown8.
         * @member {ChatMessage.UserMessage.IUnknown8|null|undefined} unknown8
         * @memberof ChatMessage.UserMessage
         * @instance
         */
        UserMessage.prototype.unknown8 = null;

        /**
         * Creates a new UserMessage instance using the specified properties.
         * @function create
         * @memberof ChatMessage.UserMessage
         * @static
         * @param {ChatMessage.IUserMessage=} [properties] Properties to set
         * @returns {ChatMessage.UserMessage} UserMessage instance
         */
        UserMessage.create = function create(properties) {
            return new UserMessage(properties);
        };

        /**
         * Encodes the specified UserMessage message. Does not implicitly {@link ChatMessage.UserMessage.verify|verify} messages.
         * @function encode
         * @memberof ChatMessage.UserMessage
         * @static
         * @param {ChatMessage.IUserMessage} message UserMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.role);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.content);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.token);
            if (message.unknown5 != null && Object.hasOwnProperty.call(message, "unknown5"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.unknown5);
            if (message.unknown8 != null && Object.hasOwnProperty.call(message, "unknown8"))
                $root.ChatMessage.UserMessage.Unknown8.encode(message.unknown8, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserMessage message, length delimited. Does not implicitly {@link ChatMessage.UserMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ChatMessage.UserMessage
         * @static
         * @param {ChatMessage.IUserMessage} message UserMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserMessage message from the specified reader or buffer.
         * @function decode
         * @memberof ChatMessage.UserMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ChatMessage.UserMessage} UserMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatMessage.UserMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.role = reader.uint32();
                        break;
                    }
                case 3: {
                        message.content = reader.string();
                        break;
                    }
                case 4: {
                        message.token = reader.uint32();
                        break;
                    }
                case 5: {
                        message.unknown5 = reader.uint32();
                        break;
                    }
                case 8: {
                        message.unknown8 = $root.ChatMessage.UserMessage.Unknown8.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ChatMessage.UserMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ChatMessage.UserMessage} UserMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserMessage message.
         * @function verify
         * @memberof ChatMessage.UserMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.role != null && message.hasOwnProperty("role"))
                if (!$util.isInteger(message.role))
                    return "role: integer expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isInteger(message.token))
                    return "token: integer expected";
            if (message.unknown5 != null && message.hasOwnProperty("unknown5"))
                if (!$util.isInteger(message.unknown5))
                    return "unknown5: integer expected";
            if (message.unknown8 != null && message.hasOwnProperty("unknown8")) {
                var error = $root.ChatMessage.UserMessage.Unknown8.verify(message.unknown8);
                if (error)
                    return "unknown8." + error;
            }
            return null;
        };

        /**
         * Creates a UserMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ChatMessage.UserMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ChatMessage.UserMessage} UserMessage
         */
        UserMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.ChatMessage.UserMessage)
                return object;
            var message = new $root.ChatMessage.UserMessage();
            if (object.role != null)
                message.role = object.role >>> 0;
            if (object.content != null)
                message.content = String(object.content);
            if (object.token != null)
                message.token = object.token >>> 0;
            if (object.unknown5 != null)
                message.unknown5 = object.unknown5 >>> 0;
            if (object.unknown8 != null) {
                if (typeof object.unknown8 !== "object")
                    throw TypeError(".ChatMessage.UserMessage.unknown8: object expected");
                message.unknown8 = $root.ChatMessage.UserMessage.Unknown8.fromObject(object.unknown8);
            }
            return message;
        };

        /**
         * Creates a plain object from a UserMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ChatMessage.UserMessage
         * @static
         * @param {ChatMessage.UserMessage} message UserMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.role = 0;
                object.content = "";
                object.token = 0;
                object.unknown5 = 0;
                object.unknown8 = null;
            }
            if (message.role != null && message.hasOwnProperty("role"))
                object.role = message.role;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.unknown5 != null && message.hasOwnProperty("unknown5"))
                object.unknown5 = message.unknown5;
            if (message.unknown8 != null && message.hasOwnProperty("unknown8"))
                object.unknown8 = $root.ChatMessage.UserMessage.Unknown8.toObject(message.unknown8, options);
            return object;
        };

        /**
         * Converts this UserMessage to JSON.
         * @function toJSON
         * @memberof ChatMessage.UserMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UserMessage
         * @function getTypeUrl
         * @memberof ChatMessage.UserMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UserMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ChatMessage.UserMessage";
        };

        UserMessage.Unknown8 = (function() {

            /**
             * Properties of an Unknown8.
             * @memberof ChatMessage.UserMessage
             * @interface IUnknown8
             * @property {number|null} [value] Unknown8 value
             */

            /**
             * Constructs a new Unknown8.
             * @memberof ChatMessage.UserMessage
             * @classdesc Represents an Unknown8.
             * @implements IUnknown8
             * @constructor
             * @param {ChatMessage.UserMessage.IUnknown8=} [properties] Properties to set
             */
            function Unknown8(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Unknown8 value.
             * @member {number} value
             * @memberof ChatMessage.UserMessage.Unknown8
             * @instance
             */
            Unknown8.prototype.value = 0;

            /**
             * Creates a new Unknown8 instance using the specified properties.
             * @function create
             * @memberof ChatMessage.UserMessage.Unknown8
             * @static
             * @param {ChatMessage.UserMessage.IUnknown8=} [properties] Properties to set
             * @returns {ChatMessage.UserMessage.Unknown8} Unknown8 instance
             */
            Unknown8.create = function create(properties) {
                return new Unknown8(properties);
            };

            /**
             * Encodes the specified Unknown8 message. Does not implicitly {@link ChatMessage.UserMessage.Unknown8.verify|verify} messages.
             * @function encode
             * @memberof ChatMessage.UserMessage.Unknown8
             * @static
             * @param {ChatMessage.UserMessage.IUnknown8} message Unknown8 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Unknown8.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.value);
                return writer;
            };

            /**
             * Encodes the specified Unknown8 message, length delimited. Does not implicitly {@link ChatMessage.UserMessage.Unknown8.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ChatMessage.UserMessage.Unknown8
             * @static
             * @param {ChatMessage.UserMessage.IUnknown8} message Unknown8 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Unknown8.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Unknown8 message from the specified reader or buffer.
             * @function decode
             * @memberof ChatMessage.UserMessage.Unknown8
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ChatMessage.UserMessage.Unknown8} Unknown8
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Unknown8.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatMessage.UserMessage.Unknown8();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Unknown8 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ChatMessage.UserMessage.Unknown8
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ChatMessage.UserMessage.Unknown8} Unknown8
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Unknown8.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Unknown8 message.
             * @function verify
             * @memberof ChatMessage.UserMessage.Unknown8
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Unknown8.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value))
                        return "value: integer expected";
                return null;
            };

            /**
             * Creates an Unknown8 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ChatMessage.UserMessage.Unknown8
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ChatMessage.UserMessage.Unknown8} Unknown8
             */
            Unknown8.fromObject = function fromObject(object) {
                if (object instanceof $root.ChatMessage.UserMessage.Unknown8)
                    return object;
                var message = new $root.ChatMessage.UserMessage.Unknown8();
                if (object.value != null)
                    message.value = object.value >>> 0;
                return message;
            };

            /**
             * Creates a plain object from an Unknown8 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ChatMessage.UserMessage.Unknown8
             * @static
             * @param {ChatMessage.UserMessage.Unknown8} message Unknown8
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Unknown8.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this Unknown8 to JSON.
             * @function toJSON
             * @memberof ChatMessage.UserMessage.Unknown8
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Unknown8.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Unknown8
             * @function getTypeUrl
             * @memberof ChatMessage.UserMessage.Unknown8
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Unknown8.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ChatMessage.UserMessage.Unknown8";
            };

            return Unknown8;
        })();

        return UserMessage;
    })();

    ChatMessage.Configuration = (function() {

        /**
         * Properties of a Configuration.
         * @memberof ChatMessage
         * @interface IConfiguration
         * @property {number|null} [unknown1] Configuration unknown1
         * @property {number|null} [maxTokens] Configuration maxTokens
         * @property {number|null} [topK] Configuration topK
         * @property {number|null} [frequencyPenalty] Configuration frequencyPenalty
         * @property {number|null} [temperature] Configuration temperature
         * @property {number|null} [unknown7] Configuration unknown7
         * @property {number|null} [topP] Configuration topP
         * @property {Array.<string>|null} [stop] Configuration stop
         * @property {number|null} [presencePenalty] Configuration presencePenalty
         */

        /**
         * Constructs a new Configuration.
         * @memberof ChatMessage
         * @classdesc Represents a Configuration.
         * @implements IConfiguration
         * @constructor
         * @param {ChatMessage.IConfiguration=} [properties] Properties to set
         */
        function Configuration(properties) {
            this.stop = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Configuration unknown1.
         * @member {number} unknown1
         * @memberof ChatMessage.Configuration
         * @instance
         */
        Configuration.prototype.unknown1 = 0;

        /**
         * Configuration maxTokens.
         * @member {number} maxTokens
         * @memberof ChatMessage.Configuration
         * @instance
         */
        Configuration.prototype.maxTokens = 0;

        /**
         * Configuration topK.
         * @member {number} topK
         * @memberof ChatMessage.Configuration
         * @instance
         */
        Configuration.prototype.topK = 0;

        /**
         * Configuration frequencyPenalty.
         * @member {number} frequencyPenalty
         * @memberof ChatMessage.Configuration
         * @instance
         */
        Configuration.prototype.frequencyPenalty = 0;

        /**
         * Configuration temperature.
         * @member {number} temperature
         * @memberof ChatMessage.Configuration
         * @instance
         */
        Configuration.prototype.temperature = 0;

        /**
         * Configuration unknown7.
         * @member {number} unknown7
         * @memberof ChatMessage.Configuration
         * @instance
         */
        Configuration.prototype.unknown7 = 0;

        /**
         * Configuration topP.
         * @member {number} topP
         * @memberof ChatMessage.Configuration
         * @instance
         */
        Configuration.prototype.topP = 0;

        /**
         * Configuration stop.
         * @member {Array.<string>} stop
         * @memberof ChatMessage.Configuration
         * @instance
         */
        Configuration.prototype.stop = $util.emptyArray;

        /**
         * Configuration presencePenalty.
         * @member {number} presencePenalty
         * @memberof ChatMessage.Configuration
         * @instance
         */
        Configuration.prototype.presencePenalty = 0;

        /**
         * Creates a new Configuration instance using the specified properties.
         * @function create
         * @memberof ChatMessage.Configuration
         * @static
         * @param {ChatMessage.IConfiguration=} [properties] Properties to set
         * @returns {ChatMessage.Configuration} Configuration instance
         */
        Configuration.create = function create(properties) {
            return new Configuration(properties);
        };

        /**
         * Encodes the specified Configuration message. Does not implicitly {@link ChatMessage.Configuration.verify|verify} messages.
         * @function encode
         * @memberof ChatMessage.Configuration
         * @static
         * @param {ChatMessage.IConfiguration} message Configuration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Configuration.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.unknown1 != null && Object.hasOwnProperty.call(message, "unknown1"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.unknown1);
            if (message.maxTokens != null && Object.hasOwnProperty.call(message, "maxTokens"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.maxTokens);
            if (message.topK != null && Object.hasOwnProperty.call(message, "topK"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.topK);
            if (message.frequencyPenalty != null && Object.hasOwnProperty.call(message, "frequencyPenalty"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.frequencyPenalty);
            if (message.temperature != null && Object.hasOwnProperty.call(message, "temperature"))
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.temperature);
            if (message.unknown7 != null && Object.hasOwnProperty.call(message, "unknown7"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.unknown7);
            if (message.topP != null && Object.hasOwnProperty.call(message, "topP"))
                writer.uint32(/* id 8, wireType 1 =*/65).double(message.topP);
            if (message.stop != null && message.stop.length)
                for (var i = 0; i < message.stop.length; ++i)
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.stop[i]);
            if (message.presencePenalty != null && Object.hasOwnProperty.call(message, "presencePenalty"))
                writer.uint32(/* id 11, wireType 1 =*/89).double(message.presencePenalty);
            return writer;
        };

        /**
         * Encodes the specified Configuration message, length delimited. Does not implicitly {@link ChatMessage.Configuration.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ChatMessage.Configuration
         * @static
         * @param {ChatMessage.IConfiguration} message Configuration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Configuration.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Configuration message from the specified reader or buffer.
         * @function decode
         * @memberof ChatMessage.Configuration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ChatMessage.Configuration} Configuration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Configuration.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatMessage.Configuration();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.unknown1 = reader.uint32();
                        break;
                    }
                case 2: {
                        message.maxTokens = reader.uint32();
                        break;
                    }
                case 3: {
                        message.topK = reader.uint32();
                        break;
                    }
                case 5: {
                        message.frequencyPenalty = reader.double();
                        break;
                    }
                case 6: {
                        message.temperature = reader.double();
                        break;
                    }
                case 7: {
                        message.unknown7 = reader.uint32();
                        break;
                    }
                case 8: {
                        message.topP = reader.double();
                        break;
                    }
                case 9: {
                        if (!(message.stop && message.stop.length))
                            message.stop = [];
                        message.stop.push(reader.string());
                        break;
                    }
                case 11: {
                        message.presencePenalty = reader.double();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Configuration message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ChatMessage.Configuration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ChatMessage.Configuration} Configuration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Configuration.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Configuration message.
         * @function verify
         * @memberof ChatMessage.Configuration
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Configuration.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.unknown1 != null && message.hasOwnProperty("unknown1"))
                if (!$util.isInteger(message.unknown1))
                    return "unknown1: integer expected";
            if (message.maxTokens != null && message.hasOwnProperty("maxTokens"))
                if (!$util.isInteger(message.maxTokens))
                    return "maxTokens: integer expected";
            if (message.topK != null && message.hasOwnProperty("topK"))
                if (!$util.isInteger(message.topK))
                    return "topK: integer expected";
            if (message.frequencyPenalty != null && message.hasOwnProperty("frequencyPenalty"))
                if (typeof message.frequencyPenalty !== "number")
                    return "frequencyPenalty: number expected";
            if (message.temperature != null && message.hasOwnProperty("temperature"))
                if (typeof message.temperature !== "number")
                    return "temperature: number expected";
            if (message.unknown7 != null && message.hasOwnProperty("unknown7"))
                if (!$util.isInteger(message.unknown7))
                    return "unknown7: integer expected";
            if (message.topP != null && message.hasOwnProperty("topP"))
                if (typeof message.topP !== "number")
                    return "topP: number expected";
            if (message.stop != null && message.hasOwnProperty("stop")) {
                if (!Array.isArray(message.stop))
                    return "stop: array expected";
                for (var i = 0; i < message.stop.length; ++i)
                    if (!$util.isString(message.stop[i]))
                        return "stop: string[] expected";
            }
            if (message.presencePenalty != null && message.hasOwnProperty("presencePenalty"))
                if (typeof message.presencePenalty !== "number")
                    return "presencePenalty: number expected";
            return null;
        };

        /**
         * Creates a Configuration message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ChatMessage.Configuration
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ChatMessage.Configuration} Configuration
         */
        Configuration.fromObject = function fromObject(object) {
            if (object instanceof $root.ChatMessage.Configuration)
                return object;
            var message = new $root.ChatMessage.Configuration();
            if (object.unknown1 != null)
                message.unknown1 = object.unknown1 >>> 0;
            if (object.maxTokens != null)
                message.maxTokens = object.maxTokens >>> 0;
            if (object.topK != null)
                message.topK = object.topK >>> 0;
            if (object.frequencyPenalty != null)
                message.frequencyPenalty = Number(object.frequencyPenalty);
            if (object.temperature != null)
                message.temperature = Number(object.temperature);
            if (object.unknown7 != null)
                message.unknown7 = object.unknown7 >>> 0;
            if (object.topP != null)
                message.topP = Number(object.topP);
            if (object.stop) {
                if (!Array.isArray(object.stop))
                    throw TypeError(".ChatMessage.Configuration.stop: array expected");
                message.stop = [];
                for (var i = 0; i < object.stop.length; ++i)
                    message.stop[i] = String(object.stop[i]);
            }
            if (object.presencePenalty != null)
                message.presencePenalty = Number(object.presencePenalty);
            return message;
        };

        /**
         * Creates a plain object from a Configuration message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ChatMessage.Configuration
         * @static
         * @param {ChatMessage.Configuration} message Configuration
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Configuration.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.stop = [];
            if (options.defaults) {
                object.unknown1 = 0;
                object.maxTokens = 0;
                object.topK = 0;
                object.frequencyPenalty = 0;
                object.temperature = 0;
                object.unknown7 = 0;
                object.topP = 0;
                object.presencePenalty = 0;
            }
            if (message.unknown1 != null && message.hasOwnProperty("unknown1"))
                object.unknown1 = message.unknown1;
            if (message.maxTokens != null && message.hasOwnProperty("maxTokens"))
                object.maxTokens = message.maxTokens;
            if (message.topK != null && message.hasOwnProperty("topK"))
                object.topK = message.topK;
            if (message.frequencyPenalty != null && message.hasOwnProperty("frequencyPenalty"))
                object.frequencyPenalty = options.json && !isFinite(message.frequencyPenalty) ? String(message.frequencyPenalty) : message.frequencyPenalty;
            if (message.temperature != null && message.hasOwnProperty("temperature"))
                object.temperature = options.json && !isFinite(message.temperature) ? String(message.temperature) : message.temperature;
            if (message.unknown7 != null && message.hasOwnProperty("unknown7"))
                object.unknown7 = message.unknown7;
            if (message.topP != null && message.hasOwnProperty("topP"))
                object.topP = options.json && !isFinite(message.topP) ? String(message.topP) : message.topP;
            if (message.stop && message.stop.length) {
                object.stop = [];
                for (var j = 0; j < message.stop.length; ++j)
                    object.stop[j] = message.stop[j];
            }
            if (message.presencePenalty != null && message.hasOwnProperty("presencePenalty"))
                object.presencePenalty = options.json && !isFinite(message.presencePenalty) ? String(message.presencePenalty) : message.presencePenalty;
            return object;
        };

        /**
         * Converts this Configuration to JSON.
         * @function toJSON
         * @memberof ChatMessage.Configuration
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Configuration.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Configuration
         * @function getTypeUrl
         * @memberof ChatMessage.Configuration
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Configuration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ChatMessage.Configuration";
        };

        return Configuration;
    })();

    ChatMessage.Tool = (function() {

        /**
         * Properties of a Tool.
         * @memberof ChatMessage
         * @interface ITool
         * @property {string|null} [name] Tool name
         * @property {string|null} [desc] Tool desc
         * @property {string|null} [schema] Tool schema
         */

        /**
         * Constructs a new Tool.
         * @memberof ChatMessage
         * @classdesc Represents a Tool.
         * @implements ITool
         * @constructor
         * @param {ChatMessage.ITool=} [properties] Properties to set
         */
        function Tool(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Tool name.
         * @member {string} name
         * @memberof ChatMessage.Tool
         * @instance
         */
        Tool.prototype.name = "";

        /**
         * Tool desc.
         * @member {string} desc
         * @memberof ChatMessage.Tool
         * @instance
         */
        Tool.prototype.desc = "";

        /**
         * Tool schema.
         * @member {string} schema
         * @memberof ChatMessage.Tool
         * @instance
         */
        Tool.prototype.schema = "";

        /**
         * Creates a new Tool instance using the specified properties.
         * @function create
         * @memberof ChatMessage.Tool
         * @static
         * @param {ChatMessage.ITool=} [properties] Properties to set
         * @returns {ChatMessage.Tool} Tool instance
         */
        Tool.create = function create(properties) {
            return new Tool(properties);
        };

        /**
         * Encodes the specified Tool message. Does not implicitly {@link ChatMessage.Tool.verify|verify} messages.
         * @function encode
         * @memberof ChatMessage.Tool
         * @static
         * @param {ChatMessage.ITool} message Tool message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Tool.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.desc != null && Object.hasOwnProperty.call(message, "desc"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.desc);
            if (message.schema != null && Object.hasOwnProperty.call(message, "schema"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.schema);
            return writer;
        };

        /**
         * Encodes the specified Tool message, length delimited. Does not implicitly {@link ChatMessage.Tool.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ChatMessage.Tool
         * @static
         * @param {ChatMessage.ITool} message Tool message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Tool.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Tool message from the specified reader or buffer.
         * @function decode
         * @memberof ChatMessage.Tool
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ChatMessage.Tool} Tool
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Tool.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatMessage.Tool();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.desc = reader.string();
                        break;
                    }
                case 3: {
                        message.schema = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Tool message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ChatMessage.Tool
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ChatMessage.Tool} Tool
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Tool.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Tool message.
         * @function verify
         * @memberof ChatMessage.Tool
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Tool.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.desc != null && message.hasOwnProperty("desc"))
                if (!$util.isString(message.desc))
                    return "desc: string expected";
            if (message.schema != null && message.hasOwnProperty("schema"))
                if (!$util.isString(message.schema))
                    return "schema: string expected";
            return null;
        };

        /**
         * Creates a Tool message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ChatMessage.Tool
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ChatMessage.Tool} Tool
         */
        Tool.fromObject = function fromObject(object) {
            if (object instanceof $root.ChatMessage.Tool)
                return object;
            var message = new $root.ChatMessage.Tool();
            if (object.name != null)
                message.name = String(object.name);
            if (object.desc != null)
                message.desc = String(object.desc);
            if (object.schema != null)
                message.schema = String(object.schema);
            return message;
        };

        /**
         * Creates a plain object from a Tool message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ChatMessage.Tool
         * @static
         * @param {ChatMessage.Tool} message Tool
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Tool.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.desc = "";
                object.schema = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.desc != null && message.hasOwnProperty("desc"))
                object.desc = message.desc;
            if (message.schema != null && message.hasOwnProperty("schema"))
                object.schema = message.schema;
            return object;
        };

        /**
         * Converts this Tool to JSON.
         * @function toJSON
         * @memberof ChatMessage.Tool
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Tool.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Tool
         * @function getTypeUrl
         * @memberof ChatMessage.Tool
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Tool.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ChatMessage.Tool";
        };

        return Tool;
    })();

    ChatMessage.ToolChoice = (function() {

        /**
         * Properties of a ToolChoice.
         * @memberof ChatMessage
         * @interface IToolChoice
         * @property {string|null} [value] ToolChoice value
         */

        /**
         * Constructs a new ToolChoice.
         * @memberof ChatMessage
         * @classdesc Represents a ToolChoice.
         * @implements IToolChoice
         * @constructor
         * @param {ChatMessage.IToolChoice=} [properties] Properties to set
         */
        function ToolChoice(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ToolChoice value.
         * @member {string} value
         * @memberof ChatMessage.ToolChoice
         * @instance
         */
        ToolChoice.prototype.value = "";

        /**
         * Creates a new ToolChoice instance using the specified properties.
         * @function create
         * @memberof ChatMessage.ToolChoice
         * @static
         * @param {ChatMessage.IToolChoice=} [properties] Properties to set
         * @returns {ChatMessage.ToolChoice} ToolChoice instance
         */
        ToolChoice.create = function create(properties) {
            return new ToolChoice(properties);
        };

        /**
         * Encodes the specified ToolChoice message. Does not implicitly {@link ChatMessage.ToolChoice.verify|verify} messages.
         * @function encode
         * @memberof ChatMessage.ToolChoice
         * @static
         * @param {ChatMessage.IToolChoice} message ToolChoice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ToolChoice.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
            return writer;
        };

        /**
         * Encodes the specified ToolChoice message, length delimited. Does not implicitly {@link ChatMessage.ToolChoice.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ChatMessage.ToolChoice
         * @static
         * @param {ChatMessage.IToolChoice} message ToolChoice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ToolChoice.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ToolChoice message from the specified reader or buffer.
         * @function decode
         * @memberof ChatMessage.ToolChoice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ChatMessage.ToolChoice} ToolChoice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ToolChoice.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatMessage.ToolChoice();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.value = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ToolChoice message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ChatMessage.ToolChoice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ChatMessage.ToolChoice} ToolChoice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ToolChoice.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ToolChoice message.
         * @function verify
         * @memberof ChatMessage.ToolChoice
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ToolChoice.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            return null;
        };

        /**
         * Creates a ToolChoice message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ChatMessage.ToolChoice
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ChatMessage.ToolChoice} ToolChoice
         */
        ToolChoice.fromObject = function fromObject(object) {
            if (object instanceof $root.ChatMessage.ToolChoice)
                return object;
            var message = new $root.ChatMessage.ToolChoice();
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };

        /**
         * Creates a plain object from a ToolChoice message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ChatMessage.ToolChoice
         * @static
         * @param {ChatMessage.ToolChoice} message ToolChoice
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ToolChoice.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.value = "";
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this ToolChoice to JSON.
         * @function toJSON
         * @memberof ChatMessage.ToolChoice
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ToolChoice.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ToolChoice
         * @function getTypeUrl
         * @memberof ChatMessage.ToolChoice
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ToolChoice.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ChatMessage.ToolChoice";
        };

        return ToolChoice;
    })();

    ChatMessage.Unknown13 = (function() {

        /**
         * Properties of an Unknown13.
         * @memberof ChatMessage
         * @interface IUnknown13
         * @property {number|null} [value] Unknown13 value
         */

        /**
         * Constructs a new Unknown13.
         * @memberof ChatMessage
         * @classdesc Represents an Unknown13.
         * @implements IUnknown13
         * @constructor
         * @param {ChatMessage.IUnknown13=} [properties] Properties to set
         */
        function Unknown13(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Unknown13 value.
         * @member {number} value
         * @memberof ChatMessage.Unknown13
         * @instance
         */
        Unknown13.prototype.value = 0;

        /**
         * Creates a new Unknown13 instance using the specified properties.
         * @function create
         * @memberof ChatMessage.Unknown13
         * @static
         * @param {ChatMessage.IUnknown13=} [properties] Properties to set
         * @returns {ChatMessage.Unknown13} Unknown13 instance
         */
        Unknown13.create = function create(properties) {
            return new Unknown13(properties);
        };

        /**
         * Encodes the specified Unknown13 message. Does not implicitly {@link ChatMessage.Unknown13.verify|verify} messages.
         * @function encode
         * @memberof ChatMessage.Unknown13
         * @static
         * @param {ChatMessage.IUnknown13} message Unknown13 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Unknown13.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.value);
            return writer;
        };

        /**
         * Encodes the specified Unknown13 message, length delimited. Does not implicitly {@link ChatMessage.Unknown13.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ChatMessage.Unknown13
         * @static
         * @param {ChatMessage.IUnknown13} message Unknown13 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Unknown13.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Unknown13 message from the specified reader or buffer.
         * @function decode
         * @memberof ChatMessage.Unknown13
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ChatMessage.Unknown13} Unknown13
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Unknown13.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatMessage.Unknown13();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.value = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Unknown13 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ChatMessage.Unknown13
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ChatMessage.Unknown13} Unknown13
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Unknown13.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Unknown13 message.
         * @function verify
         * @memberof ChatMessage.Unknown13
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Unknown13.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value))
                    return "value: integer expected";
            return null;
        };

        /**
         * Creates an Unknown13 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ChatMessage.Unknown13
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ChatMessage.Unknown13} Unknown13
         */
        Unknown13.fromObject = function fromObject(object) {
            if (object instanceof $root.ChatMessage.Unknown13)
                return object;
            var message = new $root.ChatMessage.Unknown13();
            if (object.value != null)
                message.value = object.value >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an Unknown13 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ChatMessage.Unknown13
         * @static
         * @param {ChatMessage.Unknown13} message Unknown13
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Unknown13.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.value = 0;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this Unknown13 to JSON.
         * @function toJSON
         * @memberof ChatMessage.Unknown13
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Unknown13.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Unknown13
         * @function getTypeUrl
         * @memberof ChatMessage.Unknown13
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Unknown13.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ChatMessage.Unknown13";
        };

        return Unknown13;
    })();

    ChatMessage.Unknown15 = (function() {

        /**
         * Properties of an Unknown15.
         * @memberof ChatMessage
         * @interface IUnknown15
         * @property {string|null} [uuid] Unknown15 uuid
         * @property {number|null} [value] Unknown15 value
         */

        /**
         * Constructs a new Unknown15.
         * @memberof ChatMessage
         * @classdesc Represents an Unknown15.
         * @implements IUnknown15
         * @constructor
         * @param {ChatMessage.IUnknown15=} [properties] Properties to set
         */
        function Unknown15(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Unknown15 uuid.
         * @member {string} uuid
         * @memberof ChatMessage.Unknown15
         * @instance
         */
        Unknown15.prototype.uuid = "";

        /**
         * Unknown15 value.
         * @member {number} value
         * @memberof ChatMessage.Unknown15
         * @instance
         */
        Unknown15.prototype.value = 0;

        /**
         * Creates a new Unknown15 instance using the specified properties.
         * @function create
         * @memberof ChatMessage.Unknown15
         * @static
         * @param {ChatMessage.IUnknown15=} [properties] Properties to set
         * @returns {ChatMessage.Unknown15} Unknown15 instance
         */
        Unknown15.create = function create(properties) {
            return new Unknown15(properties);
        };

        /**
         * Encodes the specified Unknown15 message. Does not implicitly {@link ChatMessage.Unknown15.verify|verify} messages.
         * @function encode
         * @memberof ChatMessage.Unknown15
         * @static
         * @param {ChatMessage.IUnknown15} message Unknown15 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Unknown15.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.value);
            return writer;
        };

        /**
         * Encodes the specified Unknown15 message, length delimited. Does not implicitly {@link ChatMessage.Unknown15.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ChatMessage.Unknown15
         * @static
         * @param {ChatMessage.IUnknown15} message Unknown15 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Unknown15.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Unknown15 message from the specified reader or buffer.
         * @function decode
         * @memberof ChatMessage.Unknown15
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ChatMessage.Unknown15} Unknown15
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Unknown15.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatMessage.Unknown15();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.uuid = reader.string();
                        break;
                    }
                case 2: {
                        message.value = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Unknown15 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ChatMessage.Unknown15
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ChatMessage.Unknown15} Unknown15
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Unknown15.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Unknown15 message.
         * @function verify
         * @memberof ChatMessage.Unknown15
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Unknown15.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value))
                    return "value: integer expected";
            return null;
        };

        /**
         * Creates an Unknown15 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ChatMessage.Unknown15
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ChatMessage.Unknown15} Unknown15
         */
        Unknown15.fromObject = function fromObject(object) {
            if (object instanceof $root.ChatMessage.Unknown15)
                return object;
            var message = new $root.ChatMessage.Unknown15();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.value != null)
                message.value = object.value >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an Unknown15 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ChatMessage.Unknown15
         * @static
         * @param {ChatMessage.Unknown15} message Unknown15
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Unknown15.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uuid = "";
                object.value = 0;
            }
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this Unknown15 to JSON.
         * @function toJSON
         * @memberof ChatMessage.Unknown15
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Unknown15.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Unknown15
         * @function getTypeUrl
         * @memberof ChatMessage.Unknown15
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Unknown15.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ChatMessage.Unknown15";
        };

        return Unknown15;
    })();

    return ChatMessage;
})();

$root.ResMessage = (function() {

    /**
     * Properties of a ResMessage.
     * @exports IResMessage
     * @interface IResMessage
     * @property {string|null} [botId] ResMessage botId
     * @property {ResMessage.ITimestamp|null} [timestamp] ResMessage timestamp
     * @property {string|null} [message] ResMessage message
     * @property {number|null} [unknown4] ResMessage unknown4
     */

    /**
     * Constructs a new ResMessage.
     * @exports ResMessage
     * @classdesc Represents a ResMessage.
     * @implements IResMessage
     * @constructor
     * @param {IResMessage=} [properties] Properties to set
     */
    function ResMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ResMessage botId.
     * @member {string} botId
     * @memberof ResMessage
     * @instance
     */
    ResMessage.prototype.botId = "";

    /**
     * ResMessage timestamp.
     * @member {ResMessage.ITimestamp|null|undefined} timestamp
     * @memberof ResMessage
     * @instance
     */
    ResMessage.prototype.timestamp = null;

    /**
     * ResMessage message.
     * @member {string} message
     * @memberof ResMessage
     * @instance
     */
    ResMessage.prototype.message = "";

    /**
     * ResMessage unknown4.
     * @member {number} unknown4
     * @memberof ResMessage
     * @instance
     */
    ResMessage.prototype.unknown4 = 0;

    /**
     * Creates a new ResMessage instance using the specified properties.
     * @function create
     * @memberof ResMessage
     * @static
     * @param {IResMessage=} [properties] Properties to set
     * @returns {ResMessage} ResMessage instance
     */
    ResMessage.create = function create(properties) {
        return new ResMessage(properties);
    };

    /**
     * Encodes the specified ResMessage message. Does not implicitly {@link ResMessage.verify|verify} messages.
     * @function encode
     * @memberof ResMessage
     * @static
     * @param {IResMessage} message ResMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.botId != null && Object.hasOwnProperty.call(message, "botId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.botId);
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            $root.ResMessage.Timestamp.encode(message.timestamp, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
        if (message.unknown4 != null && Object.hasOwnProperty.call(message, "unknown4"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.unknown4);
        return writer;
    };

    /**
     * Encodes the specified ResMessage message, length delimited. Does not implicitly {@link ResMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResMessage
     * @static
     * @param {IResMessage} message ResMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ResMessage message from the specified reader or buffer.
     * @function decode
     * @memberof ResMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResMessage} ResMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.botId = reader.string();
                    break;
                }
            case 2: {
                    message.timestamp = $root.ResMessage.Timestamp.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.message = reader.string();
                    break;
                }
            case 4: {
                    message.unknown4 = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ResMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResMessage} ResMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ResMessage message.
     * @function verify
     * @memberof ResMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.botId != null && message.hasOwnProperty("botId"))
            if (!$util.isString(message.botId))
                return "botId: string expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
            var error = $root.ResMessage.Timestamp.verify(message.timestamp);
            if (error)
                return "timestamp." + error;
        }
        if (message.message != null && message.hasOwnProperty("message"))
            if (!$util.isString(message.message))
                return "message: string expected";
        if (message.unknown4 != null && message.hasOwnProperty("unknown4"))
            if (!$util.isInteger(message.unknown4))
                return "unknown4: integer expected";
        return null;
    };

    /**
     * Creates a ResMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResMessage} ResMessage
     */
    ResMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ResMessage)
            return object;
        var message = new $root.ResMessage();
        if (object.botId != null)
            message.botId = String(object.botId);
        if (object.timestamp != null) {
            if (typeof object.timestamp !== "object")
                throw TypeError(".ResMessage.timestamp: object expected");
            message.timestamp = $root.ResMessage.Timestamp.fromObject(object.timestamp);
        }
        if (object.message != null)
            message.message = String(object.message);
        if (object.unknown4 != null)
            message.unknown4 = object.unknown4 >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a ResMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResMessage
     * @static
     * @param {ResMessage} message ResMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.botId = "";
            object.timestamp = null;
            object.message = "";
            object.unknown4 = 0;
        }
        if (message.botId != null && message.hasOwnProperty("botId"))
            object.botId = message.botId;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            object.timestamp = $root.ResMessage.Timestamp.toObject(message.timestamp, options);
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = message.message;
        if (message.unknown4 != null && message.hasOwnProperty("unknown4"))
            object.unknown4 = message.unknown4;
        return object;
    };

    /**
     * Converts this ResMessage to JSON.
     * @function toJSON
     * @memberof ResMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ResMessage
     * @function getTypeUrl
     * @memberof ResMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResMessage";
    };

    ResMessage.Timestamp = (function() {

        /**
         * Properties of a Timestamp.
         * @memberof ResMessage
         * @interface ITimestamp
         * @property {number|null} [timestamp] Timestamp timestamp
         * @property {number|null} [value2] Timestamp value2
         */

        /**
         * Constructs a new Timestamp.
         * @memberof ResMessage
         * @classdesc Represents a Timestamp.
         * @implements ITimestamp
         * @constructor
         * @param {ResMessage.ITimestamp=} [properties] Properties to set
         */
        function Timestamp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Timestamp timestamp.
         * @member {number} timestamp
         * @memberof ResMessage.Timestamp
         * @instance
         */
        Timestamp.prototype.timestamp = 0;

        /**
         * Timestamp value2.
         * @member {number} value2
         * @memberof ResMessage.Timestamp
         * @instance
         */
        Timestamp.prototype.value2 = 0;

        /**
         * Creates a new Timestamp instance using the specified properties.
         * @function create
         * @memberof ResMessage.Timestamp
         * @static
         * @param {ResMessage.ITimestamp=} [properties] Properties to set
         * @returns {ResMessage.Timestamp} Timestamp instance
         */
        Timestamp.create = function create(properties) {
            return new Timestamp(properties);
        };

        /**
         * Encodes the specified Timestamp message. Does not implicitly {@link ResMessage.Timestamp.verify|verify} messages.
         * @function encode
         * @memberof ResMessage.Timestamp
         * @static
         * @param {ResMessage.ITimestamp} message Timestamp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Timestamp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.timestamp);
            if (message.value2 != null && Object.hasOwnProperty.call(message, "value2"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.value2);
            return writer;
        };

        /**
         * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link ResMessage.Timestamp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResMessage.Timestamp
         * @static
         * @param {ResMessage.ITimestamp} message Timestamp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Timestamp message from the specified reader or buffer.
         * @function decode
         * @memberof ResMessage.Timestamp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResMessage.Timestamp} Timestamp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Timestamp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResMessage.Timestamp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.timestamp = reader.uint32();
                        break;
                    }
                case 2: {
                        message.value2 = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Timestamp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResMessage.Timestamp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResMessage.Timestamp} Timestamp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Timestamp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Timestamp message.
         * @function verify
         * @memberof ResMessage.Timestamp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Timestamp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp))
                    return "timestamp: integer expected";
            if (message.value2 != null && message.hasOwnProperty("value2"))
                if (!$util.isInteger(message.value2))
                    return "value2: integer expected";
            return null;
        };

        /**
         * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ResMessage.Timestamp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ResMessage.Timestamp} Timestamp
         */
        Timestamp.fromObject = function fromObject(object) {
            if (object instanceof $root.ResMessage.Timestamp)
                return object;
            var message = new $root.ResMessage.Timestamp();
            if (object.timestamp != null)
                message.timestamp = object.timestamp >>> 0;
            if (object.value2 != null)
                message.value2 = object.value2 >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ResMessage.Timestamp
         * @static
         * @param {ResMessage.Timestamp} message Timestamp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Timestamp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.timestamp = 0;
                object.value2 = 0;
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = message.timestamp;
            if (message.value2 != null && message.hasOwnProperty("value2"))
                object.value2 = message.value2;
            return object;
        };

        /**
         * Converts this Timestamp to JSON.
         * @function toJSON
         * @memberof ResMessage.Timestamp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Timestamp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Timestamp
         * @function getTypeUrl
         * @memberof ResMessage.Timestamp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Timestamp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ResMessage.Timestamp";
        };

        return Timestamp;
    })();

    return ResMessage;
})();

$root.JwtMessage = (function() {

    /**
     * Properties of a JwtMessage.
     * @exports IJwtMessage
     * @interface IJwtMessage
     * @property {JwtMessage.IJwt|null} [jwt] JwtMessage jwt
     */

    /**
     * Constructs a new JwtMessage.
     * @exports JwtMessage
     * @classdesc Represents a JwtMessage.
     * @implements IJwtMessage
     * @constructor
     * @param {IJwtMessage=} [properties] Properties to set
     */
    function JwtMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * JwtMessage jwt.
     * @member {JwtMessage.IJwt|null|undefined} jwt
     * @memberof JwtMessage
     * @instance
     */
    JwtMessage.prototype.jwt = null;

    /**
     * Creates a new JwtMessage instance using the specified properties.
     * @function create
     * @memberof JwtMessage
     * @static
     * @param {IJwtMessage=} [properties] Properties to set
     * @returns {JwtMessage} JwtMessage instance
     */
    JwtMessage.create = function create(properties) {
        return new JwtMessage(properties);
    };

    /**
     * Encodes the specified JwtMessage message. Does not implicitly {@link JwtMessage.verify|verify} messages.
     * @function encode
     * @memberof JwtMessage
     * @static
     * @param {IJwtMessage} message JwtMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    JwtMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.jwt != null && Object.hasOwnProperty.call(message, "jwt"))
            $root.JwtMessage.Jwt.encode(message.jwt, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified JwtMessage message, length delimited. Does not implicitly {@link JwtMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof JwtMessage
     * @static
     * @param {IJwtMessage} message JwtMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    JwtMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a JwtMessage message from the specified reader or buffer.
     * @function decode
     * @memberof JwtMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {JwtMessage} JwtMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    JwtMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.JwtMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.jwt = $root.JwtMessage.Jwt.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a JwtMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof JwtMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {JwtMessage} JwtMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    JwtMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a JwtMessage message.
     * @function verify
     * @memberof JwtMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    JwtMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.jwt != null && message.hasOwnProperty("jwt")) {
            var error = $root.JwtMessage.Jwt.verify(message.jwt);
            if (error)
                return "jwt." + error;
        }
        return null;
    };

    /**
     * Creates a JwtMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof JwtMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {JwtMessage} JwtMessage
     */
    JwtMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.JwtMessage)
            return object;
        var message = new $root.JwtMessage();
        if (object.jwt != null) {
            if (typeof object.jwt !== "object")
                throw TypeError(".JwtMessage.jwt: object expected");
            message.jwt = $root.JwtMessage.Jwt.fromObject(object.jwt);
        }
        return message;
    };

    /**
     * Creates a plain object from a JwtMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof JwtMessage
     * @static
     * @param {JwtMessage} message JwtMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    JwtMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.jwt = null;
        if (message.jwt != null && message.hasOwnProperty("jwt"))
            object.jwt = $root.JwtMessage.Jwt.toObject(message.jwt, options);
        return object;
    };

    /**
     * Converts this JwtMessage to JSON.
     * @function toJSON
     * @memberof JwtMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    JwtMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for JwtMessage
     * @function getTypeUrl
     * @memberof JwtMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    JwtMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/JwtMessage";
    };

    JwtMessage.Jwt = (function() {

        /**
         * Properties of a Jwt.
         * @memberof JwtMessage
         * @interface IJwt
         * @property {string|null} [name] Jwt name
         * @property {string|null} [codeiumVersion] Jwt codeiumVersion
         * @property {string|null} [userId] Jwt userId
         * @property {string|null} [lang] Jwt lang
         * @property {string|null} [windsurfVersion] Jwt windsurfVersion
         * @property {number|null} [unknown9] Jwt unknown9
         * @property {string|null} [unknown10] Jwt unknown10
         * @property {string|null} [extentionName] Jwt extentionName
         * @property {string|null} [extentionPath] Jwt extentionPath
         * @property {string|null} [extentionVersion] Jwt extentionVersion
         * @property {string|null} [unknown24] Jwt unknown24
         */

        /**
         * Constructs a new Jwt.
         * @memberof JwtMessage
         * @classdesc Represents a Jwt.
         * @implements IJwt
         * @constructor
         * @param {JwtMessage.IJwt=} [properties] Properties to set
         */
        function Jwt(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Jwt name.
         * @member {string} name
         * @memberof JwtMessage.Jwt
         * @instance
         */
        Jwt.prototype.name = "";

        /**
         * Jwt codeiumVersion.
         * @member {string} codeiumVersion
         * @memberof JwtMessage.Jwt
         * @instance
         */
        Jwt.prototype.codeiumVersion = "";

        /**
         * Jwt userId.
         * @member {string} userId
         * @memberof JwtMessage.Jwt
         * @instance
         */
        Jwt.prototype.userId = "";

        /**
         * Jwt lang.
         * @member {string} lang
         * @memberof JwtMessage.Jwt
         * @instance
         */
        Jwt.prototype.lang = "";

        /**
         * Jwt windsurfVersion.
         * @member {string} windsurfVersion
         * @memberof JwtMessage.Jwt
         * @instance
         */
        Jwt.prototype.windsurfVersion = "";

        /**
         * Jwt unknown9.
         * @member {number} unknown9
         * @memberof JwtMessage.Jwt
         * @instance
         */
        Jwt.prototype.unknown9 = 0;

        /**
         * Jwt unknown10.
         * @member {string} unknown10
         * @memberof JwtMessage.Jwt
         * @instance
         */
        Jwt.prototype.unknown10 = "";

        /**
         * Jwt extentionName.
         * @member {string} extentionName
         * @memberof JwtMessage.Jwt
         * @instance
         */
        Jwt.prototype.extentionName = "";

        /**
         * Jwt extentionPath.
         * @member {string} extentionPath
         * @memberof JwtMessage.Jwt
         * @instance
         */
        Jwt.prototype.extentionPath = "";

        /**
         * Jwt extentionVersion.
         * @member {string} extentionVersion
         * @memberof JwtMessage.Jwt
         * @instance
         */
        Jwt.prototype.extentionVersion = "";

        /**
         * Jwt unknown24.
         * @member {string} unknown24
         * @memberof JwtMessage.Jwt
         * @instance
         */
        Jwt.prototype.unknown24 = "";

        /**
         * Creates a new Jwt instance using the specified properties.
         * @function create
         * @memberof JwtMessage.Jwt
         * @static
         * @param {JwtMessage.IJwt=} [properties] Properties to set
         * @returns {JwtMessage.Jwt} Jwt instance
         */
        Jwt.create = function create(properties) {
            return new Jwt(properties);
        };

        /**
         * Encodes the specified Jwt message. Does not implicitly {@link JwtMessage.Jwt.verify|verify} messages.
         * @function encode
         * @memberof JwtMessage.Jwt
         * @static
         * @param {JwtMessage.IJwt} message Jwt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Jwt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.codeiumVersion != null && Object.hasOwnProperty.call(message, "codeiumVersion"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.codeiumVersion);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.userId);
            if (message.lang != null && Object.hasOwnProperty.call(message, "lang"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.lang);
            if (message.windsurfVersion != null && Object.hasOwnProperty.call(message, "windsurfVersion"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.windsurfVersion);
            if (message.unknown9 != null && Object.hasOwnProperty.call(message, "unknown9"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.unknown9);
            if (message.unknown10 != null && Object.hasOwnProperty.call(message, "unknown10"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.unknown10);
            if (message.extentionName != null && Object.hasOwnProperty.call(message, "extentionName"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.extentionName);
            if (message.extentionPath != null && Object.hasOwnProperty.call(message, "extentionPath"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.extentionPath);
            if (message.extentionVersion != null && Object.hasOwnProperty.call(message, "extentionVersion"))
                writer.uint32(/* id 23, wireType 2 =*/186).string(message.extentionVersion);
            if (message.unknown24 != null && Object.hasOwnProperty.call(message, "unknown24"))
                writer.uint32(/* id 24, wireType 2 =*/194).string(message.unknown24);
            return writer;
        };

        /**
         * Encodes the specified Jwt message, length delimited. Does not implicitly {@link JwtMessage.Jwt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof JwtMessage.Jwt
         * @static
         * @param {JwtMessage.IJwt} message Jwt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Jwt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Jwt message from the specified reader or buffer.
         * @function decode
         * @memberof JwtMessage.Jwt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {JwtMessage.Jwt} Jwt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Jwt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.JwtMessage.Jwt();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.codeiumVersion = reader.string();
                        break;
                    }
                case 3: {
                        message.userId = reader.string();
                        break;
                    }
                case 4: {
                        message.lang = reader.string();
                        break;
                    }
                case 7: {
                        message.windsurfVersion = reader.string();
                        break;
                    }
                case 9: {
                        message.unknown9 = reader.uint32();
                        break;
                    }
                case 10: {
                        message.unknown10 = reader.string();
                        break;
                    }
                case 12: {
                        message.extentionName = reader.string();
                        break;
                    }
                case 17: {
                        message.extentionPath = reader.string();
                        break;
                    }
                case 23: {
                        message.extentionVersion = reader.string();
                        break;
                    }
                case 24: {
                        message.unknown24 = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Jwt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof JwtMessage.Jwt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {JwtMessage.Jwt} Jwt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Jwt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Jwt message.
         * @function verify
         * @memberof JwtMessage.Jwt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Jwt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.codeiumVersion != null && message.hasOwnProperty("codeiumVersion"))
                if (!$util.isString(message.codeiumVersion))
                    return "codeiumVersion: string expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.lang != null && message.hasOwnProperty("lang"))
                if (!$util.isString(message.lang))
                    return "lang: string expected";
            if (message.windsurfVersion != null && message.hasOwnProperty("windsurfVersion"))
                if (!$util.isString(message.windsurfVersion))
                    return "windsurfVersion: string expected";
            if (message.unknown9 != null && message.hasOwnProperty("unknown9"))
                if (!$util.isInteger(message.unknown9))
                    return "unknown9: integer expected";
            if (message.unknown10 != null && message.hasOwnProperty("unknown10"))
                if (!$util.isString(message.unknown10))
                    return "unknown10: string expected";
            if (message.extentionName != null && message.hasOwnProperty("extentionName"))
                if (!$util.isString(message.extentionName))
                    return "extentionName: string expected";
            if (message.extentionPath != null && message.hasOwnProperty("extentionPath"))
                if (!$util.isString(message.extentionPath))
                    return "extentionPath: string expected";
            if (message.extentionVersion != null && message.hasOwnProperty("extentionVersion"))
                if (!$util.isString(message.extentionVersion))
                    return "extentionVersion: string expected";
            if (message.unknown24 != null && message.hasOwnProperty("unknown24"))
                if (!$util.isString(message.unknown24))
                    return "unknown24: string expected";
            return null;
        };

        /**
         * Creates a Jwt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof JwtMessage.Jwt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {JwtMessage.Jwt} Jwt
         */
        Jwt.fromObject = function fromObject(object) {
            if (object instanceof $root.JwtMessage.Jwt)
                return object;
            var message = new $root.JwtMessage.Jwt();
            if (object.name != null)
                message.name = String(object.name);
            if (object.codeiumVersion != null)
                message.codeiumVersion = String(object.codeiumVersion);
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.lang != null)
                message.lang = String(object.lang);
            if (object.windsurfVersion != null)
                message.windsurfVersion = String(object.windsurfVersion);
            if (object.unknown9 != null)
                message.unknown9 = object.unknown9 >>> 0;
            if (object.unknown10 != null)
                message.unknown10 = String(object.unknown10);
            if (object.extentionName != null)
                message.extentionName = String(object.extentionName);
            if (object.extentionPath != null)
                message.extentionPath = String(object.extentionPath);
            if (object.extentionVersion != null)
                message.extentionVersion = String(object.extentionVersion);
            if (object.unknown24 != null)
                message.unknown24 = String(object.unknown24);
            return message;
        };

        /**
         * Creates a plain object from a Jwt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof JwtMessage.Jwt
         * @static
         * @param {JwtMessage.Jwt} message Jwt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Jwt.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.codeiumVersion = "";
                object.userId = "";
                object.lang = "";
                object.windsurfVersion = "";
                object.unknown9 = 0;
                object.unknown10 = "";
                object.extentionName = "";
                object.extentionPath = "";
                object.extentionVersion = "";
                object.unknown24 = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.codeiumVersion != null && message.hasOwnProperty("codeiumVersion"))
                object.codeiumVersion = message.codeiumVersion;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.lang != null && message.hasOwnProperty("lang"))
                object.lang = message.lang;
            if (message.windsurfVersion != null && message.hasOwnProperty("windsurfVersion"))
                object.windsurfVersion = message.windsurfVersion;
            if (message.unknown9 != null && message.hasOwnProperty("unknown9"))
                object.unknown9 = message.unknown9;
            if (message.unknown10 != null && message.hasOwnProperty("unknown10"))
                object.unknown10 = message.unknown10;
            if (message.extentionName != null && message.hasOwnProperty("extentionName"))
                object.extentionName = message.extentionName;
            if (message.extentionPath != null && message.hasOwnProperty("extentionPath"))
                object.extentionPath = message.extentionPath;
            if (message.extentionVersion != null && message.hasOwnProperty("extentionVersion"))
                object.extentionVersion = message.extentionVersion;
            if (message.unknown24 != null && message.hasOwnProperty("unknown24"))
                object.unknown24 = message.unknown24;
            return object;
        };

        /**
         * Converts this Jwt to JSON.
         * @function toJSON
         * @memberof JwtMessage.Jwt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Jwt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Jwt
         * @function getTypeUrl
         * @memberof JwtMessage.Jwt
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Jwt.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/JwtMessage.Jwt";
        };

        return Jwt;
    })();

    return JwtMessage;
})();

$root.JwtResMessage = (function() {

    /**
     * Properties of a JwtResMessage.
     * @exports IJwtResMessage
     * @interface IJwtResMessage
     * @property {string|null} [jwt] JwtResMessage jwt
     */

    /**
     * Constructs a new JwtResMessage.
     * @exports JwtResMessage
     * @classdesc Represents a JwtResMessage.
     * @implements IJwtResMessage
     * @constructor
     * @param {IJwtResMessage=} [properties] Properties to set
     */
    function JwtResMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * JwtResMessage jwt.
     * @member {string} jwt
     * @memberof JwtResMessage
     * @instance
     */
    JwtResMessage.prototype.jwt = "";

    /**
     * Creates a new JwtResMessage instance using the specified properties.
     * @function create
     * @memberof JwtResMessage
     * @static
     * @param {IJwtResMessage=} [properties] Properties to set
     * @returns {JwtResMessage} JwtResMessage instance
     */
    JwtResMessage.create = function create(properties) {
        return new JwtResMessage(properties);
    };

    /**
     * Encodes the specified JwtResMessage message. Does not implicitly {@link JwtResMessage.verify|verify} messages.
     * @function encode
     * @memberof JwtResMessage
     * @static
     * @param {IJwtResMessage} message JwtResMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    JwtResMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.jwt != null && Object.hasOwnProperty.call(message, "jwt"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.jwt);
        return writer;
    };

    /**
     * Encodes the specified JwtResMessage message, length delimited. Does not implicitly {@link JwtResMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof JwtResMessage
     * @static
     * @param {IJwtResMessage} message JwtResMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    JwtResMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a JwtResMessage message from the specified reader or buffer.
     * @function decode
     * @memberof JwtResMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {JwtResMessage} JwtResMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    JwtResMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.JwtResMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.jwt = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a JwtResMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof JwtResMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {JwtResMessage} JwtResMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    JwtResMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a JwtResMessage message.
     * @function verify
     * @memberof JwtResMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    JwtResMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.jwt != null && message.hasOwnProperty("jwt"))
            if (!$util.isString(message.jwt))
                return "jwt: string expected";
        return null;
    };

    /**
     * Creates a JwtResMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof JwtResMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {JwtResMessage} JwtResMessage
     */
    JwtResMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.JwtResMessage)
            return object;
        var message = new $root.JwtResMessage();
        if (object.jwt != null)
            message.jwt = String(object.jwt);
        return message;
    };

    /**
     * Creates a plain object from a JwtResMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof JwtResMessage
     * @static
     * @param {JwtResMessage} message JwtResMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    JwtResMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.jwt = "";
        if (message.jwt != null && message.hasOwnProperty("jwt"))
            object.jwt = message.jwt;
        return object;
    };

    /**
     * Converts this JwtResMessage to JSON.
     * @function toJSON
     * @memberof JwtResMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    JwtResMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for JwtResMessage
     * @function getTypeUrl
     * @memberof JwtResMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    JwtResMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/JwtResMessage";
    };

    return JwtResMessage;
})();

module.exports = $root;
