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
 * The SingleSignOnAuthorizeResponse model module.
 * @module com.ultracart.admin.v2.models/SingleSignOnAuthorizeResponse
 * @version 4.0.159
 */
class SingleSignOnAuthorizeResponse {
    /**
     * Constructs a new <code>SingleSignOnAuthorizeResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/SingleSignOnAuthorizeResponse
     */
    constructor() { 
        
        SingleSignOnAuthorizeResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SingleSignOnAuthorizeResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/SingleSignOnAuthorizeResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/SingleSignOnAuthorizeResponse} The populated <code>SingleSignOnAuthorizeResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SingleSignOnAuthorizeResponse();

            if (data.hasOwnProperty('expiration_dts')) {
                obj['expiration_dts'] = ApiClient.convertToType(data['expiration_dts'], 'String');
            }
            if (data.hasOwnProperty('login_url')) {
                obj['login_url'] = ApiClient.convertToType(data['login_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Expiration date/time after which the single sign-on login operation will have timed out
 * @member {String} expiration_dts
 */
SingleSignOnAuthorizeResponse.prototype['expiration_dts'] = undefined;

/**
 * The URL that you should redirect the customer's browser to.  This URL will begin the login process.
 * @member {String} login_url
 */
SingleSignOnAuthorizeResponse.prototype['login_url'] = undefined;






export default SingleSignOnAuthorizeResponse;

