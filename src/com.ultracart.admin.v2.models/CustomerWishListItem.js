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
    root.UltraCartRestApiV2.CustomerWishListItem = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CustomerWishListItem model module.
   * @module com.ultracart.admin.v2.models/CustomerWishListItem
   * @version 3.10.207
   */

  /**
   * Constructs a new <code>CustomerWishListItem</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerWishListItem
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CustomerWishListItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CustomerWishListItem} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CustomerWishListItem} The populated <code>CustomerWishListItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('add_dts'))
        obj.add_dts = ApiClient.convertToType(data['add_dts'], 'String');
      if (data.hasOwnProperty('comments'))
        obj.comments = ApiClient.convertToType(data['comments'], 'String');
      if (data.hasOwnProperty('customer_profile_oid'))
        obj.customer_profile_oid = ApiClient.convertToType(data['customer_profile_oid'], 'Number');
      if (data.hasOwnProperty('customer_wishlist_item_oid'))
        obj.customer_wishlist_item_oid = ApiClient.convertToType(data['customer_wishlist_item_oid'], 'Number');
      if (data.hasOwnProperty('merchant_item_oid'))
        obj.merchant_item_oid = ApiClient.convertToType(data['merchant_item_oid'], 'Number');
      if (data.hasOwnProperty('position'))
        obj.position = ApiClient.convertToType(data['position'], 'Number');
      if (data.hasOwnProperty('priority'))
        obj.priority = ApiClient.convertToType(data['priority'], 'Number');
    }
    return obj;
  }

  /**
   * Add date
   * @member {String} add_dts
   */
  exports.prototype.add_dts = undefined;

  /**
   * Comments
   * @member {String} comments
   */
  exports.prototype.comments = undefined;

  /**
   * Customer profile object identifier
   * @member {Number} customer_profile_oid
   */
  exports.prototype.customer_profile_oid = undefined;

  /**
   * Customer wishlist item object identifier
   * @member {Number} customer_wishlist_item_oid
   */
  exports.prototype.customer_wishlist_item_oid = undefined;

  /**
   * Merchant item object identifier
   * @member {Number} merchant_item_oid
   */
  exports.prototype.merchant_item_oid = undefined;

  /**
   * Position in wishlist
   * @member {Number} position
   */
  exports.prototype.position = undefined;

  /**
   * Priority of wishlist item, 3 being low priority and 5 is high priority.
   * @member {Number} priority
   */
  exports.prototype.priority = undefined;

  return exports;

}));
