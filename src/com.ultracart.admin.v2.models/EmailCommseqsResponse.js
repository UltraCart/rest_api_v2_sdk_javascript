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
import EmailCommseq from './EmailCommseq';
import Error from './Error';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The EmailCommseqsResponse model module.
 * @module com.ultracart.admin.v2.models/EmailCommseqsResponse
 * @version 4.0.170
 */
class EmailCommseqsResponse {
    /**
     * Constructs a new <code>EmailCommseqsResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailCommseqsResponse
     */
    constructor() { 
        
        EmailCommseqsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailCommseqsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqsResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailCommseqsResponse} The populated <code>EmailCommseqsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailCommseqsResponse();

            if (data.hasOwnProperty('communication_sequences')) {
                obj['communication_sequences'] = ApiClient.convertToType(data['communication_sequences'], [EmailCommseq]);
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
 * @member {Array.<module:com.ultracart.admin.v2.models/EmailCommseq>} communication_sequences
 */
EmailCommseqsResponse.prototype['communication_sequences'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
EmailCommseqsResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
EmailCommseqsResponse.prototype['metadata'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
EmailCommseqsResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
EmailCommseqsResponse.prototype['warning'] = undefined;






export default EmailCommseqsResponse;

