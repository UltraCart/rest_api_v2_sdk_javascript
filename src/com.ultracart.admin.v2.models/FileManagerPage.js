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
import FileManagerDirectory from './FileManagerDirectory';
import FileManagerFile from './FileManagerFile';

/**
 * The FileManagerPage model module.
 * @module com.ultracart.admin.v2.models/FileManagerPage
 * @version 4.0.144
 */
class FileManagerPage {
    /**
     * Constructs a new <code>FileManagerPage</code>.
     * @alias module:com.ultracart.admin.v2.models/FileManagerPage
     */
    constructor() { 
        
        FileManagerPage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileManagerPage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/FileManagerPage} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/FileManagerPage} The populated <code>FileManagerPage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileManagerPage();

            if (data.hasOwnProperty('current_storefront_fs_directory_oid')) {
                obj['current_storefront_fs_directory_oid'] = ApiClient.convertToType(data['current_storefront_fs_directory_oid'], 'Number');
            }
            if (data.hasOwnProperty('directories')) {
                obj['directories'] = ApiClient.convertToType(data['directories'], [FileManagerDirectory]);
            }
            if (data.hasOwnProperty('files')) {
                obj['files'] = ApiClient.convertToType(data['files'], [FileManagerFile]);
            }
            if (data.hasOwnProperty('hostname')) {
                obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
            }
            if (data.hasOwnProperty('parent_storefront_fs_directory_oid')) {
                obj['parent_storefront_fs_directory_oid'] = ApiClient.convertToType(data['parent_storefront_fs_directory_oid'], 'Number');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('path_list')) {
                obj['path_list'] = ApiClient.convertToType(data['path_list'], [FileManagerDirectory]);
            }
            if (data.hasOwnProperty('storefront_oid')) {
                obj['storefront_oid'] = ApiClient.convertToType(data['storefront_oid'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} current_storefront_fs_directory_oid
 */
FileManagerPage.prototype['current_storefront_fs_directory_oid'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/FileManagerDirectory>} directories
 */
FileManagerPage.prototype['directories'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/FileManagerFile>} files
 */
FileManagerPage.prototype['files'] = undefined;

/**
 * @member {String} hostname
 */
FileManagerPage.prototype['hostname'] = undefined;

/**
 * @member {Number} parent_storefront_fs_directory_oid
 */
FileManagerPage.prototype['parent_storefront_fs_directory_oid'] = undefined;

/**
 * @member {String} path
 */
FileManagerPage.prototype['path'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/FileManagerDirectory>} path_list
 */
FileManagerPage.prototype['path_list'] = undefined;

/**
 * @member {Number} storefront_oid
 */
FileManagerPage.prototype['storefront_oid'] = undefined;






export default FileManagerPage;

