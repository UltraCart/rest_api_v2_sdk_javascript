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
    root.UltraCartRestApiV2.ItemOptionValueAdditionalItem = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ItemOptionValueAdditionalItem model module.
   * @module com.ultracart.admin.v2.models/ItemOptionValueAdditionalItem
   * @version 3.10.65
   */

  /**
   * Constructs a new <code>ItemOptionValueAdditionalItem</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemOptionValueAdditionalItem
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemOptionValueAdditionalItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemOptionValueAdditionalItem} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemOptionValueAdditionalItem} The populated <code>ItemOptionValueAdditionalItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('additional_merchant_item_id'))
        obj.additional_merchant_item_id = ApiClient.convertToType(data['additional_merchant_item_id'], 'String');
      if (data.hasOwnProperty('additional_merchant_item_oid'))
        obj.additional_merchant_item_oid = ApiClient.convertToType(data['additional_merchant_item_oid'], 'Number');
    }
    return obj;
  }

  /**
   * Additional item id
   * @member {String} additional_merchant_item_id
   */
  exports.prototype.additional_merchant_item_id = undefined;

  /**
   * Additional item object identifier
   * @member {Number} additional_merchant_item_oid
   */
  exports.prototype.additional_merchant_item_oid = undefined;

  return exports;

}));
