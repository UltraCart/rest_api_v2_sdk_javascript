"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CartAffiliate = _interopRequireDefault(require("./CartAffiliate"));

var _CartBilling = _interopRequireDefault(require("./CartBilling"));

var _CartBuysafe = _interopRequireDefault(require("./CartBuysafe"));

var _CartCheckout = _interopRequireDefault(require("./CartCheckout"));

var _CartCoupon = _interopRequireDefault(require("./CartCoupon"));

var _CartCurrencyConversion = _interopRequireDefault(require("./CartCurrencyConversion"));

var _CartCustomerProfile = _interopRequireDefault(require("./CartCustomerProfile"));

var _CartGift = _interopRequireDefault(require("./CartGift"));

var _CartGiftCertificate = _interopRequireDefault(require("./CartGiftCertificate"));

var _CartItem = _interopRequireDefault(require("./CartItem"));

var _CartMarketing = _interopRequireDefault(require("./CartMarketing"));

var _CartPayment = _interopRequireDefault(require("./CartPayment"));

var _CartProperty = _interopRequireDefault(require("./CartProperty"));

var _CartSettings = _interopRequireDefault(require("./CartSettings"));

var _CartShipping = _interopRequireDefault(require("./CartShipping"));

var _CartSummary = _interopRequireDefault(require("./CartSummary"));

var _CartTaxes = _interopRequireDefault(require("./CartTaxes"));

var _CartUpsellAfter = _interopRequireDefault(require("./CartUpsellAfter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Cart model module.
 * @module com.ultracart.admin.v2.models/Cart
 * @version 4.0.60-RC
 */
var Cart = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Cart</code>.
   * @alias module:com.ultracart.admin.v2.models/Cart
   */
  function Cart() {
    _classCallCheck(this, Cart);

    Cart.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Cart, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Cart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Cart} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Cart} The populated <code>Cart</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Cart();

        if (data.hasOwnProperty('affiliate')) {
          obj['affiliate'] = _CartAffiliate["default"].constructFromObject(data['affiliate']);
        }

        if (data.hasOwnProperty('affiliate_network_pixel_oid')) {
          obj['affiliate_network_pixel_oid'] = _ApiClient["default"].convertToType(data['affiliate_network_pixel_oid'], 'Number');
        }

        if (data.hasOwnProperty('base_currency_code')) {
          obj['base_currency_code'] = _ApiClient["default"].convertToType(data['base_currency_code'], 'String');
        }

        if (data.hasOwnProperty('billing')) {
          obj['billing'] = _CartBilling["default"].constructFromObject(data['billing']);
        }

        if (data.hasOwnProperty('buysafe')) {
          obj['buysafe'] = _CartBuysafe["default"].constructFromObject(data['buysafe']);
        }

        if (data.hasOwnProperty('cart_id')) {
          obj['cart_id'] = _ApiClient["default"].convertToType(data['cart_id'], 'String');
        }

        if (data.hasOwnProperty('checkout')) {
          obj['checkout'] = _CartCheckout["default"].constructFromObject(data['checkout']);
        }

        if (data.hasOwnProperty('coupons')) {
          obj['coupons'] = _ApiClient["default"].convertToType(data['coupons'], [_CartCoupon["default"]]);
        }

        if (data.hasOwnProperty('currency_code')) {
          obj['currency_code'] = _ApiClient["default"].convertToType(data['currency_code'], 'String');
        }

        if (data.hasOwnProperty('currency_conversion')) {
          obj['currency_conversion'] = _CartCurrencyConversion["default"].constructFromObject(data['currency_conversion']);
        }

        if (data.hasOwnProperty('customer_profile')) {
          obj['customer_profile'] = _CartCustomerProfile["default"].constructFromObject(data['customer_profile']);
        }

        if (data.hasOwnProperty('exchange_rate')) {
          obj['exchange_rate'] = _ApiClient["default"].convertToType(data['exchange_rate'], 'Number');
        }

        if (data.hasOwnProperty('gift')) {
          obj['gift'] = _CartGift["default"].constructFromObject(data['gift']);
        }

        if (data.hasOwnProperty('gift_certificate')) {
          obj['gift_certificate'] = _CartGiftCertificate["default"].constructFromObject(data['gift_certificate']);
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_CartItem["default"]]);
        }

        if (data.hasOwnProperty('language_iso_code')) {
          obj['language_iso_code'] = _ApiClient["default"].convertToType(data['language_iso_code'], 'String');
        }

        if (data.hasOwnProperty('logged_in')) {
          obj['logged_in'] = _ApiClient["default"].convertToType(data['logged_in'], 'Boolean');
        }

        if (data.hasOwnProperty('marketing')) {
          obj['marketing'] = _CartMarketing["default"].constructFromObject(data['marketing']);
        }

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('payment')) {
          obj['payment'] = _CartPayment["default"].constructFromObject(data['payment']);
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ApiClient["default"].convertToType(data['properties'], [_CartProperty["default"]]);
        }

        if (data.hasOwnProperty('settings')) {
          obj['settings'] = _CartSettings["default"].constructFromObject(data['settings']);
        }

        if (data.hasOwnProperty('shipping')) {
          obj['shipping'] = _CartShipping["default"].constructFromObject(data['shipping']);
        }

        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _CartSummary["default"].constructFromObject(data['summary']);
        }

        if (data.hasOwnProperty('taxes')) {
          obj['taxes'] = _CartTaxes["default"].constructFromObject(data['taxes']);
        }

        if (data.hasOwnProperty('upsell_after')) {
          obj['upsell_after'] = _CartUpsellAfter["default"].constructFromObject(data['upsell_after']);
        }
      }

      return obj;
    }
  }]);

  return Cart;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/CartAffiliate} affiliate
 */


Cart.prototype['affiliate'] = undefined;
/**
 * The affiliate network pixel identifier associated with the cart
 * @member {Number} affiliate_network_pixel_oid
 */

Cart.prototype['affiliate_network_pixel_oid'] = undefined;
/**
 * The ISO-4217 three letter base currency code of the account
 * @member {String} base_currency_code
 */

Cart.prototype['base_currency_code'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CartBilling} billing
 */

Cart.prototype['billing'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CartBuysafe} buysafe
 */

Cart.prototype['buysafe'] = undefined;
/**
 * Unique identifier for this cart
 * @member {String} cart_id
 */

Cart.prototype['cart_id'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CartCheckout} checkout
 */

Cart.prototype['checkout'] = undefined;
/**
 * Coupons
 * @member {Array.<module:com.ultracart.admin.v2.models/CartCoupon>} coupons
 */

Cart.prototype['coupons'] = undefined;
/**
 * The ISO-4217 three letter currency code the customer is viewing prices in
 * @member {String} currency_code
 */

Cart.prototype['currency_code'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CartCurrencyConversion} currency_conversion
 */

Cart.prototype['currency_conversion'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CartCustomerProfile} customer_profile
 */

Cart.prototype['customer_profile'] = undefined;
/**
 * The exchange rate if the customer is viewing a different currency than the base
 * @member {Number} exchange_rate
 */

Cart.prototype['exchange_rate'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CartGift} gift
 */

Cart.prototype['gift'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CartGiftCertificate} gift_certificate
 */

Cart.prototype['gift_certificate'] = undefined;
/**
 * Items
 * @member {Array.<module:com.ultracart.admin.v2.models/CartItem>} items
 */

Cart.prototype['items'] = undefined;
/**
 * The ISO-631 three letter code the customer would like to checkout with
 * @member {String} language_iso_code
 */

Cart.prototype['language_iso_code'] = undefined;
/**
 * True if the customer is logged into their profile
 * @member {Boolean} logged_in
 */

Cart.prototype['logged_in'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CartMarketing} marketing
 */

Cart.prototype['marketing'] = undefined;
/**
 * Merchant ID this cart is associated with
 * @member {String} merchant_id
 */

Cart.prototype['merchant_id'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CartPayment} payment
 */

Cart.prototype['payment'] = undefined;
/**
 * Properties associated with the cart
 * @member {Array.<module:com.ultracart.admin.v2.models/CartProperty>} properties
 */

Cart.prototype['properties'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CartSettings} settings
 */

Cart.prototype['settings'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CartShipping} shipping
 */

Cart.prototype['shipping'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CartSummary} summary
 */

Cart.prototype['summary'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CartTaxes} taxes
 */

Cart.prototype['taxes'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CartUpsellAfter} upsell_after
 */

Cart.prototype['upsell_after'] = undefined;
var _default = Cart;
exports["default"] = _default;