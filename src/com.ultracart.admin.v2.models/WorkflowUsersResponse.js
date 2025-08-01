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
import Warning from './Warning';
import WorkflowUser from './WorkflowUser';

/**
 * The WorkflowUsersResponse model module.
 * @module com.ultracart.admin.v2.models/WorkflowUsersResponse
 * @version 4.1.16
 */
class WorkflowUsersResponse {
    /**
     * Constructs a new <code>WorkflowUsersResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/WorkflowUsersResponse
     */
    constructor() { 
        
        WorkflowUsersResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkflowUsersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/WorkflowUsersResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/WorkflowUsersResponse} The populated <code>WorkflowUsersResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowUsersResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('my_user_id')) {
                obj['my_user_id'] = ApiClient.convertToType(data['my_user_id'], 'Number');
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], [WorkflowUser]);
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
WorkflowUsersResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
WorkflowUsersResponse.prototype['metadata'] = undefined;

/**
 * User ID of myself
 * @member {Number} my_user_id
 */
WorkflowUsersResponse.prototype['my_user_id'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
WorkflowUsersResponse.prototype['success'] = undefined;

/**
 * users
 * @member {Array.<module:com.ultracart.admin.v2.models/WorkflowUser>} users
 */
WorkflowUsersResponse.prototype['users'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
WorkflowUsersResponse.prototype['warning'] = undefined;






export default WorkflowUsersResponse;

