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
 * The ConversationEventAddCoupon model module.
 * @module com.ultracart.admin.v2.models/ConversationEventAddCoupon
 * @version 4.0.244
 */
var ConversationEventAddCoupon = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationEventAddCoupon</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationEventAddCoupon
   */
  function ConversationEventAddCoupon() {
    _classCallCheck(this, ConversationEventAddCoupon);
    ConversationEventAddCoupon.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(ConversationEventAddCoupon, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ConversationEventAddCoupon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationEventAddCoupon} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationEventAddCoupon} The populated <code>ConversationEventAddCoupon</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationEventAddCoupon();
        if (data.hasOwnProperty('agent_arn')) {
          obj['agent_arn'] = _ApiClient["default"].convertToType(data['agent_arn'], 'String');
        }
        if (data.hasOwnProperty('agent_name')) {
          obj['agent_name'] = _ApiClient["default"].convertToType(data['agent_name'], 'String');
        }
        if (data.hasOwnProperty('coupon_code')) {
          obj['coupon_code'] = _ApiClient["default"].convertToType(data['coupon_code'], 'String');
        }
      }
      return obj;
    }
  }]);
}();
/**
 * @member {String} agent_arn
 */
ConversationEventAddCoupon.prototype['agent_arn'] = undefined;

/**
 * @member {String} agent_name
 */
ConversationEventAddCoupon.prototype['agent_name'] = undefined;

/**
 * @member {String} coupon_code
 */
ConversationEventAddCoupon.prototype['coupon_code'] = undefined;
var _default = exports["default"] = ConversationEventAddCoupon;