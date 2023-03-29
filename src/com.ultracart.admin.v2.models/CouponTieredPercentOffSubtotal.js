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
import CouponTierPercent from './CouponTierPercent';

/**
 * The CouponTieredPercentOffSubtotal model module.
 * @module com.ultracart.admin.v2.models/CouponTieredPercentOffSubtotal
 * @version 4.0.144
 */
class CouponTieredPercentOffSubtotal {
    /**
     * Constructs a new <code>CouponTieredPercentOffSubtotal</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponTieredPercentOffSubtotal
     */
    constructor() { 
        
        CouponTieredPercentOffSubtotal.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponTieredPercentOffSubtotal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponTieredPercentOffSubtotal} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponTieredPercentOffSubtotal} The populated <code>CouponTieredPercentOffSubtotal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponTieredPercentOffSubtotal();

            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], ['String']);
            }
            if (data.hasOwnProperty('tiers')) {
                obj['tiers'] = ApiClient.convertToType(data['tiers'], [CouponTierPercent]);
            }
        }
        return obj;
    }


}

/**
 * An optional list of items of which a quantity of one or many must be purchased for coupon to be valid.  If empty, all items apply toward subtotal amount.
 * @member {Array.<String>} items
 */
CouponTieredPercentOffSubtotal.prototype['items'] = undefined;

/**
 * A list of discount tiers.
 * @member {Array.<module:com.ultracart.admin.v2.models/CouponTierPercent>} tiers
 */
CouponTieredPercentOffSubtotal.prototype['tiers'] = undefined;






export default CouponTieredPercentOffSubtotal;

