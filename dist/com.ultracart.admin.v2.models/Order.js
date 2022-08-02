"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Customer = _interopRequireDefault(require("./Customer"));

var _OrderAffiliate = _interopRequireDefault(require("./OrderAffiliate"));

var _OrderAutoOrder = _interopRequireDefault(require("./OrderAutoOrder"));

var _OrderBilling = _interopRequireDefault(require("./OrderBilling"));

var _OrderBuysafe = _interopRequireDefault(require("./OrderBuysafe"));

var _OrderChannelPartner = _interopRequireDefault(require("./OrderChannelPartner"));

var _OrderCheckout = _interopRequireDefault(require("./OrderCheckout"));

var _OrderCoupon = _interopRequireDefault(require("./OrderCoupon"));

var _OrderDigitalOrder = _interopRequireDefault(require("./OrderDigitalOrder"));

var _OrderEdi = _interopRequireDefault(require("./OrderEdi"));

var _OrderFraudScore = _interopRequireDefault(require("./OrderFraudScore"));

var _OrderGift = _interopRequireDefault(require("./OrderGift"));

var _OrderGiftCertificate = _interopRequireDefault(require("./OrderGiftCertificate"));

var _OrderInternal = _interopRequireDefault(require("./OrderInternal"));

var _OrderItem = _interopRequireDefault(require("./OrderItem"));

var _OrderLinkedShipment = _interopRequireDefault(require("./OrderLinkedShipment"));

var _OrderMarketing = _interopRequireDefault(require("./OrderMarketing"));

var _OrderPayment = _interopRequireDefault(require("./OrderPayment"));

var _OrderProperty = _interopRequireDefault(require("./OrderProperty"));

var _OrderQuote = _interopRequireDefault(require("./OrderQuote"));

var _OrderSalesforce = _interopRequireDefault(require("./OrderSalesforce"));

var _OrderShipping = _interopRequireDefault(require("./OrderShipping"));

var _OrderSummary = _interopRequireDefault(require("./OrderSummary"));

var _OrderTag = _interopRequireDefault(require("./OrderTag"));

var _OrderTaxes = _interopRequireDefault(require("./OrderTaxes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Order model module.
 * @module com.ultracart.admin.v2.models/Order
 * @version 4.0.47-RC
 */
var Order = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Order</code>.
   * @alias module:com.ultracart.admin.v2.models/Order
   */
  function Order() {
    _classCallCheck(this, Order);

    Order.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Order, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Order</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Order} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Order} The populated <code>Order</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Order();

        if (data.hasOwnProperty('affiliates')) {
          obj['affiliates'] = _ApiClient["default"].convertToType(data['affiliates'], [_OrderAffiliate["default"]]);
        }

        if (data.hasOwnProperty('auto_order')) {
          obj['auto_order'] = _OrderAutoOrder["default"].constructFromObject(data['auto_order']);
        }

        if (data.hasOwnProperty('billing')) {
          obj['billing'] = _OrderBilling["default"].constructFromObject(data['billing']);
        }

        if (data.hasOwnProperty('buysafe')) {
          obj['buysafe'] = _OrderBuysafe["default"].constructFromObject(data['buysafe']);
        }

        if (data.hasOwnProperty('channel_partner')) {
          obj['channel_partner'] = _OrderChannelPartner["default"].constructFromObject(data['channel_partner']);
        }

        if (data.hasOwnProperty('checkout')) {
          obj['checkout'] = _OrderCheckout["default"].constructFromObject(data['checkout']);
        }

        if (data.hasOwnProperty('coupons')) {
          obj['coupons'] = _ApiClient["default"].convertToType(data['coupons'], [_OrderCoupon["default"]]);
        }

        if (data.hasOwnProperty('creation_dts')) {
          obj['creation_dts'] = _ApiClient["default"].convertToType(data['creation_dts'], 'String');
        }

        if (data.hasOwnProperty('currency_code')) {
          obj['currency_code'] = _ApiClient["default"].convertToType(data['currency_code'], 'String');
        }

        if (data.hasOwnProperty('current_stage')) {
          obj['current_stage'] = _ApiClient["default"].convertToType(data['current_stage'], 'String');
        }

        if (data.hasOwnProperty('customer_profile')) {
          obj['customer_profile'] = _Customer["default"].constructFromObject(data['customer_profile']);
        }

        if (data.hasOwnProperty('digital_order')) {
          obj['digital_order'] = _OrderDigitalOrder["default"].constructFromObject(data['digital_order']);
        }

        if (data.hasOwnProperty('edi')) {
          obj['edi'] = _OrderEdi["default"].constructFromObject(data['edi']);
        }

        if (data.hasOwnProperty('exchange_rate')) {
          obj['exchange_rate'] = _ApiClient["default"].convertToType(data['exchange_rate'], 'Number');
        }

        if (data.hasOwnProperty('fraud_score')) {
          obj['fraud_score'] = _OrderFraudScore["default"].constructFromObject(data['fraud_score']);
        }

        if (data.hasOwnProperty('gift')) {
          obj['gift'] = _OrderGift["default"].constructFromObject(data['gift']);
        }

        if (data.hasOwnProperty('gift_certificate')) {
          obj['gift_certificate'] = _OrderGiftCertificate["default"].constructFromObject(data['gift_certificate']);
        }

        if (data.hasOwnProperty('internal')) {
          obj['internal'] = _OrderInternal["default"].constructFromObject(data['internal']);
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_OrderItem["default"]]);
        }

        if (data.hasOwnProperty('language_iso_code')) {
          obj['language_iso_code'] = _ApiClient["default"].convertToType(data['language_iso_code'], 'String');
        }

        if (data.hasOwnProperty('linked_shipment')) {
          obj['linked_shipment'] = _OrderLinkedShipment["default"].constructFromObject(data['linked_shipment']);
        }

        if (data.hasOwnProperty('marketing')) {
          obj['marketing'] = _OrderMarketing["default"].constructFromObject(data['marketing']);
        }

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('order_id')) {
          obj['order_id'] = _ApiClient["default"].convertToType(data['order_id'], 'String');
        }

        if (data.hasOwnProperty('payment')) {
          obj['payment'] = _OrderPayment["default"].constructFromObject(data['payment']);
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ApiClient["default"].convertToType(data['properties'], [_OrderProperty["default"]]);
        }

        if (data.hasOwnProperty('quote')) {
          obj['quote'] = _OrderQuote["default"].constructFromObject(data['quote']);
        }

        if (data.hasOwnProperty('refund_dts')) {
          obj['refund_dts'] = _ApiClient["default"].convertToType(data['refund_dts'], 'String');
        }

        if (data.hasOwnProperty('reject_dts')) {
          obj['reject_dts'] = _ApiClient["default"].convertToType(data['reject_dts'], 'String');
        }

        if (data.hasOwnProperty('salesforce')) {
          obj['salesforce'] = _OrderSalesforce["default"].constructFromObject(data['salesforce']);
        }

        if (data.hasOwnProperty('shipping')) {
          obj['shipping'] = _OrderShipping["default"].constructFromObject(data['shipping']);
        }

        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _OrderSummary["default"].constructFromObject(data['summary']);
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_OrderTag["default"]]);
        }

        if (data.hasOwnProperty('taxes')) {
          obj['taxes'] = _OrderTaxes["default"].constructFromObject(data['taxes']);
        }
      }

      return obj;
    }
  }]);

  return Order;
}();
/**
 * Affiliates if any were associated with the order.  The first one in the array sent the order and each subsequent affiliate is the recruiter that earns a downline commission.
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderAffiliate>} affiliates
 */


Order.prototype['affiliates'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/OrderAutoOrder} auto_order
 */

Order.prototype['auto_order'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/OrderBilling} billing
 */

Order.prototype['billing'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/OrderBuysafe} buysafe
 */

Order.prototype['buysafe'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/OrderChannelPartner} channel_partner
 */

Order.prototype['channel_partner'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/OrderCheckout} checkout
 */

Order.prototype['checkout'] = undefined;
/**
 * Coupons
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderCoupon>} coupons
 */

Order.prototype['coupons'] = undefined;
/**
 * Date/time that the order was created
 * @member {String} creation_dts
 */

Order.prototype['creation_dts'] = undefined;
/**
 * Currency code that the customer used if different than the merchant's base currency code
 * @member {String} currency_code
 */

Order.prototype['currency_code'] = undefined;
/**
 * Current stage that the order is in.
 * @member {module:com.ultracart.admin.v2.models/Order.CurrentStageEnum} current_stage
 */

Order.prototype['current_stage'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Customer} customer_profile
 */

Order.prototype['customer_profile'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/OrderDigitalOrder} digital_order
 */

Order.prototype['digital_order'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/OrderEdi} edi
 */

Order.prototype['edi'] = undefined;
/**
 * Exchange rate at the time the order was placed if currency code is different than the base currency
 * @member {Number} exchange_rate
 */

Order.prototype['exchange_rate'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/OrderFraudScore} fraud_score
 */

Order.prototype['fraud_score'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/OrderGift} gift
 */

Order.prototype['gift'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/OrderGiftCertificate} gift_certificate
 */

Order.prototype['gift_certificate'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/OrderInternal} internal
 */

Order.prototype['internal'] = undefined;
/**
 * Items
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderItem>} items
 */

Order.prototype['items'] = undefined;
/**
 * Three letter ISO-639 language code used by the customer during the checkout if different than the default language
 * @member {String} language_iso_code
 */

Order.prototype['language_iso_code'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/OrderLinkedShipment} linked_shipment
 */

Order.prototype['linked_shipment'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/OrderMarketing} marketing
 */

Order.prototype['marketing'] = undefined;
/**
 * UltraCart merchant ID owning this order
 * @member {String} merchant_id
 */

Order.prototype['merchant_id'] = undefined;
/**
 * Order ID
 * @member {String} order_id
 */

Order.prototype['order_id'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/OrderPayment} payment
 */

Order.prototype['payment'] = undefined;
/**
 * Properties, available only through update, not through insert due to the nature of how properties are handled internally
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderProperty>} properties
 */

Order.prototype['properties'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/OrderQuote} quote
 */

Order.prototype['quote'] = undefined;
/**
 * If the order was refunded, the date/time that the last refund occurred
 * @member {String} refund_dts
 */

Order.prototype['refund_dts'] = undefined;
/**
 * If the order was rejected, the date/time that the rejection occurred
 * @member {String} reject_dts
 */

Order.prototype['reject_dts'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/OrderSalesforce} salesforce
 */

Order.prototype['salesforce'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/OrderShipping} shipping
 */

Order.prototype['shipping'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/OrderSummary} summary
 */

Order.prototype['summary'] = undefined;
/**
 * tags, available only through update, not through insert due to the nature of how tags are handled internally
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderTag>} Tags
 */

Order.prototype['Tags'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/OrderTaxes} taxes
 */

Order.prototype['taxes'] = undefined;
/**
 * Allowed values for the <code>current_stage</code> property.
 * @enum {String}
 * @readonly
 */

Order['CurrentStageEnum'] = {
  /**
   * value: "Accounts Receivable"
   * @const
   */
  "Accounts Receivable": "Accounts Receivable",

  /**
   * value: "Pending Clearance"
   * @const
   */
  "Pending Clearance": "Pending Clearance",

  /**
   * value: "Fraud Review"
   * @const
   */
  "Fraud Review": "Fraud Review",

  /**
   * value: "Rejected"
   * @const
   */
  "Rejected": "Rejected",

  /**
   * value: "Shipping Department"
   * @const
   */
  "Shipping Department": "Shipping Department",

  /**
   * value: "Completed Order"
   * @const
   */
  "Completed Order": "Completed Order",

  /**
   * value: "Quote Request"
   * @const
   */
  "Quote Request": "Quote Request",

  /**
   * value: "Quote Sent"
   * @const
   */
  "Quote Sent": "Quote Sent",

  /**
   * value: "Least Cost Routing"
   * @const
   */
  "Least Cost Routing": "Least Cost Routing",

  /**
   * value: "Unknown"
   * @const
   */
  "Unknown": "Unknown",

  /**
   * value: "Pre-ordered"
   * @const
   */
  "Pre-ordered": "Pre-ordered"
};
var _default = Order;
exports["default"] = _default;