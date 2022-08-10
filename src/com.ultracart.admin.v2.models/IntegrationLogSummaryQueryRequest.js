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

/**
 * The IntegrationLogSummaryQueryRequest model module.
 * @module com.ultracart.admin.v2.models/IntegrationLogSummaryQueryRequest
 * @version 4.0.53-RC
 */
class IntegrationLogSummaryQueryRequest {
    /**
     * Constructs a new <code>IntegrationLogSummaryQueryRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/IntegrationLogSummaryQueryRequest
     */
    constructor() { 
        
        IntegrationLogSummaryQueryRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IntegrationLogSummaryQueryRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/IntegrationLogSummaryQueryRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/IntegrationLogSummaryQueryRequest} The populated <code>IntegrationLogSummaryQueryRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IntegrationLogSummaryQueryRequest();

            if (data.hasOwnProperty('log_dts_begin')) {
                obj['log_dts_begin'] = ApiClient.convertToType(data['log_dts_begin'], 'String');
            }
            if (data.hasOwnProperty('log_dts_end')) {
                obj['log_dts_end'] = ApiClient.convertToType(data['log_dts_end'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Log date/time begin
 * @member {String} log_dts_begin
 */
IntegrationLogSummaryQueryRequest.prototype['log_dts_begin'] = undefined;

/**
 * Log date/time end
 * @member {String} log_dts_end
 */
IntegrationLogSummaryQueryRequest.prototype['log_dts_end'] = undefined;






export default IntegrationLogSummaryQueryRequest;

