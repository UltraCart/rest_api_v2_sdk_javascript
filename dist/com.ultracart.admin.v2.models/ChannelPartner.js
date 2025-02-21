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
 * The ChannelPartner model module.
 * @module com.ultracart.admin.v2.models/ChannelPartner
 * @version 4.0.245
 */
var ChannelPartner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelPartner</code>.
   * @alias module:com.ultracart.admin.v2.models/ChannelPartner
   */
  function ChannelPartner() {
    _classCallCheck(this, ChannelPartner);
    ChannelPartner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(ChannelPartner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ChannelPartner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ChannelPartner} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ChannelPartner} The populated <code>ChannelPartner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelPartner();
        if (data.hasOwnProperty('channel_partner_oid')) {
          obj['channel_partner_oid'] = _ApiClient["default"].convertToType(data['channel_partner_oid'], 'Number');
        }
        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }
        if (data.hasOwnProperty('communication_method')) {
          obj['communication_method'] = _ApiClient["default"].convertToType(data['communication_method'], 'String');
        }
        if (data.hasOwnProperty('dont_hold_shipment')) {
          obj['dont_hold_shipment'] = _ApiClient["default"].convertToType(data['dont_hold_shipment'], 'Boolean');
        }
        if (data.hasOwnProperty('inactive')) {
          obj['inactive'] = _ApiClient["default"].convertToType(data['inactive'], 'Boolean');
        }
        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('skip_customer_emails')) {
          obj['skip_customer_emails'] = _ApiClient["default"].convertToType(data['skip_customer_emails'], 'Boolean');
        }
      }
      return obj;
    }
  }]);
}();
/**
 * Channel partner object id
 * @member {Number} channel_partner_oid
 */
ChannelPartner.prototype['channel_partner_oid'] = undefined;

/**
 * Code associated with the channel partner
 * @member {String} code
 */
ChannelPartner.prototype['code'] = undefined;

/**
 * Communication method of the channel partner
 * @member {String} communication_method
 */
ChannelPartner.prototype['communication_method'] = undefined;

/**
 * True if shipments should immediately process for this channel partner.
 * @member {Boolean} dont_hold_shipment
 */
ChannelPartner.prototype['dont_hold_shipment'] = undefined;

/**
 * True if the channel partner is inactive
 * @member {Boolean} inactive
 */
ChannelPartner.prototype['inactive'] = undefined;

/**
 * Merchant ID of the channel partner
 * @member {String} merchant_id
 */
ChannelPartner.prototype['merchant_id'] = undefined;

/**
 * Name of the channel partner
 * @member {String} name
 */
ChannelPartner.prototype['name'] = undefined;

/**
 * True if emails to the customer are skipped for this channel partner.
 * @member {Boolean} skip_customer_emails
 */
ChannelPartner.prototype['skip_customer_emails'] = undefined;
var _default = exports["default"] = ChannelPartner;