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
 * The CouponFreeItemsWithItemPurchase model module.
 * @module com.ultracart.admin.v2.models/CouponFreeItemsWithItemPurchase
 * @version 4.0.3
 */
class CouponFreeItemsWithItemPurchase {
    /**
     * Constructs a new <code>CouponFreeItemsWithItemPurchase</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponFreeItemsWithItemPurchase
     */
    constructor() { 
        
        CouponFreeItemsWithItemPurchase.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponFreeItemsWithItemPurchase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponFreeItemsWithItemPurchase} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponFreeItemsWithItemPurchase} The populated <code>CouponFreeItemsWithItemPurchase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponFreeItemsWithItemPurchase();

            if (data.hasOwnProperty('free_item')) {
                obj['free_item'] = ApiClient.convertToType(data['free_item'], 'String');
            }
            if (data.hasOwnProperty('free_quantity')) {
                obj['free_quantity'] = ApiClient.convertToType(data['free_quantity'], 'Number');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
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
 * The item id of the free item that will be received when the required mix and match group quantity is purchased.
 * @member {String} free_item
 */
CouponFreeItemsWithItemPurchase.prototype['free_item'] = undefined;

/**
 * The quantity of free item that will be received.
 * @member {Number} free_quantity
 */
CouponFreeItemsWithItemPurchase.prototype['free_quantity'] = undefined;

/**
 * The limit of free items that may be received when purchasing multiple items
 * @member {Number} limit
 */
CouponFreeItemsWithItemPurchase.prototype['limit'] = undefined;

/**
 * Required item that must be purchased for coupon to be valid
 * @member {String} required_purchase_item
 */
CouponFreeItemsWithItemPurchase.prototype['required_purchase_item'] = undefined;

/**
 * Required quantity of mix and match group items that must be purchased for coupon to be valid
 * @member {Number} required_purchase_quantity
 */
CouponFreeItemsWithItemPurchase.prototype['required_purchase_quantity'] = undefined;






export default CouponFreeItemsWithItemPurchase;

