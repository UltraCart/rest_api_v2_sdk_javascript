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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ApiUserApplicationProfile', 'com.ultracart.admin.v2.models/WebhookEventCategory'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ApiUserApplicationProfile'), require('./WebhookEventCategory'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.Webhook = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ApiUserApplicationProfile, root.UltraCartRestApiV2.WebhookEventCategory);
  }
}(this, function(ApiClient, ApiUserApplicationProfile, WebhookEventCategory) {
  'use strict';

  /**
   * The Webhook model module.
   * @module com.ultracart.admin.v2.models/Webhook
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>Webhook</code>.
   * @alias module:com.ultracart.admin.v2.models/Webhook
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Webhook</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/Webhook} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/Webhook} The populated <code>Webhook</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('api_user_oid'))
        obj.api_user_oid = ApiClient.convertToType(data['api_user_oid'], 'Number');
      if (data.hasOwnProperty('api_version'))
        obj.api_version = ApiClient.convertToType(data['api_version'], 'String');
      if (data.hasOwnProperty('application_profile'))
        obj.application_profile = ApiUserApplicationProfile.constructFromObject(data['application_profile']);
      if (data.hasOwnProperty('authentication_type'))
        obj.authentication_type = ApiClient.convertToType(data['authentication_type'], 'String');
      if (data.hasOwnProperty('basic_password'))
        obj.basic_password = ApiClient.convertToType(data['basic_password'], 'String');
      if (data.hasOwnProperty('basic_username'))
        obj.basic_username = ApiClient.convertToType(data['basic_username'], 'String');
      if (data.hasOwnProperty('consecutive_failures'))
        obj.consecutive_failures = ApiClient.convertToType(data['consecutive_failures'], 'Number');
      if (data.hasOwnProperty('disabled'))
        obj.disabled = ApiClient.convertToType(data['disabled'], 'Boolean');
      if (data.hasOwnProperty('event_categories'))
        obj.event_categories = ApiClient.convertToType(data['event_categories'], [WebhookEventCategory]);
      if (data.hasOwnProperty('iam_access_key'))
        obj.iam_access_key = ApiClient.convertToType(data['iam_access_key'], 'String');
      if (data.hasOwnProperty('iam_secret_key'))
        obj.iam_secret_key = ApiClient.convertToType(data['iam_secret_key'], 'String');
      if (data.hasOwnProperty('maximum_events'))
        obj.maximum_events = ApiClient.convertToType(data['maximum_events'], 'Number');
      if (data.hasOwnProperty('maximum_size'))
        obj.maximum_size = ApiClient.convertToType(data['maximum_size'], 'Number');
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('next_retry_after'))
        obj.next_retry_after = ApiClient.convertToType(data['next_retry_after'], 'String');
      if (data.hasOwnProperty('pending'))
        obj.pending = ApiClient.convertToType(data['pending'], 'Number');
      if (data.hasOwnProperty('webhook_oid'))
        obj.webhook_oid = ApiClient.convertToType(data['webhook_oid'], 'Number');
      if (data.hasOwnProperty('webhook_url'))
        obj.webhook_url = ApiClient.convertToType(data['webhook_url'], 'String');
    }
    return obj;
  }

  /**
   * Populated if webhook associated with an API user
   * @member {Number} api_user_oid
   */
  exports.prototype.api_user_oid = undefined;

  /**
   * Version of the API objects that are sent in notifications
   * @member {module:com.ultracart.admin.v2.models/Webhook.ApiVersionEnum} api_version
   */
  exports.prototype.api_version = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ApiUserApplicationProfile} application_profile
   */
  exports.prototype.application_profile = undefined;

  /**
   * The type of authentication this webhook will use when communicating with your server
   * @member {module:com.ultracart.admin.v2.models/Webhook.AuthenticationTypeEnum} authentication_type
   */
  exports.prototype.authentication_type = undefined;

  /**
   * Basic authentication password
   * @member {String} basic_password
   */
  exports.prototype.basic_password = undefined;

  /**
   * Basic authentication user name
   * @member {String} basic_username
   */
  exports.prototype.basic_username = undefined;

  /**
   * The number of consecutive failures that have occurred trying to deliver notifications to the target server
   * @member {Number} consecutive_failures
   */
  exports.prototype.consecutive_failures = undefined;

  /**
   * True if the webhook has been disabled
   * @member {Boolean} disabled
   */
  exports.prototype.disabled = undefined;

  /**
   * The categories of events.  Individual events and subscriptions are handled in the child objects.  _placeholders parameter effects the population of this on a retrieval.
   * @member {Array.<module:com.ultracart.admin.v2.models/WebhookEventCategory>} event_categories
   */
  exports.prototype.event_categories = undefined;

  /**
   * IAM Access Key for AWS SQS Delivery
   * @member {String} iam_access_key
   */
  exports.prototype.iam_access_key = undefined;

  /**
   * IAM Secret Key for AWS SQS Delivery
   * @member {String} iam_secret_key
   */
  exports.prototype.iam_secret_key = undefined;

  /**
   * The maximum number of events in the payload that UltraCart will deliver
   * @member {Number} maximum_events
   */
  exports.prototype.maximum_events = undefined;

  /**
   * The maximum size of the payload that UltraCart will deliver
   * @member {Number} maximum_size
   */
  exports.prototype.maximum_size = undefined;

  /**
   * The UltraCart merchant ID that owns this webhook
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * The next time UltraCart will attempt delivery if failures have been occurring
   * @member {String} next_retry_after
   */
  exports.prototype.next_retry_after = undefined;

  /**
   * The number of pending events for this webhook
   * @member {Number} pending
   */
  exports.prototype.pending = undefined;

  /**
   * The object identifier for this webhook
   * @member {Number} webhook_oid
   */
  exports.prototype.webhook_oid = undefined;

  /**
   * The URL to deliver events to.  Must be HTTPS for customer related information.
   * @member {String} webhook_url
   */
  exports.prototype.webhook_url = undefined;


  /**
   * Allowed values for the <code>api_version</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ApiVersionEnum = {
    /**
     * value: "2017-03-01"
     * @const
     */
    _2017_03_01: "2017-03-01"
  };


  /**
   * Allowed values for the <code>authentication_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AuthenticationTypeEnum = {
    /**
     * value: "none"
     * @const
     */
    none: "none",

    /**
     * value: "basic"
     * @const
     */
    basic: "basic"
  };

  return exports;

}));
