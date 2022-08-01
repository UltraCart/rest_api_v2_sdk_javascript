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
 * The ConversationWebchatQueueStatusQueueEntry model module.
 * @module com.ultracart.admin.v2.models/ConversationWebchatQueueStatusQueueEntry
 * @version 4.0.47-RC
 */
class ConversationWebchatQueueStatusQueueEntry {
    /**
     * Constructs a new <code>ConversationWebchatQueueStatusQueueEntry</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusQueueEntry
     */
    constructor() { 
        
        ConversationWebchatQueueStatusQueueEntry.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationWebchatQueueStatusQueueEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusQueueEntry} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusQueueEntry} The populated <code>ConversationWebchatQueueStatusQueueEntry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationWebchatQueueStatusQueueEntry();

            if (data.hasOwnProperty('conversation_participant_arn')) {
                obj['conversation_participant_arn'] = ApiClient.convertToType(data['conversation_participant_arn'], 'String');
            }
            if (data.hasOwnProperty('conversation_participant_name')) {
                obj['conversation_participant_name'] = ApiClient.convertToType(data['conversation_participant_name'], 'String');
            }
            if (data.hasOwnProperty('conversation_webchat_queue_uuid')) {
                obj['conversation_webchat_queue_uuid'] = ApiClient.convertToType(data['conversation_webchat_queue_uuid'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('join_dts')) {
                obj['join_dts'] = ApiClient.convertToType(data['join_dts'], 'String');
            }
            if (data.hasOwnProperty('question')) {
                obj['question'] = ApiClient.convertToType(data['question'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} conversation_participant_arn
 */
ConversationWebchatQueueStatusQueueEntry.prototype['conversation_participant_arn'] = undefined;

/**
 * @member {String} conversation_participant_name
 */
ConversationWebchatQueueStatusQueueEntry.prototype['conversation_participant_name'] = undefined;

/**
 * @member {String} conversation_webchat_queue_uuid
 */
ConversationWebchatQueueStatusQueueEntry.prototype['conversation_webchat_queue_uuid'] = undefined;

/**
 * @member {String} email
 */
ConversationWebchatQueueStatusQueueEntry.prototype['email'] = undefined;

/**
 * Date/time the customer joined the queue
 * @member {String} join_dts
 */
ConversationWebchatQueueStatusQueueEntry.prototype['join_dts'] = undefined;

/**
 * @member {String} question
 */
ConversationWebchatQueueStatusQueueEntry.prototype['question'] = undefined;






export default ConversationWebchatQueueStatusQueueEntry;

