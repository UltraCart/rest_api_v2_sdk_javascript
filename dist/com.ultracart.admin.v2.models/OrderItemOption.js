"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Currency = _interopRequireDefault(require("./Currency"));
var _Distance = _interopRequireDefault(require("./Distance"));
var _OrderItemOptionFileAttachment = _interopRequireDefault(require("./OrderItemOptionFileAttachment"));
var _Weight = _interopRequireDefault(require("./Weight"));
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
 * The OrderItemOption model module.
 * @module com.ultracart.admin.v2.models/OrderItemOption
 * @version 4.1.15
 */
var OrderItemOption = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderItemOption</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderItemOption
   */
  function OrderItemOption() {
    _classCallCheck(this, OrderItemOption);
    OrderItemOption.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(OrderItemOption, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>OrderItemOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderItemOption} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderItemOption} The populated <code>OrderItemOption</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderItemOption();
        if (data.hasOwnProperty('additional_dimension_application')) {
          obj['additional_dimension_application'] = _ApiClient["default"].convertToType(data['additional_dimension_application'], 'String');
        }
        if (data.hasOwnProperty('cost_change')) {
          obj['cost_change'] = _Currency["default"].constructFromObject(data['cost_change']);
        }
        if (data.hasOwnProperty('file_attachment')) {
          obj['file_attachment'] = _OrderItemOptionFileAttachment["default"].constructFromObject(data['file_attachment']);
        }
        if (data.hasOwnProperty('height')) {
          obj['height'] = _Distance["default"].constructFromObject(data['height']);
        }
        if (data.hasOwnProperty('hidden')) {
          obj['hidden'] = _ApiClient["default"].convertToType(data['hidden'], 'Boolean');
        }
        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }
        if (data.hasOwnProperty('length')) {
          obj['length'] = _Distance["default"].constructFromObject(data['length']);
        }
        if (data.hasOwnProperty('one_time_fee')) {
          obj['one_time_fee'] = _ApiClient["default"].convertToType(data['one_time_fee'], 'Boolean');
        }
        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
        if (data.hasOwnProperty('weight_change')) {
          obj['weight_change'] = _Weight["default"].constructFromObject(data['weight_change']);
        }
        if (data.hasOwnProperty('width')) {
          obj['width'] = _Distance["default"].constructFromObject(data['width']);
        }
      }
      return obj;
    }
  }]);
}();
/**
 * How the additional dimensions are applied to the item.
 * @member {module:com.ultracart.admin.v2.models/OrderItemOption.AdditionalDimensionApplicationEnum} additional_dimension_application
 */
OrderItemOption.prototype['additional_dimension_application'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} cost_change
 */
OrderItemOption.prototype['cost_change'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/OrderItemOptionFileAttachment} file_attachment
 */
OrderItemOption.prototype['file_attachment'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Distance} height
 */
OrderItemOption.prototype['height'] = undefined;

/**
 * True if this option is hidden from display on the order
 * @member {Boolean} hidden
 */
OrderItemOption.prototype['hidden'] = undefined;

/**
 * Label
 * @member {String} label
 */
OrderItemOption.prototype['label'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Distance} length
 */
OrderItemOption.prototype['length'] = undefined;

/**
 * True if the cost associated with this option is a one time fee or multiplied by the quantity of the item
 * @member {Boolean} one_time_fee
 */
OrderItemOption.prototype['one_time_fee'] = undefined;

/**
 * Value
 * @member {String} value
 */
OrderItemOption.prototype['value'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Weight} weight_change
 */
OrderItemOption.prototype['weight_change'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Distance} width
 */
OrderItemOption.prototype['width'] = undefined;

/**
 * Allowed values for the <code>additional_dimension_application</code> property.
 * @enum {String}
 * @readonly
 */
OrderItemOption['AdditionalDimensionApplicationEnum'] = {
  /**
   * value: "none"
   * @const
   */
  "none": "none",
  /**
   * value: "set item to"
   * @const
   */
  "set item to": "set item to",
  /**
   * value: "add item"
   * @const
   */
  "add item": "add item"
};
var _default = exports["default"] = OrderItemOption;