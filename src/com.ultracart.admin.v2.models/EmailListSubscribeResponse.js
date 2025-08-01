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
 * The EmailListSubscribeResponse model module.
 * @module com.ultracart.admin.v2.models/EmailListSubscribeResponse
 * @version 4.1.16
 */
class EmailListSubscribeResponse {
    /**
     * Constructs a new <code>EmailListSubscribeResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailListSubscribeResponse
     */
    constructor() { 
        
        EmailListSubscribeResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailListSubscribeResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailListSubscribeResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailListSubscribeResponse} The populated <code>EmailListSubscribeResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailListSubscribeResponse();

            if (data.hasOwnProperty('added')) {
                obj['added'] = ApiClient.convertToType(data['added'], 'Number');
            }
            if (data.hasOwnProperty('memberCount')) {
                obj['memberCount'] = ApiClient.convertToType(data['memberCount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} added
 */
EmailListSubscribeResponse.prototype['added'] = undefined;

/**
 * @member {Number} memberCount
 */
EmailListSubscribeResponse.prototype['memberCount'] = undefined;






export default EmailListSubscribeResponse;

