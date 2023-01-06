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
 * The ConversationDepartment model module.
 * @module com.ultracart.admin.v2.models/ConversationDepartment
 * @version 4.0.106-RC
 */
var ConversationDepartment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationDepartment</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationDepartment
   */
  function ConversationDepartment() {
    _classCallCheck(this, ConversationDepartment);

    ConversationDepartment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversationDepartment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConversationDepartment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationDepartment} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationDepartment} The populated <code>ConversationDepartment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationDepartment();

        if (data.hasOwnProperty('conversation_department_oid')) {
          obj['conversation_department_oid'] = _ApiClient["default"].convertToType(data['conversation_department_oid'], 'Number');
        }

        if (data.hasOwnProperty('department_name')) {
          obj['department_name'] = _ApiClient["default"].convertToType(data['department_name'], 'String');
        }

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('settings')) {
          obj['settings'] = _ApiClient["default"].convertToType(data['settings'], Object);
        }
      }

      return obj;
    }
  }]);

  return ConversationDepartment;
}();
/**
 * @member {Number} conversation_department_oid
 */


ConversationDepartment.prototype['conversation_department_oid'] = undefined;
/**
 * @member {String} department_name
 */

ConversationDepartment.prototype['department_name'] = undefined;
/**
 * @member {String} merchant_id
 */

ConversationDepartment.prototype['merchant_id'] = undefined;
/**
 * @member {Object} settings
 */

ConversationDepartment.prototype['settings'] = undefined;
var _default = ConversationDepartment;
exports["default"] = _default;