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
 * The EmailSegmentDownloadPrepareResponse model module.
 * @module com.ultracart.admin.v2.models/EmailSegmentDownloadPrepareResponse
 * @version 4.1.16
 */
class EmailSegmentDownloadPrepareResponse {
    /**
     * Constructs a new <code>EmailSegmentDownloadPrepareResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailSegmentDownloadPrepareResponse
     */
    constructor() { 
        
        EmailSegmentDownloadPrepareResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailSegmentDownloadPrepareResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailSegmentDownloadPrepareResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailSegmentDownloadPrepareResponse} The populated <code>EmailSegmentDownloadPrepareResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailSegmentDownloadPrepareResponse();

            if (data.hasOwnProperty('email_segment_rebuild_uuid')) {
                obj['email_segment_rebuild_uuid'] = ApiClient.convertToType(data['email_segment_rebuild_uuid'], 'String');
            }
            if (data.hasOwnProperty('email_segment_uuid')) {
                obj['email_segment_uuid'] = ApiClient.convertToType(data['email_segment_uuid'], 'String');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('percentage_complete')) {
                obj['percentage_complete'] = ApiClient.convertToType(data['percentage_complete'], 'Number');
            }
            if (data.hasOwnProperty('proceed')) {
                obj['proceed'] = ApiClient.convertToType(data['proceed'], 'Boolean');
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
 * @member {String} email_segment_rebuild_uuid
 */
EmailSegmentDownloadPrepareResponse.prototype['email_segment_rebuild_uuid'] = undefined;

/**
 * @member {String} email_segment_uuid
 */
EmailSegmentDownloadPrepareResponse.prototype['email_segment_uuid'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
EmailSegmentDownloadPrepareResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
EmailSegmentDownloadPrepareResponse.prototype['metadata'] = undefined;

/**
 * @member {Number} percentage_complete
 */
EmailSegmentDownloadPrepareResponse.prototype['percentage_complete'] = undefined;

/**
 * @member {Boolean} proceed
 */
EmailSegmentDownloadPrepareResponse.prototype['proceed'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
EmailSegmentDownloadPrepareResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
EmailSegmentDownloadPrepareResponse.prototype['warning'] = undefined;






export default EmailSegmentDownloadPrepareResponse;

