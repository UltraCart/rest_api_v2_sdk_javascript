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
    define(['ApiClient', 'com.ultracart.admin.v2.models/SelfConfig', 'com.ultracart.admin.v2.models/TaxCountry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SelfConfig'), require('./TaxCountry'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.TaxProviderSelf = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.SelfConfig, root.UltraCartRestApiV2.TaxCountry);
  }
}(this, function(ApiClient, SelfConfig, TaxCountry) {
  'use strict';

  /**
   * The TaxProviderSelf model module.
   * @module com.ultracart.admin.v2.models/TaxProviderSelf
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>TaxProviderSelf</code>.
   * @alias module:com.ultracart.admin.v2.models/TaxProviderSelf
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TaxProviderSelf</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/TaxProviderSelf} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/TaxProviderSelf} The populated <code>TaxProviderSelf</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('configuration'))
        obj.configuration = SelfConfig.constructFromObject(data['configuration']);
      if (data.hasOwnProperty('countries'))
        obj.countries = ApiClient.convertToType(data['countries'], [TaxCountry]);
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('selected'))
        obj.selected = ApiClient.convertToType(data['selected'], 'Boolean');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/SelfConfig} configuration
   */
  exports.prototype.configuration = undefined;

  /**
   * Countries that collect sales tax
   * @member {Array.<module:com.ultracart.admin.v2.models/TaxCountry>} countries
   */
  exports.prototype.countries = undefined;

  /**
   * Description
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * Selected
   * @member {Boolean} selected
   */
  exports.prototype.selected = undefined;

  /**
   * Title
   * @member {String} title
   */
  exports.prototype.title = undefined;

  return exports;

}));
