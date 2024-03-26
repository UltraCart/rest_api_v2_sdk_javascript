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
    define(['ApiClient', 'com.ultracart.admin.v2.models/CartItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CartItem'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ConversationEventAddItem = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.CartItem);
  }
}(this, function(ApiClient, CartItem) {
  'use strict';

  /**
   * The ConversationEventAddItem model module.
   * @module com.ultracart.admin.v2.models/ConversationEventAddItem
   * @version 3.10.191
   */

  /**
   * Constructs a new <code>ConversationEventAddItem</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationEventAddItem
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationEventAddItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationEventAddItem} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationEventAddItem} The populated <code>ConversationEventAddItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('agent_arn'))
        obj.agent_arn = ApiClient.convertToType(data['agent_arn'], 'String');
      if (data.hasOwnProperty('agent_name'))
        obj.agent_name = ApiClient.convertToType(data['agent_name'], 'String');
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [CartItem]);
    }
    return obj;
  }

  /**
   * @member {String} agent_arn
   */
  exports.prototype.agent_arn = undefined;

  /**
   * @member {String} agent_name
   */
  exports.prototype.agent_name = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/CartItem>} items
   */
  exports.prototype.items = undefined;

  return exports;

}));
