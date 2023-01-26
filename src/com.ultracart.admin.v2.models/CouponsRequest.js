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
import Coupon from './Coupon';

/**
 * The CouponsRequest model module.
 * @module com.ultracart.admin.v2.models/CouponsRequest
 * @version 4.0.126-RC
 */
class CouponsRequest {
    /**
     * Constructs a new <code>CouponsRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponsRequest
     */
    constructor() { 
        
        CouponsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponsRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponsRequest} The populated <code>CouponsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponsRequest();

            if (data.hasOwnProperty('coupons')) {
                obj['coupons'] = ApiClient.convertToType(data['coupons'], [Coupon]);
            }
        }
        return obj;
    }


}

/**
 * coupons
 * @member {Array.<module:com.ultracart.admin.v2.models/Coupon>} coupons
 */
CouponsRequest.prototype['coupons'] = undefined;






export default CouponsRequest;

