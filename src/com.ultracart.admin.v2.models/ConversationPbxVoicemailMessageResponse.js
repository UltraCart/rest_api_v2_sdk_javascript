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
import ConversationPbxVoicemailMessage from './ConversationPbxVoicemailMessage';
import Error from './Error';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The ConversationPbxVoicemailMessageResponse model module.
 * @module com.ultracart.admin.v2.models/ConversationPbxVoicemailMessageResponse
 * @version 4.1.0
 */
class ConversationPbxVoicemailMessageResponse {
    /**
     * Constructs a new <code>ConversationPbxVoicemailMessageResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMessageResponse
     */
    constructor() { 
        
        ConversationPbxVoicemailMessageResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationPbxVoicemailMessageResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMessageResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMessageResponse} The populated <code>ConversationPbxVoicemailMessageResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationPbxVoicemailMessageResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('voicemail_message')) {
                obj['voicemail_message'] = ConversationPbxVoicemailMessage.constructFromObject(data['voicemail_message']);
            }
            if (data.hasOwnProperty('warning')) {
                obj['warning'] = Warning.constructFromObject(data['warning']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
ConversationPbxVoicemailMessageResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
ConversationPbxVoicemailMessageResponse.prototype['metadata'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
ConversationPbxVoicemailMessageResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMessage} voicemail_message
 */
ConversationPbxVoicemailMessageResponse.prototype['voicemail_message'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
ConversationPbxVoicemailMessageResponse.prototype['warning'] = undefined;






export default ConversationPbxVoicemailMessageResponse;

