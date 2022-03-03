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
    root.UltraCartRestApiV2.RtgCurrency = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RtgCurrency model module.
   * @module com.ultracart.admin.v2.models/RtgCurrency
   * @version 3.9.1
   */

  /**
   * Constructs a new <code>RtgCurrency</code>.
   * @alias module:com.ultracart.admin.v2.models/RtgCurrency
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RtgCurrency</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/RtgCurrency} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/RtgCurrency} The populated <code>RtgCurrency</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('currency_code'))
        obj.currency_code = ApiClient.convertToType(data['currency_code'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('selected'))
        obj.selected = ApiClient.convertToType(data['selected'], 'Boolean');
    }
    return obj;
  }

  /**
   * Standard three letter currency code, for example USD
   * @member {String} currency_code
   */
  exports.prototype.currency_code = undefined;

  /**
   * Human friendly description of currency
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * true if this rotating gateway supports this currency
   * @member {Boolean} selected
   */
  exports.prototype.selected = undefined;

  return exports;

}));
