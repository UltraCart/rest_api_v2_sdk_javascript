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
import ConversationWebchatQueueStatus from './ConversationWebchatQueueStatus';
import Error from './Error';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The ConversationWebchatQueueStatusesResponse model module.
 * @module com.ultracart.admin.v2.models/ConversationWebchatQueueStatusesResponse
 * @version 4.0.46-RC
 */
class ConversationWebchatQueueStatusesResponse {
    /**
     * Constructs a new <code>ConversationWebchatQueueStatusesResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusesResponse
     */
    constructor() { 
        
        ConversationWebchatQueueStatusesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationWebchatQueueStatusesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusesResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusesResponse} The populated <code>ConversationWebchatQueueStatusesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationWebchatQueueStatusesResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('queue_statuses')) {
                obj['queue_statuses'] = ApiClient.convertToType(data['queue_statuses'], [ConversationWebchatQueueStatus]);
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
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
ConversationWebchatQueueStatusesResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
ConversationWebchatQueueStatusesResponse.prototype['metadata'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatus>} queue_statuses
 */
ConversationWebchatQueueStatusesResponse.prototype['queue_statuses'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
ConversationWebchatQueueStatusesResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
ConversationWebchatQueueStatusesResponse.prototype['warning'] = undefined;






export default ConversationWebchatQueueStatusesResponse;
