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
 * The Permission model module.
 * @module com.ultracart.admin.v2.models/Permission
 * @version 4.0.125-RC
 */
var Permission = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Permission</code>.
   * @alias module:com.ultracart.admin.v2.models/Permission
   */
  function Permission() {
    _classCallCheck(this, Permission);

    Permission.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Permission, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Permission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Permission} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Permission} The populated <code>Permission</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Permission();

        if (data.hasOwnProperty('permission_group')) {
          obj['permission_group'] = _ApiClient["default"].convertToType(data['permission_group'], 'String');
        }

        if (data.hasOwnProperty('permission_Name')) {
          obj['permission_Name'] = _ApiClient["default"].convertToType(data['permission_Name'], 'String');
        }

        if (data.hasOwnProperty('selected')) {
          obj['selected'] = _ApiClient["default"].convertToType(data['selected'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return Permission;
}();
/**
 * A group for this permission.  This name is only used for visual grouping within interfaces.
 * @member {String} permission_group
 */


Permission.prototype['permission_group'] = undefined;
/**
 * The name of this permission.
 * @member {String} permission_Name
 */

Permission.prototype['permission_Name'] = undefined;
/**
 * True if this user has this permission.
 * @member {Boolean} selected
 */

Permission.prototype['selected'] = undefined;
var _default = Permission;
exports["default"] = _default;