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
import Customer from './Customer';

/**
 * The DataTablesServerSideResponse model module.
 * @module com.ultracart.admin.v2.models/DataTablesServerSideResponse
 * @version 4.0.47-RC
 */
class DataTablesServerSideResponse {
    /**
     * Constructs a new <code>DataTablesServerSideResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/DataTablesServerSideResponse
     */
    constructor() { 
        
        DataTablesServerSideResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DataTablesServerSideResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/DataTablesServerSideResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/DataTablesServerSideResponse} The populated <code>DataTablesServerSideResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DataTablesServerSideResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Customer]);
            }
            if (data.hasOwnProperty('draw')) {
                obj['draw'] = ApiClient.convertToType(data['draw'], 'Number');
            }
            if (data.hasOwnProperty('recordsFiltered')) {
                obj['recordsFiltered'] = ApiClient.convertToType(data['recordsFiltered'], 'Number');
            }
            if (data.hasOwnProperty('recordsTotal')) {
                obj['recordsTotal'] = ApiClient.convertToType(data['recordsTotal'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/Customer>} data
 */
DataTablesServerSideResponse.prototype['data'] = undefined;

/**
 * @member {Number} draw
 */
DataTablesServerSideResponse.prototype['draw'] = undefined;

/**
 * @member {Number} recordsFiltered
 */
DataTablesServerSideResponse.prototype['recordsFiltered'] = undefined;

/**
 * @member {Number} recordsTotal
 */
DataTablesServerSideResponse.prototype['recordsTotal'] = undefined;






export default DataTablesServerSideResponse;

