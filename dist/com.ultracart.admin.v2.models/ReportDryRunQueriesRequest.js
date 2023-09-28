"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReportDataSetQuery = _interopRequireDefault(require("./ReportDataSetQuery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ReportDryRunQueriesRequest model module.
 * @module com.ultracart.admin.v2.models/ReportDryRunQueriesRequest
 * @version 4.0.178
 */
var ReportDryRunQueriesRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReportDryRunQueriesRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportDryRunQueriesRequest
   */
  function ReportDryRunQueriesRequest() {
    _classCallCheck(this, ReportDryRunQueriesRequest);

    ReportDryRunQueriesRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReportDryRunQueriesRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReportDryRunQueriesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportDryRunQueriesRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportDryRunQueriesRequest} The populated <code>ReportDryRunQueriesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReportDryRunQueriesRequest();

        if (data.hasOwnProperty('connection_id')) {
          obj['connection_id'] = _ApiClient["default"].convertToType(data['connection_id'], 'String');
        }

        if (data.hasOwnProperty('default_dataset_id')) {
          obj['default_dataset_id'] = _ApiClient["default"].convertToType(data['default_dataset_id'], 'String');
        }

        if (data.hasOwnProperty('default_project_id')) {
          obj['default_project_id'] = _ApiClient["default"].convertToType(data['default_project_id'], 'String');
        }

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('queries')) {
          obj['queries'] = _ApiClient["default"].convertToType(data['queries'], [_ReportDataSetQuery["default"]]);
        }

        if (data.hasOwnProperty('security_level')) {
          obj['security_level'] = _ApiClient["default"].convertToType(data['security_level'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ReportDryRunQueriesRequest;
}();
/**
 * @member {String} connection_id
 */


ReportDryRunQueriesRequest.prototype['connection_id'] = undefined;
/**
 * @member {String} default_dataset_id
 */

ReportDryRunQueriesRequest.prototype['default_dataset_id'] = undefined;
/**
 * @member {String} default_project_id
 */

ReportDryRunQueriesRequest.prototype['default_project_id'] = undefined;
/**
 * @member {String} merchant_id
 */

ReportDryRunQueriesRequest.prototype['merchant_id'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ReportDataSetQuery>} queries
 */

ReportDryRunQueriesRequest.prototype['queries'] = undefined;
/**
 * @member {String} security_level
 */

ReportDryRunQueriesRequest.prototype['security_level'] = undefined;
var _default = ReportDryRunQueriesRequest;
exports["default"] = _default;