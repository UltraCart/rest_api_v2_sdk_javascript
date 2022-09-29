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
import Error from './Error';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The CouponCodesResponse model module.
 * @module com.ultracart.admin.v2.models/CouponCodesResponse
 * @version 4.0.70-RC
 */
class CouponCodesResponse {
    /**
     * Constructs a new <code>CouponCodesResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponCodesResponse
     */
    constructor() { 
        
        CouponCodesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponCodesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponCodesResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponCodesResponse} The populated <code>CouponCodesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponCodesResponse();

            if (data.hasOwnProperty('coupon_codes')) {
                obj['coupon_codes'] = ApiClient.convertToType(data['coupon_codes'], ['String']);
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('expiration_dts')) {
                obj['expiration_dts'] = ApiClient.convertToType(data['expiration_dts'], 'String');
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
 * Coupon codes
 * @member {Array.<String>} coupon_codes
 */
CouponCodesResponse.prototype['coupon_codes'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
CouponCodesResponse.prototype['error'] = undefined;

/**
 * Expiration date
 * @member {String} expiration_dts
 */
CouponCodesResponse.prototype['expiration_dts'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
CouponCodesResponse.prototype['metadata'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
CouponCodesResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
CouponCodesResponse.prototype['warning'] = undefined;






export default CouponCodesResponse;

