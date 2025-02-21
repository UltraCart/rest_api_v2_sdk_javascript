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
 * The ItemWishlistMember model module.
 * @module com.ultracart.admin.v2.models/ItemWishlistMember
 * @version 4.0.245
 */
var ItemWishlistMember = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemWishlistMember</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemWishlistMember
   */
  function ItemWishlistMember() {
    _classCallCheck(this, ItemWishlistMember);
    ItemWishlistMember.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(ItemWishlistMember, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ItemWishlistMember</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemWishlistMember} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemWishlistMember} The populated <code>ItemWishlistMember</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemWishlistMember();
        if (data.hasOwnProperty('wishlist_member_instance_description')) {
          obj['wishlist_member_instance_description'] = _ApiClient["default"].convertToType(data['wishlist_member_instance_description'], 'String');
        }
        if (data.hasOwnProperty('wishlist_member_instance_oid')) {
          obj['wishlist_member_instance_oid'] = _ApiClient["default"].convertToType(data['wishlist_member_instance_oid'], 'Number');
        }
        if (data.hasOwnProperty('wishlist_member_sku')) {
          obj['wishlist_member_sku'] = _ApiClient["default"].convertToType(data['wishlist_member_sku'], 'String');
        }
      }
      return obj;
    }
  }]);
}();
/**
 * WishList Member instance description
 * @member {String} wishlist_member_instance_description
 */
ItemWishlistMember.prototype['wishlist_member_instance_description'] = undefined;

/**
 * WishList Member instance object identifier
 * @member {Number} wishlist_member_instance_oid
 */
ItemWishlistMember.prototype['wishlist_member_instance_oid'] = undefined;

/**
 * WishList Member SKU
 * @member {String} wishlist_member_sku
 */
ItemWishlistMember.prototype['wishlist_member_sku'] = undefined;
var _default = exports["default"] = ItemWishlistMember;