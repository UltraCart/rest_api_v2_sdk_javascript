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
 * The EmailCampaignFolder model module.
 * @module com.ultracart.admin.v2.models/EmailCampaignFolder
 * @version 4.1.15
 */
var EmailCampaignFolder = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailCampaignFolder</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailCampaignFolder
   */
  function EmailCampaignFolder() {
    _classCallCheck(this, EmailCampaignFolder);
    EmailCampaignFolder.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(EmailCampaignFolder, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>EmailCampaignFolder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailCampaignFolder} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailCampaignFolder} The populated <code>EmailCampaignFolder</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailCampaignFolder();
        if (data.hasOwnProperty('esp_campaign_folder_uuid')) {
          obj['esp_campaign_folder_uuid'] = _ApiClient["default"].convertToType(data['esp_campaign_folder_uuid'], 'String');
        }
        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('storefront_oid')) {
          obj['storefront_oid'] = _ApiClient["default"].convertToType(data['storefront_oid'], 'Number');
        }
        if (data.hasOwnProperty('system_generated')) {
          obj['system_generated'] = _ApiClient["default"].convertToType(data['system_generated'], 'Boolean');
        }
      }
      return obj;
    }
  }]);
}();
/**
 * Email campaign folder UUID
 * @member {String} esp_campaign_folder_uuid
 */
EmailCampaignFolder.prototype['esp_campaign_folder_uuid'] = undefined;

/**
 * Merchant ID
 * @member {String} merchant_id
 */
EmailCampaignFolder.prototype['merchant_id'] = undefined;

/**
 * Name of email campaign folder
 * @member {String} name
 */
EmailCampaignFolder.prototype['name'] = undefined;

/**
 * Storefront oid
 * @member {Number} storefront_oid
 */
EmailCampaignFolder.prototype['storefront_oid'] = undefined;

/**
 * System generated folder
 * @member {Boolean} system_generated
 */
EmailCampaignFolder.prototype['system_generated'] = undefined;
var _default = exports["default"] = EmailCampaignFolder;