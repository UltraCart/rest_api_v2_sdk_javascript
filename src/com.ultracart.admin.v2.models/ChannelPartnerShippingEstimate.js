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
    root.UltraCartRestApiV2.ChannelPartnerShippingEstimate = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ChannelPartnerShippingEstimate model module.
   * @module com.ultracart.admin.v2.models/ChannelPartnerShippingEstimate
   * @version 3.10.144
   */

  /**
   * Constructs a new <code>ChannelPartnerShippingEstimate</code>.
   * @alias module:com.ultracart.admin.v2.models/ChannelPartnerShippingEstimate
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ChannelPartnerShippingEstimate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ChannelPartnerShippingEstimate} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ChannelPartnerShippingEstimate} The populated <code>ChannelPartnerShippingEstimate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('shipping_handling_total'))
        obj.shipping_handling_total = ApiClient.convertToType(data['shipping_handling_total'], 'Number');
      if (data.hasOwnProperty('shipping_method'))
        obj.shipping_method = ApiClient.convertToType(data['shipping_method'], 'String');
    }
    return obj;
  }

  /**
   * The total estimate for this shipping method based on the provided order.
   * @member {Number} shipping_handling_total
   */
  exports.prototype.shipping_handling_total = undefined;

  /**
   * The name of the shipping method
   * @member {String} shipping_method
   */
  exports.prototype.shipping_method = undefined;

  return exports;

}));
