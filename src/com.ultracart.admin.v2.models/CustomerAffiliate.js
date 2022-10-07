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
    root.UltraCartRestApiV2.CustomerAffiliate = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CustomerAffiliate model module.
   * @module com.ultracart.admin.v2.models/CustomerAffiliate
   * @version 3.10.56
   */

  /**
   * Constructs a new <code>CustomerAffiliate</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerAffiliate
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CustomerAffiliate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CustomerAffiliate} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CustomerAffiliate} The populated <code>CustomerAffiliate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('affiliate_oid'))
        obj.affiliate_oid = ApiClient.convertToType(data['affiliate_oid'], 'Number');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('first_name'))
        obj.first_name = ApiClient.convertToType(data['first_name'], 'String');
      if (data.hasOwnProperty('last_name'))
        obj.last_name = ApiClient.convertToType(data['last_name'], 'String');
    }
    return obj;
  }

  /**
   * Affiliate object identifier
   * @member {Number} affiliate_oid
   */
  exports.prototype.affiliate_oid = undefined;

  /**
   * email
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * First name
   * @member {String} first_name
   */
  exports.prototype.first_name = undefined;

  /**
   * Last name
   * @member {String} last_name
   */
  exports.prototype.last_name = undefined;

  return exports;

}));
