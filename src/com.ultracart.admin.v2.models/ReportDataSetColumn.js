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
 * The ReportDataSetColumn model module.
 * @module com.ultracart.admin.v2.models/ReportDataSetColumn
 * @version 4.0.150
 */
class ReportDataSetColumn {
    /**
     * Constructs a new <code>ReportDataSetColumn</code>.
     * @alias module:com.ultracart.admin.v2.models/ReportDataSetColumn
     */
    constructor() { 
        
        ReportDataSetColumn.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportDataSetColumn</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportDataSetColumn} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportDataSetColumn} The populated <code>ReportDataSetColumn</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportDataSetColumn();

            if (data.hasOwnProperty('in')) {
                obj['in'] = ApiClient.convertToType(data['in'], 'Boolean');
            }
            if (data.hasOwnProperty('n')) {
                obj['n'] = ApiClient.convertToType(data['n'], 'String');
            }
            if (data.hasOwnProperty('vd')) {
                obj['vd'] = ApiClient.convertToType(data['vd'], 'String');
            }
            if (data.hasOwnProperty('vdt')) {
                obj['vdt'] = ApiClient.convertToType(data['vdt'], 'String');
            }
            if (data.hasOwnProperty('vn')) {
                obj['vn'] = ApiClient.convertToType(data['vn'], 'Number');
            }
            if (data.hasOwnProperty('vs')) {
                obj['vs'] = ApiClient.convertToType(data['vs'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} in
 */
ReportDataSetColumn.prototype['in'] = undefined;

/**
 * @member {String} n
 */
ReportDataSetColumn.prototype['n'] = undefined;

/**
 * @member {String} vd
 */
ReportDataSetColumn.prototype['vd'] = undefined;

/**
 * @member {String} vdt
 */
ReportDataSetColumn.prototype['vdt'] = undefined;

/**
 * @member {Number} vn
 */
ReportDataSetColumn.prototype['vn'] = undefined;

/**
 * @member {String} vs
 */
ReportDataSetColumn.prototype['vs'] = undefined;






export default ReportDataSetColumn;

