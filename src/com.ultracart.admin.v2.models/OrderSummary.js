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
    define(['ApiClient', 'com.ultracart.admin.v2.models/Currency'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Currency'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.OrderSummary = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Currency);
  }
}(this, function(ApiClient, Currency) {
  'use strict';

  /**
   * The OrderSummary model module.
   * @module com.ultracart.admin.v2.models/OrderSummary
   * @version 3.10.133
   */

  /**
   * Constructs a new <code>OrderSummary</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderSummary
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderSummary} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderSummary} The populated <code>OrderSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('actual_fulfillment'))
        obj.actual_fulfillment = Currency.constructFromObject(data['actual_fulfillment']);
      if (data.hasOwnProperty('actual_payment_processing'))
        obj.actual_payment_processing = Currency.constructFromObject(data['actual_payment_processing']);
      if (data.hasOwnProperty('actual_shipping'))
        obj.actual_shipping = Currency.constructFromObject(data['actual_shipping']);
      if (data.hasOwnProperty('arbitrary_shipping_handling_total'))
        obj.arbitrary_shipping_handling_total = Currency.constructFromObject(data['arbitrary_shipping_handling_total']);
      if (data.hasOwnProperty('internal_gift_certificate_amount'))
        obj.internal_gift_certificate_amount = Currency.constructFromObject(data['internal_gift_certificate_amount']);
      if (data.hasOwnProperty('internal_gift_certificate_refunded'))
        obj.internal_gift_certificate_refunded = Currency.constructFromObject(data['internal_gift_certificate_refunded']);
      if (data.hasOwnProperty('other_refunded'))
        obj.other_refunded = Currency.constructFromObject(data['other_refunded']);
      if (data.hasOwnProperty('shipping_handling_refunded'))
        obj.shipping_handling_refunded = Currency.constructFromObject(data['shipping_handling_refunded']);
      if (data.hasOwnProperty('shipping_handling_total'))
        obj.shipping_handling_total = Currency.constructFromObject(data['shipping_handling_total']);
      if (data.hasOwnProperty('shipping_handling_total_discount'))
        obj.shipping_handling_total_discount = Currency.constructFromObject(data['shipping_handling_total_discount']);
      if (data.hasOwnProperty('subtotal'))
        obj.subtotal = Currency.constructFromObject(data['subtotal']);
      if (data.hasOwnProperty('subtotal_discount'))
        obj.subtotal_discount = Currency.constructFromObject(data['subtotal_discount']);
      if (data.hasOwnProperty('subtotal_discount_refunded'))
        obj.subtotal_discount_refunded = Currency.constructFromObject(data['subtotal_discount_refunded']);
      if (data.hasOwnProperty('subtotal_refunded'))
        obj.subtotal_refunded = Currency.constructFromObject(data['subtotal_refunded']);
      if (data.hasOwnProperty('tax'))
        obj.tax = Currency.constructFromObject(data['tax']);
      if (data.hasOwnProperty('tax_refunded'))
        obj.tax_refunded = Currency.constructFromObject(data['tax_refunded']);
      if (data.hasOwnProperty('taxable_subtotal'))
        obj.taxable_subtotal = Currency.constructFromObject(data['taxable_subtotal']);
      if (data.hasOwnProperty('taxable_subtotal_discount'))
        obj.taxable_subtotal_discount = Currency.constructFromObject(data['taxable_subtotal_discount']);
      if (data.hasOwnProperty('total'))
        obj.total = Currency.constructFromObject(data['total']);
      if (data.hasOwnProperty('total_refunded'))
        obj.total_refunded = Currency.constructFromObject(data['total_refunded']);
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} actual_fulfillment
   */
  exports.prototype.actual_fulfillment = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} actual_payment_processing
   */
  exports.prototype.actual_payment_processing = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} actual_shipping
   */
  exports.prototype.actual_shipping = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} arbitrary_shipping_handling_total
   */
  exports.prototype.arbitrary_shipping_handling_total = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} internal_gift_certificate_amount
   */
  exports.prototype.internal_gift_certificate_amount = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} internal_gift_certificate_refunded
   */
  exports.prototype.internal_gift_certificate_refunded = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} other_refunded
   */
  exports.prototype.other_refunded = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} shipping_handling_refunded
   */
  exports.prototype.shipping_handling_refunded = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} shipping_handling_total
   */
  exports.prototype.shipping_handling_total = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} shipping_handling_total_discount
   */
  exports.prototype.shipping_handling_total_discount = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} subtotal
   */
  exports.prototype.subtotal = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} subtotal_discount
   */
  exports.prototype.subtotal_discount = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} subtotal_discount_refunded
   */
  exports.prototype.subtotal_discount_refunded = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} subtotal_refunded
   */
  exports.prototype.subtotal_refunded = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} tax
   */
  exports.prototype.tax = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} tax_refunded
   */
  exports.prototype.tax_refunded = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} taxable_subtotal
   */
  exports.prototype.taxable_subtotal = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} taxable_subtotal_discount
   */
  exports.prototype.taxable_subtotal_discount = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} total
   */
  exports.prototype.total = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} total_refunded
   */
  exports.prototype.total_refunded = undefined;

  return exports;

}));
