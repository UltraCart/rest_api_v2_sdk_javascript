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
 * The CouponNoDiscount model module.
 * @module com.ultracart.admin.v2.models/CouponNoDiscount
 * @version 4.0.82-RC
 */
class CouponNoDiscount {
    /**
     * Constructs a new <code>CouponNoDiscount</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponNoDiscount
     */
    constructor() { 
        
        CouponNoDiscount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponNoDiscount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponNoDiscount} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponNoDiscount} The populated <code>CouponNoDiscount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponNoDiscount();

            if (data.hasOwnProperty('ignore_this_property')) {
                obj['ignore_this_property'] = ApiClient.convertToType(data['ignore_this_property'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * This property does nothing but is included in this object to ensure the object is generated by our sdk builders.
 * @member {Boolean} ignore_this_property
 */
CouponNoDiscount.prototype['ignore_this_property'] = undefined;






export default CouponNoDiscount;

