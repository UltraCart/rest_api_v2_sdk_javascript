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
 * The FileManagerFile model module.
 * @module com.ultracart.admin.v2.models/FileManagerFile
 * @version 4.0.70-RC
 */
class FileManagerFile {
    /**
     * Constructs a new <code>FileManagerFile</code>.
     * @alias module:com.ultracart.admin.v2.models/FileManagerFile
     */
    constructor() { 
        
        FileManagerFile.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileManagerFile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/FileManagerFile} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/FileManagerFile} The populated <code>FileManagerFile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileManagerFile();

            if (data.hasOwnProperty('favorite')) {
                obj['favorite'] = ApiClient.convertToType(data['favorite'], 'Boolean');
            }
            if (data.hasOwnProperty('hostname')) {
                obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
            }
            if (data.hasOwnProperty('i18n_violation')) {
                obj['i18n_violation'] = ApiClient.convertToType(data['i18n_violation'], 'Boolean');
            }
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
            }
            if (data.hasOwnProperty('internal_version')) {
                obj['internal_version'] = ApiClient.convertToType(data['internal_version'], 'Number');
            }
            if (data.hasOwnProperty('last_modified')) {
                obj['last_modified'] = ApiClient.convertToType(data['last_modified'], 'String');
            }
            if (data.hasOwnProperty('merge_conflict')) {
                obj['merge_conflict'] = ApiClient.convertToType(data['merge_conflict'], 'Boolean');
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
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('raw_size')) {
                obj['raw_size'] = ApiClient.convertToType(data['raw_size'], 'Number');
            }
            if (data.hasOwnProperty('selected')) {
                obj['selected'] = ApiClient.convertToType(data['selected'], 'Boolean');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'String');
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
            if (data.hasOwnProperty('valid_velocity')) {
                obj['valid_velocity'] = ApiClient.convertToType(data['valid_velocity'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} favorite
 */
FileManagerFile.prototype['favorite'] = undefined;

/**
 * @member {String} hostname
 */
FileManagerFile.prototype['hostname'] = undefined;

/**
 * @member {Boolean} i18n_violation
 */
FileManagerFile.prototype['i18n_violation'] = undefined;

/**
 * @member {String} icon
 */
FileManagerFile.prototype['icon'] = undefined;

/**
 * @member {Number} internal_version
 */
FileManagerFile.prototype['internal_version'] = undefined;

/**
 * @member {String} last_modified
 */
FileManagerFile.prototype['last_modified'] = undefined;

/**
 * @member {Boolean} merge_conflict
 */
FileManagerFile.prototype['merge_conflict'] = undefined;

/**
 * @member {String} name
 */
FileManagerFile.prototype['name'] = undefined;

/**
 * @member {Number} parent_storefront_fs_directory_oid
 */
FileManagerFile.prototype['parent_storefront_fs_directory_oid'] = undefined;

/**
 * @member {Boolean} part_of_active_theme
 */
FileManagerFile.prototype['part_of_active_theme'] = undefined;

/**
 * @member {String} path
 */
FileManagerFile.prototype['path'] = undefined;

/**
 * @member {Number} raw_size
 */
FileManagerFile.prototype['raw_size'] = undefined;

/**
 * @member {Boolean} selected
 */
FileManagerFile.prototype['selected'] = undefined;

/**
 * @member {String} size
 */
FileManagerFile.prototype['size'] = undefined;

/**
 * @member {Number} storefront_fs_directory_oid
 */
FileManagerFile.prototype['storefront_fs_directory_oid'] = undefined;

/**
 * @member {Number} storefront_fs_file_oid
 */
FileManagerFile.prototype['storefront_fs_file_oid'] = undefined;

/**
 * @member {Number} storefront_oid
 */
FileManagerFile.prototype['storefront_oid'] = undefined;

/**
 * @member {String} type
 */
FileManagerFile.prototype['type'] = undefined;

/**
 * @member {String} valid_velocity
 */
FileManagerFile.prototype['valid_velocity'] = undefined;






export default FileManagerFile;

