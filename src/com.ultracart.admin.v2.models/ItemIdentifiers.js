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
    root.UltraCartRestApiV2.ItemIdentifiers = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ItemIdentifiers model module.
   * @module com.ultracart.admin.v2.models/ItemIdentifiers
   * @version 3.10.198
   */

  /**
   * Constructs a new <code>ItemIdentifiers</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemIdentifiers
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemIdentifiers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemIdentifiers} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemIdentifiers} The populated <code>ItemIdentifiers</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('barcode'))
        obj.barcode = ApiClient.convertToType(data['barcode'], 'String');
      if (data.hasOwnProperty('barcode_gtin12'))
        obj.barcode_gtin12 = ApiClient.convertToType(data['barcode_gtin12'], 'String');
      if (data.hasOwnProperty('barcode_gtin14'))
        obj.barcode_gtin14 = ApiClient.convertToType(data['barcode_gtin14'], 'String');
      if (data.hasOwnProperty('barcode_upc11'))
        obj.barcode_upc11 = ApiClient.convertToType(data['barcode_upc11'], 'String');
      if (data.hasOwnProperty('barcode_upc12'))
        obj.barcode_upc12 = ApiClient.convertToType(data['barcode_upc12'], 'String');
      if (data.hasOwnProperty('manufacturer_name'))
        obj.manufacturer_name = ApiClient.convertToType(data['manufacturer_name'], 'String');
      if (data.hasOwnProperty('manufacturer_sku'))
        obj.manufacturer_sku = ApiClient.convertToType(data['manufacturer_sku'], 'String');
      if (data.hasOwnProperty('unspsc'))
        obj.unspsc = ApiClient.convertToType(data['unspsc'], 'String');
    }
    return obj;
  }

  /**
   * Barcode
   * @member {String} barcode
   */
  exports.prototype.barcode = undefined;

  /**
   * Barcode - GTIN 12
   * @member {String} barcode_gtin12
   */
  exports.prototype.barcode_gtin12 = undefined;

  /**
   * Barcode - GTIN 14
   * @member {String} barcode_gtin14
   */
  exports.prototype.barcode_gtin14 = undefined;

  /**
   * Barcode - UPC 11
   * @member {String} barcode_upc11
   */
  exports.prototype.barcode_upc11 = undefined;

  /**
   * Barcode - UPC 12
   * @member {String} barcode_upc12
   */
  exports.prototype.barcode_upc12 = undefined;

  /**
   * Manufacturer Name
   * @member {String} manufacturer_name
   */
  exports.prototype.manufacturer_name = undefined;

  /**
   * Manufacturer SKU
   * @member {String} manufacturer_sku
   */
  exports.prototype.manufacturer_sku = undefined;

  /**
   * UNSPSC
   * @member {String} unspsc
   */
  exports.prototype.unspsc = undefined;

  return exports;

}));
