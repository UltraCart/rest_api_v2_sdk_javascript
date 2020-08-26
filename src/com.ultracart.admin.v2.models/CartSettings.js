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
    define(['ApiClient', 'com.ultracart.admin.v2.models/CartSettingsBilling', 'com.ultracart.admin.v2.models/CartSettingsGift', 'com.ultracart.admin.v2.models/CartSettingsPayment', 'com.ultracart.admin.v2.models/CartSettingsShipping', 'com.ultracart.admin.v2.models/CartSettingsTaxes', 'com.ultracart.admin.v2.models/CartSettingsTerms'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CartSettingsBilling'), require('./CartSettingsGift'), require('./CartSettingsPayment'), require('./CartSettingsShipping'), require('./CartSettingsTaxes'), require('./CartSettingsTerms'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CartSettings = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.CartSettingsBilling, root.UltraCartRestApiV2.CartSettingsGift, root.UltraCartRestApiV2.CartSettingsPayment, root.UltraCartRestApiV2.CartSettingsShipping, root.UltraCartRestApiV2.CartSettingsTaxes, root.UltraCartRestApiV2.CartSettingsTerms);
  }
}(this, function(ApiClient, CartSettingsBilling, CartSettingsGift, CartSettingsPayment, CartSettingsShipping, CartSettingsTaxes, CartSettingsTerms) {
  'use strict';

  /**
   * The CartSettings model module.
   * @module com.ultracart.admin.v2.models/CartSettings
   * @version 3.0.17
   */

  /**
   * Constructs a new <code>CartSettings</code>.
   * @alias module:com.ultracart.admin.v2.models/CartSettings
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CartSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CartSettings} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CartSettings} The populated <code>CartSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('billing'))
        obj.billing = CartSettingsBilling.constructFromObject(data['billing']);
      if (data.hasOwnProperty('gift'))
        obj.gift = CartSettingsGift.constructFromObject(data['gift']);
      if (data.hasOwnProperty('payment'))
        obj.payment = CartSettingsPayment.constructFromObject(data['payment']);
      if (data.hasOwnProperty('shipping'))
        obj.shipping = CartSettingsShipping.constructFromObject(data['shipping']);
      if (data.hasOwnProperty('taxes'))
        obj.taxes = CartSettingsTaxes.constructFromObject(data['taxes']);
      if (data.hasOwnProperty('terms'))
        obj.terms = CartSettingsTerms.constructFromObject(data['terms']);
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/CartSettingsBilling} billing
   */
  exports.prototype.billing = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CartSettingsGift} gift
   */
  exports.prototype.gift = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CartSettingsPayment} payment
   */
  exports.prototype.payment = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CartSettingsShipping} shipping
   */
  exports.prototype.shipping = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CartSettingsTaxes} taxes
   */
  exports.prototype.taxes = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CartSettingsTerms} terms
   */
  exports.prototype.terms = undefined;

  return exports;

}));
