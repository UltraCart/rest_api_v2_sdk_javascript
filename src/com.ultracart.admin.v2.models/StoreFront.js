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
    root.UltraCartRestApiV2.StoreFront = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The StoreFront model module.
   * @module com.ultracart.admin.v2.models/StoreFront
   * @version 3.10.128
   */

  /**
   * Constructs a new <code>StoreFront</code>.
   * @alias module:com.ultracart.admin.v2.models/StoreFront
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>StoreFront</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/StoreFront} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/StoreFront} The populated <code>StoreFront</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('host_alias1'))
        obj.host_alias1 = ApiClient.convertToType(data['host_alias1'], 'String');
      if (data.hasOwnProperty('host_alias2'))
        obj.host_alias2 = ApiClient.convertToType(data['host_alias2'], 'String');
      if (data.hasOwnProperty('host_alias3'))
        obj.host_alias3 = ApiClient.convertToType(data['host_alias3'], 'String');
      if (data.hasOwnProperty('host_alias4'))
        obj.host_alias4 = ApiClient.convertToType(data['host_alias4'], 'String');
      if (data.hasOwnProperty('host_alias5'))
        obj.host_alias5 = ApiClient.convertToType(data['host_alias5'], 'String');
      if (data.hasOwnProperty('host_name'))
        obj.host_name = ApiClient.convertToType(data['host_name'], 'String');
      if (data.hasOwnProperty('locked'))
        obj.locked = ApiClient.convertToType(data['locked'], 'Boolean');
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('redirect_aliases'))
        obj.redirect_aliases = ApiClient.convertToType(data['redirect_aliases'], 'Boolean');
      if (data.hasOwnProperty('storefront_oid'))
        obj.storefront_oid = ApiClient.convertToType(data['storefront_oid'], 'Number');
      if (data.hasOwnProperty('unlock_password'))
        obj.unlock_password = ApiClient.convertToType(data['unlock_password'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} host_alias1
   */
  exports.prototype.host_alias1 = undefined;

  /**
   * @member {String} host_alias2
   */
  exports.prototype.host_alias2 = undefined;

  /**
   * @member {String} host_alias3
   */
  exports.prototype.host_alias3 = undefined;

  /**
   * @member {String} host_alias4
   */
  exports.prototype.host_alias4 = undefined;

  /**
   * @member {String} host_alias5
   */
  exports.prototype.host_alias5 = undefined;

  /**
   * @member {String} host_name
   */
  exports.prototype.host_name = undefined;

  /**
   * @member {Boolean} locked
   */
  exports.prototype.locked = undefined;

  /**
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * @member {Boolean} redirect_aliases
   */
  exports.prototype.redirect_aliases = undefined;

  /**
   * @member {Number} storefront_oid
   */
  exports.prototype.storefront_oid = undefined;

  /**
   * @member {String} unlock_password
   */
  exports.prototype.unlock_password = undefined;

  return exports;

}));
