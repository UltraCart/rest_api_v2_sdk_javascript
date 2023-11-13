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
 * The OauthRevokeSuccessResponse model module.
 * @module com.ultracart.admin.v2.models/OauthRevokeSuccessResponse
 * @version 4.0.188
 */
class OauthRevokeSuccessResponse {
    /**
     * Constructs a new <code>OauthRevokeSuccessResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/OauthRevokeSuccessResponse
     */
    constructor() { 
        
        OauthRevokeSuccessResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OauthRevokeSuccessResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OauthRevokeSuccessResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OauthRevokeSuccessResponse} The populated <code>OauthRevokeSuccessResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OauthRevokeSuccessResponse();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('successful')) {
                obj['successful'] = ApiClient.convertToType(data['successful'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Message confirming revocation of credentials
 * @member {String} message
 */
OauthRevokeSuccessResponse.prototype['message'] = undefined;

/**
 * True if revoke was successful
 * @member {Boolean} successful
 */
OauthRevokeSuccessResponse.prototype['successful'] = undefined;






export default OauthRevokeSuccessResponse;

