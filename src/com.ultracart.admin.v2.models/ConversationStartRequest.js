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
 * The ConversationStartRequest model module.
 * @module com.ultracart.admin.v2.models/ConversationStartRequest
 * @version 4.0.245
 */
class ConversationStartRequest {
    /**
     * Constructs a new <code>ConversationStartRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationStartRequest
     */
    constructor() { 
        
        ConversationStartRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationStartRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationStartRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationStartRequest} The populated <code>ConversationStartRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationStartRequest();

            if (data.hasOwnProperty('add_conversation_participant_arns')) {
                obj['add_conversation_participant_arns'] = ApiClient.convertToType(data['add_conversation_participant_arns'], ['String']);
            }
            if (data.hasOwnProperty('conversation_arn')) {
                obj['conversation_arn'] = ApiClient.convertToType(data['conversation_arn'], 'String');
            }
            if (data.hasOwnProperty('conversation_webchat_queue_uuid')) {
                obj['conversation_webchat_queue_uuid'] = ApiClient.convertToType(data['conversation_webchat_queue_uuid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} add_conversation_participant_arns
 */
ConversationStartRequest.prototype['add_conversation_participant_arns'] = undefined;

/**
 * @member {String} conversation_arn
 */
ConversationStartRequest.prototype['conversation_arn'] = undefined;

/**
 * @member {String} conversation_webchat_queue_uuid
 */
ConversationStartRequest.prototype['conversation_webchat_queue_uuid'] = undefined;






export default ConversationStartRequest;

