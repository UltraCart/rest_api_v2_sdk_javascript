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
    define(['ApiClient', 'com.ultracart.admin.v2.models/PaymentsConfigurationAffirm', 'com.ultracart.admin.v2.models/PaymentsConfigurationAmazon', 'com.ultracart.admin.v2.models/PaymentsConfigurationCOD', 'com.ultracart.admin.v2.models/PaymentsConfigurationCash', 'com.ultracart.admin.v2.models/PaymentsConfigurationCheck', 'com.ultracart.admin.v2.models/PaymentsConfigurationCreditCard', 'com.ultracart.admin.v2.models/PaymentsConfigurationEcheck', 'com.ultracart.admin.v2.models/PaymentsConfigurationInsurance', 'com.ultracart.admin.v2.models/PaymentsConfigurationLoanHero', 'com.ultracart.admin.v2.models/PaymentsConfigurationMoneyOrder', 'com.ultracart.admin.v2.models/PaymentsConfigurationPayPal', 'com.ultracart.admin.v2.models/PaymentsConfigurationPurchaseOrder', 'com.ultracart.admin.v2.models/PaymentsConfigurationQuoteRequest', 'com.ultracart.admin.v2.models/PaymentsConfigurationSezzle', 'com.ultracart.admin.v2.models/PaymentsConfigurationWePay', 'com.ultracart.admin.v2.models/PaymentsConfigurationWireTransfer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentsConfigurationAffirm'), require('./PaymentsConfigurationAmazon'), require('./PaymentsConfigurationCOD'), require('./PaymentsConfigurationCash'), require('./PaymentsConfigurationCheck'), require('./PaymentsConfigurationCreditCard'), require('./PaymentsConfigurationEcheck'), require('./PaymentsConfigurationInsurance'), require('./PaymentsConfigurationLoanHero'), require('./PaymentsConfigurationMoneyOrder'), require('./PaymentsConfigurationPayPal'), require('./PaymentsConfigurationPurchaseOrder'), require('./PaymentsConfigurationQuoteRequest'), require('./PaymentsConfigurationSezzle'), require('./PaymentsConfigurationWePay'), require('./PaymentsConfigurationWireTransfer'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.PaymentsConfiguration = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.PaymentsConfigurationAffirm, root.UltraCartRestApiV2.PaymentsConfigurationAmazon, root.UltraCartRestApiV2.PaymentsConfigurationCOD, root.UltraCartRestApiV2.PaymentsConfigurationCash, root.UltraCartRestApiV2.PaymentsConfigurationCheck, root.UltraCartRestApiV2.PaymentsConfigurationCreditCard, root.UltraCartRestApiV2.PaymentsConfigurationEcheck, root.UltraCartRestApiV2.PaymentsConfigurationInsurance, root.UltraCartRestApiV2.PaymentsConfigurationLoanHero, root.UltraCartRestApiV2.PaymentsConfigurationMoneyOrder, root.UltraCartRestApiV2.PaymentsConfigurationPayPal, root.UltraCartRestApiV2.PaymentsConfigurationPurchaseOrder, root.UltraCartRestApiV2.PaymentsConfigurationQuoteRequest, root.UltraCartRestApiV2.PaymentsConfigurationSezzle, root.UltraCartRestApiV2.PaymentsConfigurationWePay, root.UltraCartRestApiV2.PaymentsConfigurationWireTransfer);
  }
}(this, function(ApiClient, PaymentsConfigurationAffirm, PaymentsConfigurationAmazon, PaymentsConfigurationCOD, PaymentsConfigurationCash, PaymentsConfigurationCheck, PaymentsConfigurationCreditCard, PaymentsConfigurationEcheck, PaymentsConfigurationInsurance, PaymentsConfigurationLoanHero, PaymentsConfigurationMoneyOrder, PaymentsConfigurationPayPal, PaymentsConfigurationPurchaseOrder, PaymentsConfigurationQuoteRequest, PaymentsConfigurationSezzle, PaymentsConfigurationWePay, PaymentsConfigurationWireTransfer) {
  'use strict';

  /**
   * The PaymentsConfiguration model module.
   * @module com.ultracart.admin.v2.models/PaymentsConfiguration
   * @version 3.10.10
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
      if (data.hasOwnProperty('credit_card'))
        obj.credit_card = PaymentsConfigurationCreditCard.constructFromObject(data['credit_card']);
      if (data.hasOwnProperty('echeck'))
        obj.echeck = PaymentsConfigurationEcheck.constructFromObject(data['echeck']);
      if (data.hasOwnProperty('insurance'))
        obj.insurance = PaymentsConfigurationInsurance.constructFromObject(data['insurance']);
      if (data.hasOwnProperty('loan_hero'))
        obj.loan_hero = PaymentsConfigurationLoanHero.constructFromObject(data['loan_hero']);
      if (data.hasOwnProperty('money_order'))
        obj.money_order = PaymentsConfigurationMoneyOrder.constructFromObject(data['money_order']);
      if (data.hasOwnProperty('paypal'))
        obj.paypal = PaymentsConfigurationPayPal.constructFromObject(data['paypal']);
      if (data.hasOwnProperty('purchase_order'))
        obj.purchase_order = PaymentsConfigurationPurchaseOrder.constructFromObject(data['purchase_order']);
      if (data.hasOwnProperty('quote_request'))
        obj.quote_request = PaymentsConfigurationQuoteRequest.constructFromObject(data['quote_request']);
      if (data.hasOwnProperty('sezzle'))
        obj.sezzle = PaymentsConfigurationSezzle.constructFromObject(data['sezzle']);
      if (data.hasOwnProperty('show_accounting_code'))
        obj.show_accounting_code = ApiClient.convertToType(data['show_accounting_code'], 'Boolean');
      if (data.hasOwnProperty('ultracart_payments_wepay'))
        obj.ultracart_payments_wepay = PaymentsConfigurationWePay.constructFromObject(data['ultracart_payments_wepay']);
      if (data.hasOwnProperty('wire_transfer'))
        obj.wire_transfer = PaymentsConfigurationWireTransfer.constructFromObject(data['wire_transfer']);
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
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationCreditCard} credit_card
   */
  exports.prototype.credit_card = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationEcheck} echeck
   */
  exports.prototype.echeck = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationInsurance} insurance
   */
  exports.prototype.insurance = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationLoanHero} loan_hero
   */
  exports.prototype.loan_hero = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationMoneyOrder} money_order
   */
  exports.prototype.money_order = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationPayPal} paypal
   */
  exports.prototype.paypal = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationPurchaseOrder} purchase_order
   */
  exports.prototype.purchase_order = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationQuoteRequest} quote_request
   */
  exports.prototype.quote_request = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationSezzle} sezzle
   */
  exports.prototype.sezzle = undefined;

  /**
   * Internal flag used to determine if accounting codes should be shown on the screen or not.  This flag is true if the merchant has a Quickbooks integration configured.
   * @member {Boolean} show_accounting_code
   */
  exports.prototype.show_accounting_code = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationWePay} ultracart_payments_wepay
   */
  exports.prototype.ultracart_payments_wepay = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationWireTransfer} wire_transfer
   */
  exports.prototype.wire_transfer = undefined;

  return exports;

}));
