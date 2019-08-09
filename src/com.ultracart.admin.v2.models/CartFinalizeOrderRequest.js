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
    define(['ApiClient', 'com.ultracart.admin.v2.models/Cart', 'com.ultracart.admin.v2.models/CartFinalizeOrderRequestOptions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Cart'), require('./CartFinalizeOrderRequestOptions'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CartFinalizeOrderRequest = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Cart, root.UltraCartRestApiV2.CartFinalizeOrderRequestOptions);
  }
}(this, function(ApiClient, Cart, CartFinalizeOrderRequestOptions) {
  'use strict';




  /**
   * The CartFinalizeOrderRequest model module.
   * @module com.ultracart.admin.v2.models/CartFinalizeOrderRequest
   * @version 2.4.17
   */

  /**
   * Constructs a new <code>CartFinalizeOrderRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/CartFinalizeOrderRequest
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CartFinalizeOrderRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CartFinalizeOrderRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CartFinalizeOrderRequest} The populated <code>CartFinalizeOrderRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cart')) {
        obj['cart'] = Cart.constructFromObject(data['cart']);
      }
      if (data.hasOwnProperty('options')) {
        obj['options'] = CartFinalizeOrderRequestOptions.constructFromObject(data['options']);
      }
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/Cart} cart
   */
  exports.prototype['cart'] = undefined;
  /**
   * @member {module:com.ultracart.admin.v2.models/CartFinalizeOrderRequestOptions} options
   */
  exports.prototype['options'] = undefined;



  return exports;
}));


