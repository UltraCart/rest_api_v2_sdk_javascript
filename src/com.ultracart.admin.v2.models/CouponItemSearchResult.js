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
    root.UltraCartRestApiV2.CouponItemSearchResult = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CouponItemSearchResult model module.
   * @module com.ultracart.admin.v2.models/CouponItemSearchResult
   * @version 3.10.8
   */

  /**
   * Constructs a new <code>CouponItemSearchResult</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponItemSearchResult
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CouponItemSearchResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CouponItemSearchResult} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CouponItemSearchResult} The populated <code>CouponItemSearchResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('cost'))
        obj.cost = ApiClient.convertToType(data['cost'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('manufacturer_name'))
        obj.manufacturer_name = ApiClient.convertToType(data['manufacturer_name'], 'String');
      if (data.hasOwnProperty('manufacturer_sku'))
        obj.manufacturer_sku = ApiClient.convertToType(data['manufacturer_sku'], 'String');
      if (data.hasOwnProperty('merchant_item_id'))
        obj.merchant_item_id = ApiClient.convertToType(data['merchant_item_id'], 'String');
      if (data.hasOwnProperty('merchant_item_oid'))
        obj.merchant_item_oid = ApiClient.convertToType(data['merchant_item_oid'], 'Number');
      if (data.hasOwnProperty('score'))
        obj.score = ApiClient.convertToType(data['score'], 'String');
      if (data.hasOwnProperty('thumbnail_url'))
        obj.thumbnail_url = ApiClient.convertToType(data['thumbnail_url'], 'String');
    }
    return obj;
  }

  /**
   * The cost of this item.
   * @member {String} cost
   */
  exports.prototype.cost = undefined;

  /**
   * A human readable description of this item.
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * The manufacturer of this item.
   * @member {String} manufacturer_name
   */
  exports.prototype.manufacturer_name = undefined;

  /**
   * The manufacturer sku of this item.
   * @member {String} manufacturer_sku
   */
  exports.prototype.manufacturer_sku = undefined;

  /**
   * The merchant item identifier, which is unique for this merchant, but not across all of UltraCart.
   * @member {String} merchant_item_id
   */
  exports.prototype.merchant_item_id = undefined;

  /**
   * The unique internal identifier used by UltraCart to manage this item.
   * @member {Number} merchant_item_oid
   */
  exports.prototype.merchant_item_oid = undefined;

  /**
   * The search score of this item.  Larger scores mean more accurate matches against the search term.
   * @member {String} score
   */
  exports.prototype.score = undefined;

  /**
   * A url for displaying a thumbnail of this item
   * @member {String} thumbnail_url
   */
  exports.prototype.thumbnail_url = undefined;

  return exports;

}));
