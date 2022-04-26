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
    root.UltraCartRestApiV2.Currency = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Currency model module.
   * @module com.ultracart.admin.v2.models/Currency
   * @version 3.9.8
   */

  /**
   * Constructs a new <code>Currency</code>.
   * @alias module:com.ultracart.admin.v2.models/Currency
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Currency</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/Currency} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/Currency} The populated <code>Currency</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('currency_code'))
        obj.currency_code = ApiClient.convertToType(data['currency_code'], 'String');
      if (data.hasOwnProperty('exchange_rate'))
        obj.exchange_rate = ApiClient.convertToType(data['exchange_rate'], 'Number');
      if (data.hasOwnProperty('localized'))
        obj.localized = ApiClient.convertToType(data['localized'], 'Number');
      if (data.hasOwnProperty('localized_formatted'))
        obj.localized_formatted = ApiClient.convertToType(data['localized_formatted'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
    }
    return obj;
  }

  /**
   * Currency code of the localized value
   * @member {String} currency_code
   */
  exports.prototype.currency_code = undefined;

  /**
   * Exchange rate used to localize
   * @member {Number} exchange_rate
   */
  exports.prototype.exchange_rate = undefined;

  /**
   * Value localized to the customer
   * @member {Number} localized
   */
  exports.prototype.localized = undefined;

  /**
   * Value localized and formatted for the customer
   * @member {String} localized_formatted
   */
  exports.prototype.localized_formatted = undefined;

  /**
   * Value in base currency
   * @member {Number} value
   */
  exports.prototype.value = undefined;

  return exports;

}));
