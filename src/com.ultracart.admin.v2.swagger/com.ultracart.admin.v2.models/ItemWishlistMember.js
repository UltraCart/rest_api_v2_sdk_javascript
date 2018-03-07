/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['com.ultracart.admin.v2.swagger/ApiClient'], factory);
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
   * @module com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/ItemWishlistMember
   * @version 2.0.7
   */

  /**
   * Constructs a new <code>ItemWishlistMember</code>.
   * @alias module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/ItemWishlistMember
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ItemWishlistMember</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/ItemWishlistMember} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/ItemWishlistMember} The populated <code>ItemWishlistMember</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('wishlist_member_instance_description')) {
        obj['wishlist_member_instance_description'] = ApiClient.convertToType(data['wishlist_member_instance_description'], 'String');
      }
      if (data.hasOwnProperty('wishlist_member_instance_oid')) {
        obj['wishlist_member_instance_oid'] = ApiClient.convertToType(data['wishlist_member_instance_oid'], 'Integer');
      }
      if (data.hasOwnProperty('wishlist_member_sku')) {
        obj['wishlist_member_sku'] = ApiClient.convertToType(data['wishlist_member_sku'], 'String');
      }
    }
    return obj;
  }

  /**
   * WishList Member instance description
   * @member {String} wishlist_member_instance_description
   */
  exports.prototype['wishlist_member_instance_description'] = undefined;
  /**
   * WishList Member instance object identifier
   * @member {Integer} wishlist_member_instance_oid
   */
  exports.prototype['wishlist_member_instance_oid'] = undefined;
  /**
   * WishList Member SKU
   * @member {String} wishlist_member_sku
   */
  exports.prototype['wishlist_member_sku'] = undefined;



  return exports;
}));


