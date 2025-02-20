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
 * The ItemShippingDestinationMarkup model module.
 * @module com.ultracart.admin.v2.models/ItemShippingDestinationMarkup
 * @version 4.0.244
 */
var ItemShippingDestinationMarkup = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemShippingDestinationMarkup</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemShippingDestinationMarkup
   */
  function ItemShippingDestinationMarkup() {
    _classCallCheck(this, ItemShippingDestinationMarkup);
    ItemShippingDestinationMarkup.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(ItemShippingDestinationMarkup, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ItemShippingDestinationMarkup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemShippingDestinationMarkup} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemShippingDestinationMarkup} The populated <code>ItemShippingDestinationMarkup</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemShippingDestinationMarkup();
        if (data.hasOwnProperty('adult_signature_required')) {
          obj['adult_signature_required'] = _ApiClient["default"].convertToType(data['adult_signature_required'], 'Boolean');
        }
        if (data.hasOwnProperty('country_code')) {
          obj['country_code'] = _ApiClient["default"].convertToType(data['country_code'], 'String');
        }
        if (data.hasOwnProperty('flat_fee')) {
          obj['flat_fee'] = _ApiClient["default"].convertToType(data['flat_fee'], 'Number');
        }
        if (data.hasOwnProperty('per_item')) {
          obj['per_item'] = _ApiClient["default"].convertToType(data['per_item'], 'Number');
        }
        if (data.hasOwnProperty('postal_code')) {
          obj['postal_code'] = _ApiClient["default"].convertToType(data['postal_code'], 'String');
        }
        if (data.hasOwnProperty('shipping_method')) {
          obj['shipping_method'] = _ApiClient["default"].convertToType(data['shipping_method'], 'String');
        }
        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }
      }
      return obj;
    }
  }]);
}();
/**
 * Adult Signature Required (only updated if not-null value provided)
 * @member {Boolean} adult_signature_required
 */
ItemShippingDestinationMarkup.prototype['adult_signature_required'] = undefined;

/**
 * Country code (ISO-3166 two letter)
 * @member {String} country_code
 */
ItemShippingDestinationMarkup.prototype['country_code'] = undefined;

/**
 * Flat fee
 * @member {Number} flat_fee
 */
ItemShippingDestinationMarkup.prototype['flat_fee'] = undefined;

/**
 * Per item
 * @member {Number} per_item
 */
ItemShippingDestinationMarkup.prototype['per_item'] = undefined;

/**
 * Postal code
 * @member {String} postal_code
 */
ItemShippingDestinationMarkup.prototype['postal_code'] = undefined;

/**
 * Shipping method
 * @member {String} shipping_method
 */
ItemShippingDestinationMarkup.prototype['shipping_method'] = undefined;

/**
 * State
 * @member {String} state
 */
ItemShippingDestinationMarkup.prototype['state'] = undefined;
var _default = exports["default"] = ItemShippingDestinationMarkup;