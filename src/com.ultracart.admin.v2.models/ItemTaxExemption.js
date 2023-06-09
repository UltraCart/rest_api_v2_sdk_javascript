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
    root.UltraCartRestApiV2.ItemTaxExemption = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ItemTaxExemption model module.
   * @module com.ultracart.admin.v2.models/ItemTaxExemption
   * @version 3.10.142
   */

  /**
   * Constructs a new <code>ItemTaxExemption</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemTaxExemption
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemTaxExemption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemTaxExemption} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemTaxExemption} The populated <code>ItemTaxExemption</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('country_code'))
        obj.country_code = ApiClient.convertToType(data['country_code'], 'String');
      if (data.hasOwnProperty('county'))
        obj.county = ApiClient.convertToType(data['county'], 'String');
      if (data.hasOwnProperty('postal_code'))
        obj.postal_code = ApiClient.convertToType(data['postal_code'], 'String');
      if (data.hasOwnProperty('state_code'))
        obj.state_code = ApiClient.convertToType(data['state_code'], 'String');
    }
    return obj;
  }

  /**
   * City
   * @member {String} city
   */
  exports.prototype.city = undefined;

  /**
   * Country code (ISO-3166 two letter)
   * @member {String} country_code
   */
  exports.prototype.country_code = undefined;

  /**
   * County
   * @member {String} county
   */
  exports.prototype.county = undefined;

  /**
   * Postal code
   * @member {String} postal_code
   */
  exports.prototype.postal_code = undefined;

  /**
   * State code
   * @member {String} state_code
   */
  exports.prototype.state_code = undefined;

  return exports;

}));
