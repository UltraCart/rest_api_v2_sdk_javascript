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
 * The AdjustInternalCertificateResponse model module.
 * @module com.ultracart.admin.v2.models/AdjustInternalCertificateResponse
 * @version 4.0.47-RC
 */
class AdjustInternalCertificateResponse {
    /**
     * Constructs a new <code>AdjustInternalCertificateResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/AdjustInternalCertificateResponse
     */
    constructor() { 
        
        AdjustInternalCertificateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AdjustInternalCertificateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AdjustInternalCertificateResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AdjustInternalCertificateResponse} The populated <code>AdjustInternalCertificateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AdjustInternalCertificateResponse();

            if (data.hasOwnProperty('adjustment_amount')) {
                obj['adjustment_amount'] = ApiClient.convertToType(data['adjustment_amount'], 'Number');
            }
            if (data.hasOwnProperty('balance_amount')) {
                obj['balance_amount'] = ApiClient.convertToType(data['balance_amount'], 'Number');
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
 * The adjustment amount
 * @member {Number} adjustment_amount
 */
AdjustInternalCertificateResponse.prototype['adjustment_amount'] = undefined;

/**
 * The balance amount after the adjustment was made
 * @member {Number} balance_amount
 */
AdjustInternalCertificateResponse.prototype['balance_amount'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
AdjustInternalCertificateResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
AdjustInternalCertificateResponse.prototype['metadata'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
AdjustInternalCertificateResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
AdjustInternalCertificateResponse.prototype['warning'] = undefined;






export default AdjustInternalCertificateResponse;

