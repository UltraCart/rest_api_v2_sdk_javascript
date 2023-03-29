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
import ResponseMetadata from './ResponseMetadata';
import User from './User';
import Warning from './Warning';

/**
 * The UsersResponse model module.
 * @module com.ultracart.admin.v2.models/UsersResponse
 * @version 4.0.144
 */
class UsersResponse {
    /**
     * Constructs a new <code>UsersResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/UsersResponse
     */
    constructor() { 
        
        UsersResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UsersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/UsersResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/UsersResponse} The populated <code>UsersResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsersResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], [User]);
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
UsersResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
UsersResponse.prototype['metadata'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
UsersResponse.prototype['success'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/User>} users
 */
UsersResponse.prototype['users'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
UsersResponse.prototype['warning'] = undefined;






export default UsersResponse;

