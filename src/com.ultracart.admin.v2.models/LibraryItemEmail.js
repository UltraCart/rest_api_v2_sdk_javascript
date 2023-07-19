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
    root.UltraCartRestApiV2.LibraryItemEmail = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LibraryItemEmail model module.
   * @module com.ultracart.admin.v2.models/LibraryItemEmail
   * @version 3.10.149
   */

  /**
   * Constructs a new <code>LibraryItemEmail</code>.
   * @alias module:com.ultracart.admin.v2.models/LibraryItemEmail
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>LibraryItemEmail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/LibraryItemEmail} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/LibraryItemEmail} The populated <code>LibraryItemEmail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('library_item_email_oid'))
        obj.library_item_email_oid = ApiClient.convertToType(data['library_item_email_oid'], 'Number');
      if (data.hasOwnProperty('library_item_oid'))
        obj.library_item_oid = ApiClient.convertToType(data['library_item_oid'], 'Number');
    }
    return obj;
  }

  /**
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * @member {Number} library_item_email_oid
   */
  exports.prototype.library_item_email_oid = undefined;

  /**
   * @member {Number} library_item_oid
   */
  exports.prototype.library_item_oid = undefined;

  return exports;

}));
