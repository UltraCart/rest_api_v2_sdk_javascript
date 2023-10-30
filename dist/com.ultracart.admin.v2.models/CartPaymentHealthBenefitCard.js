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
 * The CartPaymentHealthBenefitCard model module.
 * @module com.ultracart.admin.v2.models/CartPaymentHealthBenefitCard
 * @version 4.0.183
 */
var CartPaymentHealthBenefitCard = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartPaymentHealthBenefitCard</code>.
   * @alias module:com.ultracart.admin.v2.models/CartPaymentHealthBenefitCard
   */
  function CartPaymentHealthBenefitCard() {
    _classCallCheck(this, CartPaymentHealthBenefitCard);

    CartPaymentHealthBenefitCard.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartPaymentHealthBenefitCard, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartPaymentHealthBenefitCard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartPaymentHealthBenefitCard} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartPaymentHealthBenefitCard} The populated <code>CartPaymentHealthBenefitCard</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartPaymentHealthBenefitCard();

        if (data.hasOwnProperty('health_benefit_card_expiration_month')) {
          obj['health_benefit_card_expiration_month'] = _ApiClient["default"].convertToType(data['health_benefit_card_expiration_month'], 'Number');
        }

        if (data.hasOwnProperty('health_benefit_card_expiration_year')) {
          obj['health_benefit_card_expiration_year'] = _ApiClient["default"].convertToType(data['health_benefit_card_expiration_year'], 'Number');
        }

        if (data.hasOwnProperty('health_benefit_card_number')) {
          obj['health_benefit_card_number'] = _ApiClient["default"].convertToType(data['health_benefit_card_number'], 'String');
        }

        if (data.hasOwnProperty('health_benefit_card_number_token')) {
          obj['health_benefit_card_number_token'] = _ApiClient["default"].convertToType(data['health_benefit_card_number_token'], 'String');
        }

        if (data.hasOwnProperty('health_benefit_card_verification_number')) {
          obj['health_benefit_card_verification_number'] = _ApiClient["default"].convertToType(data['health_benefit_card_verification_number'], 'String');
        }

        if (data.hasOwnProperty('health_benefit_card_verification_number_token')) {
          obj['health_benefit_card_verification_number_token'] = _ApiClient["default"].convertToType(data['health_benefit_card_verification_number_token'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CartPaymentHealthBenefitCard;
}();
/**
 * Health benefit expiration month (1-12)
 * @member {Number} health_benefit_card_expiration_month
 */


CartPaymentHealthBenefitCard.prototype['health_benefit_card_expiration_month'] = undefined;
/**
 * Health benefit card expiration year (four digit year)
 * @member {Number} health_benefit_card_expiration_year
 */

CartPaymentHealthBenefitCard.prototype['health_benefit_card_expiration_year'] = undefined;
/**
 * Health benefit card number (masked to the last 4)
 * @member {String} health_benefit_card_number
 */

CartPaymentHealthBenefitCard.prototype['health_benefit_card_number'] = undefined;
/**
 * Hosted field token for the card number
 * @member {String} health_benefit_card_number_token
 */

CartPaymentHealthBenefitCard.prototype['health_benefit_card_number_token'] = undefined;
/**
 * Health benefit card verification number (masked)
 * @member {String} health_benefit_card_verification_number
 */

CartPaymentHealthBenefitCard.prototype['health_benefit_card_verification_number'] = undefined;
/**
 * Hosted field token for the health benefit card verification number
 * @member {String} health_benefit_card_verification_number_token
 */

CartPaymentHealthBenefitCard.prototype['health_benefit_card_verification_number_token'] = undefined;
var _default = CartPaymentHealthBenefitCard;
exports["default"] = _default;