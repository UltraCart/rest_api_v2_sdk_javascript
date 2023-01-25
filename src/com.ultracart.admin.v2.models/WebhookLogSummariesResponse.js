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
import WebhookLogSummary from './WebhookLogSummary';

/**
 * The WebhookLogSummariesResponse model module.
 * @module com.ultracart.admin.v2.models/WebhookLogSummariesResponse
 * @version 4.0.123-RC
 */
class WebhookLogSummariesResponse {
    /**
     * Constructs a new <code>WebhookLogSummariesResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/WebhookLogSummariesResponse
     */
    constructor() { 
        
        WebhookLogSummariesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookLogSummariesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/WebhookLogSummariesResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/WebhookLogSummariesResponse} The populated <code>WebhookLogSummariesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookLogSummariesResponse();

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
            if (data.hasOwnProperty('webhook_log_summaries')) {
                obj['webhook_log_summaries'] = ApiClient.convertToType(data['webhook_log_summaries'], [WebhookLogSummary]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
WebhookLogSummariesResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
WebhookLogSummariesResponse.prototype['metadata'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
WebhookLogSummariesResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
WebhookLogSummariesResponse.prototype['warning'] = undefined;

/**
 * Webhook log summaries
 * @member {Array.<module:com.ultracart.admin.v2.models/WebhookLogSummary>} webhook_log_summaries
 */
WebhookLogSummariesResponse.prototype['webhook_log_summaries'] = undefined;






export default WebhookLogSummariesResponse;

