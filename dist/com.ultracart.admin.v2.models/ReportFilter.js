"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReportFilterConnection = _interopRequireDefault(require("./ReportFilterConnection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ReportFilter model module.
 * @module com.ultracart.admin.v2.models/ReportFilter
 * @version 4.0.166
 */
var ReportFilter = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReportFilter</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportFilter
   */
  function ReportFilter() {
    _classCallCheck(this, ReportFilter);

    ReportFilter.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReportFilter, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReportFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportFilter} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportFilter} The populated <code>ReportFilter</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReportFilter();

        if (data.hasOwnProperty('connections')) {
          obj['connections'] = _ApiClient["default"].convertToType(data['connections'], [_ReportFilterConnection["default"]]);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('timezone')) {
          obj['timezone'] = _ApiClient["default"].convertToType(data['timezone'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }

        if (data.hasOwnProperty('values')) {
          obj['values'] = _ApiClient["default"].convertToType(data['values'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return ReportFilter;
}();
/**
 * How this filter connects to the data sources and columns
 * @member {Array.<module:com.ultracart.admin.v2.models/ReportFilterConnection>} connections
 */


ReportFilter.prototype['connections'] = undefined;
/**
 * @member {String} name
 */

ReportFilter.prototype['name'] = undefined;
/**
 * The timezone that the date range is querying on.
 * @member {String} timezone
 */

ReportFilter.prototype['timezone'] = undefined;
/**
 * Type of filter
 * @member {module:com.ultracart.admin.v2.models/ReportFilter.TypeEnum} type
 */

ReportFilter.prototype['type'] = undefined;
/**
 * Unique UUID assigned to the filter.  Assists when returning values that the filter can use.
 * @member {String} uuid
 */

ReportFilter.prototype['uuid'] = undefined;
/**
 * The selected values for the filter.  When used, some type conversion will need to occur.
 * @member {Array.<String>} values
 */

ReportFilter.prototype['values'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

ReportFilter['TypeEnum'] = {
  /**
   * value: "date range"
   * @const
   */
  "date range": "date range",

  /**
   * value: "date comparison"
   * @const
   */
  "date comparison": "date comparison",

  /**
   * value: "single value"
   * @const
   */
  "single value": "single value",

  /**
   * value: "multiple values"
   * @const
   */
  "multiple values": "multiple values"
};
var _default = ReportFilter;
exports["default"] = _default;