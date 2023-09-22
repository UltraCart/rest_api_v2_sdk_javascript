"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Customer = _interopRequireDefault(require("./Customer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The DataTablesServerSideResponse model module.
 * @module com.ultracart.admin.v2.models/DataTablesServerSideResponse
 * @version 4.0.177
 */
var DataTablesServerSideResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DataTablesServerSideResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/DataTablesServerSideResponse
   */
  function DataTablesServerSideResponse() {
    _classCallCheck(this, DataTablesServerSideResponse);

    DataTablesServerSideResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DataTablesServerSideResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DataTablesServerSideResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/DataTablesServerSideResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/DataTablesServerSideResponse} The populated <code>DataTablesServerSideResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DataTablesServerSideResponse();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_Customer["default"]]);
        }

        if (data.hasOwnProperty('draw')) {
          obj['draw'] = _ApiClient["default"].convertToType(data['draw'], 'Number');
        }

        if (data.hasOwnProperty('recordsFiltered')) {
          obj['recordsFiltered'] = _ApiClient["default"].convertToType(data['recordsFiltered'], 'Number');
        }

        if (data.hasOwnProperty('recordsTotal')) {
          obj['recordsTotal'] = _ApiClient["default"].convertToType(data['recordsTotal'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return DataTablesServerSideResponse;
}();
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/Customer>} data
 */


DataTablesServerSideResponse.prototype['data'] = undefined;
/**
 * @member {Number} draw
 */

DataTablesServerSideResponse.prototype['draw'] = undefined;
/**
 * @member {Number} recordsFiltered
 */

DataTablesServerSideResponse.prototype['recordsFiltered'] = undefined;
/**
 * @member {Number} recordsTotal
 */

DataTablesServerSideResponse.prototype['recordsTotal'] = undefined;
var _default = DataTablesServerSideResponse;
exports["default"] = _default;