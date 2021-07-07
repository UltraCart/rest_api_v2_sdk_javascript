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
    root.UltraCartRestApiV2.ItemVariationOption = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ItemVariationOption model module.
   * @module com.ultracart.admin.v2.models/ItemVariationOption
   * @version 3.2.9
   */

  /**
   * Constructs a new <code>ItemVariationOption</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemVariationOption
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemVariationOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemVariationOption} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemVariationOption} The populated <code>ItemVariationOption</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('default_option'))
        obj.default_option = ApiClient.convertToType(data['default_option'], 'Boolean');
      if (data.hasOwnProperty('merchant_item_multimedia_oid'))
        obj.merchant_item_multimedia_oid = ApiClient.convertToType(data['merchant_item_multimedia_oid'], 'Number');
      if (data.hasOwnProperty('translated_text_instance_oid'))
        obj.translated_text_instance_oid = ApiClient.convertToType(data['translated_text_instance_oid'], 'Number');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
    }
    return obj;
  }

  /**
   * True if default option
   * @member {Boolean} default_option
   */
  exports.prototype.default_option = undefined;

  /**
   * Multimedia object identifier
   * @member {Number} merchant_item_multimedia_oid
   */
  exports.prototype.merchant_item_multimedia_oid = undefined;

  /**
   * Translated text instance id
   * @member {Number} translated_text_instance_oid
   */
  exports.prototype.translated_text_instance_oid = undefined;

  /**
   * Value
   * @member {String} value
   */
  exports.prototype.value = undefined;

  return exports;

}));
