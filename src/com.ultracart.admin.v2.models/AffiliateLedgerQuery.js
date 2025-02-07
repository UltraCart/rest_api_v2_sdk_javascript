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
    root.UltraCartRestApiV2.AffiliateLedgerQuery = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AffiliateLedgerQuery model module.
   * @module com.ultracart.admin.v2.models/AffiliateLedgerQuery
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>AffiliateLedgerQuery</code>.
   * @alias module:com.ultracart.admin.v2.models/AffiliateLedgerQuery
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AffiliateLedgerQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/AffiliateLedgerQuery} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/AffiliateLedgerQuery} The populated <code>AffiliateLedgerQuery</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('affiliate_oid'))
        obj.affiliate_oid = ApiClient.convertToType(data['affiliate_oid'], 'Number');
      if (data.hasOwnProperty('item_id'))
        obj.item_id = ApiClient.convertToType(data['item_id'], 'String');
      if (data.hasOwnProperty('order_id'))
        obj.order_id = ApiClient.convertToType(data['order_id'], 'String');
      if (data.hasOwnProperty('sub_id'))
        obj.sub_id = ApiClient.convertToType(data['sub_id'], 'String');
      if (data.hasOwnProperty('transaction_dts_begin'))
        obj.transaction_dts_begin = ApiClient.convertToType(data['transaction_dts_begin'], 'String');
      if (data.hasOwnProperty('transaction_dts_end'))
        obj.transaction_dts_end = ApiClient.convertToType(data['transaction_dts_end'], 'String');
    }
    return obj;
  }

  /**
   * Affiliate ID associated with the ledger
   * @member {Number} affiliate_oid
   */
  exports.prototype.affiliate_oid = undefined;

  /**
   * Item id associated with the ledger entry
   * @member {String} item_id
   */
  exports.prototype.item_id = undefined;

  /**
   * Order ID associated with the ledger entries
   * @member {String} order_id
   */
  exports.prototype.order_id = undefined;

  /**
   * Sub ID value passed on the click that generated the ledger
   * @member {String} sub_id
   */
  exports.prototype.sub_id = undefined;

  /**
   * Minimum transaction date/time to return
   * @member {String} transaction_dts_begin
   */
  exports.prototype.transaction_dts_begin = undefined;

  /**
   * Maximum transaction date/time to return
   * @member {String} transaction_dts_end
   */
  exports.prototype.transaction_dts_end = undefined;

  return exports;

}));
