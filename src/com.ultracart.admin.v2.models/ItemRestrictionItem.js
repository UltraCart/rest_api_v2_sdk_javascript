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
    root.UltraCartRestApiV2.ItemRestrictionItem = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ItemRestrictionItem model module.
   * @module com.ultracart.admin.v2.models/ItemRestrictionItem
   * @version 2.4.34
   */

  /**
   * Constructs a new <code>ItemRestrictionItem</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemRestrictionItem
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ItemRestrictionItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemRestrictionItem} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemRestrictionItem} The populated <code>ItemRestrictionItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('restrict_merchant_item_id')) {
        obj['restrict_merchant_item_id'] = ApiClient.convertToType(data['restrict_merchant_item_id'], 'String');
      }
      if (data.hasOwnProperty('restrict_merchant_item_oid')) {
        obj['restrict_merchant_item_oid'] = ApiClient.convertToType(data['restrict_merchant_item_oid'], 'Number');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * Restrict item id
   * @member {String} restrict_merchant_item_id
   */
  exports.prototype['restrict_merchant_item_id'] = undefined;
  /**
   * Restrict item object identifier
   * @member {Number} restrict_merchant_item_oid
   */
  exports.prototype['restrict_merchant_item_oid'] = undefined;
  /**
   * Restriction type
   * @member {module:com.ultracart.admin.v2.models/ItemRestrictionItem.TypeEnum} type
   */
  exports.prototype['type'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "can not be purchased with"
     * @const
     */
    "can not be purchased with": "can not be purchased with",
    /**
     * value: "can only be purchased with"
     * @const
     */
    "can only be purchased with": "can only be purchased with",
    /**
     * value: "must be purchased with"
     * @const
     */
    "must be purchased with": "must be purchased with"  };


  return exports;
}));


