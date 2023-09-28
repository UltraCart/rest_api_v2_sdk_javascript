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
 * The CouponAmountShippingWithSubtotal model module.
 * @module com.ultracart.admin.v2.models/CouponAmountShippingWithSubtotal
 * @version 4.0.179
 */
class CouponAmountShippingWithSubtotal {
    /**
     * Constructs a new <code>CouponAmountShippingWithSubtotal</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponAmountShippingWithSubtotal
     */
    constructor() { 
        
        CouponAmountShippingWithSubtotal.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponAmountShippingWithSubtotal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponAmountShippingWithSubtotal} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponAmountShippingWithSubtotal} The populated <code>CouponAmountShippingWithSubtotal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponAmountShippingWithSubtotal();

            if (data.hasOwnProperty('currency_code')) {
                obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
            }
            if (data.hasOwnProperty('purchase_amount')) {
                obj['purchase_amount'] = ApiClient.convertToType(data['purchase_amount'], 'Number');
            }
            if (data.hasOwnProperty('shipping_amount')) {
                obj['shipping_amount'] = ApiClient.convertToType(data['shipping_amount'], 'Number');
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
CouponAmountShippingWithSubtotal.prototype['currency_code'] = undefined;

/**
 * The purchase amount to qualify for subtotal discount and free shipping
 * @member {Number} purchase_amount
 */
CouponAmountShippingWithSubtotal.prototype['purchase_amount'] = undefined;

/**
 * The amount of the shipping cost (this is not a discount, this is the actual cost of shipping)
 * @member {Number} shipping_amount
 */
CouponAmountShippingWithSubtotal.prototype['shipping_amount'] = undefined;

/**
 * One or more shipping methods that may be used with this coupon
 * @member {Array.<String>} shipping_methods
 */
CouponAmountShippingWithSubtotal.prototype['shipping_methods'] = undefined;






export default CouponAmountShippingWithSubtotal;

