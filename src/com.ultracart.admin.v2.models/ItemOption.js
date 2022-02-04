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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ItemOptionValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ItemOptionValue'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ItemOption = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ItemOptionValue);
  }
}(this, function(ApiClient, ItemOptionValue) {
  'use strict';

  /**
   * The ItemOption model module.
   * @module com.ultracart.admin.v2.models/ItemOption
   * @version 3.6.37
   */

  /**
   * Constructs a new <code>ItemOption</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemOption
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemOption} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemOption} The populated <code>ItemOption</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('cost_if_specified'))
        obj.cost_if_specified = ApiClient.convertToType(data['cost_if_specified'], 'Number');
      if (data.hasOwnProperty('cost_per_letter'))
        obj.cost_per_letter = ApiClient.convertToType(data['cost_per_letter'], 'Number');
      if (data.hasOwnProperty('cost_per_line'))
        obj.cost_per_line = ApiClient.convertToType(data['cost_per_line'], 'Number');
      if (data.hasOwnProperty('ignore_if_default'))
        obj.ignore_if_default = ApiClient.convertToType(data['ignore_if_default'], 'Boolean');
      if (data.hasOwnProperty('label'))
        obj.label = ApiClient.convertToType(data['label'], 'String');
      if (data.hasOwnProperty('label_translated_text_instance_oid'))
        obj.label_translated_text_instance_oid = ApiClient.convertToType(data['label_translated_text_instance_oid'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('name_translated_text_instance_oid'))
        obj.name_translated_text_instance_oid = ApiClient.convertToType(data['name_translated_text_instance_oid'], 'Number');
      if (data.hasOwnProperty('one_time_fee'))
        obj.one_time_fee = ApiClient.convertToType(data['one_time_fee'], 'Boolean');
      if (data.hasOwnProperty('option_oid'))
        obj.option_oid = ApiClient.convertToType(data['option_oid'], 'Number');
      if (data.hasOwnProperty('required'))
        obj.required = ApiClient.convertToType(data['required'], 'Boolean');
      if (data.hasOwnProperty('system_option'))
        obj.system_option = ApiClient.convertToType(data['system_option'], 'Boolean');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('values'))
        obj.values = ApiClient.convertToType(data['values'], [ItemOptionValue]);
    }
    return obj;
  }

  /**
   * Cost if specified
   * @member {Number} cost_if_specified
   */
  exports.prototype.cost_if_specified = undefined;

  /**
   * Cost per letter
   * @member {Number} cost_per_letter
   */
  exports.prototype.cost_per_letter = undefined;

  /**
   * Cost per line
   * @member {Number} cost_per_line
   */
  exports.prototype.cost_per_line = undefined;

  /**
   * Ignore this option on the order if the default value is selected
   * @member {Boolean} ignore_if_default
   */
  exports.prototype.ignore_if_default = undefined;

  /**
   * Label
   * @member {String} label
   */
  exports.prototype.label = undefined;

  /**
   * Label translated text instance ID
   * @member {Number} label_translated_text_instance_oid
   */
  exports.prototype.label_translated_text_instance_oid = undefined;

  /**
   * Name
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Name translated text instance ID
   * @member {Number} name_translated_text_instance_oid
   */
  exports.prototype.name_translated_text_instance_oid = undefined;

  /**
   * One time fee
   * @member {Boolean} one_time_fee
   */
  exports.prototype.one_time_fee = undefined;

  /**
   * Option object identifier
   * @member {Number} option_oid
   */
  exports.prototype.option_oid = undefined;

  /**
   * True if the customer is required to specify an answer
   * @member {Boolean} required
   */
  exports.prototype.required = undefined;

  /**
   * True if this is a system option
   * @member {Boolean} system_option
   */
  exports.prototype.system_option = undefined;

  /**
   * Type of option
   * @member {module:com.ultracart.admin.v2.models/ItemOption.TypeEnum} type
   */
  exports.prototype.type = undefined;

  /**
   * Values
   * @member {Array.<module:com.ultracart.admin.v2.models/ItemOptionValue>} values
   */
  exports.prototype.values = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "dropdown"
     * @const
     */
    dropdown: "dropdown",

    /**
     * value: "file attachment"
     * @const
     */
    file_attachment: "file attachment",

    /**
     * value: "fixed"
     * @const
     */
    fixed: "fixed",

    /**
     * value: "hidden"
     * @const
     */
    hidden: "hidden",

    /**
     * value: "multiline"
     * @const
     */
    multiline: "multiline",

    /**
     * value: "radio"
     * @const
     */
    radio: "radio",

    /**
     * value: "single"
     * @const
     */
    single: "single"
  };

  return exports;

}));
