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
 * The LibraryItemQuery model module.
 * @module com.ultracart.admin.v2.models/LibraryItemQuery
 * @version 4.0.244
 */
var LibraryItemQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LibraryItemQuery</code>.
   * @alias module:com.ultracart.admin.v2.models/LibraryItemQuery
   */
  function LibraryItemQuery() {
    _classCallCheck(this, LibraryItemQuery);
    LibraryItemQuery.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(LibraryItemQuery, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>LibraryItemQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/LibraryItemQuery} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/LibraryItemQuery} The populated <code>LibraryItemQuery</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LibraryItemQuery();
        if (data.hasOwnProperty('category')) {
          obj['category'] = _ApiClient["default"].convertToType(data['category'], 'String');
        }
        if (data.hasOwnProperty('content_type')) {
          obj['content_type'] = _ApiClient["default"].convertToType(data['content_type'], 'String');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('industry')) {
          obj['industry'] = _ApiClient["default"].convertToType(data['industry'], 'String');
        }
        if (data.hasOwnProperty('price_high')) {
          obj['price_high'] = _ApiClient["default"].convertToType(data['price_high'], 'Number');
        }
        if (data.hasOwnProperty('price_low')) {
          obj['price_low'] = _ApiClient["default"].convertToType(data['price_low'], 'Number');
        }
        if (data.hasOwnProperty('published_dts_begin')) {
          obj['published_dts_begin'] = _ApiClient["default"].convertToType(data['published_dts_begin'], 'String');
        }
        if (data.hasOwnProperty('published_dts_end')) {
          obj['published_dts_end'] = _ApiClient["default"].convertToType(data['published_dts_end'], 'String');
        }
        if (data.hasOwnProperty('source_of_published')) {
          obj['source_of_published'] = _ApiClient["default"].convertToType(data['source_of_published'], 'Boolean');
        }
        if (data.hasOwnProperty('style')) {
          obj['style'] = _ApiClient["default"].convertToType(data['style'], 'String');
        }
        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }
      return obj;
    }
  }]);
}();
/**
 * Category
 * @member {String} category
 */
LibraryItemQuery.prototype['category'] = undefined;

/**
 * Library item content type such as flow, campaign, cjson, email, or transactional_email
 * @member {String} content_type
 */
LibraryItemQuery.prototype['content_type'] = undefined;

/**
 * Description of library item
 * @member {String} description
 */
LibraryItemQuery.prototype['description'] = undefined;

/**
 * Industry
 * @member {String} industry
 */
LibraryItemQuery.prototype['industry'] = undefined;

/**
 * Maximum price
 * @member {Number} price_high
 */
LibraryItemQuery.prototype['price_high'] = undefined;

/**
 * Minimum price
 * @member {Number} price_low
 */
LibraryItemQuery.prototype['price_low'] = undefined;

/**
 * Minimum published date/time
 * @member {String} published_dts_begin
 */
LibraryItemQuery.prototype['published_dts_begin'] = undefined;

/**
 * Maximum published date/time
 * @member {String} published_dts_end
 */
LibraryItemQuery.prototype['published_dts_end'] = undefined;

/**
 * Boolean, true if this library item has been published and is the master copy of that published work
 * @member {Boolean} source_of_published
 */
LibraryItemQuery.prototype['source_of_published'] = undefined;

/**
 * Library item style
 * @member {String} style
 */
LibraryItemQuery.prototype['style'] = undefined;

/**
 * Title of the library item
 * @member {String} title
 */
LibraryItemQuery.prototype['title'] = undefined;

/**
 * Library item type such as header, footer, shipping block, etc
 * @member {String} type
 */
LibraryItemQuery.prototype['type'] = undefined;
var _default = exports["default"] = LibraryItemQuery;