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
 * The EmailListSegmentFolder model module.
 * @module com.ultracart.admin.v2.models/EmailListSegmentFolder
 * @version 4.0.187
 */
class EmailListSegmentFolder {
    /**
     * Constructs a new <code>EmailListSegmentFolder</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailListSegmentFolder
     */
    constructor() { 
        
        EmailListSegmentFolder.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailListSegmentFolder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailListSegmentFolder} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailListSegmentFolder} The populated <code>EmailListSegmentFolder</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailListSegmentFolder();

            if (data.hasOwnProperty('esp_list_segment_folder_uuid')) {
                obj['esp_list_segment_folder_uuid'] = ApiClient.convertToType(data['esp_list_segment_folder_uuid'], 'String');
            }
            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('storefront_oid')) {
                obj['storefront_oid'] = ApiClient.convertToType(data['storefront_oid'], 'Number');
            }
            if (data.hasOwnProperty('system_generated')) {
                obj['system_generated'] = ApiClient.convertToType(data['system_generated'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Email list segment folder UUID
 * @member {String} esp_list_segment_folder_uuid
 */
EmailListSegmentFolder.prototype['esp_list_segment_folder_uuid'] = undefined;

/**
 * Merchant ID
 * @member {String} merchant_id
 */
EmailListSegmentFolder.prototype['merchant_id'] = undefined;

/**
 * Name of email campaign folder
 * @member {String} name
 */
EmailListSegmentFolder.prototype['name'] = undefined;

/**
 * Storefront oid
 * @member {Number} storefront_oid
 */
EmailListSegmentFolder.prototype['storefront_oid'] = undefined;

/**
 * System generated folder
 * @member {Boolean} system_generated
 */
EmailListSegmentFolder.prototype['system_generated'] = undefined;






export default EmailListSegmentFolder;

