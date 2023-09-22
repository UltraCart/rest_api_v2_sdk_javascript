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
 * The ReportPageVisualizationDimension model module.
 * @module com.ultracart.admin.v2.models/ReportPageVisualizationDimension
 * @version 4.0.178
 */
class ReportPageVisualizationDimension {
    /**
     * Constructs a new <code>ReportPageVisualizationDimension</code>.
     * @alias module:com.ultracart.admin.v2.models/ReportPageVisualizationDimension
     */
    constructor() { 
        
        ReportPageVisualizationDimension.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportPageVisualizationDimension</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportPageVisualizationDimension} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportPageVisualizationDimension} The populated <code>ReportPageVisualizationDimension</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportPageVisualizationDimension();

            if (data.hasOwnProperty('as')) {
                obj['as'] = ApiClient.convertToType(data['as'], 'String');
            }
            if (data.hasOwnProperty('cast')) {
                obj['cast'] = ApiClient.convertToType(data['cast'], 'String');
            }
            if (data.hasOwnProperty('column')) {
                obj['column'] = ApiClient.convertToType(data['column'], 'String');
            }
            if (data.hasOwnProperty('datetime_timezone')) {
                obj['datetime_timezone'] = ApiClient.convertToType(data['datetime_timezone'], 'String');
            }
            if (data.hasOwnProperty('datetime_trunc')) {
                obj['datetime_trunc'] = ApiClient.convertToType(data['datetime_trunc'], 'String');
            }
            if (data.hasOwnProperty('extract')) {
                obj['extract'] = ApiClient.convertToType(data['extract'], 'String');
            }
            if (data.hasOwnProperty('function')) {
                obj['function'] = ApiClient.convertToType(data['function'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Return the column as a different name
 * @member {String} as
 */
ReportPageVisualizationDimension.prototype['as'] = undefined;

/**
 * Cast the column to a different data type such as DATETIME -> DATE
 * @member {String} cast
 */
ReportPageVisualizationDimension.prototype['cast'] = undefined;

/**
 * @member {String} column
 */
ReportPageVisualizationDimension.prototype['column'] = undefined;

/**
 * The timezone to shift the date to
 * @member {String} datetime_timezone
 */
ReportPageVisualizationDimension.prototype['datetime_timezone'] = undefined;

/**
 * The type of truncation to perform on the date, DAY, WEEK(MONDAY), etc.
 * @member {String} datetime_trunc
 */
ReportPageVisualizationDimension.prototype['datetime_trunc'] = undefined;

/**
 * Part of a datetime to extract
 * @member {String} extract
 */
ReportPageVisualizationDimension.prototype['extract'] = undefined;

/**
 * The function to perform around the column such as DATE_TRUNC(@column, day)
 * @member {String} function
 */
ReportPageVisualizationDimension.prototype['function'] = undefined;






export default ReportPageVisualizationDimension;

