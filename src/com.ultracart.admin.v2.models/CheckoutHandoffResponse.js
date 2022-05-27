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
    root.UltraCartRestApiV2.CheckoutHandoffResponse = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Cart);
  }
}(this, function(ApiClient, Cart) {
  'use strict';

  /**
   * The CheckoutHandoffResponse model module.
   * @module com.ultracart.admin.v2.models/CheckoutHandoffResponse
   * @version 3.10.8
   */

  /**
   * Constructs a new <code>CheckoutHandoffResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/CheckoutHandoffResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CheckoutHandoffResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CheckoutHandoffResponse} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CheckoutHandoffResponse} The populated <code>CheckoutHandoffResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('cart'))
        obj.cart = Cart.constructFromObject(data['cart']);
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], ['String']);
      if (data.hasOwnProperty('redirect_to_url'))
        obj.redirect_to_url = ApiClient.convertToType(data['redirect_to_url'], 'String');
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/Cart} cart
   */
  exports.prototype.cart = undefined;

  /**
   * Errors that occurred which are preventing the handoff operation.  Display these to the customer.
   * @member {Array.<String>} errors
   */
  exports.prototype.errors = undefined;

  /**
   * The URL that you should redirect the customers browser to
   * @member {String} redirect_to_url
   */
  exports.prototype.redirect_to_url = undefined;

  return exports;

}));
