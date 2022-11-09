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
    define(['ApiClient', 'com.ultracart.admin.v2.models/WebhookEventSubscription'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WebhookEventSubscription'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.WebhookEventCategory = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.WebhookEventSubscription);
  }
}(this, function(ApiClient, WebhookEventSubscription) {
  'use strict';

  /**
   * The WebhookEventCategory model module.
   * @module com.ultracart.admin.v2.models/WebhookEventCategory
   * @version 3.10.62
   */

  /**
   * Constructs a new <code>WebhookEventCategory</code>.
   * @alias module:com.ultracart.admin.v2.models/WebhookEventCategory
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>WebhookEventCategory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/WebhookEventCategory} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/WebhookEventCategory} The populated <code>WebhookEventCategory</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('any_subscribed'))
        obj.any_subscribed = ApiClient.convertToType(data['any_subscribed'], 'Boolean');
      if (data.hasOwnProperty('available_expansions'))
        obj.available_expansions = ApiClient.convertToType(data['available_expansions'], ['String']);
      if (data.hasOwnProperty('event_category'))
        obj.event_category = ApiClient.convertToType(data['event_category'], 'String');
      if (data.hasOwnProperty('events'))
        obj.events = ApiClient.convertToType(data['events'], [WebhookEventSubscription]);
      if (data.hasOwnProperty('subscribed'))
        obj.subscribed = ApiClient.convertToType(data['subscribed'], 'Boolean');
    }
    return obj;
  }

  /**
   * True if any events are subscribed to.
   * @member {Boolean} any_subscribed
   */
  exports.prototype.any_subscribed = undefined;

  /**
   * Array of available expansion constants
   * @member {Array.<String>} available_expansions
   */
  exports.prototype.available_expansions = undefined;

  /**
   * Name of the event category
   * @member {String} event_category
   */
  exports.prototype.event_category = undefined;

  /**
   * The events within the category.  Individual subscription flags contained within the child object.
   * @member {Array.<module:com.ultracart.admin.v2.models/WebhookEventSubscription>} events
   */
  exports.prototype.events = undefined;

  /**
   * True if all the events within this category are subscribed.  This is a convenience flag to make user interfaces easier.
   * @member {Boolean} subscribed
   */
  exports.prototype.subscribed = undefined;

  return exports;

}));
