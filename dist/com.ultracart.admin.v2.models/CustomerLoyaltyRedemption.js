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
 * The CustomerLoyaltyRedemption model module.
 * @module com.ultracart.admin.v2.models/CustomerLoyaltyRedemption
 * @version 4.0.151
 */
var CustomerLoyaltyRedemption = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerLoyaltyRedemption</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerLoyaltyRedemption
   */
  function CustomerLoyaltyRedemption() {
    _classCallCheck(this, CustomerLoyaltyRedemption);

    CustomerLoyaltyRedemption.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomerLoyaltyRedemption, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomerLoyaltyRedemption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerLoyaltyRedemption} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerLoyaltyRedemption} The populated <code>CustomerLoyaltyRedemption</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerLoyaltyRedemption();

        if (data.hasOwnProperty('coupon_code')) {
          obj['coupon_code'] = _ApiClient["default"].convertToType(data['coupon_code'], 'String');
        }

        if (data.hasOwnProperty('coupon_code_oid')) {
          obj['coupon_code_oid'] = _ApiClient["default"].convertToType(data['coupon_code_oid'], 'Number');
        }

        if (data.hasOwnProperty('coupon_used')) {
          obj['coupon_used'] = _ApiClient["default"].convertToType(data['coupon_used'], 'Boolean');
        }

        if (data.hasOwnProperty('description_for_customer')) {
          obj['description_for_customer'] = _ApiClient["default"].convertToType(data['description_for_customer'], 'String');
        }

        if (data.hasOwnProperty('expiration_dts')) {
          obj['expiration_dts'] = _ApiClient["default"].convertToType(data['expiration_dts'], 'String');
        }

        if (data.hasOwnProperty('gift_certificate_code')) {
          obj['gift_certificate_code'] = _ApiClient["default"].convertToType(data['gift_certificate_code'], 'String');
        }

        if (data.hasOwnProperty('gift_certificate_oid')) {
          obj['gift_certificate_oid'] = _ApiClient["default"].convertToType(data['gift_certificate_oid'], 'Number');
        }

        if (data.hasOwnProperty('loyalty_ledger_oid')) {
          obj['loyalty_ledger_oid'] = _ApiClient["default"].convertToType(data['loyalty_ledger_oid'], 'Number');
        }

        if (data.hasOwnProperty('loyalty_points')) {
          obj['loyalty_points'] = _ApiClient["default"].convertToType(data['loyalty_points'], 'Number');
        }

        if (data.hasOwnProperty('loyalty_redemption_oid')) {
          obj['loyalty_redemption_oid'] = _ApiClient["default"].convertToType(data['loyalty_redemption_oid'], 'Number');
        }

        if (data.hasOwnProperty('order_id')) {
          obj['order_id'] = _ApiClient["default"].convertToType(data['order_id'], 'String');
        }

        if (data.hasOwnProperty('redemption_dts')) {
          obj['redemption_dts'] = _ApiClient["default"].convertToType(data['redemption_dts'], 'String');
        }

        if (data.hasOwnProperty('remaining_balance')) {
          obj['remaining_balance'] = _ApiClient["default"].convertToType(data['remaining_balance'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CustomerLoyaltyRedemption;
}();
/**
 * Coupon code
 * @member {String} coupon_code
 */


CustomerLoyaltyRedemption.prototype['coupon_code'] = undefined;
/**
 * Coupon code OID
 * @member {Number} coupon_code_oid
 */

CustomerLoyaltyRedemption.prototype['coupon_code_oid'] = undefined;
/**
 * Coupon used
 * @member {Boolean} coupon_used
 */

CustomerLoyaltyRedemption.prototype['coupon_used'] = undefined;
/**
 * Description for customer
 * @member {String} description_for_customer
 */

CustomerLoyaltyRedemption.prototype['description_for_customer'] = undefined;
/**
 * Expiration date
 * @member {String} expiration_dts
 */

CustomerLoyaltyRedemption.prototype['expiration_dts'] = undefined;
/**
 * Gift certificate code
 * @member {String} gift_certificate_code
 */

CustomerLoyaltyRedemption.prototype['gift_certificate_code'] = undefined;
/**
 * Gift certificate oid
 * @member {Number} gift_certificate_oid
 */

CustomerLoyaltyRedemption.prototype['gift_certificate_oid'] = undefined;
/**
 * Loyalty ledger OID
 * @member {Number} loyalty_ledger_oid
 */

CustomerLoyaltyRedemption.prototype['loyalty_ledger_oid'] = undefined;
/**
 * Loyalty points
 * @member {Number} loyalty_points
 */

CustomerLoyaltyRedemption.prototype['loyalty_points'] = undefined;
/**
 * Loyalty redemption OID
 * @member {Number} loyalty_redemption_oid
 */

CustomerLoyaltyRedemption.prototype['loyalty_redemption_oid'] = undefined;
/**
 * Order id
 * @member {String} order_id
 */

CustomerLoyaltyRedemption.prototype['order_id'] = undefined;
/**
 * Redemption date
 * @member {String} redemption_dts
 */

CustomerLoyaltyRedemption.prototype['redemption_dts'] = undefined;
/**
 * Remaining balance
 * @member {Number} remaining_balance
 */

CustomerLoyaltyRedemption.prototype['remaining_balance'] = undefined;
var _default = CustomerLoyaltyRedemption;
exports["default"] = _default;