"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _HTTPHeader = _interopRequireDefault(require("./HTTPHeader"));
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
 * The WebhookLog model module.
 * @module com.ultracart.admin.v2.models/WebhookLog
 * @version 4.0.244
 */
var WebhookLog = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WebhookLog</code>.
   * @alias module:com.ultracart.admin.v2.models/WebhookLog
   */
  function WebhookLog() {
    _classCallCheck(this, WebhookLog);
    WebhookLog.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(WebhookLog, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>WebhookLog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/WebhookLog} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/WebhookLog} The populated <code>WebhookLog</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WebhookLog();
        if (data.hasOwnProperty('delivery_dts')) {
          obj['delivery_dts'] = _ApiClient["default"].convertToType(data['delivery_dts'], 'String');
        }
        if (data.hasOwnProperty('duration')) {
          obj['duration'] = _ApiClient["default"].convertToType(data['duration'], 'Number');
        }
        if (data.hasOwnProperty('queue_delay')) {
          obj['queue_delay'] = _ApiClient["default"].convertToType(data['queue_delay'], 'Number');
        }
        if (data.hasOwnProperty('request')) {
          obj['request'] = _ApiClient["default"].convertToType(data['request'], 'String');
        }
        if (data.hasOwnProperty('request_headers')) {
          obj['request_headers'] = _ApiClient["default"].convertToType(data['request_headers'], [_HTTPHeader["default"]]);
        }
        if (data.hasOwnProperty('request_id')) {
          obj['request_id'] = _ApiClient["default"].convertToType(data['request_id'], 'String');
        }
        if (data.hasOwnProperty('response')) {
          obj['response'] = _ApiClient["default"].convertToType(data['response'], 'String');
        }
        if (data.hasOwnProperty('response_headers')) {
          obj['response_headers'] = _ApiClient["default"].convertToType(data['response_headers'], [_HTTPHeader["default"]]);
        }
        if (data.hasOwnProperty('status_code')) {
          obj['status_code'] = _ApiClient["default"].convertToType(data['status_code'], 'Number');
        }
        if (data.hasOwnProperty('success')) {
          obj['success'] = _ApiClient["default"].convertToType(data['success'], 'Boolean');
        }
        if (data.hasOwnProperty('uri')) {
          obj['uri'] = _ApiClient["default"].convertToType(data['uri'], 'String');
        }
        if (data.hasOwnProperty('webhook_oid')) {
          obj['webhook_oid'] = _ApiClient["default"].convertToType(data['webhook_oid'], 'Number');
        }
      }
      return obj;
    }
  }]);
}();
/**
 * Date/time of delivery
 * @member {String} delivery_dts
 */
WebhookLog.prototype['delivery_dts'] = undefined;

/**
 * Number of milliseconds to process the notification
 * @member {Number} duration
 */
WebhookLog.prototype['duration'] = undefined;

/**
 * Number of milliseconds of delay caused by queuing
 * @member {Number} queue_delay
 */
WebhookLog.prototype['queue_delay'] = undefined;

/**
 * Request payload (first 100,000 characters)
 * @member {String} request
 */
WebhookLog.prototype['request'] = undefined;

/**
 * Request headers sent to the server
 * @member {Array.<module:com.ultracart.admin.v2.models/HTTPHeader>} request_headers
 */
WebhookLog.prototype['request_headers'] = undefined;

/**
 * Request id is a unique string that you can look up in the logs
 * @member {String} request_id
 */
WebhookLog.prototype['request_id'] = undefined;

/**
 * Response payload (first 100,000 characters)
 * @member {String} response
 */
WebhookLog.prototype['response'] = undefined;

/**
 * Response headers received from the server
 * @member {Array.<module:com.ultracart.admin.v2.models/HTTPHeader>} response_headers
 */
WebhookLog.prototype['response_headers'] = undefined;

/**
 * HTTP status code received from the server
 * @member {Number} status_code
 */
WebhookLog.prototype['status_code'] = undefined;

/**
 * True if the delivery was successful
 * @member {Boolean} success
 */
WebhookLog.prototype['success'] = undefined;

/**
 * URI of the webhook delivered to
 * @member {String} uri
 */
WebhookLog.prototype['uri'] = undefined;

/**
 * webhook oid
 * @member {Number} webhook_oid
 */
WebhookLog.prototype['webhook_oid'] = undefined;
var _default = exports["default"] = WebhookLog;