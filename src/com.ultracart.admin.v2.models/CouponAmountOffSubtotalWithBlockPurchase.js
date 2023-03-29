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
 * The CouponAmountOffSubtotalWithBlockPurchase model module.
 * @module com.ultracart.admin.v2.models/CouponAmountOffSubtotalWithBlockPurchase
 * @version 4.0.144
 */
class CouponAmountOffSubtotalWithBlockPurchase {
    /**
     * Constructs a new <code>CouponAmountOffSubtotalWithBlockPurchase</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponAmountOffSubtotalWithBlockPurchase
     */
    constructor() { 
        
        CouponAmountOffSubtotalWithBlockPurchase.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponAmountOffSubtotalWithBlockPurchase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponAmountOffSubtotalWithBlockPurchase} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponAmountOffSubtotalWithBlockPurchase} The populated <code>CouponAmountOffSubtotalWithBlockPurchase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponAmountOffSubtotalWithBlockPurchase();

            if (data.hasOwnProperty('currency_code')) {
                obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
            }
            if (data.hasOwnProperty('discount_amount')) {
                obj['discount_amount'] = ApiClient.convertToType(data['discount_amount'], 'Number');
            }
            if (data.hasOwnProperty('required_purchase_item')) {
                obj['required_purchase_item'] = ApiClient.convertToType(data['required_purchase_item'], 'String');
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
CouponAmountOffSubtotalWithBlockPurchase.prototype['currency_code'] = undefined;

/**
 * The amount of subtotal discount
 * @member {Number} discount_amount
 */
CouponAmountOffSubtotalWithBlockPurchase.prototype['discount_amount'] = undefined;

/**
 * Required item that must be purchased for coupon to be valid
 * @member {String} required_purchase_item
 */
CouponAmountOffSubtotalWithBlockPurchase.prototype['required_purchase_item'] = undefined;

/**
 * Discount amount is multiplied by the number of blocks.  A block is this many quantity of the required item.
 * @member {Number} required_purchase_quantity
 */
CouponAmountOffSubtotalWithBlockPurchase.prototype['required_purchase_quantity'] = undefined;






export default CouponAmountOffSubtotalWithBlockPurchase;

