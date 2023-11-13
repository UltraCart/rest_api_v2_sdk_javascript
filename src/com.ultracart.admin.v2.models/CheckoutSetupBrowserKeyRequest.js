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
 * The CheckoutSetupBrowserKeyRequest model module.
 * @module com.ultracart.admin.v2.models/CheckoutSetupBrowserKeyRequest
 * @version 4.0.188
 */
class CheckoutSetupBrowserKeyRequest {
    /**
     * Constructs a new <code>CheckoutSetupBrowserKeyRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/CheckoutSetupBrowserKeyRequest
     */
    constructor() { 
        
        CheckoutSetupBrowserKeyRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CheckoutSetupBrowserKeyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CheckoutSetupBrowserKeyRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CheckoutSetupBrowserKeyRequest} The populated <code>CheckoutSetupBrowserKeyRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CheckoutSetupBrowserKeyRequest();

            if (data.hasOwnProperty('allowed_referrers')) {
                obj['allowed_referrers'] = ApiClient.convertToType(data['allowed_referrers'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Allowed referrers.  If URLs are specified, automatic translation will convert them to proper allowed referrer maskes.
 * @member {Array.<String>} allowed_referrers
 */
CheckoutSetupBrowserKeyRequest.prototype['allowed_referrers'] = undefined;






export default CheckoutSetupBrowserKeyRequest;

