/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
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
    root.UltraCartRestApiV2.CouponPercentOffRetailPriceItems = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CouponPercentOffRetailPriceItems model module.
   * @module com.ultracart.admin.v2.models/CouponPercentOffRetailPriceItems
   * @version 2.3.2
   */

  /**
   * Constructs a new <code>CouponPercentOffRetailPriceItems</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponPercentOffRetailPriceItems
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>CouponPercentOffRetailPriceItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CouponPercentOffRetailPriceItems} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CouponPercentOffRetailPriceItems} The populated <code>CouponPercentOffRetailPriceItems</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('discount_percent')) {
        obj['discount_percent'] = ApiClient.convertToType(data['discount_percent'], 'Number');
      }
      if (data.hasOwnProperty('excluded_items')) {
        obj['excluded_items'] = ApiClient.convertToType(data['excluded_items'], ['String']);
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], ['String']);
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The percentage of subtotal discount
   * @member {Number} discount_percent
   */
  exports.prototype['discount_percent'] = undefined;
  /**
   * A list of items which cannot be discounted.
   * @member {Array.<String>} excluded_items
   */
  exports.prototype['excluded_items'] = undefined;
  /**
   * An optional list of items which will receive a discount.  If blank, discount applies to all items except excluded items.
   * @member {Array.<String>} items
   */
  exports.prototype['items'] = undefined;
  /**
   * The (optional) maximum quantity of discounted items.
   * @member {Number} limit
   */
  exports.prototype['limit'] = undefined;



  return exports;
}));


