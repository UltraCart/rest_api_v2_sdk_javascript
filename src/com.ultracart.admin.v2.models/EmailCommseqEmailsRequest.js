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
 * The EmailCommseqEmailsRequest model module.
 * @module com.ultracart.admin.v2.models/EmailCommseqEmailsRequest
 * @version 4.0.78-RC
 */
class EmailCommseqEmailsRequest {
    /**
     * Constructs a new <code>EmailCommseqEmailsRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailCommseqEmailsRequest
     */
    constructor() { 
        
        EmailCommseqEmailsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailCommseqEmailsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqEmailsRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailCommseqEmailsRequest} The populated <code>EmailCommseqEmailsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailCommseqEmailsRequest();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('esp_commseq_email_uuids')) {
                obj['esp_commseq_email_uuids'] = ApiClient.convertToType(data['esp_commseq_email_uuids'], ['String']);
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
EmailCommseqEmailsRequest.prototype['error'] = undefined;

/**
 * @member {Array.<String>} esp_commseq_email_uuids
 */
EmailCommseqEmailsRequest.prototype['esp_commseq_email_uuids'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
EmailCommseqEmailsRequest.prototype['metadata'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
EmailCommseqEmailsRequest.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
EmailCommseqEmailsRequest.prototype['warning'] = undefined;






export default EmailCommseqEmailsRequest;

