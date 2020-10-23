/*
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'com.ultracart.admin.v2.models/Customer', 'com.ultracart.admin.v2.models/OrderAffiliate', 'com.ultracart.admin.v2.models/OrderAutoOrder', 'com.ultracart.admin.v2.models/OrderBilling', 'com.ultracart.admin.v2.models/OrderBuysafe', 'com.ultracart.admin.v2.models/OrderChannelPartner', 'com.ultracart.admin.v2.models/OrderCheckout', 'com.ultracart.admin.v2.models/OrderCoupon', 'com.ultracart.admin.v2.models/OrderDigitalOrder', 'com.ultracart.admin.v2.models/OrderEdi', 'com.ultracart.admin.v2.models/OrderFraudScore', 'com.ultracart.admin.v2.models/OrderGift', 'com.ultracart.admin.v2.models/OrderGiftCertificate', 'com.ultracart.admin.v2.models/OrderInternal', 'com.ultracart.admin.v2.models/OrderItem', 'com.ultracart.admin.v2.models/OrderLinkedShipment', 'com.ultracart.admin.v2.models/OrderMarketing', 'com.ultracart.admin.v2.models/OrderPayment', 'com.ultracart.admin.v2.models/OrderProperty', 'com.ultracart.admin.v2.models/OrderQuote', 'com.ultracart.admin.v2.models/OrderSalesforce', 'com.ultracart.admin.v2.models/OrderShipping', 'com.ultracart.admin.v2.models/OrderSummary', 'com.ultracart.admin.v2.models/OrderTag', 'com.ultracart.admin.v2.models/OrderTaxes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Customer'), require('./OrderAffiliate'), require('./OrderAutoOrder'), require('./OrderBilling'), require('./OrderBuysafe'), require('./OrderChannelPartner'), require('./OrderCheckout'), require('./OrderCoupon'), require('./OrderDigitalOrder'), require('./OrderEdi'), require('./OrderFraudScore'), require('./OrderGift'), require('./OrderGiftCertificate'), require('./OrderInternal'), require('./OrderItem'), require('./OrderLinkedShipment'), require('./OrderMarketing'), require('./OrderPayment'), require('./OrderProperty'), require('./OrderQuote'), require('./OrderSalesforce'), require('./OrderShipping'), require('./OrderSummary'), require('./OrderTag'), require('./OrderTaxes'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.Order = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Customer, root.UltraCartRestApiV2.OrderAffiliate, root.UltraCartRestApiV2.OrderAutoOrder, root.UltraCartRestApiV2.OrderBilling, root.UltraCartRestApiV2.OrderBuysafe, root.UltraCartRestApiV2.OrderChannelPartner, root.UltraCartRestApiV2.OrderCheckout, root.UltraCartRestApiV2.OrderCoupon, root.UltraCartRestApiV2.OrderDigitalOrder, root.UltraCartRestApiV2.OrderEdi, root.UltraCartRestApiV2.OrderFraudScore, root.UltraCartRestApiV2.OrderGift, root.UltraCartRestApiV2.OrderGiftCertificate, root.UltraCartRestApiV2.OrderInternal, root.UltraCartRestApiV2.OrderItem, root.UltraCartRestApiV2.OrderLinkedShipment, root.UltraCartRestApiV2.OrderMarketing, root.UltraCartRestApiV2.OrderPayment, root.UltraCartRestApiV2.OrderProperty, root.UltraCartRestApiV2.OrderQuote, root.UltraCartRestApiV2.OrderSalesforce, root.UltraCartRestApiV2.OrderShipping, root.UltraCartRestApiV2.OrderSummary, root.UltraCartRestApiV2.OrderTag, root.UltraCartRestApiV2.OrderTaxes);
  }
}(this, function(ApiClient, Customer, OrderAffiliate, OrderAutoOrder, OrderBilling, OrderBuysafe, OrderChannelPartner, OrderCheckout, OrderCoupon, OrderDigitalOrder, OrderEdi, OrderFraudScore, OrderGift, OrderGiftCertificate, OrderInternal, OrderItem, OrderLinkedShipment, OrderMarketing, OrderPayment, OrderProperty, OrderQuote, OrderSalesforce, OrderShipping, OrderSummary, OrderTag, OrderTaxes) {
  'use strict';

  /**
   * The Order model module.
   * @module com.ultracart.admin.v2.models/Order
   * @version 3.0.33
   */

  /**
   * Constructs a new <code>Order</code>.
   * @alias module:com.ultracart.admin.v2.models/Order
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Order</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/Order} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/Order} The populated <code>Order</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('affiliates'))
        obj.affiliates = ApiClient.convertToType(data['affiliates'], [OrderAffiliate]);
      if (data.hasOwnProperty('auto_order'))
        obj.auto_order = OrderAutoOrder.constructFromObject(data['auto_order']);
      if (data.hasOwnProperty('billing'))
        obj.billing = OrderBilling.constructFromObject(data['billing']);
      if (data.hasOwnProperty('buysafe'))
        obj.buysafe = OrderBuysafe.constructFromObject(data['buysafe']);
      if (data.hasOwnProperty('channel_partner'))
        obj.channel_partner = OrderChannelPartner.constructFromObject(data['channel_partner']);
      if (data.hasOwnProperty('checkout'))
        obj.checkout = OrderCheckout.constructFromObject(data['checkout']);
      if (data.hasOwnProperty('coupons'))
        obj.coupons = ApiClient.convertToType(data['coupons'], [OrderCoupon]);
      if (data.hasOwnProperty('creation_dts'))
        obj.creation_dts = ApiClient.convertToType(data['creation_dts'], 'String');
      if (data.hasOwnProperty('currency_code'))
        obj.currency_code = ApiClient.convertToType(data['currency_code'], 'String');
      if (data.hasOwnProperty('current_stage'))
        obj.current_stage = ApiClient.convertToType(data['current_stage'], 'String');
      if (data.hasOwnProperty('customer_profile'))
        obj.customer_profile = Customer.constructFromObject(data['customer_profile']);
      if (data.hasOwnProperty('digital_order'))
        obj.digital_order = OrderDigitalOrder.constructFromObject(data['digital_order']);
      if (data.hasOwnProperty('edi'))
        obj.edi = OrderEdi.constructFromObject(data['edi']);
      if (data.hasOwnProperty('exchange_rate'))
        obj.exchange_rate = ApiClient.convertToType(data['exchange_rate'], 'Number');
      if (data.hasOwnProperty('fraud_score'))
        obj.fraud_score = OrderFraudScore.constructFromObject(data['fraud_score']);
      if (data.hasOwnProperty('gift'))
        obj.gift = OrderGift.constructFromObject(data['gift']);
      if (data.hasOwnProperty('gift_certificate'))
        obj.gift_certificate = OrderGiftCertificate.constructFromObject(data['gift_certificate']);
      if (data.hasOwnProperty('internal'))
        obj.internal = OrderInternal.constructFromObject(data['internal']);
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [OrderItem]);
      if (data.hasOwnProperty('language_iso_code'))
        obj.language_iso_code = ApiClient.convertToType(data['language_iso_code'], 'String');
      if (data.hasOwnProperty('linked_shipment'))
        obj.linked_shipment = OrderLinkedShipment.constructFromObject(data['linked_shipment']);
      if (data.hasOwnProperty('marketing'))
        obj.marketing = OrderMarketing.constructFromObject(data['marketing']);
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('order_id'))
        obj.order_id = ApiClient.convertToType(data['order_id'], 'String');
      if (data.hasOwnProperty('payment'))
        obj.payment = OrderPayment.constructFromObject(data['payment']);
      if (data.hasOwnProperty('properties'))
        obj.properties = ApiClient.convertToType(data['properties'], [OrderProperty]);
      if (data.hasOwnProperty('quote'))
        obj.quote = OrderQuote.constructFromObject(data['quote']);
      if (data.hasOwnProperty('refund_dts'))
        obj.refund_dts = ApiClient.convertToType(data['refund_dts'], 'String');
      if (data.hasOwnProperty('reject_dts'))
        obj.reject_dts = ApiClient.convertToType(data['reject_dts'], 'String');
      if (data.hasOwnProperty('salesforce'))
        obj.salesforce = OrderSalesforce.constructFromObject(data['salesforce']);
      if (data.hasOwnProperty('shipping'))
        obj.shipping = OrderShipping.constructFromObject(data['shipping']);
      if (data.hasOwnProperty('summary'))
        obj.summary = OrderSummary.constructFromObject(data['summary']);
      if (data.hasOwnProperty('Tags'))
        obj.Tags = ApiClient.convertToType(data['Tags'], [OrderTag]);
      if (data.hasOwnProperty('taxes'))
        obj.taxes = OrderTaxes.constructFromObject(data['taxes']);
    }
    return obj;
  }

  /**
   * Affiliates if any were associated with the order.  The first one in the array sent the order and each subsequent affiliate is the recruiter that earns a downline commission.
   * @member {Array.<module:com.ultracart.admin.v2.models/OrderAffiliate>} affiliates
   */
  exports.prototype.affiliates = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/OrderAutoOrder} auto_order
   */
  exports.prototype.auto_order = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/OrderBilling} billing
   */
  exports.prototype.billing = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/OrderBuysafe} buysafe
   */
  exports.prototype.buysafe = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/OrderChannelPartner} channel_partner
   */
  exports.prototype.channel_partner = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/OrderCheckout} checkout
   */
  exports.prototype.checkout = undefined;

  /**
   * Coupons
   * @member {Array.<module:com.ultracart.admin.v2.models/OrderCoupon>} coupons
   */
  exports.prototype.coupons = undefined;

  /**
   * Date/time that the order was created
   * @member {String} creation_dts
   */
  exports.prototype.creation_dts = undefined;

  /**
   * Currency code that the customer used if different than the merchant's base currency code
   * @member {String} currency_code
   */
  exports.prototype.currency_code = undefined;

  /**
   * Current stage that the order is in.
   * @member {module:com.ultracart.admin.v2.models/Order.CurrentStageEnum} current_stage
   */
  exports.prototype.current_stage = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Customer} customer_profile
   */
  exports.prototype.customer_profile = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/OrderDigitalOrder} digital_order
   */
  exports.prototype.digital_order = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/OrderEdi} edi
   */
  exports.prototype.edi = undefined;

  /**
   * Exchange rate at the time the order was placed if currency code is different than the base currency
   * @member {Number} exchange_rate
   */
  exports.prototype.exchange_rate = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/OrderFraudScore} fraud_score
   */
  exports.prototype.fraud_score = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/OrderGift} gift
   */
  exports.prototype.gift = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/OrderGiftCertificate} gift_certificate
   */
  exports.prototype.gift_certificate = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/OrderInternal} internal
   */
  exports.prototype.internal = undefined;

  /**
   * Items
   * @member {Array.<module:com.ultracart.admin.v2.models/OrderItem>} items
   */
  exports.prototype.items = undefined;

  /**
   * Three letter ISO-639 language code used by the customer during the checkout if different than the default language
   * @member {String} language_iso_code
   */
  exports.prototype.language_iso_code = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/OrderLinkedShipment} linked_shipment
   */
  exports.prototype.linked_shipment = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/OrderMarketing} marketing
   */
  exports.prototype.marketing = undefined;

  /**
   * UltraCart merchant ID owning this order
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * Order ID
   * @member {String} order_id
   */
  exports.prototype.order_id = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/OrderPayment} payment
   */
  exports.prototype.payment = undefined;

  /**
   * Properties, available only through update, not through insert due to the nature of how properties are handled internally
   * @member {Array.<module:com.ultracart.admin.v2.models/OrderProperty>} properties
   */
  exports.prototype.properties = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/OrderQuote} quote
   */
  exports.prototype.quote = undefined;

  /**
   * If the order was refunded, the date/time that the last refund occurred
   * @member {String} refund_dts
   */
  exports.prototype.refund_dts = undefined;

  /**
   * If the order was rejected, the date/time that the rejection occurred
   * @member {String} reject_dts
   */
  exports.prototype.reject_dts = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/OrderSalesforce} salesforce
   */
  exports.prototype.salesforce = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/OrderShipping} shipping
   */
  exports.prototype.shipping = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/OrderSummary} summary
   */
  exports.prototype.summary = undefined;

  /**
   * tags, available only through update, not through insert due to the nature of how tags are handled internally
   * @member {Array.<module:com.ultracart.admin.v2.models/OrderTag>} Tags
   */
  exports.prototype.Tags = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/OrderTaxes} taxes
   */
  exports.prototype.taxes = undefined;


  /**
   * Allowed values for the <code>current_stage</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CurrentStageEnum = {
    /**
     * value: "Accounts Receivable"
     * @const
     */
    Accounts_Receivable: "Accounts Receivable",

    /**
     * value: "Pending Clearance"
     * @const
     */
    Pending_Clearance: "Pending Clearance",

    /**
     * value: "Fraud Review"
     * @const
     */
    Fraud_Review: "Fraud Review",

    /**
     * value: "Rejected"
     * @const
     */
    Rejected: "Rejected",

    /**
     * value: "Shipping Department"
     * @const
     */
    Shipping_Department: "Shipping Department",

    /**
     * value: "Completed Order"
     * @const
     */
    Completed_Order: "Completed Order",

    /**
     * value: "Quote Request"
     * @const
     */
    Quote_Request: "Quote Request",

    /**
     * value: "Quote Sent"
     * @const
     */
    Quote_Sent: "Quote Sent",

    /**
     * value: "Least Cost Routing"
     * @const
     */
    Least_Cost_Routing: "Least Cost Routing",

    /**
     * value: "Unknown"
     * @const
     */
    Unknown: "Unknown"
  };

  return exports;

}));
