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
    root.UltraCartRestApiV2.ItemTag = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ItemTag model module.
   * @module com.ultracart.admin.v2.models/ItemTag
   * @version 3.10.62
   */

  /**
   * Constructs a new <code>ItemTag</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemTag
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemTag</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemTag} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemTag} The populated <code>ItemTag</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('tagType'))
        obj.tagType = ApiClient.convertToType(data['tagType'], 'String');
      if (data.hasOwnProperty('tagValue'))
        obj.tagValue = ApiClient.convertToType(data['tagValue'], 'String');
    }
    return obj;
  }

  /**
   * tag_tpe
   * @member {module:com.ultracart.admin.v2.models/ItemTag.TagTypeEnum} tagType
   */
  exports.prototype.tagType = undefined;

  /**
   * tag_value
   * @member {String} tagValue
   */
  exports.prototype.tagValue = undefined;


  /**
   * Allowed values for the <code>tagType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TagTypeEnum = {
    /**
     * value: "item"
     * @const
     */
    item: "item",

    /**
     * value: "order"
     * @const
     */
    order: "order",

    /**
     * value: "customer"
     * @const
     */
    customer: "customer"
  };

  return exports;

}));
