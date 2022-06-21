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
import TaxCity from './TaxCity';

/**
 * The TaxCounty model module.
 * @module com.ultracart.admin.v2.models/TaxCounty
 * @version 4.0.5
 */
class TaxCounty {
    /**
     * Constructs a new <code>TaxCounty</code>.
     * @alias module:com.ultracart.admin.v2.models/TaxCounty
     */
    constructor() { 
        
        TaxCounty.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaxCounty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxCounty} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxCounty} The populated <code>TaxCounty</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaxCounty();

            if (data.hasOwnProperty('accounting_code')) {
                obj['accounting_code'] = ApiClient.convertToType(data['accounting_code'], 'String');
            }
            if (data.hasOwnProperty('cities')) {
                obj['cities'] = ApiClient.convertToType(data['cities'], [TaxCity]);
            }
            if (data.hasOwnProperty('county')) {
                obj['county'] = ApiClient.convertToType(data['county'], 'String');
            }
            if (data.hasOwnProperty('county_oid')) {
                obj['county_oid'] = ApiClient.convertToType(data['county_oid'], 'Number');
            }
            if (data.hasOwnProperty('dont_collect_city')) {
                obj['dont_collect_city'] = ApiClient.convertToType(data['dont_collect_city'], 'Boolean');
            }
            if (data.hasOwnProperty('dont_collect_county')) {
                obj['dont_collect_county'] = ApiClient.convertToType(data['dont_collect_county'], 'Boolean');
            }
            if (data.hasOwnProperty('dont_collect_postal_code')) {
                obj['dont_collect_postal_code'] = ApiClient.convertToType(data['dont_collect_postal_code'], 'Boolean');
            }
            if (data.hasOwnProperty('state_oid')) {
                obj['state_oid'] = ApiClient.convertToType(data['state_oid'], 'Number');
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
TaxCounty.prototype['accounting_code'] = undefined;

/**
 * Cities within this city
 * @member {Array.<module:com.ultracart.admin.v2.models/TaxCity>} cities
 */
TaxCounty.prototype['cities'] = undefined;

/**
 * County
 * @member {String} county
 */
TaxCounty.prototype['county'] = undefined;

/**
 * Tax record object identifier used internally by database
 * @member {Number} county_oid
 */
TaxCounty.prototype['county_oid'] = undefined;

/**
 * Flag instructing engine to not collect city tax for this county
 * @member {Boolean} dont_collect_city
 */
TaxCounty.prototype['dont_collect_city'] = undefined;

/**
 * Flag instructing engine to not collect county tax for this county
 * @member {Boolean} dont_collect_county
 */
TaxCounty.prototype['dont_collect_county'] = undefined;

/**
 * Flag instructing engine to not collect postal code tax for this county
 * @member {Boolean} dont_collect_postal_code
 */
TaxCounty.prototype['dont_collect_postal_code'] = undefined;

/**
 * Tax record object identifier used internally by database
 * @member {Number} state_oid
 */
TaxCounty.prototype['state_oid'] = undefined;

/**
 * Tax Rate
 * @member {Number} tax_rate
 */
TaxCounty.prototype['tax_rate'] = undefined;

/**
 * Tax rate formatted
 * @member {String} tax_rate_formatted
 */
TaxCounty.prototype['tax_rate_formatted'] = undefined;






export default TaxCounty;

