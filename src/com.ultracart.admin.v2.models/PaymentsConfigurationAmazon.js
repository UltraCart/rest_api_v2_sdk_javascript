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
    root.UltraCartRestApiV2.PaymentsConfigurationAmazon = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.PaymentsConfigurationRestrictions);
  }
}(this, function(ApiClient, PaymentsConfigurationRestrictions) {
  'use strict';

  /**
   * The PaymentsConfigurationAmazon model module.
   * @module com.ultracart.admin.v2.models/PaymentsConfigurationAmazon
   * @version 3.4.3
   */

  /**
   * Constructs a new <code>PaymentsConfigurationAmazon</code>.
   * @alias module:com.ultracart.admin.v2.models/PaymentsConfigurationAmazon
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PaymentsConfigurationAmazon</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/PaymentsConfigurationAmazon} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/PaymentsConfigurationAmazon} The populated <code>PaymentsConfigurationAmazon</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('acceptAmazon'))
        obj.acceptAmazon = ApiClient.convertToType(data['acceptAmazon'], 'Boolean');
      if (data.hasOwnProperty('amazonAccessKeyId'))
        obj.amazonAccessKeyId = ApiClient.convertToType(data['amazonAccessKeyId'], 'String');
      if (data.hasOwnProperty('amazonAccountingCode'))
        obj.amazonAccountingCode = ApiClient.convertToType(data['amazonAccountingCode'], 'String');
      if (data.hasOwnProperty('amazonDepositToAccount'))
        obj.amazonDepositToAccount = ApiClient.convertToType(data['amazonDepositToAccount'], 'String');
      if (data.hasOwnProperty('amazonMerchantId'))
        obj.amazonMerchantId = ApiClient.convertToType(data['amazonMerchantId'], 'String');
      if (data.hasOwnProperty('amazonSandbox'))
        obj.amazonSandbox = ApiClient.convertToType(data['amazonSandbox'], 'Boolean');
      if (data.hasOwnProperty('amazonSecretAccessKey'))
        obj.amazonSecretAccessKey = ApiClient.convertToType(data['amazonSecretAccessKey'], 'String');
      if (data.hasOwnProperty('restrictions'))
        obj.restrictions = PaymentsConfigurationRestrictions.constructFromObject(data['restrictions']);
    }
    return obj;
  }

  /**
   * @member {Boolean} acceptAmazon
   */
  exports.prototype.acceptAmazon = undefined;

  /**
   * @member {String} amazonAccessKeyId
   */
  exports.prototype.amazonAccessKeyId = undefined;

  /**
   * @member {String} amazonAccountingCode
   */
  exports.prototype.amazonAccountingCode = undefined;

  /**
   * @member {String} amazonDepositToAccount
   */
  exports.prototype.amazonDepositToAccount = undefined;

  /**
   * @member {String} amazonMerchantId
   */
  exports.prototype.amazonMerchantId = undefined;

  /**
   * @member {Boolean} amazonSandbox
   */
  exports.prototype.amazonSandbox = undefined;

  /**
   * @member {String} amazonSecretAccessKey
   */
  exports.prototype.amazonSecretAccessKey = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationRestrictions} restrictions
   */
  exports.prototype.restrictions = undefined;

  return exports;

}));
