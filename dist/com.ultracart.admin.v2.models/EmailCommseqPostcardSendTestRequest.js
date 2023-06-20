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
 * The EmailCommseqPostcardSendTestRequest model module.
 * @module com.ultracart.admin.v2.models/EmailCommseqPostcardSendTestRequest
 * @version 4.0.162
 */
var EmailCommseqPostcardSendTestRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailCommseqPostcardSendTestRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailCommseqPostcardSendTestRequest
   */
  function EmailCommseqPostcardSendTestRequest() {
    _classCallCheck(this, EmailCommseqPostcardSendTestRequest);

    EmailCommseqPostcardSendTestRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailCommseqPostcardSendTestRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailCommseqPostcardSendTestRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqPostcardSendTestRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailCommseqPostcardSendTestRequest} The populated <code>EmailCommseqPostcardSendTestRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailCommseqPostcardSendTestRequest();

        if (data.hasOwnProperty('address_1')) {
          obj['address_1'] = _ApiClient["default"].convertToType(data['address_1'], 'String');
        }

        if (data.hasOwnProperty('address_2')) {
          obj['address_2'] = _ApiClient["default"].convertToType(data['address_2'], 'String');
        }

        if (data.hasOwnProperty('cart_id')) {
          obj['cart_id'] = _ApiClient["default"].convertToType(data['cart_id'], 'String');
        }

        if (data.hasOwnProperty('cart_item_ids')) {
          obj['cart_item_ids'] = _ApiClient["default"].convertToType(data['cart_item_ids'], ['String']);
        }

        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'String');
        }

        if (data.hasOwnProperty('esp_commseq_postcard_uuid')) {
          obj['esp_commseq_postcard_uuid'] = _ApiClient["default"].convertToType(data['esp_commseq_postcard_uuid'], 'String');
        }

        if (data.hasOwnProperty('esp_commseq_step_uuid')) {
          obj['esp_commseq_step_uuid'] = _ApiClient["default"].convertToType(data['esp_commseq_step_uuid'], 'String');
        }

        if (data.hasOwnProperty('esp_commseq_uuid')) {
          obj['esp_commseq_uuid'] = _ApiClient["default"].convertToType(data['esp_commseq_uuid'], 'String');
        }

        if (data.hasOwnProperty('mail_card')) {
          obj['mail_card'] = _ApiClient["default"].convertToType(data['mail_card'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('order_id')) {
          obj['order_id'] = _ApiClient["default"].convertToType(data['order_id'], 'String');
        }

        if (data.hasOwnProperty('postal_code')) {
          obj['postal_code'] = _ApiClient["default"].convertToType(data['postal_code'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EmailCommseqPostcardSendTestRequest;
}();
/**
 * @member {String} address_1
 */


EmailCommseqPostcardSendTestRequest.prototype['address_1'] = undefined;
/**
 * @member {String} address_2
 */

EmailCommseqPostcardSendTestRequest.prototype['address_2'] = undefined;
/**
 * @member {String} cart_id
 */

EmailCommseqPostcardSendTestRequest.prototype['cart_id'] = undefined;
/**
 * @member {Array.<String>} cart_item_ids
 */

EmailCommseqPostcardSendTestRequest.prototype['cart_item_ids'] = undefined;
/**
 * @member {String} city
 */

EmailCommseqPostcardSendTestRequest.prototype['city'] = undefined;
/**
 * @member {String} esp_commseq_postcard_uuid
 */

EmailCommseqPostcardSendTestRequest.prototype['esp_commseq_postcard_uuid'] = undefined;
/**
 * @member {String} esp_commseq_step_uuid
 */

EmailCommseqPostcardSendTestRequest.prototype['esp_commseq_step_uuid'] = undefined;
/**
 * @member {String} esp_commseq_uuid
 */

EmailCommseqPostcardSendTestRequest.prototype['esp_commseq_uuid'] = undefined;
/**
 * @member {Boolean} mail_card
 */

EmailCommseqPostcardSendTestRequest.prototype['mail_card'] = undefined;
/**
 * @member {String} name
 */

EmailCommseqPostcardSendTestRequest.prototype['name'] = undefined;
/**
 * @member {String} order_id
 */

EmailCommseqPostcardSendTestRequest.prototype['order_id'] = undefined;
/**
 * @member {String} postal_code
 */

EmailCommseqPostcardSendTestRequest.prototype['postal_code'] = undefined;
/**
 * @member {String} state
 */

EmailCommseqPostcardSendTestRequest.prototype['state'] = undefined;
var _default = EmailCommseqPostcardSendTestRequest;
exports["default"] = _default;