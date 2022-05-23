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
    define(['ApiClient', 'com.ultracart.admin.v2.models/CartSettingsProvince', 'com.ultracart.admin.v2.models/CartSettingsShippingCalendar', 'com.ultracart.admin.v2.models/CartSettingsShippingEstimate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CartSettingsProvince'), require('./CartSettingsShippingCalendar'), require('./CartSettingsShippingEstimate'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CartSettingsShipping = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.CartSettingsProvince, root.UltraCartRestApiV2.CartSettingsShippingCalendar, root.UltraCartRestApiV2.CartSettingsShippingEstimate);
  }
}(this, function(ApiClient, CartSettingsProvince, CartSettingsShippingCalendar, CartSettingsShippingEstimate) {
  'use strict';

  /**
   * The CartSettingsShipping model module.
   * @module com.ultracart.admin.v2.models/CartSettingsShipping
   * @version 3.10.6
   */

  /**
   * Constructs a new <code>CartSettingsShipping</code>.
   * @alias module:com.ultracart.admin.v2.models/CartSettingsShipping
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CartSettingsShipping</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CartSettingsShipping} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CartSettingsShipping} The populated <code>CartSettingsShipping</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('deliver_on_date'))
        obj.deliver_on_date = CartSettingsShippingCalendar.constructFromObject(data['deliver_on_date']);
      if (data.hasOwnProperty('estimates'))
        obj.estimates = ApiClient.convertToType(data['estimates'], [CartSettingsShippingEstimate]);
      if (data.hasOwnProperty('need_shipping'))
        obj.need_shipping = ApiClient.convertToType(data['need_shipping'], 'Boolean');
      if (data.hasOwnProperty('provinces'))
        obj.provinces = ApiClient.convertToType(data['provinces'], [CartSettingsProvince]);
      if (data.hasOwnProperty('ship_on_date'))
        obj.ship_on_date = CartSettingsShippingCalendar.constructFromObject(data['ship_on_date']);
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/CartSettingsShippingCalendar} deliver_on_date
   */
  exports.prototype.deliver_on_date = undefined;

  /**
   * Estimates for this cart
   * @member {Array.<module:com.ultracart.admin.v2.models/CartSettingsShippingEstimate>} estimates
   */
  exports.prototype.estimates = undefined;

  /**
   * True if this order needs shipping
   * @member {Boolean} need_shipping
   */
  exports.prototype.need_shipping = undefined;

  /**
   * Provinces
   * @member {Array.<module:com.ultracart.admin.v2.models/CartSettingsProvince>} provinces
   */
  exports.prototype.provinces = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CartSettingsShippingCalendar} ship_on_date
   */
  exports.prototype.ship_on_date = undefined;

  return exports;

}));
