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
    define(['ApiClient', 'com.ultracart.admin.v2.models/OrderAffiliateLedger'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OrderAffiliateLedger'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.OrderAffiliate = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.OrderAffiliateLedger);
  }
}(this, function(ApiClient, OrderAffiliateLedger) {
  'use strict';

  /**
   * The OrderAffiliate model module.
   * @module com.ultracart.admin.v2.models/OrderAffiliate
   * @version 3.10.5
   */

  /**
   * Constructs a new <code>OrderAffiliate</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderAffiliate
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderAffiliate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderAffiliate} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderAffiliate} The populated <code>OrderAffiliate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('affiliate_oid'))
        obj.affiliate_oid = ApiClient.convertToType(data['affiliate_oid'], 'Number');
      if (data.hasOwnProperty('ledger_entries'))
        obj.ledger_entries = ApiClient.convertToType(data['ledger_entries'], [OrderAffiliateLedger]);
      if (data.hasOwnProperty('sub_id'))
        obj.sub_id = ApiClient.convertToType(data['sub_id'], 'String');
    }
    return obj;
  }

  /**
   * Affiliate ID
   * @member {Number} affiliate_oid
   */
  exports.prototype.affiliate_oid = undefined;

  /**
   * Ledger entries associated with all the commissions earned on this order
   * @member {Array.<module:com.ultracart.admin.v2.models/OrderAffiliateLedger>} ledger_entries
   */
  exports.prototype.ledger_entries = undefined;

  /**
   * Sub identifier provided by the affiliate on the click that generated this order
   * @member {String} sub_id
   */
  exports.prototype.sub_id = undefined;

  return exports;

}));
