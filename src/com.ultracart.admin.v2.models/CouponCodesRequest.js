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
 * The CouponCodesRequest model module.
 * @module com.ultracart.admin.v2.models/CouponCodesRequest
 * @version 4.0.35-RC
 */
class CouponCodesRequest {
    /**
     * Constructs a new <code>CouponCodesRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponCodesRequest
     */
    constructor() { 
        
        CouponCodesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponCodesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponCodesRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponCodesRequest} The populated <code>CouponCodesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponCodesRequest();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('expiration_dts')) {
                obj['expiration_dts'] = ApiClient.convertToType(data['expiration_dts'], 'String');
            }
            if (data.hasOwnProperty('expiration_seconds')) {
                obj['expiration_seconds'] = ApiClient.convertToType(data['expiration_seconds'], 'Number');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
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
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
CouponCodesRequest.prototype['error'] = undefined;

/**
 * Expiration Date
 * @member {String} expiration_dts
 */
CouponCodesRequest.prototype['expiration_dts'] = undefined;

/**
 * Expiration seconds
 * @member {Number} expiration_seconds
 */
CouponCodesRequest.prototype['expiration_seconds'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
CouponCodesRequest.prototype['metadata'] = undefined;

/**
 * Quantity
 * @member {Number} quantity
 */
CouponCodesRequest.prototype['quantity'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
CouponCodesRequest.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
CouponCodesRequest.prototype['warning'] = undefined;






export default CouponCodesRequest;

