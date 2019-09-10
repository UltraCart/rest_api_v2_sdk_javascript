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
    root.UltraCartRestApiV2.CouponFreeItemWithItemPurchase = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CouponFreeItemWithItemPurchase model module.
   * @module com.ultracart.admin.v2.models/CouponFreeItemWithItemPurchase
   * @version 2.4.30
   */

  /**
   * Constructs a new <code>CouponFreeItemWithItemPurchase</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponFreeItemWithItemPurchase
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>CouponFreeItemWithItemPurchase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CouponFreeItemWithItemPurchase} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CouponFreeItemWithItemPurchase} The populated <code>CouponFreeItemWithItemPurchase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], ['String']);
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
      }
      if (data.hasOwnProperty('required_purchase_items')) {
        obj['required_purchase_items'] = ApiClient.convertToType(data['required_purchase_items'], ['String']);
      }
    }
    return obj;
  }

  /**
   * A list of free items which will receive a discount if one of the required purchase items is purchased.
   * @member {Array.<String>} items
   */
  exports.prototype['items'] = undefined;
  /**
   * The (optional) maximum quantity of discounted items.
   * @member {Number} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * Required items (at least one from the list) that must be purchased for coupon to be valid
   * @member {Array.<String>} required_purchase_items
   */
  exports.prototype['required_purchase_items'] = undefined;



  return exports;
}));


