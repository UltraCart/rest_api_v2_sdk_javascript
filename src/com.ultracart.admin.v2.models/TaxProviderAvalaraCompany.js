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
 * The TaxProviderAvalaraCompany model module.
 * @module com.ultracart.admin.v2.models/TaxProviderAvalaraCompany
 * @version 4.0.3
 */
class TaxProviderAvalaraCompany {
    /**
     * Constructs a new <code>TaxProviderAvalaraCompany</code>.
     * @alias module:com.ultracart.admin.v2.models/TaxProviderAvalaraCompany
     */
    constructor() { 
        
        TaxProviderAvalaraCompany.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaxProviderAvalaraCompany</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderAvalaraCompany} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxProviderAvalaraCompany} The populated <code>TaxProviderAvalaraCompany</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaxProviderAvalaraCompany();

            if (data.hasOwnProperty('company_code')) {
                obj['company_code'] = ApiClient.convertToType(data['company_code'], 'String');
            }
            if (data.hasOwnProperty('company_name')) {
                obj['company_name'] = ApiClient.convertToType(data['company_name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('selected')) {
                obj['selected'] = ApiClient.convertToType(data['selected'], 'Boolean');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Company code
 * @member {String} company_code
 */
TaxProviderAvalaraCompany.prototype['company_code'] = undefined;

/**
 * Company name
 * @member {String} company_name
 */
TaxProviderAvalaraCompany.prototype['company_name'] = undefined;

/**
 * Description
 * @member {String} description
 */
TaxProviderAvalaraCompany.prototype['description'] = undefined;

/**
 * Selected
 * @member {Boolean} selected
 */
TaxProviderAvalaraCompany.prototype['selected'] = undefined;

/**
 * Title
 * @member {String} title
 */
TaxProviderAvalaraCompany.prototype['title'] = undefined;






export default TaxProviderAvalaraCompany;

