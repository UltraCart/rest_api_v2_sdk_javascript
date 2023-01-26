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
 * The Currency model module.
 * @module com.ultracart.admin.v2.models/Currency
 * @version 4.0.126-RC
 */
class Currency {
    /**
     * Constructs a new <code>Currency</code>.
     * @alias module:com.ultracart.admin.v2.models/Currency
     */
    constructor() { 
        
        Currency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Currency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Currency} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Currency} The populated <code>Currency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Currency();

            if (data.hasOwnProperty('currency_code')) {
                obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
            }
            if (data.hasOwnProperty('exchange_rate')) {
                obj['exchange_rate'] = ApiClient.convertToType(data['exchange_rate'], 'Number');
            }
            if (data.hasOwnProperty('localized')) {
                obj['localized'] = ApiClient.convertToType(data['localized'], 'Number');
            }
            if (data.hasOwnProperty('localized_formatted')) {
                obj['localized_formatted'] = ApiClient.convertToType(data['localized_formatted'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Currency code of the localized value
 * @member {String} currency_code
 */
Currency.prototype['currency_code'] = undefined;

/**
 * Exchange rate used to localize
 * @member {Number} exchange_rate
 */
Currency.prototype['exchange_rate'] = undefined;

/**
 * Value localized to the customer
 * @member {Number} localized
 */
Currency.prototype['localized'] = undefined;

/**
 * Value localized and formatted for the customer
 * @member {String} localized_formatted
 */
Currency.prototype['localized_formatted'] = undefined;

/**
 * Value in base currency
 * @member {Number} value
 */
Currency.prototype['value'] = undefined;






export default Currency;

