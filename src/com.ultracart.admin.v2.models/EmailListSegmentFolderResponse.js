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
import EmailListSegmentFolder from './EmailListSegmentFolder';
import Error from './Error';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The EmailListSegmentFolderResponse model module.
 * @module com.ultracart.admin.v2.models/EmailListSegmentFolderResponse
 * @version 4.0.179
 */
class EmailListSegmentFolderResponse {
    /**
     * Constructs a new <code>EmailListSegmentFolderResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailListSegmentFolderResponse
     */
    constructor() { 
        
        EmailListSegmentFolderResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailListSegmentFolderResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailListSegmentFolderResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailListSegmentFolderResponse} The populated <code>EmailListSegmentFolderResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailListSegmentFolderResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('list_segment_folder')) {
                obj['list_segment_folder'] = EmailListSegmentFolder.constructFromObject(data['list_segment_folder']);
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
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
EmailListSegmentFolderResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/EmailListSegmentFolder} list_segment_folder
 */
EmailListSegmentFolderResponse.prototype['list_segment_folder'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
EmailListSegmentFolderResponse.prototype['metadata'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
EmailListSegmentFolderResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
EmailListSegmentFolderResponse.prototype['warning'] = undefined;






export default EmailListSegmentFolderResponse;

