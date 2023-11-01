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
import EmailThirdPartyProvider from './EmailThirdPartyProvider';

/**
 * The EmailThirdPartyListImportRequest model module.
 * @module com.ultracart.admin.v2.models/EmailThirdPartyListImportRequest
 * @version 4.0.185
 */
class EmailThirdPartyListImportRequest {
    /**
     * Constructs a new <code>EmailThirdPartyListImportRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailThirdPartyListImportRequest
     */
    constructor() { 
        
        EmailThirdPartyListImportRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailThirdPartyListImportRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailThirdPartyListImportRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailThirdPartyListImportRequest} The populated <code>EmailThirdPartyListImportRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailThirdPartyListImportRequest();

            if (data.hasOwnProperty('providers')) {
                obj['providers'] = ApiClient.convertToType(data['providers'], [EmailThirdPartyProvider]);
            }
        }
        return obj;
    }


}

/**
 * providers
 * @member {Array.<module:com.ultracart.admin.v2.models/EmailThirdPartyProvider>} providers
 */
EmailThirdPartyListImportRequest.prototype['providers'] = undefined;






export default EmailThirdPartyListImportRequest;

