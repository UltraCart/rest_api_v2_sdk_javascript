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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ItemVariantItem = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ItemVariantItem model module.
   * @module com.ultracart.admin.v2.models/ItemVariantItem
   * @version 2.4.74
   */

  /**
   * Constructs a new <code>ItemVariantItem</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemVariantItem
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>ItemVariantItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemVariantItem} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemVariantItem} The populated <code>ItemVariantItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('merchant_item_multimedia_oid')) {
        obj['merchant_item_multimedia_oid'] = ApiClient.convertToType(data['merchant_item_multimedia_oid'], 'Number');
      }
      if (data.hasOwnProperty('variant_merchant_item_id')) {
        obj['variant_merchant_item_id'] = ApiClient.convertToType(data['variant_merchant_item_id'], 'String');
      }
      if (data.hasOwnProperty('variant_merchant_item_oid')) {
        obj['variant_merchant_item_oid'] = ApiClient.convertToType(data['variant_merchant_item_oid'], 'Number');
      }
      if (data.hasOwnProperty('variation_options')) {
        obj['variation_options'] = ApiClient.convertToType(data['variation_options'], ['String']);
      }
      if (data.hasOwnProperty('variations')) {
        obj['variations'] = ApiClient.convertToType(data['variations'], ['String']);
      }
    }
    return obj;
  }

  /**
   * Description
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Multimedia object identifier
   * @member {Number} merchant_item_multimedia_oid
   */
  exports.prototype['merchant_item_multimedia_oid'] = undefined;
  /**
   * Variant item id
   * @member {String} variant_merchant_item_id
   */
  exports.prototype['variant_merchant_item_id'] = undefined;
  /**
   * Variant item object identifier
   * @member {Number} variant_merchant_item_oid
   */
  exports.prototype['variant_merchant_item_oid'] = undefined;
  /**
   * Variation options
   * @member {Array.<String>} variation_options
   */
  exports.prototype['variation_options'] = undefined;
  /**
   * Variations
   * @member {Array.<String>} variations
   */
  exports.prototype['variations'] = undefined;



  return exports;
}));


