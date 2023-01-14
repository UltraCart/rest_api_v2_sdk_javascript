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
    define(['ApiClient', 'com.ultracart.admin.v2.models/StateProvince'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StateProvince'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CheckoutStateProvinceResponse = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.StateProvince);
  }
}(this, function(ApiClient, StateProvince) {
  'use strict';

  /**
   * The CheckoutStateProvinceResponse model module.
   * @module com.ultracart.admin.v2.models/CheckoutStateProvinceResponse
   * @version 3.10.96
   */

  /**
   * Constructs a new <code>CheckoutStateProvinceResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/CheckoutStateProvinceResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CheckoutStateProvinceResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CheckoutStateProvinceResponse} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CheckoutStateProvinceResponse} The populated <code>CheckoutStateProvinceResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('stateProvinces'))
        obj.stateProvinces = ApiClient.convertToType(data['stateProvinces'], [StateProvince]);
    }
    return obj;
  }

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/StateProvince>} stateProvinces
   */
  exports.prototype.stateProvinces = undefined;

  return exports;

}));
