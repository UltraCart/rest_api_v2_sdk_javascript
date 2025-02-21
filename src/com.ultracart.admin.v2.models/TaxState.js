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
import TaxCounty from './TaxCounty';

/**
 * The TaxState model module.
 * @module com.ultracart.admin.v2.models/TaxState
 * @version 4.1.0
 */
class TaxState {
    /**
     * Constructs a new <code>TaxState</code>.
     * @alias module:com.ultracart.admin.v2.models/TaxState
     */
    constructor() { 
        
        TaxState.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaxState</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxState} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxState} The populated <code>TaxState</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaxState();

            if (data.hasOwnProperty('accounting_code')) {
                obj['accounting_code'] = ApiClient.convertToType(data['accounting_code'], 'String');
            }
            if (data.hasOwnProperty('counties')) {
                obj['counties'] = ApiClient.convertToType(data['counties'], [TaxCounty]);
            }
            if (data.hasOwnProperty('country_oid')) {
                obj['country_oid'] = ApiClient.convertToType(data['country_oid'], 'Number');
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
            if (data.hasOwnProperty('dont_collect_state')) {
                obj['dont_collect_state'] = ApiClient.convertToType(data['dont_collect_state'], 'Boolean');
            }
            if (data.hasOwnProperty('exempt_digital_items')) {
                obj['exempt_digital_items'] = ApiClient.convertToType(data['exempt_digital_items'], 'Boolean');
            }
            if (data.hasOwnProperty('exempt_physical_items')) {
                obj['exempt_physical_items'] = ApiClient.convertToType(data['exempt_physical_items'], 'Boolean');
            }
            if (data.hasOwnProperty('exempt_service_items')) {
                obj['exempt_service_items'] = ApiClient.convertToType(data['exempt_service_items'], 'Boolean');
            }
            if (data.hasOwnProperty('state_code')) {
                obj['state_code'] = ApiClient.convertToType(data['state_code'], 'String');
            }
            if (data.hasOwnProperty('state_oid')) {
                obj['state_oid'] = ApiClient.convertToType(data['state_oid'], 'Number');
            }
            if (data.hasOwnProperty('tax_gift_charge')) {
                obj['tax_gift_charge'] = ApiClient.convertToType(data['tax_gift_charge'], 'Boolean');
            }
            if (data.hasOwnProperty('tax_gift_wrap')) {
                obj['tax_gift_wrap'] = ApiClient.convertToType(data['tax_gift_wrap'], 'Boolean');
            }
            if (data.hasOwnProperty('tax_rate')) {
                obj['tax_rate'] = ApiClient.convertToType(data['tax_rate'], 'Number');
            }
            if (data.hasOwnProperty('tax_rate_formatted')) {
                obj['tax_rate_formatted'] = ApiClient.convertToType(data['tax_rate_formatted'], 'String');
            }
            if (data.hasOwnProperty('tax_shipping')) {
                obj['tax_shipping'] = ApiClient.convertToType(data['tax_shipping'], 'Boolean');
            }
            if (data.hasOwnProperty('use_ultracart_managed_rates')) {
                obj['use_ultracart_managed_rates'] = ApiClient.convertToType(data['use_ultracart_managed_rates'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Accounting code for programs such as QuickBooks
 * @member {String} accounting_code
 */
TaxState.prototype['accounting_code'] = undefined;

/**
 * Counties within this state
 * @member {Array.<module:com.ultracart.admin.v2.models/TaxCounty>} counties
 */
TaxState.prototype['counties'] = undefined;

/**
 * Tax record object identifier used internally by database
 * @member {Number} country_oid
 */
TaxState.prototype['country_oid'] = undefined;

/**
 * Flag instructing engine to not collect city tax for this state
 * @member {Boolean} dont_collect_city
 */
TaxState.prototype['dont_collect_city'] = undefined;

/**
 * Flag instructing engine to not collect county tax for this state
 * @member {Boolean} dont_collect_county
 */
TaxState.prototype['dont_collect_county'] = undefined;

/**
 * Flag instructing engine to not collect postal code tax for this state
 * @member {Boolean} dont_collect_postal_code
 */
TaxState.prototype['dont_collect_postal_code'] = undefined;

/**
 * Flag instructing engine to not collect state tax for this state
 * @member {Boolean} dont_collect_state
 */
TaxState.prototype['dont_collect_state'] = undefined;

/**
 * True if digital items are exempt from sales tax in this state.
 * @member {Boolean} exempt_digital_items
 */
TaxState.prototype['exempt_digital_items'] = undefined;

/**
 * True if physical items are exempt from sales tax in this state.
 * @member {Boolean} exempt_physical_items
 */
TaxState.prototype['exempt_physical_items'] = undefined;

/**
 * True if service items are exempt from sales tax in this state.
 * @member {Boolean} exempt_service_items
 */
TaxState.prototype['exempt_service_items'] = undefined;

/**
 * State code
 * @member {String} state_code
 */
TaxState.prototype['state_code'] = undefined;

/**
 * Tax record object identifier used internally by database
 * @member {Number} state_oid
 */
TaxState.prototype['state_oid'] = undefined;

/**
 * True if taxation within this jurisdiction should charge tax on gift charge
 * @member {Boolean} tax_gift_charge
 */
TaxState.prototype['tax_gift_charge'] = undefined;

/**
 * True if taxation within this jurisdiction should charge tax on gift wrap
 * @member {Boolean} tax_gift_wrap
 */
TaxState.prototype['tax_gift_wrap'] = undefined;

/**
 * Tax Rate
 * @member {Number} tax_rate
 */
TaxState.prototype['tax_rate'] = undefined;

/**
 * Tax rate formatted
 * @member {String} tax_rate_formatted
 */
TaxState.prototype['tax_rate_formatted'] = undefined;

/**
 * True if taxation within this jurisdiction should charge tax on shipping
 * @member {Boolean} tax_shipping
 */
TaxState.prototype['tax_shipping'] = undefined;

/**
 * If true, use UltraCart managed rates for this state
 * @member {Boolean} use_ultracart_managed_rates
 */
TaxState.prototype['use_ultracart_managed_rates'] = undefined;






export default TaxState;

