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
 * The EmailSegmentArchiveResponse model module.
 * @module com.ultracart.admin.v2.models/EmailSegmentArchiveResponse
 * @version 4.0.163
 */
class EmailSegmentArchiveResponse {
    /**
     * Constructs a new <code>EmailSegmentArchiveResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailSegmentArchiveResponse
     */
    constructor() { 
        
        EmailSegmentArchiveResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailSegmentArchiveResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailSegmentArchiveResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailSegmentArchiveResponse} The populated <code>EmailSegmentArchiveResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailSegmentArchiveResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('segment_in_use')) {
                obj['segment_in_use'] = ApiClient.convertToType(data['segment_in_use'], 'Boolean');
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
EmailSegmentArchiveResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
EmailSegmentArchiveResponse.prototype['metadata'] = undefined;

/**
 * @member {Boolean} segment_in_use
 */
EmailSegmentArchiveResponse.prototype['segment_in_use'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
EmailSegmentArchiveResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
EmailSegmentArchiveResponse.prototype['warning'] = undefined;






export default EmailSegmentArchiveResponse;

