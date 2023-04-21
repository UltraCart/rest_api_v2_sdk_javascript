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
 * The CouponAmountOffShippingWithItemsPurchase model module.
 * @module com.ultracart.admin.v2.models/CouponAmountOffShippingWithItemsPurchase
 * @version 4.0.150
 */
class CouponAmountOffShippingWithItemsPurchase {
    /**
     * Constructs a new <code>CouponAmountOffShippingWithItemsPurchase</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponAmountOffShippingWithItemsPurchase
     */
    constructor() { 
        
        CouponAmountOffShippingWithItemsPurchase.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponAmountOffShippingWithItemsPurchase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponAmountOffShippingWithItemsPurchase} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponAmountOffShippingWithItemsPurchase} The populated <code>CouponAmountOffShippingWithItemsPurchase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponAmountOffShippingWithItemsPurchase();

            if (data.hasOwnProperty('currency_code')) {
                obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
            }
            if (data.hasOwnProperty('discount_amount')) {
                obj['discount_amount'] = ApiClient.convertToType(data['discount_amount'], 'Number');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], ['String']);
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
CouponAmountOffShippingWithItemsPurchase.prototype['currency_code'] = undefined;

/**
 * The amount of shipping discount
 * @member {Number} discount_amount
 */
CouponAmountOffShippingWithItemsPurchase.prototype['discount_amount'] = undefined;

/**
 * A list of items of which at least one must be purchased for coupon to be valid.
 * @member {Array.<String>} items
 */
CouponAmountOffShippingWithItemsPurchase.prototype['items'] = undefined;

/**
 * One or more shipping methods that may receive this discount
 * @member {Array.<String>} shipping_methods
 */
CouponAmountOffShippingWithItemsPurchase.prototype['shipping_methods'] = undefined;






export default CouponAmountOffShippingWithItemsPurchase;

