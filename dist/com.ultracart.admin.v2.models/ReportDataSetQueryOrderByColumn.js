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
 * The ReportDataSetQueryOrderByColumn model module.
 * @module com.ultracart.admin.v2.models/ReportDataSetQueryOrderByColumn
 * @version 4.0.192
 */
var ReportDataSetQueryOrderByColumn = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReportDataSetQueryOrderByColumn</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportDataSetQueryOrderByColumn
   */
  function ReportDataSetQueryOrderByColumn() {
    _classCallCheck(this, ReportDataSetQueryOrderByColumn);

    ReportDataSetQueryOrderByColumn.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReportDataSetQueryOrderByColumn, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReportDataSetQueryOrderByColumn</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportDataSetQueryOrderByColumn} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportDataSetQueryOrderByColumn} The populated <code>ReportDataSetQueryOrderByColumn</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReportDataSetQueryOrderByColumn();

        if (data.hasOwnProperty('ascending')) {
          obj['ascending'] = _ApiClient["default"].convertToType(data['ascending'], 'Boolean');
        }

        if (data.hasOwnProperty('column_name')) {
          obj['column_name'] = _ApiClient["default"].convertToType(data['column_name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ReportDataSetQueryOrderByColumn;
}();
/**
 * @member {Boolean} ascending
 */


ReportDataSetQueryOrderByColumn.prototype['ascending'] = undefined;
/**
 * @member {String} column_name
 */

ReportDataSetQueryOrderByColumn.prototype['column_name'] = undefined;
var _default = ReportDataSetQueryOrderByColumn;
exports["default"] = _default;