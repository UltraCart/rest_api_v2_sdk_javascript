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
    root.UltraCartRestApiV2.LibraryItemPublishedMeta = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LibraryItemPublishedMeta model module.
   * @module com.ultracart.admin.v2.models/LibraryItemPublishedMeta
   * @version 3.10.121
   */

  /**
   * Constructs a new <code>LibraryItemPublishedMeta</code>.
   * @alias module:com.ultracart.admin.v2.models/LibraryItemPublishedMeta
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>LibraryItemPublishedMeta</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/LibraryItemPublishedMeta} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/LibraryItemPublishedMeta} The populated <code>LibraryItemPublishedMeta</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('count_of_versions'))
        obj.count_of_versions = ApiClient.convertToType(data['count_of_versions'], 'Number');
      if (data.hasOwnProperty('library_item_published_oid'))
        obj.library_item_published_oid = ApiClient.convertToType(data['library_item_published_oid'], 'Number');
      if (data.hasOwnProperty('library_item_review_oid'))
        obj.library_item_review_oid = ApiClient.convertToType(data['library_item_review_oid'], 'Number');
      if (data.hasOwnProperty('rejected'))
        obj.rejected = ApiClient.convertToType(data['rejected'], 'Boolean');
      if (data.hasOwnProperty('rejected_reason'))
        obj.rejected_reason = ApiClient.convertToType(data['rejected_reason'], 'String');
      if (data.hasOwnProperty('release_version'))
        obj.release_version = ApiClient.convertToType(data['release_version'], 'Number');
      if (data.hasOwnProperty('review_version'))
        obj.review_version = ApiClient.convertToType(data['review_version'], 'Number');
      if (data.hasOwnProperty('under_review'))
        obj.under_review = ApiClient.convertToType(data['under_review'], 'Boolean');
    }
    return obj;
  }

  /**
   * The number of published versions a source item has, or zero if this item is not a source or is private
   * @member {Number} count_of_versions
   */
  exports.prototype.count_of_versions = undefined;

  /**
   * The oid pointing to the most recent published version, or zero if this is not a published source item.
   * @member {Number} library_item_published_oid
   */
  exports.prototype.library_item_published_oid = undefined;

  /**
   * The oid pointing to the review data if this is a source library item and currently under review
   * @member {Number} library_item_review_oid
   */
  exports.prototype.library_item_review_oid = undefined;

  /**
   * True if this is a source item and is under review and was rejected.
   * @member {Boolean} rejected
   */
  exports.prototype.rejected = undefined;

  /**
   * The reason for rejection if this item is a source item, is under review, and was rejected.  For all other cases, this value will be null or missing.
   * @member {String} rejected_reason
   */
  exports.prototype.rejected_reason = undefined;

  /**
   * If this library item is a source item and it is published, this is the most recent release version number
   * @member {Number} release_version
   */
  exports.prototype.release_version = undefined;

  /**
   * If this library item is a source item and has a published item currently under review, this is that version number
   * @member {Number} review_version
   */
  exports.prototype.review_version = undefined;

  /**
   * True if this library item is a source item and is currently under review
   * @member {Boolean} under_review
   */
  exports.prototype.under_review = undefined;

  return exports;

}));
