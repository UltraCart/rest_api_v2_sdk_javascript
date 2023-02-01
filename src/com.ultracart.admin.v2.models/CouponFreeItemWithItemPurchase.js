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
 * The CouponFreeItemWithItemPurchase model module.
 * @module com.ultracart.admin.v2.models/CouponFreeItemWithItemPurchase
 * @version 4.0.129
 */
class CouponFreeItemWithItemPurchase {
    /**
     * Constructs a new <code>CouponFreeItemWithItemPurchase</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponFreeItemWithItemPurchase
     */
    constructor() { 
        
        CouponFreeItemWithItemPurchase.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponFreeItemWithItemPurchase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponFreeItemWithItemPurchase} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponFreeItemWithItemPurchase} The populated <code>CouponFreeItemWithItemPurchase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponFreeItemWithItemPurchase();

            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], ['String']);
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('match_required_purchase_item_to_free_item')) {
                obj['match_required_purchase_item_to_free_item'] = ApiClient.convertToType(data['match_required_purchase_item_to_free_item'], 'Boolean');
            }
            if (data.hasOwnProperty('required_purchase_items')) {
                obj['required_purchase_items'] = ApiClient.convertToType(data['required_purchase_items'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * A list of free items which will receive a discount if one of the required purchase items is purchased.
 * @member {Array.<String>} items
 */
CouponFreeItemWithItemPurchase.prototype['items'] = undefined;

/**
 * The (optional) maximum quantity of discounted items.
 * @member {Number} limit
 */
CouponFreeItemWithItemPurchase.prototype['limit'] = undefined;

/**
 * If true then the free item is matched 1:1 with the free item in the list.
 * @member {Boolean} match_required_purchase_item_to_free_item
 */
CouponFreeItemWithItemPurchase.prototype['match_required_purchase_item_to_free_item'] = undefined;

/**
 * Required items (at least one from the list) that must be purchased for coupon to be valid
 * @member {Array.<String>} required_purchase_items
 */
CouponFreeItemWithItemPurchase.prototype['required_purchase_items'] = undefined;






export default CouponFreeItemWithItemPurchase;

