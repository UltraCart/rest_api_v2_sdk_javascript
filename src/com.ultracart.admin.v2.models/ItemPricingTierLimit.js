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
    root.UltraCartRestApiV2.ItemPricingTierLimit = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ItemPricingTierLimit model module.
   * @module com.ultracart.admin.v2.models/ItemPricingTierLimit
   * @version 3.10.62
   */

  /**
   * Constructs a new <code>ItemPricingTierLimit</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemPricingTierLimit
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemPricingTierLimit</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemPricingTierLimit} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemPricingTierLimit} The populated <code>ItemPricingTierLimit</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('cumulative_order_limit'))
        obj.cumulative_order_limit = ApiClient.convertToType(data['cumulative_order_limit'], 'Number');
      if (data.hasOwnProperty('individual_order_limit'))
        obj.individual_order_limit = ApiClient.convertToType(data['individual_order_limit'], 'Number');
      if (data.hasOwnProperty('multiple_quantity'))
        obj.multiple_quantity = ApiClient.convertToType(data['multiple_quantity'], 'Number');
    }
    return obj;
  }

  /**
   * Cumulative order limit
   * @member {Number} cumulative_order_limit
   */
  exports.prototype.cumulative_order_limit = undefined;

  /**
   * Individual order limit
   * @member {Number} individual_order_limit
   */
  exports.prototype.individual_order_limit = undefined;

  /**
   * Multiple quantity
   * @member {Number} multiple_quantity
   */
  exports.prototype.multiple_quantity = undefined;

  return exports;

}));
