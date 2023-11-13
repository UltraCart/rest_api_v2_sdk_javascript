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
 * The ConversationEventRRWeb model module.
 * @module com.ultracart.admin.v2.models/ConversationEventRRWeb
 * @version 4.0.188
 */
class ConversationEventRRWeb {
    /**
     * Constructs a new <code>ConversationEventRRWeb</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationEventRRWeb
     */
    constructor() { 
        
        ConversationEventRRWeb.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationEventRRWeb</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationEventRRWeb} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationEventRRWeb} The populated <code>ConversationEventRRWeb</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationEventRRWeb();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('data_part')) {
                obj['data_part'] = ApiClient.convertToType(data['data_part'], 'Number');
            }
            if (data.hasOwnProperty('data_sha256')) {
                obj['data_sha256'] = ApiClient.convertToType(data['data_sha256'], 'String');
            }
            if (data.hasOwnProperty('data_total_parts')) {
                obj['data_total_parts'] = ApiClient.convertToType(data['data_total_parts'], 'Number');
            }
            if (data.hasOwnProperty('data_total_sha256')) {
                obj['data_total_sha256'] = ApiClient.convertToType(data['data_total_sha256'], 'String');
            }
            if (data.hasOwnProperty('event_index')) {
                obj['event_index'] = ApiClient.convertToType(data['event_index'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} data
 */
ConversationEventRRWeb.prototype['data'] = undefined;

/**
 * @member {Number} data_part
 */
ConversationEventRRWeb.prototype['data_part'] = undefined;

/**
 * @member {String} data_sha256
 */
ConversationEventRRWeb.prototype['data_sha256'] = undefined;

/**
 * @member {Number} data_total_parts
 */
ConversationEventRRWeb.prototype['data_total_parts'] = undefined;

/**
 * @member {String} data_total_sha256
 */
ConversationEventRRWeb.prototype['data_total_sha256'] = undefined;

/**
 * @member {Number} event_index
 */
ConversationEventRRWeb.prototype['event_index'] = undefined;

/**
 * Type of event
 * @member {module:com.ultracart.admin.v2.models/ConversationEventRRWeb.TypeEnum} type
 */
ConversationEventRRWeb.prototype['type'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ConversationEventRRWeb['TypeEnum'] = {

    /**
     * value: "init"
     * @const
     */
    "init": "init",

    /**
     * value: "events"
     * @const
     */
    "events": "events"
};



export default ConversationEventRRWeb;

