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
 * The IntegrationLogSummaryQueryRequest model module.
 * @module com.ultracart.admin.v2.models/IntegrationLogSummaryQueryRequest
 * @version 4.0.61-RC
 */
var IntegrationLogSummaryQueryRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IntegrationLogSummaryQueryRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/IntegrationLogSummaryQueryRequest
   */
  function IntegrationLogSummaryQueryRequest() {
    _classCallCheck(this, IntegrationLogSummaryQueryRequest);

    IntegrationLogSummaryQueryRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IntegrationLogSummaryQueryRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IntegrationLogSummaryQueryRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/IntegrationLogSummaryQueryRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/IntegrationLogSummaryQueryRequest} The populated <code>IntegrationLogSummaryQueryRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IntegrationLogSummaryQueryRequest();

        if (data.hasOwnProperty('log_dts_begin')) {
          obj['log_dts_begin'] = _ApiClient["default"].convertToType(data['log_dts_begin'], 'String');
        }

        if (data.hasOwnProperty('log_dts_end')) {
          obj['log_dts_end'] = _ApiClient["default"].convertToType(data['log_dts_end'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IntegrationLogSummaryQueryRequest;
}();
/**
 * Log date/time begin
 * @member {String} log_dts_begin
 */


IntegrationLogSummaryQueryRequest.prototype['log_dts_begin'] = undefined;
/**
 * Log date/time end
 * @member {String} log_dts_end
 */

IntegrationLogSummaryQueryRequest.prototype['log_dts_end'] = undefined;
var _default = IntegrationLogSummaryQueryRequest;
exports["default"] = _default;