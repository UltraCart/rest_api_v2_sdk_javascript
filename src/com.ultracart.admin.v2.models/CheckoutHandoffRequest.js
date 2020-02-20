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
    define(['ApiClient', 'com.ultracart.admin.v2.models/Cart'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Cart'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CheckoutHandoffRequest = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Cart);
  }
}(this, function(ApiClient, Cart) {
  'use strict';




  /**
   * The CheckoutHandoffRequest model module.
   * @module com.ultracart.admin.v2.models/CheckoutHandoffRequest
   * @version 2.4.76
   */

  /**
   * Constructs a new <code>CheckoutHandoffRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/CheckoutHandoffRequest
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>CheckoutHandoffRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CheckoutHandoffRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CheckoutHandoffRequest} The populated <code>CheckoutHandoffRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cart')) {
        obj['cart'] = Cart.constructFromObject(data['cart']);
      }
      if (data.hasOwnProperty('error_parameter_name')) {
        obj['error_parameter_name'] = ApiClient.convertToType(data['error_parameter_name'], 'String');
      }
      if (data.hasOwnProperty('error_return_url')) {
        obj['error_return_url'] = ApiClient.convertToType(data['error_return_url'], 'String');
      }
      if (data.hasOwnProperty('operation')) {
        obj['operation'] = ApiClient.convertToType(data['operation'], 'String');
      }
      if (data.hasOwnProperty('paypal_maximum_upsell_revenue')) {
        obj['paypal_maximum_upsell_revenue'] = ApiClient.convertToType(data['paypal_maximum_upsell_revenue'], 'Number');
      }
      if (data.hasOwnProperty('paypal_return_url')) {
        obj['paypal_return_url'] = ApiClient.convertToType(data['paypal_return_url'], 'String');
      }
      if (data.hasOwnProperty('secure_host_name')) {
        obj['secure_host_name'] = ApiClient.convertToType(data['secure_host_name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/Cart} cart
   */
  exports.prototype['cart'] = undefined;
  /**
   * If any error happen during the processing on the UltraCart side, the browser will be redirected to your error_return_url with the error passed in this parameter name.
   * @member {String} error_parameter_name
   */
  exports.prototype['error_parameter_name'] = undefined;
  /**
   * The URL to return the browser to if there are processing errors on the UltraCart side.
   * @member {String} error_return_url
   */
  exports.prototype['error_return_url'] = undefined;
  /**
   * The type of handoff operation to perform
   * @member {module:com.ultracart.admin.v2.models/CheckoutHandoffRequest.OperationEnum} operation
   */
  exports.prototype['operation'] = undefined;
  /**
   * The maximum amount of revenue that you think the customer could add during a custom upsell after sequence on your checkout.
   * @member {Number} paypal_maximum_upsell_revenue
   */
  exports.prototype['paypal_maximum_upsell_revenue'] = undefined;
  /**
   * The URl to return the customers browser to after they have completed the PayPal process.
   * @member {String} paypal_return_url
   */
  exports.prototype['paypal_return_url'] = undefined;
  /**
   * The desired secure host name to perform the handoff on.  This should match the desired StoreFront.
   * @member {String} secure_host_name
   */
  exports.prototype['secure_host_name'] = undefined;


  /**
   * Allowed values for the <code>operation</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OperationEnum = {
    /**
     * value: "checkout"
     * @const
     */
    "checkout": "checkout",
    /**
     * value: "payPal"
     * @const
     */
    "payPal": "payPal",
    /**
     * value: "payPalCredit"
     * @const
     */
    "payPalCredit": "payPalCredit",
    /**
     * value: "view"
     * @const
     */
    "view": "view",
    /**
     * value: "affirm"
     * @const
     */
    "affirm": "affirm"  };


  return exports;
}));


