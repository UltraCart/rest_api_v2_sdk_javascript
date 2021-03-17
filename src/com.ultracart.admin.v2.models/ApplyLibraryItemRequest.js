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
    root.UltraCartRestApiV2.ApplyLibraryItemRequest = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ApplyLibraryItemRequest model module.
   * @module com.ultracart.admin.v2.models/ApplyLibraryItemRequest
   * @version 3.1.17
   */

  /**
   * Constructs a new <code>ApplyLibraryItemRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/ApplyLibraryItemRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ApplyLibraryItemRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ApplyLibraryItemRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ApplyLibraryItemRequest} The populated <code>ApplyLibraryItemRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('email_uuid'))
        obj.email_uuid = ApiClient.convertToType(data['email_uuid'], 'String');
      if (data.hasOwnProperty('library_item_oid'))
        obj.library_item_oid = ApiClient.convertToType(data['library_item_oid'], 'Number');
      if (data.hasOwnProperty('storefront_oid'))
        obj.storefront_oid = ApiClient.convertToType(data['storefront_oid'], 'Number');
    }
    return obj;
  }

  /**
   * Normal emails are applied to an existing email object, so when requesting a library item to be applied to an email, supply the email uuid.  This is only for normal emails.  Transactional emails do not have a uuid.
   * @member {String} email_uuid
   */
  exports.prototype.email_uuid = undefined;

  /**
   * Library item oid that you wish to apply to the given StoreFront
   * @member {Number} library_item_oid
   */
  exports.prototype.library_item_oid = undefined;

  /**
   * StoreFront oid where content originates necessary for tracking down relative assets
   * @member {Number} storefront_oid
   */
  exports.prototype.storefront_oid = undefined;

  return exports;

}));
