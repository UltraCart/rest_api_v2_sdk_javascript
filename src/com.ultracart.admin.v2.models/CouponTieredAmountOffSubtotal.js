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
import CouponTierAmount from './CouponTierAmount';

/**
 * The CouponTieredAmountOffSubtotal model module.
 * @module com.ultracart.admin.v2.models/CouponTieredAmountOffSubtotal
 * @version 4.0.245
 */
class CouponTieredAmountOffSubtotal {
    /**
     * Constructs a new <code>CouponTieredAmountOffSubtotal</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponTieredAmountOffSubtotal
     */
    constructor() { 
        
        CouponTieredAmountOffSubtotal.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponTieredAmountOffSubtotal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponTieredAmountOffSubtotal} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponTieredAmountOffSubtotal} The populated <code>CouponTieredAmountOffSubtotal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponTieredAmountOffSubtotal();

            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], ['String']);
            }
            if (data.hasOwnProperty('tiers')) {
                obj['tiers'] = ApiClient.convertToType(data['tiers'], [CouponTierAmount]);
            }
        }
        return obj;
    }


}

/**
 * An optional list of items of which a quantity of one or many must be purchased for coupon to be valid.  If empty, all items apply toward subtotal amount.
 * @member {Array.<String>} items
 */
CouponTieredAmountOffSubtotal.prototype['items'] = undefined;

/**
 * A list of discount tiers.
 * @member {Array.<module:com.ultracart.admin.v2.models/CouponTierAmount>} tiers
 */
CouponTieredAmountOffSubtotal.prototype['tiers'] = undefined;






export default CouponTieredAmountOffSubtotal;

