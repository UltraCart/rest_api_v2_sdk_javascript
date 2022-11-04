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
    root.UltraCartRestApiV2.LibraryItemPurchasedMeta = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LibraryItemPurchasedMeta model module.
   * @module com.ultracart.admin.v2.models/LibraryItemPurchasedMeta
   * @version 3.10.61
   */

  /**
   * Constructs a new <code>LibraryItemPurchasedMeta</code>.
   * @alias module:com.ultracart.admin.v2.models/LibraryItemPurchasedMeta
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>LibraryItemPurchasedMeta</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/LibraryItemPurchasedMeta} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/LibraryItemPurchasedMeta} The populated <code>LibraryItemPurchasedMeta</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('most_recent_version'))
        obj.most_recent_version = ApiClient.convertToType(data['most_recent_version'], 'Number');
      if (data.hasOwnProperty('my_purchased_version'))
        obj.my_purchased_version = ApiClient.convertToType(data['my_purchased_version'], 'Number');
      if (data.hasOwnProperty('upgrade_available'))
        obj.upgrade_available = ApiClient.convertToType(data['upgrade_available'], 'Boolean');
    }
    return obj;
  }

  /**
   * The most recent version of the item purchased
   * @member {Number} most_recent_version
   */
  exports.prototype.most_recent_version = undefined;

  /**
   * If this is a public item and the merchant has already purchased it, this is their version.  If not yet purchased, this will be zero.  This value will only be populated during a searchPublicItems() call.
   * @member {Number} my_purchased_version
   */
  exports.prototype.my_purchased_version = undefined;

  /**
   * True if the most recent version of this purchase it greater than what was purchased
   * @member {Boolean} upgrade_available
   */
  exports.prototype.upgrade_available = undefined;

  return exports;

}));
