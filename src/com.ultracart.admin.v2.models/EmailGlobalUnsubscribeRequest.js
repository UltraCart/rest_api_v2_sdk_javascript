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
 * The EmailGlobalUnsubscribeRequest model module.
 * @module com.ultracart.admin.v2.models/EmailGlobalUnsubscribeRequest
 * @version 4.0.245
 */
class EmailGlobalUnsubscribeRequest {
    /**
     * Constructs a new <code>EmailGlobalUnsubscribeRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailGlobalUnsubscribeRequest
     */
    constructor() { 
        
        EmailGlobalUnsubscribeRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailGlobalUnsubscribeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailGlobalUnsubscribeRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailGlobalUnsubscribeRequest} The populated <code>EmailGlobalUnsubscribeRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailGlobalUnsubscribeRequest();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} email
 */
EmailGlobalUnsubscribeRequest.prototype['email'] = undefined;






export default EmailGlobalUnsubscribeRequest;

