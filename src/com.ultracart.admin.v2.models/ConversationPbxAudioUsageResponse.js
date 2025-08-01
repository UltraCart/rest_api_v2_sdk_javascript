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
import ConversationPbxMenu from './ConversationPbxMenu';
import ConversationPbxQueue from './ConversationPbxQueue';
import ConversationPbxVoicemailMailbox from './ConversationPbxVoicemailMailbox';
import Error from './Error';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The ConversationPbxAudioUsageResponse model module.
 * @module com.ultracart.admin.v2.models/ConversationPbxAudioUsageResponse
 * @version 4.1.16
 */
class ConversationPbxAudioUsageResponse {
    /**
     * Constructs a new <code>ConversationPbxAudioUsageResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationPbxAudioUsageResponse
     */
    constructor() { 
        
        ConversationPbxAudioUsageResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationPbxAudioUsageResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxAudioUsageResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationPbxAudioUsageResponse} The populated <code>ConversationPbxAudioUsageResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationPbxAudioUsageResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('menus')) {
                obj['menus'] = ApiClient.convertToType(data['menus'], [ConversationPbxMenu]);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('queues')) {
                obj['queues'] = ApiClient.convertToType(data['queues'], [ConversationPbxQueue]);
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('voicemail_mailboxes')) {
                obj['voicemail_mailboxes'] = ApiClient.convertToType(data['voicemail_mailboxes'], [ConversationPbxVoicemailMailbox]);
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
ConversationPbxAudioUsageResponse.prototype['error'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ConversationPbxMenu>} menus
 */
ConversationPbxAudioUsageResponse.prototype['menus'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
ConversationPbxAudioUsageResponse.prototype['metadata'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ConversationPbxQueue>} queues
 */
ConversationPbxAudioUsageResponse.prototype['queues'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
ConversationPbxAudioUsageResponse.prototype['success'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMailbox>} voicemail_mailboxes
 */
ConversationPbxAudioUsageResponse.prototype['voicemail_mailboxes'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
ConversationPbxAudioUsageResponse.prototype['warning'] = undefined;






export default ConversationPbxAudioUsageResponse;

