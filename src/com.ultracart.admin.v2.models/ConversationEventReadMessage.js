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
 * The ConversationEventReadMessage model module.
 * @module com.ultracart.admin.v2.models/ConversationEventReadMessage
 * @version 4.0.129
 */
class ConversationEventReadMessage {
    /**
     * Constructs a new <code>ConversationEventReadMessage</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationEventReadMessage
     */
    constructor() { 
        
        ConversationEventReadMessage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationEventReadMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationEventReadMessage} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationEventReadMessage} The populated <code>ConversationEventReadMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationEventReadMessage();

            if (data.hasOwnProperty('conversation_message_uuid')) {
                obj['conversation_message_uuid'] = ApiClient.convertToType(data['conversation_message_uuid'], 'String');
            }
            if (data.hasOwnProperty('message_dts')) {
                obj['message_dts'] = ApiClient.convertToType(data['message_dts'], 'String');
            }
            if (data.hasOwnProperty('message_epoch')) {
                obj['message_epoch'] = ApiClient.convertToType(data['message_epoch'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} conversation_message_uuid
 */
ConversationEventReadMessage.prototype['conversation_message_uuid'] = undefined;

/**
 * Message date/time
 * @member {String} message_dts
 */
ConversationEventReadMessage.prototype['message_dts'] = undefined;

/**
 * @member {Number} message_epoch
 */
ConversationEventReadMessage.prototype['message_epoch'] = undefined;






export default ConversationEventReadMessage;

