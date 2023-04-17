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
 * The CartCustomerProfileCreditCard model module.
 * @module com.ultracart.admin.v2.models/CartCustomerProfileCreditCard
 * @version 4.0.146
 */
var CartCustomerProfileCreditCard = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartCustomerProfileCreditCard</code>.
   * @alias module:com.ultracart.admin.v2.models/CartCustomerProfileCreditCard
   */
  function CartCustomerProfileCreditCard() {
    _classCallCheck(this, CartCustomerProfileCreditCard);

    CartCustomerProfileCreditCard.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartCustomerProfileCreditCard, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartCustomerProfileCreditCard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartCustomerProfileCreditCard} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartCustomerProfileCreditCard} The populated <code>CartCustomerProfileCreditCard</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartCustomerProfileCreditCard();

        if (data.hasOwnProperty('card_expiration_month')) {
          obj['card_expiration_month'] = _ApiClient["default"].convertToType(data['card_expiration_month'], 'Number');
        }

        if (data.hasOwnProperty('card_expiration_year')) {
          obj['card_expiration_year'] = _ApiClient["default"].convertToType(data['card_expiration_year'], 'Number');
        }

        if (data.hasOwnProperty('card_number')) {
          obj['card_number'] = _ApiClient["default"].convertToType(data['card_number'], 'String');
        }

        if (data.hasOwnProperty('card_type')) {
          obj['card_type'] = _ApiClient["default"].convertToType(data['card_type'], 'String');
        }

        if (data.hasOwnProperty('customer_profile_credit_card_id')) {
          obj['customer_profile_credit_card_id'] = _ApiClient["default"].convertToType(data['customer_profile_credit_card_id'], 'Number');
        }

        if (data.hasOwnProperty('last_used_date')) {
          obj['last_used_date'] = _ApiClient["default"].convertToType(data['last_used_date'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CartCustomerProfileCreditCard;
}();
/**
 * Card expiration month (1-12)
 * @member {Number} card_expiration_month
 */


CartCustomerProfileCreditCard.prototype['card_expiration_month'] = undefined;
/**
 * Card expiration year (four digit)
 * @member {Number} card_expiration_year
 */

CartCustomerProfileCreditCard.prototype['card_expiration_year'] = undefined;
/**
 * Card number (masked last 4 digits)
 * @member {String} card_number
 */

CartCustomerProfileCreditCard.prototype['card_number'] = undefined;
/**
 * Card type
 * @member {module:com.ultracart.admin.v2.models/CartCustomerProfileCreditCard.CardTypeEnum} card_type
 */

CartCustomerProfileCreditCard.prototype['card_type'] = undefined;
/**
 * Unique identifier for this stored card
 * @member {Number} customer_profile_credit_card_id
 */

CartCustomerProfileCreditCard.prototype['customer_profile_credit_card_id'] = undefined;
/**
 * Last used
 * @member {String} last_used_date
 */

CartCustomerProfileCreditCard.prototype['last_used_date'] = undefined;
/**
 * Allowed values for the <code>card_type</code> property.
 * @enum {String}
 * @readonly
 */

CartCustomerProfileCreditCard['CardTypeEnum'] = {
  /**
   * value: "AMEX"
   * @const
   */
  "AMEX": "AMEX",

  /**
   * value: "Diners Club"
   * @const
   */
  "Diners Club": "Diners Club",

  /**
   * value: "Discover"
   * @const
   */
  "Discover": "Discover",

  /**
   * value: "MasterCard"
   * @const
   */
  "MasterCard": "MasterCard",

  /**
   * value: "JCB"
   * @const
   */
  "JCB": "JCB",

  /**
   * value: "VISA"
   * @const
   */
  "VISA": "VISA"
};
var _default = CartCustomerProfileCreditCard;
exports["default"] = _default;