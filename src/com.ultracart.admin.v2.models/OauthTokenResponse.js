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
 * The OauthTokenResponse model module.
 * @module com.ultracart.admin.v2.models/OauthTokenResponse
 * @version 4.1.0
 */
class OauthTokenResponse {
    /**
     * Constructs a new <code>OauthTokenResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/OauthTokenResponse
     */
    constructor() { 
        
        OauthTokenResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OauthTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OauthTokenResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OauthTokenResponse} The populated <code>OauthTokenResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OauthTokenResponse();

            if (data.hasOwnProperty('access_token')) {
                obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
            if (data.hasOwnProperty('error_description')) {
                obj['error_description'] = ApiClient.convertToType(data['error_description'], 'String');
            }
            if (data.hasOwnProperty('error_uri')) {
                obj['error_uri'] = ApiClient.convertToType(data['error_uri'], 'String');
            }
            if (data.hasOwnProperty('expires_in')) {
                obj['expires_in'] = ApiClient.convertToType(data['expires_in'], 'String');
            }
            if (data.hasOwnProperty('refresh_token')) {
                obj['refresh_token'] = ApiClient.convertToType(data['refresh_token'], 'String');
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
            }
            if (data.hasOwnProperty('token_type')) {
                obj['token_type'] = ApiClient.convertToType(data['token_type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Access token to use in OAuth authenticated API call
 * @member {String} access_token
 */
OauthTokenResponse.prototype['access_token'] = undefined;

/**
 * @member {String} error
 */
OauthTokenResponse.prototype['error'] = undefined;

/**
 * @member {String} error_description
 */
OauthTokenResponse.prototype['error_description'] = undefined;

/**
 * @member {String} error_uri
 */
OauthTokenResponse.prototype['error_uri'] = undefined;

/**
 * The number of seconds since issuance when the access token will expire and need to be refreshed using the refresh token
 * @member {String} expires_in
 */
OauthTokenResponse.prototype['expires_in'] = undefined;

/**
 * The refresh token that should be used to fetch a new access token when the expiration occurs
 * @member {String} refresh_token
 */
OauthTokenResponse.prototype['refresh_token'] = undefined;

/**
 * The scope of permissions associated with teh access token
 * @member {String} scope
 */
OauthTokenResponse.prototype['scope'] = undefined;

/**
 * Type of token
 * @member {module:com.ultracart.admin.v2.models/OauthTokenResponse.TokenTypeEnum} token_type
 */
OauthTokenResponse.prototype['token_type'] = undefined;





/**
 * Allowed values for the <code>token_type</code> property.
 * @enum {String}
 * @readonly
 */
OauthTokenResponse['TokenTypeEnum'] = {

    /**
     * value: "bearer"
     * @const
     */
    "bearer": "bearer"
};



export default OauthTokenResponse;

