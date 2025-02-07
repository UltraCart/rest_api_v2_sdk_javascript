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
    root.UltraCartRestApiV2.ItemPaymentProcessing = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ItemPaymentProcessing model module.
   * @module com.ultracart.admin.v2.models/ItemPaymentProcessing
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>ItemPaymentProcessing</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemPaymentProcessing
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemPaymentProcessing</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemPaymentProcessing} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemPaymentProcessing} The populated <code>ItemPaymentProcessing</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('block_prepaid'))
        obj.block_prepaid = ApiClient.convertToType(data['block_prepaid'], 'Boolean');
      if (data.hasOwnProperty('credit_card_transaction_type'))
        obj.credit_card_transaction_type = ApiClient.convertToType(data['credit_card_transaction_type'], 'String');
      if (data.hasOwnProperty('no_realtime_charge'))
        obj.no_realtime_charge = ApiClient.convertToType(data['no_realtime_charge'], 'Boolean');
      if (data.hasOwnProperty('payment_method_validity'))
        obj.payment_method_validity = ApiClient.convertToType(data['payment_method_validity'], ['String']);
      if (data.hasOwnProperty('rotating_transaction_gateway_codes'))
        obj.rotating_transaction_gateway_codes = ApiClient.convertToType(data['rotating_transaction_gateway_codes'], ['String']);
    }
    return obj;
  }

  /**
   * True if prepaid cards should be blocked from buying this item
   * @member {Boolean} block_prepaid
   */
  exports.prototype.block_prepaid = undefined;

  /**
   * Credit card transaction type
   * @member {String} credit_card_transaction_type
   */
  exports.prototype.credit_card_transaction_type = undefined;

  /**
   * True if no real-time charge should be performed on this item.
   * @member {Boolean} no_realtime_charge
   */
  exports.prototype.no_realtime_charge = undefined;

  /**
   * Payment method validity
   * @member {Array.<String>} payment_method_validity
   */
  exports.prototype.payment_method_validity = undefined;

  /**
   * Rotating transaction gateway codes
   * @member {Array.<String>} rotating_transaction_gateway_codes
   */
  exports.prototype.rotating_transaction_gateway_codes = undefined;

  return exports;

}));
