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
 * The CouponDiscountItemWithItemPurchase model module.
 * @module com.ultracart.admin.v2.models/CouponDiscountItemWithItemPurchase
 * @version 4.0.102-RC
 */
class CouponDiscountItemWithItemPurchase {
    /**
     * Constructs a new <code>CouponDiscountItemWithItemPurchase</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponDiscountItemWithItemPurchase
     */
    constructor() { 
        
        CouponDiscountItemWithItemPurchase.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponDiscountItemWithItemPurchase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponDiscountItemWithItemPurchase} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponDiscountItemWithItemPurchase} The populated <code>CouponDiscountItemWithItemPurchase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponDiscountItemWithItemPurchase();

            if (data.hasOwnProperty('currency_code')) {
                obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
            }
            if (data.hasOwnProperty('discount_item')) {
                obj['discount_item'] = ApiClient.convertToType(data['discount_item'], 'String');
            }
            if (data.hasOwnProperty('discount_price')) {
                obj['discount_price'] = ApiClient.convertToType(data['discount_price'], 'Number');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('required_purchase_item')) {
                obj['required_purchase_item'] = ApiClient.convertToType(data['required_purchase_item'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The ISO-4217 three letter currency code the customer is viewing prices in
 * @member {String} currency_code
 */
CouponDiscountItemWithItemPurchase.prototype['currency_code'] = undefined;

/**
 * The item that will be sold at the discount_price when required_purchase_item is purchased.
 * @member {String} discount_item
 */
CouponDiscountItemWithItemPurchase.prototype['discount_item'] = undefined;

/**
 * The price (unit cost) of the discounted item
 * @member {Number} discount_price
 */
CouponDiscountItemWithItemPurchase.prototype['discount_price'] = undefined;

/**
 * The (optional) maximum quantity of discounted items.
 * @member {Number} limit
 */
CouponDiscountItemWithItemPurchase.prototype['limit'] = undefined;

/**
 * The item that must be purchased for the discount to be applied to the discount item.
 * @member {String} required_purchase_item
 */
CouponDiscountItemWithItemPurchase.prototype['required_purchase_item'] = undefined;






export default CouponDiscountItemWithItemPurchase;

