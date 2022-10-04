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
import CouponTierQuantityAmount from './CouponTierQuantityAmount';

/**
 * The CouponTieredAmountOffItems model module.
 * @module com.ultracart.admin.v2.models/CouponTieredAmountOffItems
 * @version 4.0.71-RC
 */
class CouponTieredAmountOffItems {
    /**
     * Constructs a new <code>CouponTieredAmountOffItems</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponTieredAmountOffItems
     */
    constructor() { 
        
        CouponTieredAmountOffItems.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponTieredAmountOffItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponTieredAmountOffItems} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponTieredAmountOffItems} The populated <code>CouponTieredAmountOffItems</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponTieredAmountOffItems();

            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], ['String']);
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('tiers')) {
                obj['tiers'] = ApiClient.convertToType(data['tiers'], [CouponTierQuantityAmount]);
            }
        }
        return obj;
    }


}

/**
 * The items being discounted by this coupon.
 * @member {Array.<String>} items
 */
CouponTieredAmountOffItems.prototype['items'] = undefined;

/**
 * The maximum number of discounted items.
 * @member {Number} limit
 */
CouponTieredAmountOffItems.prototype['limit'] = undefined;

/**
 * A list of discount tiers.
 * @member {Array.<module:com.ultracart.admin.v2.models/CouponTierQuantityAmount>} tiers
 */
CouponTieredAmountOffItems.prototype['tiers'] = undefined;






export default CouponTieredAmountOffItems;

