"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The WebhookLogSummary model module.
 * @module com.ultracart.admin.v2.models/WebhookLogSummary
 * @version 4.0.68-RC
 */
var WebhookLogSummary = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WebhookLogSummary</code>.
   * @alias module:com.ultracart.admin.v2.models/WebhookLogSummary
   */
  function WebhookLogSummary() {
    _classCallCheck(this, WebhookLogSummary);

    WebhookLogSummary.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WebhookLogSummary, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WebhookLogSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/WebhookLogSummary} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/WebhookLogSummary} The populated <code>WebhookLogSummary</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WebhookLogSummary();

        if (data.hasOwnProperty('delivery_dts')) {
          obj['delivery_dts'] = _ApiClient["default"].convertToType(data['delivery_dts'], 'String');
        }

        if (data.hasOwnProperty('request_id')) {
          obj['request_id'] = _ApiClient["default"].convertToType(data['request_id'], 'String');
        }

        if (data.hasOwnProperty('success')) {
          obj['success'] = _ApiClient["default"].convertToType(data['success'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return WebhookLogSummary;
}();
/**
 * Date/time of the delivery
 * @member {String} delivery_dts
 */


WebhookLogSummary.prototype['delivery_dts'] = undefined;
/**
 * Request id
 * @member {String} request_id
 */

WebhookLogSummary.prototype['request_id'] = undefined;
/**
 * True if the notification was successful
 * @member {Boolean} success
 */

WebhookLogSummary.prototype['success'] = undefined;
var _default = WebhookLogSummary;
exports["default"] = _default;