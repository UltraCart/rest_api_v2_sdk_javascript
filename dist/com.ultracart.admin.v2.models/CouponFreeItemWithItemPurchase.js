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
 * The CouponFreeItemWithItemPurchase model module.
 * @module com.ultracart.admin.v2.models/CouponFreeItemWithItemPurchase
 * @version 4.0.245
 */
var CouponFreeItemWithItemPurchase = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponFreeItemWithItemPurchase</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponFreeItemWithItemPurchase
   */
  function CouponFreeItemWithItemPurchase() {
    _classCallCheck(this, CouponFreeItemWithItemPurchase);
    CouponFreeItemWithItemPurchase.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(CouponFreeItemWithItemPurchase, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>CouponFreeItemWithItemPurchase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponFreeItemWithItemPurchase} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponFreeItemWithItemPurchase} The populated <code>CouponFreeItemWithItemPurchase</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponFreeItemWithItemPurchase();
        if (data.hasOwnProperty('item_tags')) {
          obj['item_tags'] = _ApiClient["default"].convertToType(data['item_tags'], ['String']);
        }
        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], ['String']);
        }
        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient["default"].convertToType(data['limit'], 'Number');
        }
        if (data.hasOwnProperty('match_required_purchase_item_to_free_item')) {
          obj['match_required_purchase_item_to_free_item'] = _ApiClient["default"].convertToType(data['match_required_purchase_item_to_free_item'], 'Boolean');
        }
        if (data.hasOwnProperty('required_purchase_items')) {
          obj['required_purchase_items'] = _ApiClient["default"].convertToType(data['required_purchase_items'], ['String']);
        }
        if (data.hasOwnProperty('required_purchase_items_tags')) {
          obj['required_purchase_items_tags'] = _ApiClient["default"].convertToType(data['required_purchase_items_tags'], ['String']);
        }
      }
      return obj;
    }
  }]);
}();
/**
 * An optional list of item tags which will receive a discount of one of the required purchased items is purchased.
 * @member {Array.<String>} item_tags
 */
CouponFreeItemWithItemPurchase.prototype['item_tags'] = undefined;

/**
 * A list of free items which will receive a discount if one of the required purchase items is purchased.
 * @member {Array.<String>} items
 */
CouponFreeItemWithItemPurchase.prototype['items'] = undefined;

/**
 * The (optional) maximum quantity of discounted items.
 * @member {Number} limit
 */
CouponFreeItemWithItemPurchase.prototype['limit'] = undefined;

/**
 * If true then the free item is matched 1:1 with the free item in the list.
 * @member {Boolean} match_required_purchase_item_to_free_item
 */
CouponFreeItemWithItemPurchase.prototype['match_required_purchase_item_to_free_item'] = undefined;

/**
 * Required items (at least one from the list) that must be purchased for coupon to be valid
 * @member {Array.<String>} required_purchase_items
 */
CouponFreeItemWithItemPurchase.prototype['required_purchase_items'] = undefined;

/**
 * An optional list of item tags which are required to be purchased.
 * @member {Array.<String>} required_purchase_items_tags
 */
CouponFreeItemWithItemPurchase.prototype['required_purchase_items_tags'] = undefined;
var _default = exports["default"] = CouponFreeItemWithItemPurchase;