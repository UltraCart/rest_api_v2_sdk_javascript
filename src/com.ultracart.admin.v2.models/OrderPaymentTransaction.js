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
    define(['ApiClient', 'com.ultracart.admin.v2.models/OrderPaymentTransactionDetail'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OrderPaymentTransactionDetail'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.OrderPaymentTransaction = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.OrderPaymentTransactionDetail);
  }
}(this, function(ApiClient, OrderPaymentTransactionDetail) {
  'use strict';




  /**
   * The OrderPaymentTransaction model module.
   * @module com.ultracart.admin.v2.models/OrderPaymentTransaction
   * @version 2.3.10
   */

  /**
   * Constructs a new <code>OrderPaymentTransaction</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderPaymentTransaction
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>OrderPaymentTransaction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderPaymentTransaction} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderPaymentTransaction} The populated <code>OrderPaymentTransaction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], [OrderPaymentTransactionDetail]);
      }
      if (data.hasOwnProperty('successful')) {
        obj['successful'] = ApiClient.convertToType(data['successful'], 'Boolean');
      }
      if (data.hasOwnProperty('transaction_gateway')) {
        obj['transaction_gateway'] = ApiClient.convertToType(data['transaction_gateway'], 'String');
      }
      if (data.hasOwnProperty('transaction_timestamp')) {
        obj['transaction_timestamp'] = ApiClient.convertToType(data['transaction_timestamp'], 'String');
      }
    }
    return obj;
  }

  /**
   * Details
   * @member {Array.<module:com.ultracart.admin.v2.models/OrderPaymentTransactionDetail>} details
   */
  exports.prototype['details'] = undefined;
  /**
   * True if the transaction was successful
   * @member {Boolean} successful
   */
  exports.prototype['successful'] = undefined;
  /**
   * Transaction gateway
   * @member {String} transaction_gateway
   */
  exports.prototype['transaction_gateway'] = undefined;
  /**
   * Transaction date/time
   * @member {String} transaction_timestamp
   */
  exports.prototype['transaction_timestamp'] = undefined;



  return exports;
}));


