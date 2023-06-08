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
import TaxPostalCode from './TaxPostalCode';

/**
 * The TaxCity model module.
 * @module com.ultracart.admin.v2.models/TaxCity
 * @version 4.0.158
 */
class TaxCity {
    /**
     * Constructs a new <code>TaxCity</code>.
     * @alias module:com.ultracart.admin.v2.models/TaxCity
     */
    constructor() { 
        
        TaxCity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaxCity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxCity} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxCity} The populated <code>TaxCity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaxCity();

            if (data.hasOwnProperty('accounting_code')) {
                obj['accounting_code'] = ApiClient.convertToType(data['accounting_code'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('city_oid')) {
                obj['city_oid'] = ApiClient.convertToType(data['city_oid'], 'Number');
            }
            if (data.hasOwnProperty('county_oid')) {
                obj['county_oid'] = ApiClient.convertToType(data['county_oid'], 'Number');
            }
            if (data.hasOwnProperty('dont_collect_city')) {
                obj['dont_collect_city'] = ApiClient.convertToType(data['dont_collect_city'], 'Boolean');
            }
            if (data.hasOwnProperty('dont_collect_postal_code')) {
                obj['dont_collect_postal_code'] = ApiClient.convertToType(data['dont_collect_postal_code'], 'Boolean');
            }
            if (data.hasOwnProperty('postal_codes')) {
                obj['postal_codes'] = ApiClient.convertToType(data['postal_codes'], [TaxPostalCode]);
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
TaxCity.prototype['accounting_code'] = undefined;

/**
 * City
 * @member {String} city
 */
TaxCity.prototype['city'] = undefined;

/**
 * Tax record object identifier used internally by database
 * @member {Number} city_oid
 */
TaxCity.prototype['city_oid'] = undefined;

/**
 * Tax record object identifier used internally by database
 * @member {Number} county_oid
 */
TaxCity.prototype['county_oid'] = undefined;

/**
 * Flag instructing engine to not collect city tax for this city
 * @member {Boolean} dont_collect_city
 */
TaxCity.prototype['dont_collect_city'] = undefined;

/**
 * Flag instructing engine to not collect postal code tax for this city
 * @member {Boolean} dont_collect_postal_code
 */
TaxCity.prototype['dont_collect_postal_code'] = undefined;

/**
 * Postal Codes within this city
 * @member {Array.<module:com.ultracart.admin.v2.models/TaxPostalCode>} postal_codes
 */
TaxCity.prototype['postal_codes'] = undefined;

/**
 * Tax Rate
 * @member {Number} tax_rate
 */
TaxCity.prototype['tax_rate'] = undefined;

/**
 * Tax rate formatted
 * @member {String} tax_rate_formatted
 */
TaxCity.prototype['tax_rate_formatted'] = undefined;






export default TaxCity;

