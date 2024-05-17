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
    root.UltraCartRestApiV2.CartProfileRegisterResponse = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Cart);
  }
}(this, function(ApiClient, Cart) {
  'use strict';

  /**
   * The CartProfileRegisterResponse model module.
   * @module com.ultracart.admin.v2.models/CartProfileRegisterResponse
   * @version 3.10.205
   */

  /**
   * Constructs a new <code>CartProfileRegisterResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/CartProfileRegisterResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CartProfileRegisterResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CartProfileRegisterResponse} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CartProfileRegisterResponse} The populated <code>CartProfileRegisterResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('cart'))
        obj.cart = Cart.constructFromObject(data['cart']);
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], ['String']);
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/Cart} cart
   */
  exports.prototype.cart = undefined;

  /**
   * Errors to display to the customer if they failed any of the validations checked
   * @member {Array.<String>} errors
   */
  exports.prototype.errors = undefined;

  return exports;

}));
