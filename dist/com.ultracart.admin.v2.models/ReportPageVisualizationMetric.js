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
 * The ReportPageVisualizationMetric model module.
 * @module com.ultracart.admin.v2.models/ReportPageVisualizationMetric
 * @version 4.0.151
 */
var ReportPageVisualizationMetric = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReportPageVisualizationMetric</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportPageVisualizationMetric
   */
  function ReportPageVisualizationMetric() {
    _classCallCheck(this, ReportPageVisualizationMetric);

    ReportPageVisualizationMetric.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReportPageVisualizationMetric, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReportPageVisualizationMetric</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportPageVisualizationMetric} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportPageVisualizationMetric} The populated <code>ReportPageVisualizationMetric</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReportPageVisualizationMetric();

        if (data.hasOwnProperty('aggregation')) {
          obj['aggregation'] = _ApiClient["default"].convertToType(data['aggregation'], 'String');
        }

        if (data.hasOwnProperty('as')) {
          obj['as'] = _ApiClient["default"].convertToType(data['as'], 'String');
        }

        if (data.hasOwnProperty('column')) {
          obj['column'] = _ApiClient["default"].convertToType(data['column'], 'String');
        }

        if (data.hasOwnProperty('round')) {
          obj['round'] = _ApiClient["default"].convertToType(data['round'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ReportPageVisualizationMetric;
}();
/**
 * Aggregation to perform
 * @member {module:com.ultracart.admin.v2.models/ReportPageVisualizationMetric.AggregationEnum} aggregation
 */


ReportPageVisualizationMetric.prototype['aggregation'] = undefined;
/**
 * Return the column as a different name
 * @member {String} as
 */

ReportPageVisualizationMetric.prototype['as'] = undefined;
/**
 * @member {String} column
 */

ReportPageVisualizationMetric.prototype['column'] = undefined;
/**
 * Number of places after the decimal point to round the number to.
 * @member {Number} round
 */

ReportPageVisualizationMetric.prototype['round'] = undefined;
/**
 * Allowed values for the <code>aggregation</code> property.
 * @enum {String}
 * @readonly
 */

ReportPageVisualizationMetric['AggregationEnum'] = {
  /**
   * value: "sum"
   * @const
   */
  "sum": "sum",

  /**
   * value: "count"
   * @const
   */
  "count": "count",

  /**
   * value: "min"
   * @const
   */
  "min": "min",

  /**
   * value: "max"
   * @const
   */
  "max": "max",

  /**
   * value: "avg"
   * @const
   */
  "avg": "avg"
};
var _default = ReportPageVisualizationMetric;
exports["default"] = _default;