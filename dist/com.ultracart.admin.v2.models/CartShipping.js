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
 * The CartShipping model module.
 * @module com.ultracart.admin.v2.models/CartShipping
 * @version 4.0.132
 */
var CartShipping = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartShipping</code>.
   * @alias module:com.ultracart.admin.v2.models/CartShipping
   */
  function CartShipping() {
    _classCallCheck(this, CartShipping);

    CartShipping.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartShipping, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartShipping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartShipping} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartShipping} The populated <code>CartShipping</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartShipping();

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

        if (data.hasOwnProperty('day_phone')) {
          obj['day_phone'] = _ApiClient["default"].convertToType(data['day_phone'], 'String');
        }

        if (data.hasOwnProperty('delivery_date')) {
          obj['delivery_date'] = _ApiClient["default"].convertToType(data['delivery_date'], 'String');
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

        if (data.hasOwnProperty('lift_gate')) {
          obj['lift_gate'] = _ApiClient["default"].convertToType(data['lift_gate'], 'Boolean');
        }

        if (data.hasOwnProperty('postal_code')) {
          obj['postal_code'] = _ApiClient["default"].convertToType(data['postal_code'], 'String');
        }

        if (data.hasOwnProperty('ship_on_date')) {
          obj['ship_on_date'] = _ApiClient["default"].convertToType(data['ship_on_date'], 'String');
        }

        if (data.hasOwnProperty('ship_to_residential')) {
          obj['ship_to_residential'] = _ApiClient["default"].convertToType(data['ship_to_residential'], 'Boolean');
        }

        if (data.hasOwnProperty('shipping_3rd_party_account_number')) {
          obj['shipping_3rd_party_account_number'] = _ApiClient["default"].convertToType(data['shipping_3rd_party_account_number'], 'String');
        }

        if (data.hasOwnProperty('shipping_method')) {
          obj['shipping_method'] = _ApiClient["default"].convertToType(data['shipping_method'], 'String');
        }

        if (data.hasOwnProperty('special_instructions')) {
          obj['special_instructions'] = _ApiClient["default"].convertToType(data['special_instructions'], 'String');
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

  return CartShipping;
}();
/**
 * Address line 1
 * @member {String} address1
 */


CartShipping.prototype['address1'] = undefined;
/**
 * Address line 2
 * @member {String} address2
 */

CartShipping.prototype['address2'] = undefined;
/**
 * City
 * @member {String} city
 */

CartShipping.prototype['city'] = undefined;
/**
 * Company
 * @member {String} company
 */

CartShipping.prototype['company'] = undefined;
/**
 * ISO-3166 two letter country code
 * @member {String} country_code
 */

CartShipping.prototype['country_code'] = undefined;
/**
 * Day time phone
 * @member {String} day_phone
 */

CartShipping.prototype['day_phone'] = undefined;
/**
 * Date the customer is requesting delivery on. Typically used for perishable product delivery.
 * @member {String} delivery_date
 */

CartShipping.prototype['delivery_date'] = undefined;
/**
 * Evening phone
 * @member {String} evening_phone
 */

CartShipping.prototype['evening_phone'] = undefined;
/**
 * First name
 * @member {String} first_name
 */

CartShipping.prototype['first_name'] = undefined;
/**
 * Last name
 * @member {String} last_name
 */

CartShipping.prototype['last_name'] = undefined;
/**
 * Lift gate requested (LTL shipping methods only)
 * @member {Boolean} lift_gate
 */

CartShipping.prototype['lift_gate'] = undefined;
/**
 * Postal code
 * @member {String} postal_code
 */

CartShipping.prototype['postal_code'] = undefined;
/**
 * Date the customer is requesting that the order ship on.  Typically used for perishable product delivery.
 * @member {String} ship_on_date
 */

CartShipping.prototype['ship_on_date'] = undefined;
/**
 * True if the shipping adress is residential.  Effects the methods that are available to the customer as well as the price of the shipping method.
 * @member {Boolean} ship_to_residential
 */

CartShipping.prototype['ship_to_residential'] = undefined;
/**
 * 3rd party account number to ship against for UPS or FedEx
 * @member {String} shipping_3rd_party_account_number
 */

CartShipping.prototype['shipping_3rd_party_account_number'] = undefined;
/**
 * Shipping method
 * @member {String} shipping_method
 */

CartShipping.prototype['shipping_method'] = undefined;
/**
 * Special instructions from the customer regarding shipping
 * @member {String} special_instructions
 */

CartShipping.prototype['special_instructions'] = undefined;
/**
 * State/Region
 * @member {String} state_region
 */

CartShipping.prototype['state_region'] = undefined;
/**
 * Title
 * @member {String} title
 */

CartShipping.prototype['title'] = undefined;
var _default = CartShipping;
exports["default"] = _default;