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
 * The GroupUserMembership model module.
 * @module com.ultracart.admin.v2.models/GroupUserMembership
 * @version 4.1.16
 */
class GroupUserMembership {
    /**
     * Constructs a new <code>GroupUserMembership</code>.
     * @alias module:com.ultracart.admin.v2.models/GroupUserMembership
     */
    constructor() { 
        
        GroupUserMembership.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GroupUserMembership</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/GroupUserMembership} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/GroupUserMembership} The populated <code>GroupUserMembership</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupUserMembership();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('fullName')) {
                obj['fullName'] = ApiClient.convertToType(data['fullName'], 'String');
            }
            if (data.hasOwnProperty('login')) {
                obj['login'] = ApiClient.convertToType(data['login'], 'String');
            }
            if (data.hasOwnProperty('member')) {
                obj['member'] = ApiClient.convertToType(data['member'], 'Boolean');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The email for this user.
 * @member {String} email
 */
GroupUserMembership.prototype['email'] = undefined;

/**
 * The full name for this user.
 * @member {String} fullName
 */
GroupUserMembership.prototype['fullName'] = undefined;

/**
 * The login for this user.
 * @member {String} login
 */
GroupUserMembership.prototype['login'] = undefined;

/**
 * True if this user belongs to the parent group, false otherwise.
 * @member {Boolean} member
 */
GroupUserMembership.prototype['member'] = undefined;

/**
 * The user id for this user.
 * @member {Number} user_id
 */
GroupUserMembership.prototype['user_id'] = undefined;






export default GroupUserMembership;

