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
 * The UserGroupMembership model module.
 * @module com.ultracart.admin.v2.models/UserGroupMembership
 * @version 4.0.53-RC
 */
class UserGroupMembership {
    /**
     * Constructs a new <code>UserGroupMembership</code>.
     * @alias module:com.ultracart.admin.v2.models/UserGroupMembership
     */
    constructor() { 
        
        UserGroupMembership.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserGroupMembership</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/UserGroupMembership} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/UserGroupMembership} The populated <code>UserGroupMembership</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserGroupMembership();

            if (data.hasOwnProperty('group_oid')) {
                obj['group_oid'] = ApiClient.convertToType(data['group_oid'], 'Number');
            }
            if (data.hasOwnProperty('member')) {
                obj['member'] = ApiClient.convertToType(data['member'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The unique object identifier (oid for short) for this group
 * @member {Number} group_oid
 */
UserGroupMembership.prototype['group_oid'] = undefined;

/**
 * True if this user is a member of the group.
 * @member {Boolean} member
 */
UserGroupMembership.prototype['member'] = undefined;

/**
 * The name of this group.
 * @member {String} name
 */
UserGroupMembership.prototype['name'] = undefined;






export default UserGroupMembership;

