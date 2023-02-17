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
 * The CartPaymentCreditCard model module.
 * @module com.ultracart.admin.v2.models/CartPaymentCreditCard
 * @version 4.0.134
 */
var CartPaymentCreditCard = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartPaymentCreditCard</code>.
   * @alias module:com.ultracart.admin.v2.models/CartPaymentCreditCard
   */
  function CartPaymentCreditCard() {
    _classCallCheck(this, CartPaymentCreditCard);

    CartPaymentCreditCard.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartPaymentCreditCard, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartPaymentCreditCard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartPaymentCreditCard} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartPaymentCreditCard} The populated <code>CartPaymentCreditCard</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartPaymentCreditCard();

        if (data.hasOwnProperty('card_expiration_month')) {
          obj['card_expiration_month'] = _ApiClient["default"].convertToType(data['card_expiration_month'], 'Number');
        }

        if (data.hasOwnProperty('card_expiration_year')) {
          obj['card_expiration_year'] = _ApiClient["default"].convertToType(data['card_expiration_year'], 'Number');
        }

        if (data.hasOwnProperty('card_number')) {
          obj['card_number'] = _ApiClient["default"].convertToType(data['card_number'], 'String');
        }

        if (data.hasOwnProperty('card_number_token')) {
          obj['card_number_token'] = _ApiClient["default"].convertToType(data['card_number_token'], 'String');
        }

        if (data.hasOwnProperty('card_type')) {
          obj['card_type'] = _ApiClient["default"].convertToType(data['card_type'], 'String');
        }

        if (data.hasOwnProperty('card_verification_number')) {
          obj['card_verification_number'] = _ApiClient["default"].convertToType(data['card_verification_number'], 'String');
        }

        if (data.hasOwnProperty('card_verification_number_token')) {
          obj['card_verification_number_token'] = _ApiClient["default"].convertToType(data['card_verification_number_token'], 'String');
        }

        if (data.hasOwnProperty('customer_profile_credit_card_id')) {
          obj['customer_profile_credit_card_id'] = _ApiClient["default"].convertToType(data['customer_profile_credit_card_id'], 'Number');
        }

        if (data.hasOwnProperty('store_credit_card')) {
          obj['store_credit_card'] = _ApiClient["default"].convertToType(data['store_credit_card'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return CartPaymentCreditCard;
}();
/**
 * Card expiration month (1-12)
 * @member {Number} card_expiration_month
 */


CartPaymentCreditCard.prototype['card_expiration_month'] = undefined;
/**
 * Card expiration year (four digit year)
 * @member {Number} card_expiration_year
 */

CartPaymentCreditCard.prototype['card_expiration_year'] = undefined;
/**
 * Card number (masked to the last 4)
 * @member {String} card_number
 */

CartPaymentCreditCard.prototype['card_number'] = undefined;
/**
 * Hosted field token for the card number
 * @member {String} card_number_token
 */

CartPaymentCreditCard.prototype['card_number_token'] = undefined;
/**
 * Card type
 * @member {String} card_type
 */

CartPaymentCreditCard.prototype['card_type'] = undefined;
/**
 * Card verification number (masked)
 * @member {String} card_verification_number
 */

CartPaymentCreditCard.prototype['card_verification_number'] = undefined;
/**
 * Hosted field token for the card verification number
 * @member {String} card_verification_number_token
 */

CartPaymentCreditCard.prototype['card_verification_number_token'] = undefined;
/**
 * ID of the stored credit card to use
 * @member {Number} customer_profile_credit_card_id
 */

CartPaymentCreditCard.prototype['customer_profile_credit_card_id'] = undefined;
/**
 * True if the customer wants to store the card on their profile for future re-use
 * @member {Boolean} store_credit_card
 */

CartPaymentCreditCard.prototype['store_credit_card'] = undefined;
var _default = CartPaymentCreditCard;
exports["default"] = _default;