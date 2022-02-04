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
    define(['ApiClient', 'com.ultracart.admin.v2.models/PaymentsThemeTransactionType', 'com.ultracart.admin.v2.models/TransactionGateway'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentsThemeTransactionType'), require('./TransactionGateway'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.TransactionGatewaysRequest = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.PaymentsThemeTransactionType, root.UltraCartRestApiV2.TransactionGateway);
  }
}(this, function(ApiClient, PaymentsThemeTransactionType, TransactionGateway) {
  'use strict';

  /**
   * The TransactionGatewaysRequest model module.
   * @module com.ultracart.admin.v2.models/TransactionGatewaysRequest
   * @version 3.6.37
   */

  /**
   * Constructs a new <code>TransactionGatewaysRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/TransactionGatewaysRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TransactionGatewaysRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/TransactionGatewaysRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/TransactionGatewaysRequest} The populated <code>TransactionGatewaysRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('default_credit_card_transaction_type'))
        obj.default_credit_card_transaction_type = ApiClient.convertToType(data['default_credit_card_transaction_type'], 'String');
      if (data.hasOwnProperty('gateways'))
        obj.gateways = ApiClient.convertToType(data['gateways'], [TransactionGateway]);
      if (data.hasOwnProperty('theme_credit_card_transaction_types'))
        obj.theme_credit_card_transaction_types = ApiClient.convertToType(data['theme_credit_card_transaction_types'], [PaymentsThemeTransactionType]);
    }
    return obj;
  }

  /**
   * The default transaction type for this merchant account
   * @member {module:com.ultracart.admin.v2.models/TransactionGatewaysRequest.DefaultCreditCardTransactionTypeEnum} default_credit_card_transaction_type
   */
  exports.prototype.default_credit_card_transaction_type = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/TransactionGateway>} gateways
   */
  exports.prototype.gateways = undefined;

  /**
   * A list of the storefronts and themes for this merchant account and what type of transaction should be attempted
   * @member {Array.<module:com.ultracart.admin.v2.models/PaymentsThemeTransactionType>} theme_credit_card_transaction_types
   */
  exports.prototype.theme_credit_card_transaction_types = undefined;


  /**
   * Allowed values for the <code>default_credit_card_transaction_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DefaultCreditCardTransactionTypeEnum = {
    /**
     * value: "auth and capture"
     * @const
     */
    and_capture: "auth and capture",

    /**
     * value: "auth then capture"
     * @const
     */
    then_capture: "auth then capture",

    /**
     * value: "auth only"
     * @const
     */
    only: "auth only"
  };

  return exports;

}));
