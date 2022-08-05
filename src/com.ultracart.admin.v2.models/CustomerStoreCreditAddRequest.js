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
    root.UltraCartRestApiV2.CustomerStoreCreditAddRequest = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CustomerStoreCreditAddRequest model module.
   * @module com.ultracart.admin.v2.models/CustomerStoreCreditAddRequest
   * @version 3.10.34
   */

  /**
   * Constructs a new <code>CustomerStoreCreditAddRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerStoreCreditAddRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CustomerStoreCreditAddRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CustomerStoreCreditAddRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CustomerStoreCreditAddRequest} The populated <code>CustomerStoreCreditAddRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('expiration_days'))
        obj.expiration_days = ApiClient.convertToType(data['expiration_days'], 'Number');
      if (data.hasOwnProperty('vesting_days'))
        obj.vesting_days = ApiClient.convertToType(data['vesting_days'], 'Number');
    }
    return obj;
  }

  /**
   * Amount of store credit
   * @member {Number} amount
   */
  exports.prototype.amount = undefined;

  /**
   * Description or reason for the store credit
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * Optional days for store credit to expire or zero for no expiration
   * @member {Number} expiration_days
   */
  exports.prototype.expiration_days = undefined;

  /**
   * Optional days for store credit to vesting or zero for immediately available
   * @member {Number} vesting_days
   */
  exports.prototype.vesting_days = undefined;

  return exports;

}));
