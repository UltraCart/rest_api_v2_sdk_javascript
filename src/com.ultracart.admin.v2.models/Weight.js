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
    root.UltraCartRestApiV2.Weight = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Weight model module.
   * @module com.ultracart.admin.v2.models/Weight
   * @version 3.10.53
   */

  /**
   * Constructs a new <code>Weight</code>.
   * @alias module:com.ultracart.admin.v2.models/Weight
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Weight</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/Weight} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/Weight} The populated <code>Weight</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('uom'))
        obj.uom = ApiClient.convertToType(data['uom'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
    }
    return obj;
  }

  /**
   * Unit of measure
   * @member {module:com.ultracart.admin.v2.models/Weight.UomEnum} uom
   */
  exports.prototype.uom = undefined;

  /**
   * Weight
   * @member {Number} value
   */
  exports.prototype.value = undefined;


  /**
   * Allowed values for the <code>uom</code> property.
   * @enum {String}
   * @readonly
   */
  exports.UomEnum = {
    /**
     * value: "KG"
     * @const
     */
    KG: "KG",

    /**
     * value: "LB"
     * @const
     */
    LB: "LB",

    /**
     * value: "OZ"
     * @const
     */
    OZ: "OZ"
  };

  return exports;

}));
