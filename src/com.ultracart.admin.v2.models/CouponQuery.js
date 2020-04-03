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
    root.UltraCartRestApiV2.CouponQuery = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CouponQuery model module.
   * @module com.ultracart.admin.v2.models/CouponQuery
   * @version 2.4.87
   */

  /**
   * Constructs a new <code>CouponQuery</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponQuery
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>CouponQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CouponQuery} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CouponQuery} The populated <code>CouponQuery</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('affiliate_oid')) {
        obj['affiliate_oid'] = ApiClient.convertToType(data['affiliate_oid'], 'Number');
      }
      if (data.hasOwnProperty('coupon_type')) {
        obj['coupon_type'] = ApiClient.convertToType(data['coupon_type'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('exclude_expired')) {
        obj['exclude_expired'] = ApiClient.convertToType(data['exclude_expired'], 'Boolean');
      }
      if (data.hasOwnProperty('expiration_dts_begin')) {
        obj['expiration_dts_begin'] = ApiClient.convertToType(data['expiration_dts_begin'], 'String');
      }
      if (data.hasOwnProperty('expiration_dts_end')) {
        obj['expiration_dts_end'] = ApiClient.convertToType(data['expiration_dts_end'], 'String');
      }
      if (data.hasOwnProperty('merchant_code')) {
        obj['merchant_code'] = ApiClient.convertToType(data['merchant_code'], 'String');
      }
      if (data.hasOwnProperty('start_dts_begin')) {
        obj['start_dts_begin'] = ApiClient.convertToType(data['start_dts_begin'], 'String');
      }
      if (data.hasOwnProperty('start_dts_end')) {
        obj['start_dts_end'] = ApiClient.convertToType(data['start_dts_end'], 'String');
      }
    }
    return obj;
  }

  /**
   * Affiliate oid
   * @member {Number} affiliate_oid
   */
  exports.prototype['affiliate_oid'] = undefined;
  /**
   * The type of coupon.
   * @member {String} coupon_type
   */
  exports.prototype['coupon_type'] = undefined;
  /**
   * Description of this coupon
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Exclude expired coupons if true
   * @member {Boolean} exclude_expired
   */
  exports.prototype['exclude_expired'] = undefined;
  /**
   * Expiration date begin
   * @member {String} expiration_dts_begin
   */
  exports.prototype['expiration_dts_begin'] = undefined;
  /**
   * Expiration date begin
   * @member {String} expiration_dts_end
   */
  exports.prototype['expiration_dts_end'] = undefined;
  /**
   * Merchant code is a unique character string for this coupon.
   * @member {String} merchant_code
   */
  exports.prototype['merchant_code'] = undefined;
  /**
   * Start date begin
   * @member {String} start_dts_begin
   */
  exports.prototype['start_dts_begin'] = undefined;
  /**
   * Start date end
   * @member {String} start_dts_end
   */
  exports.prototype['start_dts_end'] = undefined;



  return exports;
}));


