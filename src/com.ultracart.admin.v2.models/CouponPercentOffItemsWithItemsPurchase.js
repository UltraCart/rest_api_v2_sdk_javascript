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
 * The CouponPercentOffItemsWithItemsPurchase model module.
 * @module com.ultracart.admin.v2.models/CouponPercentOffItemsWithItemsPurchase
 * @version 4.0.150
 */
class CouponPercentOffItemsWithItemsPurchase {
    /**
     * Constructs a new <code>CouponPercentOffItemsWithItemsPurchase</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponPercentOffItemsWithItemsPurchase
     */
    constructor() { 
        
        CouponPercentOffItemsWithItemsPurchase.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponPercentOffItemsWithItemsPurchase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponPercentOffItemsWithItemsPurchase} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponPercentOffItemsWithItemsPurchase} The populated <code>CouponPercentOffItemsWithItemsPurchase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponPercentOffItemsWithItemsPurchase();

            if (data.hasOwnProperty('discount_percent')) {
                obj['discount_percent'] = ApiClient.convertToType(data['discount_percent'], 'Number');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], ['String']);
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('required_purchase_items')) {
                obj['required_purchase_items'] = ApiClient.convertToType(data['required_purchase_items'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * The percentage of subtotal discount
 * @member {Number} discount_percent
 */
CouponPercentOffItemsWithItemsPurchase.prototype['discount_percent'] = undefined;

/**
 * A list of items which will receive a discount if one of the required purchase items is purchased.
 * @member {Array.<String>} items
 */
CouponPercentOffItemsWithItemsPurchase.prototype['items'] = undefined;

/**
 * The (optional) maximum quantity of discounted items.
 * @member {Number} limit
 */
CouponPercentOffItemsWithItemsPurchase.prototype['limit'] = undefined;

/**
 * Required items (at least one from the list) that must be purchased for coupon to be valid
 * @member {Array.<String>} required_purchase_items
 */
CouponPercentOffItemsWithItemsPurchase.prototype['required_purchase_items'] = undefined;






export default CouponPercentOffItemsWithItemsPurchase;

