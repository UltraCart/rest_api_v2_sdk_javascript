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
 * The CustomerQuotesSummary model module.
 * @module com.ultracart.admin.v2.models/CustomerQuotesSummary
 * @version 4.0.82-RC
 */
class CustomerQuotesSummary {
    /**
     * Constructs a new <code>CustomerQuotesSummary</code>.
     * @alias module:com.ultracart.admin.v2.models/CustomerQuotesSummary
     */
    constructor() { 
        
        CustomerQuotesSummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerQuotesSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerQuotesSummary} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerQuotesSummary} The populated <code>CustomerQuotesSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerQuotesSummary();

            if (data.hasOwnProperty('first_quote_dts')) {
                obj['first_quote_dts'] = ApiClient.convertToType(data['first_quote_dts'], 'String');
            }
            if (data.hasOwnProperty('last_quote_dts')) {
                obj['last_quote_dts'] = ApiClient.convertToType(data['last_quote_dts'], 'String');
            }
            if (data.hasOwnProperty('quote_count')) {
                obj['quote_count'] = ApiClient.convertToType(data['quote_count'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * First quote date
 * @member {String} first_quote_dts
 */
CustomerQuotesSummary.prototype['first_quote_dts'] = undefined;

/**
 * Last quote date
 * @member {String} last_quote_dts
 */
CustomerQuotesSummary.prototype['last_quote_dts'] = undefined;

/**
 * Total number of quote
 * @member {Number} quote_count
 */
CustomerQuotesSummary.prototype['quote_count'] = undefined;

/**
 * Total amount associated with the quotes
 * @member {Number} total
 */
CustomerQuotesSummary.prototype['total'] = undefined;






export default CustomerQuotesSummary;

