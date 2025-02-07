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
    root.UltraCartRestApiV2.ConversationTwilioAccount = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConversationTwilioAccount model module.
   * @module com.ultracart.admin.v2.models/ConversationTwilioAccount
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>ConversationTwilioAccount</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationTwilioAccount
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationTwilioAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationTwilioAccount} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationTwilioAccount} The populated <code>ConversationTwilioAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('twilio_phone_numbers'))
        obj.twilio_phone_numbers = ApiClient.convertToType(data['twilio_phone_numbers'], ['String']);
    }
    return obj;
  }

  /**
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * @member {Array.<String>} twilio_phone_numbers
   */
  exports.prototype.twilio_phone_numbers = undefined;

  return exports;

}));
