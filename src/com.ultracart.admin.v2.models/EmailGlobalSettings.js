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
 * The EmailGlobalSettings model module.
 * @module com.ultracart.admin.v2.models/EmailGlobalSettings
 * @version 4.1.0
 */
class EmailGlobalSettings {
    /**
     * Constructs a new <code>EmailGlobalSettings</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailGlobalSettings
     */
    constructor() { 
        
        EmailGlobalSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailGlobalSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailGlobalSettings} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailGlobalSettings} The populated <code>EmailGlobalSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailGlobalSettings();

            if (data.hasOwnProperty('dedicated_ip')) {
                obj['dedicated_ip'] = ApiClient.convertToType(data['dedicated_ip'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} dedicated_ip
 */
EmailGlobalSettings.prototype['dedicated_ip'] = undefined;






export default EmailGlobalSettings;

