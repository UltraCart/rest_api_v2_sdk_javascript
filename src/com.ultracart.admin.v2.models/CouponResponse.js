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
import Error from './Error';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The CouponResponse model module.
 * @module com.ultracart.admin.v2.models/CouponResponse
 * @version 4.0.187
 */
class CouponResponse {
    /**
     * Constructs a new <code>CouponResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponResponse
     */
    constructor() { 
        
        CouponResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponResponse} The populated <code>CouponResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponResponse();

            if (data.hasOwnProperty('coupon')) {
                obj['coupon'] = Coupon.constructFromObject(data['coupon']);
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('items_invalid_for_coupons')) {
                obj['items_invalid_for_coupons'] = ApiClient.convertToType(data['items_invalid_for_coupons'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('warning')) {
                obj['warning'] = Warning.constructFromObject(data['warning']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/Coupon} coupon
 */
CouponResponse.prototype['coupon'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
CouponResponse.prototype['error'] = undefined;

/**
 * Items invalid for coupons.  These will display as warnings within the UI.
 * @member {Array.<String>} items_invalid_for_coupons
 */
CouponResponse.prototype['items_invalid_for_coupons'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
CouponResponse.prototype['metadata'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
CouponResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
CouponResponse.prototype['warning'] = undefined;






export default CouponResponse;

