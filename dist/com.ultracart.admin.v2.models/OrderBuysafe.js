"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Currency = _interopRequireDefault(require("./Currency"));
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
 * The OrderBuysafe model module.
 * @module com.ultracart.admin.v2.models/OrderBuysafe
 * @version 4.1.15
 */
var OrderBuysafe = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderBuysafe</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderBuysafe
   */
  function OrderBuysafe() {
    _classCallCheck(this, OrderBuysafe);
    OrderBuysafe.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(OrderBuysafe, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>OrderBuysafe</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderBuysafe} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderBuysafe} The populated <code>OrderBuysafe</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderBuysafe();
        if (data.hasOwnProperty('buysafe_bond_available')) {
          obj['buysafe_bond_available'] = _ApiClient["default"].convertToType(data['buysafe_bond_available'], 'Boolean');
        }
        if (data.hasOwnProperty('buysafe_bond_cost')) {
          obj['buysafe_bond_cost'] = _Currency["default"].constructFromObject(data['buysafe_bond_cost']);
        }
        if (data.hasOwnProperty('buysafe_bond_free')) {
          obj['buysafe_bond_free'] = _ApiClient["default"].convertToType(data['buysafe_bond_free'], 'Boolean');
        }
        if (data.hasOwnProperty('buysafe_bond_refunded')) {
          obj['buysafe_bond_refunded'] = _Currency["default"].constructFromObject(data['buysafe_bond_refunded']);
        }
        if (data.hasOwnProperty('buysafe_bond_wanted')) {
          obj['buysafe_bond_wanted'] = _ApiClient["default"].convertToType(data['buysafe_bond_wanted'], 'Boolean');
        }
        if (data.hasOwnProperty('buysafe_shopping_cart_id')) {
          obj['buysafe_shopping_cart_id'] = _ApiClient["default"].convertToType(data['buysafe_shopping_cart_id'], 'String');
        }
      }
      return obj;
    }
  }]);
}();
/**
 * True if a buySAFE bond was available for purchase on this order
 * @member {Boolean} buysafe_bond_available
 */
OrderBuysafe.prototype['buysafe_bond_available'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} buysafe_bond_cost
 */
OrderBuysafe.prototype['buysafe_bond_cost'] = undefined;

/**
 * True if the buySAFE bond was free for this order
 * @member {Boolean} buysafe_bond_free
 */
OrderBuysafe.prototype['buysafe_bond_free'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} buysafe_bond_refunded
 */
OrderBuysafe.prototype['buysafe_bond_refunded'] = undefined;

/**
 * True if the buySAFE bond was wanted by the customer
 * @member {Boolean} buysafe_bond_wanted
 */
OrderBuysafe.prototype['buysafe_bond_wanted'] = undefined;

/**
 * Shopping cart ID associated with the buySAFE bond
 * @member {String} buysafe_shopping_cart_id
 */
OrderBuysafe.prototype['buysafe_shopping_cart_id'] = undefined;
var _default = exports["default"] = OrderBuysafe;