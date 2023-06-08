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
 * The TaxCountryCode model module.
 * @module com.ultracart.admin.v2.models/TaxCountryCode
 * @version 4.0.158
 */
class TaxCountryCode {
    /**
     * Constructs a new <code>TaxCountryCode</code>.
     * @alias module:com.ultracart.admin.v2.models/TaxCountryCode
     */
    constructor() { 
        
        TaxCountryCode.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaxCountryCode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxCountryCode} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxCountryCode} The populated <code>TaxCountryCode</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaxCountryCode();

            if (data.hasOwnProperty('accounting_code')) {
                obj['accounting_code'] = ApiClient.convertToType(data['accounting_code'], 'String');
            }
            if (data.hasOwnProperty('country_code')) {
                obj['country_code'] = ApiClient.convertToType(data['country_code'], 'String');
            }
            if (data.hasOwnProperty('country_name')) {
                obj['country_name'] = ApiClient.convertToType(data['country_name'], 'String');
            }
            if (data.hasOwnProperty('tax_rate')) {
                obj['tax_rate'] = ApiClient.convertToType(data['tax_rate'], 'Number');
            }
            if (data.hasOwnProperty('tax_rate_formatted')) {
                obj['tax_rate_formatted'] = ApiClient.convertToType(data['tax_rate_formatted'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Accounting code for programs such as QuickBooks
 * @member {String} accounting_code
 */
TaxCountryCode.prototype['accounting_code'] = undefined;

/**
 * Country code (2 characters
 * @member {String} country_code
 */
TaxCountryCode.prototype['country_code'] = undefined;

/**
 * Country name
 * @member {String} country_name
 */
TaxCountryCode.prototype['country_name'] = undefined;

/**
 * Tax Rate
 * @member {Number} tax_rate
 */
TaxCountryCode.prototype['tax_rate'] = undefined;

/**
 * Tax rate formatted
 * @member {String} tax_rate_formatted
 */
TaxCountryCode.prototype['tax_rate_formatted'] = undefined;






export default TaxCountryCode;

