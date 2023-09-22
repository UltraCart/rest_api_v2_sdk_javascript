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
 * The CouponPercentOffItemWithItemsQuantityPurchase model module.
 * @module com.ultracart.admin.v2.models/CouponPercentOffItemWithItemsQuantityPurchase
 * @version 4.0.178
 */
class CouponPercentOffItemWithItemsQuantityPurchase {
    /**
     * Constructs a new <code>CouponPercentOffItemWithItemsQuantityPurchase</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponPercentOffItemWithItemsQuantityPurchase
     */
    constructor() { 
        
        CouponPercentOffItemWithItemsQuantityPurchase.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponPercentOffItemWithItemsQuantityPurchase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponPercentOffItemWithItemsQuantityPurchase} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponPercentOffItemWithItemsQuantityPurchase} The populated <code>CouponPercentOffItemWithItemsQuantityPurchase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponPercentOffItemWithItemsQuantityPurchase();

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
            if (data.hasOwnProperty('required_purchase_quantity')) {
                obj['required_purchase_quantity'] = ApiClient.convertToType(data['required_purchase_quantity'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The percentage of subtotal discount
 * @member {Number} discount_percent
 */
CouponPercentOffItemWithItemsQuantityPurchase.prototype['discount_percent'] = undefined;

/**
 * A list of items which will receive a discount if one of the required purchase items is purchased.
 * @member {Array.<String>} items
 */
CouponPercentOffItemWithItemsQuantityPurchase.prototype['items'] = undefined;

/**
 * The (optional) maximum quantity of discounted items.
 * @member {Number} limit
 */
CouponPercentOffItemWithItemsQuantityPurchase.prototype['limit'] = undefined;

/**
 * Required items (at least one from the list) that must be purchased for coupon to be valid
 * @member {Array.<String>} required_purchase_items
 */
CouponPercentOffItemWithItemsQuantityPurchase.prototype['required_purchase_items'] = undefined;

/**
 * The quantity of items that must be purchased for the discount to be applied.
 * @member {Number} required_purchase_quantity
 */
CouponPercentOffItemWithItemsQuantityPurchase.prototype['required_purchase_quantity'] = undefined;






export default CouponPercentOffItemWithItemsQuantityPurchase;

