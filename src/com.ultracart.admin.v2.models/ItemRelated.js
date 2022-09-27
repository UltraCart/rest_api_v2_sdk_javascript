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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ItemRelatedItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ItemRelatedItem'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ItemRelated = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ItemRelatedItem);
  }
}(this, function(ApiClient, ItemRelatedItem) {
  'use strict';

  /**
   * The ItemRelated model module.
   * @module com.ultracart.admin.v2.models/ItemRelated
   * @version 3.10.50
   */

  /**
   * Constructs a new <code>ItemRelated</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemRelated
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemRelated</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemRelated} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemRelated} The populated <code>ItemRelated</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('no_system_calculated_related_items'))
        obj.no_system_calculated_related_items = ApiClient.convertToType(data['no_system_calculated_related_items'], 'Boolean');
      if (data.hasOwnProperty('not_relatable'))
        obj.not_relatable = ApiClient.convertToType(data['not_relatable'], 'Boolean');
      if (data.hasOwnProperty('related_items'))
        obj.related_items = ApiClient.convertToType(data['related_items'], [ItemRelatedItem]);
    }
    return obj;
  }

  /**
   * True to suppress system calculated relationships
   * @member {Boolean} no_system_calculated_related_items
   */
  exports.prototype.no_system_calculated_related_items = undefined;

  /**
   * Not relatable
   * @member {Boolean} not_relatable
   */
  exports.prototype.not_relatable = undefined;

  /**
   * Related items
   * @member {Array.<module:com.ultracart.admin.v2.models/ItemRelatedItem>} related_items
   */
  exports.prototype.related_items = undefined;

  return exports;

}));
