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
    root.UltraCartRestApiV2.UltraCartConfig = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UltraCartConfig model module.
   * @module com.ultracart.admin.v2.models/UltraCartConfig
   * @version 3.10.226
   */

  /**
   * Constructs a new <code>UltraCartConfig</code>.
   * @alias module:com.ultracart.admin.v2.models/UltraCartConfig
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UltraCartConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/UltraCartConfig} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/UltraCartConfig} The populated <code>UltraCartConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('exempt_from_colorado_retail_delivery_fee'))
        obj.exempt_from_colorado_retail_delivery_fee = ApiClient.convertToType(data['exempt_from_colorado_retail_delivery_fee'], 'Boolean');
      if (data.hasOwnProperty('exempt_from_minnesota_retail_delivery_fee'))
        obj.exempt_from_minnesota_retail_delivery_fee = ApiClient.convertToType(data['exempt_from_minnesota_retail_delivery_fee'], 'Boolean');
      if (data.hasOwnProperty('tax_billing'))
        obj.tax_billing = ApiClient.convertToType(data['tax_billing'], 'Boolean');
    }
    return obj;
  }

  /**
   * True if the Colorado Retail Delivery Fee should not be collected
   * @member {Boolean} exempt_from_colorado_retail_delivery_fee
   */
  exports.prototype.exempt_from_colorado_retail_delivery_fee = undefined;

  /**
   * True if the Minnesota Retail Delivery Fee should not be collected
   * @member {Boolean} exempt_from_minnesota_retail_delivery_fee
   */
  exports.prototype.exempt_from_minnesota_retail_delivery_fee = undefined;

  /**
   * True if sales tax should be collected based on billing address instead of shipping address
   * @member {Boolean} tax_billing
   */
  exports.prototype.tax_billing = undefined;

  return exports;

}));
