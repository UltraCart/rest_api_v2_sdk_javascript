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
import ReportDryRunQueryResult from './ReportDryRunQueryResult';

/**
 * The ReportDryRunQueriesResponse model module.
 * @module com.ultracart.admin.v2.models/ReportDryRunQueriesResponse
 * @version 4.0.188
 */
class ReportDryRunQueriesResponse {
    /**
     * Constructs a new <code>ReportDryRunQueriesResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/ReportDryRunQueriesResponse
     */
    constructor() { 
        
        ReportDryRunQueriesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportDryRunQueriesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportDryRunQueriesResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportDryRunQueriesResponse} The populated <code>ReportDryRunQueriesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportDryRunQueriesResponse();

            if (data.hasOwnProperty('dry_run_query_results')) {
                obj['dry_run_query_results'] = ApiClient.convertToType(data['dry_run_query_results'], [ReportDryRunQueryResult]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ReportDryRunQueryResult>} dry_run_query_results
 */
ReportDryRunQueriesResponse.prototype['dry_run_query_results'] = undefined;






export default ReportDryRunQueriesResponse;

