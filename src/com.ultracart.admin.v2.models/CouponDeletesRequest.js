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
 * The CouponDeletesRequest model module.
 * @module com.ultracart.admin.v2.models/CouponDeletesRequest
 * @version 4.1.16
 */
class CouponDeletesRequest {
    /**
     * Constructs a new <code>CouponDeletesRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponDeletesRequest
     */
    constructor() { 
        
        CouponDeletesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponDeletesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponDeletesRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponDeletesRequest} The populated <code>CouponDeletesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponDeletesRequest();

            if (data.hasOwnProperty('coupon_codes')) {
                obj['coupon_codes'] = ApiClient.convertToType(data['coupon_codes'], ['String']);
            }
            if (data.hasOwnProperty('coupon_oids')) {
                obj['coupon_oids'] = ApiClient.convertToType(data['coupon_oids'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * Coupon codes
 * @member {Array.<String>} coupon_codes
 */
CouponDeletesRequest.prototype['coupon_codes'] = undefined;

/**
 * Coupon oids
 * @member {Array.<Number>} coupon_oids
 */
CouponDeletesRequest.prototype['coupon_oids'] = undefined;






export default CouponDeletesRequest;

