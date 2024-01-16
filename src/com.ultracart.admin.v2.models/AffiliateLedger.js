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
    define(['ApiClient', 'com.ultracart.admin.v2.models/AffiliateClick', 'com.ultracart.admin.v2.models/AffiliateLink', 'com.ultracart.admin.v2.models/Order'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AffiliateClick'), require('./AffiliateLink'), require('./Order'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.AffiliateLedger = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.AffiliateClick, root.UltraCartRestApiV2.AffiliateLink, root.UltraCartRestApiV2.Order);
  }
}(this, function(ApiClient, AffiliateClick, AffiliateLink, Order) {
  'use strict';

  /**
   * The AffiliateLedger model module.
   * @module com.ultracart.admin.v2.models/AffiliateLedger
   * @version 3.10.182
   */

  /**
   * Constructs a new <code>AffiliateLedger</code>.
   * @alias module:com.ultracart.admin.v2.models/AffiliateLedger
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AffiliateLedger</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/AffiliateLedger} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/AffiliateLedger} The populated <code>AffiliateLedger</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('affiliate_click_oid'))
        obj.affiliate_click_oid = ApiClient.convertToType(data['affiliate_click_oid'], 'Number');
      if (data.hasOwnProperty('affiliate_ledger_oid'))
        obj.affiliate_ledger_oid = ApiClient.convertToType(data['affiliate_ledger_oid'], 'Number');
      if (data.hasOwnProperty('affiliate_link_oid'))
        obj.affiliate_link_oid = ApiClient.convertToType(data['affiliate_link_oid'], 'Number');
      if (data.hasOwnProperty('affiliate_oid'))
        obj.affiliate_oid = ApiClient.convertToType(data['affiliate_oid'], 'Number');
      if (data.hasOwnProperty('assigned_by_user'))
        obj.assigned_by_user = ApiClient.convertToType(data['assigned_by_user'], 'String');
      if (data.hasOwnProperty('click'))
        obj.click = AffiliateClick.constructFromObject(data['click']);
      if (data.hasOwnProperty('item_id'))
        obj.item_id = ApiClient.convertToType(data['item_id'], 'String');
      if (data.hasOwnProperty('link'))
        obj.link = AffiliateLink.constructFromObject(data['link']);
      if (data.hasOwnProperty('order'))
        obj.order = Order.constructFromObject(data['order']);
      if (data.hasOwnProperty('order_id'))
        obj.order_id = ApiClient.convertToType(data['order_id'], 'String');
      if (data.hasOwnProperty('original_transaction_dts'))
        obj.original_transaction_dts = ApiClient.convertToType(data['original_transaction_dts'], 'String');
      if (data.hasOwnProperty('sub_id'))
        obj.sub_id = ApiClient.convertToType(data['sub_id'], 'String');
      if (data.hasOwnProperty('tier_number'))
        obj.tier_number = ApiClient.convertToType(data['tier_number'], 'Number');
      if (data.hasOwnProperty('transaction_amount'))
        obj.transaction_amount = ApiClient.convertToType(data['transaction_amount'], 'Number');
      if (data.hasOwnProperty('transaction_amount_paid'))
        obj.transaction_amount_paid = ApiClient.convertToType(data['transaction_amount_paid'], 'Number');
      if (data.hasOwnProperty('transaction_dts'))
        obj.transaction_dts = ApiClient.convertToType(data['transaction_dts'], 'String');
      if (data.hasOwnProperty('transaction_memo'))
        obj.transaction_memo = ApiClient.convertToType(data['transaction_memo'], 'String');
      if (data.hasOwnProperty('transaction_percentage'))
        obj.transaction_percentage = ApiClient.convertToType(data['transaction_percentage'], 'Number');
      if (data.hasOwnProperty('transaction_state'))
        obj.transaction_state = ApiClient.convertToType(data['transaction_state'], 'String');
    }
    return obj;
  }

  /**
   * Unique object identifier for the click associated with this ledger entry
   * @member {Number} affiliate_click_oid
   */
  exports.prototype.affiliate_click_oid = undefined;

  /**
   * Affiliate ledger object ID associated with this ledger
   * @member {Number} affiliate_ledger_oid
   */
  exports.prototype.affiliate_ledger_oid = undefined;

  /**
   * Unique object identifier for the link that this click is associated with
   * @member {Number} affiliate_link_oid
   */
  exports.prototype.affiliate_link_oid = undefined;

  /**
   * Affiliate object ID associated with this transaction
   * @member {Number} affiliate_oid
   */
  exports.prototype.affiliate_oid = undefined;

  /**
   * User that assigned the transaction if it was done manually
   * @member {String} assigned_by_user
   */
  exports.prototype.assigned_by_user = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/AffiliateClick} click
   */
  exports.prototype.click = undefined;

  /**
   * Item ID associated with this transaction
   * @member {String} item_id
   */
  exports.prototype.item_id = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/AffiliateLink} link
   */
  exports.prototype.link = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Order} order
   */
  exports.prototype.order = undefined;

  /**
   * Order ID associated with this transaction
   * @member {String} order_id
   */
  exports.prototype.order_id = undefined;

  /**
   * Date/time of the original transaction for reversals
   * @member {String} original_transaction_dts
   */
  exports.prototype.original_transaction_dts = undefined;

  /**
   * Sub ID associated with transaction (from the click)
   * @member {String} sub_id
   */
  exports.prototype.sub_id = undefined;

  /**
   * Tier number that this transaction earned
   * @member {Number} tier_number
   */
  exports.prototype.tier_number = undefined;

  /**
   * Transaction amount
   * @member {Number} transaction_amount
   */
  exports.prototype.transaction_amount = undefined;

  /**
   * Amount of the transaction that has been paid out.
   * @member {Number} transaction_amount_paid
   */
  exports.prototype.transaction_amount_paid = undefined;

  /**
   * Date/time that the transaction was made
   * @member {String} transaction_dts
   */
  exports.prototype.transaction_dts = undefined;

  /**
   * Memo explaining the transaction
   * @member {String} transaction_memo
   */
  exports.prototype.transaction_memo = undefined;

  /**
   * Percentage associated with this transaction
   * @member {Number} transaction_percentage
   */
  exports.prototype.transaction_percentage = undefined;

  /**
   * Transaction state
   * @member {module:com.ultracart.admin.v2.models/AffiliateLedger.TransactionStateEnum} transaction_state
   */
  exports.prototype.transaction_state = undefined;


  /**
   * Allowed values for the <code>transaction_state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TransactionStateEnum = {
    /**
     * value: "Pending"
     * @const
     */
    Pending: "Pending",

    /**
     * value: "Posted"
     * @const
     */
    Posted: "Posted",

    /**
     * value: "Approved"
     * @const
     */
    Approved: "Approved",

    /**
     * value: "Paid"
     * @const
     */
    Paid: "Paid",

    /**
     * value: "Rejected"
     * @const
     */
    Rejected: "Rejected",

    /**
     * value: "Partially Paid"
     * @const
     */
    Partially_Paid: "Partially Paid"
  };

  return exports;

}));
