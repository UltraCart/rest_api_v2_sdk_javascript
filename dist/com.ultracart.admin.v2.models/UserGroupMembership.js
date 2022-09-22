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
 * The UserGroupMembership model module.
 * @module com.ultracart.admin.v2.models/UserGroupMembership
 * @version 4.0.65-RC
 */
var UserGroupMembership = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserGroupMembership</code>.
   * @alias module:com.ultracart.admin.v2.models/UserGroupMembership
   */
  function UserGroupMembership() {
    _classCallCheck(this, UserGroupMembership);

    UserGroupMembership.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserGroupMembership, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UserGroupMembership</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/UserGroupMembership} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/UserGroupMembership} The populated <code>UserGroupMembership</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserGroupMembership();

        if (data.hasOwnProperty('group_oid')) {
          obj['group_oid'] = _ApiClient["default"].convertToType(data['group_oid'], 'Number');
        }

        if (data.hasOwnProperty('member')) {
          obj['member'] = _ApiClient["default"].convertToType(data['member'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UserGroupMembership;
}();
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
var _default = UserGroupMembership;
exports["default"] = _default;