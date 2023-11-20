"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReportDataSourceSchema = _interopRequireDefault(require("./ReportDataSourceSchema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ReportDataSource model module.
 * @module com.ultracart.admin.v2.models/ReportDataSource
 * @version 4.0.190
 */
var ReportDataSource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReportDataSource</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportDataSource
   */
  function ReportDataSource() {
    _classCallCheck(this, ReportDataSource);

    ReportDataSource.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReportDataSource, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReportDataSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportDataSource} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportDataSource} The populated <code>ReportDataSource</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReportDataSource();

        if (data.hasOwnProperty('data_source_uuid')) {
          obj['data_source_uuid'] = _ApiClient["default"].convertToType(data['data_source_uuid'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('partition_date_column')) {
          obj['partition_date_column'] = _ApiClient["default"].convertToType(data['partition_date_column'], 'String');
        }

        if (data.hasOwnProperty('partition_date_safety_days')) {
          obj['partition_date_safety_days'] = _ApiClient["default"].convertToType(data['partition_date_safety_days'], 'Number');
        }

        if (data.hasOwnProperty('partition_date_strategy')) {
          obj['partition_date_strategy'] = _ApiClient["default"].convertToType(data['partition_date_strategy'], 'String');
        }

        if (data.hasOwnProperty('schema')) {
          obj['schema'] = _ApiClient["default"].convertToType(data['schema'], [_ReportDataSourceSchema["default"]]);
        }

        if (data.hasOwnProperty('sql')) {
          obj['sql'] = _ApiClient["default"].convertToType(data['sql'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ReportDataSource;
}();
/**
 * A unique identifier assigned to the data source.
 * @member {String} data_source_uuid
 */


ReportDataSource.prototype['data_source_uuid'] = undefined;
/**
 * @member {String} name
 */

ReportDataSource.prototype['name'] = undefined;
/**
 * @member {String} partition_date_column
 */

ReportDataSource.prototype['partition_date_column'] = undefined;
/**
 * @member {Number} partition_date_safety_days
 */

ReportDataSource.prototype['partition_date_safety_days'] = undefined;
/**
 * The partition date strategy, defaults to weekly sunday
 * @member {String} partition_date_strategy
 */

ReportDataSource.prototype['partition_date_strategy'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ReportDataSourceSchema>} schema
 */

ReportDataSource.prototype['schema'] = undefined;
/**
 * @member {String} sql
 */

ReportDataSource.prototype['sql'] = undefined;
var _default = ReportDataSource;
exports["default"] = _default;