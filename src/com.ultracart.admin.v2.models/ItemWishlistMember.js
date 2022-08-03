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
 * The ItemWishlistMember model module.
 * @module com.ultracart.admin.v2.models/ItemWishlistMember
 * @version 4.0.50-RC
 */
class ItemWishlistMember {
    /**
     * Constructs a new <code>ItemWishlistMember</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemWishlistMember
     */
    constructor() { 
        
        ItemWishlistMember.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemWishlistMember</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemWishlistMember} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemWishlistMember} The populated <code>ItemWishlistMember</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemWishlistMember();

            if (data.hasOwnProperty('wishlist_member_instance_description')) {
                obj['wishlist_member_instance_description'] = ApiClient.convertToType(data['wishlist_member_instance_description'], 'String');
            }
            if (data.hasOwnProperty('wishlist_member_instance_oid')) {
                obj['wishlist_member_instance_oid'] = ApiClient.convertToType(data['wishlist_member_instance_oid'], 'Number');
            }
            if (data.hasOwnProperty('wishlist_member_sku')) {
                obj['wishlist_member_sku'] = ApiClient.convertToType(data['wishlist_member_sku'], 'String');
            }
        }
        return obj;
    }


}

/**
 * WishList Member instance description
 * @member {String} wishlist_member_instance_description
 */
ItemWishlistMember.prototype['wishlist_member_instance_description'] = undefined;

/**
 * WishList Member instance object identifier
 * @member {Number} wishlist_member_instance_oid
 */
ItemWishlistMember.prototype['wishlist_member_instance_oid'] = undefined;

/**
 * WishList Member SKU
 * @member {String} wishlist_member_sku
 */
ItemWishlistMember.prototype['wishlist_member_sku'] = undefined;






export default ItemWishlistMember;

