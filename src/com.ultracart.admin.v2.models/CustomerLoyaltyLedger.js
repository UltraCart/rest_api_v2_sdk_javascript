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
    root.UltraCartRestApiV2.CustomerLoyaltyLedger = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CustomerLoyaltyLedger model module.
   * @module com.ultracart.admin.v2.models/CustomerLoyaltyLedger
   * @version 3.10.117
   */

  /**
   * Constructs a new <code>CustomerLoyaltyLedger</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerLoyaltyLedger
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CustomerLoyaltyLedger</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CustomerLoyaltyLedger} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CustomerLoyaltyLedger} The populated <code>CustomerLoyaltyLedger</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('created_by'))
        obj.created_by = ApiClient.convertToType(data['created_by'], 'String');
      if (data.hasOwnProperty('created_dts'))
        obj.created_dts = ApiClient.convertToType(data['created_dts'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('item_id'))
        obj.item_id = ApiClient.convertToType(data['item_id'], 'String');
      if (data.hasOwnProperty('item_index'))
        obj.item_index = ApiClient.convertToType(data['item_index'], 'Number');
      if (data.hasOwnProperty('ledger_dts'))
        obj.ledger_dts = ApiClient.convertToType(data['ledger_dts'], 'String');
      if (data.hasOwnProperty('loyalty_campaign_oid'))
        obj.loyalty_campaign_oid = ApiClient.convertToType(data['loyalty_campaign_oid'], 'Number');
      if (data.hasOwnProperty('loyalty_ledger_oid'))
        obj.loyalty_ledger_oid = ApiClient.convertToType(data['loyalty_ledger_oid'], 'Number');
      if (data.hasOwnProperty('loyalty_points'))
        obj.loyalty_points = ApiClient.convertToType(data['loyalty_points'], 'Number');
      if (data.hasOwnProperty('modified_by'))
        obj.modified_by = ApiClient.convertToType(data['modified_by'], 'String');
      if (data.hasOwnProperty('modified_dts'))
        obj.modified_dts = ApiClient.convertToType(data['modified_dts'], 'String');
      if (data.hasOwnProperty('order_id'))
        obj.order_id = ApiClient.convertToType(data['order_id'], 'String');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
      if (data.hasOwnProperty('vesting_dts'))
        obj.vesting_dts = ApiClient.convertToType(data['vesting_dts'], 'String');
    }
    return obj;
  }

  /**
   * Created By
   * @member {String} created_by
   */
  exports.prototype.created_by = undefined;

  /**
   * Created date
   * @member {String} created_dts
   */
  exports.prototype.created_dts = undefined;

  /**
   * Description
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * Email
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * Item Id
   * @member {String} item_id
   */
  exports.prototype.item_id = undefined;

  /**
   * Item Index
   * @member {Number} item_index
   */
  exports.prototype.item_index = undefined;

  /**
   * Ledger date
   * @member {String} ledger_dts
   */
  exports.prototype.ledger_dts = undefined;

  /**
   * Loyalty campaign oid
   * @member {Number} loyalty_campaign_oid
   */
  exports.prototype.loyalty_campaign_oid = undefined;

  /**
   * Loyalty ledger oid
   * @member {Number} loyalty_ledger_oid
   */
  exports.prototype.loyalty_ledger_oid = undefined;

  /**
   * Loyalty points
   * @member {Number} loyalty_points
   */
  exports.prototype.loyalty_points = undefined;

  /**
   * Modified By
   * @member {String} modified_by
   */
  exports.prototype.modified_by = undefined;

  /**
   * Modified date
   * @member {String} modified_dts
   */
  exports.prototype.modified_dts = undefined;

  /**
   * Order Id
   * @member {String} order_id
   */
  exports.prototype.order_id = undefined;

  /**
   * Quantity
   * @member {Number} quantity
   */
  exports.prototype.quantity = undefined;

  /**
   * Vesting date
   * @member {String} vesting_dts
   */
  exports.prototype.vesting_dts = undefined;

  return exports;

}));
