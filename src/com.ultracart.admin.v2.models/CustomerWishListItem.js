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
 * The CustomerWishListItem model module.
 * @module com.ultracart.admin.v2.models/CustomerWishListItem
 * @version 4.1.16
 */
class CustomerWishListItem {
    /**
     * Constructs a new <code>CustomerWishListItem</code>.
     * @alias module:com.ultracart.admin.v2.models/CustomerWishListItem
     */
    constructor() { 
        
        CustomerWishListItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerWishListItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerWishListItem} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerWishListItem} The populated <code>CustomerWishListItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerWishListItem();

            if (data.hasOwnProperty('add_dts')) {
                obj['add_dts'] = ApiClient.convertToType(data['add_dts'], 'String');
            }
            if (data.hasOwnProperty('comments')) {
                obj['comments'] = ApiClient.convertToType(data['comments'], 'String');
            }
            if (data.hasOwnProperty('customer_profile_oid')) {
                obj['customer_profile_oid'] = ApiClient.convertToType(data['customer_profile_oid'], 'Number');
            }
            if (data.hasOwnProperty('customer_wishlist_item_oid')) {
                obj['customer_wishlist_item_oid'] = ApiClient.convertToType(data['customer_wishlist_item_oid'], 'Number');
            }
            if (data.hasOwnProperty('merchant_item_oid')) {
                obj['merchant_item_oid'] = ApiClient.convertToType(data['merchant_item_oid'], 'Number');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Add date
 * @member {String} add_dts
 */
CustomerWishListItem.prototype['add_dts'] = undefined;

/**
 * Comments
 * @member {String} comments
 */
CustomerWishListItem.prototype['comments'] = undefined;

/**
 * Customer profile object identifier
 * @member {Number} customer_profile_oid
 */
CustomerWishListItem.prototype['customer_profile_oid'] = undefined;

/**
 * Customer wishlist item object identifier
 * @member {Number} customer_wishlist_item_oid
 */
CustomerWishListItem.prototype['customer_wishlist_item_oid'] = undefined;

/**
 * Merchant item object identifier
 * @member {Number} merchant_item_oid
 */
CustomerWishListItem.prototype['merchant_item_oid'] = undefined;

/**
 * Position in wishlist
 * @member {Number} position
 */
CustomerWishListItem.prototype['position'] = undefined;

/**
 * Priority of wishlist item, 3 being low priority and 5 is high priority.
 * @member {Number} priority
 */
CustomerWishListItem.prototype['priority'] = undefined;






export default CustomerWishListItem;

