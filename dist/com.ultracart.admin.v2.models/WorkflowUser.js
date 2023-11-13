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
 * The WorkflowUser model module.
 * @module com.ultracart.admin.v2.models/WorkflowUser
 * @version 4.0.188
 */
var WorkflowUser = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkflowUser</code>.
   * @alias module:com.ultracart.admin.v2.models/WorkflowUser
   */
  function WorkflowUser() {
    _classCallCheck(this, WorkflowUser);

    WorkflowUser.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WorkflowUser, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WorkflowUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/WorkflowUser} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/WorkflowUser} The populated <code>WorkflowUser</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkflowUser();

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], 'String');
        }

        if (data.hasOwnProperty('user_icon_url')) {
          obj['user_icon_url'] = _ApiClient["default"].convertToType(data['user_icon_url'], 'String');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return WorkflowUser;
}();
/**
 * The user
 * @member {String} user
 */


WorkflowUser.prototype['user'] = undefined;
/**
 * The user icon URL if available
 * @member {String} user_icon_url
 */

WorkflowUser.prototype['user_icon_url'] = undefined;
/**
 * User ID
 * @member {Number} user_id
 */

WorkflowUser.prototype['user_id'] = undefined;
var _default = WorkflowUser;
exports["default"] = _default;