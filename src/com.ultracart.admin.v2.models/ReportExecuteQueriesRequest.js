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
import ReportDataSetQuery from './ReportDataSetQuery';

/**
 * The ReportExecuteQueriesRequest model module.
 * @module com.ultracart.admin.v2.models/ReportExecuteQueriesRequest
 * @version 4.0.179
 */
class ReportExecuteQueriesRequest {
    /**
     * Constructs a new <code>ReportExecuteQueriesRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/ReportExecuteQueriesRequest
     */
    constructor() { 
        
        ReportExecuteQueriesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportExecuteQueriesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportExecuteQueriesRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportExecuteQueriesRequest} The populated <code>ReportExecuteQueriesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportExecuteQueriesRequest();

            if (data.hasOwnProperty('client_uuid')) {
                obj['client_uuid'] = ApiClient.convertToType(data['client_uuid'], 'String');
            }
            if (data.hasOwnProperty('connection_id')) {
                obj['connection_id'] = ApiClient.convertToType(data['connection_id'], 'String');
            }
            if (data.hasOwnProperty('default_dataset_id')) {
                obj['default_dataset_id'] = ApiClient.convertToType(data['default_dataset_id'], 'String');
            }
            if (data.hasOwnProperty('default_project_id')) {
                obj['default_project_id'] = ApiClient.convertToType(data['default_project_id'], 'String');
            }
            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('queries')) {
                obj['queries'] = ApiClient.convertToType(data['queries'], [ReportDataSetQuery]);
            }
            if (data.hasOwnProperty('request_dts')) {
                obj['request_dts'] = ApiClient.convertToType(data['request_dts'], 'String');
            }
            if (data.hasOwnProperty('security_level')) {
                obj['security_level'] = ApiClient.convertToType(data['security_level'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Unique UUID assigned to this client during the auth.  This will be used to locate the websocket connect id.
 * @member {String} client_uuid
 */
ReportExecuteQueriesRequest.prototype['client_uuid'] = undefined;

/**
 * The websocket connection id that should receive back notices of query completion.
 * @member {String} connection_id
 */
ReportExecuteQueriesRequest.prototype['connection_id'] = undefined;

/**
 * @member {String} default_dataset_id
 */
ReportExecuteQueriesRequest.prototype['default_dataset_id'] = undefined;

/**
 * @member {String} default_project_id
 */
ReportExecuteQueriesRequest.prototype['default_project_id'] = undefined;

/**
 * @member {String} merchant_id
 */
ReportExecuteQueriesRequest.prototype['merchant_id'] = undefined;

/**
 * An array of queries that we want the lambda function to execute.
 * @member {Array.<module:com.ultracart.admin.v2.models/ReportDataSetQuery>} queries
 */
ReportExecuteQueriesRequest.prototype['queries'] = undefined;

/**
 * Date/Time of the client submitted the request.  Can be used to resolve out of order query completion results
 * @member {String} request_dts
 */
ReportExecuteQueriesRequest.prototype['request_dts'] = undefined;

/**
 * Security level to execute report under
 * @member {module:com.ultracart.admin.v2.models/ReportExecuteQueriesRequest.SecurityLevelEnum} security_level
 */
ReportExecuteQueriesRequest.prototype['security_level'] = undefined;





/**
 * Allowed values for the <code>security_level</code> property.
 * @enum {String}
 * @readonly
 */
ReportExecuteQueriesRequest['SecurityLevelEnum'] = {

    /**
     * value: "standard"
     * @const
     */
    "standard": "standard",

    /**
     * value: "low"
     * @const
     */
    "low": "low",

    /**
     * value: "medium"
     * @const
     */
    "medium": "medium",

    /**
     * value: "high"
     * @const
     */
    "high": "high"
};



export default ReportExecuteQueriesRequest;

