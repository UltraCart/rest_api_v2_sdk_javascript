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
    define(['ApiClient', 'com.ultracart.admin.v2.models/Currency'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Currency'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CartSettingsGiftWrap = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Currency);
  }
}(this, function(ApiClient, Currency) {
  'use strict';

  /**
   * The CartSettingsGiftWrap model module.
   * @module com.ultracart.admin.v2.models/CartSettingsGiftWrap
   * @version 3.2.13
   */

  /**
   * Constructs a new <code>CartSettingsGiftWrap</code>.
   * @alias module:com.ultracart.admin.v2.models/CartSettingsGiftWrap
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CartSettingsGiftWrap</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CartSettingsGiftWrap} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CartSettingsGiftWrap} The populated <code>CartSettingsGiftWrap</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('cost'))
        obj.cost = Currency.constructFromObject(data['cost']);
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} cost
   */
  exports.prototype.cost = undefined;

  /**
   * Title of the gift wrap
   * @member {String} title
   */
  exports.prototype.title = undefined;

  /**
   * URL for the sample of the gift wrap
   * @member {String} url
   */
  exports.prototype.url = undefined;

  return exports;

}));
