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
    define(['ApiClient', 'com.ultracart.admin.v2.models/Browser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Browser'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.OrderCheckout = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Browser);
  }
}(this, function(ApiClient, Browser) {
  'use strict';

  /**
   * The OrderCheckout model module.
   * @module com.ultracart.admin.v2.models/OrderCheckout
   * @version 3.10.96
   */

  /**
   * Constructs a new <code>OrderCheckout</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderCheckout
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderCheckout</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderCheckout} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderCheckout} The populated <code>OrderCheckout</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('browser'))
        obj.browser = Browser.constructFromObject(data['browser']);
      if (data.hasOwnProperty('comments'))
        obj.comments = ApiClient.convertToType(data['comments'], 'String');
      if (data.hasOwnProperty('custom_field1'))
        obj.custom_field1 = ApiClient.convertToType(data['custom_field1'], 'String');
      if (data.hasOwnProperty('custom_field2'))
        obj.custom_field2 = ApiClient.convertToType(data['custom_field2'], 'String');
      if (data.hasOwnProperty('custom_field3'))
        obj.custom_field3 = ApiClient.convertToType(data['custom_field3'], 'String');
      if (data.hasOwnProperty('custom_field4'))
        obj.custom_field4 = ApiClient.convertToType(data['custom_field4'], 'String');
      if (data.hasOwnProperty('custom_field5'))
        obj.custom_field5 = ApiClient.convertToType(data['custom_field5'], 'String');
      if (data.hasOwnProperty('custom_field6'))
        obj.custom_field6 = ApiClient.convertToType(data['custom_field6'], 'String');
      if (data.hasOwnProperty('custom_field7'))
        obj.custom_field7 = ApiClient.convertToType(data['custom_field7'], 'String');
      if (data.hasOwnProperty('customer_ip_address'))
        obj.customer_ip_address = ApiClient.convertToType(data['customer_ip_address'], 'String');
      if (data.hasOwnProperty('screen_branding_theme_code'))
        obj.screen_branding_theme_code = ApiClient.convertToType(data['screen_branding_theme_code'], 'String');
      if (data.hasOwnProperty('screen_size'))
        obj.screen_size = ApiClient.convertToType(data['screen_size'], 'String');
      if (data.hasOwnProperty('storefront_host_name'))
        obj.storefront_host_name = ApiClient.convertToType(data['storefront_host_name'], 'String');
      if (data.hasOwnProperty('upsell_path_code'))
        obj.upsell_path_code = ApiClient.convertToType(data['upsell_path_code'], 'String');
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/Browser} browser
   */
  exports.prototype.browser = undefined;

  /**
   * Comments from the customer.  Rarely used on the single page checkout.
   * @member {String} comments
   */
  exports.prototype.comments = undefined;

  /**
   * Custom field 1
   * @member {String} custom_field1
   */
  exports.prototype.custom_field1 = undefined;

  /**
   * Custom field 2
   * @member {String} custom_field2
   */
  exports.prototype.custom_field2 = undefined;

  /**
   * Custom field 3
   * @member {String} custom_field3
   */
  exports.prototype.custom_field3 = undefined;

  /**
   * Custom field 4
   * @member {String} custom_field4
   */
  exports.prototype.custom_field4 = undefined;

  /**
   * Custom field 5
   * @member {String} custom_field5
   */
  exports.prototype.custom_field5 = undefined;

  /**
   * Custom field 6
   * @member {String} custom_field6
   */
  exports.prototype.custom_field6 = undefined;

  /**
   * Custom field 7
   * @member {String} custom_field7
   */
  exports.prototype.custom_field7 = undefined;

  /**
   * IP address of the customer when placing the order
   * @member {String} customer_ip_address
   */
  exports.prototype.customer_ip_address = undefined;

  /**
   * Screen branding theme code associated with the order (legacy checkout)
   * @member {String} screen_branding_theme_code
   */
  exports.prototype.screen_branding_theme_code = undefined;

  /**
   * Screen size small, medium or large
   * @member {String} screen_size
   */
  exports.prototype.screen_size = undefined;

  /**
   * StoreFront host name associated with the order
   * @member {String} storefront_host_name
   */
  exports.prototype.storefront_host_name = undefined;

  /**
   * Upsell path code assigned during the checkout that the customer went through
   * @member {String} upsell_path_code
   */
  exports.prototype.upsell_path_code = undefined;

  return exports;

}));
