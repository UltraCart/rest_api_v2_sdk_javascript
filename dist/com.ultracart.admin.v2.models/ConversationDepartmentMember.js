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
 * The ConversationDepartmentMember model module.
 * @module com.ultracart.admin.v2.models/ConversationDepartmentMember
 * @version 4.0.176
 */
var ConversationDepartmentMember = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationDepartmentMember</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationDepartmentMember
   */
  function ConversationDepartmentMember() {
    _classCallCheck(this, ConversationDepartmentMember);

    ConversationDepartmentMember.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversationDepartmentMember, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConversationDepartmentMember</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationDepartmentMember} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationDepartmentMember} The populated <code>ConversationDepartmentMember</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationDepartmentMember();

        if (data.hasOwnProperty('member')) {
          obj['member'] = _ApiClient["default"].convertToType(data['member'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ConversationDepartmentMember;
}();
/**
 * @member {Boolean} member
 */


ConversationDepartmentMember.prototype['member'] = undefined;
/**
 * @member {String} name
 */

ConversationDepartmentMember.prototype['name'] = undefined;
/**
 * @member {Number} user_id
 */

ConversationDepartmentMember.prototype['user_id'] = undefined;
var _default = ConversationDepartmentMember;
exports["default"] = _default;