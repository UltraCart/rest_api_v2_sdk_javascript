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
 * The ReportFilterConnection model module.
 * @module com.ultracart.admin.v2.models/ReportFilterConnection
 * @version 4.0.185
 */
class ReportFilterConnection {
    /**
     * Constructs a new <code>ReportFilterConnection</code>.
     * @alias module:com.ultracart.admin.v2.models/ReportFilterConnection
     */
    constructor() { 
        
        ReportFilterConnection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportFilterConnection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportFilterConnection} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportFilterConnection} The populated <code>ReportFilterConnection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportFilterConnection();

            if (data.hasOwnProperty('column')) {
                obj['column'] = ApiClient.convertToType(data['column'], 'String');
            }
            if (data.hasOwnProperty('data_source_name')) {
                obj['data_source_name'] = ApiClient.convertToType(data['data_source_name'], 'String');
            }
            if (data.hasOwnProperty('data_source_uuid')) {
                obj['data_source_uuid'] = ApiClient.convertToType(data['data_source_uuid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} column
 */
ReportFilterConnection.prototype['column'] = undefined;

/**
 * @member {String} data_source_name
 */
ReportFilterConnection.prototype['data_source_name'] = undefined;

/**
 * A unique identifier assigned to the data source.
 * @member {String} data_source_uuid
 */
ReportFilterConnection.prototype['data_source_uuid'] = undefined;






export default ReportFilterConnection;

