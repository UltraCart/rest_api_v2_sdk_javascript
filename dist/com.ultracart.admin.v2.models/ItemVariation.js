"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ItemVariationOption = _interopRequireDefault(require("./ItemVariationOption"));
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
 * The ItemVariation model module.
 * @module com.ultracart.admin.v2.models/ItemVariation
 * @version 4.0.245
 */
var ItemVariation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemVariation</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemVariation
   */
  function ItemVariation() {
    _classCallCheck(this, ItemVariation);
    ItemVariation.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(ItemVariation, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ItemVariation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemVariation} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemVariation} The populated <code>ItemVariation</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemVariation();
        if (data.hasOwnProperty('default_text')) {
          obj['default_text'] = _ApiClient["default"].convertToType(data['default_text'], 'String');
        }
        if (data.hasOwnProperty('default_text_translated_text_instance_oid')) {
          obj['default_text_translated_text_instance_oid'] = _ApiClient["default"].convertToType(data['default_text_translated_text_instance_oid'], 'Number');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('name_translated_text_instance_oid')) {
          obj['name_translated_text_instance_oid'] = _ApiClient["default"].convertToType(data['name_translated_text_instance_oid'], 'Number');
        }
        if (data.hasOwnProperty('options')) {
          obj['options'] = _ApiClient["default"].convertToType(data['options'], [_ItemVariationOption["default"]]);
        }
      }
      return obj;
    }
  }]);
}();
/**
 * Default text
 * @member {String} default_text
 */
ItemVariation.prototype['default_text'] = undefined;

/**
 * Default text translated text instance id
 * @member {Number} default_text_translated_text_instance_oid
 */
ItemVariation.prototype['default_text_translated_text_instance_oid'] = undefined;

/**
 * Name
 * @member {String} name
 */
ItemVariation.prototype['name'] = undefined;

/**
 * Name translated text instance id
 * @member {Number} name_translated_text_instance_oid
 */
ItemVariation.prototype['name_translated_text_instance_oid'] = undefined;

/**
 * Options
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemVariationOption>} options
 */
ItemVariation.prototype['options'] = undefined;
var _default = exports["default"] = ItemVariation;