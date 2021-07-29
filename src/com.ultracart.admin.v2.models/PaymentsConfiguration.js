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
    define(['ApiClient', 'com.ultracart.admin.v2.models/PaymentsConfigurationAffirm', 'com.ultracart.admin.v2.models/PaymentsConfigurationAmazon', 'com.ultracart.admin.v2.models/PaymentsConfigurationCOD', 'com.ultracart.admin.v2.models/PaymentsConfigurationCash', 'com.ultracart.admin.v2.models/PaymentsConfigurationCheck', 'com.ultracart.admin.v2.models/PaymentsConfigurationCreditCard', 'com.ultracart.admin.v2.models/PaymentsConfigurationLoanHero', 'com.ultracart.admin.v2.models/PaymentsConfigurationPayPal', 'com.ultracart.admin.v2.models/PaymentsConfigurationPurchaseOrder', 'com.ultracart.admin.v2.models/PaymentsConfigurationQuoteRequest', 'com.ultracart.admin.v2.models/PaymentsConfigurationSezzle', 'com.ultracart.admin.v2.models/PaymentsConfigurationWePay', 'com.ultracart.admin.v2.models/PaymentsConfigurationWireTransfer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentsConfigurationAffirm'), require('./PaymentsConfigurationAmazon'), require('./PaymentsConfigurationCOD'), require('./PaymentsConfigurationCash'), require('./PaymentsConfigurationCheck'), require('./PaymentsConfigurationCreditCard'), require('./PaymentsConfigurationLoanHero'), require('./PaymentsConfigurationPayPal'), require('./PaymentsConfigurationPurchaseOrder'), require('./PaymentsConfigurationQuoteRequest'), require('./PaymentsConfigurationSezzle'), require('./PaymentsConfigurationWePay'), require('./PaymentsConfigurationWireTransfer'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.PaymentsConfiguration = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.PaymentsConfigurationAffirm, root.UltraCartRestApiV2.PaymentsConfigurationAmazon, root.UltraCartRestApiV2.PaymentsConfigurationCOD, root.UltraCartRestApiV2.PaymentsConfigurationCash, root.UltraCartRestApiV2.PaymentsConfigurationCheck, root.UltraCartRestApiV2.PaymentsConfigurationCreditCard, root.UltraCartRestApiV2.PaymentsConfigurationLoanHero, root.UltraCartRestApiV2.PaymentsConfigurationPayPal, root.UltraCartRestApiV2.PaymentsConfigurationPurchaseOrder, root.UltraCartRestApiV2.PaymentsConfigurationQuoteRequest, root.UltraCartRestApiV2.PaymentsConfigurationSezzle, root.UltraCartRestApiV2.PaymentsConfigurationWePay, root.UltraCartRestApiV2.PaymentsConfigurationWireTransfer);
  }
}(this, function(ApiClient, PaymentsConfigurationAffirm, PaymentsConfigurationAmazon, PaymentsConfigurationCOD, PaymentsConfigurationCash, PaymentsConfigurationCheck, PaymentsConfigurationCreditCard, PaymentsConfigurationLoanHero, PaymentsConfigurationPayPal, PaymentsConfigurationPurchaseOrder, PaymentsConfigurationQuoteRequest, PaymentsConfigurationSezzle, PaymentsConfigurationWePay, PaymentsConfigurationWireTransfer) {
  'use strict';

  /**
   * The PaymentsConfiguration model module.
   * @module com.ultracart.admin.v2.models/PaymentsConfiguration
   * @version 3.4.2
   */

  /**
   * Constructs a new <code>PaymentsConfiguration</code>.
   * @alias module:com.ultracart.admin.v2.models/PaymentsConfiguration
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PaymentsConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/PaymentsConfiguration} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/PaymentsConfiguration} The populated <code>PaymentsConfiguration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('affirm'))
        obj.affirm = PaymentsConfigurationAffirm.constructFromObject(data['affirm']);
      if (data.hasOwnProperty('amazon'))
        obj.amazon = PaymentsConfigurationAmazon.constructFromObject(data['amazon']);
      if (data.hasOwnProperty('cash'))
        obj.cash = PaymentsConfigurationCash.constructFromObject(data['cash']);
      if (data.hasOwnProperty('check'))
        obj.check = PaymentsConfigurationCheck.constructFromObject(data['check']);
      if (data.hasOwnProperty('cod'))
        obj.cod = PaymentsConfigurationCOD.constructFromObject(data['cod']);
      if (data.hasOwnProperty('creditCard'))
        obj.creditCard = PaymentsConfigurationCreditCard.constructFromObject(data['creditCard']);
      if (data.hasOwnProperty('loanHero'))
        obj.loanHero = PaymentsConfigurationLoanHero.constructFromObject(data['loanHero']);
      if (data.hasOwnProperty('payPal'))
        obj.payPal = PaymentsConfigurationPayPal.constructFromObject(data['payPal']);
      if (data.hasOwnProperty('purchaseOrder'))
        obj.purchaseOrder = PaymentsConfigurationPurchaseOrder.constructFromObject(data['purchaseOrder']);
      if (data.hasOwnProperty('quoteRequest'))
        obj.quoteRequest = PaymentsConfigurationQuoteRequest.constructFromObject(data['quoteRequest']);
      if (data.hasOwnProperty('sezzle'))
        obj.sezzle = PaymentsConfigurationSezzle.constructFromObject(data['sezzle']);
      if (data.hasOwnProperty('showAccountingCode'))
        obj.showAccountingCode = ApiClient.convertToType(data['showAccountingCode'], 'Boolean');
      if (data.hasOwnProperty('switchToSubTab'))
        obj.switchToSubTab = ApiClient.convertToType(data['switchToSubTab'], 'String');
      if (data.hasOwnProperty('switchToTab'))
        obj.switchToTab = ApiClient.convertToType(data['switchToTab'], 'String');
      if (data.hasOwnProperty('wePay'))
        obj.wePay = PaymentsConfigurationWePay.constructFromObject(data['wePay']);
      if (data.hasOwnProperty('wireTransfer'))
        obj.wireTransfer = PaymentsConfigurationWireTransfer.constructFromObject(data['wireTransfer']);
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationAffirm} affirm
   */
  exports.prototype.affirm = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationAmazon} amazon
   */
  exports.prototype.amazon = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationCash} cash
   */
  exports.prototype.cash = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationCheck} check
   */
  exports.prototype.check = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationCOD} cod
   */
  exports.prototype.cod = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationCreditCard} creditCard
   */
  exports.prototype.creditCard = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationLoanHero} loanHero
   */
  exports.prototype.loanHero = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationPayPal} payPal
   */
  exports.prototype.payPal = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationPurchaseOrder} purchaseOrder
   */
  exports.prototype.purchaseOrder = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationQuoteRequest} quoteRequest
   */
  exports.prototype.quoteRequest = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationSezzle} sezzle
   */
  exports.prototype.sezzle = undefined;

  /**
   * @member {Boolean} showAccountingCode
   */
  exports.prototype.showAccountingCode = undefined;

  /**
   * @member {String} switchToSubTab
   */
  exports.prototype.switchToSubTab = undefined;

  /**
   * @member {String} switchToTab
   */
  exports.prototype.switchToTab = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationWePay} wePay
   */
  exports.prototype.wePay = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationWireTransfer} wireTransfer
   */
  exports.prototype.wireTransfer = undefined;

  return exports;

}));
