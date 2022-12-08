"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LinkedAccount = _interopRequireDefault(require("./LinkedAccount"));

var _Notification = _interopRequireDefault(require("./Notification"));

var _Permission = _interopRequireDefault(require("./Permission"));

var _UserGroupMembership = _interopRequireDefault(require("./UserGroupMembership"));

var _UserLogin = _interopRequireDefault(require("./UserLogin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The User model module.
 * @module com.ultracart.admin.v2.models/User
 * @version 4.0.93-RC
 */
var User = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>User</code>.
   * @alias module:com.ultracart.admin.v2.models/User
   */
  function User() {
    _classCallCheck(this, User);

    User.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(User, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/User} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/User} The populated <code>User</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new User();

        if (data.hasOwnProperty('api_ip_address_masks')) {
          obj['api_ip_address_masks'] = _ApiClient["default"].convertToType(data['api_ip_address_masks'], ['String']);
        }

        if (data.hasOwnProperty('change_ftp_password_to')) {
          obj['change_ftp_password_to'] = _ApiClient["default"].convertToType(data['change_ftp_password_to'], 'String');
        }

        if (data.hasOwnProperty('change_password_to')) {
          obj['change_password_to'] = _ApiClient["default"].convertToType(data['change_password_to'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('full_name')) {
          obj['full_name'] = _ApiClient["default"].convertToType(data['full_name'], 'String');
        }

        if (data.hasOwnProperty('groups')) {
          obj['groups'] = _ApiClient["default"].convertToType(data['groups'], [_UserGroupMembership["default"]]);
        }

        if (data.hasOwnProperty('linked_accounts')) {
          obj['linked_accounts'] = _ApiClient["default"].convertToType(data['linked_accounts'], [_LinkedAccount["default"]]);
        }

        if (data.hasOwnProperty('login')) {
          obj['login'] = _ApiClient["default"].convertToType(data['login'], 'String');
        }

        if (data.hasOwnProperty('login_histories')) {
          obj['login_histories'] = _ApiClient["default"].convertToType(data['login_histories'], [_UserLogin["default"]]);
        }

        if (data.hasOwnProperty('notifications')) {
          obj['notifications'] = _ApiClient["default"].convertToType(data['notifications'], [_Notification["default"]]);
        }

        if (data.hasOwnProperty('otp_serial_number')) {
          obj['otp_serial_number'] = _ApiClient["default"].convertToType(data['otp_serial_number'], 'String');
        }

        if (data.hasOwnProperty('permissions')) {
          obj['permissions'] = _ApiClient["default"].convertToType(data['permissions'], [_Permission["default"]]);
        }

        if (data.hasOwnProperty('phone')) {
          obj['phone'] = _ApiClient["default"].convertToType(data['phone'], 'String');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return User;
}();
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
var _default = User;
exports["default"] = _default;