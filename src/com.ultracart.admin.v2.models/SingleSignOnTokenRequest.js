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
 * The SingleSignOnTokenRequest model module.
 * @module com.ultracart.admin.v2.models/SingleSignOnTokenRequest
 * @version 4.1.16
 */
class SingleSignOnTokenRequest {
    /**
     * Constructs a new <code>SingleSignOnTokenRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/SingleSignOnTokenRequest
     */
    constructor() { 
        
        SingleSignOnTokenRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SingleSignOnTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/SingleSignOnTokenRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/SingleSignOnTokenRequest} The populated <code>SingleSignOnTokenRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SingleSignOnTokenRequest();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('grant_type')) {
                obj['grant_type'] = ApiClient.convertToType(data['grant_type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The code received on the redirect URI after the customer approved the single sign on request.
 * @member {String} code
 */
SingleSignOnTokenRequest.prototype['code'] = undefined;

/**
 * Grant type.  The value should be simple_key.
 * @member {String} grant_type
 */
SingleSignOnTokenRequest.prototype['grant_type'] = undefined;






export default SingleSignOnTokenRequest;

