"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CustomerBilling model module.
 * @module com.ultracart.admin.v2.models/CustomerBilling
 * @version 4.0.106-RC
 */
var CustomerBilling = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerBilling</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerBilling
   */
  function CustomerBilling() {
    _classCallCheck(this, CustomerBilling);

    CustomerBilling.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomerBilling, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomerBilling</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerBilling} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerBilling} The populated <code>CustomerBilling</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerBilling();

        if (data.hasOwnProperty('address1')) {
          obj['address1'] = _ApiClient["default"].convertToType(data['address1'], 'String');
        }

        if (data.hasOwnProperty('address2')) {
          obj['address2'] = _ApiClient["default"].convertToType(data['address2'], 'String');
        }

        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'String');
        }

        if (data.hasOwnProperty('company')) {
          obj['company'] = _ApiClient["default"].convertToType(data['company'], 'String');
        }

        if (data.hasOwnProperty('country_code')) {
          obj['country_code'] = _ApiClient["default"].convertToType(data['country_code'], 'String');
        }

        if (data.hasOwnProperty('customer_billing_oid')) {
          obj['customer_billing_oid'] = _ApiClient["default"].convertToType(data['customer_billing_oid'], 'Number');
        }

        if (data.hasOwnProperty('customer_profile_oid')) {
          obj['customer_profile_oid'] = _ApiClient["default"].convertToType(data['customer_profile_oid'], 'Number');
        }

        if (data.hasOwnProperty('day_phone')) {
          obj['day_phone'] = _ApiClient["default"].convertToType(data['day_phone'], 'String');
        }

        if (data.hasOwnProperty('default_billing')) {
          obj['default_billing'] = _ApiClient["default"].convertToType(data['default_billing'], 'Boolean');
        }

        if (data.hasOwnProperty('evening_phone')) {
          obj['evening_phone'] = _ApiClient["default"].convertToType(data['evening_phone'], 'String');
        }

        if (data.hasOwnProperty('first_name')) {
          obj['first_name'] = _ApiClient["default"].convertToType(data['first_name'], 'String');
        }

        if (data.hasOwnProperty('last_name')) {
          obj['last_name'] = _ApiClient["default"].convertToType(data['last_name'], 'String');
        }

        if (data.hasOwnProperty('last_used_dts')) {
          obj['last_used_dts'] = _ApiClient["default"].convertToType(data['last_used_dts'], 'String');
        }

        if (data.hasOwnProperty('postal_code')) {
          obj['postal_code'] = _ApiClient["default"].convertToType(data['postal_code'], 'String');
        }

        if (data.hasOwnProperty('state_region')) {
          obj['state_region'] = _ApiClient["default"].convertToType(data['state_region'], 'String');
        }

        if (data.hasOwnProperty('tax_county')) {
          obj['tax_county'] = _ApiClient["default"].convertToType(data['tax_county'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CustomerBilling;
}();
/**
 * Address line 1
 * @member {String} address1
 */


CustomerBilling.prototype['address1'] = undefined;
/**
 * Address line 2
 * @member {String} address2
 */

CustomerBilling.prototype['address2'] = undefined;
/**
 * City
 * @member {String} city
 */

CustomerBilling.prototype['city'] = undefined;
/**
 * Company
 * @member {String} company
 */

CustomerBilling.prototype['company'] = undefined;
/**
 * ISO-3166 two letter country code
 * @member {String} country_code
 */

CustomerBilling.prototype['country_code'] = undefined;
/**
 * Customer profile billing object identifier
 * @member {Number} customer_billing_oid
 */

CustomerBilling.prototype['customer_billing_oid'] = undefined;
/**
 * Customer profile object identifier
 * @member {Number} customer_profile_oid
 */

CustomerBilling.prototype['customer_profile_oid'] = undefined;
/**
 * Day phone
 * @member {String} day_phone
 */

CustomerBilling.prototype['day_phone'] = undefined;
/**
 * Default billing
 * @member {Boolean} default_billing
 */

CustomerBilling.prototype['default_billing'] = undefined;
/**
 * Evening phone
 * @member {String} evening_phone
 */

CustomerBilling.prototype['evening_phone'] = undefined;
/**
 * First name
 * @member {String} first_name
 */

CustomerBilling.prototype['first_name'] = undefined;
/**
 * Last name
 * @member {String} last_name
 */

CustomerBilling.prototype['last_name'] = undefined;
/**
 * Last used date
 * @member {String} last_used_dts
 */

CustomerBilling.prototype['last_used_dts'] = undefined;
/**
 * Postal code
 * @member {String} postal_code
 */

CustomerBilling.prototype['postal_code'] = undefined;
/**
 * State for United States otherwise region or province for other countries
 * @member {String} state_region
 */

CustomerBilling.prototype['state_region'] = undefined;
/**
 * Tax County
 * @member {String} tax_county
 */

CustomerBilling.prototype['tax_county'] = undefined;
/**
 * Title
 * @member {String} title
 */

CustomerBilling.prototype['title'] = undefined;
var _default = CustomerBilling;
exports["default"] = _default;