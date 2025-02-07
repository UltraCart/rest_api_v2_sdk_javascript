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
    root.UltraCartRestApiV2.ItemRelatedItem = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ItemRelatedItem model module.
   * @module com.ultracart.admin.v2.models/ItemRelatedItem
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>ItemRelatedItem</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemRelatedItem
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemRelatedItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemRelatedItem} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemRelatedItem} The populated <code>ItemRelatedItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('related_merchant_item_id'))
        obj.related_merchant_item_id = ApiClient.convertToType(data['related_merchant_item_id'], 'String');
      if (data.hasOwnProperty('related_merchant_item_oid'))
        obj.related_merchant_item_oid = ApiClient.convertToType(data['related_merchant_item_oid'], 'Number');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }

  /**
   * Related item id
   * @member {String} related_merchant_item_id
   */
  exports.prototype.related_merchant_item_id = undefined;

  /**
   * Related item object identifier
   * @member {Number} related_merchant_item_oid
   */
  exports.prototype.related_merchant_item_oid = undefined;

  /**
   * Relationship type
   * @member {module:com.ultracart.admin.v2.models/ItemRelatedItem.TypeEnum} type
   */
  exports.prototype.type = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "System"
     * @const
     */
    System: "System",

    /**
     * value: "UserDefined"
     * @const
     */
    UserDefined: "UserDefined"
  };

  return exports;

}));
