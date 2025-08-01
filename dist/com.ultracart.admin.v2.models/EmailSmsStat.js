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
 * The EmailSmsStat model module.
 * @module com.ultracart.admin.v2.models/EmailSmsStat
 * @version 4.1.15
 */
var EmailSmsStat = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailSmsStat</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailSmsStat
   */
  function EmailSmsStat() {
    _classCallCheck(this, EmailSmsStat);
    EmailSmsStat.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(EmailSmsStat, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>EmailSmsStat</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailSmsStat} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailSmsStat} The populated <code>EmailSmsStat</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailSmsStat();
        if (data.hasOwnProperty('click_count')) {
          obj['click_count'] = _ApiClient["default"].convertToType(data['click_count'], 'Number');
        }
        if (data.hasOwnProperty('click_count_formatted')) {
          obj['click_count_formatted'] = _ApiClient["default"].convertToType(data['click_count_formatted'], 'String');
        }
        if (data.hasOwnProperty('conversion_count')) {
          obj['conversion_count'] = _ApiClient["default"].convertToType(data['conversion_count'], 'Number');
        }
        if (data.hasOwnProperty('conversion_count_formatted')) {
          obj['conversion_count_formatted'] = _ApiClient["default"].convertToType(data['conversion_count_formatted'], 'String');
        }
        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'Boolean');
        }
        if (data.hasOwnProperty('delivered_count')) {
          obj['delivered_count'] = _ApiClient["default"].convertToType(data['delivered_count'], 'Number');
        }
        if (data.hasOwnProperty('delivered_count_formatted')) {
          obj['delivered_count_formatted'] = _ApiClient["default"].convertToType(data['delivered_count_formatted'], 'String');
        }
        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('order_count')) {
          obj['order_count'] = _ApiClient["default"].convertToType(data['order_count'], 'Number');
        }
        if (data.hasOwnProperty('order_count_formatted')) {
          obj['order_count_formatted'] = _ApiClient["default"].convertToType(data['order_count_formatted'], 'String');
        }
        if (data.hasOwnProperty('profit')) {
          obj['profit'] = _ApiClient["default"].convertToType(data['profit'], 'Number');
        }
        if (data.hasOwnProperty('profit_formatted')) {
          obj['profit_formatted'] = _ApiClient["default"].convertToType(data['profit_formatted'], 'String');
        }
        if (data.hasOwnProperty('revenue')) {
          obj['revenue'] = _ApiClient["default"].convertToType(data['revenue'], 'Number');
        }
        if (data.hasOwnProperty('revenue_formatted')) {
          obj['revenue_formatted'] = _ApiClient["default"].convertToType(data['revenue_formatted'], 'String');
        }
        if (data.hasOwnProperty('send_count')) {
          obj['send_count'] = _ApiClient["default"].convertToType(data['send_count'], 'Number');
        }
        if (data.hasOwnProperty('send_count_formatted')) {
          obj['send_count_formatted'] = _ApiClient["default"].convertToType(data['send_count_formatted'], 'String');
        }
        if (data.hasOwnProperty('skipped_count')) {
          obj['skipped_count'] = _ApiClient["default"].convertToType(data['skipped_count'], 'Number');
        }
        if (data.hasOwnProperty('skipped_count_formatted')) {
          obj['skipped_count_formatted'] = _ApiClient["default"].convertToType(data['skipped_count_formatted'], 'String');
        }
        if (data.hasOwnProperty('stat_type')) {
          obj['stat_type'] = _ApiClient["default"].convertToType(data['stat_type'], 'String');
        }
        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
        if (data.hasOwnProperty('status_dts')) {
          obj['status_dts'] = _ApiClient["default"].convertToType(data['status_dts'], 'String');
        }
        if (data.hasOwnProperty('step_uuid')) {
          obj['step_uuid'] = _ApiClient["default"].convertToType(data['step_uuid'], 'String');
        }
        if (data.hasOwnProperty('steps')) {
          obj['steps'] = _ApiClient["default"].convertToType(data['steps'], [EmailSmsStat]);
        }
        if (data.hasOwnProperty('storefront_oid')) {
          obj['storefront_oid'] = _ApiClient["default"].convertToType(data['storefront_oid'], 'Number');
        }
        if (data.hasOwnProperty('unsubscribe_count')) {
          obj['unsubscribe_count'] = _ApiClient["default"].convertToType(data['unsubscribe_count'], 'Number');
        }
        if (data.hasOwnProperty('unsubscribe_count_formatted')) {
          obj['unsubscribe_count_formatted'] = _ApiClient["default"].convertToType(data['unsubscribe_count_formatted'], 'String');
        }
        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }
        if (data.hasOwnProperty('view_count')) {
          obj['view_count'] = _ApiClient["default"].convertToType(data['view_count'], 'Number');
        }
        if (data.hasOwnProperty('view_count_formatted')) {
          obj['view_count_formatted'] = _ApiClient["default"].convertToType(data['view_count_formatted'], 'String');
        }
      }
      return obj;
    }
  }]);
}();
/**
 * Count of clicked emails
 * @member {Number} click_count
 */
EmailSmsStat.prototype['click_count'] = undefined;

/**
 * Count of clicked emails, formatted
 * @member {String} click_count_formatted
 */
EmailSmsStat.prototype['click_count_formatted'] = undefined;

/**
 * Count of conversions
 * @member {Number} conversion_count
 */
EmailSmsStat.prototype['conversion_count'] = undefined;

/**
 * Count of conversions, formatted
 * @member {String} conversion_count_formatted
 */
EmailSmsStat.prototype['conversion_count_formatted'] = undefined;

/**
 * True if campaign/flow has been archived
 * @member {Boolean} deleted
 */
EmailSmsStat.prototype['deleted'] = undefined;

/**
 * Count of delivered emails
 * @member {Number} delivered_count
 */
EmailSmsStat.prototype['delivered_count'] = undefined;

/**
 * Count of delivered emails, formatted
 * @member {String} delivered_count_formatted
 */
EmailSmsStat.prototype['delivered_count_formatted'] = undefined;

/**
 * Merchant ID
 * @member {String} merchant_id
 */
EmailSmsStat.prototype['merchant_id'] = undefined;

/**
 * List or segment name
 * @member {String} name
 */
EmailSmsStat.prototype['name'] = undefined;

/**
 * Count of orders
 * @member {Number} order_count
 */
EmailSmsStat.prototype['order_count'] = undefined;

/**
 * Count of orders, formatted
 * @member {String} order_count_formatted
 */
EmailSmsStat.prototype['order_count_formatted'] = undefined;

/**
 * Profit
 * @member {Number} profit
 */
EmailSmsStat.prototype['profit'] = undefined;

/**
 * Profit, formatted
 * @member {String} profit_formatted
 */
EmailSmsStat.prototype['profit_formatted'] = undefined;

/**
 * Revenue
 * @member {Number} revenue
 */
EmailSmsStat.prototype['revenue'] = undefined;

/**
 * Revenue, formatted
 * @member {String} revenue_formatted
 */
EmailSmsStat.prototype['revenue_formatted'] = undefined;

/**
 * Count of emails sent
 * @member {Number} send_count
 */
EmailSmsStat.prototype['send_count'] = undefined;

/**
 * Count of emails sent, formatted
 * @member {String} send_count_formatted
 */
EmailSmsStat.prototype['send_count_formatted'] = undefined;

/**
 * Count of skipped emails
 * @member {Number} skipped_count
 */
EmailSmsStat.prototype['skipped_count'] = undefined;

/**
 * Count of skipped emails, formatted
 * @member {String} skipped_count_formatted
 */
EmailSmsStat.prototype['skipped_count_formatted'] = undefined;

/**
 * Campaign, Flow or None (for anything else)
 * @member {String} stat_type
 */
EmailSmsStat.prototype['stat_type'] = undefined;

/**
 * Status of campaign or flow
 * @member {String} status
 */
EmailSmsStat.prototype['status'] = undefined;

/**
 * Status dts of campaign or flow
 * @member {String} status_dts
 */
EmailSmsStat.prototype['status_dts'] = undefined;

/**
 * Step UUID if the statistics are at the step/email level
 * @member {String} step_uuid
 */
EmailSmsStat.prototype['step_uuid'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/EmailSmsStat>} steps
 */
EmailSmsStat.prototype['steps'] = undefined;

/**
 * Storefront oid
 * @member {Number} storefront_oid
 */
EmailSmsStat.prototype['storefront_oid'] = undefined;

/**
 * Count of emails classified as unsubscribe
 * @member {Number} unsubscribe_count
 */
EmailSmsStat.prototype['unsubscribe_count'] = undefined;

/**
 * Count of emails classified as unsubscribe, formatted
 * @member {String} unsubscribe_count_formatted
 */
EmailSmsStat.prototype['unsubscribe_count_formatted'] = undefined;

/**
 * List/Segment uuid, or Flow/Campaign uuid depending on level of stat aggregation.
 * @member {String} uuid
 */
EmailSmsStat.prototype['uuid'] = undefined;

/**
 * Count of views
 * @member {Number} view_count
 */
EmailSmsStat.prototype['view_count'] = undefined;

/**
 * Count of views, formatted
 * @member {String} view_count_formatted
 */
EmailSmsStat.prototype['view_count_formatted'] = undefined;
var _default = exports["default"] = EmailSmsStat;