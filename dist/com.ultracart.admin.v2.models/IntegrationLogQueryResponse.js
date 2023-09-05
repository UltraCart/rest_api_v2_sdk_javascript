"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("./Error"));

var _IntegrationLog = _interopRequireDefault(require("./IntegrationLog"));

var _IntegrationLogQueryFilterValues = _interopRequireDefault(require("./IntegrationLogQueryFilterValues"));

var _ResponseMetadata = _interopRequireDefault(require("./ResponseMetadata"));

var _Warning = _interopRequireDefault(require("./Warning"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The IntegrationLogQueryResponse model module.
 * @module com.ultracart.admin.v2.models/IntegrationLogQueryResponse
 * @version 4.0.173
 */
var IntegrationLogQueryResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IntegrationLogQueryResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/IntegrationLogQueryResponse
   */
  function IntegrationLogQueryResponse() {
    _classCallCheck(this, IntegrationLogQueryResponse);

    IntegrationLogQueryResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IntegrationLogQueryResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IntegrationLogQueryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/IntegrationLogQueryResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/IntegrationLogQueryResponse} The populated <code>IntegrationLogQueryResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IntegrationLogQueryResponse();

        if (data.hasOwnProperty('error')) {
          obj['error'] = _Error["default"].constructFromObject(data['error']);
        }

        if (data.hasOwnProperty('filter_values')) {
          obj['filter_values'] = _IntegrationLogQueryFilterValues["default"].constructFromObject(data['filter_values']);
        }

        if (data.hasOwnProperty('integration_logs')) {
          obj['integration_logs'] = _ApiClient["default"].convertToType(data['integration_logs'], [_IntegrationLog["default"]]);
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ResponseMetadata["default"].constructFromObject(data['metadata']);
        }

        if (data.hasOwnProperty('success')) {
          obj['success'] = _ApiClient["default"].convertToType(data['success'], 'Boolean');
        }

        if (data.hasOwnProperty('warning')) {
          obj['warning'] = _Warning["default"].constructFromObject(data['warning']);
        }
      }

      return obj;
    }
  }]);

  return IntegrationLogQueryResponse;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */


IntegrationLogQueryResponse.prototype['error'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/IntegrationLogQueryFilterValues} filter_values
 */

IntegrationLogQueryResponse.prototype['filter_values'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/IntegrationLog>} integration_logs
 */

IntegrationLogQueryResponse.prototype['integration_logs'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */

IntegrationLogQueryResponse.prototype['metadata'] = undefined;
/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */

IntegrationLogQueryResponse.prototype['success'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */

IntegrationLogQueryResponse.prototype['warning'] = undefined;
var _default = IntegrationLogQueryResponse;
exports["default"] = _default;