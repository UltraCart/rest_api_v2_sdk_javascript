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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ItemTag'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ItemTag'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ItemTags = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ItemTag);
  }
}(this, function(ApiClient, ItemTag) {
  'use strict';




  /**
   * The ItemTags model module.
   * @module com.ultracart.admin.v2.models/ItemTags
   * @version 2.4.74
   */

  /**
   * Constructs a new <code>ItemTags</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemTags
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ItemTags</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemTags} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemTags} The populated <code>ItemTags</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], [ItemTag]);
      }
    }
    return obj;
  }

  /**
   * tags
   * @member {Array.<module:com.ultracart.admin.v2.models/ItemTag>} tags
   */
  exports.prototype['tags'] = undefined;



  return exports;
}));


