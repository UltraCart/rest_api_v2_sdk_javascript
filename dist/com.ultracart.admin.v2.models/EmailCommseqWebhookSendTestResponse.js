"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("./Error"));

var _ResponseMetadata = _interopRequireDefault(require("./ResponseMetadata"));

var _Warning = _interopRequireDefault(require("./Warning"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The EmailCommseqWebhookSendTestResponse model module.
 * @module com.ultracart.admin.v2.models/EmailCommseqWebhookSendTestResponse
 * @version 4.0.112-RC
 */
var EmailCommseqWebhookSendTestResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailCommseqWebhookSendTestResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailCommseqWebhookSendTestResponse
   */
  function EmailCommseqWebhookSendTestResponse() {
    _classCallCheck(this, EmailCommseqWebhookSendTestResponse);

    EmailCommseqWebhookSendTestResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailCommseqWebhookSendTestResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailCommseqWebhookSendTestResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqWebhookSendTestResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailCommseqWebhookSendTestResponse} The populated <code>EmailCommseqWebhookSendTestResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailCommseqWebhookSendTestResponse();

        if (data.hasOwnProperty('error')) {
          obj['error'] = _Error["default"].constructFromObject(data['error']);
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ResponseMetadata["default"].constructFromObject(data['metadata']);
        }

        if (data.hasOwnProperty('request')) {
          obj['request'] = _ApiClient["default"].convertToType(data['request'], 'String');
        }

        if (data.hasOwnProperty('response')) {
          obj['response'] = _ApiClient["default"].convertToType(data['response'], 'String');
        }

        if (data.hasOwnProperty('status_code')) {
          obj['status_code'] = _ApiClient["default"].convertToType(data['status_code'], 'Number');
        }

        if (data.hasOwnProperty('success')) {
          obj['success'] = _ApiClient["default"].convertToType(data['success'], 'Boolean');
        }

        if (data.hasOwnProperty('warning')) {
          obj['warning'] = _Warning["default"].constructFromObject(data['warning']);
        }
      }

      return obj;
    }
  }]);

  return EmailCommseqWebhookSendTestResponse;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */


EmailCommseqWebhookSendTestResponse.prototype['error'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */

EmailCommseqWebhookSendTestResponse.prototype['metadata'] = undefined;
/**
 * HTTP Request
 * @member {String} request
 */

EmailCommseqWebhookSendTestResponse.prototype['request'] = undefined;
/**
 * HTTP Response
 * @member {String} response
 */

EmailCommseqWebhookSendTestResponse.prototype['response'] = undefined;
/**
 * HTTP Status Code
 * @member {Number} status_code
 */

EmailCommseqWebhookSendTestResponse.prototype['status_code'] = undefined;
/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */

EmailCommseqWebhookSendTestResponse.prototype['success'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */

EmailCommseqWebhookSendTestResponse.prototype['warning'] = undefined;
var _default = EmailCommseqWebhookSendTestResponse;
exports["default"] = _default;