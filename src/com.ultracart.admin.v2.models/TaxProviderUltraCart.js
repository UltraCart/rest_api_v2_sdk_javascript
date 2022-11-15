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
    define(['ApiClient', 'com.ultracart.admin.v2.models/TaxProviderUltraCartState', 'com.ultracart.admin.v2.models/UltraCartConfig'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TaxProviderUltraCartState'), require('./UltraCartConfig'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.TaxProviderUltraCart = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.TaxProviderUltraCartState, root.UltraCartRestApiV2.UltraCartConfig);
  }
}(this, function(ApiClient, TaxProviderUltraCartState, UltraCartConfig) {
  'use strict';

  /**
   * The TaxProviderUltraCart model module.
   * @module com.ultracart.admin.v2.models/TaxProviderUltraCart
   * @version 3.10.65
   */

  /**
   * Constructs a new <code>TaxProviderUltraCart</code>.
   * @alias module:com.ultracart.admin.v2.models/TaxProviderUltraCart
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TaxProviderUltraCart</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/TaxProviderUltraCart} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/TaxProviderUltraCart} The populated <code>TaxProviderUltraCart</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('configuration'))
        obj.configuration = UltraCartConfig.constructFromObject(data['configuration']);
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('selected'))
        obj.selected = ApiClient.convertToType(data['selected'], 'Boolean');
      if (data.hasOwnProperty('states'))
        obj.states = ApiClient.convertToType(data['states'], [TaxProviderUltraCartState]);
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/UltraCartConfig} configuration
   */
  exports.prototype.configuration = undefined;

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
   * States in the union showing their management status
   * @member {Array.<module:com.ultracart.admin.v2.models/TaxProviderUltraCartState>} states
   */
  exports.prototype.states = undefined;

  /**
   * Title
   * @member {String} title
   */
  exports.prototype.title = undefined;

  return exports;

}));
