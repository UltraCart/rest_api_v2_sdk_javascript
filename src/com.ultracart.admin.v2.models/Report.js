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
import ReportDataSource from './ReportDataSource';
import ReportFilter from './ReportFilter';
import ReportPage from './ReportPage';

/**
 * The Report model module.
 * @module com.ultracart.admin.v2.models/Report
 * @version 4.0.178
 */
class Report {
    /**
     * Constructs a new <code>Report</code>.
     * @alias module:com.ultracart.admin.v2.models/Report
     */
    constructor() { 
        
        Report.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Report</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Report} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Report} The populated <code>Report</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Report();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('data_sources')) {
                obj['data_sources'] = ApiClient.convertToType(data['data_sources'], [ReportDataSource]);
            }
            if (data.hasOwnProperty('default_dataset_id')) {
                obj['default_dataset_id'] = ApiClient.convertToType(data['default_dataset_id'], 'String');
            }
            if (data.hasOwnProperty('default_project_id')) {
                obj['default_project_id'] = ApiClient.convertToType(data['default_project_id'], 'String');
            }
            if (data.hasOwnProperty('filters')) {
                obj['filters'] = ApiClient.convertToType(data['filters'], [ReportFilter]);
            }
            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('pages')) {
                obj['pages'] = ApiClient.convertToType(data['pages'], [ReportPage]);
            }
            if (data.hasOwnProperty('report_oid')) {
                obj['report_oid'] = ApiClient.convertToType(data['report_oid'], 'Number');
            }
            if (data.hasOwnProperty('security_level')) {
                obj['security_level'] = ApiClient.convertToType(data['security_level'], 'String');
            }
            if (data.hasOwnProperty('settings')) {
                obj['settings'] = ApiClient.convertToType(data['settings'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} active
 */
Report.prototype['active'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ReportDataSource>} data_sources
 */
Report.prototype['data_sources'] = undefined;

/**
 * @member {String} default_dataset_id
 */
Report.prototype['default_dataset_id'] = undefined;

/**
 * @member {String} default_project_id
 */
Report.prototype['default_project_id'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ReportFilter>} filters
 */
Report.prototype['filters'] = undefined;

/**
 * @member {String} merchant_id
 */
Report.prototype['merchant_id'] = undefined;

/**
 * @member {String} name
 */
Report.prototype['name'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ReportPage>} pages
 */
Report.prototype['pages'] = undefined;

/**
 * Object identifier for this report.
 * @member {Number} report_oid
 */
Report.prototype['report_oid'] = undefined;

/**
 * Security level to execute report under
 * @member {module:com.ultracart.admin.v2.models/Report.SecurityLevelEnum} security_level
 */
Report.prototype['security_level'] = undefined;

/**
 * A JSON representation of the settings for this report
 * @member {String} settings
 */
Report.prototype['settings'] = undefined;





/**
 * Allowed values for the <code>security_level</code> property.
 * @enum {String}
 * @readonly
 */
Report['SecurityLevelEnum'] = {

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



export default Report;

