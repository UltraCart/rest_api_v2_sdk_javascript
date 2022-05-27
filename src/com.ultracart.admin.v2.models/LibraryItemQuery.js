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
    root.UltraCartRestApiV2.LibraryItemQuery = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LibraryItemQuery model module.
   * @module com.ultracart.admin.v2.models/LibraryItemQuery
   * @version 3.10.8
   */

  /**
   * Constructs a new <code>LibraryItemQuery</code>.
   * @alias module:com.ultracart.admin.v2.models/LibraryItemQuery
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>LibraryItemQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/LibraryItemQuery} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/LibraryItemQuery} The populated <code>LibraryItemQuery</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('category'))
        obj.category = ApiClient.convertToType(data['category'], 'String');
      if (data.hasOwnProperty('content_type'))
        obj.content_type = ApiClient.convertToType(data['content_type'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('industry'))
        obj.industry = ApiClient.convertToType(data['industry'], 'String');
      if (data.hasOwnProperty('price_high'))
        obj.price_high = ApiClient.convertToType(data['price_high'], 'Number');
      if (data.hasOwnProperty('price_low'))
        obj.price_low = ApiClient.convertToType(data['price_low'], 'Number');
      if (data.hasOwnProperty('published_dts_begin'))
        obj.published_dts_begin = ApiClient.convertToType(data['published_dts_begin'], 'String');
      if (data.hasOwnProperty('published_dts_end'))
        obj.published_dts_end = ApiClient.convertToType(data['published_dts_end'], 'String');
      if (data.hasOwnProperty('source_of_published'))
        obj.source_of_published = ApiClient.convertToType(data['source_of_published'], 'Boolean');
      if (data.hasOwnProperty('style'))
        obj.style = ApiClient.convertToType(data['style'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }

  /**
   * Category
   * @member {String} category
   */
  exports.prototype.category = undefined;

  /**
   * Library item content type such as flow, campaign, cjson, email, or transactional_email
   * @member {String} content_type
   */
  exports.prototype.content_type = undefined;

  /**
   * Description of library item
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * Industry
   * @member {String} industry
   */
  exports.prototype.industry = undefined;

  /**
   * Maximum price
   * @member {Number} price_high
   */
  exports.prototype.price_high = undefined;

  /**
   * Minimum price
   * @member {Number} price_low
   */
  exports.prototype.price_low = undefined;

  /**
   * Minimum published date/time
   * @member {String} published_dts_begin
   */
  exports.prototype.published_dts_begin = undefined;

  /**
   * Maximum published date/time
   * @member {String} published_dts_end
   */
  exports.prototype.published_dts_end = undefined;

  /**
   * Boolean, true if this library item has been published and is the master copy of that published work
   * @member {Boolean} source_of_published
   */
  exports.prototype.source_of_published = undefined;

  /**
   * Library item style
   * @member {String} style
   */
  exports.prototype.style = undefined;

  /**
   * Title of the library item
   * @member {String} title
   */
  exports.prototype.title = undefined;

  /**
   * Library item type such as header, footer, shipping block, etc
   * @member {String} type
   */
  exports.prototype.type = undefined;

  return exports;

}));
