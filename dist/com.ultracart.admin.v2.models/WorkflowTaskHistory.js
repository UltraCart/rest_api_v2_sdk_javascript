"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _WorkflowUser = _interopRequireDefault(require("./WorkflowUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The WorkflowTaskHistory model module.
 * @module com.ultracart.admin.v2.models/WorkflowTaskHistory
 * @version 4.0.188
 */
var WorkflowTaskHistory = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkflowTaskHistory</code>.
   * @alias module:com.ultracart.admin.v2.models/WorkflowTaskHistory
   */
  function WorkflowTaskHistory() {
    _classCallCheck(this, WorkflowTaskHistory);

    WorkflowTaskHistory.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WorkflowTaskHistory, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WorkflowTaskHistory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/WorkflowTaskHistory} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/WorkflowTaskHistory} The populated <code>WorkflowTaskHistory</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkflowTaskHistory();

        if (data.hasOwnProperty('activity_dts')) {
          obj['activity_dts'] = _ApiClient["default"].convertToType(data['activity_dts'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('ip_address')) {
          obj['ip_address'] = _ApiClient["default"].convertToType(data['ip_address'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _WorkflowUser["default"].constructFromObject(data['user']);
        }
      }

      return obj;
    }
  }]);

  return WorkflowTaskHistory;
}();
/**
 * Date/time that the workflow task history record was created
 * @member {String} activity_dts
 */


WorkflowTaskHistory.prototype['activity_dts'] = undefined;
/**
 * Description of the activity
 * @member {String} description
 */

WorkflowTaskHistory.prototype['description'] = undefined;
/**
 * IP Address that originated the activity
 * @member {String} ip_address
 */

WorkflowTaskHistory.prototype['ip_address'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/WorkflowUser} user
 */

WorkflowTaskHistory.prototype['user'] = undefined;
var _default = WorkflowTaskHistory;
exports["default"] = _default;