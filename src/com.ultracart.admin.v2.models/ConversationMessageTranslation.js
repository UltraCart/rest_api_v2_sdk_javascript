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
    root.UltraCartRestApiV2.ConversationMessageTranslation = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConversationMessageTranslation model module.
   * @module com.ultracart.admin.v2.models/ConversationMessageTranslation
   * @version 3.10.198
   */

  /**
   * Constructs a new <code>ConversationMessageTranslation</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationMessageTranslation
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationMessageTranslation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationMessageTranslation} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationMessageTranslation} The populated <code>ConversationMessageTranslation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('body'))
        obj.body = ApiClient.convertToType(data['body'], 'String');
      if (data.hasOwnProperty('language_iso_code'))
        obj.language_iso_code = ApiClient.convertToType(data['language_iso_code'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} body
   */
  exports.prototype.body = undefined;

  /**
   * @member {String} language_iso_code
   */
  exports.prototype.language_iso_code = undefined;

  return exports;

}));
