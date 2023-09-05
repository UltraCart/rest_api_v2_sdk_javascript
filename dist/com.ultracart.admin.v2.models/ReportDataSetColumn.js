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
 * The ReportDataSetColumn model module.
 * @module com.ultracart.admin.v2.models/ReportDataSetColumn
 * @version 4.0.173
 */
var ReportDataSetColumn = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReportDataSetColumn</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportDataSetColumn
   */
  function ReportDataSetColumn() {
    _classCallCheck(this, ReportDataSetColumn);

    ReportDataSetColumn.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReportDataSetColumn, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReportDataSetColumn</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportDataSetColumn} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportDataSetColumn} The populated <code>ReportDataSetColumn</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReportDataSetColumn();

        if (data.hasOwnProperty('in')) {
          obj['in'] = _ApiClient["default"].convertToType(data['in'], 'Boolean');
        }

        if (data.hasOwnProperty('n')) {
          obj['n'] = _ApiClient["default"].convertToType(data['n'], 'String');
        }

        if (data.hasOwnProperty('vd')) {
          obj['vd'] = _ApiClient["default"].convertToType(data['vd'], 'String');
        }

        if (data.hasOwnProperty('vdt')) {
          obj['vdt'] = _ApiClient["default"].convertToType(data['vdt'], 'String');
        }

        if (data.hasOwnProperty('vn')) {
          obj['vn'] = _ApiClient["default"].convertToType(data['vn'], 'Number');
        }

        if (data.hasOwnProperty('vs')) {
          obj['vs'] = _ApiClient["default"].convertToType(data['vs'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ReportDataSetColumn;
}();
/**
 * @member {Boolean} in
 */


ReportDataSetColumn.prototype['in'] = undefined;
/**
 * @member {String} n
 */

ReportDataSetColumn.prototype['n'] = undefined;
/**
 * @member {String} vd
 */

ReportDataSetColumn.prototype['vd'] = undefined;
/**
 * @member {String} vdt
 */

ReportDataSetColumn.prototype['vdt'] = undefined;
/**
 * @member {Number} vn
 */

ReportDataSetColumn.prototype['vn'] = undefined;
/**
 * @member {String} vs
 */

ReportDataSetColumn.prototype['vs'] = undefined;
var _default = ReportDataSetColumn;
exports["default"] = _default;