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
import WebhookEventSubscription from './WebhookEventSubscription';

/**
 * The WebhookEventCategory model module.
 * @module com.ultracart.admin.v2.models/WebhookEventCategory
 * @version 4.0.3
 */
class WebhookEventCategory {
    /**
     * Constructs a new <code>WebhookEventCategory</code>.
     * @alias module:com.ultracart.admin.v2.models/WebhookEventCategory
     */
    constructor() { 
        
        WebhookEventCategory.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookEventCategory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/WebhookEventCategory} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/WebhookEventCategory} The populated <code>WebhookEventCategory</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookEventCategory();

            if (data.hasOwnProperty('any_subscribed')) {
                obj['any_subscribed'] = ApiClient.convertToType(data['any_subscribed'], 'Boolean');
            }
            if (data.hasOwnProperty('available_expansions')) {
                obj['available_expansions'] = ApiClient.convertToType(data['available_expansions'], ['String']);
            }
            if (data.hasOwnProperty('event_category')) {
                obj['event_category'] = ApiClient.convertToType(data['event_category'], 'String');
            }
            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], [WebhookEventSubscription]);
            }
            if (data.hasOwnProperty('subscribed')) {
                obj['subscribed'] = ApiClient.convertToType(data['subscribed'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * True if any events are subscribed to.
 * @member {Boolean} any_subscribed
 */
WebhookEventCategory.prototype['any_subscribed'] = undefined;

/**
 * Array of available expansion constants
 * @member {Array.<String>} available_expansions
 */
WebhookEventCategory.prototype['available_expansions'] = undefined;

/**
 * Name of the event category
 * @member {String} event_category
 */
WebhookEventCategory.prototype['event_category'] = undefined;

/**
 * The events within the category.  Individual subscription flags contained within the child object.
 * @member {Array.<module:com.ultracart.admin.v2.models/WebhookEventSubscription>} events
 */
WebhookEventCategory.prototype['events'] = undefined;

/**
 * True if all the events within this category are subscribed.  This is a convenience flag to make user interfaces easier.
 * @member {Boolean} subscribed
 */
WebhookEventCategory.prototype['subscribed'] = undefined;






export default WebhookEventCategory;

