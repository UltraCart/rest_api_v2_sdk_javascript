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
    root.UltraCartRestApiV2.CartAffirmCheckoutResponse = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CartAffirmCheckoutResponse model module.
   * @module com.ultracart.admin.v2.models/CartAffirmCheckoutResponse
   * @version 3.1.26
   */

  /**
   * Constructs a new <code>CartAffirmCheckoutResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/CartAffirmCheckoutResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CartAffirmCheckoutResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CartAffirmCheckoutResponse} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CartAffirmCheckoutResponse} The populated <code>CartAffirmCheckoutResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('checkout_json'))
        obj.checkout_json = ApiClient.convertToType(data['checkout_json'], 'String');
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], ['String']);
    }
    return obj;
  }

  /**
   * Checkout JSON object
   * @member {String} checkout_json
   */
  exports.prototype.checkout_json = undefined;

  /**
   * Errors that should be displayed to the customer
   * @member {Array.<String>} errors
   */
  exports.prototype.errors = undefined;

  return exports;

}));
