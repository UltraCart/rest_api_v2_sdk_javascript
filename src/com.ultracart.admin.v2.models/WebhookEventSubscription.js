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
    root.UltraCartRestApiV2.WebhookEventSubscription = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The WebhookEventSubscription model module.
   * @module com.ultracart.admin.v2.models/WebhookEventSubscription
   * @version 3.10.53
   */

  /**
   * Constructs a new <code>WebhookEventSubscription</code>.
   * @alias module:com.ultracart.admin.v2.models/WebhookEventSubscription
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>WebhookEventSubscription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/WebhookEventSubscription} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/WebhookEventSubscription} The populated <code>WebhookEventSubscription</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('comments'))
        obj.comments = ApiClient.convertToType(data['comments'], 'String');
      if (data.hasOwnProperty('deprecated_flag'))
        obj.deprecated_flag = ApiClient.convertToType(data['deprecated_flag'], 'Boolean');
      if (data.hasOwnProperty('discontinued_flag'))
        obj.discontinued_flag = ApiClient.convertToType(data['discontinued_flag'], 'Boolean');
      if (data.hasOwnProperty('event_description'))
        obj.event_description = ApiClient.convertToType(data['event_description'], 'String');
      if (data.hasOwnProperty('event_name'))
        obj.event_name = ApiClient.convertToType(data['event_name'], 'String');
      if (data.hasOwnProperty('expansion'))
        obj.expansion = ApiClient.convertToType(data['expansion'], 'String');
      if (data.hasOwnProperty('subscribed'))
        obj.subscribed = ApiClient.convertToType(data['subscribed'], 'Boolean');
      if (data.hasOwnProperty('supports_reflow'))
        obj.supports_reflow = ApiClient.convertToType(data['supports_reflow'], 'Boolean');
      if (data.hasOwnProperty('webhook_event_oid'))
        obj.webhook_event_oid = ApiClient.convertToType(data['webhook_event_oid'], 'Number');
    }
    return obj;
  }

  /**
   * Comment about the event to provide further clarification to the end user
   * @member {String} comments
   */
  exports.prototype.comments = undefined;

  /**
   * True if the event is deprecated.  See the API change log for details on when it will be discontinued.
   * @member {Boolean} deprecated_flag
   */
  exports.prototype.deprecated_flag = undefined;

  /**
   * True if the event is discontinued.  See the API change log for details on migration details.
   * @member {Boolean} discontinued_flag
   */
  exports.prototype.discontinued_flag = undefined;

  /**
   * Description of the event
   * @member {String} event_description
   */
  exports.prototype.event_description = undefined;

  /**
   * Event name
   * @member {String} event_name
   */
  exports.prototype.event_name = undefined;

  /**
   * The expand string for the notification object.  See the individual resource _expand documentation for valid values.
   * @member {String} expansion
   */
  exports.prototype.expansion = undefined;

  /**
   * True if this is event is subscribed to
   * @member {Boolean} subscribed
   */
  exports.prototype.subscribed = undefined;

  /**
   * True if the event can be triggered to reflow existing records
   * @member {Boolean} supports_reflow
   */
  exports.prototype.supports_reflow = undefined;

  /**
   * The webhook event object identifier
   * @member {Number} webhook_event_oid
   */
  exports.prototype.webhook_event_oid = undefined;

  return exports;

}));
