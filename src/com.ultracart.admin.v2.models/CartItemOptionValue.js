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
    define(['ApiClient', 'com.ultracart.admin.v2.models/Currency', 'com.ultracart.admin.v2.models/Weight'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Currency'), require('./Weight'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CartItemOptionValue = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Currency, root.UltraCartRestApiV2.Weight);
  }
}(this, function(ApiClient, Currency, Weight) {
  'use strict';

  /**
   * The CartItemOptionValue model module.
   * @module com.ultracart.admin.v2.models/CartItemOptionValue
   * @version 3.1.24
   */

  /**
   * Constructs a new <code>CartItemOptionValue</code>.
   * @alias module:com.ultracart.admin.v2.models/CartItemOptionValue
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CartItemOptionValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CartItemOptionValue} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CartItemOptionValue} The populated <code>CartItemOptionValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('additional_cost'))
        obj.additional_cost = Currency.constructFromObject(data['additional_cost']);
      if (data.hasOwnProperty('additional_weight'))
        obj.additional_weight = Weight.constructFromObject(data['additional_weight']);
      if (data.hasOwnProperty('default_value'))
        obj.default_value = ApiClient.convertToType(data['default_value'], 'Boolean');
      if (data.hasOwnProperty('display_order'))
        obj.display_order = ApiClient.convertToType(data['display_order'], 'Number');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} additional_cost
   */
  exports.prototype.additional_cost = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Weight} additional_weight
   */
  exports.prototype.additional_weight = undefined;

  /**
   * True if this is the default value
   * @member {Boolean} default_value
   */
  exports.prototype.default_value = undefined;

  /**
   * Display order of the option value
   * @member {Number} display_order
   */
  exports.prototype.display_order = undefined;

  /**
   * Value of the option the customer can select
   * @member {String} value
   */
  exports.prototype.value = undefined;

  return exports;

}));
