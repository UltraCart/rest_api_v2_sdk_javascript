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
 * The CartSettingsPaymentCreditCard model module.
 * @module com.ultracart.admin.v2.models/CartSettingsPaymentCreditCard
 * @version 4.0.135
 */
var CartSettingsPaymentCreditCard = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartSettingsPaymentCreditCard</code>.
   * @alias module:com.ultracart.admin.v2.models/CartSettingsPaymentCreditCard
   */
  function CartSettingsPaymentCreditCard() {
    _classCallCheck(this, CartSettingsPaymentCreditCard);

    CartSettingsPaymentCreditCard.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartSettingsPaymentCreditCard, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartSettingsPaymentCreditCard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartSettingsPaymentCreditCard} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartSettingsPaymentCreditCard} The populated <code>CartSettingsPaymentCreditCard</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartSettingsPaymentCreditCard();

        if (data.hasOwnProperty('collect_credit_card_verification_number')) {
          obj['collect_credit_card_verification_number'] = _ApiClient["default"].convertToType(data['collect_credit_card_verification_number'], 'Boolean');
        }

        if (data.hasOwnProperty('credit_card_types')) {
          obj['credit_card_types'] = _ApiClient["default"].convertToType(data['credit_card_types'], ['String']);
        }

        if (data.hasOwnProperty('hosted_fields_shopping_cart_token')) {
          obj['hosted_fields_shopping_cart_token'] = _ApiClient["default"].convertToType(data['hosted_fields_shopping_cart_token'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CartSettingsPaymentCreditCard;
}();
/**
 * True if the credit card verification number should be collected
 * @member {Boolean} collect_credit_card_verification_number
 */


CartSettingsPaymentCreditCard.prototype['collect_credit_card_verification_number'] = undefined;
/**
 * Available credit card types
 * @member {Array.<String>} credit_card_types
 */

CartSettingsPaymentCreditCard.prototype['credit_card_types'] = undefined;
/**
 * The shoppingCartToken needed for proper initialization of hosted fields collection
 * @member {String} hosted_fields_shopping_cart_token
 */

CartSettingsPaymentCreditCard.prototype['hosted_fields_shopping_cart_token'] = undefined;
var _default = CartSettingsPaymentCreditCard;
exports["default"] = _default;