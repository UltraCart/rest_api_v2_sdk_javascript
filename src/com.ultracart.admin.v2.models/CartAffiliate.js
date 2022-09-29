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
    root.UltraCartRestApiV2.CartAffiliate = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CartAffiliate model module.
   * @module com.ultracart.admin.v2.models/CartAffiliate
   * @version 3.10.51
   */

  /**
   * Constructs a new <code>CartAffiliate</code>.
   * @alias module:com.ultracart.admin.v2.models/CartAffiliate
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CartAffiliate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CartAffiliate} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CartAffiliate} The populated <code>CartAffiliate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('affiliate_id'))
        obj.affiliate_id = ApiClient.convertToType(data['affiliate_id'], 'Number');
      if (data.hasOwnProperty('affiliate_sub_id'))
        obj.affiliate_sub_id = ApiClient.convertToType(data['affiliate_sub_id'], 'String');
    }
    return obj;
  }

  /**
   * Affiliate id associated with the cart
   * @member {Number} affiliate_id
   */
  exports.prototype.affiliate_id = undefined;

  /**
   * Affiliate sub id associated with the cart
   * @member {String} affiliate_sub_id
   */
  exports.prototype.affiliate_sub_id = undefined;

  return exports;

}));
