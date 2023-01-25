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
    define(['ApiClient', 'com.ultracart.admin.v2.models/CartSettingsGiftWrap', 'com.ultracart.admin.v2.models/Currency'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CartSettingsGiftWrap'), require('./Currency'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CartSettingsGift = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.CartSettingsGiftWrap, root.UltraCartRestApiV2.Currency);
  }
}(this, function(ApiClient, CartSettingsGiftWrap, Currency) {
  'use strict';

  /**
   * The CartSettingsGift model module.
   * @module com.ultracart.admin.v2.models/CartSettingsGift
   * @version 3.10.107
   */

  /**
   * Constructs a new <code>CartSettingsGift</code>.
   * @alias module:com.ultracart.admin.v2.models/CartSettingsGift
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CartSettingsGift</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CartSettingsGift} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CartSettingsGift} The populated <code>CartSettingsGift</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('allow_gifts'))
        obj.allow_gifts = ApiClient.convertToType(data['allow_gifts'], 'Boolean');
      if (data.hasOwnProperty('gift_charge'))
        obj.gift_charge = Currency.constructFromObject(data['gift_charge']);
      if (data.hasOwnProperty('gift_wraps'))
        obj.gift_wraps = ApiClient.convertToType(data['gift_wraps'], [CartSettingsGiftWrap]);
      if (data.hasOwnProperty('max_message_length'))
        obj.max_message_length = ApiClient.convertToType(data['max_message_length'], 'Number');
    }
    return obj;
  }

  /**
   * True if this checkout supports gift giving
   * @member {Boolean} allow_gifts
   */
  exports.prototype.allow_gifts = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} gift_charge
   */
  exports.prototype.gift_charge = undefined;

  /**
   * The gift wraps available for the customer to select from
   * @member {Array.<module:com.ultracart.admin.v2.models/CartSettingsGiftWrap>} gift_wraps
   */
  exports.prototype.gift_wraps = undefined;

  /**
   * The maximum length of the gift message the giver can enter
   * @member {Number} max_message_length
   */
  exports.prototype.max_message_length = undefined;

  return exports;

}));
