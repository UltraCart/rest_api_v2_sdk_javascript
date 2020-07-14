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
    root.UltraCartRestApiV2.AddLibraryItemRequest = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AddLibraryItemRequest model module.
   * @module com.ultracart.admin.v2.models/AddLibraryItemRequest
   * @version 2.4.121
   */

  /**
   * Constructs a new <code>AddLibraryItemRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/AddLibraryItemRequest
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>AddLibraryItemRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/AddLibraryItemRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/AddLibraryItemRequest} The populated <code>AddLibraryItemRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cjson')) {
        obj['cjson'] = ApiClient.convertToType(data['cjson'], 'String');
      }
      if (data.hasOwnProperty('content_type')) {
        obj['content_type'] = ApiClient.convertToType(data['content_type'], 'String');
      }
      if (data.hasOwnProperty('storefront_oid')) {
        obj['storefront_oid'] = ApiClient.convertToType(data['storefront_oid'], 'Number');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
    }
    return obj;
  }

  /**
   * Cjson to be added to library
   * @member {String} cjson
   */
  exports.prototype['cjson'] = undefined;
  /**
   * flow, campaign, cjson, or upsell
   * @member {String} content_type
   */
  exports.prototype['content_type'] = undefined;
  /**
   * StoreFront oid where content originates necessary for tracking down relative assets
   * @member {Number} storefront_oid
   */
  exports.prototype['storefront_oid'] = undefined;
  /**
   * title of library item, usually the name of the flow or campaign, or description of cjson
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * UUID of communication flow or campaign, null if this item is neither
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;



  return exports;
}));

