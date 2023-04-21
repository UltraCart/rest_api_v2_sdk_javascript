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
 * The CouponFreeItemAndShippingWithSubtotal model module.
 * @module com.ultracart.admin.v2.models/CouponFreeItemAndShippingWithSubtotal
 * @version 4.0.150
 */
class CouponFreeItemAndShippingWithSubtotal {
    /**
     * Constructs a new <code>CouponFreeItemAndShippingWithSubtotal</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponFreeItemAndShippingWithSubtotal
     */
    constructor() { 
        
        CouponFreeItemAndShippingWithSubtotal.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponFreeItemAndShippingWithSubtotal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponFreeItemAndShippingWithSubtotal} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponFreeItemAndShippingWithSubtotal} The populated <code>CouponFreeItemAndShippingWithSubtotal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponFreeItemAndShippingWithSubtotal();

            if (data.hasOwnProperty('currency_code')) {
                obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], ['String']);
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('shipping_methods')) {
                obj['shipping_methods'] = ApiClient.convertToType(data['shipping_methods'], ['String']);
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
CouponFreeItemAndShippingWithSubtotal.prototype['currency_code'] = undefined;

/**
 * A list of items that are eligible for this discount_price.
 * @member {Array.<String>} items
 */
CouponFreeItemAndShippingWithSubtotal.prototype['items'] = undefined;

/**
 * The limit of free items that may be received when purchasing multiple items
 * @member {Number} limit
 */
CouponFreeItemAndShippingWithSubtotal.prototype['limit'] = undefined;

/**
 * One or more shipping methods that may be free
 * @member {Array.<String>} shipping_methods
 */
CouponFreeItemAndShippingWithSubtotal.prototype['shipping_methods'] = undefined;

/**
 * The amount of subtotal required to receive the discount percent
 * @member {Number} subtotal_amount
 */
CouponFreeItemAndShippingWithSubtotal.prototype['subtotal_amount'] = undefined;






export default CouponFreeItemAndShippingWithSubtotal;

