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
 * The ConversationParticipant model module.
 * @module com.ultracart.admin.v2.models/ConversationParticipant
 * @version 4.0.92-RC
 */
class ConversationParticipant {
    /**
     * Constructs a new <code>ConversationParticipant</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationParticipant
     */
    constructor() { 
        
        ConversationParticipant.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationParticipant</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationParticipant} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationParticipant} The populated <code>ConversationParticipant</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationParticipant();

            if (data.hasOwnProperty('conversation_participant_arn')) {
                obj['conversation_participant_arn'] = ApiClient.convertToType(data['conversation_participant_arn'], 'String');
            }
            if (data.hasOwnProperty('conversation_participant_name')) {
                obj['conversation_participant_name'] = ApiClient.convertToType(data['conversation_participant_name'], 'String');
            }
            if (data.hasOwnProperty('conversation_participant_uuid')) {
                obj['conversation_participant_uuid'] = ApiClient.convertToType(data['conversation_participant_uuid'], 'String');
            }
            if (data.hasOwnProperty('joined_dts')) {
                obj['joined_dts'] = ApiClient.convertToType(data['joined_dts'], 'String');
            }
            if (data.hasOwnProperty('last_message_dts')) {
                obj['last_message_dts'] = ApiClient.convertToType(data['last_message_dts'], 'String');
            }
            if (data.hasOwnProperty('left_dts')) {
                obj['left_dts'] = ApiClient.convertToType(data['left_dts'], 'String');
            }
            if (data.hasOwnProperty('profile_image_url')) {
                obj['profile_image_url'] = ApiClient.convertToType(data['profile_image_url'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('timezone')) {
                obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
            }
            if (data.hasOwnProperty('unread_messages')) {
                obj['unread_messages'] = ApiClient.convertToType(data['unread_messages'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} conversation_participant_arn
 */
ConversationParticipant.prototype['conversation_participant_arn'] = undefined;

/**
 * @member {String} conversation_participant_name
 */
ConversationParticipant.prototype['conversation_participant_name'] = undefined;

/**
 * @member {String} conversation_participant_uuid
 */
ConversationParticipant.prototype['conversation_participant_uuid'] = undefined;

/**
 * Joined conversation date/time
 * @member {String} joined_dts
 */
ConversationParticipant.prototype['joined_dts'] = undefined;

/**
 * Last message date/time
 * @member {String} last_message_dts
 */
ConversationParticipant.prototype['last_message_dts'] = undefined;

/**
 * Left conversation date/time
 * @member {String} left_dts
 */
ConversationParticipant.prototype['left_dts'] = undefined;

/**
 * @member {String} profile_image_url
 */
ConversationParticipant.prototype['profile_image_url'] = undefined;

/**
 * @member {String} status
 */
ConversationParticipant.prototype['status'] = undefined;

/**
 * @member {String} timezone
 */
ConversationParticipant.prototype['timezone'] = undefined;

/**
 * @member {Number} unread_messages
 */
ConversationParticipant.prototype['unread_messages'] = undefined;






export default ConversationParticipant;

