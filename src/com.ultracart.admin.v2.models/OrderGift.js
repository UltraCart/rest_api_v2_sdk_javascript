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
    define(['ApiClient', 'com.ultracart.admin.v2.models/Currency'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Currency'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.OrderGift = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Currency);
  }
}(this, function(ApiClient, Currency) {
  'use strict';




  /**
   * The OrderGift model module.
   * @module com.ultracart.admin.v2.models/OrderGift
   * @version 2.4.21
   */

  /**
   * Constructs a new <code>OrderGift</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderGift
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>OrderGift</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderGift} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderGift} The populated <code>OrderGift</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('gift')) {
        obj['gift'] = ApiClient.convertToType(data['gift'], 'Boolean');
      }
      if (data.hasOwnProperty('gift_charge')) {
        obj['gift_charge'] = Currency.constructFromObject(data['gift_charge']);
      }
      if (data.hasOwnProperty('gift_charge_accounting_code')) {
        obj['gift_charge_accounting_code'] = ApiClient.convertToType(data['gift_charge_accounting_code'], 'String');
      }
      if (data.hasOwnProperty('gift_charge_refunded')) {
        obj['gift_charge_refunded'] = Currency.constructFromObject(data['gift_charge_refunded']);
      }
      if (data.hasOwnProperty('gift_email')) {
        obj['gift_email'] = ApiClient.convertToType(data['gift_email'], 'String');
      }
      if (data.hasOwnProperty('gift_message')) {
        obj['gift_message'] = ApiClient.convertToType(data['gift_message'], 'String');
      }
      if (data.hasOwnProperty('gift_wrap_accounting_code')) {
        obj['gift_wrap_accounting_code'] = ApiClient.convertToType(data['gift_wrap_accounting_code'], 'String');
      }
      if (data.hasOwnProperty('gift_wrap_cost')) {
        obj['gift_wrap_cost'] = Currency.constructFromObject(data['gift_wrap_cost']);
      }
      if (data.hasOwnProperty('gift_wrap_refunded')) {
        obj['gift_wrap_refunded'] = Currency.constructFromObject(data['gift_wrap_refunded']);
      }
      if (data.hasOwnProperty('gift_wrap_title')) {
        obj['gift_wrap_title'] = ApiClient.convertToType(data['gift_wrap_title'], 'String');
      }
    }
    return obj;
  }

  /**
   * True if the order is a gift
   * @member {Boolean} gift
   */
  exports.prototype['gift'] = undefined;
  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} gift_charge
   */
  exports.prototype['gift_charge'] = undefined;
  /**
   * QuickBooks code for the gift charge
   * @member {String} gift_charge_accounting_code
   */
  exports.prototype['gift_charge_accounting_code'] = undefined;
  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} gift_charge_refunded
   */
  exports.prototype['gift_charge_refunded'] = undefined;
  /**
   * Email address of the gift recipient
   * @member {String} gift_email
   */
  exports.prototype['gift_email'] = undefined;
  /**
   * Message to the gift recipient
   * @member {String} gift_message
   */
  exports.prototype['gift_message'] = undefined;
  /**
   * QuickBooks code for the gift wrap charge
   * @member {String} gift_wrap_accounting_code
   */
  exports.prototype['gift_wrap_accounting_code'] = undefined;
  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} gift_wrap_cost
   */
  exports.prototype['gift_wrap_cost'] = undefined;
  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} gift_wrap_refunded
   */
  exports.prototype['gift_wrap_refunded'] = undefined;
  /**
   * Title of the gift wrap that the customer wants used
   * @member {String} gift_wrap_title
   */
  exports.prototype['gift_wrap_title'] = undefined;



  return exports;
}));


