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
    define(['ApiClient', 'com.ultracart.admin.v2.models/CartItemOptionValue', 'com.ultracart.admin.v2.models/Currency'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CartItemOptionValue'), require('./Currency'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CartKitComponentOption = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.CartItemOptionValue, root.UltraCartRestApiV2.Currency);
  }
}(this, function(ApiClient, CartItemOptionValue, Currency) {
  'use strict';

  /**
   * The CartKitComponentOption model module.
   * @module com.ultracart.admin.v2.models/CartKitComponentOption
   * @version 3.9.6
   */

  /**
   * Constructs a new <code>CartKitComponentOption</code>.
   * @alias module:com.ultracart.admin.v2.models/CartKitComponentOption
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CartKitComponentOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CartKitComponentOption} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CartKitComponentOption} The populated <code>CartKitComponentOption</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('cost_if_specified'))
        obj.cost_if_specified = Currency.constructFromObject(data['cost_if_specified']);
      if (data.hasOwnProperty('cost_per_letter'))
        obj.cost_per_letter = Currency.constructFromObject(data['cost_per_letter']);
      if (data.hasOwnProperty('cost_per_line'))
        obj.cost_per_line = Currency.constructFromObject(data['cost_per_line']);
      if (data.hasOwnProperty('ignore_if_default'))
        obj.ignore_if_default = ApiClient.convertToType(data['ignore_if_default'], 'Boolean');
      if (data.hasOwnProperty('item_id'))
        obj.item_id = ApiClient.convertToType(data['item_id'], 'String');
      if (data.hasOwnProperty('item_oid'))
        obj.item_oid = ApiClient.convertToType(data['item_oid'], 'Number');
      if (data.hasOwnProperty('label'))
        obj.label = ApiClient.convertToType(data['label'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('one_time_fee'))
        obj.one_time_fee = ApiClient.convertToType(data['one_time_fee'], 'Boolean');
      if (data.hasOwnProperty('option_oid'))
        obj.option_oid = ApiClient.convertToType(data['option_oid'], 'Number');
      if (data.hasOwnProperty('required'))
        obj.required = ApiClient.convertToType(data['required'], 'Boolean');
      if (data.hasOwnProperty('selected_value'))
        obj.selected_value = ApiClient.convertToType(data['selected_value'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('values'))
        obj.values = ApiClient.convertToType(data['values'], [CartItemOptionValue]);
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} cost_if_specified
   */
  exports.prototype.cost_if_specified = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} cost_per_letter
   */
  exports.prototype.cost_per_letter = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} cost_per_line
   */
  exports.prototype.cost_per_line = undefined;

  /**
   * True if the default answer is ignored
   * @member {Boolean} ignore_if_default
   */
  exports.prototype.ignore_if_default = undefined;

  /**
   * Kit component item id
   * @member {String} item_id
   */
  exports.prototype.item_id = undefined;

  /**
   * Unique identifier for the kit component item
   * @member {Number} item_oid
   */
  exports.prototype.item_oid = undefined;

  /**
   * Display label for the option
   * @member {String} label
   */
  exports.prototype.label = undefined;

  /**
   * Name of the option
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Charge the fee a single time instead of multiplying by the quantity
   * @member {Boolean} one_time_fee
   */
  exports.prototype.one_time_fee = undefined;

  /**
   * Unique identifier for the option
   * @member {Number} option_oid
   */
  exports.prototype.option_oid = undefined;

  /**
   * True if the customer is required to select a value
   * @member {Boolean} required
   */
  exports.prototype.required = undefined;

  /**
   * The value of the option specified by the customer
   * @member {String} selected_value
   */
  exports.prototype.selected_value = undefined;

  /**
   * Type of option
   * @member {module:com.ultracart.admin.v2.models/CartKitComponentOption.TypeEnum} type
   */
  exports.prototype.type = undefined;

  /**
   * Values that the customer can select from for radio or select type options
   * @member {Array.<module:com.ultracart.admin.v2.models/CartItemOptionValue>} values
   */
  exports.prototype.values = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "single"
     * @const
     */
    single: "single",

    /**
     * value: "multiline"
     * @const
     */
    multiline: "multiline",

    /**
     * value: "dropdown"
     * @const
     */
    dropdown: "dropdown",

    /**
     * value: "hidden"
     * @const
     */
    hidden: "hidden",

    /**
     * value: "radio"
     * @const
     */
    radio: "radio",

    /**
     * value: "fixed"
     * @const
     */
    fixed: "fixed"
  };

  return exports;

}));
