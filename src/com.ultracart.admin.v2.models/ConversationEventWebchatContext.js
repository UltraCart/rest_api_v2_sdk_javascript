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
    root.UltraCartRestApiV2.ConversationEventWebchatContext = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConversationEventWebchatContext model module.
   * @module com.ultracart.admin.v2.models/ConversationEventWebchatContext
   * @version 3.10.68
   */

  /**
   * Constructs a new <code>ConversationEventWebchatContext</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationEventWebchatContext
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationEventWebchatContext</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationEventWebchatContext} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationEventWebchatContext} The populated <code>ConversationEventWebchatContext</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('cart_id'))
        obj.cart_id = ApiClient.convertToType(data['cart_id'], 'String');
      if (data.hasOwnProperty('ucacid'))
        obj.ucacid = ApiClient.convertToType(data['ucacid'], 'String');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} cart_id
   */
  exports.prototype.cart_id = undefined;

  /**
   * @member {String} ucacid
   */
  exports.prototype.ucacid = undefined;

  /**
   * @member {String} url
   */
  exports.prototype.url = undefined;

  return exports;

}));
