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
 * The CouponAmountOffSubtotalWithPurchase model module.
 * @module com.ultracart.admin.v2.models/CouponAmountOffSubtotalWithPurchase
 * @version 4.0.158
 */
class CouponAmountOffSubtotalWithPurchase {
    /**
     * Constructs a new <code>CouponAmountOffSubtotalWithPurchase</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponAmountOffSubtotalWithPurchase
     */
    constructor() { 
        
        CouponAmountOffSubtotalWithPurchase.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponAmountOffSubtotalWithPurchase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponAmountOffSubtotalWithPurchase} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponAmountOffSubtotalWithPurchase} The populated <code>CouponAmountOffSubtotalWithPurchase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponAmountOffSubtotalWithPurchase();

            if (data.hasOwnProperty('currency_code')) {
                obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
            }
            if (data.hasOwnProperty('discount_amount')) {
                obj['discount_amount'] = ApiClient.convertToType(data['discount_amount'], 'Number');
            }
            if (data.hasOwnProperty('purchase_amount')) {
                obj['purchase_amount'] = ApiClient.convertToType(data['purchase_amount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The ISO-4217 three letter currency code the customer is viewing prices in
 * @member {String} currency_code
 */
CouponAmountOffSubtotalWithPurchase.prototype['currency_code'] = undefined;

/**
 * The amount of subtotal discount
 * @member {Number} discount_amount
 */
CouponAmountOffSubtotalWithPurchase.prototype['discount_amount'] = undefined;

/**
 * The purchase amount to qualify for subtotal discount and free shipping
 * @member {Number} purchase_amount
 */
CouponAmountOffSubtotalWithPurchase.prototype['purchase_amount'] = undefined;






export default CouponAmountOffSubtotalWithPurchase;

