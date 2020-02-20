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
    root.UltraCartRestApiV2.ItemChannelPartnerMapping = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ItemChannelPartnerMapping model module.
   * @module com.ultracart.admin.v2.models/ItemChannelPartnerMapping
   * @version 2.4.76
   */

  /**
   * Constructs a new <code>ItemChannelPartnerMapping</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemChannelPartnerMapping
   * @class
   */
  var exports = function() {
    var _this = this;



















  };

  /**
   * Constructs a <code>ItemChannelPartnerMapping</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemChannelPartnerMapping} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemChannelPartnerMapping} The populated <code>ItemChannelPartnerMapping</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('barcode_ua')) {
        obj['barcode_ua'] = ApiClient.convertToType(data['barcode_ua'], 'String');
      }
      if (data.hasOwnProperty('barcode_uc')) {
        obj['barcode_uc'] = ApiClient.convertToType(data['barcode_uc'], 'String');
      }
      if (data.hasOwnProperty('barcode_ui')) {
        obj['barcode_ui'] = ApiClient.convertToType(data['barcode_ui'], 'String');
      }
      if (data.hasOwnProperty('barcode_uk')) {
        obj['barcode_uk'] = ApiClient.convertToType(data['barcode_uk'], 'String');
      }
      if (data.hasOwnProperty('buyer_catalog_number')) {
        obj['buyer_catalog_number'] = ApiClient.convertToType(data['buyer_catalog_number'], 'String');
      }
      if (data.hasOwnProperty('buyer_dpci')) {
        obj['buyer_dpci'] = ApiClient.convertToType(data['buyer_dpci'], 'String');
      }
      if (data.hasOwnProperty('buyer_item_number')) {
        obj['buyer_item_number'] = ApiClient.convertToType(data['buyer_item_number'], 'String');
      }
      if (data.hasOwnProperty('channel_partner_code')) {
        obj['channel_partner_code'] = ApiClient.convertToType(data['channel_partner_code'], 'String');
      }
      if (data.hasOwnProperty('channel_partner_oid')) {
        obj['channel_partner_oid'] = ApiClient.convertToType(data['channel_partner_oid'], 'Number');
      }
      if (data.hasOwnProperty('from_item_id')) {
        obj['from_item_id'] = ApiClient.convertToType(data['from_item_id'], 'String');
      }
      if (data.hasOwnProperty('from_sku')) {
        obj['from_sku'] = ApiClient.convertToType(data['from_sku'], 'String');
      }
      if (data.hasOwnProperty('mutually_defined_number')) {
        obj['mutually_defined_number'] = ApiClient.convertToType(data['mutually_defined_number'], 'String');
      }
      if (data.hasOwnProperty('quantity_ratio_cp')) {
        obj['quantity_ratio_cp'] = ApiClient.convertToType(data['quantity_ratio_cp'], 'Number');
      }
      if (data.hasOwnProperty('quantity_ratio_uc')) {
        obj['quantity_ratio_uc'] = ApiClient.convertToType(data['quantity_ratio_uc'], 'Number');
      }
      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
      }
      if (data.hasOwnProperty('unit_of_measure')) {
        obj['unit_of_measure'] = ApiClient.convertToType(data['unit_of_measure'], 'String');
      }
      if (data.hasOwnProperty('vendor_number')) {
        obj['vendor_number'] = ApiClient.convertToType(data['vendor_number'], 'String');
      }
      if (data.hasOwnProperty('vendor_style_number')) {
        obj['vendor_style_number'] = ApiClient.convertToType(data['vendor_style_number'], 'String');
      }
    }
    return obj;
  }

  /**
   * Barcode UA (EDI only)
   * @member {String} barcode_ua
   */
  exports.prototype['barcode_ua'] = undefined;
  /**
   * Barcode UC (EDI only)
   * @member {String} barcode_uc
   */
  exports.prototype['barcode_uc'] = undefined;
  /**
   * Barcode UI (EDI only)
   * @member {String} barcode_ui
   */
  exports.prototype['barcode_ui'] = undefined;
  /**
   * Barcode UK (EDI only)
   * @member {String} barcode_uk
   */
  exports.prototype['barcode_uk'] = undefined;
  /**
   * Buyer catalog number (EDI only)
   * @member {String} buyer_catalog_number
   */
  exports.prototype['buyer_catalog_number'] = undefined;
  /**
   * Buyer DPCI (EDI only)
   * @member {String} buyer_dpci
   */
  exports.prototype['buyer_dpci'] = undefined;
  /**
   * Buyer item number (EDI only)
   * @member {String} buyer_item_number
   */
  exports.prototype['buyer_item_number'] = undefined;
  /**
   * Channel partner code
   * @member {String} channel_partner_code
   */
  exports.prototype['channel_partner_code'] = undefined;
  /**
   * Channel partner object identifier
   * @member {Number} channel_partner_oid
   */
  exports.prototype['channel_partner_oid'] = undefined;
  /**
   * From Item ID
   * @member {String} from_item_id
   */
  exports.prototype['from_item_id'] = undefined;
  /**
   * From SKU
   * @member {String} from_sku
   */
  exports.prototype['from_sku'] = undefined;
  /**
   * Mutually defined number (EDI only)
   * @member {String} mutually_defined_number
   */
  exports.prototype['mutually_defined_number'] = undefined;
  /**
   * Ratio (Channel Partner)
   * @member {Number} quantity_ratio_cp
   */
  exports.prototype['quantity_ratio_cp'] = undefined;
  /**
   * Ratio (UltraCart)
   * @member {Number} quantity_ratio_uc
   */
  exports.prototype['quantity_ratio_uc'] = undefined;
  /**
   * SKU
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;
  /**
   * Unit of measure
   * @member {String} unit_of_measure
   */
  exports.prototype['unit_of_measure'] = undefined;
  /**
   * Vendor number (EDI only)
   * @member {String} vendor_number
   */
  exports.prototype['vendor_number'] = undefined;
  /**
   * Vendor style number (EDI only)
   * @member {String} vendor_style_number
   */
  exports.prototype['vendor_style_number'] = undefined;



  return exports;
}));


