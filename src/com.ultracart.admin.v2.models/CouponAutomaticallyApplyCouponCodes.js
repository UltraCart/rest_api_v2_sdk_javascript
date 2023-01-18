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
 * The CouponAutomaticallyApplyCouponCodes model module.
 * @module com.ultracart.admin.v2.models/CouponAutomaticallyApplyCouponCodes
 * @version 4.0.116-RC
 */
class CouponAutomaticallyApplyCouponCodes {
    /**
     * Constructs a new <code>CouponAutomaticallyApplyCouponCodes</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponAutomaticallyApplyCouponCodes
     */
    constructor() { 
        
        CouponAutomaticallyApplyCouponCodes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponAutomaticallyApplyCouponCodes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponAutomaticallyApplyCouponCodes} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponAutomaticallyApplyCouponCodes} The populated <code>CouponAutomaticallyApplyCouponCodes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponAutomaticallyApplyCouponCodes();

            if (data.hasOwnProperty('coupon_codes')) {
                obj['coupon_codes'] = ApiClient.convertToType(data['coupon_codes'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * The coupon codes to automatically apply if this coupon is applied
 * @member {Array.<String>} coupon_codes
 */
CouponAutomaticallyApplyCouponCodes.prototype['coupon_codes'] = undefined;






export default CouponAutomaticallyApplyCouponCodes;

