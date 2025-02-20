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
 * The ScreenRecordingFilterValuesEventParams model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingFilterValuesEventParams
 * @version 4.0.244
 */
var ScreenRecordingFilterValuesEventParams = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScreenRecordingFilterValuesEventParams</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesEventParams
   */
  function ScreenRecordingFilterValuesEventParams() {
    _classCallCheck(this, ScreenRecordingFilterValuesEventParams);
    ScreenRecordingFilterValuesEventParams.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(ScreenRecordingFilterValuesEventParams, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ScreenRecordingFilterValuesEventParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesEventParams} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesEventParams} The populated <code>ScreenRecordingFilterValuesEventParams</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScreenRecordingFilterValuesEventParams();
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('values_bd')) {
          obj['values_bd'] = _ApiClient["default"].convertToType(data['values_bd'], ['Number']);
        }
        if (data.hasOwnProperty('values_bool')) {
          obj['values_bool'] = _ApiClient["default"].convertToType(data['values_bool'], ['Boolean']);
        }
        if (data.hasOwnProperty('values_num')) {
          obj['values_num'] = _ApiClient["default"].convertToType(data['values_num'], ['Number']);
        }
        if (data.hasOwnProperty('values_text')) {
          obj['values_text'] = _ApiClient["default"].convertToType(data['values_text'], ['String']);
        }
      }
      return obj;
    }
  }]);
}();
/**
 * @member {String} name
 */
ScreenRecordingFilterValuesEventParams.prototype['name'] = undefined;

/**
 * @member {Array.<Number>} values_bd
 */
ScreenRecordingFilterValuesEventParams.prototype['values_bd'] = undefined;

/**
 * @member {Array.<Boolean>} values_bool
 */
ScreenRecordingFilterValuesEventParams.prototype['values_bool'] = undefined;

/**
 * @member {Array.<Number>} values_num
 */
ScreenRecordingFilterValuesEventParams.prototype['values_num'] = undefined;

/**
 * @member {Array.<String>} values_text
 */
ScreenRecordingFilterValuesEventParams.prototype['values_text'] = undefined;
var _default = exports["default"] = ScreenRecordingFilterValuesEventParams;