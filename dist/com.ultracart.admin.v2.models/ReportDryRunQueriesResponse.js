"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReportDryRunQueryResult = _interopRequireDefault(require("./ReportDryRunQueryResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ReportDryRunQueriesResponse model module.
 * @module com.ultracart.admin.v2.models/ReportDryRunQueriesResponse
 * @version 4.0.145
 */
var ReportDryRunQueriesResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReportDryRunQueriesResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportDryRunQueriesResponse
   */
  function ReportDryRunQueriesResponse() {
    _classCallCheck(this, ReportDryRunQueriesResponse);

    ReportDryRunQueriesResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReportDryRunQueriesResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReportDryRunQueriesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportDryRunQueriesResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportDryRunQueriesResponse} The populated <code>ReportDryRunQueriesResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReportDryRunQueriesResponse();

        if (data.hasOwnProperty('dry_run_query_results')) {
          obj['dry_run_query_results'] = _ApiClient["default"].convertToType(data['dry_run_query_results'], [_ReportDryRunQueryResult["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ReportDryRunQueriesResponse;
}();
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ReportDryRunQueryResult>} dry_run_query_results
 */


ReportDryRunQueriesResponse.prototype['dry_run_query_results'] = undefined;
var _default = ReportDryRunQueriesResponse;
exports["default"] = _default;