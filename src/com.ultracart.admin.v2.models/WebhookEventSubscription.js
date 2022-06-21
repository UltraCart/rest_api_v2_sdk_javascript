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

/**
 * The WebhookEventSubscription model module.
 * @module com.ultracart.admin.v2.models/WebhookEventSubscription
 * @version 4.0.5
 */
class WebhookEventSubscription {
    /**
     * Constructs a new <code>WebhookEventSubscription</code>.
     * @alias module:com.ultracart.admin.v2.models/WebhookEventSubscription
     */
    constructor() { 
        
        WebhookEventSubscription.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookEventSubscription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/WebhookEventSubscription} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/WebhookEventSubscription} The populated <code>WebhookEventSubscription</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookEventSubscription();

            if (data.hasOwnProperty('comments')) {
                obj['comments'] = ApiClient.convertToType(data['comments'], 'String');
            }
            if (data.hasOwnProperty('deprecated_flag')) {
                obj['deprecated_flag'] = ApiClient.convertToType(data['deprecated_flag'], 'Boolean');
            }
            if (data.hasOwnProperty('discontinued_flag')) {
                obj['discontinued_flag'] = ApiClient.convertToType(data['discontinued_flag'], 'Boolean');
            }
            if (data.hasOwnProperty('event_description')) {
                obj['event_description'] = ApiClient.convertToType(data['event_description'], 'String');
            }
            if (data.hasOwnProperty('event_name')) {
                obj['event_name'] = ApiClient.convertToType(data['event_name'], 'String');
            }
            if (data.hasOwnProperty('expansion')) {
                obj['expansion'] = ApiClient.convertToType(data['expansion'], 'String');
            }
            if (data.hasOwnProperty('subscribed')) {
                obj['subscribed'] = ApiClient.convertToType(data['subscribed'], 'Boolean');
            }
            if (data.hasOwnProperty('supports_reflow')) {
                obj['supports_reflow'] = ApiClient.convertToType(data['supports_reflow'], 'Boolean');
            }
            if (data.hasOwnProperty('webhook_event_oid')) {
                obj['webhook_event_oid'] = ApiClient.convertToType(data['webhook_event_oid'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Comment about the event to provide further clarification to the end user
 * @member {String} comments
 */
WebhookEventSubscription.prototype['comments'] = undefined;

/**
 * True if the event is deprecated.  See the API change log for details on when it will be discontinued.
 * @member {Boolean} deprecated_flag
 */
WebhookEventSubscription.prototype['deprecated_flag'] = undefined;

/**
 * True if the event is discontinued.  See the API change log for details on migration details.
 * @member {Boolean} discontinued_flag
 */
WebhookEventSubscription.prototype['discontinued_flag'] = undefined;

/**
 * Description of the event
 * @member {String} event_description
 */
WebhookEventSubscription.prototype['event_description'] = undefined;

/**
 * Event name
 * @member {String} event_name
 */
WebhookEventSubscription.prototype['event_name'] = undefined;

/**
 * The expand string for the notification object.  See the individual resource _expand documentation for valid values.
 * @member {String} expansion
 */
WebhookEventSubscription.prototype['expansion'] = undefined;

/**
 * True if this is event is subscribed to
 * @member {Boolean} subscribed
 */
WebhookEventSubscription.prototype['subscribed'] = undefined;

/**
 * True if the event can be triggered to reflow existing records
 * @member {Boolean} supports_reflow
 */
WebhookEventSubscription.prototype['supports_reflow'] = undefined;

/**
 * The webhook event object identifier
 * @member {Number} webhook_event_oid
 */
WebhookEventSubscription.prototype['webhook_event_oid'] = undefined;






export default WebhookEventSubscription;

