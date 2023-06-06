"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReportDataSource = _interopRequireDefault(require("./ReportDataSource"));

var _ReportFilter = _interopRequireDefault(require("./ReportFilter"));

var _ReportPageVisualizationDimension = _interopRequireDefault(require("./ReportPageVisualizationDimension"));

var _ReportPageVisualizationMetric = _interopRequireDefault(require("./ReportPageVisualizationMetric"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ReportDataSetQuery model module.
 * @module com.ultracart.admin.v2.models/ReportDataSetQuery
 * @version 4.0.156
 */
var ReportDataSetQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReportDataSetQuery</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportDataSetQuery
   */
  function ReportDataSetQuery() {
    _classCallCheck(this, ReportDataSetQuery);

    ReportDataSetQuery.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReportDataSetQuery, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReportDataSetQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportDataSetQuery} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportDataSetQuery} The populated <code>ReportDataSetQuery</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReportDataSetQuery();

        if (data.hasOwnProperty('comparison_results')) {
          obj['comparison_results'] = _ApiClient["default"].convertToType(data['comparison_results'], 'Boolean');
        }

        if (data.hasOwnProperty('data_set_query_uuid')) {
          obj['data_set_query_uuid'] = _ApiClient["default"].convertToType(data['data_set_query_uuid'], 'String');
        }

        if (data.hasOwnProperty('data_source')) {
          obj['data_source'] = _ReportDataSource["default"].constructFromObject(data['data_source']);
        }

        if (data.hasOwnProperty('dimensions')) {
          obj['dimensions'] = _ApiClient["default"].convertToType(data['dimensions'], [_ReportPageVisualizationDimension["default"]]);
        }

        if (data.hasOwnProperty('filter')) {
          obj['filter'] = _ReportFilter["default"].constructFromObject(data['filter']);
        }

        if (data.hasOwnProperty('for_object_id')) {
          obj['for_object_id'] = _ApiClient["default"].convertToType(data['for_object_id'], 'String');
        }

        if (data.hasOwnProperty('for_object_type')) {
          obj['for_object_type'] = _ApiClient["default"].convertToType(data['for_object_type'], 'String');
        }

        if (data.hasOwnProperty('metrics')) {
          obj['metrics'] = _ApiClient["default"].convertToType(data['metrics'], [_ReportPageVisualizationMetric["default"]]);
        }

        if (data.hasOwnProperty('page_size')) {
          obj['page_size'] = _ApiClient["default"].convertToType(data['page_size'], 'Number');
        }

        if (data.hasOwnProperty('selected_filters')) {
          obj['selected_filters'] = _ApiClient["default"].convertToType(data['selected_filters'], [_ReportFilter["default"]]);
        }

        if (data.hasOwnProperty('skip_cache')) {
          obj['skip_cache'] = _ApiClient["default"].convertToType(data['skip_cache'], 'Boolean');
        }

        if (data.hasOwnProperty('user_data')) {
          obj['user_data'] = _ApiClient["default"].convertToType(data['user_data'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ReportDataSetQuery;
}();
/**
 * True if a date range filter is provided with comparison date ranges and two results should be returned for the query.
 * @member {Boolean} comparison_results
 */


ReportDataSetQuery.prototype['comparison_results'] = undefined;
/**
 * A unique identifier assigned to the data set query that is returned.
 * @member {String} data_set_query_uuid
 */

ReportDataSetQuery.prototype['data_set_query_uuid'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ReportDataSource} data_source
 */

ReportDataSetQuery.prototype['data_source'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ReportPageVisualizationDimension>} dimensions
 */

ReportDataSetQuery.prototype['dimensions'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ReportFilter} filter
 */

ReportDataSetQuery.prototype['filter'] = undefined;
/**
 * An identifier that can be used to help match up the returned data set
 * @member {String} for_object_id
 */

ReportDataSetQuery.prototype['for_object_id'] = undefined;
/**
 * The type of object this data set is for
 * @member {module:com.ultracart.admin.v2.models/ReportDataSetQuery.ForObjectTypeEnum} for_object_type
 */

ReportDataSetQuery.prototype['for_object_type'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ReportPageVisualizationMetric>} metrics
 */

ReportDataSetQuery.prototype['metrics'] = undefined;
/**
 * Result set page size.  The default value is 200 records.  Max is 10000.
 * @member {Number} page_size
 */

ReportDataSetQuery.prototype['page_size'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ReportFilter>} selected_filters
 */

ReportDataSetQuery.prototype['selected_filters'] = undefined;
/**
 * True if the 15 minute cache should be skipped.
 * @member {Boolean} skip_cache
 */

ReportDataSetQuery.prototype['skip_cache'] = undefined;
/**
 * Any other data that needs to be returned with the response to help the UI
 * @member {String} user_data
 */

ReportDataSetQuery.prototype['user_data'] = undefined;
/**
 * Allowed values for the <code>for_object_type</code> property.
 * @enum {String}
 * @readonly
 */

ReportDataSetQuery['ForObjectTypeEnum'] = {
  /**
   * value: "schema"
   * @const
   */
  "schema": "schema",

  /**
   * value: "filter"
   * @const
   */
  "filter": "filter",

  /**
   * value: "visualization"
   * @const
   */
  "visualization": "visualization"
};
var _default = ReportDataSetQuery;
exports["default"] = _default;