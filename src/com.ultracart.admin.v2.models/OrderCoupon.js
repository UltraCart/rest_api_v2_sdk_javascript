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
    root.UltraCartRestApiV2.OrderCoupon = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OrderCoupon model module.
   * @module com.ultracart.admin.v2.models/OrderCoupon
   * @version 2.4.12
   */

  /**
   * Constructs a new <code>OrderCoupon</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderCoupon
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>OrderCoupon</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderCoupon} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderCoupon} The populated <code>OrderCoupon</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accounting_code')) {
        obj['accounting_code'] = ApiClient.convertToType(data['accounting_code'], 'String');
      }
      if (data.hasOwnProperty('automatically_applied')) {
        obj['automatically_applied'] = ApiClient.convertToType(data['automatically_applied'], 'Boolean');
      }
      if (data.hasOwnProperty('base_coupon_code')) {
        obj['base_coupon_code'] = ApiClient.convertToType(data['base_coupon_code'], 'String');
      }
      if (data.hasOwnProperty('coupon_code')) {
        obj['coupon_code'] = ApiClient.convertToType(data['coupon_code'], 'String');
      }
    }
    return obj;
  }

  /**
   * QuickBooks accounting code for this coupon
   * @member {String} accounting_code
   */
  exports.prototype['accounting_code'] = undefined;
  /**
   * Whether or not the coupon was automatically applied to the order
   * @member {Boolean} automatically_applied
   */
  exports.prototype['automatically_applied'] = undefined;
  /**
   * Coupon code configured by the merchant.  Will differ if the customer used a one time coupon code generated off this base coupon
   * @member {String} base_coupon_code
   */
  exports.prototype['base_coupon_code'] = undefined;
  /**
   * Coupon code entered by the customer
   * @member {String} coupon_code
   */
  exports.prototype['coupon_code'] = undefined;



  return exports;
}));


