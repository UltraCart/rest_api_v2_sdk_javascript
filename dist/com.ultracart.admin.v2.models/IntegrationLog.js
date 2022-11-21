"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IntegrationLogFile = _interopRequireDefault(require("./IntegrationLogFile"));

var _IntegrationLogLog = _interopRequireDefault(require("./IntegrationLogLog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The IntegrationLog model module.
 * @module com.ultracart.admin.v2.models/IntegrationLog
 * @version 4.0.85-RC
 */
var IntegrationLog = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IntegrationLog</code>.
   * @alias module:com.ultracart.admin.v2.models/IntegrationLog
   */
  function IntegrationLog() {
    _classCallCheck(this, IntegrationLog);

    IntegrationLog.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IntegrationLog, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IntegrationLog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/IntegrationLog} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/IntegrationLog} The populated <code>IntegrationLog</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IntegrationLog();

        if (data.hasOwnProperty('action')) {
          obj['action'] = _ApiClient["default"].convertToType(data['action'], 'String');
        }

        if (data.hasOwnProperty('direction')) {
          obj['direction'] = _ApiClient["default"].convertToType(data['direction'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('files')) {
          obj['files'] = _ApiClient["default"].convertToType(data['files'], [_IntegrationLogFile["default"]]);
        }

        if (data.hasOwnProperty('integration_log_oid')) {
          obj['integration_log_oid'] = _ApiClient["default"].convertToType(data['integration_log_oid'], 'Number');
        }

        if (data.hasOwnProperty('item_id')) {
          obj['item_id'] = _ApiClient["default"].convertToType(data['item_id'], 'String');
        }

        if (data.hasOwnProperty('item_ipn_oid')) {
          obj['item_ipn_oid'] = _ApiClient["default"].convertToType(data['item_ipn_oid'], 'Number');
        }

        if (data.hasOwnProperty('log_dts')) {
          obj['log_dts'] = _ApiClient["default"].convertToType(data['log_dts'], 'String');
        }

        if (data.hasOwnProperty('log_type')) {
          obj['log_type'] = _ApiClient["default"].convertToType(data['log_type'], 'String');
        }

        if (data.hasOwnProperty('logger_id')) {
          obj['logger_id'] = _ApiClient["default"].convertToType(data['logger_id'], 'String');
        }

        if (data.hasOwnProperty('logger_name')) {
          obj['logger_name'] = _ApiClient["default"].convertToType(data['logger_name'], 'String');
        }

        if (data.hasOwnProperty('logs')) {
          obj['logs'] = _ApiClient["default"].convertToType(data['logs'], [_IntegrationLogLog["default"]]);
        }

        if (data.hasOwnProperty('omit_log_map')) {
          obj['omit_log_map'] = _ApiClient["default"].convertToType(data['omit_log_map'], 'Boolean');
        }

        if (data.hasOwnProperty('order_ids')) {
          obj['order_ids'] = _ApiClient["default"].convertToType(data['order_ids'], ['String']);
        }

        if (data.hasOwnProperty('pk')) {
          obj['pk'] = _ApiClient["default"].convertToType(data['pk'], 'String');
        }

        if (data.hasOwnProperty('sk')) {
          obj['sk'] = _ApiClient["default"].convertToType(data['sk'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('status_code')) {
          obj['status_code'] = _ApiClient["default"].convertToType(data['status_code'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return IntegrationLog;
}();
/**
 * @member {String} action
 */


IntegrationLog.prototype['action'] = undefined;
/**
 * @member {String} direction
 */

IntegrationLog.prototype['direction'] = undefined;
/**
 * @member {String} email
 */

IntegrationLog.prototype['email'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/IntegrationLogFile>} files
 */

IntegrationLog.prototype['files'] = undefined;
/**
 * @member {Number} integration_log_oid
 */

IntegrationLog.prototype['integration_log_oid'] = undefined;
/**
 * @member {String} item_id
 */

IntegrationLog.prototype['item_id'] = undefined;
/**
 * @member {Number} item_ipn_oid
 */

IntegrationLog.prototype['item_ipn_oid'] = undefined;
/**
 * Date/time the integration log was created
 * @member {String} log_dts
 */

IntegrationLog.prototype['log_dts'] = undefined;
/**
 * @member {String} log_type
 */

IntegrationLog.prototype['log_type'] = undefined;
/**
 * @member {String} logger_id
 */

IntegrationLog.prototype['logger_id'] = undefined;
/**
 * @member {String} logger_name
 */

IntegrationLog.prototype['logger_name'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/IntegrationLogLog>} logs
 */

IntegrationLog.prototype['logs'] = undefined;
/**
 * @member {Boolean} omit_log_map
 */

IntegrationLog.prototype['omit_log_map'] = undefined;
/**
 * @member {Array.<String>} order_ids
 */

IntegrationLog.prototype['order_ids'] = undefined;
/**
 * @member {String} pk
 */

IntegrationLog.prototype['pk'] = undefined;
/**
 * @member {String} sk
 */

IntegrationLog.prototype['sk'] = undefined;
/**
 * @member {String} status
 */

IntegrationLog.prototype['status'] = undefined;
/**
 * @member {Number} status_code
 */

IntegrationLog.prototype['status_code'] = undefined;
var _default = IntegrationLog;
exports["default"] = _default;