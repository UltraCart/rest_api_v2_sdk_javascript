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
    define(['ApiClient', 'com.ultracart.admin.v2.models/OrderPaymentCreditCardDualVaultedProperty'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OrderPaymentCreditCardDualVaultedProperty'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.OrderPaymentCreditCardDualVaulted = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.OrderPaymentCreditCardDualVaultedProperty);
  }
}(this, function(ApiClient, OrderPaymentCreditCardDualVaultedProperty) {
  'use strict';

  /**
   * The OrderPaymentCreditCardDualVaulted model module.
   * @module com.ultracart.admin.v2.models/OrderPaymentCreditCardDualVaulted
   * @version 3.10.192
   */

  /**
   * Constructs a new <code>OrderPaymentCreditCardDualVaulted</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderPaymentCreditCardDualVaulted
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderPaymentCreditCardDualVaulted</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderPaymentCreditCardDualVaulted} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderPaymentCreditCardDualVaulted} The populated <code>OrderPaymentCreditCardDualVaulted</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('gateway_name'))
        obj.gateway_name = ApiClient.convertToType(data['gateway_name'], 'String');
      if (data.hasOwnProperty('properties'))
        obj.properties = ApiClient.convertToType(data['properties'], [OrderPaymentCreditCardDualVaultedProperty]);
      if (data.hasOwnProperty('rotating_transaction_gateway_code'))
        obj.rotating_transaction_gateway_code = ApiClient.convertToType(data['rotating_transaction_gateway_code'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} gateway_name
   */
  exports.prototype.gateway_name = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/OrderPaymentCreditCardDualVaultedProperty>} properties
   */
  exports.prototype.properties = undefined;

  /**
   * @member {String} rotating_transaction_gateway_code
   */
  exports.prototype.rotating_transaction_gateway_code = undefined;

  return exports;

}));
