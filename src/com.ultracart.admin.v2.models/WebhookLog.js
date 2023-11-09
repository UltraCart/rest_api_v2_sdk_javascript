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
 * The WebhookLog model module.
 * @module com.ultracart.admin.v2.models/WebhookLog
 * @version 4.0.187
 */
class WebhookLog {
    /**
     * Constructs a new <code>WebhookLog</code>.
     * @alias module:com.ultracart.admin.v2.models/WebhookLog
     */
    constructor() { 
        
        WebhookLog.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookLog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/WebhookLog} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/WebhookLog} The populated <code>WebhookLog</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookLog();

            if (data.hasOwnProperty('delivery_dts')) {
                obj['delivery_dts'] = ApiClient.convertToType(data['delivery_dts'], 'String');
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
            }
            if (data.hasOwnProperty('queue_delay')) {
                obj['queue_delay'] = ApiClient.convertToType(data['queue_delay'], 'Number');
            }
            if (data.hasOwnProperty('request')) {
                obj['request'] = ApiClient.convertToType(data['request'], 'String');
            }
            if (data.hasOwnProperty('request_headers')) {
                obj['request_headers'] = ApiClient.convertToType(data['request_headers'], [HTTPHeader]);
            }
            if (data.hasOwnProperty('request_id')) {
                obj['request_id'] = ApiClient.convertToType(data['request_id'], 'String');
            }
            if (data.hasOwnProperty('response')) {
                obj['response'] = ApiClient.convertToType(data['response'], 'String');
            }
            if (data.hasOwnProperty('response_headers')) {
                obj['response_headers'] = ApiClient.convertToType(data['response_headers'], [HTTPHeader]);
            }
            if (data.hasOwnProperty('status_code')) {
                obj['status_code'] = ApiClient.convertToType(data['status_code'], 'Number');
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Date/time of delivery
 * @member {String} delivery_dts
 */
WebhookLog.prototype['delivery_dts'] = undefined;

/**
 * Number of milliseconds to process the notification
 * @member {Number} duration
 */
WebhookLog.prototype['duration'] = undefined;

/**
 * Number of milliseconds of delay caused by queuing
 * @member {Number} queue_delay
 */
WebhookLog.prototype['queue_delay'] = undefined;

/**
 * Request payload (first 100,000 characters)
 * @member {String} request
 */
WebhookLog.prototype['request'] = undefined;

/**
 * Request headers sent to the server
 * @member {Array.<module:com.ultracart.admin.v2.models/HTTPHeader>} request_headers
 */
WebhookLog.prototype['request_headers'] = undefined;

/**
 * Request id is a unique string that you can look up in the logs
 * @member {String} request_id
 */
WebhookLog.prototype['request_id'] = undefined;

/**
 * Response payload (first 100,000 characters)
 * @member {String} response
 */
WebhookLog.prototype['response'] = undefined;

/**
 * Response headers received from the server
 * @member {Array.<module:com.ultracart.admin.v2.models/HTTPHeader>} response_headers
 */
WebhookLog.prototype['response_headers'] = undefined;

/**
 * HTTP status code received from the server
 * @member {Number} status_code
 */
WebhookLog.prototype['status_code'] = undefined;

/**
 * True if the delivery was successful
 * @member {Boolean} success
 */
WebhookLog.prototype['success'] = undefined;

/**
 * URI of the webhook delivered to
 * @member {String} uri
 */
WebhookLog.prototype['uri'] = undefined;






export default WebhookLog;

