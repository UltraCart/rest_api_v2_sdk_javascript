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
 * The CustomerEmail model module.
 * @module com.ultracart.admin.v2.models/CustomerEmail
 * @version 4.1.15
 */
var CustomerEmail = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerEmail</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerEmail
   */
  function CustomerEmail() {
    _classCallCheck(this, CustomerEmail);
    CustomerEmail.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(CustomerEmail, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>CustomerEmail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerEmail} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerEmail} The populated <code>CustomerEmail</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerEmail();
        if (data.hasOwnProperty('customer_profile_email_oid')) {
          obj['customer_profile_email_oid'] = _ApiClient["default"].convertToType(data['customer_profile_email_oid'], 'Number');
        }
        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }
        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }
        if (data.hasOwnProperty('receipt_notification')) {
          obj['receipt_notification'] = _ApiClient["default"].convertToType(data['receipt_notification'], 'Boolean');
        }
        if (data.hasOwnProperty('refund_notification')) {
          obj['refund_notification'] = _ApiClient["default"].convertToType(data['refund_notification'], 'Boolean');
        }
        if (data.hasOwnProperty('shipment_notification')) {
          obj['shipment_notification'] = _ApiClient["default"].convertToType(data['shipment_notification'], 'Boolean');
        }
      }
      return obj;
    }
  }]);
}();
/**
 * ID of the email
 * @member {Number} customer_profile_email_oid
 */
CustomerEmail.prototype['customer_profile_email_oid'] = undefined;

/**
 * Email
 * @member {String} email
 */
CustomerEmail.prototype['email'] = undefined;

/**
 * Label
 * @member {String} label
 */
CustomerEmail.prototype['label'] = undefined;

/**
 * CC this email on receipt notifications
 * @member {Boolean} receipt_notification
 */
CustomerEmail.prototype['receipt_notification'] = undefined;

/**
 * CC this email on refund notifications
 * @member {Boolean} refund_notification
 */
CustomerEmail.prototype['refund_notification'] = undefined;

/**
 * CC this email on shipment notifications
 * @member {Boolean} shipment_notification
 */
CustomerEmail.prototype['shipment_notification'] = undefined;
var _default = exports["default"] = CustomerEmail;