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
 * The ReportDataSourceSchema model module.
 * @module com.ultracart.admin.v2.models/ReportDataSourceSchema
 * @version 4.0.143
 */
var ReportDataSourceSchema = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReportDataSourceSchema</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportDataSourceSchema
   */
  function ReportDataSourceSchema() {
    _classCallCheck(this, ReportDataSourceSchema);

    ReportDataSourceSchema.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReportDataSourceSchema, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReportDataSourceSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportDataSourceSchema} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportDataSourceSchema} The populated <code>ReportDataSourceSchema</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReportDataSourceSchema();

        if (data.hasOwnProperty('dimension')) {
          obj['dimension'] = _ApiClient["default"].convertToType(data['dimension'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ReportDataSourceSchema;
}();
/**
 * Whether or not this column can be used as a dimension within a visualization
 * @member {Boolean} dimension
 */


ReportDataSourceSchema.prototype['dimension'] = undefined;
/**
 * @member {String} name
 */

ReportDataSourceSchema.prototype['name'] = undefined;
/**
 * Type of the column.  Only supporting the allowed values.  Any other types will be ignored.
 * @member {module:com.ultracart.admin.v2.models/ReportDataSourceSchema.TypeEnum} type
 */

ReportDataSourceSchema.prototype['type'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

ReportDataSourceSchema['TypeEnum'] = {
  /**
   * value: "BIGNUMERIC"
   * @const
   */
  "BIGNUMERIC": "BIGNUMERIC",

  /**
   * value: "BOOL"
   * @const
   */
  "BOOL": "BOOL",

  /**
   * value: "DATE"
   * @const
   */
  "DATE": "DATE",

  /**
   * value: "DATETIME"
   * @const
   */
  "DATETIME": "DATETIME",

  /**
   * value: "FLOAT64"
   * @const
   */
  "FLOAT64": "FLOAT64",

  /**
   * value: "INT64"
   * @const
   */
  "INT64": "INT64",

  /**
   * value: "JSON"
   * @const
   */
  "JSON": "JSON",

  /**
   * value: "NUMERIC"
   * @const
   */
  "NUMERIC": "NUMERIC",

  /**
   * value: "STRING"
   * @const
   */
  "STRING": "STRING",

  /**
   * value: "TIME"
   * @const
   */
  "TIME": "TIME",

  /**
   * value: "TIMESTAMP"
   * @const
   */
  "TIMESTAMP": "TIMESTAMP"
};
var _default = ReportDataSourceSchema;
exports["default"] = _default;