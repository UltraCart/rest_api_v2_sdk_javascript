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
import CouponTierQuantityPercent from './CouponTierQuantityPercent';

/**
 * The CouponTieredPercentOffItems model module.
 * @module com.ultracart.admin.v2.models/CouponTieredPercentOffItems
 * @version 4.0.187
 */
class CouponTieredPercentOffItems {
    /**
     * Constructs a new <code>CouponTieredPercentOffItems</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponTieredPercentOffItems
     */
    constructor() { 
        
        CouponTieredPercentOffItems.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponTieredPercentOffItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponTieredPercentOffItems} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponTieredPercentOffItems} The populated <code>CouponTieredPercentOffItems</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponTieredPercentOffItems();

            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], ['String']);
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('tiers')) {
                obj['tiers'] = ApiClient.convertToType(data['tiers'], [CouponTierQuantityPercent]);
            }
        }
        return obj;
    }


}

/**
 * A list of items of which at least one must be purchased for coupon to be valid.
 * @member {Array.<String>} items
 */
CouponTieredPercentOffItems.prototype['items'] = undefined;

/**
 * The (optional) maximum quantity of discounted items.
 * @member {Number} limit
 */
CouponTieredPercentOffItems.prototype['limit'] = undefined;

/**
 * A list of discount tiers.
 * @member {Array.<module:com.ultracart.admin.v2.models/CouponTierQuantityPercent>} tiers
 */
CouponTieredPercentOffItems.prototype['tiers'] = undefined;






export default CouponTieredPercentOffItems;

