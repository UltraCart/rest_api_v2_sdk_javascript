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
import Error from './Error';
import FileManagerPage from './FileManagerPage';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The FileManagerPageResponse model module.
 * @module com.ultracart.admin.v2.models/FileManagerPageResponse
 * @version 4.0.163
 */
class FileManagerPageResponse {
    /**
     * Constructs a new <code>FileManagerPageResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/FileManagerPageResponse
     */
    constructor() { 
        
        FileManagerPageResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileManagerPageResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/FileManagerPageResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/FileManagerPageResponse} The populated <code>FileManagerPageResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileManagerPageResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('file_manager_page')) {
                obj['file_manager_page'] = FileManagerPage.constructFromObject(data['file_manager_page']);
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
FileManagerPageResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/FileManagerPage} file_manager_page
 */
FileManagerPageResponse.prototype['file_manager_page'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
FileManagerPageResponse.prototype['metadata'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
FileManagerPageResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
FileManagerPageResponse.prototype['warning'] = undefined;






export default FileManagerPageResponse;

