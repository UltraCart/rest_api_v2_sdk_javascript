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
    root.UltraCartRestApiV2.ItemCCBill = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ItemCCBill model module.
   * @module com.ultracart.admin.v2.models/ItemCCBill
   * @version 3.10.8
   */

  /**
   * Constructs a new <code>ItemCCBill</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemCCBill
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemCCBill</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemCCBill} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemCCBill} The populated <code>ItemCCBill</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ccbill_allowed_currencies'))
        obj.ccbill_allowed_currencies = ApiClient.convertToType(data['ccbill_allowed_currencies'], 'String');
      if (data.hasOwnProperty('ccbill_allowed_types'))
        obj.ccbill_allowed_types = ApiClient.convertToType(data['ccbill_allowed_types'], 'String');
      if (data.hasOwnProperty('ccbill_currency_code'))
        obj.ccbill_currency_code = ApiClient.convertToType(data['ccbill_currency_code'], 'String');
      if (data.hasOwnProperty('ccbill_form_name'))
        obj.ccbill_form_name = ApiClient.convertToType(data['ccbill_form_name'], 'String');
      if (data.hasOwnProperty('ccbill_subaccount_id'))
        obj.ccbill_subaccount_id = ApiClient.convertToType(data['ccbill_subaccount_id'], 'String');
      if (data.hasOwnProperty('ccbill_subscription_type_id'))
        obj.ccbill_subscription_type_id = ApiClient.convertToType(data['ccbill_subscription_type_id'], 'String');
    }
    return obj;
  }

  /**
   * Allowed currencies
   * @member {String} ccbill_allowed_currencies
   */
  exports.prototype.ccbill_allowed_currencies = undefined;

  /**
   * Allowed types
   * @member {String} ccbill_allowed_types
   */
  exports.prototype.ccbill_allowed_types = undefined;

  /**
   * Currency code
   * @member {String} ccbill_currency_code
   */
  exports.prototype.ccbill_currency_code = undefined;

  /**
   * Form name
   * @member {String} ccbill_form_name
   */
  exports.prototype.ccbill_form_name = undefined;

  /**
   * Sub-account id
   * @member {String} ccbill_subaccount_id
   */
  exports.prototype.ccbill_subaccount_id = undefined;

  /**
   * Subscription type id
   * @member {String} ccbill_subscription_type_id
   */
  exports.prototype.ccbill_subscription_type_id = undefined;

  return exports;

}));
