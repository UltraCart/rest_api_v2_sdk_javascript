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
 * The CouponAmountOffSubtotalFreeShippingWithPurchase model module.
 * @module com.ultracart.admin.v2.models/CouponAmountOffSubtotalFreeShippingWithPurchase
 * @version 4.0.170
 */
class CouponAmountOffSubtotalFreeShippingWithPurchase {
    /**
     * Constructs a new <code>CouponAmountOffSubtotalFreeShippingWithPurchase</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponAmountOffSubtotalFreeShippingWithPurchase
     */
    constructor() { 
        
        CouponAmountOffSubtotalFreeShippingWithPurchase.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponAmountOffSubtotalFreeShippingWithPurchase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponAmountOffSubtotalFreeShippingWithPurchase} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponAmountOffSubtotalFreeShippingWithPurchase} The populated <code>CouponAmountOffSubtotalFreeShippingWithPurchase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponAmountOffSubtotalFreeShippingWithPurchase();

            if (data.hasOwnProperty('currency_code')) {
                obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
            }
            if (data.hasOwnProperty('discount_amount')) {
                obj['discount_amount'] = ApiClient.convertToType(data['discount_amount'], 'Number');
            }
            if (data.hasOwnProperty('purchase_amount')) {
                obj['purchase_amount'] = ApiClient.convertToType(data['purchase_amount'], 'Number');
            }
            if (data.hasOwnProperty('shipping_methods')) {
                obj['shipping_methods'] = ApiClient.convertToType(data['shipping_methods'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * The ISO-4217 three letter currency code the customer is viewing prices in
 * @member {String} currency_code
 */
CouponAmountOffSubtotalFreeShippingWithPurchase.prototype['currency_code'] = undefined;

/**
 * The amount of subtotal discount
 * @member {Number} discount_amount
 */
CouponAmountOffSubtotalFreeShippingWithPurchase.prototype['discount_amount'] = undefined;

/**
 * The purchase amount to qualify for subtotal discount and free shipping
 * @member {Number} purchase_amount
 */
CouponAmountOffSubtotalFreeShippingWithPurchase.prototype['purchase_amount'] = undefined;

/**
 * One or more shipping methods that may be free
 * @member {Array.<String>} shipping_methods
 */
CouponAmountOffSubtotalFreeShippingWithPurchase.prototype['shipping_methods'] = undefined;






export default CouponAmountOffSubtotalFreeShippingWithPurchase;

