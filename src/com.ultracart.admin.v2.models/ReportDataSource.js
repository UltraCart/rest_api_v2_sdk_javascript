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
import ReportDataSourceSchema from './ReportDataSourceSchema';

/**
 * The ReportDataSource model module.
 * @module com.ultracart.admin.v2.models/ReportDataSource
 * @version 4.0.178
 */
class ReportDataSource {
    /**
     * Constructs a new <code>ReportDataSource</code>.
     * @alias module:com.ultracart.admin.v2.models/ReportDataSource
     */
    constructor() { 
        
        ReportDataSource.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportDataSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportDataSource} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportDataSource} The populated <code>ReportDataSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportDataSource();

            if (data.hasOwnProperty('data_source_uuid')) {
                obj['data_source_uuid'] = ApiClient.convertToType(data['data_source_uuid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('partition_date_column')) {
                obj['partition_date_column'] = ApiClient.convertToType(data['partition_date_column'], 'String');
            }
            if (data.hasOwnProperty('partition_date_safety_days')) {
                obj['partition_date_safety_days'] = ApiClient.convertToType(data['partition_date_safety_days'], 'Number');
            }
            if (data.hasOwnProperty('partition_date_strategy')) {
                obj['partition_date_strategy'] = ApiClient.convertToType(data['partition_date_strategy'], 'String');
            }
            if (data.hasOwnProperty('schema')) {
                obj['schema'] = ApiClient.convertToType(data['schema'], [ReportDataSourceSchema]);
            }
            if (data.hasOwnProperty('sql')) {
                obj['sql'] = ApiClient.convertToType(data['sql'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A unique identifier assigned to the data source.
 * @member {String} data_source_uuid
 */
ReportDataSource.prototype['data_source_uuid'] = undefined;

/**
 * @member {String} name
 */
ReportDataSource.prototype['name'] = undefined;

/**
 * @member {String} partition_date_column
 */
ReportDataSource.prototype['partition_date_column'] = undefined;

/**
 * @member {Number} partition_date_safety_days
 */
ReportDataSource.prototype['partition_date_safety_days'] = undefined;

/**
 * The partition date strategy, defaults to weekly sunday
 * @member {String} partition_date_strategy
 */
ReportDataSource.prototype['partition_date_strategy'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ReportDataSourceSchema>} schema
 */
ReportDataSource.prototype['schema'] = undefined;

/**
 * @member {String} sql
 */
ReportDataSource.prototype['sql'] = undefined;






export default ReportDataSource;

