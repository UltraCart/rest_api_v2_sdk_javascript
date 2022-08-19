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
 * The CouponPercentOffItemsAndFreeShipping model module.
 * @module com.ultracart.admin.v2.models/CouponPercentOffItemsAndFreeShipping
 * @version 4.0.56-RC
 */
class CouponPercentOffItemsAndFreeShipping {
    /**
     * Constructs a new <code>CouponPercentOffItemsAndFreeShipping</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponPercentOffItemsAndFreeShipping
     */
    constructor() { 
        
        CouponPercentOffItemsAndFreeShipping.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponPercentOffItemsAndFreeShipping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponPercentOffItemsAndFreeShipping} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponPercentOffItemsAndFreeShipping} The populated <code>CouponPercentOffItemsAndFreeShipping</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponPercentOffItemsAndFreeShipping();

            if (data.hasOwnProperty('discount_percent')) {
                obj['discount_percent'] = ApiClient.convertToType(data['discount_percent'], 'Number');
            }
            if (data.hasOwnProperty('excluded_items')) {
                obj['excluded_items'] = ApiClient.convertToType(data['excluded_items'], ['String']);
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * The percentage of subtotal discount
 * @member {Number} discount_percent
 */
CouponPercentOffItemsAndFreeShipping.prototype['discount_percent'] = undefined;

/**
 * A list of items which cannot be discounted.
 * @member {Array.<String>} excluded_items
 */
CouponPercentOffItemsAndFreeShipping.prototype['excluded_items'] = undefined;

/**
 * An optional list of items which will receive a discount.  If blank, discount applies to all items except excluded items.
 * @member {Array.<String>} items
 */
CouponPercentOffItemsAndFreeShipping.prototype['items'] = undefined;






export default CouponPercentOffItemsAndFreeShipping;

