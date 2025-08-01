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
 * The ConversationWebchatQueueStatusUpdateRequest model module.
 * @module com.ultracart.admin.v2.models/ConversationWebchatQueueStatusUpdateRequest
 * @version 4.1.16
 */
class ConversationWebchatQueueStatusUpdateRequest {
    /**
     * Constructs a new <code>ConversationWebchatQueueStatusUpdateRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusUpdateRequest
     */
    constructor() { 
        
        ConversationWebchatQueueStatusUpdateRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationWebchatQueueStatusUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusUpdateRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusUpdateRequest} The populated <code>ConversationWebchatQueueStatusUpdateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationWebchatQueueStatusUpdateRequest();

            if (data.hasOwnProperty('agent_status')) {
                obj['agent_status'] = ApiClient.convertToType(data['agent_status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Status of the agent
 * @member {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusUpdateRequest.AgentStatusEnum} agent_status
 */
ConversationWebchatQueueStatusUpdateRequest.prototype['agent_status'] = undefined;





/**
 * Allowed values for the <code>agent_status</code> property.
 * @enum {String}
 * @readonly
 */
ConversationWebchatQueueStatusUpdateRequest['AgentStatusEnum'] = {

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



export default ConversationWebchatQueueStatusUpdateRequest;

