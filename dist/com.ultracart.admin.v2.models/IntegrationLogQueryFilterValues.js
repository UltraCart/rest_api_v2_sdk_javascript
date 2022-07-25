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
 * The IntegrationLogQueryFilterValues model module.
 * @module com.ultracart.admin.v2.models/IntegrationLogQueryFilterValues
 * @version 4.0.40-RC
 */
var IntegrationLogQueryFilterValues = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IntegrationLogQueryFilterValues</code>.
   * @alias module:com.ultracart.admin.v2.models/IntegrationLogQueryFilterValues
   */
  function IntegrationLogQueryFilterValues() {
    _classCallCheck(this, IntegrationLogQueryFilterValues);

    IntegrationLogQueryFilterValues.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IntegrationLogQueryFilterValues, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IntegrationLogQueryFilterValues</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/IntegrationLogQueryFilterValues} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/IntegrationLogQueryFilterValues} The populated <code>IntegrationLogQueryFilterValues</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IntegrationLogQueryFilterValues();

        if (data.hasOwnProperty('actions')) {
          obj['actions'] = _ApiClient["default"].convertToType(data['actions'], ['String']);
        }

        if (data.hasOwnProperty('directions')) {
          obj['directions'] = _ApiClient["default"].convertToType(data['directions'], ['String']);
        }

        if (data.hasOwnProperty('emails')) {
          obj['emails'] = _ApiClient["default"].convertToType(data['emails'], ['String']);
        }

        if (data.hasOwnProperty('file_names')) {
          obj['file_names'] = _ApiClient["default"].convertToType(data['file_names'], ['String']);
        }

        if (data.hasOwnProperty('item_ids')) {
          obj['item_ids'] = _ApiClient["default"].convertToType(data['item_ids'], ['String']);
        }

        if (data.hasOwnProperty('item_ipn_oids')) {
          obj['item_ipn_oids'] = _ApiClient["default"].convertToType(data['item_ipn_oids'], ['Number']);
        }

        if (data.hasOwnProperty('log_dts_max')) {
          obj['log_dts_max'] = _ApiClient["default"].convertToType(data['log_dts_max'], 'String');
        }

        if (data.hasOwnProperty('log_dts_min')) {
          obj['log_dts_min'] = _ApiClient["default"].convertToType(data['log_dts_min'], 'String');
        }

        if (data.hasOwnProperty('log_types')) {
          obj['log_types'] = _ApiClient["default"].convertToType(data['log_types'], ['String']);
        }

        if (data.hasOwnProperty('logger_names')) {
          obj['logger_names'] = _ApiClient["default"].convertToType(data['logger_names'], ['String']);
        }

        if (data.hasOwnProperty('order_ids')) {
          obj['order_ids'] = _ApiClient["default"].convertToType(data['order_ids'], ['String']);
        }

        if (data.hasOwnProperty('statuses')) {
          obj['statuses'] = _ApiClient["default"].convertToType(data['statuses'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return IntegrationLogQueryFilterValues;
}();
/**
 * @member {Array.<String>} actions
 */


IntegrationLogQueryFilterValues.prototype['actions'] = undefined;
/**
 * @member {Array.<String>} directions
 */

IntegrationLogQueryFilterValues.prototype['directions'] = undefined;
/**
 * @member {Array.<String>} emails
 */

IntegrationLogQueryFilterValues.prototype['emails'] = undefined;
/**
 * @member {Array.<String>} file_names
 */

IntegrationLogQueryFilterValues.prototype['file_names'] = undefined;
/**
 * @member {Array.<String>} item_ids
 */

IntegrationLogQueryFilterValues.prototype['item_ids'] = undefined;
/**
 * @member {Array.<Number>} item_ipn_oids
 */

IntegrationLogQueryFilterValues.prototype['item_ipn_oids'] = undefined;
/**
 * Maximum date/time log date/time
 * @member {String} log_dts_max
 */

IntegrationLogQueryFilterValues.prototype['log_dts_max'] = undefined;
/**
 * Minimum date/time log date/time
 * @member {String} log_dts_min
 */

IntegrationLogQueryFilterValues.prototype['log_dts_min'] = undefined;
/**
 * @member {Array.<String>} log_types
 */

IntegrationLogQueryFilterValues.prototype['log_types'] = undefined;
/**
 * @member {Array.<String>} logger_names
 */

IntegrationLogQueryFilterValues.prototype['logger_names'] = undefined;
/**
 * @member {Array.<String>} order_ids
 */

IntegrationLogQueryFilterValues.prototype['order_ids'] = undefined;
/**
 * @member {Array.<String>} statuses
 */

IntegrationLogQueryFilterValues.prototype['statuses'] = undefined;
var _default = IntegrationLogQueryFilterValues;
exports["default"] = _default;