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
 * The FileManagerDirectory model module.
 * @module com.ultracart.admin.v2.models/FileManagerDirectory
 * @version 4.0.188
 */
class FileManagerDirectory {
    /**
     * Constructs a new <code>FileManagerDirectory</code>.
     * @alias module:com.ultracart.admin.v2.models/FileManagerDirectory
     */
    constructor() { 
        
        FileManagerDirectory.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileManagerDirectory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/FileManagerDirectory} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/FileManagerDirectory} The populated <code>FileManagerDirectory</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileManagerDirectory();

            if (data.hasOwnProperty('active_theme_directory')) {
                obj['active_theme_directory'] = ApiClient.convertToType(data['active_theme_directory'], 'Boolean');
            }
            if (data.hasOwnProperty('favorite')) {
                obj['favorite'] = ApiClient.convertToType(data['favorite'], 'Boolean');
            }
            if (data.hasOwnProperty('hostname')) {
                obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
            }
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
            }
            if (data.hasOwnProperty('last_modified')) {
                obj['last_modified'] = ApiClient.convertToType(data['last_modified'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('parent_storefront_fs_directory_oid')) {
                obj['parent_storefront_fs_directory_oid'] = ApiClient.convertToType(data['parent_storefront_fs_directory_oid'], 'Number');
            }
            if (data.hasOwnProperty('part_of_active_theme')) {
                obj['part_of_active_theme'] = ApiClient.convertToType(data['part_of_active_theme'], 'Boolean');
            }
            if (data.hasOwnProperty('selected')) {
                obj['selected'] = ApiClient.convertToType(data['selected'], 'Boolean');
            }
            if (data.hasOwnProperty('storefront_fs_directory_oid')) {
                obj['storefront_fs_directory_oid'] = ApiClient.convertToType(data['storefront_fs_directory_oid'], 'Number');
            }
            if (data.hasOwnProperty('storefront_fs_file_oid')) {
                obj['storefront_fs_file_oid'] = ApiClient.convertToType(data['storefront_fs_file_oid'], 'Number');
            }
            if (data.hasOwnProperty('storefront_oid')) {
                obj['storefront_oid'] = ApiClient.convertToType(data['storefront_oid'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} active_theme_directory
 */
FileManagerDirectory.prototype['active_theme_directory'] = undefined;

/**
 * @member {Boolean} favorite
 */
FileManagerDirectory.prototype['favorite'] = undefined;

/**
 * @member {String} hostname
 */
FileManagerDirectory.prototype['hostname'] = undefined;

/**
 * @member {String} icon
 */
FileManagerDirectory.prototype['icon'] = undefined;

/**
 * @member {String} last_modified
 */
FileManagerDirectory.prototype['last_modified'] = undefined;

/**
 * @member {String} name
 */
FileManagerDirectory.prototype['name'] = undefined;

/**
 * @member {Number} parent_storefront_fs_directory_oid
 */
FileManagerDirectory.prototype['parent_storefront_fs_directory_oid'] = undefined;

/**
 * @member {Boolean} part_of_active_theme
 */
FileManagerDirectory.prototype['part_of_active_theme'] = undefined;

/**
 * @member {Boolean} selected
 */
FileManagerDirectory.prototype['selected'] = undefined;

/**
 * @member {Number} storefront_fs_directory_oid
 */
FileManagerDirectory.prototype['storefront_fs_directory_oid'] = undefined;

/**
 * @member {Number} storefront_fs_file_oid
 */
FileManagerDirectory.prototype['storefront_fs_file_oid'] = undefined;

/**
 * @member {Number} storefront_oid
 */
FileManagerDirectory.prototype['storefront_oid'] = undefined;

/**
 * @member {String} type
 */
FileManagerDirectory.prototype['type'] = undefined;






export default FileManagerDirectory;

