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
 * The ConversationSummary model module.
 * @module com.ultracart.admin.v2.models/ConversationSummary
 * @version 4.0.39-RC
 */
class ConversationSummary {
    /**
     * Constructs a new <code>ConversationSummary</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationSummary
     */
    constructor() { 
        
        ConversationSummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationSummary} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationSummary} The populated <code>ConversationSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationSummary();

            if (data.hasOwnProperty('conversation_arn')) {
                obj['conversation_arn'] = ApiClient.convertToType(data['conversation_arn'], 'String');
            }
            if (data.hasOwnProperty('conversation_uuid')) {
                obj['conversation_uuid'] = ApiClient.convertToType(data['conversation_uuid'], 'String');
            }
            if (data.hasOwnProperty('last_conversation_message_body')) {
                obj['last_conversation_message_body'] = ApiClient.convertToType(data['last_conversation_message_body'], 'String');
            }
            if (data.hasOwnProperty('last_conversation_participant_arn')) {
                obj['last_conversation_participant_arn'] = ApiClient.convertToType(data['last_conversation_participant_arn'], 'String');
            }
            if (data.hasOwnProperty('last_conversation_participant_name')) {
                obj['last_conversation_participant_name'] = ApiClient.convertToType(data['last_conversation_participant_name'], 'String');
            }
            if (data.hasOwnProperty('last_message_dts')) {
                obj['last_message_dts'] = ApiClient.convertToType(data['last_message_dts'], 'String');
            }
            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('message_count')) {
                obj['message_count'] = ApiClient.convertToType(data['message_count'], 'Number');
            }
            if (data.hasOwnProperty('unread_messages')) {
                obj['unread_messages'] = ApiClient.convertToType(data['unread_messages'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} conversation_arn
 */
ConversationSummary.prototype['conversation_arn'] = undefined;

/**
 * @member {String} conversation_uuid
 */
ConversationSummary.prototype['conversation_uuid'] = undefined;

/**
 * @member {String} last_conversation_message_body
 */
ConversationSummary.prototype['last_conversation_message_body'] = undefined;

/**
 * @member {String} last_conversation_participant_arn
 */
ConversationSummary.prototype['last_conversation_participant_arn'] = undefined;

/**
 * @member {String} last_conversation_participant_name
 */
ConversationSummary.prototype['last_conversation_participant_name'] = undefined;

/**
 * Last message date/time
 * @member {String} last_message_dts
 */
ConversationSummary.prototype['last_message_dts'] = undefined;

/**
 * @member {String} merchant_id
 */
ConversationSummary.prototype['merchant_id'] = undefined;

/**
 * @member {Number} message_count
 */
ConversationSummary.prototype['message_count'] = undefined;

/**
 * @member {Boolean} unread_messages
 */
ConversationSummary.prototype['unread_messages'] = undefined;






export default ConversationSummary;

