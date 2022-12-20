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
import GiftCertificate from './GiftCertificate';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The GiftCertificatesResponse model module.
 * @module com.ultracart.admin.v2.models/GiftCertificatesResponse
 * @version 4.0.101-RC
 */
class GiftCertificatesResponse {
    /**
     * Constructs a new <code>GiftCertificatesResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/GiftCertificatesResponse
     */
    constructor() { 
        
        GiftCertificatesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GiftCertificatesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/GiftCertificatesResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/GiftCertificatesResponse} The populated <code>GiftCertificatesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GiftCertificatesResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('gift_certificates')) {
                obj['gift_certificates'] = ApiClient.convertToType(data['gift_certificates'], [GiftCertificate]);
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
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
GiftCertificatesResponse.prototype['error'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/GiftCertificate>} gift_certificates
 */
GiftCertificatesResponse.prototype['gift_certificates'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
GiftCertificatesResponse.prototype['metadata'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
GiftCertificatesResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
GiftCertificatesResponse.prototype['warning'] = undefined;






export default GiftCertificatesResponse;

