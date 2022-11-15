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
    root.UltraCartRestApiV2.OrderAffiliateLedger = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderAffiliateLedger model module.
   * @module com.ultracart.admin.v2.models/OrderAffiliateLedger
   * @version 3.10.65
   */

  /**
   * Constructs a new <code>OrderAffiliateLedger</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderAffiliateLedger
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderAffiliateLedger</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderAffiliateLedger} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderAffiliateLedger} The populated <code>OrderAffiliateLedger</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('assigned_by_user'))
        obj.assigned_by_user = ApiClient.convertToType(data['assigned_by_user'], 'String');
      if (data.hasOwnProperty('item_id'))
        obj.item_id = ApiClient.convertToType(data['item_id'], 'String');
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
   * UltraCart user name that assigned this commission if manually assigned
   * @member {String} assigned_by_user
   */
  exports.prototype.assigned_by_user = undefined;

  /**
   * Item ID that this ledger record is associated with
   * @member {String} item_id
   */
  exports.prototype.item_id = undefined;

  /**
   * Tier number of this affiliate in the commission calculation
   * @member {Number} tier_number
   */
  exports.prototype.tier_number = undefined;

  /**
   * Amount of the transaction
   * @member {Number} transaction_amount
   */
  exports.prototype.transaction_amount = undefined;

  /**
   * The amount that has been paid so far on the transaction
   * @member {Number} transaction_amount_paid
   */
  exports.prototype.transaction_amount_paid = undefined;

  /**
   * The date/time that the affiliate ledger was generated for the transaction
   * @member {String} transaction_dts
   */
  exports.prototype.transaction_dts = undefined;

  /**
   * Details of the transaction suitable for display to the affiliate
   * @member {String} transaction_memo
   */
  exports.prototype.transaction_memo = undefined;

  /**
   * The percentage earned on the transaction
   * @member {Number} transaction_percentage
   */
  exports.prototype.transaction_percentage = undefined;

  /**
   * The state of the transaction
   * @member {module:com.ultracart.admin.v2.models/OrderAffiliateLedger.TransactionStateEnum} transaction_state
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
