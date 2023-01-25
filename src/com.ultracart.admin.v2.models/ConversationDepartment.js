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
import ConversationDepartmentMember from './ConversationDepartmentMember';

/**
 * The ConversationDepartment model module.
 * @module com.ultracart.admin.v2.models/ConversationDepartment
 * @version 4.0.123-RC
 */
class ConversationDepartment {
    /**
     * Constructs a new <code>ConversationDepartment</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationDepartment
     */
    constructor() { 
        
        ConversationDepartment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationDepartment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationDepartment} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationDepartment} The populated <code>ConversationDepartment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationDepartment();

            if (data.hasOwnProperty('conversation_department_oid')) {
                obj['conversation_department_oid'] = ApiClient.convertToType(data['conversation_department_oid'], 'Number');
            }
            if (data.hasOwnProperty('department_name')) {
                obj['department_name'] = ApiClient.convertToType(data['department_name'], 'String');
            }
            if (data.hasOwnProperty('members')) {
                obj['members'] = ApiClient.convertToType(data['members'], [ConversationDepartmentMember]);
            }
            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('settings')) {
                obj['settings'] = ApiClient.convertToType(data['settings'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} conversation_department_oid
 */
ConversationDepartment.prototype['conversation_department_oid'] = undefined;

/**
 * @member {String} department_name
 */
ConversationDepartment.prototype['department_name'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ConversationDepartmentMember>} members
 */
ConversationDepartment.prototype['members'] = undefined;

/**
 * @member {String} merchant_id
 */
ConversationDepartment.prototype['merchant_id'] = undefined;

/**
 * @member {Object} settings
 */
ConversationDepartment.prototype['settings'] = undefined;






export default ConversationDepartment;

