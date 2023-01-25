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
import ConversationMultimediaUploadUrl from './ConversationMultimediaUploadUrl';
import Error from './Error';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The ConversationMultimediaUploadUrlResponse model module.
 * @module com.ultracart.admin.v2.models/ConversationMultimediaUploadUrlResponse
 * @version 4.0.123-RC
 */
class ConversationMultimediaUploadUrlResponse {
    /**
     * Constructs a new <code>ConversationMultimediaUploadUrlResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationMultimediaUploadUrlResponse
     */
    constructor() { 
        
        ConversationMultimediaUploadUrlResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationMultimediaUploadUrlResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationMultimediaUploadUrlResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationMultimediaUploadUrlResponse} The populated <code>ConversationMultimediaUploadUrlResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationMultimediaUploadUrlResponse();

            if (data.hasOwnProperty('conversation_multimedia_upload_url')) {
                obj['conversation_multimedia_upload_url'] = ConversationMultimediaUploadUrl.constructFromObject(data['conversation_multimedia_upload_url']);
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
 * @member {module:com.ultracart.admin.v2.models/ConversationMultimediaUploadUrl} conversation_multimedia_upload_url
 */
ConversationMultimediaUploadUrlResponse.prototype['conversation_multimedia_upload_url'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
ConversationMultimediaUploadUrlResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
ConversationMultimediaUploadUrlResponse.prototype['metadata'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
ConversationMultimediaUploadUrlResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
ConversationMultimediaUploadUrlResponse.prototype['warning'] = undefined;






export default ConversationMultimediaUploadUrlResponse;

