"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReportDataSetPage = _interopRequireDefault(require("./ReportDataSetPage"));

var _ReportDataSetSchema = _interopRequireDefault(require("./ReportDataSetSchema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ReportDataSet model module.
 * @module com.ultracart.admin.v2.models/ReportDataSet
 * @version 4.0.145
 */
var ReportDataSet = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReportDataSet</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportDataSet
   */
  function ReportDataSet() {
    _classCallCheck(this, ReportDataSet);

    ReportDataSet.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReportDataSet, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReportDataSet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportDataSet} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportDataSet} The populated <code>ReportDataSet</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReportDataSet();

        if (data.hasOwnProperty('data_set_query_uuid')) {
          obj['data_set_query_uuid'] = _ApiClient["default"].convertToType(data['data_set_query_uuid'], 'String');
        }

        if (data.hasOwnProperty('data_set_uuid')) {
          obj['data_set_uuid'] = _ApiClient["default"].convertToType(data['data_set_uuid'], 'String');
        }

        if (data.hasOwnProperty('destination_table_id')) {
          obj['destination_table_id'] = _ApiClient["default"].convertToType(data['destination_table_id'], 'String');
        }

        if (data.hasOwnProperty('error_message')) {
          obj['error_message'] = _ApiClient["default"].convertToType(data['error_message'], 'String');
        }

        if (data.hasOwnProperty('for_object_id')) {
          obj['for_object_id'] = _ApiClient["default"].convertToType(data['for_object_id'], 'String');
        }

        if (data.hasOwnProperty('for_object_type')) {
          obj['for_object_type'] = _ApiClient["default"].convertToType(data['for_object_type'], 'String');
        }

        if (data.hasOwnProperty('initial_pages')) {
          obj['initial_pages'] = _ApiClient["default"].convertToType(data['initial_pages'], [_ReportDataSetPage["default"]]);
        }

        if (data.hasOwnProperty('max_results')) {
          obj['max_results'] = _ApiClient["default"].convertToType(data['max_results'], 'Number');
        }

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('page_count')) {
          obj['page_count'] = _ApiClient["default"].convertToType(data['page_count'], 'Number');
        }

        if (data.hasOwnProperty('page_size')) {
          obj['page_size'] = _ApiClient["default"].convertToType(data['page_size'], 'Number');
        }

        if (data.hasOwnProperty('schema')) {
          obj['schema'] = _ApiClient["default"].convertToType(data['schema'], [_ReportDataSetSchema["default"]]);
        }

        if (data.hasOwnProperty('security_level')) {
          obj['security_level'] = _ApiClient["default"].convertToType(data['security_level'], 'String');
        }

        if (data.hasOwnProperty('timezone')) {
          obj['timezone'] = _ApiClient["default"].convertToType(data['timezone'], 'String');
        }

        if (data.hasOwnProperty('user_data')) {
          obj['user_data'] = _ApiClient["default"].convertToType(data['user_data'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ReportDataSet;
}();
/**
 * A unique identifier assigned to the data set query that is returned.
 * @member {String} data_set_query_uuid
 */


ReportDataSet.prototype['data_set_query_uuid'] = undefined;
/**
 * A unique identifier assigned to the data set that is returned.
 * @member {String} data_set_uuid
 */

ReportDataSet.prototype['data_set_uuid'] = undefined;
/**
 * The BigQuery destination table id that contains the result.
 * @member {String} destination_table_id
 */

ReportDataSet.prototype['destination_table_id'] = undefined;
/**
 * Error message if the query failed.
 * @member {String} error_message
 */

ReportDataSet.prototype['error_message'] = undefined;
/**
 * An identifier that can be used to help match up the returned data set
 * @member {String} for_object_id
 */

ReportDataSet.prototype['for_object_id'] = undefined;
/**
 * The type of object this data set is for
 * @member {module:com.ultracart.admin.v2.models/ReportDataSet.ForObjectTypeEnum} for_object_type
 */

ReportDataSet.prototype['for_object_type'] = undefined;
/**
 * Initial pages returned in the dataset
 * @member {Array.<module:com.ultracart.admin.v2.models/ReportDataSetPage>} initial_pages
 */

ReportDataSet.prototype['initial_pages'] = undefined;
/**
 * The total number of results
 * @member {Number} max_results
 */

ReportDataSet.prototype['max_results'] = undefined;
/**
 * Merchant that owns this data set
 * @member {String} merchant_id
 */

ReportDataSet.prototype['merchant_id'] = undefined;
/**
 * The size of the pages
 * @member {Number} page_count
 */

ReportDataSet.prototype['page_count'] = undefined;
/**
 * The size of the pages
 * @member {Number} page_size
 */

ReportDataSet.prototype['page_size'] = undefined;
/**
 * The schema associated with the data set.
 * @member {Array.<module:com.ultracart.admin.v2.models/ReportDataSetSchema>} schema
 */

ReportDataSet.prototype['schema'] = undefined;
/**
 * Security level this dataset was read from.
 * @member {String} security_level
 */

ReportDataSet.prototype['security_level'] = undefined;
/**
 * @member {String} timezone
 */

ReportDataSet.prototype['timezone'] = undefined;
/**
 * Any other data that needs to be returned with the response to help the UI
 * @member {String} user_data
 */

ReportDataSet.prototype['user_data'] = undefined;
/**
 * Allowed values for the <code>for_object_type</code> property.
 * @enum {String}
 * @readonly
 */

ReportDataSet['ForObjectTypeEnum'] = {
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
var _default = ReportDataSet;
exports["default"] = _default;