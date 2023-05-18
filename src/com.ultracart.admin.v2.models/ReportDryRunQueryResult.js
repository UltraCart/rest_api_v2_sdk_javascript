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
 * The ReportDryRunQueryResult model module.
 * @module com.ultracart.admin.v2.models/ReportDryRunQueryResult
 * @version 4.0.155
 */
class ReportDryRunQueryResult {
    /**
     * Constructs a new <code>ReportDryRunQueryResult</code>.
     * @alias module:com.ultracart.admin.v2.models/ReportDryRunQueryResult
     */
    constructor() { 
        
        ReportDryRunQueryResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportDryRunQueryResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportDryRunQueryResult} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportDryRunQueryResult} The populated <code>ReportDryRunQueryResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportDryRunQueryResult();

            if (data.hasOwnProperty('error_message')) {
                obj['error_message'] = ApiClient.convertToType(data['error_message'], 'String');
            }
            if (data.hasOwnProperty('total_bytes_processed')) {
                obj['total_bytes_processed'] = ApiClient.convertToType(data['total_bytes_processed'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} error_message
 */
ReportDryRunQueryResult.prototype['error_message'] = undefined;

/**
 * @member {Number} total_bytes_processed
 */
ReportDryRunQueryResult.prototype['total_bytes_processed'] = undefined;






export default ReportDryRunQueryResult;

