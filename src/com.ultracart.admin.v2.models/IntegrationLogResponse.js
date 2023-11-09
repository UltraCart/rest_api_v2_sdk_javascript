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
import IntegrationLog from './IntegrationLog';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The IntegrationLogResponse model module.
 * @module com.ultracart.admin.v2.models/IntegrationLogResponse
 * @version 4.0.187
 */
class IntegrationLogResponse {
    /**
     * Constructs a new <code>IntegrationLogResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/IntegrationLogResponse
     */
    constructor() { 
        
        IntegrationLogResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IntegrationLogResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/IntegrationLogResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/IntegrationLogResponse} The populated <code>IntegrationLogResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IntegrationLogResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('integration_log')) {
                obj['integration_log'] = IntegrationLog.constructFromObject(data['integration_log']);
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
IntegrationLogResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/IntegrationLog} integration_log
 */
IntegrationLogResponse.prototype['integration_log'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
IntegrationLogResponse.prototype['metadata'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
IntegrationLogResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
IntegrationLogResponse.prototype['warning'] = undefined;






export default IntegrationLogResponse;

