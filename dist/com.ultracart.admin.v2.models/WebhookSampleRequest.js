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
 * The WebhookSampleRequest model module.
 * @module com.ultracart.admin.v2.models/WebhookSampleRequest
 * @version 4.0.114-RC
 */
var WebhookSampleRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WebhookSampleRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/WebhookSampleRequest
   */
  function WebhookSampleRequest() {
    _classCallCheck(this, WebhookSampleRequest);

    WebhookSampleRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WebhookSampleRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WebhookSampleRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/WebhookSampleRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/WebhookSampleRequest} The populated <code>WebhookSampleRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WebhookSampleRequest();

        if (data.hasOwnProperty('request')) {
          obj['request'] = _ApiClient["default"].convertToType(data['request'], 'String');
        }

        if (data.hasOwnProperty('request_headers')) {
          obj['request_headers'] = _ApiClient["default"].convertToType(data['request_headers'], [_HTTPHeader["default"]]);
        }

        if (data.hasOwnProperty('request_id')) {
          obj['request_id'] = _ApiClient["default"].convertToType(data['request_id'], 'String');
        }

        if (data.hasOwnProperty('uri')) {
          obj['uri'] = _ApiClient["default"].convertToType(data['uri'], 'String');
        }
      }

      return obj;
    }
  }]);

  return WebhookSampleRequest;
}();
/**
 * Request
 * @member {String} request
 */


WebhookSampleRequest.prototype['request'] = undefined;
/**
 * Request headers
 * @member {Array.<module:com.ultracart.admin.v2.models/HTTPHeader>} request_headers
 */

WebhookSampleRequest.prototype['request_headers'] = undefined;
/**
 * Request id
 * @member {String} request_id
 */

WebhookSampleRequest.prototype['request_id'] = undefined;
/**
 * URI to send request to
 * @member {String} uri
 */

WebhookSampleRequest.prototype['uri'] = undefined;
var _default = WebhookSampleRequest;
exports["default"] = _default;