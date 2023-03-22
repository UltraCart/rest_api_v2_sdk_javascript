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
import HTTPHeader from './HTTPHeader';

/**
 * The WebhookSampleRequest model module.
 * @module com.ultracart.admin.v2.models/WebhookSampleRequest
 * @version 4.0.142
 */
class WebhookSampleRequest {
    /**
     * Constructs a new <code>WebhookSampleRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/WebhookSampleRequest
     */
    constructor() { 
        
        WebhookSampleRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookSampleRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/WebhookSampleRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/WebhookSampleRequest} The populated <code>WebhookSampleRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookSampleRequest();

            if (data.hasOwnProperty('request')) {
                obj['request'] = ApiClient.convertToType(data['request'], 'String');
            }
            if (data.hasOwnProperty('request_headers')) {
                obj['request_headers'] = ApiClient.convertToType(data['request_headers'], [HTTPHeader]);
            }
            if (data.hasOwnProperty('request_id')) {
                obj['request_id'] = ApiClient.convertToType(data['request_id'], 'String');
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Request
 * @member {String} request
 */
WebhookSampleRequest.prototype['request'] = undefined;

/**
 * Request headers
 * @member {Array.<module:com.ultracart.admin.v2.models/HTTPHeader>} request_headers
 */
WebhookSampleRequest.prototype['request_headers'] = undefined;

/**
 * Request id
 * @member {String} request_id
 */
WebhookSampleRequest.prototype['request_id'] = undefined;

/**
 * URI to send request to
 * @member {String} uri
 */
WebhookSampleRequest.prototype['uri'] = undefined;






export default WebhookSampleRequest;

