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
 * The LookupRequest model module.
 * @module com.ultracart.admin.v2.models/LookupRequest
 * @version 4.1.15
 */
var LookupRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LookupRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/LookupRequest
   */
  function LookupRequest() {
    _classCallCheck(this, LookupRequest);
    LookupRequest.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(LookupRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>LookupRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/LookupRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/LookupRequest} The populated <code>LookupRequest</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LookupRequest();
        if (data.hasOwnProperty('category')) {
          obj['category'] = _ApiClient["default"].convertToType(data['category'], 'String');
        }
        if (data.hasOwnProperty('matches')) {
          obj['matches'] = _ApiClient["default"].convertToType(data['matches'], 'String');
        }
        if (data.hasOwnProperty('max_hits')) {
          obj['max_hits'] = _ApiClient["default"].convertToType(data['max_hits'], 'Number');
        }
        if (data.hasOwnProperty('storefront_host_name')) {
          obj['storefront_host_name'] = _ApiClient["default"].convertToType(data['storefront_host_name'], 'String');
        }
        if (data.hasOwnProperty('storefront_oid')) {
          obj['storefront_oid'] = _ApiClient["default"].convertToType(data['storefront_oid'], 'Number');
        }
        if (data.hasOwnProperty('subcategory')) {
          obj['subcategory'] = _ApiClient["default"].convertToType(data['subcategory'], 'String');
        }
      }
      return obj;
    }
  }]);
}();
/**
 * @member {String} category
 */
LookupRequest.prototype['category'] = undefined;

/**
 * @member {String} matches
 */
LookupRequest.prototype['matches'] = undefined;

/**
 * @member {Number} max_hits
 */
LookupRequest.prototype['max_hits'] = undefined;

/**
 * @member {String} storefront_host_name
 */
LookupRequest.prototype['storefront_host_name'] = undefined;

/**
 * @member {Number} storefront_oid
 */
LookupRequest.prototype['storefront_oid'] = undefined;

/**
 * @member {String} subcategory
 */
LookupRequest.prototype['subcategory'] = undefined;
var _default = exports["default"] = LookupRequest;