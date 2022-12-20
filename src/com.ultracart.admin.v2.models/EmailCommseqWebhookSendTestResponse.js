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
 * The EmailCommseqWebhookSendTestResponse model module.
 * @module com.ultracart.admin.v2.models/EmailCommseqWebhookSendTestResponse
 * @version 4.0.101-RC
 */
class EmailCommseqWebhookSendTestResponse {
    /**
     * Constructs a new <code>EmailCommseqWebhookSendTestResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailCommseqWebhookSendTestResponse
     */
    constructor() { 
        
        EmailCommseqWebhookSendTestResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailCommseqWebhookSendTestResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqWebhookSendTestResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailCommseqWebhookSendTestResponse} The populated <code>EmailCommseqWebhookSendTestResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailCommseqWebhookSendTestResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('request')) {
                obj['request'] = ApiClient.convertToType(data['request'], 'String');
            }
            if (data.hasOwnProperty('response')) {
                obj['response'] = ApiClient.convertToType(data['response'], 'String');
            }
            if (data.hasOwnProperty('status_code')) {
                obj['status_code'] = ApiClient.convertToType(data['status_code'], 'Number');
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
EmailCommseqWebhookSendTestResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
EmailCommseqWebhookSendTestResponse.prototype['metadata'] = undefined;

/**
 * HTTP Request
 * @member {String} request
 */
EmailCommseqWebhookSendTestResponse.prototype['request'] = undefined;

/**
 * HTTP Response
 * @member {String} response
 */
EmailCommseqWebhookSendTestResponse.prototype['response'] = undefined;

/**
 * HTTP Status Code
 * @member {Number} status_code
 */
EmailCommseqWebhookSendTestResponse.prototype['status_code'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
EmailCommseqWebhookSendTestResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
EmailCommseqWebhookSendTestResponse.prototype['warning'] = undefined;






export default EmailCommseqWebhookSendTestResponse;

