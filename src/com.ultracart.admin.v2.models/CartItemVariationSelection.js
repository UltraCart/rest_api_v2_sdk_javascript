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
    root.UltraCartRestApiV2.CartItemVariationSelection = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CartItemVariationSelection model module.
   * @module com.ultracart.admin.v2.models/CartItemVariationSelection
   * @version 2.4.91
   */

  /**
   * Constructs a new <code>CartItemVariationSelection</code>.
   * @alias module:com.ultracart.admin.v2.models/CartItemVariationSelection
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CartItemVariationSelection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CartItemVariationSelection} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CartItemVariationSelection} The populated <code>CartItemVariationSelection</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('variation_name')) {
        obj['variation_name'] = ApiClient.convertToType(data['variation_name'], 'String');
      }
      if (data.hasOwnProperty('variation_value')) {
        obj['variation_value'] = ApiClient.convertToType(data['variation_value'], 'String');
      }
    }
    return obj;
  }

  /**
   * Variation name
   * @member {String} variation_name
   */
  exports.prototype['variation_name'] = undefined;
  /**
   * Variation value
   * @member {String} variation_value
   */
  exports.prototype['variation_value'] = undefined;



  return exports;
}));


