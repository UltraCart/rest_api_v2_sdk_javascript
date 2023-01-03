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
    define(['ApiClient', 'com.ultracart.admin.v2.models/CartPaymentAffirm', 'com.ultracart.admin.v2.models/CartPaymentAmazon', 'com.ultracart.admin.v2.models/CartPaymentCheck', 'com.ultracart.admin.v2.models/CartPaymentCreditCard', 'com.ultracart.admin.v2.models/CartPaymentPurchaseOrder'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CartPaymentAffirm'), require('./CartPaymentAmazon'), require('./CartPaymentCheck'), require('./CartPaymentCreditCard'), require('./CartPaymentPurchaseOrder'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CartPayment = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.CartPaymentAffirm, root.UltraCartRestApiV2.CartPaymentAmazon, root.UltraCartRestApiV2.CartPaymentCheck, root.UltraCartRestApiV2.CartPaymentCreditCard, root.UltraCartRestApiV2.CartPaymentPurchaseOrder);
  }
}(this, function(ApiClient, CartPaymentAffirm, CartPaymentAmazon, CartPaymentCheck, CartPaymentCreditCard, CartPaymentPurchaseOrder) {
  'use strict';

  /**
   * The CartPayment model module.
   * @module com.ultracart.admin.v2.models/CartPayment
   * @version 3.10.88
   */

  /**
   * Constructs a new <code>CartPayment</code>.
   * @alias module:com.ultracart.admin.v2.models/CartPayment
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CartPayment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CartPayment} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CartPayment} The populated <code>CartPayment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('affirm'))
        obj.affirm = CartPaymentAffirm.constructFromObject(data['affirm']);
      if (data.hasOwnProperty('amazon'))
        obj.amazon = CartPaymentAmazon.constructFromObject(data['amazon']);
      if (data.hasOwnProperty('check'))
        obj.check = CartPaymentCheck.constructFromObject(data['check']);
      if (data.hasOwnProperty('credit_card'))
        obj.credit_card = CartPaymentCreditCard.constructFromObject(data['credit_card']);
      if (data.hasOwnProperty('payment_method'))
        obj.payment_method = ApiClient.convertToType(data['payment_method'], 'String');
      if (data.hasOwnProperty('purchase_order'))
        obj.purchase_order = CartPaymentPurchaseOrder.constructFromObject(data['purchase_order']);
      if (data.hasOwnProperty('rtg_code'))
        obj.rtg_code = ApiClient.convertToType(data['rtg_code'], 'String');
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/CartPaymentAffirm} affirm
   */
  exports.prototype.affirm = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CartPaymentAmazon} amazon
   */
  exports.prototype.amazon = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CartPaymentCheck} check
   */
  exports.prototype.check = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CartPaymentCreditCard} credit_card
   */
  exports.prototype.credit_card = undefined;

  /**
   * Payment method
   * @member {String} payment_method
   */
  exports.prototype.payment_method = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CartPaymentPurchaseOrder} purchase_order
   */
  exports.prototype.purchase_order = undefined;

  /**
   * Rotating transaction gateway code
   * @member {String} rtg_code
   */
  exports.prototype.rtg_code = undefined;

  return exports;

}));
