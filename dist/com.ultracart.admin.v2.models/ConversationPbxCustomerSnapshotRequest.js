"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Error = _interopRequireDefault(require("./Error"));
var _ResponseMetadata = _interopRequireDefault(require("./ResponseMetadata"));
var _Warning = _interopRequireDefault(require("./Warning"));
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
 * The ConversationPbxCustomerSnapshotRequest model module.
 * @module com.ultracart.admin.v2.models/ConversationPbxCustomerSnapshotRequest
 * @version 4.1.15
 */
var ConversationPbxCustomerSnapshotRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationPbxCustomerSnapshotRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationPbxCustomerSnapshotRequest
   */
  function ConversationPbxCustomerSnapshotRequest() {
    _classCallCheck(this, ConversationPbxCustomerSnapshotRequest);
    ConversationPbxCustomerSnapshotRequest.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(ConversationPbxCustomerSnapshotRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ConversationPbxCustomerSnapshotRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxCustomerSnapshotRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationPbxCustomerSnapshotRequest} The populated <code>ConversationPbxCustomerSnapshotRequest</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationPbxCustomerSnapshotRequest();
        if (data.hasOwnProperty('auto_order_expand')) {
          obj['auto_order_expand'] = _ApiClient["default"].convertToType(data['auto_order_expand'], 'String');
        }
        if (data.hasOwnProperty('customer_expand')) {
          obj['customer_expand'] = _ApiClient["default"].convertToType(data['customer_expand'], 'String');
        }
        if (data.hasOwnProperty('error')) {
          obj['error'] = _Error["default"].constructFromObject(data['error']);
        }
        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ResponseMetadata["default"].constructFromObject(data['metadata']);
        }
        if (data.hasOwnProperty('order_expand')) {
          obj['order_expand'] = _ApiClient["default"].convertToType(data['order_expand'], 'String');
        }
        if (data.hasOwnProperty('phone_number')) {
          obj['phone_number'] = _ApiClient["default"].convertToType(data['phone_number'], 'String');
        }
        if (data.hasOwnProperty('success')) {
          obj['success'] = _ApiClient["default"].convertToType(data['success'], 'Boolean');
        }
        if (data.hasOwnProperty('warning')) {
          obj['warning'] = _Warning["default"].constructFromObject(data['warning']);
        }
      }
      return obj;
    }
  }]);
}();
/**
 * @member {String} auto_order_expand
 */
ConversationPbxCustomerSnapshotRequest.prototype['auto_order_expand'] = undefined;

/**
 * @member {String} customer_expand
 */
ConversationPbxCustomerSnapshotRequest.prototype['customer_expand'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
ConversationPbxCustomerSnapshotRequest.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
ConversationPbxCustomerSnapshotRequest.prototype['metadata'] = undefined;

/**
 * @member {String} order_expand
 */
ConversationPbxCustomerSnapshotRequest.prototype['order_expand'] = undefined;

/**
 * @member {String} phone_number
 */
ConversationPbxCustomerSnapshotRequest.prototype['phone_number'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
ConversationPbxCustomerSnapshotRequest.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
ConversationPbxCustomerSnapshotRequest.prototype['warning'] = undefined;
var _default = exports["default"] = ConversationPbxCustomerSnapshotRequest;