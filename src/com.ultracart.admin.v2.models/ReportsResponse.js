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
import Error from './Error';
import Report from './Report';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The ReportsResponse model module.
 * @module com.ultracart.admin.v2.models/ReportsResponse
 * @version 4.0.165
 */
class ReportsResponse {
    /**
     * Constructs a new <code>ReportsResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/ReportsResponse
     */
    constructor() { 
        
        ReportsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportsResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportsResponse} The populated <code>ReportsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportsResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('reports')) {
                obj['reports'] = ApiClient.convertToType(data['reports'], [Report]);
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('warning')) {
                obj['warning'] = Warning.constructFromObject(data['warning']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
ReportsResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
ReportsResponse.prototype['metadata'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/Report>} reports
 */
ReportsResponse.prototype['reports'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
ReportsResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
ReportsResponse.prototype['warning'] = undefined;






export default ReportsResponse;

