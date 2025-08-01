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
 * The ReportDataSetQueryOrderByColumn model module.
 * @module com.ultracart.admin.v2.models/ReportDataSetQueryOrderByColumn
 * @version 4.1.16
 */
class ReportDataSetQueryOrderByColumn {
    /**
     * Constructs a new <code>ReportDataSetQueryOrderByColumn</code>.
     * @alias module:com.ultracart.admin.v2.models/ReportDataSetQueryOrderByColumn
     */
    constructor() { 
        
        ReportDataSetQueryOrderByColumn.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportDataSetQueryOrderByColumn</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportDataSetQueryOrderByColumn} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportDataSetQueryOrderByColumn} The populated <code>ReportDataSetQueryOrderByColumn</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportDataSetQueryOrderByColumn();

            if (data.hasOwnProperty('ascending')) {
                obj['ascending'] = ApiClient.convertToType(data['ascending'], 'Boolean');
            }
            if (data.hasOwnProperty('column_name')) {
                obj['column_name'] = ApiClient.convertToType(data['column_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} ascending
 */
ReportDataSetQueryOrderByColumn.prototype['ascending'] = undefined;

/**
 * @member {String} column_name
 */
ReportDataSetQueryOrderByColumn.prototype['column_name'] = undefined;






export default ReportDataSetQueryOrderByColumn;

