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
 * The OrderPaymentHealthBenefitCard model module.
 * @module com.ultracart.admin.v2.models/OrderPaymentHealthBenefitCard
 * @version 4.0.187
 */
var OrderPaymentHealthBenefitCard = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderPaymentHealthBenefitCard</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderPaymentHealthBenefitCard
   */
  function OrderPaymentHealthBenefitCard() {
    _classCallCheck(this, OrderPaymentHealthBenefitCard);

    OrderPaymentHealthBenefitCard.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderPaymentHealthBenefitCard, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderPaymentHealthBenefitCard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderPaymentHealthBenefitCard} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderPaymentHealthBenefitCard} The populated <code>OrderPaymentHealthBenefitCard</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderPaymentHealthBenefitCard();

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

        if (data.hasOwnProperty('health_benefit_card_number_truncated')) {
          obj['health_benefit_card_number_truncated'] = _ApiClient["default"].convertToType(data['health_benefit_card_number_truncated'], 'Boolean');
        }

        if (data.hasOwnProperty('health_benefit_card_verification_number_token')) {
          obj['health_benefit_card_verification_number_token'] = _ApiClient["default"].convertToType(data['health_benefit_card_verification_number_token'], 'String');
        }
      }

      return obj;
    }
  }]);

  return OrderPaymentHealthBenefitCard;
}();
/**
 * Health benefit card expiration month (1-12)
 * @member {Number} health_benefit_card_expiration_month
 */


OrderPaymentHealthBenefitCard.prototype['health_benefit_card_expiration_month'] = undefined;
/**
 * Health benefit card expiration year (Four digit year)
 * @member {Number} health_benefit_card_expiration_year
 */

OrderPaymentHealthBenefitCard.prototype['health_benefit_card_expiration_year'] = undefined;
/**
 * Health benefit card number (masked to last 4)
 * @member {String} health_benefit_card_number
 */

OrderPaymentHealthBenefitCard.prototype['health_benefit_card_number'] = undefined;
/**
 * Health benefit card number token from hosted fields used to update the health benefit card number
 * @member {String} health_benefit_card_number_token
 */

OrderPaymentHealthBenefitCard.prototype['health_benefit_card_number_token'] = undefined;
/**
 * True if the health benefit card has been truncated
 * @member {Boolean} health_benefit_card_number_truncated
 */

OrderPaymentHealthBenefitCard.prototype['health_benefit_card_number_truncated'] = undefined;
/**
 * Health benefit card verification number token from hosted fields, only for import/insert of new orders, completely ignored for updates, and always null/empty for queries
 * @member {String} health_benefit_card_verification_number_token
 */

OrderPaymentHealthBenefitCard.prototype['health_benefit_card_verification_number_token'] = undefined;
var _default = OrderPaymentHealthBenefitCard;
exports["default"] = _default;