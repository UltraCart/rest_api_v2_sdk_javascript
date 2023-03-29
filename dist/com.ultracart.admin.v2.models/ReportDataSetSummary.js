"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReportDataSetSchema = _interopRequireDefault(require("./ReportDataSetSchema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ReportDataSetSummary model module.
 * @module com.ultracart.admin.v2.models/ReportDataSetSummary
 * @version 4.0.143
 */
var ReportDataSetSummary = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReportDataSetSummary</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportDataSetSummary
   */
  function ReportDataSetSummary() {
    _classCallCheck(this, ReportDataSetSummary);

    ReportDataSetSummary.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReportDataSetSummary, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReportDataSetSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportDataSetSummary} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportDataSetSummary} The populated <code>ReportDataSetSummary</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReportDataSetSummary();

        if (data.hasOwnProperty('data_set_uuid')) {
          obj['data_set_uuid'] = _ApiClient["default"].convertToType(data['data_set_uuid'], 'String');
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

        if (data.hasOwnProperty('max_results')) {
          obj['max_results'] = _ApiClient["default"].convertToType(data['max_results'], 'Number');
        }

        if (data.hasOwnProperty('schema')) {
          obj['schema'] = _ApiClient["default"].convertToType(data['schema'], [_ReportDataSetSchema["default"]]);
        }

        if (data.hasOwnProperty('user_data')) {
          obj['user_data'] = _ApiClient["default"].convertToType(data['user_data'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ReportDataSetSummary;
}();
/**
 * A unique identifier assigned to the data set that is returned.
 * @member {String} data_set_uuid
 */


ReportDataSetSummary.prototype['data_set_uuid'] = undefined;
/**
 * Error message if the query failed.
 * @member {String} error_message
 */

ReportDataSetSummary.prototype['error_message'] = undefined;
/**
 * An identifier that can be used to help match up the returned data set
 * @member {String} for_object_id
 */

ReportDataSetSummary.prototype['for_object_id'] = undefined;
/**
 * The type of object this data set is for
 * @member {module:com.ultracart.admin.v2.models/ReportDataSetSummary.ForObjectTypeEnum} for_object_type
 */

ReportDataSetSummary.prototype['for_object_type'] = undefined;
/**
 * The total number of results
 * @member {Number} max_results
 */

ReportDataSetSummary.prototype['max_results'] = undefined;
/**
 * The schema associated with the data set.
 * @member {Array.<module:com.ultracart.admin.v2.models/ReportDataSetSchema>} schema
 */

ReportDataSetSummary.prototype['schema'] = undefined;
/**
 * Any other data that needs to be returned with the response to help the UI
 * @member {String} user_data
 */

ReportDataSetSummary.prototype['user_data'] = undefined;
/**
 * Allowed values for the <code>for_object_type</code> property.
 * @enum {String}
 * @readonly
 */

ReportDataSetSummary['ForObjectTypeEnum'] = {
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
var _default = ReportDataSetSummary;
exports["default"] = _default;