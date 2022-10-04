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
 * The EmailVerifyTokenValidateRequest model module.
 * @module com.ultracart.admin.v2.models/EmailVerifyTokenValidateRequest
 * @version 4.0.71-RC
 */
class EmailVerifyTokenValidateRequest {
    /**
     * Constructs a new <code>EmailVerifyTokenValidateRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailVerifyTokenValidateRequest
     */
    constructor() { 
        
        EmailVerifyTokenValidateRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailVerifyTokenValidateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailVerifyTokenValidateRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailVerifyTokenValidateRequest} The populated <code>EmailVerifyTokenValidateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailVerifyTokenValidateRequest();

            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * token
 * @member {String} token
 */
EmailVerifyTokenValidateRequest.prototype['token'] = undefined;






export default EmailVerifyTokenValidateRequest;

