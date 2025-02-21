"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The ResultSet model module.
 * @module com.ultracart.admin.v2.models/ResultSet
 * @version 4.0.245
 */
var ResultSet = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ResultSet</code>.
   * @alias module:com.ultracart.admin.v2.models/ResultSet
   */
  function ResultSet() {
    _classCallCheck(this, ResultSet);
    ResultSet.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(ResultSet, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ResultSet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ResultSet} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ResultSet} The populated <code>ResultSet</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ResultSet();
        if (data.hasOwnProperty('count')) {
          obj['count'] = _ApiClient["default"].convertToType(data['count'], 'Number');
        }
        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient["default"].convertToType(data['limit'], 'Number');
        }
        if (data.hasOwnProperty('more')) {
          obj['more'] = _ApiClient["default"].convertToType(data['more'], 'Boolean');
        }
        if (data.hasOwnProperty('next_offset')) {
          obj['next_offset'] = _ApiClient["default"].convertToType(data['next_offset'], 'Number');
        }
        if (data.hasOwnProperty('offset')) {
          obj['offset'] = _ApiClient["default"].convertToType(data['offset'], 'Number');
        }
        if (data.hasOwnProperty('total_records')) {
          obj['total_records'] = _ApiClient["default"].convertToType(data['total_records'], 'Number');
        }
      }
      return obj;
    }
  }]);
}();
/**
 * Number of results in this set
 * @member {Number} count
 */
ResultSet.prototype['count'] = undefined;

/**
 * Maximum number of results that can be returned in a set
 * @member {Number} limit
 */
ResultSet.prototype['limit'] = undefined;

/**
 * True if there are more results to query
 * @member {Boolean} more
 */
ResultSet.prototype['more'] = undefined;

/**
 * The next offset that you should query to retrieve more results
 * @member {Number} next_offset
 */
ResultSet.prototype['next_offset'] = undefined;

/**
 * Offset of this result set (zero based)
 * @member {Number} offset
 */
ResultSet.prototype['offset'] = undefined;

/**
 * The total number of records in the result set.  May be null if the number is not known and the client should continue iterating as long as more is true.
 * @member {Number} total_records
 */
ResultSet.prototype['total_records'] = undefined;
var _default = exports["default"] = ResultSet;