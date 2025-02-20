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
import WorkflowUser from './WorkflowUser';

/**
 * The WorkflowTaskHistory model module.
 * @module com.ultracart.admin.v2.models/WorkflowTaskHistory
 * @version 4.0.245
 */
class WorkflowTaskHistory {
    /**
     * Constructs a new <code>WorkflowTaskHistory</code>.
     * @alias module:com.ultracart.admin.v2.models/WorkflowTaskHistory
     */
    constructor() { 
        
        WorkflowTaskHistory.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkflowTaskHistory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/WorkflowTaskHistory} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/WorkflowTaskHistory} The populated <code>WorkflowTaskHistory</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowTaskHistory();

            if (data.hasOwnProperty('activity_dts')) {
                obj['activity_dts'] = ApiClient.convertToType(data['activity_dts'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('ip_address')) {
                obj['ip_address'] = ApiClient.convertToType(data['ip_address'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = WorkflowUser.constructFromObject(data['user']);
            }
        }
        return obj;
    }


}

/**
 * Date/time that the workflow task history record was created
 * @member {String} activity_dts
 */
WorkflowTaskHistory.prototype['activity_dts'] = undefined;

/**
 * Description of the activity
 * @member {String} description
 */
WorkflowTaskHistory.prototype['description'] = undefined;

/**
 * IP Address that originated the activity
 * @member {String} ip_address
 */
WorkflowTaskHistory.prototype['ip_address'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/WorkflowUser} user
 */
WorkflowTaskHistory.prototype['user'] = undefined;






export default WorkflowTaskHistory;

