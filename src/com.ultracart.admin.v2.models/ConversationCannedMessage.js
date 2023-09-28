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
 * The ConversationCannedMessage model module.
 * @module com.ultracart.admin.v2.models/ConversationCannedMessage
 * @version 4.0.179
 */
class ConversationCannedMessage {
    /**
     * Constructs a new <code>ConversationCannedMessage</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationCannedMessage
     */
    constructor() { 
        
        ConversationCannedMessage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationCannedMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationCannedMessage} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationCannedMessage} The populated <code>ConversationCannedMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationCannedMessage();

            if (data.hasOwnProperty('canned_message')) {
                obj['canned_message'] = ApiClient.convertToType(data['canned_message'], 'String');
            }
            if (data.hasOwnProperty('conversation_canned_message_oid')) {
                obj['conversation_canned_message_oid'] = ApiClient.convertToType(data['conversation_canned_message_oid'], 'Number');
            }
            if (data.hasOwnProperty('conversation_department_oids')) {
                obj['conversation_department_oids'] = ApiClient.convertToType(data['conversation_department_oids'], ['Number']);
            }
            if (data.hasOwnProperty('short_code')) {
                obj['short_code'] = ApiClient.convertToType(data['short_code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} canned_message
 */
ConversationCannedMessage.prototype['canned_message'] = undefined;

/**
 * @member {Number} conversation_canned_message_oid
 */
ConversationCannedMessage.prototype['conversation_canned_message_oid'] = undefined;

/**
 * @member {Array.<Number>} conversation_department_oids
 */
ConversationCannedMessage.prototype['conversation_department_oids'] = undefined;

/**
 * @member {String} short_code
 */
ConversationCannedMessage.prototype['short_code'] = undefined;






export default ConversationCannedMessage;

