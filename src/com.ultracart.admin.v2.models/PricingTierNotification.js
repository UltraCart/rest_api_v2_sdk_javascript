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
    root.UltraCartRestApiV2.PricingTierNotification = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PricingTierNotification model module.
   * @module com.ultracart.admin.v2.models/PricingTierNotification
   * @version 3.10.3
   */

  /**
   * Constructs a new <code>PricingTierNotification</code>.
   * @alias module:com.ultracart.admin.v2.models/PricingTierNotification
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PricingTierNotification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/PricingTierNotification} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/PricingTierNotification} The populated <code>PricingTierNotification</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('format'))
        obj.format = ApiClient.convertToType(data['format'], 'String');
      if (data.hasOwnProperty('subject'))
        obj.subject = ApiClient.convertToType(data['subject'], 'String');
      if (data.hasOwnProperty('text'))
        obj.text = ApiClient.convertToType(data['text'], 'String');
    }
    return obj;
  }

  /**
   * Notification format
   * @member {String} format
   */
  exports.prototype.format = undefined;

  /**
   * Notification subject
   * @member {String} subject
   */
  exports.prototype.subject = undefined;

  /**
   * Notification text
   * @member {String} text
   */
  exports.prototype.text = undefined;

  return exports;

}));
