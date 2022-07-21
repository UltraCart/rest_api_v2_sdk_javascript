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
 * The CouponAmountOffSubtotalWithItemsPurchase model module.
 * @module com.ultracart.admin.v2.models/CouponAmountOffSubtotalWithItemsPurchase
 * @version 4.0.39-RC
 */
class CouponAmountOffSubtotalWithItemsPurchase {
    /**
     * Constructs a new <code>CouponAmountOffSubtotalWithItemsPurchase</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponAmountOffSubtotalWithItemsPurchase
     */
    constructor() { 
        
        CouponAmountOffSubtotalWithItemsPurchase.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponAmountOffSubtotalWithItemsPurchase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponAmountOffSubtotalWithItemsPurchase} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponAmountOffSubtotalWithItemsPurchase} The populated <code>CouponAmountOffSubtotalWithItemsPurchase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponAmountOffSubtotalWithItemsPurchase();

            if (data.hasOwnProperty('currency_code')) {
                obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
            }
            if (data.hasOwnProperty('discount_amount')) {
                obj['discount_amount'] = ApiClient.convertToType(data['discount_amount'], 'Number');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], ['String']);
            }
            if (data.hasOwnProperty('required_purchase_quantity')) {
                obj['required_purchase_quantity'] = ApiClient.convertToType(data['required_purchase_quantity'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The ISO-4217 three letter currency code the customer is viewing prices in
 * @member {String} currency_code
 */
CouponAmountOffSubtotalWithItemsPurchase.prototype['currency_code'] = undefined;

/**
 * The amount of shipping discount
 * @member {Number} discount_amount
 */
CouponAmountOffSubtotalWithItemsPurchase.prototype['discount_amount'] = undefined;

/**
 * A list of items of which a quantity of one or many must be purchased for coupon to be valid.
 * @member {Array.<String>} items
 */
CouponAmountOffSubtotalWithItemsPurchase.prototype['items'] = undefined;

/**
 * The quantity of items that must be purchased for the discount to be applied.
 * @member {Number} required_purchase_quantity
 */
CouponAmountOffSubtotalWithItemsPurchase.prototype['required_purchase_quantity'] = undefined;






export default CouponAmountOffSubtotalWithItemsPurchase;

