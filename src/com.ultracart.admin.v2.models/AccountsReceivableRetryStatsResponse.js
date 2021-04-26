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
    define(['ApiClient', 'com.ultracart.admin.v2.models/AccountsReceivableRetryStatAccount', 'com.ultracart.admin.v2.models/Error', 'com.ultracart.admin.v2.models/ResponseMetadata', 'com.ultracart.admin.v2.models/Warning'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountsReceivableRetryStatAccount'), require('./Error'), require('./ResponseMetadata'), require('./Warning'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.AccountsReceivableRetryStatsResponse = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.AccountsReceivableRetryStatAccount, root.UltraCartRestApiV2.Error, root.UltraCartRestApiV2.ResponseMetadata, root.UltraCartRestApiV2.Warning);
  }
}(this, function(ApiClient, AccountsReceivableRetryStatAccount, Error, ResponseMetadata, Warning) {
  'use strict';

  /**
   * The AccountsReceivableRetryStatsResponse model module.
   * @module com.ultracart.admin.v2.models/AccountsReceivableRetryStatsResponse
   * @version 3.1.28
   */

  /**
   * Constructs a new <code>AccountsReceivableRetryStatsResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatsResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AccountsReceivableRetryStatsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatsResponse} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatsResponse} The populated <code>AccountsReceivableRetryStatsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('error'))
        obj.error = Error.constructFromObject(data['error']);
      if (data.hasOwnProperty('linked_accounts'))
        obj.linked_accounts = ApiClient.convertToType(data['linked_accounts'], [AccountsReceivableRetryStatAccount]);
      if (data.hasOwnProperty('metadata'))
        obj.metadata = ResponseMetadata.constructFromObject(data['metadata']);
      if (data.hasOwnProperty('overall'))
        obj.overall = AccountsReceivableRetryStatAccount.constructFromObject(data['overall']);
      if (data.hasOwnProperty('success'))
        obj.success = ApiClient.convertToType(data['success'], 'Boolean');
      if (data.hasOwnProperty('warning'))
        obj.warning = Warning.constructFromObject(data['warning']);
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/Error} error
   */
  exports.prototype.error = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatAccount>} linked_accounts
   */
  exports.prototype.linked_accounts = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
   */
  exports.prototype.metadata = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatAccount} overall
   */
  exports.prototype.overall = undefined;

  /**
   * Indicates if API call was successful
   * @member {Boolean} success
   */
  exports.prototype.success = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Warning} warning
   */
  exports.prototype.warning = undefined;

  return exports;

}));
