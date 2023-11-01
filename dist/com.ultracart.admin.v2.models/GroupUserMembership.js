"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GroupUserMembership model module.
 * @module com.ultracart.admin.v2.models/GroupUserMembership
 * @version 4.0.184
 */
var GroupUserMembership = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GroupUserMembership</code>.
   * @alias module:com.ultracart.admin.v2.models/GroupUserMembership
   */
  function GroupUserMembership() {
    _classCallCheck(this, GroupUserMembership);

    GroupUserMembership.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GroupUserMembership, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GroupUserMembership</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/GroupUserMembership} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/GroupUserMembership} The populated <code>GroupUserMembership</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GroupUserMembership();

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('fullName')) {
          obj['fullName'] = _ApiClient["default"].convertToType(data['fullName'], 'String');
        }

        if (data.hasOwnProperty('login')) {
          obj['login'] = _ApiClient["default"].convertToType(data['login'], 'String');
        }

        if (data.hasOwnProperty('member')) {
          obj['member'] = _ApiClient["default"].convertToType(data['member'], 'Boolean');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return GroupUserMembership;
}();
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
var _default = GroupUserMembership;
exports["default"] = _default;