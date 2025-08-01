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
 * The CouponFreeShipping model module.
 * @module com.ultracart.admin.v2.models/CouponFreeShipping
 * @version 4.1.16
 */
class CouponFreeShipping {
    /**
     * Constructs a new <code>CouponFreeShipping</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponFreeShipping
     */
    constructor() { 
        
        CouponFreeShipping.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponFreeShipping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponFreeShipping} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponFreeShipping} The populated <code>CouponFreeShipping</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponFreeShipping();

            if (data.hasOwnProperty('shipping_methods')) {
                obj['shipping_methods'] = ApiClient.convertToType(data['shipping_methods'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * One or more shipping methods that may be used with this coupon
 * @member {Array.<String>} shipping_methods
 */
CouponFreeShipping.prototype['shipping_methods'] = undefined;






export default CouponFreeShipping;

