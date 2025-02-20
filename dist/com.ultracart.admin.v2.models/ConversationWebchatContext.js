"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AutoOrder = _interopRequireDefault(require("./AutoOrder"));
var _Cart = _interopRequireDefault(require("./Cart"));
var _HitPageView = _interopRequireDefault(require("./HitPageView"));
var _HitSessionStart = _interopRequireDefault(require("./HitSessionStart"));
var _HitSessionUtm = _interopRequireDefault(require("./HitSessionUtm"));
var _Order = _interopRequireDefault(require("./Order"));
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
 * The ConversationWebchatContext model module.
 * @module com.ultracart.admin.v2.models/ConversationWebchatContext
 * @version 4.0.244
 */
var ConversationWebchatContext = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationWebchatContext</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationWebchatContext
   */
  function ConversationWebchatContext() {
    _classCallCheck(this, ConversationWebchatContext);
    ConversationWebchatContext.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(ConversationWebchatContext, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ConversationWebchatContext</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationWebchatContext} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationWebchatContext} The populated <code>ConversationWebchatContext</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationWebchatContext();
        if (data.hasOwnProperty('auto_orders')) {
          obj['auto_orders'] = _ApiClient["default"].convertToType(data['auto_orders'], [_AutoOrder["default"]]);
        }
        if (data.hasOwnProperty('cart')) {
          obj['cart'] = _Cart["default"].constructFromObject(data['cart']);
        }
        if (data.hasOwnProperty('current_url')) {
          obj['current_url'] = _ApiClient["default"].convertToType(data['current_url'], 'String');
        }
        if (data.hasOwnProperty('orders')) {
          obj['orders'] = _ApiClient["default"].convertToType(data['orders'], [_Order["default"]]);
        }
        if (data.hasOwnProperty('page_view')) {
          obj['page_view'] = _ApiClient["default"].convertToType(data['page_view'], [_HitPageView["default"]]);
        }
        if (data.hasOwnProperty('session_start')) {
          obj['session_start'] = _HitSessionStart["default"].constructFromObject(data['session_start']);
        }
        if (data.hasOwnProperty('session_start_dts')) {
          obj['session_start_dts'] = _ApiClient["default"].convertToType(data['session_start_dts'], 'String');
        }
        if (data.hasOwnProperty('session_utm')) {
          obj['session_utm'] = _HitSessionUtm["default"].constructFromObject(data['session_utm']);
        }
      }
      return obj;
    }
  }]);
}();
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/AutoOrder>} auto_orders
 */
ConversationWebchatContext.prototype['auto_orders'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Cart} cart
 */
ConversationWebchatContext.prototype['cart'] = undefined;

/**
 * @member {String} current_url
 */
ConversationWebchatContext.prototype['current_url'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/Order>} orders
 */
ConversationWebchatContext.prototype['orders'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/HitPageView>} page_view
 */
ConversationWebchatContext.prototype['page_view'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/HitSessionStart} session_start
 */
ConversationWebchatContext.prototype['session_start'] = undefined;

/**
 * Date/time that the session was started (if known)
 * @member {String} session_start_dts
 */
ConversationWebchatContext.prototype['session_start_dts'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/HitSessionUtm} session_utm
 */
ConversationWebchatContext.prototype['session_utm'] = undefined;
var _default = exports["default"] = ConversationWebchatContext;