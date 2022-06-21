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
 * The OrderQuote model module.
 * @module com.ultracart.admin.v2.models/OrderQuote
 * @version 4.0.6-RC
 */
class OrderQuote {
    /**
     * Constructs a new <code>OrderQuote</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderQuote
     */
    constructor() { 
        
        OrderQuote.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderQuote</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderQuote} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderQuote} The populated <code>OrderQuote</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderQuote();

            if (data.hasOwnProperty('quote_expiration_dts')) {
                obj['quote_expiration_dts'] = ApiClient.convertToType(data['quote_expiration_dts'], 'String');
            }
            if (data.hasOwnProperty('quoted_by')) {
                obj['quoted_by'] = ApiClient.convertToType(data['quoted_by'], 'String');
            }
            if (data.hasOwnProperty('quoted_dts')) {
                obj['quoted_dts'] = ApiClient.convertToType(data['quoted_dts'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Expiration of quote at date/time
 * @member {String} quote_expiration_dts
 */
OrderQuote.prototype['quote_expiration_dts'] = undefined;

/**
 * Quoted by user
 * @member {String} quoted_by
 */
OrderQuote.prototype['quoted_by'] = undefined;

/**
 * Quoted on date/time
 * @member {String} quoted_dts
 */
OrderQuote.prototype['quoted_dts'] = undefined;






export default OrderQuote;

