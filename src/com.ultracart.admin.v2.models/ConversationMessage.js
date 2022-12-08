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
import ConversationMessageTransportStatus from './ConversationMessageTransportStatus';

/**
 * The ConversationMessage model module.
 * @module com.ultracart.admin.v2.models/ConversationMessage
 * @version 4.0.94-RC
 */
class ConversationMessage {
    /**
     * Constructs a new <code>ConversationMessage</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationMessage
     */
    constructor() { 
        
        ConversationMessage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationMessage} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationMessage} The populated <code>ConversationMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationMessage();

            if (data.hasOwnProperty('author_conversation_participant_arn')) {
                obj['author_conversation_participant_arn'] = ApiClient.convertToType(data['author_conversation_participant_arn'], 'String');
            }
            if (data.hasOwnProperty('author_conversation_participant_name')) {
                obj['author_conversation_participant_name'] = ApiClient.convertToType(data['author_conversation_participant_name'], 'String');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('client_message_id')) {
                obj['client_message_id'] = ApiClient.convertToType(data['client_message_id'], 'String');
            }
            if (data.hasOwnProperty('conversation_message_uuid')) {
                obj['conversation_message_uuid'] = ApiClient.convertToType(data['conversation_message_uuid'], 'String');
            }
            if (data.hasOwnProperty('delay_until_dts')) {
                obj['delay_until_dts'] = ApiClient.convertToType(data['delay_until_dts'], 'String');
            }
            if (data.hasOwnProperty('media_urls')) {
                obj['media_urls'] = ApiClient.convertToType(data['media_urls'], ['String']);
            }
            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('message_dts')) {
                obj['message_dts'] = ApiClient.convertToType(data['message_dts'], 'String');
            }
            if (data.hasOwnProperty('message_epoch')) {
                obj['message_epoch'] = ApiClient.convertToType(data['message_epoch'], 'Number');
            }
            if (data.hasOwnProperty('transport_statuses')) {
                obj['transport_statuses'] = ApiClient.convertToType(data['transport_statuses'], [ConversationMessageTransportStatus]);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('upload_keys')) {
                obj['upload_keys'] = ApiClient.convertToType(data['upload_keys'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} author_conversation_participant_arn
 */
ConversationMessage.prototype['author_conversation_participant_arn'] = undefined;

/**
 * @member {String} author_conversation_participant_name
 */
ConversationMessage.prototype['author_conversation_participant_name'] = undefined;

/**
 * @member {String} body
 */
ConversationMessage.prototype['body'] = undefined;

/**
 * @member {String} client_message_id
 */
ConversationMessage.prototype['client_message_id'] = undefined;

/**
 * @member {String} conversation_message_uuid
 */
ConversationMessage.prototype['conversation_message_uuid'] = undefined;

/**
 * Delay message transmission until date/time
 * @member {String} delay_until_dts
 */
ConversationMessage.prototype['delay_until_dts'] = undefined;

/**
 * @member {Array.<String>} media_urls
 */
ConversationMessage.prototype['media_urls'] = undefined;

/**
 * @member {String} merchant_id
 */
ConversationMessage.prototype['merchant_id'] = undefined;

/**
 * Message date/time
 * @member {String} message_dts
 */
ConversationMessage.prototype['message_dts'] = undefined;

/**
 * Message epoch milliseconds
 * @member {Number} message_epoch
 */
ConversationMessage.prototype['message_epoch'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ConversationMessageTransportStatus>} transport_statuses
 */
ConversationMessage.prototype['transport_statuses'] = undefined;

/**
 * Message type
 * @member {module:com.ultracart.admin.v2.models/ConversationMessage.TypeEnum} type
 */
ConversationMessage.prototype['type'] = undefined;

/**
 * @member {Array.<String>} upload_keys
 */
ConversationMessage.prototype['upload_keys'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ConversationMessage['TypeEnum'] = {

    /**
     * value: "message"
     * @const
     */
    "message": "message",

    /**
     * value: "notice"
     * @const
     */
    "notice": "notice"
};



export default ConversationMessage;

