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
 * The EmailCommseqPostcard model module.
 * @module com.ultracart.admin.v2.models/EmailCommseqPostcard
 * @version 4.0.170
 */
class EmailCommseqPostcard {
    /**
     * Constructs a new <code>EmailCommseqPostcard</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailCommseqPostcard
     */
    constructor() { 
        
        EmailCommseqPostcard.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailCommseqPostcard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqPostcard} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailCommseqPostcard} The populated <code>EmailCommseqPostcard</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailCommseqPostcard();

            if (data.hasOwnProperty('deleted')) {
                obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
            }
            if (data.hasOwnProperty('edited_by_user')) {
                obj['edited_by_user'] = ApiClient.convertToType(data['edited_by_user'], 'String');
            }
            if (data.hasOwnProperty('email_communication_sequence_postcard_uuid')) {
                obj['email_communication_sequence_postcard_uuid'] = ApiClient.convertToType(data['email_communication_sequence_postcard_uuid'], 'String');
            }
            if (data.hasOwnProperty('filter_profile_equation_json')) {
                obj['filter_profile_equation_json'] = ApiClient.convertToType(data['filter_profile_equation_json'], 'String');
            }
            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('postcard_back_container_cjson')) {
                obj['postcard_back_container_cjson'] = ApiClient.convertToType(data['postcard_back_container_cjson'], 'String');
            }
            if (data.hasOwnProperty('postcard_back_container_uuid')) {
                obj['postcard_back_container_uuid'] = ApiClient.convertToType(data['postcard_back_container_uuid'], 'String');
            }
            if (data.hasOwnProperty('postcard_container_cjson_last_modified_dts')) {
                obj['postcard_container_cjson_last_modified_dts'] = ApiClient.convertToType(data['postcard_container_cjson_last_modified_dts'], 'String');
            }
            if (data.hasOwnProperty('postcard_front_container_cjson')) {
                obj['postcard_front_container_cjson'] = ApiClient.convertToType(data['postcard_front_container_cjson'], 'String');
            }
            if (data.hasOwnProperty('postcard_front_container_uuid')) {
                obj['postcard_front_container_uuid'] = ApiClient.convertToType(data['postcard_front_container_uuid'], 'String');
            }
            if (data.hasOwnProperty('screenshot_back_url')) {
                obj['screenshot_back_url'] = ApiClient.convertToType(data['screenshot_back_url'], 'String');
            }
            if (data.hasOwnProperty('screenshot_front_url')) {
                obj['screenshot_front_url'] = ApiClient.convertToType(data['screenshot_front_url'], 'String');
            }
            if (data.hasOwnProperty('storefront_oid')) {
                obj['storefront_oid'] = ApiClient.convertToType(data['storefront_oid'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Deleted
 * @member {Boolean} deleted
 */
EmailCommseqPostcard.prototype['deleted'] = undefined;

/**
 * Edited by user
 * @member {String} edited_by_user
 */
EmailCommseqPostcard.prototype['edited_by_user'] = undefined;

/**
 * communication sequence postcard uuid
 * @member {String} email_communication_sequence_postcard_uuid
 */
EmailCommseqPostcard.prototype['email_communication_sequence_postcard_uuid'] = undefined;

/**
 * Filter profile equation json
 * @member {String} filter_profile_equation_json
 */
EmailCommseqPostcard.prototype['filter_profile_equation_json'] = undefined;

/**
 * Merchant ID
 * @member {String} merchant_id
 */
EmailCommseqPostcard.prototype['merchant_id'] = undefined;

/**
 * Postcard back container cjson
 * @member {String} postcard_back_container_cjson
 */
EmailCommseqPostcard.prototype['postcard_back_container_cjson'] = undefined;

/**
 * Postcard back container uuid
 * @member {String} postcard_back_container_uuid
 */
EmailCommseqPostcard.prototype['postcard_back_container_uuid'] = undefined;

/**
 * Timestamp the last time the container was modified.
 * @member {String} postcard_container_cjson_last_modified_dts
 */
EmailCommseqPostcard.prototype['postcard_container_cjson_last_modified_dts'] = undefined;

/**
 * Postcard front container cjson
 * @member {String} postcard_front_container_cjson
 */
EmailCommseqPostcard.prototype['postcard_front_container_cjson'] = undefined;

/**
 * Postcard front container uuid
 * @member {String} postcard_front_container_uuid
 */
EmailCommseqPostcard.prototype['postcard_front_container_uuid'] = undefined;

/**
 * URL to screenshot of the back of the postcard
 * @member {String} screenshot_back_url
 */
EmailCommseqPostcard.prototype['screenshot_back_url'] = undefined;

/**
 * URL to screenshot of the front of the postcard
 * @member {String} screenshot_front_url
 */
EmailCommseqPostcard.prototype['screenshot_front_url'] = undefined;

/**
 * Storefront oid
 * @member {Number} storefront_oid
 */
EmailCommseqPostcard.prototype['storefront_oid'] = undefined;






export default EmailCommseqPostcard;

