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
 * The ItemInstantPaymentNotification model module.
 * @module com.ultracart.admin.v2.models/ItemInstantPaymentNotification
 * @version 4.0.244
 */
var ItemInstantPaymentNotification = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemInstantPaymentNotification</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemInstantPaymentNotification
   */
  function ItemInstantPaymentNotification() {
    _classCallCheck(this, ItemInstantPaymentNotification);
    ItemInstantPaymentNotification.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(ItemInstantPaymentNotification, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ItemInstantPaymentNotification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemInstantPaymentNotification} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemInstantPaymentNotification} The populated <code>ItemInstantPaymentNotification</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemInstantPaymentNotification();
        if (data.hasOwnProperty('post_operation')) {
          obj['post_operation'] = _ApiClient["default"].convertToType(data['post_operation'], 'Boolean');
        }
        if (data.hasOwnProperty('successful_response_text')) {
          obj['successful_response_text'] = _ApiClient["default"].convertToType(data['successful_response_text'], 'String');
        }
        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }
      return obj;
    }
  }]);
}();
/**
 * True for HTTP POST instead of GET
 * @member {Boolean} post_operation
 */
ItemInstantPaymentNotification.prototype['post_operation'] = undefined;

/**
 * Successful response text
 * @member {String} successful_response_text
 */
ItemInstantPaymentNotification.prototype['successful_response_text'] = undefined;

/**
 * URL
 * @member {String} url
 */
ItemInstantPaymentNotification.prototype['url'] = undefined;
var _default = exports["default"] = ItemInstantPaymentNotification;