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
 * The EmailVerifyTokenRequest model module.
 * @module com.ultracart.admin.v2.models/EmailVerifyTokenRequest
 * @version 4.0.39-RC
 */
class EmailVerifyTokenRequest {
    /**
     * Constructs a new <code>EmailVerifyTokenRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailVerifyTokenRequest
     */
    constructor() { 
        
        EmailVerifyTokenRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailVerifyTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailVerifyTokenRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailVerifyTokenRequest} The populated <code>EmailVerifyTokenRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailVerifyTokenRequest();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }


}

/**
 * email
 * @member {String} email
 */
EmailVerifyTokenRequest.prototype['email'] = undefined;

/**
 * password
 * @member {String} password
 */
EmailVerifyTokenRequest.prototype['password'] = undefined;






export default EmailVerifyTokenRequest;

