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
    root.UltraCartRestApiV2.CartSummary = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Currency);
  }
}(this, function(ApiClient, Currency) {
  'use strict';

  /**
   * The CartSummary model module.
   * @module com.ultracart.admin.v2.models/CartSummary
   * @version 3.10.6
   */

  /**
   * Constructs a new <code>CartSummary</code>.
   * @alias module:com.ultracart.admin.v2.models/CartSummary
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CartSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CartSummary} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CartSummary} The populated <code>CartSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('arbitrary_shipping_handling_total'))
        obj.arbitrary_shipping_handling_total = Currency.constructFromObject(data['arbitrary_shipping_handling_total']);
      if (data.hasOwnProperty('arbitrary_tax'))
        obj.arbitrary_tax = Currency.constructFromObject(data['arbitrary_tax']);
      if (data.hasOwnProperty('arbitrary_tax_rate'))
        obj.arbitrary_tax_rate = Currency.constructFromObject(data['arbitrary_tax_rate']);
      if (data.hasOwnProperty('arbitrary_taxable_subtotal'))
        obj.arbitrary_taxable_subtotal = Currency.constructFromObject(data['arbitrary_taxable_subtotal']);
      if (data.hasOwnProperty('shipping_handling'))
        obj.shipping_handling = Currency.constructFromObject(data['shipping_handling']);
      if (data.hasOwnProperty('shipping_handling_discount'))
        obj.shipping_handling_discount = Currency.constructFromObject(data['shipping_handling_discount']);
      if (data.hasOwnProperty('shipping_handling_with_discount'))
        obj.shipping_handling_with_discount = Currency.constructFromObject(data['shipping_handling_with_discount']);
      if (data.hasOwnProperty('subtotal'))
        obj.subtotal = Currency.constructFromObject(data['subtotal']);
      if (data.hasOwnProperty('subtotal_discount'))
        obj.subtotal_discount = Currency.constructFromObject(data['subtotal_discount']);
      if (data.hasOwnProperty('subtotal_with_discount'))
        obj.subtotal_with_discount = Currency.constructFromObject(data['subtotal_with_discount']);
      if (data.hasOwnProperty('surcharge'))
        obj.surcharge = Currency.constructFromObject(data['surcharge']);
      if (data.hasOwnProperty('tax'))
        obj.tax = Currency.constructFromObject(data['tax']);
      if (data.hasOwnProperty('taxable_subtotal'))
        obj.taxable_subtotal = Currency.constructFromObject(data['taxable_subtotal']);
      if (data.hasOwnProperty('taxable_subtotal_discount'))
        obj.taxable_subtotal_discount = Currency.constructFromObject(data['taxable_subtotal_discount']);
      if (data.hasOwnProperty('taxable_subtotal_with_discount'))
        obj.taxable_subtotal_with_discount = Currency.constructFromObject(data['taxable_subtotal_with_discount']);
      if (data.hasOwnProperty('total'))
        obj.total = Currency.constructFromObject(data['total']);
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} arbitrary_shipping_handling_total
   */
  exports.prototype.arbitrary_shipping_handling_total = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} arbitrary_tax
   */
  exports.prototype.arbitrary_tax = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} arbitrary_tax_rate
   */
  exports.prototype.arbitrary_tax_rate = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} arbitrary_taxable_subtotal
   */
  exports.prototype.arbitrary_taxable_subtotal = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} shipping_handling
   */
  exports.prototype.shipping_handling = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} shipping_handling_discount
   */
  exports.prototype.shipping_handling_discount = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} shipping_handling_with_discount
   */
  exports.prototype.shipping_handling_with_discount = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} subtotal
   */
  exports.prototype.subtotal = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} subtotal_discount
   */
  exports.prototype.subtotal_discount = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} subtotal_with_discount
   */
  exports.prototype.subtotal_with_discount = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} surcharge
   */
  exports.prototype.surcharge = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} tax
   */
  exports.prototype.tax = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} taxable_subtotal
   */
  exports.prototype.taxable_subtotal = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} taxable_subtotal_discount
   */
  exports.prototype.taxable_subtotal_discount = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} taxable_subtotal_with_discount
   */
  exports.prototype.taxable_subtotal_with_discount = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} total
   */
  exports.prototype.total = undefined;

  return exports;

}));
