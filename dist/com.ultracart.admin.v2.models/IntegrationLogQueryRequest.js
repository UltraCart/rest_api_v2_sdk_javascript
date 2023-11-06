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
 * The IntegrationLogQueryRequest model module.
 * @module com.ultracart.admin.v2.models/IntegrationLogQueryRequest
 * @version 4.0.185
 */
var IntegrationLogQueryRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IntegrationLogQueryRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/IntegrationLogQueryRequest
   */
  function IntegrationLogQueryRequest() {
    _classCallCheck(this, IntegrationLogQueryRequest);

    IntegrationLogQueryRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IntegrationLogQueryRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IntegrationLogQueryRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/IntegrationLogQueryRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/IntegrationLogQueryRequest} The populated <code>IntegrationLogQueryRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IntegrationLogQueryRequest();

        if (data.hasOwnProperty('action')) {
          obj['action'] = _ApiClient["default"].convertToType(data['action'], 'String');
        }

        if (data.hasOwnProperty('auto_order_ids')) {
          obj['auto_order_ids'] = _ApiClient["default"].convertToType(data['auto_order_ids'], ['String']);
        }

        if (data.hasOwnProperty('auto_order_oids')) {
          obj['auto_order_oids'] = _ApiClient["default"].convertToType(data['auto_order_oids'], ['Number']);
        }

        if (data.hasOwnProperty('direction')) {
          obj['direction'] = _ApiClient["default"].convertToType(data['direction'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('file_names')) {
          obj['file_names'] = _ApiClient["default"].convertToType(data['file_names'], ['String']);
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

        if (data.hasOwnProperty('log_dts_begin')) {
          obj['log_dts_begin'] = _ApiClient["default"].convertToType(data['log_dts_begin'], 'String');
        }

        if (data.hasOwnProperty('log_dts_end')) {
          obj['log_dts_end'] = _ApiClient["default"].convertToType(data['log_dts_end'], 'String');
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

        if (data.hasOwnProperty('order_ids')) {
          obj['order_ids'] = _ApiClient["default"].convertToType(data['order_ids'], ['String']);
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IntegrationLogQueryRequest;
}();
/**
 * @member {String} action
 */


IntegrationLogQueryRequest.prototype['action'] = undefined;
/**
 * @member {Array.<String>} auto_order_ids
 */

IntegrationLogQueryRequest.prototype['auto_order_ids'] = undefined;
/**
 * @member {Array.<Number>} auto_order_oids
 */

IntegrationLogQueryRequest.prototype['auto_order_oids'] = undefined;
/**
 * @member {String} direction
 */

IntegrationLogQueryRequest.prototype['direction'] = undefined;
/**
 * @member {String} email
 */

IntegrationLogQueryRequest.prototype['email'] = undefined;
/**
 * @member {Array.<String>} file_names
 */

IntegrationLogQueryRequest.prototype['file_names'] = undefined;
/**
 * @member {Number} integration_log_oid
 */

IntegrationLogQueryRequest.prototype['integration_log_oid'] = undefined;
/**
 * @member {String} item_id
 */

IntegrationLogQueryRequest.prototype['item_id'] = undefined;
/**
 * @member {Number} item_ipn_oid
 */

IntegrationLogQueryRequest.prototype['item_ipn_oid'] = undefined;
/**
 * Log date/time begin
 * @member {String} log_dts_begin
 */

IntegrationLogQueryRequest.prototype['log_dts_begin'] = undefined;
/**
 * Log date/time end
 * @member {String} log_dts_end
 */

IntegrationLogQueryRequest.prototype['log_dts_end'] = undefined;
/**
 * @member {String} log_type
 */

IntegrationLogQueryRequest.prototype['log_type'] = undefined;
/**
 * @member {String} logger_id
 */

IntegrationLogQueryRequest.prototype['logger_id'] = undefined;
/**
 * @member {String} logger_name
 */

IntegrationLogQueryRequest.prototype['logger_name'] = undefined;
/**
 * @member {Array.<String>} order_ids
 */

IntegrationLogQueryRequest.prototype['order_ids'] = undefined;
/**
 * @member {String} status
 */

IntegrationLogQueryRequest.prototype['status'] = undefined;
var _default = IntegrationLogQueryRequest;
exports["default"] = _default;