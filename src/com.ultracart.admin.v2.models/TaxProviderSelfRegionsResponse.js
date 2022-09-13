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
import TaxStateCode from './TaxStateCode';

/**
 * The TaxProviderSelfRegionsResponse model module.
 * @module com.ultracart.admin.v2.models/TaxProviderSelfRegionsResponse
 * @version 4.0.63-RC
 */
class TaxProviderSelfRegionsResponse {
    /**
     * Constructs a new <code>TaxProviderSelfRegionsResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/TaxProviderSelfRegionsResponse
     */
    constructor() { 
        
        TaxProviderSelfRegionsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaxProviderSelfRegionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderSelfRegionsResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxProviderSelfRegionsResponse} The populated <code>TaxProviderSelfRegionsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaxProviderSelfRegionsResponse();

            if (data.hasOwnProperty('regions')) {
                obj['regions'] = ApiClient.convertToType(data['regions'], [TaxStateCode]);
            }
        }
        return obj;
    }


}

/**
 * regions
 * @member {Array.<module:com.ultracart.admin.v2.models/TaxStateCode>} regions
 */
TaxProviderSelfRegionsResponse.prototype['regions'] = undefined;






export default TaxProviderSelfRegionsResponse;

