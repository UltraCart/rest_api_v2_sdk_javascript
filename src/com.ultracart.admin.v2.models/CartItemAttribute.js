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
    root.UltraCartRestApiV2.CartItemAttribute = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CartItemAttribute model module.
   * @module com.ultracart.admin.v2.models/CartItemAttribute
   * @version 2.4.91
   */

  /**
   * Constructs a new <code>CartItemAttribute</code>.
   * @alias module:com.ultracart.admin.v2.models/CartItemAttribute
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>CartItemAttribute</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CartItemAttribute} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CartItemAttribute} The populated <code>CartItemAttribute</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }

  /**
   * Name of the attribute
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Type of attribute
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Value of the attribute
   * @member {String} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


