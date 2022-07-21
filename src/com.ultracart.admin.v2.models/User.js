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
import LinkedAccount from './LinkedAccount';
import Notification from './Notification';
import Permission from './Permission';
import UserGroupMembership from './UserGroupMembership';
import UserLogin from './UserLogin';

/**
 * The User model module.
 * @module com.ultracart.admin.v2.models/User
 * @version 4.0.39-RC
 */
class User {
    /**
     * Constructs a new <code>User</code>.
     * @alias module:com.ultracart.admin.v2.models/User
     */
    constructor() { 
        
        User.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/User} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/User} The populated <code>User</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new User();

            if (data.hasOwnProperty('api_ip_address_masks')) {
                obj['api_ip_address_masks'] = ApiClient.convertToType(data['api_ip_address_masks'], ['String']);
            }
            if (data.hasOwnProperty('change_ftp_password_to')) {
                obj['change_ftp_password_to'] = ApiClient.convertToType(data['change_ftp_password_to'], 'String');
            }
            if (data.hasOwnProperty('change_password_to')) {
                obj['change_password_to'] = ApiClient.convertToType(data['change_password_to'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('full_name')) {
                obj['full_name'] = ApiClient.convertToType(data['full_name'], 'String');
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], [UserGroupMembership]);
            }
            if (data.hasOwnProperty('linked_accounts')) {
                obj['linked_accounts'] = ApiClient.convertToType(data['linked_accounts'], [LinkedAccount]);
            }
            if (data.hasOwnProperty('login')) {
                obj['login'] = ApiClient.convertToType(data['login'], 'String');
            }
            if (data.hasOwnProperty('login_histories')) {
                obj['login_histories'] = ApiClient.convertToType(data['login_histories'], [UserLogin]);
            }
            if (data.hasOwnProperty('notifications')) {
                obj['notifications'] = ApiClient.convertToType(data['notifications'], [Notification]);
            }
            if (data.hasOwnProperty('otp_serial_number')) {
                obj['otp_serial_number'] = ApiClient.convertToType(data['otp_serial_number'], 'String');
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], [Permission]);
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * A list of IP addresses whitelisted for any user with API Access permission.  Without this list, each ip address must be authenticated by a user, which can be a pain for some servers.
 * @member {Array.<String>} api_ip_address_masks
 */
User.prototype['api_ip_address_masks'] = undefined;

/**
 * Supply a new FTP password using this field.  Password are stored using one-way encryption, so they are never available anywhere in the system.  The FTP password cannot be the same as the normal password.
 * @member {String} change_ftp_password_to
 */
User.prototype['change_ftp_password_to'] = undefined;

/**
 * Supply a new password using this field.  Password are stored using one-way encryption, so they are never available anywhere in the system.
 * @member {String} change_password_to
 */
User.prototype['change_password_to'] = undefined;

/**
 * Email address of user
 * @member {String} email
 */
User.prototype['email'] = undefined;

/**
 * Full name of user.  This is used solely for human assistance and so the UltraCart staff knows who they are calling when there is a problem.
 * @member {String} full_name
 */
User.prototype['full_name'] = undefined;

/**
 * A list of groups for this merchant and whether or not this user is a member of those groups.
 * @member {Array.<module:com.ultracart.admin.v2.models/UserGroupMembership>} groups
 */
User.prototype['groups'] = undefined;

/**
 * A list of linked accounts and whether or not this user is mirrored to any of those accounts.
 * @member {Array.<module:com.ultracart.admin.v2.models/LinkedAccount>} linked_accounts
 */
User.prototype['linked_accounts'] = undefined;

/**
 * User name of user.  Must be unique across a merchant account.
 * @member {String} login
 */
User.prototype['login'] = undefined;

/**
 * A list of user logins over the past 90 days
 * @member {Array.<module:com.ultracart.admin.v2.models/UserLogin>} login_histories
 */
User.prototype['login_histories'] = undefined;

/**
 * A list of notifications the user receives.
 * @member {Array.<module:com.ultracart.admin.v2.models/Notification>} notifications
 */
User.prototype['notifications'] = undefined;

/**
 * OTP Serial Number such as Google Authenticator or Crypto Card.
 * @member {String} otp_serial_number
 */
User.prototype['otp_serial_number'] = undefined;

/**
 * A list of permissions the user enjoys for accessing the backend of UltraCart.
 * @member {Array.<module:com.ultracart.admin.v2.models/Permission>} permissions
 */
User.prototype['permissions'] = undefined;

/**
 * Phone number of user.  Please supply a valid phone number.  When something breaks on your account, we need to be able to reach you.
 * @member {String} phone
 */
User.prototype['phone'] = undefined;

/**
 * User id is a unique identifier for this user
 * @member {Number} user_id
 */
User.prototype['user_id'] = undefined;






export default User;

