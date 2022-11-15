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
 * The SingleSignOnTokenResponse model module.
 * @module com.ultracart.admin.v2.models/SingleSignOnTokenResponse
 * @version 4.0.82-RC
 */
class SingleSignOnTokenResponse {
    /**
     * Constructs a new <code>SingleSignOnTokenResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/SingleSignOnTokenResponse
     */
    constructor() { 
        
        SingleSignOnTokenResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SingleSignOnTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/SingleSignOnTokenResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/SingleSignOnTokenResponse} The populated <code>SingleSignOnTokenResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SingleSignOnTokenResponse();

            if (data.hasOwnProperty('expiration_dts')) {
                obj['expiration_dts'] = ApiClient.convertToType(data['expiration_dts'], 'String');
            }
            if (data.hasOwnProperty('ip_address')) {
                obj['ip_address'] = ApiClient.convertToType(data['ip_address'], 'String');
            }
            if (data.hasOwnProperty('simple_key')) {
                obj['simple_key'] = ApiClient.convertToType(data['simple_key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Expiration date/time after which time the key is no longer valid
 * @member {String} expiration_dts
 */
SingleSignOnTokenResponse.prototype['expiration_dts'] = undefined;

/**
 * IP address of the user which we recommend you lock the simple key's usage to.
 * @member {String} ip_address
 */
SingleSignOnTokenResponse.prototype['ip_address'] = undefined;

/**
 * The simple key that can then be used to make SDK calls on the users behalf.
 * @member {String} simple_key
 */
SingleSignOnTokenResponse.prototype['simple_key'] = undefined;






export default SingleSignOnTokenResponse;

