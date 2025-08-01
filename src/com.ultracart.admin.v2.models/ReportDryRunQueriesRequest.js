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
 * The ReportDryRunQueriesRequest model module.
 * @module com.ultracart.admin.v2.models/ReportDryRunQueriesRequest
 * @version 4.1.16
 */
class ReportDryRunQueriesRequest {
    /**
     * Constructs a new <code>ReportDryRunQueriesRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/ReportDryRunQueriesRequest
     */
    constructor() { 
        
        ReportDryRunQueriesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportDryRunQueriesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportDryRunQueriesRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportDryRunQueriesRequest} The populated <code>ReportDryRunQueriesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportDryRunQueriesRequest();

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
            if (data.hasOwnProperty('security_level')) {
                obj['security_level'] = ApiClient.convertToType(data['security_level'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} connection_id
 */
ReportDryRunQueriesRequest.prototype['connection_id'] = undefined;

/**
 * @member {String} default_dataset_id
 */
ReportDryRunQueriesRequest.prototype['default_dataset_id'] = undefined;

/**
 * @member {String} default_project_id
 */
ReportDryRunQueriesRequest.prototype['default_project_id'] = undefined;

/**
 * @member {String} merchant_id
 */
ReportDryRunQueriesRequest.prototype['merchant_id'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ReportDataSetQuery>} queries
 */
ReportDryRunQueriesRequest.prototype['queries'] = undefined;

/**
 * @member {String} security_level
 */
ReportDryRunQueriesRequest.prototype['security_level'] = undefined;






export default ReportDryRunQueriesRequest;

