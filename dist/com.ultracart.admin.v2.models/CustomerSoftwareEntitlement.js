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
 * The CustomerSoftwareEntitlement model module.
 * @module com.ultracart.admin.v2.models/CustomerSoftwareEntitlement
 * @version 4.0.245
 */
var CustomerSoftwareEntitlement = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerSoftwareEntitlement</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerSoftwareEntitlement
   */
  function CustomerSoftwareEntitlement() {
    _classCallCheck(this, CustomerSoftwareEntitlement);
    CustomerSoftwareEntitlement.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(CustomerSoftwareEntitlement, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>CustomerSoftwareEntitlement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerSoftwareEntitlement} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerSoftwareEntitlement} The populated <code>CustomerSoftwareEntitlement</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerSoftwareEntitlement();
        if (data.hasOwnProperty('activation_code')) {
          obj['activation_code'] = _ApiClient["default"].convertToType(data['activation_code'], 'String');
        }
        if (data.hasOwnProperty('activation_dts')) {
          obj['activation_dts'] = _ApiClient["default"].convertToType(data['activation_dts'], 'String');
        }
        if (data.hasOwnProperty('customer_software_entitlement_oid')) {
          obj['customer_software_entitlement_oid'] = _ApiClient["default"].convertToType(data['customer_software_entitlement_oid'], 'Number');
        }
        if (data.hasOwnProperty('expiration_dts')) {
          obj['expiration_dts'] = _ApiClient["default"].convertToType(data['expiration_dts'], 'String');
        }
        if (data.hasOwnProperty('purchased_via_item_description')) {
          obj['purchased_via_item_description'] = _ApiClient["default"].convertToType(data['purchased_via_item_description'], 'String');
        }
        if (data.hasOwnProperty('purchased_via_item_id')) {
          obj['purchased_via_item_id'] = _ApiClient["default"].convertToType(data['purchased_via_item_id'], 'String');
        }
        if (data.hasOwnProperty('purchased_via_order_id')) {
          obj['purchased_via_order_id'] = _ApiClient["default"].convertToType(data['purchased_via_order_id'], 'String');
        }
        if (data.hasOwnProperty('software_sku')) {
          obj['software_sku'] = _ApiClient["default"].convertToType(data['software_sku'], 'String');
        }
      }
      return obj;
    }
  }]);
}();
/**
 * Activation Code Associated with the software
 * @member {String} activation_code
 */
CustomerSoftwareEntitlement.prototype['activation_code'] = undefined;

/**
 * Date/time when the activation code was created
 * @member {String} activation_dts
 */
CustomerSoftwareEntitlement.prototype['activation_dts'] = undefined;

/**
 * Customer profile software entitlement object identifier
 * @member {Number} customer_software_entitlement_oid
 */
CustomerSoftwareEntitlement.prototype['customer_software_entitlement_oid'] = undefined;

/**
 * Date/time when the activation code will expire
 * @member {String} expiration_dts
 */
CustomerSoftwareEntitlement.prototype['expiration_dts'] = undefined;

/**
 * Item description used to purchase this software.
 * @member {String} purchased_via_item_description
 */
CustomerSoftwareEntitlement.prototype['purchased_via_item_description'] = undefined;

/**
 * Item ID used to purchase this software.
 * @member {String} purchased_via_item_id
 */
CustomerSoftwareEntitlement.prototype['purchased_via_item_id'] = undefined;

/**
 * Order ID used to purchase this software.
 * @member {String} purchased_via_order_id
 */
CustomerSoftwareEntitlement.prototype['purchased_via_order_id'] = undefined;

/**
 * SKU of the software
 * @member {String} software_sku
 */
CustomerSoftwareEntitlement.prototype['software_sku'] = undefined;
var _default = exports["default"] = CustomerSoftwareEntitlement;