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
 * The WorkflowUser model module.
 * @module com.ultracart.admin.v2.models/WorkflowUser
 * @version 4.0.185
 */
class WorkflowUser {
    /**
     * Constructs a new <code>WorkflowUser</code>.
     * @alias module:com.ultracart.admin.v2.models/WorkflowUser
     */
    constructor() { 
        
        WorkflowUser.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkflowUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/WorkflowUser} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/WorkflowUser} The populated <code>WorkflowUser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowUser();

            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
            if (data.hasOwnProperty('user_icon_url')) {
                obj['user_icon_url'] = ApiClient.convertToType(data['user_icon_url'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The user
 * @member {String} user
 */
WorkflowUser.prototype['user'] = undefined;

/**
 * The user icon URL if available
 * @member {String} user_icon_url
 */
WorkflowUser.prototype['user_icon_url'] = undefined;

/**
 * User ID
 * @member {Number} user_id
 */
WorkflowUser.prototype['user_id'] = undefined;






export default WorkflowUser;

