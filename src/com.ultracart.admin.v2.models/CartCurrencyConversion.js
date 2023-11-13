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
import Currency from './Currency';

/**
 * The CartCurrencyConversion model module.
 * @module com.ultracart.admin.v2.models/CartCurrencyConversion
 * @version 4.0.188
 */
class CartCurrencyConversion {
    /**
     * Constructs a new <code>CartCurrencyConversion</code>.
     * @alias module:com.ultracart.admin.v2.models/CartCurrencyConversion
     */
    constructor() { 
        
        CartCurrencyConversion.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartCurrencyConversion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartCurrencyConversion} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartCurrencyConversion} The populated <code>CartCurrencyConversion</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartCurrencyConversion();

            if (data.hasOwnProperty('base_currency_Code')) {
                obj['base_currency_Code'] = ApiClient.convertToType(data['base_currency_Code'], 'String');
            }
            if (data.hasOwnProperty('currencies')) {
                obj['currencies'] = ApiClient.convertToType(data['currencies'], [Currency]);
            }
        }
        return obj;
    }


}

/**
 * Base currency code for this merchant
 * @member {String} base_currency_Code
 */
CartCurrencyConversion.prototype['base_currency_Code'] = undefined;

/**
 * Conversion information for 1 unit of base currency to target currencies
 * @member {Array.<module:com.ultracart.admin.v2.models/Currency>} currencies
 */
CartCurrencyConversion.prototype['currencies'] = undefined;






export default CartCurrencyConversion;

