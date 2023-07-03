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
import ConversationEventAddCoupon from './ConversationEventAddCoupon';
import ConversationEventAddItem from './ConversationEventAddItem';
import ConversationEventQueuePosition from './ConversationEventQueuePosition';
import ConversationEventRRWeb from './ConversationEventRRWeb';
import ConversationEventReadMessage from './ConversationEventReadMessage';
import ConversationEventTyping from './ConversationEventTyping';
import ConversationEventWebchatContext from './ConversationEventWebchatContext';
import ConversationMessage from './ConversationMessage';
import ConversationParticipant from './ConversationParticipant';
import ConversationSummary from './ConversationSummary';
import ConversationWebchatQueueStatus from './ConversationWebchatQueueStatus';
import ConversationWebchatQueueStatusQueueEntry from './ConversationWebchatQueueStatusQueueEntry';

/**
 * The ConversationWebsocketMessage model module.
 * @module com.ultracart.admin.v2.models/ConversationWebsocketMessage
 * @version 4.0.165
 */
class ConversationWebsocketMessage {
    /**
     * Constructs a new <code>ConversationWebsocketMessage</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationWebsocketMessage
     */
    constructor() { 
        
        ConversationWebsocketMessage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationWebsocketMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationWebsocketMessage} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationWebsocketMessage} The populated <code>ConversationWebsocketMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationWebsocketMessage();

            if (data.hasOwnProperty('conversation_arn')) {
                obj['conversation_arn'] = ApiClient.convertToType(data['conversation_arn'], 'String');
            }
            if (data.hasOwnProperty('conversation_uuid')) {
                obj['conversation_uuid'] = ApiClient.convertToType(data['conversation_uuid'], 'String');
            }
            if (data.hasOwnProperty('event_add_coupon')) {
                obj['event_add_coupon'] = ConversationEventAddCoupon.constructFromObject(data['event_add_coupon']);
            }
            if (data.hasOwnProperty('event_add_item')) {
                obj['event_add_item'] = ConversationEventAddItem.constructFromObject(data['event_add_item']);
            }
            if (data.hasOwnProperty('event_conversation_closed')) {
                obj['event_conversation_closed'] = ConversationSummary.constructFromObject(data['event_conversation_closed']);
            }
            if (data.hasOwnProperty('event_engage_customer')) {
                obj['event_engage_customer'] = ConversationWebchatQueueStatusQueueEntry.constructFromObject(data['event_engage_customer']);
            }
            if (data.hasOwnProperty('event_new_conversation')) {
                obj['event_new_conversation'] = ConversationSummary.constructFromObject(data['event_new_conversation']);
            }
            if (data.hasOwnProperty('event_new_message')) {
                obj['event_new_message'] = ConversationSummary.constructFromObject(data['event_new_message']);
            }
            if (data.hasOwnProperty('event_participant_join')) {
                obj['event_participant_join'] = ConversationSummary.constructFromObject(data['event_participant_join']);
            }
            if (data.hasOwnProperty('event_participant_join_participant')) {
                obj['event_participant_join_participant'] = ConversationParticipant.constructFromObject(data['event_participant_join_participant']);
            }
            if (data.hasOwnProperty('event_participant_left')) {
                obj['event_participant_left'] = ConversationSummary.constructFromObject(data['event_participant_left']);
            }
            if (data.hasOwnProperty('event_participant_left_participant')) {
                obj['event_participant_left_participant'] = ConversationParticipant.constructFromObject(data['event_participant_left_participant']);
            }
            if (data.hasOwnProperty('event_participant_update')) {
                obj['event_participant_update'] = ConversationSummary.constructFromObject(data['event_participant_update']);
            }
            if (data.hasOwnProperty('event_queue_new_member')) {
                obj['event_queue_new_member'] = ConversationWebchatQueueStatusQueueEntry.constructFromObject(data['event_queue_new_member']);
            }
            if (data.hasOwnProperty('event_queue_position')) {
                obj['event_queue_position'] = ConversationEventQueuePosition.constructFromObject(data['event_queue_position']);
            }
            if (data.hasOwnProperty('event_queue_status_update')) {
                obj['event_queue_status_update'] = ConversationWebchatQueueStatus.constructFromObject(data['event_queue_status_update']);
            }
            if (data.hasOwnProperty('event_read_message')) {
                obj['event_read_message'] = ConversationEventReadMessage.constructFromObject(data['event_read_message']);
            }
            if (data.hasOwnProperty('event_rrweb')) {
                obj['event_rrweb'] = ConversationEventRRWeb.constructFromObject(data['event_rrweb']);
            }
            if (data.hasOwnProperty('event_type')) {
                obj['event_type'] = ApiClient.convertToType(data['event_type'], 'String');
            }
            if (data.hasOwnProperty('event_typing')) {
                obj['event_typing'] = ConversationEventTyping.constructFromObject(data['event_typing']);
            }
            if (data.hasOwnProperty('event_updated_message')) {
                obj['event_updated_message'] = ConversationMessage.constructFromObject(data['event_updated_message']);
            }
            if (data.hasOwnProperty('event_webchat_context')) {
                obj['event_webchat_context'] = ConversationEventWebchatContext.constructFromObject(data['event_webchat_context']);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ConversationMessage.constructFromObject(data['message']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Conversation ARN
 * @member {String} conversation_arn
 */
ConversationWebsocketMessage.prototype['conversation_arn'] = undefined;

/**
 * Conversation UUID if the websocket message is tied to a specific conversation
 * @member {String} conversation_uuid
 */
ConversationWebsocketMessage.prototype['conversation_uuid'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ConversationEventAddCoupon} event_add_coupon
 */
ConversationWebsocketMessage.prototype['event_add_coupon'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ConversationEventAddItem} event_add_item
 */
ConversationWebsocketMessage.prototype['event_add_item'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ConversationSummary} event_conversation_closed
 */
ConversationWebsocketMessage.prototype['event_conversation_closed'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusQueueEntry} event_engage_customer
 */
ConversationWebsocketMessage.prototype['event_engage_customer'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ConversationSummary} event_new_conversation
 */
ConversationWebsocketMessage.prototype['event_new_conversation'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ConversationSummary} event_new_message
 */
ConversationWebsocketMessage.prototype['event_new_message'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ConversationSummary} event_participant_join
 */
ConversationWebsocketMessage.prototype['event_participant_join'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ConversationParticipant} event_participant_join_participant
 */
ConversationWebsocketMessage.prototype['event_participant_join_participant'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ConversationSummary} event_participant_left
 */
ConversationWebsocketMessage.prototype['event_participant_left'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ConversationParticipant} event_participant_left_participant
 */
ConversationWebsocketMessage.prototype['event_participant_left_participant'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ConversationSummary} event_participant_update
 */
ConversationWebsocketMessage.prototype['event_participant_update'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusQueueEntry} event_queue_new_member
 */
ConversationWebsocketMessage.prototype['event_queue_new_member'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ConversationEventQueuePosition} event_queue_position
 */
ConversationWebsocketMessage.prototype['event_queue_position'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatus} event_queue_status_update
 */
ConversationWebsocketMessage.prototype['event_queue_status_update'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ConversationEventReadMessage} event_read_message
 */
ConversationWebsocketMessage.prototype['event_read_message'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ConversationEventRRWeb} event_rrweb
 */
ConversationWebsocketMessage.prototype['event_rrweb'] = undefined;

/**
 * Type of event
 * @member {module:com.ultracart.admin.v2.models/ConversationWebsocketMessage.EventTypeEnum} event_type
 */
ConversationWebsocketMessage.prototype['event_type'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ConversationEventTyping} event_typing
 */
ConversationWebsocketMessage.prototype['event_typing'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ConversationMessage} event_updated_message
 */
ConversationWebsocketMessage.prototype['event_updated_message'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ConversationEventWebchatContext} event_webchat_context
 */
ConversationWebsocketMessage.prototype['event_webchat_context'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ConversationMessage} message
 */
ConversationWebsocketMessage.prototype['message'] = undefined;

/**
 * Type of message
 * @member {module:com.ultracart.admin.v2.models/ConversationWebsocketMessage.TypeEnum} type
 */
ConversationWebsocketMessage.prototype['type'] = undefined;





/**
 * Allowed values for the <code>event_type</code> property.
 * @enum {String}
 * @readonly
 */
ConversationWebsocketMessage['EventTypeEnum'] = {

    /**
     * value: "queue position"
     * @const
     */
    "queue position": "queue position",

    /**
     * value: "webchat start conversation"
     * @const
     */
    "webchat start conversation": "webchat start conversation",

    /**
     * value: "conversation closed"
     * @const
     */
    "conversation closed": "conversation closed",

    /**
     * value: "new conversation"
     * @const
     */
    "new conversation": "new conversation",

    /**
     * value: "new message"
     * @const
     */
    "new message": "new message",

    /**
     * value: "updated message"
     * @const
     */
    "updated message": "updated message",

    /**
     * value: "queue status update"
     * @const
     */
    "queue status update": "queue status update",

    /**
     * value: "rrweb"
     * @const
     */
    "rrweb": "rrweb",

    /**
     * value: "participant update"
     * @const
     */
    "participant update": "participant update",

    /**
     * value: "participant join"
     * @const
     */
    "participant join": "participant join",

    /**
     * value: "participant left"
     * @const
     */
    "participant left": "participant left",

    /**
     * value: "read message"
     * @const
     */
    "read message": "read message",

    /**
     * value: "typing"
     * @const
     */
    "typing": "typing",

    /**
     * value: "add coupon"
     * @const
     */
    "add coupon": "add coupon",

    /**
     * value: "add item"
     * @const
     */
    "add item": "add item",

    /**
     * value: "webchat context"
     * @const
     */
    "webchat context": "webchat context",

    /**
     * value: "engage customer"
     * @const
     */
    "engage customer": "engage customer",

    /**
     * value: "queue new member"
     * @const
     */
    "queue new member": "queue new member"
};


/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ConversationWebsocketMessage['TypeEnum'] = {

    /**
     * value: "message"
     * @const
     */
    "message": "message",

    /**
     * value: "event"
     * @const
     */
    "event": "event",

    /**
     * value: "ping"
     * @const
     */
    "ping": "ping",

    /**
     * value: "check queue position"
     * @const
     */
    "check queue position": "check queue position"
};



export default ConversationWebsocketMessage;

