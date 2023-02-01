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
 * The SingleSignOnAuthorizeRequest model module.
 * @module com.ultracart.admin.v2.models/SingleSignOnAuthorizeRequest
 * @version 4.0.129
 */
class SingleSignOnAuthorizeRequest {
    /**
     * Constructs a new <code>SingleSignOnAuthorizeRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/SingleSignOnAuthorizeRequest
     */
    constructor() { 
        
        SingleSignOnAuthorizeRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SingleSignOnAuthorizeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/SingleSignOnAuthorizeRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/SingleSignOnAuthorizeRequest} The populated <code>SingleSignOnAuthorizeRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SingleSignOnAuthorizeRequest();

            if (data.hasOwnProperty('redirect_uri')) {
                obj['redirect_uri'] = ApiClient.convertToType(data['redirect_uri'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The URL that the customer should be redirected to after they have approved a single sign on session.
 * @member {String} redirect_uri
 */
SingleSignOnAuthorizeRequest.prototype['redirect_uri'] = undefined;

/**
 * An optional state variable that you provide.  It will be returned to you on the redirect.  You can inspect the state to validate the request is legitimate.  We recommend using this field.
 * @member {String} state
 */
SingleSignOnAuthorizeRequest.prototype['state'] = undefined;






export default SingleSignOnAuthorizeRequest;

