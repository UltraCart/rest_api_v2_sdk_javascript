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
 * The CouponPercentOffSubtotalWithSubtotal model module.
 * @module com.ultracart.admin.v2.models/CouponPercentOffSubtotalWithSubtotal
 * @version 4.0.126-RC
 */
class CouponPercentOffSubtotalWithSubtotal {
    /**
     * Constructs a new <code>CouponPercentOffSubtotalWithSubtotal</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponPercentOffSubtotalWithSubtotal
     */
    constructor() { 
        
        CouponPercentOffSubtotalWithSubtotal.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponPercentOffSubtotalWithSubtotal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponPercentOffSubtotalWithSubtotal} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponPercentOffSubtotalWithSubtotal} The populated <code>CouponPercentOffSubtotalWithSubtotal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponPercentOffSubtotalWithSubtotal();

            if (data.hasOwnProperty('currency_code')) {
                obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
            }
            if (data.hasOwnProperty('discount_percent')) {
                obj['discount_percent'] = ApiClient.convertToType(data['discount_percent'], 'Number');
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
CouponPercentOffSubtotalWithSubtotal.prototype['currency_code'] = undefined;

/**
 * The percentage of subtotal discount
 * @member {Number} discount_percent
 */
CouponPercentOffSubtotalWithSubtotal.prototype['discount_percent'] = undefined;

/**
 * The amount of subtotal required to receive the discount percent
 * @member {Number} subtotal_amount
 */
CouponPercentOffSubtotalWithSubtotal.prototype['subtotal_amount'] = undefined;






export default CouponPercentOffSubtotalWithSubtotal;

