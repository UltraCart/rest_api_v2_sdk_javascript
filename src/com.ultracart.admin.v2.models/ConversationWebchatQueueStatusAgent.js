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
 * The ConversationWebchatQueueStatusAgent model module.
 * @module com.ultracart.admin.v2.models/ConversationWebchatQueueStatusAgent
 * @version 4.0.178
 */
class ConversationWebchatQueueStatusAgent {
    /**
     * Constructs a new <code>ConversationWebchatQueueStatusAgent</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusAgent
     */
    constructor() { 
        
        ConversationWebchatQueueStatusAgent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationWebchatQueueStatusAgent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusAgent} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusAgent} The populated <code>ConversationWebchatQueueStatusAgent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationWebchatQueueStatusAgent();

            if (data.hasOwnProperty('agent_status')) {
                obj['agent_status'] = ApiClient.convertToType(data['agent_status'], 'String');
            }
            if (data.hasOwnProperty('conversation_participant_arn')) {
                obj['conversation_participant_arn'] = ApiClient.convertToType(data['conversation_participant_arn'], 'String');
            }
            if (data.hasOwnProperty('conversation_participant_name')) {
                obj['conversation_participant_name'] = ApiClient.convertToType(data['conversation_participant_name'], 'String');
            }
            if (data.hasOwnProperty('last_chat_dts')) {
                obj['last_chat_dts'] = ApiClient.convertToType(data['last_chat_dts'], 'String');
            }
            if (data.hasOwnProperty('next_round_robin')) {
                obj['next_round_robin'] = ApiClient.convertToType(data['next_round_robin'], 'Boolean');
            }
            if (data.hasOwnProperty('profile_image_url')) {
                obj['profile_image_url'] = ApiClient.convertToType(data['profile_image_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Status of the agent
 * @member {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusAgent.AgentStatusEnum} agent_status
 */
ConversationWebchatQueueStatusAgent.prototype['agent_status'] = undefined;

/**
 * @member {String} conversation_participant_arn
 */
ConversationWebchatQueueStatusAgent.prototype['conversation_participant_arn'] = undefined;

/**
 * @member {String} conversation_participant_name
 */
ConversationWebchatQueueStatusAgent.prototype['conversation_participant_name'] = undefined;

/**
 * Date/time that this agent took their last chat
 * @member {String} last_chat_dts
 */
ConversationWebchatQueueStatusAgent.prototype['last_chat_dts'] = undefined;

/**
 * @member {Boolean} next_round_robin
 */
ConversationWebchatQueueStatusAgent.prototype['next_round_robin'] = undefined;

/**
 * Profile image URL
 * @member {String} profile_image_url
 */
ConversationWebchatQueueStatusAgent.prototype['profile_image_url'] = undefined;





/**
 * Allowed values for the <code>agent_status</code> property.
 * @enum {String}
 * @readonly
 */
ConversationWebchatQueueStatusAgent['AgentStatusEnum'] = {

    /**
     * value: "available"
     * @const
     */
    "available": "available",

    /**
     * value: "busy"
     * @const
     */
    "busy": "busy",

    /**
     * value: "unavailable"
     * @const
     */
    "unavailable": "unavailable"
};



export default ConversationWebchatQueueStatusAgent;

