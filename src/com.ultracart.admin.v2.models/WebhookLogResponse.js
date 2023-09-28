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
import WebhookLog from './WebhookLog';

/**
 * The WebhookLogResponse model module.
 * @module com.ultracart.admin.v2.models/WebhookLogResponse
 * @version 4.0.179
 */
class WebhookLogResponse {
    /**
     * Constructs a new <code>WebhookLogResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/WebhookLogResponse
     */
    constructor() { 
        
        WebhookLogResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookLogResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/WebhookLogResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/WebhookLogResponse} The populated <code>WebhookLogResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookLogResponse();

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
            if (data.hasOwnProperty('webhook_log')) {
                obj['webhook_log'] = WebhookLog.constructFromObject(data['webhook_log']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
WebhookLogResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
WebhookLogResponse.prototype['metadata'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
WebhookLogResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
WebhookLogResponse.prototype['warning'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/WebhookLog} webhook_log
 */
WebhookLogResponse.prototype['webhook_log'] = undefined;






export default WebhookLogResponse;

