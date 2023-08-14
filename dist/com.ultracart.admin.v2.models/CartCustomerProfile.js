"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CartCustomerProfileAddress = _interopRequireDefault(require("./CartCustomerProfileAddress"));

var _CartCustomerProfileCreditCard = _interopRequireDefault(require("./CartCustomerProfileCreditCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CartCustomerProfile model module.
 * @module com.ultracart.admin.v2.models/CartCustomerProfile
 * @version 4.0.169
 */
var CartCustomerProfile = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartCustomerProfile</code>.
   * @alias module:com.ultracart.admin.v2.models/CartCustomerProfile
   */
  function CartCustomerProfile() {
    _classCallCheck(this, CartCustomerProfile);

    CartCustomerProfile.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartCustomerProfile, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartCustomerProfile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartCustomerProfile} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartCustomerProfile} The populated <code>CartCustomerProfile</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartCustomerProfile();

        if (data.hasOwnProperty('allow_3rd_party_billing')) {
          obj['allow_3rd_party_billing'] = _ApiClient["default"].convertToType(data['allow_3rd_party_billing'], 'Boolean');
        }

        if (data.hasOwnProperty('allow_cod')) {
          obj['allow_cod'] = _ApiClient["default"].convertToType(data['allow_cod'], 'Boolean');
        }

        if (data.hasOwnProperty('allow_purchase_order')) {
          obj['allow_purchase_order'] = _ApiClient["default"].convertToType(data['allow_purchase_order'], 'Boolean');
        }

        if (data.hasOwnProperty('billing_addresses')) {
          obj['billing_addresses'] = _ApiClient["default"].convertToType(data['billing_addresses'], [_CartCustomerProfileAddress["default"]]);
        }

        if (data.hasOwnProperty('credit_cards')) {
          obj['credit_cards'] = _ApiClient["default"].convertToType(data['credit_cards'], [_CartCustomerProfileCreditCard["default"]]);
        }

        if (data.hasOwnProperty('customer_profile_oid')) {
          obj['customer_profile_oid'] = _ApiClient["default"].convertToType(data['customer_profile_oid'], 'Number');
        }

        if (data.hasOwnProperty('dhl_account_number')) {
          obj['dhl_account_number'] = _ApiClient["default"].convertToType(data['dhl_account_number'], 'String');
        }

        if (data.hasOwnProperty('dhl_duty_account_number')) {
          obj['dhl_duty_account_number'] = _ApiClient["default"].convertToType(data['dhl_duty_account_number'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('fedex_account_number')) {
          obj['fedex_account_number'] = _ApiClient["default"].convertToType(data['fedex_account_number'], 'String');
        }

        if (data.hasOwnProperty('free_shipping')) {
          obj['free_shipping'] = _ApiClient["default"].convertToType(data['free_shipping'], 'Boolean');
        }

        if (data.hasOwnProperty('free_shipping_minimum')) {
          obj['free_shipping_minimum'] = _ApiClient["default"].convertToType(data['free_shipping_minimum'], 'Number');
        }

        if (data.hasOwnProperty('maximum_item_count')) {
          obj['maximum_item_count'] = _ApiClient["default"].convertToType(data['maximum_item_count'], 'Number');
        }

        if (data.hasOwnProperty('minimum_item_count')) {
          obj['minimum_item_count'] = _ApiClient["default"].convertToType(data['minimum_item_count'], 'Number');
        }

        if (data.hasOwnProperty('minimum_subtotal')) {
          obj['minimum_subtotal'] = _ApiClient["default"].convertToType(data['minimum_subtotal'], 'Number');
        }

        if (data.hasOwnProperty('no_coupons')) {
          obj['no_coupons'] = _ApiClient["default"].convertToType(data['no_coupons'], 'Boolean');
        }

        if (data.hasOwnProperty('no_free_shipping')) {
          obj['no_free_shipping'] = _ApiClient["default"].convertToType(data['no_free_shipping'], 'Boolean');
        }

        if (data.hasOwnProperty('no_realtime_charge')) {
          obj['no_realtime_charge'] = _ApiClient["default"].convertToType(data['no_realtime_charge'], 'Boolean');
        }

        if (data.hasOwnProperty('pricing_tiers')) {
          obj['pricing_tiers'] = _ApiClient["default"].convertToType(data['pricing_tiers'], ['String']);
        }

        if (data.hasOwnProperty('shipping_addresses')) {
          obj['shipping_addresses'] = _ApiClient["default"].convertToType(data['shipping_addresses'], [_CartCustomerProfileAddress["default"]]);
        }

        if (data.hasOwnProperty('signup_dts')) {
          obj['signup_dts'] = _ApiClient["default"].convertToType(data['signup_dts'], 'String');
        }

        if (data.hasOwnProperty('tax_exempt')) {
          obj['tax_exempt'] = _ApiClient["default"].convertToType(data['tax_exempt'], 'Boolean');
        }

        if (data.hasOwnProperty('ups_account_number')) {
          obj['ups_account_number'] = _ApiClient["default"].convertToType(data['ups_account_number'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CartCustomerProfile;
}();
/**
 * True if profile is allowed to bill to their 3rd party shipping account
 * @member {Boolean} allow_3rd_party_billing
 */


CartCustomerProfile.prototype['allow_3rd_party_billing'] = undefined;
/**
 * True if this profile is allowed to use a COD
 * @member {Boolean} allow_cod
 */

CartCustomerProfile.prototype['allow_cod'] = undefined;
/**
 * True if this profile is allowed to use a purchase order
 * @member {Boolean} allow_purchase_order
 */

CartCustomerProfile.prototype['allow_purchase_order'] = undefined;
/**
 * Billing addresses on file for this profile
 * @member {Array.<module:com.ultracart.admin.v2.models/CartCustomerProfileAddress>} billing_addresses
 */

CartCustomerProfile.prototype['billing_addresses'] = undefined;
/**
 * Credit cards on file for this profile (masked)
 * @member {Array.<module:com.ultracart.admin.v2.models/CartCustomerProfileCreditCard>} credit_cards
 */

CartCustomerProfile.prototype['credit_cards'] = undefined;
/**
 * Unique identifier
 * @member {Number} customer_profile_oid
 */

CartCustomerProfile.prototype['customer_profile_oid'] = undefined;
/**
 * DHL account number on file
 * @member {String} dhl_account_number
 */

CartCustomerProfile.prototype['dhl_account_number'] = undefined;
/**
 * DHL duty account number on file
 * @member {String} dhl_duty_account_number
 */

CartCustomerProfile.prototype['dhl_duty_account_number'] = undefined;
/**
 * Email
 * @member {String} email
 */

CartCustomerProfile.prototype['email'] = undefined;
/**
 * FedEx account number on file
 * @member {String} fedex_account_number
 */

CartCustomerProfile.prototype['fedex_account_number'] = undefined;
/**
 * True if this profile always qualifies for free shipping
 * @member {Boolean} free_shipping
 */

CartCustomerProfile.prototype['free_shipping'] = undefined;
/**
 * The minimum amount that this profile has to purchase to qualify for free shipping
 * @member {Number} free_shipping_minimum
 */

CartCustomerProfile.prototype['free_shipping_minimum'] = undefined;
/**
 * Maximum item count this profile can purchase
 * @member {Number} maximum_item_count
 */

CartCustomerProfile.prototype['maximum_item_count'] = undefined;
/**
 * Minimum item count this profile must purchase
 * @member {Number} minimum_item_count
 */

CartCustomerProfile.prototype['minimum_item_count'] = undefined;
/**
 * Minimum subtotal this profile must purchase
 * @member {Number} minimum_subtotal
 */

CartCustomerProfile.prototype['minimum_subtotal'] = undefined;
/**
 * True if this profile is prevented from using coupons
 * @member {Boolean} no_coupons
 */

CartCustomerProfile.prototype['no_coupons'] = undefined;
/**
 * True if this profile is never given free shipping
 * @member {Boolean} no_free_shipping
 */

CartCustomerProfile.prototype['no_free_shipping'] = undefined;
/**
 * True if this customers orders are not charged in real-time
 * @member {Boolean} no_realtime_charge
 */

CartCustomerProfile.prototype['no_realtime_charge'] = undefined;
/**
 * Pricing tier names this profile qualifies for
 * @member {Array.<String>} pricing_tiers
 */

CartCustomerProfile.prototype['pricing_tiers'] = undefined;
/**
 * Shipping addresses on file for this profile
 * @member {Array.<module:com.ultracart.admin.v2.models/CartCustomerProfileAddress>} shipping_addresses
 */

CartCustomerProfile.prototype['shipping_addresses'] = undefined;
/**
 * Signup date
 * @member {String} signup_dts
 */

CartCustomerProfile.prototype['signup_dts'] = undefined;
/**
 * True if this profile is exempt from sales tax
 * @member {Boolean} tax_exempt
 */

CartCustomerProfile.prototype['tax_exempt'] = undefined;
/**
 * UPS account number on file
 * @member {String} ups_account_number
 */

CartCustomerProfile.prototype['ups_account_number'] = undefined;
var _default = CartCustomerProfile;
exports["default"] = _default;