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
    define(['ApiClient', 'com.ultracart.admin.v2.models/LibraryItemAccount', 'com.ultracart.admin.v2.models/LibraryItemAsset', 'com.ultracart.admin.v2.models/LibraryItemEmail', 'com.ultracart.admin.v2.models/LibraryItemScreenshot'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LibraryItemAccount'), require('./LibraryItemAsset'), require('./LibraryItemEmail'), require('./LibraryItemScreenshot'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.LibraryItem = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.LibraryItemAccount, root.UltraCartRestApiV2.LibraryItemAsset, root.UltraCartRestApiV2.LibraryItemEmail, root.UltraCartRestApiV2.LibraryItemScreenshot);
  }
}(this, function(ApiClient, LibraryItemAccount, LibraryItemAsset, LibraryItemEmail, LibraryItemScreenshot) {
  'use strict';

  /**
   * The LibraryItem model module.
   * @module com.ultracart.admin.v2.models/LibraryItem
   * @version 3.0.16
   */

  /**
   * Constructs a new <code>LibraryItem</code>.
   * @alias module:com.ultracart.admin.v2.models/LibraryItem
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>LibraryItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/LibraryItem} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/LibraryItem} The populated <code>LibraryItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('assets'))
        obj.assets = ApiClient.convertToType(data['assets'], [LibraryItemAsset]);
      if (data.hasOwnProperty('categories'))
        obj.categories = ApiClient.convertToType(data['categories'], ['String']);
      if (data.hasOwnProperty('content'))
        obj.content = ApiClient.convertToType(data['content'], 'String');
      if (data.hasOwnProperty('content_type'))
        obj.content_type = ApiClient.convertToType(data['content_type'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('industries'))
        obj.industries = ApiClient.convertToType(data['industries'], ['String']);
      if (data.hasOwnProperty('library_item_oid'))
        obj.library_item_oid = ApiClient.convertToType(data['library_item_oid'], 'Number');
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('price'))
        obj.price = ApiClient.convertToType(data['price'], 'Number');
      if (data.hasOwnProperty('price_formatted'))
        obj.price_formatted = ApiClient.convertToType(data['price_formatted'], 'String');
      if (data.hasOwnProperty('published'))
        obj.published = ApiClient.convertToType(data['published'], 'Boolean');
      if (data.hasOwnProperty('published_from_library_item_oid'))
        obj.published_from_library_item_oid = ApiClient.convertToType(data['published_from_library_item_oid'], 'Number');
      if (data.hasOwnProperty('published_version'))
        obj.published_version = ApiClient.convertToType(data['published_version'], 'Number');
      if (data.hasOwnProperty('purchased'))
        obj.purchased = ApiClient.convertToType(data['purchased'], 'Boolean');
      if (data.hasOwnProperty('purchased_from_library_item_oid'))
        obj.purchased_from_library_item_oid = ApiClient.convertToType(data['purchased_from_library_item_oid'], 'Number');
      if (data.hasOwnProperty('purchased_version'))
        obj.purchased_version = ApiClient.convertToType(data['purchased_version'], 'Number');
      if (data.hasOwnProperty('screenshots'))
        obj.screenshots = ApiClient.convertToType(data['screenshots'], [LibraryItemScreenshot]);
      if (data.hasOwnProperty('share_with_accounts'))
        obj.share_with_accounts = ApiClient.convertToType(data['share_with_accounts'], [LibraryItemAccount]);
      if (data.hasOwnProperty('share_with_other_emails'))
        obj.share_with_other_emails = ApiClient.convertToType(data['share_with_other_emails'], [LibraryItemEmail]);
      if (data.hasOwnProperty('shared'))
        obj.shared = ApiClient.convertToType(data['shared'], 'Boolean');
      if (data.hasOwnProperty('source'))
        obj.source = ApiClient.convertToType(data['source'], 'Boolean');
      if (data.hasOwnProperty('source_to_library_item_oid'))
        obj.source_to_library_item_oid = ApiClient.convertToType(data['source_to_library_item_oid'], 'Number');
      if (data.hasOwnProperty('source_version'))
        obj.source_version = ApiClient.convertToType(data['source_version'], 'Number');
      if (data.hasOwnProperty('style'))
        obj.style = ApiClient.convertToType(data['style'], 'String');
      if (data.hasOwnProperty('times_purchased'))
        obj.times_purchased = ApiClient.convertToType(data['times_purchased'], 'Number');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/LibraryItemAsset>} assets
   */
  exports.prototype.assets = undefined;

  /**
   * @member {Array.<String>} categories
   */
  exports.prototype.categories = undefined;

  /**
   * @member {String} content
   */
  exports.prototype.content = undefined;

  /**
   * @member {String} content_type
   */
  exports.prototype.content_type = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {Array.<String>} industries
   */
  exports.prototype.industries = undefined;

  /**
   * @member {Number} library_item_oid
   */
  exports.prototype.library_item_oid = undefined;

  /**
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * The price of the published item.  Null for any private library items.
   * @member {Number} price
   */
  exports.prototype.price = undefined;

  /**
   * The formatted price of the published item.  Null for any private library items.
   * @member {String} price_formatted
   */
  exports.prototype.price_formatted = undefined;

  /**
   * True if this library item is a published item (not source)
   * @member {Boolean} published
   */
  exports.prototype.published = undefined;

  /**
   * The source item used to publish this item.  This allows for comparisons between source and published
   * @member {Number} published_from_library_item_oid
   */
  exports.prototype.published_from_library_item_oid = undefined;

  /**
   * The source version when this item was published.  This allows for out-of-date alerts to be shown when there is a difference between source and published
   * @member {Number} published_version
   */
  exports.prototype.published_version = undefined;

  /**
   * True if this library item has been purchased
   * @member {Boolean} purchased
   */
  exports.prototype.purchased = undefined;

  /**
   * The published item that was purchased to make this item.  This allows for comparisons between published and purchased
   * @member {Number} purchased_from_library_item_oid
   */
  exports.prototype.purchased_from_library_item_oid = undefined;

  /**
   * The published version when this item was purchased.  This allows for out-of-date alerts to be shown when there is a difference between published and purchased
   * @member {Number} purchased_version
   */
  exports.prototype.purchased_version = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/LibraryItemScreenshot>} screenshots
   */
  exports.prototype.screenshots = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/LibraryItemAccount>} share_with_accounts
   */
  exports.prototype.share_with_accounts = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/LibraryItemEmail>} share_with_other_emails
   */
  exports.prototype.share_with_other_emails = undefined;

  /**
   * True if this item is shared from another merchant account
   * @member {Boolean} shared
   */
  exports.prototype.shared = undefined;

  /**
   * True if this library item has been published
   * @member {Boolean} source
   */
  exports.prototype.source = undefined;

  /**
   * This oid points to the published library item, if there is one.
   * @member {Number} source_to_library_item_oid
   */
  exports.prototype.source_to_library_item_oid = undefined;

  /**
   * The version of this item.  Increment every time the item is saved.
   * @member {Number} source_version
   */
  exports.prototype.source_version = undefined;

  /**
   * @member {String} style
   */
  exports.prototype.style = undefined;

  /**
   * @member {Number} times_purchased
   */
  exports.prototype.times_purchased = undefined;

  /**
   * @member {String} title
   */
  exports.prototype.title = undefined;

  /**
   * @member {String} type
   */
  exports.prototype.type = undefined;

  return exports;

}));
