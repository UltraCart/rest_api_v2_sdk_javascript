"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The ConversationPbxAudio model module.
 * @module com.ultracart.admin.v2.models/ConversationPbxAudio
 * @version 4.1.15
 */
var ConversationPbxAudio = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationPbxAudio</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationPbxAudio
   */
  function ConversationPbxAudio() {
    _classCallCheck(this, ConversationPbxAudio);
    ConversationPbxAudio.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(ConversationPbxAudio, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ConversationPbxAudio</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxAudio} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationPbxAudio} The populated <code>ConversationPbxAudio</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationPbxAudio();
        if (data.hasOwnProperty('audio_s3_listing_key')) {
          obj['audio_s3_listing_key'] = _ApiClient["default"].convertToType(data['audio_s3_listing_key'], 'String');
        }
        if (data.hasOwnProperty('conversation_pbx_audio_uuid')) {
          obj['conversation_pbx_audio_uuid'] = _ApiClient["default"].convertToType(data['conversation_pbx_audio_uuid'], 'String');
        }
        if (data.hasOwnProperty('default_hold_music')) {
          obj['default_hold_music'] = _ApiClient["default"].convertToType(data['default_hold_music'], 'Boolean');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('filename')) {
          obj['filename'] = _ApiClient["default"].convertToType(data['filename'], 'String');
        }
        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }
        if (data.hasOwnProperty('mime_type')) {
          obj['mime_type'] = _ApiClient["default"].convertToType(data['mime_type'], 'String');
        }
        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'Number');
        }
        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }
      }
      return obj;
    }
  }]);
}();
/**
 * Audio S3 Listing Key
 * @member {String} audio_s3_listing_key
 */
ConversationPbxAudio.prototype['audio_s3_listing_key'] = undefined;

/**
 * Conversation Pbx Audio UUID
 * @member {String} conversation_pbx_audio_uuid
 */
ConversationPbxAudio.prototype['conversation_pbx_audio_uuid'] = undefined;

/**
 * If true, this will be the default hold music
 * @member {Boolean} default_hold_music
 */
ConversationPbxAudio.prototype['default_hold_music'] = undefined;

/**
 * Description of this audio
 * @member {String} description
 */
ConversationPbxAudio.prototype['description'] = undefined;

/**
 * Filename
 * @member {String} filename
 */
ConversationPbxAudio.prototype['filename'] = undefined;

/**
 * Merchant Id
 * @member {String} merchant_id
 */
ConversationPbxAudio.prototype['merchant_id'] = undefined;

/**
 * Mime Type
 * @member {String} mime_type
 */
ConversationPbxAudio.prototype['mime_type'] = undefined;

/**
 * URL
 * @member {String} url
 */
ConversationPbxAudio.prototype['url'] = undefined;

/**
 * User Id
 * @member {Number} user_id
 */
ConversationPbxAudio.prototype['user_id'] = undefined;

/**
 * Version
 * @member {Number} version
 */
ConversationPbxAudio.prototype['version'] = undefined;
var _default = exports["default"] = ConversationPbxAudio;