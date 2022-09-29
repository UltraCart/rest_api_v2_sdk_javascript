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
 * The CouponFreeItemWithSubtotal model module.
 * @module com.ultracart.admin.v2.models/CouponFreeItemWithSubtotal
 * @version 4.0.70-RC
 */
class CouponFreeItemWithSubtotal {
    /**
     * Constructs a new <code>CouponFreeItemWithSubtotal</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponFreeItemWithSubtotal
     */
    constructor() { 
        
        CouponFreeItemWithSubtotal.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponFreeItemWithSubtotal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponFreeItemWithSubtotal} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponFreeItemWithSubtotal} The populated <code>CouponFreeItemWithSubtotal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponFreeItemWithSubtotal();

            if (data.hasOwnProperty('currency_code')) {
                obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], ['String']);
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('subtotal_amount')) {
                obj['subtotal_amount'] = ApiClient.convertToType(data['subtotal_amount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The ISO-4217 three letter currency code the customer is viewing prices in
 * @member {String} currency_code
 */
CouponFreeItemWithSubtotal.prototype['currency_code'] = undefined;

/**
 * A list of items that are eligible for this discount_price.
 * @member {Array.<String>} items
 */
CouponFreeItemWithSubtotal.prototype['items'] = undefined;

/**
 * The limit of free items that may be received when purchasing multiple items
 * @member {Number} limit
 */
CouponFreeItemWithSubtotal.prototype['limit'] = undefined;

/**
 * The amount of subtotal required to receive the discount percent
 * @member {Number} subtotal_amount
 */
CouponFreeItemWithSubtotal.prototype['subtotal_amount'] = undefined;






export default CouponFreeItemWithSubtotal;

