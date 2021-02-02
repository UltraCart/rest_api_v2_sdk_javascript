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
    define(['ApiClient', 'com.ultracart.admin.v2.models/Cart'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Cart'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CartValidationRequest = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Cart);
  }
}(this, function(ApiClient, Cart) {
  'use strict';

  /**
   * The CartValidationRequest model module.
   * @module com.ultracart.admin.v2.models/CartValidationRequest
   * @version 3.1.0
   */

  /**
   * Constructs a new <code>CartValidationRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/CartValidationRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CartValidationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CartValidationRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CartValidationRequest} The populated <code>CartValidationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('cart'))
        obj.cart = Cart.constructFromObject(data['cart']);
      if (data.hasOwnProperty('checks'))
        obj.checks = ApiClient.convertToType(data['checks'], ['String']);
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/Cart} cart
   */
  exports.prototype.cart = undefined;

  /**
   * Checks to perform
   * @member {Array.<String>} checks
   */
  exports.prototype.checks = undefined;

  return exports;

}));
