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
    root.UltraCartRestApiV2.OrderCurrentStageHistory = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderCurrentStageHistory model module.
   * @module com.ultracart.admin.v2.models/OrderCurrentStageHistory
   * @version 3.11.0
   */

  /**
   * Constructs a new <code>OrderCurrentStageHistory</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderCurrentStageHistory
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderCurrentStageHistory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderCurrentStageHistory} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderCurrentStageHistory} The populated <code>OrderCurrentStageHistory</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('after_stage'))
        obj.after_stage = ApiClient.convertToType(data['after_stage'], 'String');
      if (data.hasOwnProperty('before_stage'))
        obj.before_stage = ApiClient.convertToType(data['before_stage'], 'String');
      if (data.hasOwnProperty('transition_dts'))
        obj.transition_dts = ApiClient.convertToType(data['transition_dts'], 'String');
    }
    return obj;
  }

  /**
   * New stage that the order is in.
   * @member {module:com.ultracart.admin.v2.models/OrderCurrentStageHistory.AfterStageEnum} after_stage
   */
  exports.prototype.after_stage = undefined;

  /**
   * Previous stage that the order was in.
   * @member {module:com.ultracart.admin.v2.models/OrderCurrentStageHistory.BeforeStageEnum} before_stage
   */
  exports.prototype.before_stage = undefined;

  /**
   * Date/time that the stage transitioned
   * @member {String} transition_dts
   */
  exports.prototype.transition_dts = undefined;


  /**
   * Allowed values for the <code>after_stage</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AfterStageEnum = {
    /**
     * value: "Accounts Receivable"
     * @const
     */
    Accounts_Receivable: "Accounts Receivable",

    /**
     * value: "Pending Clearance"
     * @const
     */
    Pending_Clearance: "Pending Clearance",

    /**
     * value: "Fraud Review"
     * @const
     */
    Fraud_Review: "Fraud Review",

    /**
     * value: "Rejected"
     * @const
     */
    Rejected: "Rejected",

    /**
     * value: "Shipping Department"
     * @const
     */
    Shipping_Department: "Shipping Department",

    /**
     * value: "Completed Order"
     * @const
     */
    Completed_Order: "Completed Order",

    /**
     * value: "Quote Request"
     * @const
     */
    Quote_Request: "Quote Request",

    /**
     * value: "Quote Sent"
     * @const
     */
    Quote_Sent: "Quote Sent",

    /**
     * value: "Least Cost Routing"
     * @const
     */
    Least_Cost_Routing: "Least Cost Routing",

    /**
     * value: "Unknown"
     * @const
     */
    Unknown: "Unknown",

    /**
     * value: "Pre-ordered"
     * @const
     */
    Pre_ordered: "Pre-ordered",

    /**
     * value: "Advanced Order Routing"
     * @const
     */
    Advanced_Order_Routing: "Advanced Order Routing",

    /**
     * value: "Hold"
     * @const
     */
    Hold: "Hold"
  };


  /**
   * Allowed values for the <code>before_stage</code> property.
   * @enum {String}
   * @readonly
   */
  exports.BeforeStageEnum = {
    /**
     * value: "Accounts Receivable"
     * @const
     */
    Accounts_Receivable: "Accounts Receivable",

    /**
     * value: "Pending Clearance"
     * @const
     */
    Pending_Clearance: "Pending Clearance",

    /**
     * value: "Fraud Review"
     * @const
     */
    Fraud_Review: "Fraud Review",

    /**
     * value: "Rejected"
     * @const
     */
    Rejected: "Rejected",

    /**
     * value: "Shipping Department"
     * @const
     */
    Shipping_Department: "Shipping Department",

    /**
     * value: "Completed Order"
     * @const
     */
    Completed_Order: "Completed Order",

    /**
     * value: "Quote Request"
     * @const
     */
    Quote_Request: "Quote Request",

    /**
     * value: "Quote Sent"
     * @const
     */
    Quote_Sent: "Quote Sent",

    /**
     * value: "Least Cost Routing"
     * @const
     */
    Least_Cost_Routing: "Least Cost Routing",

    /**
     * value: "Unknown"
     * @const
     */
    Unknown: "Unknown",

    /**
     * value: "Pre-ordered"
     * @const
     */
    Pre_ordered: "Pre-ordered",

    /**
     * value: "Advanced Order Routing"
     * @const
     */
    Advanced_Order_Routing: "Advanced Order Routing",

    /**
     * value: "Hold"
     * @const
     */
    Hold: "Hold"
  };

  return exports;

}));
