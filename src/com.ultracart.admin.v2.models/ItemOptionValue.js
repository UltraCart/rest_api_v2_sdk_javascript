/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'com.ultracart.admin.v2.models/Distance', 'com.ultracart.admin.v2.models/ItemOptionValueAdditionalItem', 'com.ultracart.admin.v2.models/ItemOptionValueDigitalItem', 'com.ultracart.admin.v2.models/Weight'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Distance'), require('./ItemOptionValueAdditionalItem'), require('./ItemOptionValueDigitalItem'), require('./Weight'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ItemOptionValue = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Distance, root.UltraCartRestApiV2.ItemOptionValueAdditionalItem, root.UltraCartRestApiV2.ItemOptionValueDigitalItem, root.UltraCartRestApiV2.Weight);
  }
}(this, function(ApiClient, Distance, ItemOptionValueAdditionalItem, ItemOptionValueDigitalItem, Weight) {
  'use strict';




  /**
   * The ItemOptionValue model module.
   * @module com.ultracart.admin.v2.models/ItemOptionValue
   * @version 2.4.17
   */

  /**
   * Constructs a new <code>ItemOptionValue</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemOptionValue
   * @class
   */
  var exports = function() {
    var _this = this;
















  };

  /**
   * Constructs a <code>ItemOptionValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemOptionValue} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemOptionValue} The populated <code>ItemOptionValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('additional_dimension_application')) {
        obj['additional_dimension_application'] = ApiClient.convertToType(data['additional_dimension_application'], 'String');
      }
      if (data.hasOwnProperty('additional_items')) {
        obj['additional_items'] = ApiClient.convertToType(data['additional_items'], [ItemOptionValueAdditionalItem]);
      }
      if (data.hasOwnProperty('cost_change')) {
        obj['cost_change'] = ApiClient.convertToType(data['cost_change'], 'Number');
      }
      if (data.hasOwnProperty('default_value')) {
        obj['default_value'] = ApiClient.convertToType(data['default_value'], 'Boolean');
      }
      if (data.hasOwnProperty('digital_items')) {
        obj['digital_items'] = ApiClient.convertToType(data['digital_items'], [ItemOptionValueDigitalItem]);
      }
      if (data.hasOwnProperty('height')) {
        obj['height'] = Distance.constructFromObject(data['height']);
      }
      if (data.hasOwnProperty('length')) {
        obj['length'] = Distance.constructFromObject(data['length']);
      }
      if (data.hasOwnProperty('merchant_item_multimedia_oid')) {
        obj['merchant_item_multimedia_oid'] = ApiClient.convertToType(data['merchant_item_multimedia_oid'], 'Number');
      }
      if (data.hasOwnProperty('option_value_oid')) {
        obj['option_value_oid'] = ApiClient.convertToType(data['option_value_oid'], 'Number');
      }
      if (data.hasOwnProperty('percent_cost_change')) {
        obj['percent_cost_change'] = ApiClient.convertToType(data['percent_cost_change'], 'Number');
      }
      if (data.hasOwnProperty('translated_text_instance_oid')) {
        obj['translated_text_instance_oid'] = ApiClient.convertToType(data['translated_text_instance_oid'], 'Number');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('weight_change')) {
        obj['weight_change'] = Weight.constructFromObject(data['weight_change']);
      }
      if (data.hasOwnProperty('weight_change_percent')) {
        obj['weight_change_percent'] = ApiClient.convertToType(data['weight_change_percent'], 'Number');
      }
      if (data.hasOwnProperty('width')) {
        obj['width'] = Distance.constructFromObject(data['width']);
      }
    }
    return obj;
  }

  /**
   * Additional dimensions application
   * @member {module:com.ultracart.admin.v2.models/ItemOptionValue.AdditionalDimensionApplicationEnum} additional_dimension_application
   */
  exports.prototype['additional_dimension_application'] = undefined;
  /**
   * Additional items to add to the order if this value is selected
   * @member {Array.<module:com.ultracart.admin.v2.models/ItemOptionValueAdditionalItem>} additional_items
   */
  exports.prototype['additional_items'] = undefined;
  /**
   * Cost change
   * @member {Number} cost_change
   */
  exports.prototype['cost_change'] = undefined;
  /**
   * True if default value
   * @member {Boolean} default_value
   */
  exports.prototype['default_value'] = undefined;
  /**
   * Digital items to allow the customer to download if this option value is selected
   * @member {Array.<module:com.ultracart.admin.v2.models/ItemOptionValueDigitalItem>} digital_items
   */
  exports.prototype['digital_items'] = undefined;
  /**
   * @member {module:com.ultracart.admin.v2.models/Distance} height
   */
  exports.prototype['height'] = undefined;
  /**
   * @member {module:com.ultracart.admin.v2.models/Distance} length
   */
  exports.prototype['length'] = undefined;
  /**
   * Multimedia object identifier associated with this option value
   * @member {Number} merchant_item_multimedia_oid
   */
  exports.prototype['merchant_item_multimedia_oid'] = undefined;
  /**
   * Option value object identifier
   * @member {Number} option_value_oid
   */
  exports.prototype['option_value_oid'] = undefined;
  /**
   * Percentage cost change
   * @member {Number} percent_cost_change
   */
  exports.prototype['percent_cost_change'] = undefined;
  /**
   * Translated text instance id
   * @member {Number} translated_text_instance_oid
   */
  exports.prototype['translated_text_instance_oid'] = undefined;
  /**
   * Value
   * @member {String} value
   */
  exports.prototype['value'] = undefined;
  /**
   * @member {module:com.ultracart.admin.v2.models/Weight} weight_change
   */
  exports.prototype['weight_change'] = undefined;
  /**
   * Percentage weight change
   * @member {Number} weight_change_percent
   */
  exports.prototype['weight_change_percent'] = undefined;
  /**
   * @member {module:com.ultracart.admin.v2.models/Distance} width
   */
  exports.prototype['width'] = undefined;


  /**
   * Allowed values for the <code>additional_dimension_application</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AdditionalDimensionApplicationEnum = {
    /**
     * value: "none"
     * @const
     */
    "none": "none",
    /**
     * value: "set item to"
     * @const
     */
    "set item to": "set item to",
    /**
     * value: "add item"
     * @const
     */
    "add item": "add item"  };


  return exports;
}));


