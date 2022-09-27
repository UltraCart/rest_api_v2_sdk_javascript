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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ItemShippingMethod = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ItemShippingMethod model module.
   * @module com.ultracart.admin.v2.models/ItemShippingMethod
   * @version 3.10.50
   */

  /**
   * Constructs a new <code>ItemShippingMethod</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemShippingMethod
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemShippingMethod</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemShippingMethod} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemShippingMethod} The populated <code>ItemShippingMethod</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('cost'))
        obj.cost = ApiClient.convertToType(data['cost'], 'Number');
      if (data.hasOwnProperty('each_additional_item_markup'))
        obj.each_additional_item_markup = ApiClient.convertToType(data['each_additional_item_markup'], 'Number');
      if (data.hasOwnProperty('filter_to_if_available'))
        obj.filter_to_if_available = ApiClient.convertToType(data['filter_to_if_available'], 'Boolean');
      if (data.hasOwnProperty('first_item_markup'))
        obj.first_item_markup = ApiClient.convertToType(data['first_item_markup'], 'Number');
      if (data.hasOwnProperty('fixed_shipping_cost'))
        obj.fixed_shipping_cost = ApiClient.convertToType(data['fixed_shipping_cost'], 'Number');
      if (data.hasOwnProperty('flat_fee_markup'))
        obj.flat_fee_markup = ApiClient.convertToType(data['flat_fee_markup'], 'Number');
      if (data.hasOwnProperty('free_shipping'))
        obj.free_shipping = ApiClient.convertToType(data['free_shipping'], 'Boolean');
      if (data.hasOwnProperty('per_item_fee_markup'))
        obj.per_item_fee_markup = ApiClient.convertToType(data['per_item_fee_markup'], 'Number');
      if (data.hasOwnProperty('percentage_markup'))
        obj.percentage_markup = ApiClient.convertToType(data['percentage_markup'], 'Number');
      if (data.hasOwnProperty('percentage_of_item_markup'))
        obj.percentage_of_item_markup = ApiClient.convertToType(data['percentage_of_item_markup'], 'Number');
      if (data.hasOwnProperty('relax_restrictions_on_upsell'))
        obj.relax_restrictions_on_upsell = ApiClient.convertToType(data['relax_restrictions_on_upsell'], 'Boolean');
      if (data.hasOwnProperty('shipping_method'))
        obj.shipping_method = ApiClient.convertToType(data['shipping_method'], 'String');
      if (data.hasOwnProperty('shipping_method_oid'))
        obj.shipping_method_oid = ApiClient.convertToType(data['shipping_method_oid'], 'Number');
      if (data.hasOwnProperty('shipping_method_validity'))
        obj.shipping_method_validity = ApiClient.convertToType(data['shipping_method_validity'], 'String');
      if (data.hasOwnProperty('signature_required'))
        obj.signature_required = ApiClient.convertToType(data['signature_required'], 'Boolean');
    }
    return obj;
  }

  /**
   * Cost
   * @member {Number} cost
   */
  exports.prototype.cost = undefined;

  /**
   * Each additional item markup
   * @member {Number} each_additional_item_markup
   */
  exports.prototype.each_additional_item_markup = undefined;

  /**
   * Filter to this method if available
   * @member {Boolean} filter_to_if_available
   */
  exports.prototype.filter_to_if_available = undefined;

  /**
   * First item markup
   * @member {Number} first_item_markup
   */
  exports.prototype.first_item_markup = undefined;

  /**
   * Fixed shipping cost
   * @member {Number} fixed_shipping_cost
   */
  exports.prototype.fixed_shipping_cost = undefined;

  /**
   * Flat fee markup
   * @member {Number} flat_fee_markup
   */
  exports.prototype.flat_fee_markup = undefined;

  /**
   * Free shipping
   * @member {Boolean} free_shipping
   */
  exports.prototype.free_shipping = undefined;

  /**
   * Per item fee markup
   * @member {Number} per_item_fee_markup
   */
  exports.prototype.per_item_fee_markup = undefined;

  /**
   * Percentage markup
   * @member {Number} percentage_markup
   */
  exports.prototype.percentage_markup = undefined;

  /**
   * Percentage of item markup
   * @member {Number} percentage_of_item_markup
   */
  exports.prototype.percentage_of_item_markup = undefined;

  /**
   * Relax restrictions on upsell
   * @member {Boolean} relax_restrictions_on_upsell
   */
  exports.prototype.relax_restrictions_on_upsell = undefined;

  /**
   * Shipping method name
   * @member {String} shipping_method
   */
  exports.prototype.shipping_method = undefined;

  /**
   * Shipping method object identifier
   * @member {Number} shipping_method_oid
   */
  exports.prototype.shipping_method_oid = undefined;

  /**
   * Shipping method validity
   * @member {module:com.ultracart.admin.v2.models/ItemShippingMethod.ShippingMethodValidityEnum} shipping_method_validity
   */
  exports.prototype.shipping_method_validity = undefined;

  /**
   * Signature required
   * @member {Boolean} signature_required
   */
  exports.prototype.signature_required = undefined;


  /**
   * Allowed values for the <code>shipping_method_validity</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ShippingMethodValidityEnum = {
    /**
     * value: "invalid for"
     * @const
     */
    invalid_for: "invalid for",

    /**
     * value: "valid for"
     * @const
     */
    valid_for: "valid for",

    /**
     * value: "valid only for"
     * @const
     */
    valid_only_for: "valid only for"
  };

  return exports;

}));
