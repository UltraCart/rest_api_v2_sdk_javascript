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
import TaxProviderAvalaraCompany from './TaxProviderAvalaraCompany';

/**
 * The TaxProviderAvalaraCompaniesResult model module.
 * @module com.ultracart.admin.v2.models/TaxProviderAvalaraCompaniesResult
 * @version 4.0.146
 */
class TaxProviderAvalaraCompaniesResult {
    /**
     * Constructs a new <code>TaxProviderAvalaraCompaniesResult</code>.
     * @alias module:com.ultracart.admin.v2.models/TaxProviderAvalaraCompaniesResult
     */
    constructor() { 
        
        TaxProviderAvalaraCompaniesResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaxProviderAvalaraCompaniesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderAvalaraCompaniesResult} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxProviderAvalaraCompaniesResult} The populated <code>TaxProviderAvalaraCompaniesResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaxProviderAvalaraCompaniesResult();

            if (data.hasOwnProperty('companies')) {
                obj['companies'] = ApiClient.convertToType(data['companies'], [TaxProviderAvalaraCompany]);
            }
        }
        return obj;
    }


}

/**
 * Tax companies configured by the merchant
 * @member {Array.<module:com.ultracart.admin.v2.models/TaxProviderAvalaraCompany>} companies
 */
TaxProviderAvalaraCompaniesResult.prototype['companies'] = undefined;






export default TaxProviderAvalaraCompaniesResult;

