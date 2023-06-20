"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReportDataSetColumn = _interopRequireDefault(require("./ReportDataSetColumn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ReportDataSetRow model module.
 * @module com.ultracart.admin.v2.models/ReportDataSetRow
 * @version 4.0.162
 */
var ReportDataSetRow = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReportDataSetRow</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportDataSetRow
   */
  function ReportDataSetRow() {
    _classCallCheck(this, ReportDataSetRow);

    ReportDataSetRow.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReportDataSetRow, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReportDataSetRow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportDataSetRow} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportDataSetRow} The populated <code>ReportDataSetRow</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReportDataSetRow();

        if (data.hasOwnProperty('c')) {
          obj['c'] = _ApiClient["default"].convertToType(data['c'], [_ReportDataSetColumn["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ReportDataSetRow;
}();
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ReportDataSetColumn>} c
 */


ReportDataSetRow.prototype['c'] = undefined;
var _default = ReportDataSetRow;
exports["default"] = _default;