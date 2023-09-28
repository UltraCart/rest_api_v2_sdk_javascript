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
 * The CouponDiscountItems model module.
 * @module com.ultracart.admin.v2.models/CouponDiscountItems
 * @version 4.0.179
 */
class CouponDiscountItems {
    /**
     * Constructs a new <code>CouponDiscountItems</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponDiscountItems
     */
    constructor() { 
        
        CouponDiscountItems.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponDiscountItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponDiscountItems} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponDiscountItems} The populated <code>CouponDiscountItems</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponDiscountItems();

            if (data.hasOwnProperty('currency_code')) {
                obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
            }
            if (data.hasOwnProperty('discount_price')) {
                obj['discount_price'] = ApiClient.convertToType(data['discount_price'], 'Number');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], ['String']);
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The ISO-4217 three letter currency code the customer is viewing prices in
 * @member {String} currency_code
 */
CouponDiscountItems.prototype['currency_code'] = undefined;

/**
 * The price (unit cost) of the discounted item
 * @member {Number} discount_price
 */
CouponDiscountItems.prototype['discount_price'] = undefined;

/**
 * A list of items that are eligible for this discount_price.
 * @member {Array.<String>} items
 */
CouponDiscountItems.prototype['items'] = undefined;

/**
 * The (optional) maximum quantity of discounted items.
 * @member {Number} limit
 */
CouponDiscountItems.prototype['limit'] = undefined;






export default CouponDiscountItems;

