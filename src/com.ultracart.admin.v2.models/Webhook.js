/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ApiUserApplicationProfile from './ApiUserApplicationProfile';
import WebhookEventCategory from './WebhookEventCategory';

/**
 * The Webhook model module.
 * @module com.ultracart.admin.v2.models/Webhook
 * @version 4.0.165
 */
class Webhook {
    /**
     * Constructs a new <code>Webhook</code>.
     * @alias module:com.ultracart.admin.v2.models/Webhook
     */
    constructor() { 
        
        Webhook.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Webhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Webhook} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Webhook} The populated <code>Webhook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Webhook();

            if (data.hasOwnProperty('api_user_oid')) {
                obj['api_user_oid'] = ApiClient.convertToType(data['api_user_oid'], 'Number');
            }
            if (data.hasOwnProperty('api_version')) {
                obj['api_version'] = ApiClient.convertToType(data['api_version'], 'String');
            }
            if (data.hasOwnProperty('application_profile')) {
                obj['application_profile'] = ApiUserApplicationProfile.constructFromObject(data['application_profile']);
            }
            if (data.hasOwnProperty('authentication_type')) {
                obj['authentication_type'] = ApiClient.convertToType(data['authentication_type'], 'String');
            }
            if (data.hasOwnProperty('basic_password')) {
                obj['basic_password'] = ApiClient.convertToType(data['basic_password'], 'String');
            }
            if (data.hasOwnProperty('basic_username')) {
                obj['basic_username'] = ApiClient.convertToType(data['basic_username'], 'String');
            }
            if (data.hasOwnProperty('compress_events')) {
                obj['compress_events'] = ApiClient.convertToType(data['compress_events'], 'Boolean');
            }
            if (data.hasOwnProperty('consecutive_failures')) {
                obj['consecutive_failures'] = ApiClient.convertToType(data['consecutive_failures'], 'Number');
            }
            if (data.hasOwnProperty('disabled')) {
                obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
            }
            if (data.hasOwnProperty('event_categories')) {
                obj['event_categories'] = ApiClient.convertToType(data['event_categories'], [WebhookEventCategory]);
            }
            if (data.hasOwnProperty('iam_access_key')) {
                obj['iam_access_key'] = ApiClient.convertToType(data['iam_access_key'], 'String');
            }
            if (data.hasOwnProperty('iam_secret_key')) {
                obj['iam_secret_key'] = ApiClient.convertToType(data['iam_secret_key'], 'String');
            }
            if (data.hasOwnProperty('maximum_events')) {
                obj['maximum_events'] = ApiClient.convertToType(data['maximum_events'], 'Number');
            }
            if (data.hasOwnProperty('maximum_size')) {
                obj['maximum_size'] = ApiClient.convertToType(data['maximum_size'], 'Number');
            }
            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('next_retry_after')) {
                obj['next_retry_after'] = ApiClient.convertToType(data['next_retry_after'], 'String');
            }
            if (data.hasOwnProperty('pending')) {
                obj['pending'] = ApiClient.convertToType(data['pending'], 'Number');
            }
            if (data.hasOwnProperty('webhook_oid')) {
                obj['webhook_oid'] = ApiClient.convertToType(data['webhook_oid'], 'Number');
            }
            if (data.hasOwnProperty('webhook_url')) {
                obj['webhook_url'] = ApiClient.convertToType(data['webhook_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Populated if webhook associated with an API user
 * @member {Number} api_user_oid
 */
Webhook.prototype['api_user_oid'] = undefined;

/**
 * Version of the API objects that are sent in notifications
 * @member {module:com.ultracart.admin.v2.models/Webhook.ApiVersionEnum} api_version
 */
Webhook.prototype['api_version'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ApiUserApplicationProfile} application_profile
 */
Webhook.prototype['application_profile'] = undefined;

/**
 * The type of authentication this webhook will use when communicating with your server
 * @member {module:com.ultracart.admin.v2.models/Webhook.AuthenticationTypeEnum} authentication_type
 */
Webhook.prototype['authentication_type'] = undefined;

/**
 * Basic authentication password
 * @member {String} basic_password
 */
Webhook.prototype['basic_password'] = undefined;

/**
 * Basic authentication user name
 * @member {String} basic_username
 */
Webhook.prototype['basic_username'] = undefined;

/**
 * Compress events with GZIP then base 64 encode them as a string
 * @member {Boolean} compress_events
 */
Webhook.prototype['compress_events'] = undefined;

/**
 * The number of consecutive failures that have occurred trying to deliver notifications to the target server
 * @member {Number} consecutive_failures
 */
Webhook.prototype['consecutive_failures'] = undefined;

/**
 * True if the webhook has been disabled
 * @member {Boolean} disabled
 */
Webhook.prototype['disabled'] = undefined;

/**
 * The categories of events.  Individual events and subscriptions are handled in the child objects.  _placeholders parameter effects the population of this on a retrieval.
 * @member {Array.<module:com.ultracart.admin.v2.models/WebhookEventCategory>} event_categories
 */
Webhook.prototype['event_categories'] = undefined;

/**
 * IAM Access Key for AWS SQS Delivery
 * @member {String} iam_access_key
 */
Webhook.prototype['iam_access_key'] = undefined;

/**
 * IAM Secret Key for AWS SQS Delivery
 * @member {String} iam_secret_key
 */
Webhook.prototype['iam_secret_key'] = undefined;

/**
 * The maximum number of events in the payload that UltraCart will deliver
 * @member {Number} maximum_events
 */
Webhook.prototype['maximum_events'] = undefined;

/**
 * The maximum size of the payload that UltraCart will deliver
 * @member {Number} maximum_size
 */
Webhook.prototype['maximum_size'] = undefined;

/**
 * The UltraCart merchant ID that owns this webhook
 * @member {String} merchant_id
 */
Webhook.prototype['merchant_id'] = undefined;

/**
 * The next time UltraCart will attempt delivery if failures have been occurring
 * @member {String} next_retry_after
 */
Webhook.prototype['next_retry_after'] = undefined;

/**
 * The number of pending events for this webhook
 * @member {Number} pending
 */
Webhook.prototype['pending'] = undefined;

/**
 * The object identifier for this webhook
 * @member {Number} webhook_oid
 */
Webhook.prototype['webhook_oid'] = undefined;

/**
 * The URL to deliver events to.  Must be HTTPS for customer related information.
 * @member {String} webhook_url
 */
Webhook.prototype['webhook_url'] = undefined;





/**
 * Allowed values for the <code>api_version</code> property.
 * @enum {String}
 * @readonly
 */
Webhook['ApiVersionEnum'] = {

    /**
     * value: "2017-03-01"
     * @const
     */
    "2017-03-01": "2017-03-01"
};


/**
 * Allowed values for the <code>authentication_type</code> property.
 * @enum {String}
 * @readonly
 */
Webhook['AuthenticationTypeEnum'] = {

    /**
     * value: "none"
     * @const
     */
    "none": "none",

    /**
     * value: "basic"
     * @const
     */
    "basic": "basic"
};



export default Webhook;

