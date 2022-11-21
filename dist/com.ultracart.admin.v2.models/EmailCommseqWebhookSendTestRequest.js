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
 * The EmailCommseqWebhookSendTestRequest model module.
 * @module com.ultracart.admin.v2.models/EmailCommseqWebhookSendTestRequest
 * @version 4.0.86-RC
 */
var EmailCommseqWebhookSendTestRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailCommseqWebhookSendTestRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailCommseqWebhookSendTestRequest
   */
  function EmailCommseqWebhookSendTestRequest() {
    _classCallCheck(this, EmailCommseqWebhookSendTestRequest);

    EmailCommseqWebhookSendTestRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailCommseqWebhookSendTestRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailCommseqWebhookSendTestRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqWebhookSendTestRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailCommseqWebhookSendTestRequest} The populated <code>EmailCommseqWebhookSendTestRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailCommseqWebhookSendTestRequest();

        if (data.hasOwnProperty('cart_id')) {
          obj['cart_id'] = _ApiClient["default"].convertToType(data['cart_id'], 'String');
        }

        if (data.hasOwnProperty('cart_item_ids')) {
          obj['cart_item_ids'] = _ApiClient["default"].convertToType(data['cart_item_ids'], ['String']);
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('esp_commseq_step_uuid')) {
          obj['esp_commseq_step_uuid'] = _ApiClient["default"].convertToType(data['esp_commseq_step_uuid'], 'String');
        }

        if (data.hasOwnProperty('esp_commseq_uuid')) {
          obj['esp_commseq_uuid'] = _ApiClient["default"].convertToType(data['esp_commseq_uuid'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('order_id')) {
          obj['order_id'] = _ApiClient["default"].convertToType(data['order_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EmailCommseqWebhookSendTestRequest;
}();
/**
 * @member {String} cart_id
 */


EmailCommseqWebhookSendTestRequest.prototype['cart_id'] = undefined;
/**
 * @member {Array.<String>} cart_item_ids
 */

EmailCommseqWebhookSendTestRequest.prototype['cart_item_ids'] = undefined;
/**
 * @member {String} email
 */

EmailCommseqWebhookSendTestRequest.prototype['email'] = undefined;
/**
 * @member {String} esp_commseq_step_uuid
 */

EmailCommseqWebhookSendTestRequest.prototype['esp_commseq_step_uuid'] = undefined;
/**
 * @member {String} esp_commseq_uuid
 */

EmailCommseqWebhookSendTestRequest.prototype['esp_commseq_uuid'] = undefined;
/**
 * @member {String} name
 */

EmailCommseqWebhookSendTestRequest.prototype['name'] = undefined;
/**
 * @member {String} order_id
 */

EmailCommseqWebhookSendTestRequest.prototype['order_id'] = undefined;
var _default = EmailCommseqWebhookSendTestRequest;
exports["default"] = _default;