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
 * The EmailWebhookEditorValuesResponse model module.
 * @module com.ultracart.admin.v2.models/EmailWebhookEditorValuesResponse
 * @version 4.0.142
 */
class EmailWebhookEditorValuesResponse {
    /**
     * Constructs a new <code>EmailWebhookEditorValuesResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailWebhookEditorValuesResponse
     */
    constructor() { 
        
        EmailWebhookEditorValuesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailWebhookEditorValuesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailWebhookEditorValuesResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailWebhookEditorValuesResponse} The populated <code>EmailWebhookEditorValuesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailWebhookEditorValuesResponse();

            if (data.hasOwnProperty('available_expansions')) {
                obj['available_expansions'] = ApiClient.convertToType(data['available_expansions'], ['String']);
            }
            if (data.hasOwnProperty('available_tokens')) {
                obj['available_tokens'] = ApiClient.convertToType(data['available_tokens'], ['String']);
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('rest_object_type')) {
                obj['rest_object_type'] = ApiClient.convertToType(data['rest_object_type'], 'String');
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
 * @member {Array.<String>} available_expansions
 */
EmailWebhookEditorValuesResponse.prototype['available_expansions'] = undefined;

/**
 * @member {Array.<String>} available_tokens
 */
EmailWebhookEditorValuesResponse.prototype['available_tokens'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
EmailWebhookEditorValuesResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
EmailWebhookEditorValuesResponse.prototype['metadata'] = undefined;

/**
 * @member {String} rest_object_type
 */
EmailWebhookEditorValuesResponse.prototype['rest_object_type'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
EmailWebhookEditorValuesResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
EmailWebhookEditorValuesResponse.prototype['warning'] = undefined;






export default EmailWebhookEditorValuesResponse;

