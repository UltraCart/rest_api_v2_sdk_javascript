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
 * The ConversationEventTyping model module.
 * @module com.ultracart.admin.v2.models/ConversationEventTyping
 * @version 4.0.190
 */
class ConversationEventTyping {
    /**
     * Constructs a new <code>ConversationEventTyping</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationEventTyping
     */
    constructor() { 
        
        ConversationEventTyping.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationEventTyping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationEventTyping} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationEventTyping} The populated <code>ConversationEventTyping</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationEventTyping();

            if (data.hasOwnProperty('author_conversation_participant_arn')) {
                obj['author_conversation_participant_arn'] = ApiClient.convertToType(data['author_conversation_participant_arn'], 'String');
            }
            if (data.hasOwnProperty('author_conversation_participant_name')) {
                obj['author_conversation_participant_name'] = ApiClient.convertToType(data['author_conversation_participant_name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} author_conversation_participant_arn
 */
ConversationEventTyping.prototype['author_conversation_participant_arn'] = undefined;

/**
 * @member {String} author_conversation_participant_name
 */
ConversationEventTyping.prototype['author_conversation_participant_name'] = undefined;

/**
 * @member {String} value
 */
ConversationEventTyping.prototype['value'] = undefined;






export default ConversationEventTyping;

