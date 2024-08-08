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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ItemDigitalItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ItemDigitalItem'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ItemDigitalDelivery = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ItemDigitalItem);
  }
}(this, function(ApiClient, ItemDigitalItem) {
  'use strict';

  /**
   * The ItemDigitalDelivery model module.
   * @module com.ultracart.admin.v2.models/ItemDigitalDelivery
   * @version 3.10.214
   */

  /**
   * Constructs a new <code>ItemDigitalDelivery</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemDigitalDelivery
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemDigitalDelivery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemDigitalDelivery} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemDigitalDelivery} The populated <code>ItemDigitalDelivery</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('activation_code_description'))
        obj.activation_code_description = ApiClient.convertToType(data['activation_code_description'], 'String');
      if (data.hasOwnProperty('activation_code_low_warning'))
        obj.activation_code_low_warning = ApiClient.convertToType(data['activation_code_low_warning'], 'Number');
      if (data.hasOwnProperty('activation_code_realtime_url'))
        obj.activation_code_realtime_url = ApiClient.convertToType(data['activation_code_realtime_url'], 'String');
      if (data.hasOwnProperty('activation_code_shared_secret'))
        obj.activation_code_shared_secret = ApiClient.convertToType(data['activation_code_shared_secret'], 'String');
      if (data.hasOwnProperty('activation_code_type'))
        obj.activation_code_type = ApiClient.convertToType(data['activation_code_type'], 'String');
      if (data.hasOwnProperty('digital_items'))
        obj.digital_items = ApiClient.convertToType(data['digital_items'], [ItemDigitalItem]);
    }
    return obj;
  }

  /**
   * Description of the activation code
   * @member {String} activation_code_description
   */
  exports.prototype.activation_code_description = undefined;

  /**
   * The number of activation codes whcih should generate a warning email
   * @member {Number} activation_code_low_warning
   */
  exports.prototype.activation_code_low_warning = undefined;

  /**
   * The URL to retrieve activation codes from in real-time
   * @member {String} activation_code_realtime_url
   */
  exports.prototype.activation_code_realtime_url = undefined;

  /**
   * Shared secret used when communicating with the real-time URL
   * @member {String} activation_code_shared_secret
   */
  exports.prototype.activation_code_shared_secret = undefined;

  /**
   * Type of activation code
   * @member {String} activation_code_type
   */
  exports.prototype.activation_code_type = undefined;

  /**
   * Digital items that customer can download when this item is purchased
   * @member {Array.<module:com.ultracart.admin.v2.models/ItemDigitalItem>} digital_items
   */
  exports.prototype.digital_items = undefined;

  return exports;

}));
