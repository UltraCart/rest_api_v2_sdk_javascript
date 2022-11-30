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
 * The UploadCouponCodesRequest model module.
 * @module com.ultracart.admin.v2.models/UploadCouponCodesRequest
 * @version 4.0.90-RC
 */
class UploadCouponCodesRequest {
    /**
     * Constructs a new <code>UploadCouponCodesRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/UploadCouponCodesRequest
     */
    constructor() { 
        
        UploadCouponCodesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UploadCouponCodesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/UploadCouponCodesRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/UploadCouponCodesRequest} The populated <code>UploadCouponCodesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UploadCouponCodesRequest();

            if (data.hasOwnProperty('coupon_codes')) {
                obj['coupon_codes'] = ApiClient.convertToType(data['coupon_codes'], ['String']);
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
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
UploadCouponCodesRequest.prototype['coupon_codes'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
UploadCouponCodesRequest.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
UploadCouponCodesRequest.prototype['metadata'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
UploadCouponCodesRequest.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
UploadCouponCodesRequest.prototype['warning'] = undefined;






export default UploadCouponCodesRequest;

