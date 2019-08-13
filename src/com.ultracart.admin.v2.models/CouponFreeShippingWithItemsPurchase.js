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
    root.UltraCartRestApiV2.CouponFreeShippingWithItemsPurchase = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CouponFreeShippingWithItemsPurchase model module.
   * @module com.ultracart.admin.v2.models/CouponFreeShippingWithItemsPurchase
   * @version 2.4.18
   */

  /**
   * Constructs a new <code>CouponFreeShippingWithItemsPurchase</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponFreeShippingWithItemsPurchase
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CouponFreeShippingWithItemsPurchase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CouponFreeShippingWithItemsPurchase} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CouponFreeShippingWithItemsPurchase} The populated <code>CouponFreeShippingWithItemsPurchase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], ['String']);
      }
      if (data.hasOwnProperty('shipping_methods')) {
        obj['shipping_methods'] = ApiClient.convertToType(data['shipping_methods'], ['String']);
      }
    }
    return obj;
  }

  /**
   * A list of items of which at least one must be purchased for coupon to be valid.
   * @member {Array.<String>} items
   */
  exports.prototype['items'] = undefined;
  /**
   * One or more shipping methods that may receive this discount
   * @member {Array.<String>} shipping_methods
   */
  exports.prototype['shipping_methods'] = undefined;



  return exports;
}));


