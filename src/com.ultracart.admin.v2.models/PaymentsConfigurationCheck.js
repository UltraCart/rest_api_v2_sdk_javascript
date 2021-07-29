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
    define(['ApiClient', 'com.ultracart.admin.v2.models/PaymentsConfigurationRestrictions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentsConfigurationRestrictions'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.PaymentsConfigurationCheck = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.PaymentsConfigurationRestrictions);
  }
}(this, function(ApiClient, PaymentsConfigurationRestrictions) {
  'use strict';

  /**
   * The PaymentsConfigurationCheck model module.
   * @module com.ultracart.admin.v2.models/PaymentsConfigurationCheck
   * @version 3.4.2
   */

  /**
   * Constructs a new <code>PaymentsConfigurationCheck</code>.
   * @alias module:com.ultracart.admin.v2.models/PaymentsConfigurationCheck
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PaymentsConfigurationCheck</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/PaymentsConfigurationCheck} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/PaymentsConfigurationCheck} The populated <code>PaymentsConfigurationCheck</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('acceptCheckOrders'))
        obj.acceptCheckOrders = ApiClient.convertToType(data['acceptCheckOrders'], 'Boolean');
      if (data.hasOwnProperty('acceptECheck'))
        obj.acceptECheck = ApiClient.convertToType(data['acceptECheck'], 'Boolean');
      if (data.hasOwnProperty('acceptMoneyOrders'))
        obj.acceptMoneyOrders = ApiClient.convertToType(data['acceptMoneyOrders'], 'Boolean');
      if (data.hasOwnProperty('checkAccountingCode'))
        obj.checkAccountingCode = ApiClient.convertToType(data['checkAccountingCode'], 'String');
      if (data.hasOwnProperty('checkDepositToAccount'))
        obj.checkDepositToAccount = ApiClient.convertToType(data['checkDepositToAccount'], 'String');
      if (data.hasOwnProperty('checksPayableTo'))
        obj.checksPayableTo = ApiClient.convertToType(data['checksPayableTo'], 'String');
      if (data.hasOwnProperty('eCheckAccountingCode'))
        obj.eCheckAccountingCode = ApiClient.convertToType(data['eCheckAccountingCode'], 'String');
      if (data.hasOwnProperty('eCheckDepositToAccount'))
        obj.eCheckDepositToAccount = ApiClient.convertToType(data['eCheckDepositToAccount'], 'String');
      if (data.hasOwnProperty('mailToAddress1'))
        obj.mailToAddress1 = ApiClient.convertToType(data['mailToAddress1'], 'String');
      if (data.hasOwnProperty('mailToAddress2'))
        obj.mailToAddress2 = ApiClient.convertToType(data['mailToAddress2'], 'String');
      if (data.hasOwnProperty('mailToCity'))
        obj.mailToCity = ApiClient.convertToType(data['mailToCity'], 'String');
      if (data.hasOwnProperty('mailToCountry'))
        obj.mailToCountry = ApiClient.convertToType(data['mailToCountry'], 'String');
      if (data.hasOwnProperty('mailToName'))
        obj.mailToName = ApiClient.convertToType(data['mailToName'], 'String');
      if (data.hasOwnProperty('mailToState'))
        obj.mailToState = ApiClient.convertToType(data['mailToState'], 'String');
      if (data.hasOwnProperty('mailToZip'))
        obj.mailToZip = ApiClient.convertToType(data['mailToZip'], 'String');
      if (data.hasOwnProperty('moneyOrderAccountingCode'))
        obj.moneyOrderAccountingCode = ApiClient.convertToType(data['moneyOrderAccountingCode'], 'String');
      if (data.hasOwnProperty('moneyOrderDepositToAccount'))
        obj.moneyOrderDepositToAccount = ApiClient.convertToType(data['moneyOrderDepositToAccount'], 'String');
      if (data.hasOwnProperty('restrictions'))
        obj.restrictions = PaymentsConfigurationRestrictions.constructFromObject(data['restrictions']);
    }
    return obj;
  }

  /**
   * @member {Boolean} acceptCheckOrders
   */
  exports.prototype.acceptCheckOrders = undefined;

  /**
   * @member {Boolean} acceptECheck
   */
  exports.prototype.acceptECheck = undefined;

  /**
   * @member {Boolean} acceptMoneyOrders
   */
  exports.prototype.acceptMoneyOrders = undefined;

  /**
   * @member {String} checkAccountingCode
   */
  exports.prototype.checkAccountingCode = undefined;

  /**
   * @member {String} checkDepositToAccount
   */
  exports.prototype.checkDepositToAccount = undefined;

  /**
   * @member {String} checksPayableTo
   */
  exports.prototype.checksPayableTo = undefined;

  /**
   * @member {String} eCheckAccountingCode
   */
  exports.prototype.eCheckAccountingCode = undefined;

  /**
   * @member {String} eCheckDepositToAccount
   */
  exports.prototype.eCheckDepositToAccount = undefined;

  /**
   * @member {String} mailToAddress1
   */
  exports.prototype.mailToAddress1 = undefined;

  /**
   * @member {String} mailToAddress2
   */
  exports.prototype.mailToAddress2 = undefined;

  /**
   * @member {String} mailToCity
   */
  exports.prototype.mailToCity = undefined;

  /**
   * @member {String} mailToCountry
   */
  exports.prototype.mailToCountry = undefined;

  /**
   * @member {String} mailToName
   */
  exports.prototype.mailToName = undefined;

  /**
   * @member {String} mailToState
   */
  exports.prototype.mailToState = undefined;

  /**
   * @member {String} mailToZip
   */
  exports.prototype.mailToZip = undefined;

  /**
   * @member {String} moneyOrderAccountingCode
   */
  exports.prototype.moneyOrderAccountingCode = undefined;

  /**
   * @member {String} moneyOrderDepositToAccount
   */
  exports.prototype.moneyOrderDepositToAccount = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationRestrictions} restrictions
   */
  exports.prototype.restrictions = undefined;

  return exports;

}));
