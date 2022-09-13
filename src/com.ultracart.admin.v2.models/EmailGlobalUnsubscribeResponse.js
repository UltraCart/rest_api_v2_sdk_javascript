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
 * The EmailGlobalUnsubscribeResponse model module.
 * @module com.ultracart.admin.v2.models/EmailGlobalUnsubscribeResponse
 * @version 4.0.63-RC
 */
class EmailGlobalUnsubscribeResponse {
    /**
     * Constructs a new <code>EmailGlobalUnsubscribeResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailGlobalUnsubscribeResponse
     */
    constructor() { 
        
        EmailGlobalUnsubscribeResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailGlobalUnsubscribeResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailGlobalUnsubscribeResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailGlobalUnsubscribeResponse} The populated <code>EmailGlobalUnsubscribeResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailGlobalUnsubscribeResponse();

            if (data.hasOwnProperty('listsUnsubscribed')) {
                obj['listsUnsubscribed'] = ApiClient.convertToType(data['listsUnsubscribed'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} listsUnsubscribed
 */
EmailGlobalUnsubscribeResponse.prototype['listsUnsubscribed'] = undefined;






export default EmailGlobalUnsubscribeResponse;

