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
 * The EmailSettings model module.
 * @module com.ultracart.admin.v2.models/EmailSettings
 * @version 4.0.50-RC
 */
class EmailSettings {
    /**
     * Constructs a new <code>EmailSettings</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailSettings
     */
    constructor() { 
        
        EmailSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailSettings} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailSettings} The populated <code>EmailSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailSettings();

            if (data.hasOwnProperty('marketing_esp_domain_user')) {
                obj['marketing_esp_domain_user'] = ApiClient.convertToType(data['marketing_esp_domain_user'], 'String');
            }
            if (data.hasOwnProperty('marketing_esp_domain_uuid')) {
                obj['marketing_esp_domain_uuid'] = ApiClient.convertToType(data['marketing_esp_domain_uuid'], 'String');
            }
            if (data.hasOwnProperty('marketing_esp_friendly_name')) {
                obj['marketing_esp_friendly_name'] = ApiClient.convertToType(data['marketing_esp_friendly_name'], 'String');
            }
            if (data.hasOwnProperty('postcard_from_address1')) {
                obj['postcard_from_address1'] = ApiClient.convertToType(data['postcard_from_address1'], 'String');
            }
            if (data.hasOwnProperty('postcard_from_address2')) {
                obj['postcard_from_address2'] = ApiClient.convertToType(data['postcard_from_address2'], 'String');
            }
            if (data.hasOwnProperty('postcard_from_city')) {
                obj['postcard_from_city'] = ApiClient.convertToType(data['postcard_from_city'], 'String');
            }
            if (data.hasOwnProperty('postcard_from_name')) {
                obj['postcard_from_name'] = ApiClient.convertToType(data['postcard_from_name'], 'String');
            }
            if (data.hasOwnProperty('postcard_from_postal_code')) {
                obj['postcard_from_postal_code'] = ApiClient.convertToType(data['postcard_from_postal_code'], 'String');
            }
            if (data.hasOwnProperty('postcard_from_state')) {
                obj['postcard_from_state'] = ApiClient.convertToType(data['postcard_from_state'], 'String');
            }
            if (data.hasOwnProperty('transactional_esp_domain_user')) {
                obj['transactional_esp_domain_user'] = ApiClient.convertToType(data['transactional_esp_domain_user'], 'String');
            }
            if (data.hasOwnProperty('transactional_esp_domain_uuid')) {
                obj['transactional_esp_domain_uuid'] = ApiClient.convertToType(data['transactional_esp_domain_uuid'], 'String');
            }
            if (data.hasOwnProperty('transactional_esp_friendly_name')) {
                obj['transactional_esp_friendly_name'] = ApiClient.convertToType(data['transactional_esp_friendly_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} marketing_esp_domain_user
 */
EmailSettings.prototype['marketing_esp_domain_user'] = undefined;

/**
 * @member {String} marketing_esp_domain_uuid
 */
EmailSettings.prototype['marketing_esp_domain_uuid'] = undefined;

/**
 * @member {String} marketing_esp_friendly_name
 */
EmailSettings.prototype['marketing_esp_friendly_name'] = undefined;

/**
 * @member {String} postcard_from_address1
 */
EmailSettings.prototype['postcard_from_address1'] = undefined;

/**
 * @member {String} postcard_from_address2
 */
EmailSettings.prototype['postcard_from_address2'] = undefined;

/**
 * @member {String} postcard_from_city
 */
EmailSettings.prototype['postcard_from_city'] = undefined;

/**
 * @member {String} postcard_from_name
 */
EmailSettings.prototype['postcard_from_name'] = undefined;

/**
 * @member {String} postcard_from_postal_code
 */
EmailSettings.prototype['postcard_from_postal_code'] = undefined;

/**
 * @member {String} postcard_from_state
 */
EmailSettings.prototype['postcard_from_state'] = undefined;

/**
 * @member {String} transactional_esp_domain_user
 */
EmailSettings.prototype['transactional_esp_domain_user'] = undefined;

/**
 * @member {String} transactional_esp_domain_uuid
 */
EmailSettings.prototype['transactional_esp_domain_uuid'] = undefined;

/**
 * @member {String} transactional_esp_friendly_name
 */
EmailSettings.prototype['transactional_esp_friendly_name'] = undefined;






export default EmailSettings;

