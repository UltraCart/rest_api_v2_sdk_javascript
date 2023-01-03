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
    root.UltraCartRestApiV2.ConversationEventQueuePosition = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConversationEventQueuePosition model module.
   * @module com.ultracart.admin.v2.models/ConversationEventQueuePosition
   * @version 3.10.87
   */

  /**
   * Constructs a new <code>ConversationEventQueuePosition</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationEventQueuePosition
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationEventQueuePosition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationEventQueuePosition} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationEventQueuePosition} The populated <code>ConversationEventQueuePosition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('available'))
        obj.available = ApiClient.convertToType(data['available'], 'Boolean');
      if (data.hasOwnProperty('position'))
        obj.position = ApiClient.convertToType(data['position'], 'Number');
    }
    return obj;
  }

  /**
   * True if agents are logged into the queue
   * @member {Boolean} available
   */
  exports.prototype.available = undefined;

  /**
   * Position in the queue.  Value will be -1 if they cant be found in the queue.
   * @member {Number} position
   */
  exports.prototype.position = undefined;

  return exports;

}));
