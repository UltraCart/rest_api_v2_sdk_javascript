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
import GroupUserMembership from './GroupUserMembership';
import Notification from './Notification';
import Permission from './Permission';

/**
 * The Group model module.
 * @module com.ultracart.admin.v2.models/Group
 * @version 4.0.165
 */
class Group {
    /**
     * Constructs a new <code>Group</code>.
     * @alias module:com.ultracart.admin.v2.models/Group
     */
    constructor() { 
        
        Group.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Group</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Group} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Group} The populated <code>Group</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Group();

            if (data.hasOwnProperty('group_oid')) {
                obj['group_oid'] = ApiClient.convertToType(data['group_oid'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('notifications')) {
                obj['notifications'] = ApiClient.convertToType(data['notifications'], [Notification]);
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], [Permission]);
            }
            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], [GroupUserMembership]);
            }
        }
        return obj;
    }


}

/**
 * The unique object identifier (oid for short) for this group
 * @member {Number} group_oid
 */
Group.prototype['group_oid'] = undefined;

/**
 * The name of this group.
 * @member {String} name
 */
Group.prototype['name'] = undefined;

/**
 * A list of notifications the user receives.
 * @member {Array.<module:com.ultracart.admin.v2.models/Notification>} notifications
 */
Group.prototype['notifications'] = undefined;

/**
 * A list of permissions the user enjoys for accessing the backend of UltraCart.
 * @member {Array.<module:com.ultracart.admin.v2.models/Permission>} permissions
 */
Group.prototype['permissions'] = undefined;

/**
 * A list of users that belong to this group.
 * @member {Array.<module:com.ultracart.admin.v2.models/GroupUserMembership>} users
 */
Group.prototype['users'] = undefined;






export default Group;

