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
 * The CheckoutSetupBrowserKeyResponse model module.
 * @module com.ultracart.admin.v2.models/CheckoutSetupBrowserKeyResponse
 * @version 4.0.244
 */
class CheckoutSetupBrowserKeyResponse {
    /**
     * Constructs a new <code>CheckoutSetupBrowserKeyResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/CheckoutSetupBrowserKeyResponse
     */
    constructor() { 
        
        CheckoutSetupBrowserKeyResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CheckoutSetupBrowserKeyResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CheckoutSetupBrowserKeyResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CheckoutSetupBrowserKeyResponse} The populated <code>CheckoutSetupBrowserKeyResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CheckoutSetupBrowserKeyResponse();

            if (data.hasOwnProperty('browser_key')) {
                obj['browser_key'] = ApiClient.convertToType(data['browser_key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Browser key that is used to authenticate against the new linked application.
 * @member {String} browser_key
 */
CheckoutSetupBrowserKeyResponse.prototype['browser_key'] = undefined;






export default CheckoutSetupBrowserKeyResponse;

