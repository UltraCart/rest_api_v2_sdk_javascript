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
    root.UltraCartRestApiV2.ConversationEventRRWeb = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConversationEventRRWeb model module.
   * @module com.ultracart.admin.v2.models/ConversationEventRRWeb
   * @version 3.10.133
   */

  /**
   * Constructs a new <code>ConversationEventRRWeb</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationEventRRWeb
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationEventRRWeb</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationEventRRWeb} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationEventRRWeb} The populated <code>ConversationEventRRWeb</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], 'String');
      if (data.hasOwnProperty('data_part'))
        obj.data_part = ApiClient.convertToType(data['data_part'], 'Number');
      if (data.hasOwnProperty('data_sha256'))
        obj.data_sha256 = ApiClient.convertToType(data['data_sha256'], 'String');
      if (data.hasOwnProperty('data_total_parts'))
        obj.data_total_parts = ApiClient.convertToType(data['data_total_parts'], 'Number');
      if (data.hasOwnProperty('data_total_sha256'))
        obj.data_total_sha256 = ApiClient.convertToType(data['data_total_sha256'], 'String');
      if (data.hasOwnProperty('event_index'))
        obj.event_index = ApiClient.convertToType(data['event_index'], 'Number');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} data
   */
  exports.prototype.data = undefined;

  /**
   * @member {Number} data_part
   */
  exports.prototype.data_part = undefined;

  /**
   * @member {String} data_sha256
   */
  exports.prototype.data_sha256 = undefined;

  /**
   * @member {Number} data_total_parts
   */
  exports.prototype.data_total_parts = undefined;

  /**
   * @member {String} data_total_sha256
   */
  exports.prototype.data_total_sha256 = undefined;

  /**
   * @member {Number} event_index
   */
  exports.prototype.event_index = undefined;

  /**
   * Type of event
   * @member {module:com.ultracart.admin.v2.models/ConversationEventRRWeb.TypeEnum} type
   */
  exports.prototype.type = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "init"
     * @const
     */
    init: "init",

    /**
     * value: "events"
     * @const
     */
    events: "events"
  };

  return exports;

}));
