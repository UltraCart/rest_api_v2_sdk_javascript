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
 * The WebhookReflow model module.
 * @module com.ultracart.admin.v2.models/WebhookReflow
 * @version 4.0.244
 */
class WebhookReflow {
    /**
     * Constructs a new <code>WebhookReflow</code>.
     * @alias module:com.ultracart.admin.v2.models/WebhookReflow
     */
    constructor() { 
        
        WebhookReflow.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookReflow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/WebhookReflow} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/WebhookReflow} The populated <code>WebhookReflow</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookReflow();

            if (data.hasOwnProperty('event_name')) {
                obj['event_name'] = ApiClient.convertToType(data['event_name'], 'String');
            }
            if (data.hasOwnProperty('queued')) {
                obj['queued'] = ApiClient.convertToType(data['queued'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} event_name
 */
WebhookReflow.prototype['event_name'] = undefined;

/**
 * @member {Boolean} queued
 */
WebhookReflow.prototype['queued'] = undefined;






export default WebhookReflow;

