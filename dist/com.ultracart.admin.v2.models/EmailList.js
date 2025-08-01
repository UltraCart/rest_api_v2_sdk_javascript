"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _EmailListSegmentUsedBy = _interopRequireDefault(require("./EmailListSegmentUsedBy"));
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
 * The EmailList model module.
 * @module com.ultracart.admin.v2.models/EmailList
 * @version 4.1.15
 */
var EmailList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailList</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailList
   */
  function EmailList() {
    _classCallCheck(this, EmailList);
    EmailList.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(EmailList, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>EmailList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailList} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailList} The populated <code>EmailList</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailList();
        if (data.hasOwnProperty('allow_csv_download')) {
          obj['allow_csv_download'] = _ApiClient["default"].convertToType(data['allow_csv_download'], 'Boolean');
        }
        if (data.hasOwnProperty('created_dts')) {
          obj['created_dts'] = _ApiClient["default"].convertToType(data['created_dts'], 'String');
        }
        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'Boolean');
        }
        if (data.hasOwnProperty('email_list_uuid')) {
          obj['email_list_uuid'] = _ApiClient["default"].convertToType(data['email_list_uuid'], 'String');
        }
        if (data.hasOwnProperty('esp_list_segment_folder_uuid')) {
          obj['esp_list_segment_folder_uuid'] = _ApiClient["default"].convertToType(data['esp_list_segment_folder_uuid'], 'String');
        }
        if (data.hasOwnProperty('member_count')) {
          obj['member_count'] = _ApiClient["default"].convertToType(data['member_count'], 'Number');
        }
        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('public_description')) {
          obj['public_description'] = _ApiClient["default"].convertToType(data['public_description'], 'String');
        }
        if (data.hasOwnProperty('public_list')) {
          obj['public_list'] = _ApiClient["default"].convertToType(data['public_list'], 'Boolean');
        }
        if (data.hasOwnProperty('storefront_oid')) {
          obj['storefront_oid'] = _ApiClient["default"].convertToType(data['storefront_oid'], 'Number');
        }
        if (data.hasOwnProperty('used_by')) {
          obj['used_by'] = _ApiClient["default"].convertToType(data['used_by'], [_EmailListSegmentUsedBy["default"]]);
        }
      }
      return obj;
    }
  }]);
}();
/**
 * True if the current user has the rights to download this list.
 * @member {Boolean} allow_csv_download
 */
EmailList.prototype['allow_csv_download'] = undefined;

/**
 * Created date
 * @member {String} created_dts
 */
EmailList.prototype['created_dts'] = undefined;

/**
 * True if this campaign was deleted
 * @member {Boolean} deleted
 */
EmailList.prototype['deleted'] = undefined;

/**
 * Email list UUID
 * @member {String} email_list_uuid
 */
EmailList.prototype['email_list_uuid'] = undefined;

/**
 * List/Segment folder UUID
 * @member {String} esp_list_segment_folder_uuid
 */
EmailList.prototype['esp_list_segment_folder_uuid'] = undefined;

/**
 * Count of members in this list
 * @member {Number} member_count
 */
EmailList.prototype['member_count'] = undefined;

/**
 * Merchant ID
 * @member {String} merchant_id
 */
EmailList.prototype['merchant_id'] = undefined;

/**
 * Name of email list
 * @member {String} name
 */
EmailList.prototype['name'] = undefined;

/**
 * Description of list shown to customer.
 * @member {String} public_description
 */
EmailList.prototype['public_description'] = undefined;

/**
 * True if this list is public
 * @member {Boolean} public_list
 */
EmailList.prototype['public_list'] = undefined;

/**
 * Storefront oid
 * @member {Number} storefront_oid
 */
EmailList.prototype['storefront_oid'] = undefined;

/**
 * Details on the flows or campaigns that use this list.
 * @member {Array.<module:com.ultracart.admin.v2.models/EmailListSegmentUsedBy>} used_by
 */
EmailList.prototype['used_by'] = undefined;
var _default = exports["default"] = EmailList;