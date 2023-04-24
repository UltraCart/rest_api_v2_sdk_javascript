"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReportDataSource = _interopRequireDefault(require("./ReportDataSource"));

var _ReportFilter = _interopRequireDefault(require("./ReportFilter"));

var _ReportPage = _interopRequireDefault(require("./ReportPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Report model module.
 * @module com.ultracart.admin.v2.models/Report
 * @version 4.0.150
 */
var Report = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Report</code>.
   * @alias module:com.ultracart.admin.v2.models/Report
   */
  function Report() {
    _classCallCheck(this, Report);

    Report.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Report, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Report</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Report} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Report} The populated <code>Report</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Report();

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('data_sources')) {
          obj['data_sources'] = _ApiClient["default"].convertToType(data['data_sources'], [_ReportDataSource["default"]]);
        }

        if (data.hasOwnProperty('default_dataset_id')) {
          obj['default_dataset_id'] = _ApiClient["default"].convertToType(data['default_dataset_id'], 'String');
        }

        if (data.hasOwnProperty('default_project_id')) {
          obj['default_project_id'] = _ApiClient["default"].convertToType(data['default_project_id'], 'String');
        }

        if (data.hasOwnProperty('filters')) {
          obj['filters'] = _ApiClient["default"].convertToType(data['filters'], [_ReportFilter["default"]]);
        }

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('pages')) {
          obj['pages'] = _ApiClient["default"].convertToType(data['pages'], [_ReportPage["default"]]);
        }

        if (data.hasOwnProperty('report_oid')) {
          obj['report_oid'] = _ApiClient["default"].convertToType(data['report_oid'], 'Number');
        }

        if (data.hasOwnProperty('security_level')) {
          obj['security_level'] = _ApiClient["default"].convertToType(data['security_level'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Report;
}();
/**
 * @member {Boolean} active
 */


Report.prototype['active'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ReportDataSource>} data_sources
 */

Report.prototype['data_sources'] = undefined;
/**
 * @member {String} default_dataset_id
 */

Report.prototype['default_dataset_id'] = undefined;
/**
 * @member {String} default_project_id
 */

Report.prototype['default_project_id'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ReportFilter>} filters
 */

Report.prototype['filters'] = undefined;
/**
 * @member {String} merchant_id
 */

Report.prototype['merchant_id'] = undefined;
/**
 * @member {String} name
 */

Report.prototype['name'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ReportPage>} pages
 */

Report.prototype['pages'] = undefined;
/**
 * Object identifier for this report.
 * @member {Number} report_oid
 */

Report.prototype['report_oid'] = undefined;
/**
 * Security level to execute report under
 * @member {module:com.ultracart.admin.v2.models/Report.SecurityLevelEnum} security_level
 */

Report.prototype['security_level'] = undefined;
/**
 * Allowed values for the <code>security_level</code> property.
 * @enum {String}
 * @readonly
 */

Report['SecurityLevelEnum'] = {
  /**
   * value: "standard"
   * @const
   */
  "standard": "standard",

  /**
   * value: "low"
   * @const
   */
  "low": "low",

  /**
   * value: "medium"
   * @const
   */
  "medium": "medium",

  /**
   * value: "high"
   * @const
   */
  "high": "high"
};
var _default = Report;
exports["default"] = _default;