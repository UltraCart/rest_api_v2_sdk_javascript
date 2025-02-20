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
 * The ApplyLibraryItemRequest model module.
 * @module com.ultracart.admin.v2.models/ApplyLibraryItemRequest
 * @version 4.0.244
 */
var ApplyLibraryItemRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplyLibraryItemRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/ApplyLibraryItemRequest
   */
  function ApplyLibraryItemRequest() {
    _classCallCheck(this, ApplyLibraryItemRequest);
    ApplyLibraryItemRequest.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(ApplyLibraryItemRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ApplyLibraryItemRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ApplyLibraryItemRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ApplyLibraryItemRequest} The populated <code>ApplyLibraryItemRequest</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplyLibraryItemRequest();
        if (data.hasOwnProperty('email_uuid')) {
          obj['email_uuid'] = _ApiClient["default"].convertToType(data['email_uuid'], 'String');
        }
        if (data.hasOwnProperty('library_item_oid')) {
          obj['library_item_oid'] = _ApiClient["default"].convertToType(data['library_item_oid'], 'Number');
        }
        if (data.hasOwnProperty('postcard_uuid')) {
          obj['postcard_uuid'] = _ApiClient["default"].convertToType(data['postcard_uuid'], 'String');
        }
        if (data.hasOwnProperty('storefront_oid')) {
          obj['storefront_oid'] = _ApiClient["default"].convertToType(data['storefront_oid'], 'Number');
        }
      }
      return obj;
    }
  }]);
}();
/**
 * Normal emails are applied to an existing email object, so when requesting a library item to be applied to an email, supply the email uuid.  This is only for normal emails.  Transactional emails do not have a uuid.
 * @member {String} email_uuid
 */
ApplyLibraryItemRequest.prototype['email_uuid'] = undefined;

/**
 * Library item oid that you wish to apply to the given StoreFront
 * @member {Number} library_item_oid
 */
ApplyLibraryItemRequest.prototype['library_item_oid'] = undefined;

/**
 * The postcard uuid you wish to apply to a given StoreFront.
 * @member {String} postcard_uuid
 */
ApplyLibraryItemRequest.prototype['postcard_uuid'] = undefined;

/**
 * StoreFront oid where content originates necessary for tracking down relative assets
 * @member {Number} storefront_oid
 */
ApplyLibraryItemRequest.prototype['storefront_oid'] = undefined;
var _default = exports["default"] = ApplyLibraryItemRequest;