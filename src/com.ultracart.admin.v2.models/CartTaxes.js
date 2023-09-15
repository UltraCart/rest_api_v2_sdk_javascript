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
    root.UltraCartRestApiV2.CartTaxes = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CartTaxes model module.
   * @module com.ultracart.admin.v2.models/CartTaxes
   * @version 3.10.160
   */

  /**
   * Constructs a new <code>CartTaxes</code>.
   * @alias module:com.ultracart.admin.v2.models/CartTaxes
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CartTaxes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CartTaxes} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CartTaxes} The populated <code>CartTaxes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('county'))
        obj.county = ApiClient.convertToType(data['county'], 'String');
      if (data.hasOwnProperty('exempt'))
        obj.exempt = ApiClient.convertToType(data['exempt'], 'Boolean');
      if (data.hasOwnProperty('rate'))
        obj.rate = ApiClient.convertToType(data['rate'], 'Number');
    }
    return obj;
  }

  /**
   * Tax county if the state requires it.
   * @member {String} county
   */
  exports.prototype.county = undefined;

  /**
   * True if tax exempt
   * @member {Boolean} exempt
   */
  exports.prototype.exempt = undefined;

  /**
   * Tax rate
   * @member {Number} rate
   */
  exports.prototype.rate = undefined;

  return exports;

}));
