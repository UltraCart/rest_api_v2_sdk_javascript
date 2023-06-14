"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _HTTPHeader = _interopRequireDefault(require("./HTTPHeader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The WebhookLog model module.
 * @module com.ultracart.admin.v2.models/WebhookLog
 * @version 4.0.159
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


  _createClass(WebhookLog, null, [{
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
      }

      return obj;
    }
  }]);

  return WebhookLog;
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
var _default = WebhookLog;
exports["default"] = _default;