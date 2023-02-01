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
 * The ConversationDepartmentMember model module.
 * @module com.ultracart.admin.v2.models/ConversationDepartmentMember
 * @version 4.0.129
 */
class ConversationDepartmentMember {
    /**
     * Constructs a new <code>ConversationDepartmentMember</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationDepartmentMember
     */
    constructor() { 
        
        ConversationDepartmentMember.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationDepartmentMember</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationDepartmentMember} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationDepartmentMember} The populated <code>ConversationDepartmentMember</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationDepartmentMember();

            if (data.hasOwnProperty('member')) {
                obj['member'] = ApiClient.convertToType(data['member'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} member
 */
ConversationDepartmentMember.prototype['member'] = undefined;

/**
 * @member {String} name
 */
ConversationDepartmentMember.prototype['name'] = undefined;

/**
 * @member {Number} user_id
 */
ConversationDepartmentMember.prototype['user_id'] = undefined;






export default ConversationDepartmentMember;

