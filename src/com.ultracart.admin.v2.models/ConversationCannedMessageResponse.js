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
import ConversationCannedMessage from './ConversationCannedMessage';
import Error from './Error';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The ConversationCannedMessageResponse model module.
 * @module com.ultracart.admin.v2.models/ConversationCannedMessageResponse
 * @version 4.0.109-RC
 */
class ConversationCannedMessageResponse {
    /**
     * Constructs a new <code>ConversationCannedMessageResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationCannedMessageResponse
     */
    constructor() { 
        
        ConversationCannedMessageResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationCannedMessageResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationCannedMessageResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationCannedMessageResponse} The populated <code>ConversationCannedMessageResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationCannedMessageResponse();

            if (data.hasOwnProperty('conversation_canned_message')) {
                obj['conversation_canned_message'] = ConversationCannedMessage.constructFromObject(data['conversation_canned_message']);
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('warning')) {
                obj['warning'] = Warning.constructFromObject(data['warning']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/ConversationCannedMessage} conversation_canned_message
 */
ConversationCannedMessageResponse.prototype['conversation_canned_message'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
ConversationCannedMessageResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
ConversationCannedMessageResponse.prototype['metadata'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
ConversationCannedMessageResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
ConversationCannedMessageResponse.prototype['warning'] = undefined;






export default ConversationCannedMessageResponse;

