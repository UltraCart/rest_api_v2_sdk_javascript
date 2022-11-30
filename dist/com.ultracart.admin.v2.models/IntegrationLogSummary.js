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
 * The IntegrationLogSummary model module.
 * @module com.ultracart.admin.v2.models/IntegrationLogSummary
 * @version 4.0.89-RC
 */
var IntegrationLogSummary = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IntegrationLogSummary</code>.
   * @alias module:com.ultracart.admin.v2.models/IntegrationLogSummary
   */
  function IntegrationLogSummary() {
    _classCallCheck(this, IntegrationLogSummary);

    IntegrationLogSummary.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IntegrationLogSummary, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IntegrationLogSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/IntegrationLogSummary} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/IntegrationLogSummary} The populated <code>IntegrationLogSummary</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IntegrationLogSummary();

        if (data.hasOwnProperty('critical')) {
          obj['critical'] = _ApiClient["default"].convertToType(data['critical'], 'Number');
        }

        if (data.hasOwnProperty('error')) {
          obj['error'] = _ApiClient["default"].convertToType(data['error'], 'Number');
        }

        if (data.hasOwnProperty('events')) {
          obj['events'] = _ApiClient["default"].convertToType(data['events'], 'Number');
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

        if (data.hasOwnProperty('success')) {
          obj['success'] = _ApiClient["default"].convertToType(data['success'], 'Number');
        }

        if (data.hasOwnProperty('view_url')) {
          obj['view_url'] = _ApiClient["default"].convertToType(data['view_url'], 'String');
        }

        if (data.hasOwnProperty('warning')) {
          obj['warning'] = _ApiClient["default"].convertToType(data['warning'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return IntegrationLogSummary;
}();
/**
 * @member {Number} critical
 */


IntegrationLogSummary.prototype['critical'] = undefined;
/**
 * @member {Number} error
 */

IntegrationLogSummary.prototype['error'] = undefined;
/**
 * @member {Number} events
 */

IntegrationLogSummary.prototype['events'] = undefined;
/**
 * @member {String} log_type
 */

IntegrationLogSummary.prototype['log_type'] = undefined;
/**
 * @member {String} logger_id
 */

IntegrationLogSummary.prototype['logger_id'] = undefined;
/**
 * @member {String} logger_name
 */

IntegrationLogSummary.prototype['logger_name'] = undefined;
/**
 * @member {Number} success
 */

IntegrationLogSummary.prototype['success'] = undefined;
/**
 * @member {String} view_url
 */

IntegrationLogSummary.prototype['view_url'] = undefined;
/**
 * @member {Number} warning
 */

IntegrationLogSummary.prototype['warning'] = undefined;
var _default = IntegrationLogSummary;
exports["default"] = _default;