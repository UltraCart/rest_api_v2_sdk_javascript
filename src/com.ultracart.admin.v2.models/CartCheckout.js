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
    root.UltraCartRestApiV2.CartCheckout = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CartCheckout model module.
   * @module com.ultracart.admin.v2.models/CartCheckout
   * @version 3.2.9
   */

  /**
   * Constructs a new <code>CartCheckout</code>.
   * @alias module:com.ultracart.admin.v2.models/CartCheckout
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CartCheckout</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CartCheckout} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CartCheckout} The populated <code>CartCheckout</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
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
      if (data.hasOwnProperty('ip_address'))
        obj.ip_address = ApiClient.convertToType(data['ip_address'], 'String');
      if (data.hasOwnProperty('return_code'))
        obj.return_code = ApiClient.convertToType(data['return_code'], 'String');
      if (data.hasOwnProperty('return_url'))
        obj.return_url = ApiClient.convertToType(data['return_url'], 'String');
      if (data.hasOwnProperty('screen_branding_theme_code'))
        obj.screen_branding_theme_code = ApiClient.convertToType(data['screen_branding_theme_code'], 'String');
      if (data.hasOwnProperty('storefront_host_name'))
        obj.storefront_host_name = ApiClient.convertToType(data['storefront_host_name'], 'String');
      if (data.hasOwnProperty('user_agent'))
        obj.user_agent = ApiClient.convertToType(data['user_agent'], 'String');
    }
    return obj;
  }

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
   * IP Address (read only unless non-browser key authenticated)
   * @member {String} ip_address
   */
  exports.prototype.ip_address = undefined;

  /**
   * Return code assigned for send return email operation
   * @member {String} return_code
   */
  exports.prototype.return_code = undefined;

  /**
   * The URL to redirect the customer to when they return from an abandon cart email.  Must be https protocol.
   * @member {String} return_url
   */
  exports.prototype.return_url = undefined;

  /**
   * Screen branding theme code
   * @member {String} screen_branding_theme_code
   */
  exports.prototype.screen_branding_theme_code = undefined;

  /**
   * StoreFront Host Name
   * @member {String} storefront_host_name
   */
  exports.prototype.storefront_host_name = undefined;

  /**
   * User agent of the browser
   * @member {String} user_agent
   */
  exports.prototype.user_agent = undefined;

  return exports;

}));
