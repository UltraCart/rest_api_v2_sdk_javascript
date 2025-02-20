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
import CouponTierItemDiscount from './CouponTierItemDiscount';

/**
 * The CouponMultipleAmountsOffItems model module.
 * @module com.ultracart.admin.v2.models/CouponMultipleAmountsOffItems
 * @version 4.0.245
 */
class CouponMultipleAmountsOffItems {
    /**
     * Constructs a new <code>CouponMultipleAmountsOffItems</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponMultipleAmountsOffItems
     */
    constructor() { 
        
        CouponMultipleAmountsOffItems.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponMultipleAmountsOffItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponMultipleAmountsOffItems} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponMultipleAmountsOffItems} The populated <code>CouponMultipleAmountsOffItems</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponMultipleAmountsOffItems();

            if (data.hasOwnProperty('discounts')) {
                obj['discounts'] = ApiClient.convertToType(data['discounts'], [CouponTierItemDiscount]);
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * A list of item discounts.
 * @member {Array.<module:com.ultracart.admin.v2.models/CouponTierItemDiscount>} discounts
 */
CouponMultipleAmountsOffItems.prototype['discounts'] = undefined;

/**
 * The (optional) maximum quantity of items that may receive a discount.
 * @member {Number} limit
 */
CouponMultipleAmountsOffItems.prototype['limit'] = undefined;






export default CouponMultipleAmountsOffItems;

