"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReportPageVisualizationDimension = _interopRequireDefault(require("./ReportPageVisualizationDimension"));

var _ReportPageVisualizationMetric = _interopRequireDefault(require("./ReportPageVisualizationMetric"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ReportPageVisualization model module.
 * @module com.ultracart.admin.v2.models/ReportPageVisualization
 * @version 4.0.167
 */
var ReportPageVisualization = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReportPageVisualization</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportPageVisualization
   */
  function ReportPageVisualization() {
    _classCallCheck(this, ReportPageVisualization);

    ReportPageVisualization.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReportPageVisualization, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReportPageVisualization</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportPageVisualization} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportPageVisualization} The populated <code>ReportPageVisualization</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReportPageVisualization();

        if (data.hasOwnProperty('config')) {
          obj['config'] = _ApiClient["default"].convertToType(data['config'], 'String');
        }

        if (data.hasOwnProperty('data_source_name')) {
          obj['data_source_name'] = _ApiClient["default"].convertToType(data['data_source_name'], 'String');
        }

        if (data.hasOwnProperty('data_source_uuid')) {
          obj['data_source_uuid'] = _ApiClient["default"].convertToType(data['data_source_uuid'], 'String');
        }

        if (data.hasOwnProperty('dimensions')) {
          obj['dimensions'] = _ApiClient["default"].convertToType(data['dimensions'], [_ReportPageVisualizationDimension["default"]]);
        }

        if (data.hasOwnProperty('metrics')) {
          obj['metrics'] = _ApiClient["default"].convertToType(data['metrics'], [_ReportPageVisualizationMetric["default"]]);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('show_comparison')) {
          obj['show_comparison'] = _ApiClient["default"].convertToType(data['show_comparison'], 'Boolean');
        }

        if (data.hasOwnProperty('styles')) {
          obj['styles'] = _ApiClient["default"].convertToType(data['styles'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('visualization_uuid')) {
          obj['visualization_uuid'] = _ApiClient["default"].convertToType(data['visualization_uuid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ReportPageVisualization;
}();
/**
 * A JSON representation of the configuration for this visualization
 * @member {String} config
 */


ReportPageVisualization.prototype['config'] = undefined;
/**
 * @member {String} data_source_name
 */

ReportPageVisualization.prototype['data_source_name'] = undefined;
/**
 * A unique identifier assigned to the data source.
 * @member {String} data_source_uuid
 */

ReportPageVisualization.prototype['data_source_uuid'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ReportPageVisualizationDimension>} dimensions
 */

ReportPageVisualization.prototype['dimensions'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ReportPageVisualizationMetric>} metrics
 */

ReportPageVisualization.prototype['metrics'] = undefined;
/**
 * @member {String} name
 */

ReportPageVisualization.prototype['name'] = undefined;
/**
 * True if the visualization should show a comparison based upon the date range
 * @member {Boolean} show_comparison
 */

ReportPageVisualization.prototype['show_comparison'] = undefined;
/**
 * A JSON representation of the style configuration for this visualization
 * @member {String} styles
 */

ReportPageVisualization.prototype['styles'] = undefined;
/**
 * Type of visualization
 * @member {module:com.ultracart.admin.v2.models/ReportPageVisualization.TypeEnum} type
 */

ReportPageVisualization.prototype['type'] = undefined;
/**
 * A UUID for the visualization
 * @member {String} visualization_uuid
 */

ReportPageVisualization.prototype['visualization_uuid'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

ReportPageVisualization['TypeEnum'] = {
  /**
   * value: "score card"
   * @const
   */
  "score card": "score card",

  /**
   * value: "line chart"
   * @const
   */
  "line chart": "line chart",

  /**
   * value: "bar chart"
   * @const
   */
  "bar chart": "bar chart",

  /**
   * value: "text"
   * @const
   */
  "text": "text",

  /**
   * value: "table"
   * @const
   */
  "table": "table",

  /**
   * value: "gauge"
   * @const
   */
  "gauge": "gauge",

  /**
   * value: "pie chart"
   * @const
   */
  "pie chart": "pie chart"
};
var _default = ReportPageVisualization;
exports["default"] = _default;