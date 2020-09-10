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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ItemVariationOption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ItemVariationOption'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ItemVariation = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ItemVariationOption);
  }
}(this, function(ApiClient, ItemVariationOption) {
  'use strict';

  /**
   * The ItemVariation model module.
   * @module com.ultracart.admin.v2.models/ItemVariation
   * @version 3.0.24
   */

  /**
   * Constructs a new <code>ItemVariation</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemVariation
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemVariation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemVariation} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemVariation} The populated <code>ItemVariation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('default_text'))
        obj.default_text = ApiClient.convertToType(data['default_text'], 'String');
      if (data.hasOwnProperty('default_text_translated_text_instance_oid'))
        obj.default_text_translated_text_instance_oid = ApiClient.convertToType(data['default_text_translated_text_instance_oid'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('name_translated_text_instance_oid'))
        obj.name_translated_text_instance_oid = ApiClient.convertToType(data['name_translated_text_instance_oid'], 'Number');
      if (data.hasOwnProperty('options'))
        obj.options = ApiClient.convertToType(data['options'], [ItemVariationOption]);
    }
    return obj;
  }

  /**
   * Default text
   * @member {String} default_text
   */
  exports.prototype.default_text = undefined;

  /**
   * Default text translated text instance id
   * @member {Number} default_text_translated_text_instance_oid
   */
  exports.prototype.default_text_translated_text_instance_oid = undefined;

  /**
   * Name
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Name translated text instance id
   * @member {Number} name_translated_text_instance_oid
   */
  exports.prototype.name_translated_text_instance_oid = undefined;

  /**
   * Options
   * @member {Array.<module:com.ultracart.admin.v2.models/ItemVariationOption>} options
   */
  exports.prototype.options = undefined;

  return exports;

}));
