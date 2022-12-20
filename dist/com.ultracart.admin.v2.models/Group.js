"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GroupUserMembership = _interopRequireDefault(require("./GroupUserMembership"));

var _Notification = _interopRequireDefault(require("./Notification"));

var _Permission = _interopRequireDefault(require("./Permission"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Group model module.
 * @module com.ultracart.admin.v2.models/Group
 * @version 4.0.99-RC
 */
var Group = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Group</code>.
   * @alias module:com.ultracart.admin.v2.models/Group
   */
  function Group() {
    _classCallCheck(this, Group);

    Group.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Group, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Group</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Group} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Group} The populated <code>Group</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Group();

        if (data.hasOwnProperty('group_oid')) {
          obj['group_oid'] = _ApiClient["default"].convertToType(data['group_oid'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('notifications')) {
          obj['notifications'] = _ApiClient["default"].convertToType(data['notifications'], [_Notification["default"]]);
        }

        if (data.hasOwnProperty('permissions')) {
          obj['permissions'] = _ApiClient["default"].convertToType(data['permissions'], [_Permission["default"]]);
        }

        if (data.hasOwnProperty('users')) {
          obj['users'] = _ApiClient["default"].convertToType(data['users'], [_GroupUserMembership["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Group;
}();
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
var _default = Group;
exports["default"] = _default;