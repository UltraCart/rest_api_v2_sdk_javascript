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
 * The CartBilling model module.
 * @module com.ultracart.admin.v2.models/CartBilling
 * @version 4.0.91-RC
 */
var CartBilling = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartBilling</code>.
   * @alias module:com.ultracart.admin.v2.models/CartBilling
   */
  function CartBilling() {
    _classCallCheck(this, CartBilling);

    CartBilling.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartBilling, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartBilling</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartBilling} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartBilling} The populated <code>CartBilling</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartBilling();

        if (data.hasOwnProperty('address1')) {
          obj['address1'] = _ApiClient["default"].convertToType(data['address1'], 'String');
        }

        if (data.hasOwnProperty('address2')) {
          obj['address2'] = _ApiClient["default"].convertToType(data['address2'], 'String');
        }

        if (data.hasOwnProperty('cc_emails')) {
          obj['cc_emails'] = _ApiClient["default"].convertToType(data['cc_emails'], ['String']);
        }

        if (data.hasOwnProperty('cell_phone')) {
          obj['cell_phone'] = _ApiClient["default"].convertToType(data['cell_phone'], 'String');
        }

        if (data.hasOwnProperty('cell_phone_e164')) {
          obj['cell_phone_e164'] = _ApiClient["default"].convertToType(data['cell_phone_e164'], 'String');
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

        if (data.hasOwnProperty('day_phone')) {
          obj['day_phone'] = _ApiClient["default"].convertToType(data['day_phone'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('email_confirm')) {
          obj['email_confirm'] = _ApiClient["default"].convertToType(data['email_confirm'], 'String');
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

        if (data.hasOwnProperty('postal_code')) {
          obj['postal_code'] = _ApiClient["default"].convertToType(data['postal_code'], 'String');
        }

        if (data.hasOwnProperty('state_region')) {
          obj['state_region'] = _ApiClient["default"].convertToType(data['state_region'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CartBilling;
}();
/**
 * Address line 1
 * @member {String} address1
 */


CartBilling.prototype['address1'] = undefined;
/**
 * Address line 2
 * @member {String} address2
 */

CartBilling.prototype['address2'] = undefined;
/**
 * CC emails.  Multiple allowed, but total length of all emails can not exceed 100 characters.
 * @member {Array.<String>} cc_emails
 */

CartBilling.prototype['cc_emails'] = undefined;
/**
 * Cell phone
 * @member {String} cell_phone
 */

CartBilling.prototype['cell_phone'] = undefined;
/**
 * Cell phone (E164 format)
 * @member {String} cell_phone_e164
 */

CartBilling.prototype['cell_phone_e164'] = undefined;
/**
 * City
 * @member {String} city
 */

CartBilling.prototype['city'] = undefined;
/**
 * Company
 * @member {String} company
 */

CartBilling.prototype['company'] = undefined;
/**
 * ISO-3166 two letter country code
 * @member {String} country_code
 */

CartBilling.prototype['country_code'] = undefined;
/**
 * Day phone
 * @member {String} day_phone
 */

CartBilling.prototype['day_phone'] = undefined;
/**
 * Email
 * @member {String} email
 */

CartBilling.prototype['email'] = undefined;
/**
 * Email entered for confirmation
 * @member {String} email_confirm
 */

CartBilling.prototype['email_confirm'] = undefined;
/**
 * Evening phone
 * @member {String} evening_phone
 */

CartBilling.prototype['evening_phone'] = undefined;
/**
 * First name
 * @member {String} first_name
 */

CartBilling.prototype['first_name'] = undefined;
/**
 * Last name
 * @member {String} last_name
 */

CartBilling.prototype['last_name'] = undefined;
/**
 * Postal code
 * @member {String} postal_code
 */

CartBilling.prototype['postal_code'] = undefined;
/**
 * State for United States otherwise region or province for other countries
 * @member {String} state_region
 */

CartBilling.prototype['state_region'] = undefined;
/**
 * Title
 * @member {String} title
 */

CartBilling.prototype['title'] = undefined;
var _default = CartBilling;
exports["default"] = _default;