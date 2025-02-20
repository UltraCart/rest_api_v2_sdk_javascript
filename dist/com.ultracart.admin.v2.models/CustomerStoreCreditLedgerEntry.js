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
 * The CustomerStoreCreditLedgerEntry model module.
 * @module com.ultracart.admin.v2.models/CustomerStoreCreditLedgerEntry
 * @version 4.0.244
 */
var CustomerStoreCreditLedgerEntry = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerStoreCreditLedgerEntry</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerStoreCreditLedgerEntry
   */
  function CustomerStoreCreditLedgerEntry() {
    _classCallCheck(this, CustomerStoreCreditLedgerEntry);
    CustomerStoreCreditLedgerEntry.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(CustomerStoreCreditLedgerEntry, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>CustomerStoreCreditLedgerEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerStoreCreditLedgerEntry} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerStoreCreditLedgerEntry} The populated <code>CustomerStoreCreditLedgerEntry</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerStoreCreditLedgerEntry();
        if (data.hasOwnProperty('action')) {
          obj['action'] = _ApiClient["default"].convertToType(data['action'], 'String');
        }
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('entry_dts')) {
          obj['entry_dts'] = _ApiClient["default"].convertToType(data['entry_dts'], 'String');
        }
        if (data.hasOwnProperty('gift_certificate_ledger_oid')) {
          obj['gift_certificate_ledger_oid'] = _ApiClient["default"].convertToType(data['gift_certificate_ledger_oid'], 'Number');
        }
        if (data.hasOwnProperty('gift_certificate_oid')) {
          obj['gift_certificate_oid'] = _ApiClient["default"].convertToType(data['gift_certificate_oid'], 'Number');
        }
        if (data.hasOwnProperty('reference_order_id')) {
          obj['reference_order_id'] = _ApiClient["default"].convertToType(data['reference_order_id'], 'String');
        }
      }
      return obj;
    }
  }]);
}();
/**
 * Identifies the state of this ledger entry whether the entry is Vesting or Expiring
 * @member {String} action
 */
CustomerStoreCreditLedgerEntry.prototype['action'] = undefined;

/**
 * The amount of the activity.
 * @member {Number} amount
 */
CustomerStoreCreditLedgerEntry.prototype['amount'] = undefined;

/**
 * Description of what this ledger entry is used.
 * @member {String} description
 */
CustomerStoreCreditLedgerEntry.prototype['description'] = undefined;

/**
 * Date time of this ledger activity.
 * @member {String} entry_dts
 */
CustomerStoreCreditLedgerEntry.prototype['entry_dts'] = undefined;

/**
 * Gift certificate ledger oid is a primary key for this object, used internally.
 * @member {Number} gift_certificate_ledger_oid
 */
CustomerStoreCreditLedgerEntry.prototype['gift_certificate_ledger_oid'] = undefined;

/**
 * Gift certificate oid.
 * @member {Number} gift_certificate_oid
 */
CustomerStoreCreditLedgerEntry.prototype['gift_certificate_oid'] = undefined;

/**
 * The order id if this gift certificate was used as part of the payment.
 * @member {String} reference_order_id
 */
CustomerStoreCreditLedgerEntry.prototype['reference_order_id'] = undefined;
var _default = exports["default"] = CustomerStoreCreditLedgerEntry;