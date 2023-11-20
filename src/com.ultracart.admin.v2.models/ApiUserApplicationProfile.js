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
 * The ApiUserApplicationProfile model module.
 * @module com.ultracart.admin.v2.models/ApiUserApplicationProfile
 * @version 4.0.190
 */
class ApiUserApplicationProfile {
    /**
     * Constructs a new <code>ApiUserApplicationProfile</code>.
     * @alias module:com.ultracart.admin.v2.models/ApiUserApplicationProfile
     */
    constructor() { 
        
        ApiUserApplicationProfile.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiUserApplicationProfile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ApiUserApplicationProfile} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ApiUserApplicationProfile} The populated <code>ApiUserApplicationProfile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiUserApplicationProfile();

            if (data.hasOwnProperty('api_application_logo_url')) {
                obj['api_application_logo_url'] = ApiClient.convertToType(data['api_application_logo_url'], 'String');
            }
            if (data.hasOwnProperty('application_description')) {
                obj['application_description'] = ApiClient.convertToType(data['application_description'], 'String');
            }
            if (data.hasOwnProperty('application_name')) {
                obj['application_name'] = ApiClient.convertToType(data['application_name'], 'String');
            }
            if (data.hasOwnProperty('developer_name')) {
                obj['developer_name'] = ApiClient.convertToType(data['developer_name'], 'String');
            }
            if (data.hasOwnProperty('developer_website')) {
                obj['developer_website'] = ApiClient.convertToType(data['developer_website'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Application logo URL
 * @member {String} api_application_logo_url
 */
ApiUserApplicationProfile.prototype['api_application_logo_url'] = undefined;

/**
 * Application description
 * @member {String} application_description
 */
ApiUserApplicationProfile.prototype['application_description'] = undefined;

/**
 * Application name
 * @member {String} application_name
 */
ApiUserApplicationProfile.prototype['application_name'] = undefined;

/**
 * Developer name
 * @member {String} developer_name
 */
ApiUserApplicationProfile.prototype['developer_name'] = undefined;

/**
 * Developer website
 * @member {String} developer_website
 */
ApiUserApplicationProfile.prototype['developer_website'] = undefined;






export default ApiUserApplicationProfile;

