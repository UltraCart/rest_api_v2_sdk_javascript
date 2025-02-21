"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CartItemMultimediaThumbnail = _interopRequireDefault(require("./CartItemMultimediaThumbnail"));
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
 * The CartItemMultimedia model module.
 * @module com.ultracart.admin.v2.models/CartItemMultimedia
 * @version 4.0.245
 */
var CartItemMultimedia = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartItemMultimedia</code>.
   * @alias module:com.ultracart.admin.v2.models/CartItemMultimedia
   */
  function CartItemMultimedia() {
    _classCallCheck(this, CartItemMultimedia);
    CartItemMultimedia.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(CartItemMultimedia, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>CartItemMultimedia</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartItemMultimedia} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartItemMultimedia} The populated <code>CartItemMultimedia</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartItemMultimedia();
        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('exclude_from_gallery')) {
          obj['exclude_from_gallery'] = _ApiClient["default"].convertToType(data['exclude_from_gallery'], 'Boolean');
        }
        if (data.hasOwnProperty('image_height')) {
          obj['image_height'] = _ApiClient["default"].convertToType(data['image_height'], 'Number');
        }
        if (data.hasOwnProperty('image_width')) {
          obj['image_width'] = _ApiClient["default"].convertToType(data['image_width'], 'Number');
        }
        if (data.hasOwnProperty('is_default')) {
          obj['is_default'] = _ApiClient["default"].convertToType(data['is_default'], 'Boolean');
        }
        if (data.hasOwnProperty('thumbnails')) {
          obj['thumbnails'] = _ApiClient["default"].convertToType(data['thumbnails'], [_CartItemMultimediaThumbnail["default"]]);
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
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
 * Code assigned to the multimedia
 * @member {String} code
 */
CartItemMultimedia.prototype['code'] = undefined;

/**
 * Description
 * @member {String} description
 */
CartItemMultimedia.prototype['description'] = undefined;

/**
 * True if the image should be excluded from galleries
 * @member {Boolean} exclude_from_gallery
 */
CartItemMultimedia.prototype['exclude_from_gallery'] = undefined;

/**
 * Image height
 * @member {Number} image_height
 */
CartItemMultimedia.prototype['image_height'] = undefined;

/**
 * Image width
 * @member {Number} image_width
 */
CartItemMultimedia.prototype['image_width'] = undefined;

/**
 * True if the multimedia is the default for this type
 * @member {Boolean} is_default
 */
CartItemMultimedia.prototype['is_default'] = undefined;

/**
 * Thumbnails of the images
 * @member {Array.<module:com.ultracart.admin.v2.models/CartItemMultimediaThumbnail>} thumbnails
 */
CartItemMultimedia.prototype['thumbnails'] = undefined;

/**
 * Type of multimedia
 * @member {module:com.ultracart.admin.v2.models/CartItemMultimedia.TypeEnum} type
 */
CartItemMultimedia.prototype['type'] = undefined;

/**
 * URL to view multimedia at
 * @member {String} url
 */
CartItemMultimedia.prototype['url'] = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CartItemMultimedia['TypeEnum'] = {
  /**
   * value: "Image"
   * @const
   */
  "Image": "Image",
  /**
   * value: "PDF"
   * @const
   */
  "PDF": "PDF",
  /**
   * value: "Text"
   * @const
   */
  "Text": "Text",
  /**
   * value: "Unknown"
   * @const
   */
  "Unknown": "Unknown",
  /**
   * value: "Video"
   * @const
   */
  "Video": "Video"
};
var _default = exports["default"] = CartItemMultimedia;