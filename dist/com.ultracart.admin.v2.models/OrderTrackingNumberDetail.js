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
 * The OrderTrackingNumberDetail model module.
 * @module com.ultracart.admin.v2.models/OrderTrackingNumberDetail
 * @version 4.1.15
 */
var OrderTrackingNumberDetail = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderTrackingNumberDetail</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderTrackingNumberDetail
   */
  function OrderTrackingNumberDetail() {
    _classCallCheck(this, OrderTrackingNumberDetail);
    OrderTrackingNumberDetail.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(OrderTrackingNumberDetail, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>OrderTrackingNumberDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderTrackingNumberDetail} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderTrackingNumberDetail} The populated <code>OrderTrackingNumberDetail</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderTrackingNumberDetail();
        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'String');
        }
        if (data.hasOwnProperty('event_dts')) {
          obj['event_dts'] = _ApiClient["default"].convertToType(data['event_dts'], 'String');
        }
        if (data.hasOwnProperty('event_local_date')) {
          obj['event_local_date'] = _ApiClient["default"].convertToType(data['event_local_date'], 'String');
        }
        if (data.hasOwnProperty('event_local_time')) {
          obj['event_local_time'] = _ApiClient["default"].convertToType(data['event_local_time'], 'String');
        }
        if (data.hasOwnProperty('event_timezone_id')) {
          obj['event_timezone_id'] = _ApiClient["default"].convertToType(data['event_timezone_id'], 'String');
        }
        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }
        if (data.hasOwnProperty('subtag')) {
          obj['subtag'] = _ApiClient["default"].convertToType(data['subtag'], 'String');
        }
        if (data.hasOwnProperty('subtag_message')) {
          obj['subtag_message'] = _ApiClient["default"].convertToType(data['subtag_message'], 'String');
        }
        if (data.hasOwnProperty('tag')) {
          obj['tag'] = _ApiClient["default"].convertToType(data['tag'], 'String');
        }
        if (data.hasOwnProperty('tag_description')) {
          obj['tag_description'] = _ApiClient["default"].convertToType(data['tag_description'], 'String');
        }
        if (data.hasOwnProperty('tag_icon')) {
          obj['tag_icon'] = _ApiClient["default"].convertToType(data['tag_icon'], 'String');
        }
        if (data.hasOwnProperty('zip')) {
          obj['zip'] = _ApiClient["default"].convertToType(data['zip'], 'String');
        }
      }
      return obj;
    }
  }]);
}();
/**
 * @member {String} city
 */
OrderTrackingNumberDetail.prototype['city'] = undefined;

/**
 * ISO 8601 timestamp that the event occurred
 * @member {String} event_dts
 */
OrderTrackingNumberDetail.prototype['event_dts'] = undefined;

/**
 * @member {String} event_local_date
 */
OrderTrackingNumberDetail.prototype['event_local_date'] = undefined;

/**
 * @member {String} event_local_time
 */
OrderTrackingNumberDetail.prototype['event_local_time'] = undefined;

/**
 * Timezone the event occurred in.  Use this in conjunction with event_dts to format a local date/time.
 * @member {String} event_timezone_id
 */
OrderTrackingNumberDetail.prototype['event_timezone_id'] = undefined;

/**
 * @member {String} state
 */
OrderTrackingNumberDetail.prototype['state'] = undefined;

/**
 * @member {String} subtag
 */
OrderTrackingNumberDetail.prototype['subtag'] = undefined;

/**
 * @member {String} subtag_message
 */
OrderTrackingNumberDetail.prototype['subtag_message'] = undefined;

/**
 * @member {String} tag
 */
OrderTrackingNumberDetail.prototype['tag'] = undefined;

/**
 * @member {String} tag_description
 */
OrderTrackingNumberDetail.prototype['tag_description'] = undefined;

/**
 * @member {String} tag_icon
 */
OrderTrackingNumberDetail.prototype['tag_icon'] = undefined;

/**
 * @member {String} zip
 */
OrderTrackingNumberDetail.prototype['zip'] = undefined;
var _default = exports["default"] = OrderTrackingNumberDetail;