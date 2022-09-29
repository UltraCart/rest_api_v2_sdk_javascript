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
    root.UltraCartRestApiV2.CouponTierQuantityPercent = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CouponTierQuantityPercent model module.
   * @module com.ultracart.admin.v2.models/CouponTierQuantityPercent
   * @version 3.10.51
   */

  /**
   * Constructs a new <code>CouponTierQuantityPercent</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponTierQuantityPercent
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CouponTierQuantityPercent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CouponTierQuantityPercent} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CouponTierQuantityPercent} The populated <code>CouponTierQuantityPercent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('discount_percent'))
        obj.discount_percent = ApiClient.convertToType(data['discount_percent'], 'Number');
      if (data.hasOwnProperty('item_quantity'))
        obj.item_quantity = ApiClient.convertToType(data['item_quantity'], 'Number');
      if (data.hasOwnProperty('quickbooks_code'))
        obj.quickbooks_code = ApiClient.convertToType(data['quickbooks_code'], 'String');
    }
    return obj;
  }

  /**
   * The percent of discount per item.
   * @member {Number} discount_percent
   */
  exports.prototype.discount_percent = undefined;

  /**
   * The quantity of item purchased (in units)
   * @member {Number} item_quantity
   */
  exports.prototype.item_quantity = undefined;

  /**
   * Quickbooks accounting code.
   * @member {String} quickbooks_code
   */
  exports.prototype.quickbooks_code = undefined;

  return exports;

}));
