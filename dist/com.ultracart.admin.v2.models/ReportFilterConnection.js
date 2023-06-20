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
 * The ReportFilterConnection model module.
 * @module com.ultracart.admin.v2.models/ReportFilterConnection
 * @version 4.0.162
 */
var ReportFilterConnection = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReportFilterConnection</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportFilterConnection
   */
  function ReportFilterConnection() {
    _classCallCheck(this, ReportFilterConnection);

    ReportFilterConnection.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReportFilterConnection, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReportFilterConnection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportFilterConnection} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportFilterConnection} The populated <code>ReportFilterConnection</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReportFilterConnection();

        if (data.hasOwnProperty('column')) {
          obj['column'] = _ApiClient["default"].convertToType(data['column'], 'String');
        }

        if (data.hasOwnProperty('data_source_name')) {
          obj['data_source_name'] = _ApiClient["default"].convertToType(data['data_source_name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ReportFilterConnection;
}();
/**
 * @member {String} column
 */


ReportFilterConnection.prototype['column'] = undefined;
/**
 * @member {String} data_source_name
 */

ReportFilterConnection.prototype['data_source_name'] = undefined;
var _default = ReportFilterConnection;
exports["default"] = _default;