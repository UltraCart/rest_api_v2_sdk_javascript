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
 * The FileManagerUploadRequest model module.
 * @module com.ultracart.admin.v2.models/FileManagerUploadRequest
 * @version 4.0.90-RC
 */
class FileManagerUploadRequest {
    /**
     * Constructs a new <code>FileManagerUploadRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/FileManagerUploadRequest
     */
    constructor() { 
        
        FileManagerUploadRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileManagerUploadRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/FileManagerUploadRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/FileManagerUploadRequest} The populated <code>FileManagerUploadRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileManagerUploadRequest();

            if (data.hasOwnProperty('filename')) {
                obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('parent_storefront_fs_directory_oid')) {
                obj['parent_storefront_fs_directory_oid'] = ApiClient.convertToType(data['parent_storefront_fs_directory_oid'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} filename
 */
FileManagerUploadRequest.prototype['filename'] = undefined;

/**
 * @member {String} key
 */
FileManagerUploadRequest.prototype['key'] = undefined;

/**
 * @member {Number} parent_storefront_fs_directory_oid
 */
FileManagerUploadRequest.prototype['parent_storefront_fs_directory_oid'] = undefined;






export default FileManagerUploadRequest;

