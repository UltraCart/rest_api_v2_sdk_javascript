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
    define(['ApiClient', 'com.ultracart.admin.v2.models/Currency'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Currency'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CartGift = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Currency);
  }
}(this, function(ApiClient, Currency) {
  'use strict';

  /**
   * The CartGift model module.
   * @module com.ultracart.admin.v2.models/CartGift
   * @version 3.1.26
   */

  /**
   * Constructs a new <code>CartGift</code>.
   * @alias module:com.ultracart.admin.v2.models/CartGift
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CartGift</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CartGift} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CartGift} The populated <code>CartGift</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('gift'))
        obj.gift = ApiClient.convertToType(data['gift'], 'Boolean');
      if (data.hasOwnProperty('gift_charge'))
        obj.gift_charge = Currency.constructFromObject(data['gift_charge']);
      if (data.hasOwnProperty('gift_email'))
        obj.gift_email = ApiClient.convertToType(data['gift_email'], 'String');
      if (data.hasOwnProperty('gift_message'))
        obj.gift_message = ApiClient.convertToType(data['gift_message'], 'String');
      if (data.hasOwnProperty('gift_wrap_cost'))
        obj.gift_wrap_cost = Currency.constructFromObject(data['gift_wrap_cost']);
      if (data.hasOwnProperty('gift_wrap_title'))
        obj.gift_wrap_title = ApiClient.convertToType(data['gift_wrap_title'], 'String');
    }
    return obj;
  }

  /**
   * True if this order is a gift
   * @member {Boolean} gift
   */
  exports.prototype.gift = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} gift_charge
   */
  exports.prototype.gift_charge = undefined;

  /**
   * Email address of the gift recipient
   * @member {String} gift_email
   */
  exports.prototype.gift_email = undefined;

  /**
   * Message to the gift recipient
   * @member {String} gift_message
   */
  exports.prototype.gift_message = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} gift_wrap_cost
   */
  exports.prototype.gift_wrap_cost = undefined;

  /**
   * Title of the selected gift wrap
   * @member {String} gift_wrap_title
   */
  exports.prototype.gift_wrap_title = undefined;

  return exports;

}));
