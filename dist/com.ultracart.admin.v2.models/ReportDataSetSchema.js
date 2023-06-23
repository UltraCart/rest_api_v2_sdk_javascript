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
 * The ReportDataSetSchema model module.
 * @module com.ultracart.admin.v2.models/ReportDataSetSchema
 * @version 4.0.163
 */
var ReportDataSetSchema = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReportDataSetSchema</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportDataSetSchema
   */
  function ReportDataSetSchema() {
    _classCallCheck(this, ReportDataSetSchema);

    ReportDataSetSchema.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReportDataSetSchema, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReportDataSetSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportDataSetSchema} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportDataSetSchema} The populated <code>ReportDataSetSchema</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReportDataSetSchema();

        if (data.hasOwnProperty('config')) {
          obj['config'] = _ApiClient["default"].convertToType(data['config'], 'String');
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

  return ReportDataSetSchema;
}();
/**
 * A JSON representation of the configuration for this visualization
 * @member {String} config
 */


ReportDataSetSchema.prototype['config'] = undefined;
/**
 * @member {String} name
 */

ReportDataSetSchema.prototype['name'] = undefined;
/**
 * Type of the column.
 * @member {module:com.ultracart.admin.v2.models/ReportDataSetSchema.TypeEnum} type
 */

ReportDataSetSchema.prototype['type'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

ReportDataSetSchema['TypeEnum'] = {
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
var _default = ReportDataSetSchema;
exports["default"] = _default;