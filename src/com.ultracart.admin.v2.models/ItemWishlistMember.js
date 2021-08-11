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
    root.UltraCartRestApiV2.ItemWishlistMember = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ItemWishlistMember model module.
   * @module com.ultracart.admin.v2.models/ItemWishlistMember
   * @version 3.5.0
   */

  /**
   * Constructs a new <code>ItemWishlistMember</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemWishlistMember
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemWishlistMember</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemWishlistMember} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemWishlistMember} The populated <code>ItemWishlistMember</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('wishlist_member_instance_description'))
        obj.wishlist_member_instance_description = ApiClient.convertToType(data['wishlist_member_instance_description'], 'String');
      if (data.hasOwnProperty('wishlist_member_instance_oid'))
        obj.wishlist_member_instance_oid = ApiClient.convertToType(data['wishlist_member_instance_oid'], 'Number');
      if (data.hasOwnProperty('wishlist_member_sku'))
        obj.wishlist_member_sku = ApiClient.convertToType(data['wishlist_member_sku'], 'String');
    }
    return obj;
  }

  /**
   * WishList Member instance description
   * @member {String} wishlist_member_instance_description
   */
  exports.prototype.wishlist_member_instance_description = undefined;

  /**
   * WishList Member instance object identifier
   * @member {Number} wishlist_member_instance_oid
   */
  exports.prototype.wishlist_member_instance_oid = undefined;

  /**
   * WishList Member SKU
   * @member {String} wishlist_member_sku
   */
  exports.prototype.wishlist_member_sku = undefined;

  return exports;

}));
