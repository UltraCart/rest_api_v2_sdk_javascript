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
import IntegrationLogSummary from './IntegrationLogSummary';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The IntegrationLogSummaryQueryResponse model module.
 * @module com.ultracart.admin.v2.models/IntegrationLogSummaryQueryResponse
 * @version 4.1.16
 */
class IntegrationLogSummaryQueryResponse {
    /**
     * Constructs a new <code>IntegrationLogSummaryQueryResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/IntegrationLogSummaryQueryResponse
     */
    constructor() { 
        
        IntegrationLogSummaryQueryResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IntegrationLogSummaryQueryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/IntegrationLogSummaryQueryResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/IntegrationLogSummaryQueryResponse} The populated <code>IntegrationLogSummaryQueryResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IntegrationLogSummaryQueryResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('integration_log_summaries')) {
                obj['integration_log_summaries'] = ApiClient.convertToType(data['integration_log_summaries'], [IntegrationLogSummary]);
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
IntegrationLogSummaryQueryResponse.prototype['error'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/IntegrationLogSummary>} integration_log_summaries
 */
IntegrationLogSummaryQueryResponse.prototype['integration_log_summaries'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
IntegrationLogSummaryQueryResponse.prototype['metadata'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
IntegrationLogSummaryQueryResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
IntegrationLogSummaryQueryResponse.prototype['warning'] = undefined;






export default IntegrationLogSummaryQueryResponse;

