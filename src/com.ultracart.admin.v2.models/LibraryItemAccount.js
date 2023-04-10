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
    root.UltraCartRestApiV2.LibraryItemAccount = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LibraryItemAccount model module.
   * @module com.ultracart.admin.v2.models/LibraryItemAccount
   * @version 3.10.128
   */

  /**
   * Constructs a new <code>LibraryItemAccount</code>.
   * @alias module:com.ultracart.admin.v2.models/LibraryItemAccount
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>LibraryItemAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/LibraryItemAccount} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/LibraryItemAccount} The populated <code>LibraryItemAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('library_item_account_oid'))
        obj.library_item_account_oid = ApiClient.convertToType(data['library_item_account_oid'], 'Number');
      if (data.hasOwnProperty('library_item_oid'))
        obj.library_item_oid = ApiClient.convertToType(data['library_item_oid'], 'Number');
      if (data.hasOwnProperty('other_merchant_id'))
        obj.other_merchant_id = ApiClient.convertToType(data['other_merchant_id'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} library_item_account_oid
   */
  exports.prototype.library_item_account_oid = undefined;

  /**
   * @member {Number} library_item_oid
   */
  exports.prototype.library_item_oid = undefined;

  /**
   * @member {String} other_merchant_id
   */
  exports.prototype.other_merchant_id = undefined;

  return exports;

}));
