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
 * The ReportPageVisualizationDimension model module.
 * @module com.ultracart.admin.v2.models/ReportPageVisualizationDimension
 * @version 4.0.144
 */
var ReportPageVisualizationDimension = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReportPageVisualizationDimension</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportPageVisualizationDimension
   */
  function ReportPageVisualizationDimension() {
    _classCallCheck(this, ReportPageVisualizationDimension);

    ReportPageVisualizationDimension.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReportPageVisualizationDimension, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReportPageVisualizationDimension</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportPageVisualizationDimension} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportPageVisualizationDimension} The populated <code>ReportPageVisualizationDimension</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReportPageVisualizationDimension();

        if (data.hasOwnProperty('as')) {
          obj['as'] = _ApiClient["default"].convertToType(data['as'], 'String');
        }

        if (data.hasOwnProperty('cast')) {
          obj['cast'] = _ApiClient["default"].convertToType(data['cast'], 'String');
        }

        if (data.hasOwnProperty('column')) {
          obj['column'] = _ApiClient["default"].convertToType(data['column'], 'String');
        }

        if (data.hasOwnProperty('datetime_timezone')) {
          obj['datetime_timezone'] = _ApiClient["default"].convertToType(data['datetime_timezone'], 'String');
        }

        if (data.hasOwnProperty('datetime_trunc')) {
          obj['datetime_trunc'] = _ApiClient["default"].convertToType(data['datetime_trunc'], 'String');
        }

        if (data.hasOwnProperty('extract')) {
          obj['extract'] = _ApiClient["default"].convertToType(data['extract'], 'String');
        }

        if (data.hasOwnProperty('function')) {
          obj['function'] = _ApiClient["default"].convertToType(data['function'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ReportPageVisualizationDimension;
}();
/**
 * Return the column as a different name
 * @member {String} as
 */


ReportPageVisualizationDimension.prototype['as'] = undefined;
/**
 * Cast the column to a different data type such as DATETIME -> DATE
 * @member {String} cast
 */

ReportPageVisualizationDimension.prototype['cast'] = undefined;
/**
 * @member {String} column
 */

ReportPageVisualizationDimension.prototype['column'] = undefined;
/**
 * The timezone to shift the date to
 * @member {String} datetime_timezone
 */

ReportPageVisualizationDimension.prototype['datetime_timezone'] = undefined;
/**
 * The type of truncation to perform on the date, DAY, WEEK(MONDAY), etc.
 * @member {String} datetime_trunc
 */

ReportPageVisualizationDimension.prototype['datetime_trunc'] = undefined;
/**
 * Part of a datetime to extract
 * @member {String} extract
 */

ReportPageVisualizationDimension.prototype['extract'] = undefined;
/**
 * The function to perform around the column such as DATE_TRUNC(@column, day)
 * @member {String} function
 */

ReportPageVisualizationDimension.prototype['function'] = undefined;
var _default = ReportPageVisualizationDimension;
exports["default"] = _default;