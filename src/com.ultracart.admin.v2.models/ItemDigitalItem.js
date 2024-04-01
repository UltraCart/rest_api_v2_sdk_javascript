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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ItemDigitalItemPdfMeta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ItemDigitalItemPdfMeta'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ItemDigitalItem = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ItemDigitalItemPdfMeta);
  }
}(this, function(ApiClient, ItemDigitalItemPdfMeta) {
  'use strict';

  /**
   * The ItemDigitalItem model module.
   * @module com.ultracart.admin.v2.models/ItemDigitalItem
   * @version 3.10.192
   */

  /**
   * Constructs a new <code>ItemDigitalItem</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemDigitalItem
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemDigitalItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemDigitalItem} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemDigitalItem} The populated <code>ItemDigitalItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('click_wrap_agreement'))
        obj.click_wrap_agreement = ApiClient.convertToType(data['click_wrap_agreement'], 'String');
      if (data.hasOwnProperty('creation_dts'))
        obj.creation_dts = ApiClient.convertToType(data['creation_dts'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('digital_item_oid'))
        obj.digital_item_oid = ApiClient.convertToType(data['digital_item_oid'], 'Number');
      if (data.hasOwnProperty('external_id'))
        obj.external_id = ApiClient.convertToType(data['external_id'], 'String');
      if (data.hasOwnProperty('file_size'))
        obj.file_size = ApiClient.convertToType(data['file_size'], 'Number');
      if (data.hasOwnProperty('import_from_url'))
        obj.import_from_url = ApiClient.convertToType(data['import_from_url'], 'String');
      if (data.hasOwnProperty('mime_type'))
        obj.mime_type = ApiClient.convertToType(data['mime_type'], 'String');
      if (data.hasOwnProperty('original_filename'))
        obj.original_filename = ApiClient.convertToType(data['original_filename'], 'String');
      if (data.hasOwnProperty('pdf_meta'))
        obj.pdf_meta = ItemDigitalItemPdfMeta.constructFromObject(data['pdf_meta']);
    }
    return obj;
  }

  /**
   * Click wrap agreement is presented to the customer before they can purchase your product.
   * @member {String} click_wrap_agreement
   */
  exports.prototype.click_wrap_agreement = undefined;

  /**
   * File creation date
   * @member {String} creation_dts
   */
  exports.prototype.creation_dts = undefined;

  /**
   * Description of the digital item
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * The Digital item oid is a primary key used internally by UltraCart.  You should not set or change this value.  Doing so will have no effect.
   * @member {Number} digital_item_oid
   */
  exports.prototype.digital_item_oid = undefined;

  /**
   * External Id useful for syncing with a remote filesystem, this may be an MD5 hash or whatever suits your needs.
   * @member {String} external_id
   */
  exports.prototype.external_id = undefined;

  /**
   * File size
   * @member {Number} file_size
   */
  exports.prototype.file_size = undefined;

  /**
   * This url is sourced to create or update a digital file in your digital library.  It is only considered during an insert or update operation.
   * @member {String} import_from_url
   */
  exports.prototype.import_from_url = undefined;

  /**
   * Mime type associated with the file
   * @member {String} mime_type
   */
  exports.prototype.mime_type = undefined;

  /**
   * Original filename
   * @member {String} original_filename
   */
  exports.prototype.original_filename = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemDigitalItemPdfMeta} pdf_meta
   */
  exports.prototype.pdf_meta = undefined;

  return exports;

}));
