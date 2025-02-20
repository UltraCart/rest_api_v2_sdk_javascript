"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ConversationPbxMenuMapping = _interopRequireDefault(require("./ConversationPbxMenuMapping"));
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
 * The ConversationPbxMenu model module.
 * @module com.ultracart.admin.v2.models/ConversationPbxMenu
 * @version 4.0.244
 */
var ConversationPbxMenu = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationPbxMenu</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationPbxMenu
   */
  function ConversationPbxMenu() {
    _classCallCheck(this, ConversationPbxMenu);
    ConversationPbxMenu.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(ConversationPbxMenu, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ConversationPbxMenu</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxMenu} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationPbxMenu} The populated <code>ConversationPbxMenu</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationPbxMenu();
        if (data.hasOwnProperty('allow_direct_extensions')) {
          obj['allow_direct_extensions'] = _ApiClient["default"].convertToType(data['allow_direct_extensions'], 'Boolean');
        }
        if (data.hasOwnProperty('conversation_pbx_menu_uuid')) {
          obj['conversation_pbx_menu_uuid'] = _ApiClient["default"].convertToType(data['conversation_pbx_menu_uuid'], 'String');
        }
        if (data.hasOwnProperty('default_action')) {
          obj['default_action'] = _ApiClient["default"].convertToType(data['default_action'], 'String');
        }
        if (data.hasOwnProperty('default_action_target')) {
          obj['default_action_target'] = _ApiClient["default"].convertToType(data['default_action_target'], 'String');
        }
        if (data.hasOwnProperty('mappings')) {
          obj['mappings'] = _ApiClient["default"].convertToType(data['mappings'], [_ConversationPbxMenuMapping["default"]]);
        }
        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('play_audio_uuid')) {
          obj['play_audio_uuid'] = _ApiClient["default"].convertToType(data['play_audio_uuid'], 'String');
        }
        if (data.hasOwnProperty('say')) {
          obj['say'] = _ApiClient["default"].convertToType(data['say'], 'String');
        }
        if (data.hasOwnProperty('say_voice')) {
          obj['say_voice'] = _ApiClient["default"].convertToType(data['say_voice'], 'String');
        }
        if (data.hasOwnProperty('timeout')) {
          obj['timeout'] = _ApiClient["default"].convertToType(data['timeout'], 'Number');
        }
      }
      return obj;
    }
  }]);
}();
/**
 * If true, the customer is allowed to input direct extensions within this menu
 * @member {Boolean} allow_direct_extensions
 */
ConversationPbxMenu.prototype['allow_direct_extensions'] = undefined;

/**
 * Conversation Pbx Menu UUID
 * @member {String} conversation_pbx_menu_uuid
 */
ConversationPbxMenu.prototype['conversation_pbx_menu_uuid'] = undefined;

/**
 * The default action for this menu
 * @member {String} default_action
 */
ConversationPbxMenu.prototype['default_action'] = undefined;

/**
 * The default action target for this menu
 * @member {String} default_action_target
 */
ConversationPbxMenu.prototype['default_action_target'] = undefined;

/**
 * Action mappings for this menu
 * @member {Array.<module:com.ultracart.admin.v2.models/ConversationPbxMenuMapping>} mappings
 */
ConversationPbxMenu.prototype['mappings'] = undefined;

/**
 * Merchant Id
 * @member {String} merchant_id
 */
ConversationPbxMenu.prototype['merchant_id'] = undefined;

/**
 * Menu name
 * @member {String} name
 */
ConversationPbxMenu.prototype['name'] = undefined;

/**
 * An optional audio clip that plays when a customer enters this menu
 * @member {String} play_audio_uuid
 */
ConversationPbxMenu.prototype['play_audio_uuid'] = undefined;

/**
 * An optional saying that plays when a customer enters this menu
 * @member {String} say
 */
ConversationPbxMenu.prototype['say'] = undefined;

/**
 * say voice
 * @member {module:com.ultracart.admin.v2.models/ConversationPbxMenu.SayVoiceEnum} say_voice
 */
ConversationPbxMenu.prototype['say_voice'] = undefined;

/**
 * The idle seconds before this menu times out
 * @member {Number} timeout
 */
ConversationPbxMenu.prototype['timeout'] = undefined;

/**
 * Allowed values for the <code>say_voice</code> property.
 * @enum {String}
 * @readonly
 */
ConversationPbxMenu['SayVoiceEnum'] = {
  /**
   * value: "man"
   * @const
   */
  "man": "man",
  /**
   * value: "woman"
   * @const
   */
  "woman": "woman"
};
var _default = exports["default"] = ConversationPbxMenu;