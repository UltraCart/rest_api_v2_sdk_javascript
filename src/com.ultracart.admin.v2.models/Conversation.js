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
import ConversationMessage from './ConversationMessage';
import ConversationParticipant from './ConversationParticipant';
import ConversationSentiment from './ConversationSentiment';

/**
 * The Conversation model module.
 * @module com.ultracart.admin.v2.models/Conversation
 * @version 4.0.187
 */
class Conversation {
    /**
     * Constructs a new <code>Conversation</code>.
     * @alias module:com.ultracart.admin.v2.models/Conversation
     */
    constructor() { 
        
        Conversation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Conversation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Conversation} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Conversation} The populated <code>Conversation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Conversation();

            if (data.hasOwnProperty('base_language_iso_code')) {
                obj['base_language_iso_code'] = ApiClient.convertToType(data['base_language_iso_code'], 'String');
            }
            if (data.hasOwnProperty('closed')) {
                obj['closed'] = ApiClient.convertToType(data['closed'], 'Boolean');
            }
            if (data.hasOwnProperty('conversation_arn')) {
                obj['conversation_arn'] = ApiClient.convertToType(data['conversation_arn'], 'String');
            }
            if (data.hasOwnProperty('conversation_uuid')) {
                obj['conversation_uuid'] = ApiClient.convertToType(data['conversation_uuid'], 'String');
            }
            if (data.hasOwnProperty('customer_first_message_unresponded_to_dts')) {
                obj['customer_first_message_unresponded_to_dts'] = ApiClient.convertToType(data['customer_first_message_unresponded_to_dts'], 'String');
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
            if (data.hasOwnProperty('last_interactive_message_dts')) {
                obj['last_interactive_message_dts'] = ApiClient.convertToType(data['last_interactive_message_dts'], 'String');
            }
            if (data.hasOwnProperty('last_message_dts')) {
                obj['last_message_dts'] = ApiClient.convertToType(data['last_message_dts'], 'String');
            }
            if (data.hasOwnProperty('medium')) {
                obj['medium'] = ApiClient.convertToType(data['medium'], 'String');
            }
            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('message_count')) {
                obj['message_count'] = ApiClient.convertToType(data['message_count'], 'Number');
            }
            if (data.hasOwnProperty('messages')) {
                obj['messages'] = ApiClient.convertToType(data['messages'], [ConversationMessage]);
            }
            if (data.hasOwnProperty('participants')) {
                obj['participants'] = ApiClient.convertToType(data['participants'], [ConversationParticipant]);
            }
            if (data.hasOwnProperty('sentiment')) {
                obj['sentiment'] = ConversationSentiment.constructFromObject(data['sentiment']);
            }
            if (data.hasOwnProperty('start_dts')) {
                obj['start_dts'] = ApiClient.convertToType(data['start_dts'], 'String');
            }
            if (data.hasOwnProperty('unread_messages')) {
                obj['unread_messages'] = ApiClient.convertToType(data['unread_messages'], 'Boolean');
            }
            if (data.hasOwnProperty('visible')) {
                obj['visible'] = ApiClient.convertToType(data['visible'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The base language iso code for the StoreFront that everything is translated into
 * @member {String} base_language_iso_code
 */
Conversation.prototype['base_language_iso_code'] = undefined;

/**
 * @member {Boolean} closed
 */
Conversation.prototype['closed'] = undefined;

/**
 * @member {String} conversation_arn
 */
Conversation.prototype['conversation_arn'] = undefined;

/**
 * @member {String} conversation_uuid
 */
Conversation.prototype['conversation_uuid'] = undefined;

/**
 * Date/time of the first customer message that is unresponded to.
 * @member {String} customer_first_message_unresponded_to_dts
 */
Conversation.prototype['customer_first_message_unresponded_to_dts'] = undefined;

/**
 * @member {String} last_conversation_message_body
 */
Conversation.prototype['last_conversation_message_body'] = undefined;

/**
 * @member {String} last_conversation_participant_arn
 */
Conversation.prototype['last_conversation_participant_arn'] = undefined;

/**
 * @member {String} last_conversation_participant_name
 */
Conversation.prototype['last_conversation_participant_name'] = undefined;

/**
 * Last interactive message date/time
 * @member {String} last_interactive_message_dts
 */
Conversation.prototype['last_interactive_message_dts'] = undefined;

/**
 * Last message date/time
 * @member {String} last_message_dts
 */
Conversation.prototype['last_message_dts'] = undefined;

/**
 * The communication medium of the customer.
 * @member {module:com.ultracart.admin.v2.models/Conversation.MediumEnum} medium
 */
Conversation.prototype['medium'] = undefined;

/**
 * @member {String} merchant_id
 */
Conversation.prototype['merchant_id'] = undefined;

/**
 * @member {Number} message_count
 */
Conversation.prototype['message_count'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ConversationMessage>} messages
 */
Conversation.prototype['messages'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ConversationParticipant>} participants
 */
Conversation.prototype['participants'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ConversationSentiment} sentiment
 */
Conversation.prototype['sentiment'] = undefined;

/**
 * Start of the conversation date/time
 * @member {String} start_dts
 */
Conversation.prototype['start_dts'] = undefined;

/**
 * @member {Boolean} unread_messages
 */
Conversation.prototype['unread_messages'] = undefined;

/**
 * @member {Boolean} visible
 */
Conversation.prototype['visible'] = undefined;





/**
 * Allowed values for the <code>medium</code> property.
 * @enum {String}
 * @readonly
 */
Conversation['MediumEnum'] = {

    /**
     * value: "sms"
     * @const
     */
    "sms": "sms",

    /**
     * value: "websocket"
     * @const
     */
    "websocket": "websocket"
};



export default Conversation;

