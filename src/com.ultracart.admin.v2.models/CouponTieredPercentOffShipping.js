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
 * The CouponTieredPercentOffShipping model module.
 * @module com.ultracart.admin.v2.models/CouponTieredPercentOffShipping
 * @version 4.0.56-RC
 */
class CouponTieredPercentOffShipping {
    /**
     * Constructs a new <code>CouponTieredPercentOffShipping</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponTieredPercentOffShipping
     */
    constructor() { 
        
        CouponTieredPercentOffShipping.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponTieredPercentOffShipping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponTieredPercentOffShipping} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponTieredPercentOffShipping} The populated <code>CouponTieredPercentOffShipping</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponTieredPercentOffShipping();

            if (data.hasOwnProperty('quickbooks_code')) {
                obj['quickbooks_code'] = ApiClient.convertToType(data['quickbooks_code'], 'String');
            }
            if (data.hasOwnProperty('shipping_methods')) {
                obj['shipping_methods'] = ApiClient.convertToType(data['shipping_methods'], ['String']);
            }
            if (data.hasOwnProperty('tiers')) {
                obj['tiers'] = ApiClient.convertToType(data['tiers'], [CouponTierPercent]);
            }
        }
        return obj;
    }


}

/**
 * Quickbooks accounting code.
 * @member {String} quickbooks_code
 */
CouponTieredPercentOffShipping.prototype['quickbooks_code'] = undefined;

/**
 * One or more shipping methods that may receive this discount
 * @member {Array.<String>} shipping_methods
 */
CouponTieredPercentOffShipping.prototype['shipping_methods'] = undefined;

/**
 * A list of discount tiers.
 * @member {Array.<module:com.ultracart.admin.v2.models/CouponTierPercent>} tiers
 */
CouponTieredPercentOffShipping.prototype['tiers'] = undefined;






export default CouponTieredPercentOffShipping;

