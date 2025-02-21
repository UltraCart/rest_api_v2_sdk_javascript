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
 * The CustomerQuery model module.
 * @module com.ultracart.admin.v2.models/CustomerQuery
 * @version 4.0.245
 */
var CustomerQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerQuery</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerQuery
   */
  function CustomerQuery() {
    _classCallCheck(this, CustomerQuery);
    CustomerQuery.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(CustomerQuery, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>CustomerQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerQuery} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerQuery} The populated <code>CustomerQuery</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerQuery();
        if (data.hasOwnProperty('all_tags')) {
          obj['all_tags'] = _ApiClient["default"].convertToType(data['all_tags'], ['String']);
        }
        if (data.hasOwnProperty('any_tags')) {
          obj['any_tags'] = _ApiClient["default"].convertToType(data['any_tags'], ['String']);
        }
        if (data.hasOwnProperty('billing_city')) {
          obj['billing_city'] = _ApiClient["default"].convertToType(data['billing_city'], 'String');
        }
        if (data.hasOwnProperty('billing_company')) {
          obj['billing_company'] = _ApiClient["default"].convertToType(data['billing_company'], 'String');
        }
        if (data.hasOwnProperty('billing_country_code')) {
          obj['billing_country_code'] = _ApiClient["default"].convertToType(data['billing_country_code'], 'String');
        }
        if (data.hasOwnProperty('billing_day_phone')) {
          obj['billing_day_phone'] = _ApiClient["default"].convertToType(data['billing_day_phone'], 'String');
        }
        if (data.hasOwnProperty('billing_evening_phone')) {
          obj['billing_evening_phone'] = _ApiClient["default"].convertToType(data['billing_evening_phone'], 'String');
        }
        if (data.hasOwnProperty('billing_first_name')) {
          obj['billing_first_name'] = _ApiClient["default"].convertToType(data['billing_first_name'], 'String');
        }
        if (data.hasOwnProperty('billing_last_name')) {
          obj['billing_last_name'] = _ApiClient["default"].convertToType(data['billing_last_name'], 'String');
        }
        if (data.hasOwnProperty('billing_postal_code')) {
          obj['billing_postal_code'] = _ApiClient["default"].convertToType(data['billing_postal_code'], 'String');
        }
        if (data.hasOwnProperty('billing_state')) {
          obj['billing_state'] = _ApiClient["default"].convertToType(data['billing_state'], 'String');
        }
        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }
        if (data.hasOwnProperty('emails')) {
          obj['emails'] = _ApiClient["default"].convertToType(data['emails'], ['String']);
        }
        if (data.hasOwnProperty('last_modified_dts_end')) {
          obj['last_modified_dts_end'] = _ApiClient["default"].convertToType(data['last_modified_dts_end'], 'String');
        }
        if (data.hasOwnProperty('last_modified_dts_start')) {
          obj['last_modified_dts_start'] = _ApiClient["default"].convertToType(data['last_modified_dts_start'], 'String');
        }
        if (data.hasOwnProperty('pricing_tier_name')) {
          obj['pricing_tier_name'] = _ApiClient["default"].convertToType(data['pricing_tier_name'], 'String');
        }
        if (data.hasOwnProperty('pricing_tier_oid')) {
          obj['pricing_tier_oid'] = _ApiClient["default"].convertToType(data['pricing_tier_oid'], 'Number');
        }
        if (data.hasOwnProperty('qb_class')) {
          obj['qb_class'] = _ApiClient["default"].convertToType(data['qb_class'], 'String');
        }
        if (data.hasOwnProperty('quickbooks_code')) {
          obj['quickbooks_code'] = _ApiClient["default"].convertToType(data['quickbooks_code'], 'String');
        }
        if (data.hasOwnProperty('shipping_city')) {
          obj['shipping_city'] = _ApiClient["default"].convertToType(data['shipping_city'], 'String');
        }
        if (data.hasOwnProperty('shipping_company')) {
          obj['shipping_company'] = _ApiClient["default"].convertToType(data['shipping_company'], 'String');
        }
        if (data.hasOwnProperty('shipping_country_code')) {
          obj['shipping_country_code'] = _ApiClient["default"].convertToType(data['shipping_country_code'], 'String');
        }
        if (data.hasOwnProperty('shipping_day_phone')) {
          obj['shipping_day_phone'] = _ApiClient["default"].convertToType(data['shipping_day_phone'], 'String');
        }
        if (data.hasOwnProperty('shipping_evening_phone')) {
          obj['shipping_evening_phone'] = _ApiClient["default"].convertToType(data['shipping_evening_phone'], 'String');
        }
        if (data.hasOwnProperty('shipping_first_name')) {
          obj['shipping_first_name'] = _ApiClient["default"].convertToType(data['shipping_first_name'], 'String');
        }
        if (data.hasOwnProperty('shipping_last_name')) {
          obj['shipping_last_name'] = _ApiClient["default"].convertToType(data['shipping_last_name'], 'String');
        }
        if (data.hasOwnProperty('shipping_postal_code')) {
          obj['shipping_postal_code'] = _ApiClient["default"].convertToType(data['shipping_postal_code'], 'String');
        }
        if (data.hasOwnProperty('shipping_state')) {
          obj['shipping_state'] = _ApiClient["default"].convertToType(data['shipping_state'], 'String');
        }
        if (data.hasOwnProperty('signup_dts_end')) {
          obj['signup_dts_end'] = _ApiClient["default"].convertToType(data['signup_dts_end'], 'String');
        }
        if (data.hasOwnProperty('signup_dts_start')) {
          obj['signup_dts_start'] = _ApiClient["default"].convertToType(data['signup_dts_start'], 'String');
        }
      }
      return obj;
    }
  }]);
}();
/**
 * All tags the customer must have
 * @member {Array.<String>} all_tags
 */
CustomerQuery.prototype['all_tags'] = undefined;

/**
 * Any of these tags the customer must have
 * @member {Array.<String>} any_tags
 */
CustomerQuery.prototype['any_tags'] = undefined;

/**
 * Billing city
 * @member {String} billing_city
 */
CustomerQuery.prototype['billing_city'] = undefined;

/**
 * Billing company
 * @member {String} billing_company
 */
CustomerQuery.prototype['billing_company'] = undefined;

/**
 * Billing country code
 * @member {String} billing_country_code
 */
CustomerQuery.prototype['billing_country_code'] = undefined;

/**
 * Billing day phone
 * @member {String} billing_day_phone
 */
CustomerQuery.prototype['billing_day_phone'] = undefined;

/**
 * Billing evening phone
 * @member {String} billing_evening_phone
 */
CustomerQuery.prototype['billing_evening_phone'] = undefined;

/**
 * Billing first name
 * @member {String} billing_first_name
 */
CustomerQuery.prototype['billing_first_name'] = undefined;

/**
 * Billing last name
 * @member {String} billing_last_name
 */
CustomerQuery.prototype['billing_last_name'] = undefined;

/**
 * Billing postal code
 * @member {String} billing_postal_code
 */
CustomerQuery.prototype['billing_postal_code'] = undefined;

/**
 * Billing state
 * @member {String} billing_state
 */
CustomerQuery.prototype['billing_state'] = undefined;

/**
 * Email address of this customer profile
 * @member {String} email
 */
CustomerQuery.prototype['email'] = undefined;

/**
 * Emails allows for searching on multiple email addresses and work with our without the single email variable.  You may specify a single email address here or use the email property.
 * @member {Array.<String>} emails
 */
CustomerQuery.prototype['emails'] = undefined;

/**
 * Last modified date end
 * @member {String} last_modified_dts_end
 */
CustomerQuery.prototype['last_modified_dts_end'] = undefined;

/**
 * Last modified date start
 * @member {String} last_modified_dts_start
 */
CustomerQuery.prototype['last_modified_dts_start'] = undefined;

/**
 * Pricing tier name
 * @member {String} pricing_tier_name
 */
CustomerQuery.prototype['pricing_tier_name'] = undefined;

/**
 * Pricing tier oid
 * @member {Number} pricing_tier_oid
 */
CustomerQuery.prototype['pricing_tier_oid'] = undefined;

/**
 * QuickBooks class to import this customer as
 * @member {String} qb_class
 */
CustomerQuery.prototype['qb_class'] = undefined;

/**
 * QuickBooks name to import this customer as
 * @member {String} quickbooks_code
 */
CustomerQuery.prototype['quickbooks_code'] = undefined;

/**
 * Billing city
 * @member {String} shipping_city
 */
CustomerQuery.prototype['shipping_city'] = undefined;

/**
 * Billing company
 * @member {String} shipping_company
 */
CustomerQuery.prototype['shipping_company'] = undefined;

/**
 * Billing country code
 * @member {String} shipping_country_code
 */
CustomerQuery.prototype['shipping_country_code'] = undefined;

/**
 * Billing day phone
 * @member {String} shipping_day_phone
 */
CustomerQuery.prototype['shipping_day_phone'] = undefined;

/**
 * Billing evening phone
 * @member {String} shipping_evening_phone
 */
CustomerQuery.prototype['shipping_evening_phone'] = undefined;

/**
 * Billing first name
 * @member {String} shipping_first_name
 */
CustomerQuery.prototype['shipping_first_name'] = undefined;

/**
 * Billing last name
 * @member {String} shipping_last_name
 */
CustomerQuery.prototype['shipping_last_name'] = undefined;

/**
 * Billing postal code
 * @member {String} shipping_postal_code
 */
CustomerQuery.prototype['shipping_postal_code'] = undefined;

/**
 * Billing state
 * @member {String} shipping_state
 */
CustomerQuery.prototype['shipping_state'] = undefined;

/**
 * Signup date end
 * @member {String} signup_dts_end
 */
CustomerQuery.prototype['signup_dts_end'] = undefined;

/**
 * Signup date start
 * @member {String} signup_dts_start
 */
CustomerQuery.prototype['signup_dts_start'] = undefined;
var _default = exports["default"] = CustomerQuery;