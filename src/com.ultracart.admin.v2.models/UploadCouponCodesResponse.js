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
 * The UploadCouponCodesResponse model module.
 * @module com.ultracart.admin.v2.models/UploadCouponCodesResponse
 * @version 4.0.165
 */
class UploadCouponCodesResponse {
    /**
     * Constructs a new <code>UploadCouponCodesResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/UploadCouponCodesResponse
     */
    constructor() { 
        
        UploadCouponCodesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UploadCouponCodesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/UploadCouponCodesResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/UploadCouponCodesResponse} The populated <code>UploadCouponCodesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UploadCouponCodesResponse();

            if (data.hasOwnProperty('duplicate_codes')) {
                obj['duplicate_codes'] = ApiClient.convertToType(data['duplicate_codes'], ['String']);
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('rejected_codes')) {
                obj['rejected_codes'] = ApiClient.convertToType(data['rejected_codes'], ['String']);
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('uploaded_codes')) {
                obj['uploaded_codes'] = ApiClient.convertToType(data['uploaded_codes'], ['String']);
            }
            if (data.hasOwnProperty('warning')) {
                obj['warning'] = Warning.constructFromObject(data['warning']);
            }
        }
        return obj;
    }


}

/**
 * Duplicate codes
 * @member {Array.<String>} duplicate_codes
 */
UploadCouponCodesResponse.prototype['duplicate_codes'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
UploadCouponCodesResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
UploadCouponCodesResponse.prototype['metadata'] = undefined;

/**
 * Rejected codes
 * @member {Array.<String>} rejected_codes
 */
UploadCouponCodesResponse.prototype['rejected_codes'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
UploadCouponCodesResponse.prototype['success'] = undefined;

/**
 * Uploaded codes
 * @member {Array.<String>} uploaded_codes
 */
UploadCouponCodesResponse.prototype['uploaded_codes'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
UploadCouponCodesResponse.prototype['warning'] = undefined;






export default UploadCouponCodesResponse;

