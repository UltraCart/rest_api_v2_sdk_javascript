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
 * The CouponAmountOffItems model module.
 * @module com.ultracart.admin.v2.models/CouponAmountOffItems
 * @version 4.0.190
 */
class CouponAmountOffItems {
    /**
     * Constructs a new <code>CouponAmountOffItems</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponAmountOffItems
     */
    constructor() { 
        
        CouponAmountOffItems.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponAmountOffItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponAmountOffItems} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponAmountOffItems} The populated <code>CouponAmountOffItems</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponAmountOffItems();

            if (data.hasOwnProperty('currency_code')) {
                obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
            }
            if (data.hasOwnProperty('discount_amount')) {
                obj['discount_amount'] = ApiClient.convertToType(data['discount_amount'], 'Number');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], ['String']);
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The ISO-4217 three letter currency code the customer is viewing prices in
 * @member {String} currency_code
 */
CouponAmountOffItems.prototype['currency_code'] = undefined;

/**
 * The amount of shipping discount
 * @member {Number} discount_amount
 */
CouponAmountOffItems.prototype['discount_amount'] = undefined;

/**
 * A list of items which are eligible for the discount amount.
 * @member {Array.<String>} items
 */
CouponAmountOffItems.prototype['items'] = undefined;

/**
 * The limit of items which are eligible for the discount amount.
 * @member {Number} limit
 */
CouponAmountOffItems.prototype['limit'] = undefined;






export default CouponAmountOffItems;

