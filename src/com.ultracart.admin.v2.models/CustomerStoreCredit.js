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
    define(['ApiClient', 'com.ultracart.admin.v2.models/CustomerStoreCreditLedgerEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CustomerStoreCreditLedgerEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CustomerStoreCredit = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.CustomerStoreCreditLedgerEntry);
  }
}(this, function(ApiClient, CustomerStoreCreditLedgerEntry) {
  'use strict';

  /**
   * The CustomerStoreCredit model module.
   * @module com.ultracart.admin.v2.models/CustomerStoreCredit
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>CustomerStoreCredit</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerStoreCredit
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CustomerStoreCredit</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CustomerStoreCredit} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CustomerStoreCredit} The populated <code>CustomerStoreCredit</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('available'))
        obj.available = ApiClient.convertToType(data['available'], 'Number');
      if (data.hasOwnProperty('expiring'))
        obj.expiring = ApiClient.convertToType(data['expiring'], 'Number');
      if (data.hasOwnProperty('future_ledgers'))
        obj.future_ledgers = ApiClient.convertToType(data['future_ledgers'], [CustomerStoreCreditLedgerEntry]);
      if (data.hasOwnProperty('past_ledgers'))
        obj.past_ledgers = ApiClient.convertToType(data['past_ledgers'], [CustomerStoreCreditLedgerEntry]);
      if (data.hasOwnProperty('total'))
        obj.total = ApiClient.convertToType(data['total'], 'Number');
      if (data.hasOwnProperty('vesting'))
        obj.vesting = ApiClient.convertToType(data['vesting'], 'Number');
    }
    return obj;
  }

  /**
   * Available store credit which is defined as unused and vested
   * @member {Number} available
   */
  exports.prototype.available = undefined;

  /**
   * Amount of store credit expiring within 30 days
   * @member {Number} expiring
   */
  exports.prototype.expiring = undefined;

  /**
   * Array of future ledger entries including expiring entries
   * @member {Array.<module:com.ultracart.admin.v2.models/CustomerStoreCreditLedgerEntry>} future_ledgers
   */
  exports.prototype.future_ledgers = undefined;

  /**
   * Array of past ledger entries including accrual, usage, and expiring entries
   * @member {Array.<module:com.ultracart.admin.v2.models/CustomerStoreCreditLedgerEntry>} past_ledgers
   */
  exports.prototype.past_ledgers = undefined;

  /**
   * Total lifetime store credit for this customer.
   * @member {Number} total
   */
  exports.prototype.total = undefined;

  /**
   * Amount of store credit vesting
   * @member {Number} vesting
   */
  exports.prototype.vesting = undefined;

  return exports;

}));
