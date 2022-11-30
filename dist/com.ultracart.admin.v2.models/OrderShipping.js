"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OrderTrackingNumberDetails = _interopRequireDefault(require("./OrderTrackingNumberDetails"));

var _Weight = _interopRequireDefault(require("./Weight"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The OrderShipping model module.
 * @module com.ultracart.admin.v2.models/OrderShipping
 * @version 4.0.89-RC
 */
var OrderShipping = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderShipping</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderShipping
   */
  function OrderShipping() {
    _classCallCheck(this, OrderShipping);

    OrderShipping.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderShipping, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderShipping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderShipping} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderShipping} The populated <code>OrderShipping</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderShipping();

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

        if (data.hasOwnProperty('day_phone_e164')) {
          obj['day_phone_e164'] = _ApiClient["default"].convertToType(data['day_phone_e164'], 'String');
        }

        if (data.hasOwnProperty('delivery_date')) {
          obj['delivery_date'] = _ApiClient["default"].convertToType(data['delivery_date'], 'String');
        }

        if (data.hasOwnProperty('evening_phone')) {
          obj['evening_phone'] = _ApiClient["default"].convertToType(data['evening_phone'], 'String');
        }

        if (data.hasOwnProperty('evening_phone_e164')) {
          obj['evening_phone_e164'] = _ApiClient["default"].convertToType(data['evening_phone_e164'], 'String');
        }

        if (data.hasOwnProperty('first_name')) {
          obj['first_name'] = _ApiClient["default"].convertToType(data['first_name'], 'String');
        }

        if (data.hasOwnProperty('last_name')) {
          obj['last_name'] = _ApiClient["default"].convertToType(data['last_name'], 'String');
        }

        if (data.hasOwnProperty('least_cost_route')) {
          obj['least_cost_route'] = _ApiClient["default"].convertToType(data['least_cost_route'], 'Boolean');
        }

        if (data.hasOwnProperty('least_cost_route_shipping_methods')) {
          obj['least_cost_route_shipping_methods'] = _ApiClient["default"].convertToType(data['least_cost_route_shipping_methods'], ['String']);
        }

        if (data.hasOwnProperty('lift_gate')) {
          obj['lift_gate'] = _ApiClient["default"].convertToType(data['lift_gate'], 'Boolean');
        }

        if (data.hasOwnProperty('postal_code')) {
          obj['postal_code'] = _ApiClient["default"].convertToType(data['postal_code'], 'String');
        }

        if (data.hasOwnProperty('rma')) {
          obj['rma'] = _ApiClient["default"].convertToType(data['rma'], 'String');
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

        if (data.hasOwnProperty('shipping_date')) {
          obj['shipping_date'] = _ApiClient["default"].convertToType(data['shipping_date'], 'String');
        }

        if (data.hasOwnProperty('shipping_department_status')) {
          obj['shipping_department_status'] = _ApiClient["default"].convertToType(data['shipping_department_status'], 'String');
        }

        if (data.hasOwnProperty('shipping_method')) {
          obj['shipping_method'] = _ApiClient["default"].convertToType(data['shipping_method'], 'String');
        }

        if (data.hasOwnProperty('shipping_method_accounting_code')) {
          obj['shipping_method_accounting_code'] = _ApiClient["default"].convertToType(data['shipping_method_accounting_code'], 'String');
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

        if (data.hasOwnProperty('tracking_number_details')) {
          obj['tracking_number_details'] = _ApiClient["default"].convertToType(data['tracking_number_details'], [_OrderTrackingNumberDetails["default"]]);
        }

        if (data.hasOwnProperty('tracking_numbers')) {
          obj['tracking_numbers'] = _ApiClient["default"].convertToType(data['tracking_numbers'], ['String']);
        }

        if (data.hasOwnProperty('weight')) {
          obj['weight'] = _Weight["default"].constructFromObject(data['weight']);
        }
      }

      return obj;
    }
  }]);

  return OrderShipping;
}();
/**
 * Address line 1
 * @member {String} address1
 */


OrderShipping.prototype['address1'] = undefined;
/**
 * Address line 2
 * @member {String} address2
 */

OrderShipping.prototype['address2'] = undefined;
/**
 * City
 * @member {String} city
 */

OrderShipping.prototype['city'] = undefined;
/**
 * Company
 * @member {String} company
 */

OrderShipping.prototype['company'] = undefined;
/**
 * ISO-3166 two letter country code
 * @member {String} country_code
 */

OrderShipping.prototype['country_code'] = undefined;
/**
 * Day time phone
 * @member {String} day_phone
 */

OrderShipping.prototype['day_phone'] = undefined;
/**
 * Day time phone (E164 format)
 * @member {String} day_phone_e164
 */

OrderShipping.prototype['day_phone_e164'] = undefined;
/**
 * Date the customer is requesting delivery on.  Typically used for perishable product delivery.
 * @member {String} delivery_date
 */

OrderShipping.prototype['delivery_date'] = undefined;
/**
 * Evening phone
 * @member {String} evening_phone
 */

OrderShipping.prototype['evening_phone'] = undefined;
/**
 * Evening phone (E164 format)
 * @member {String} evening_phone_e164
 */

OrderShipping.prototype['evening_phone_e164'] = undefined;
/**
 * First name
 * @member {String} first_name
 */

OrderShipping.prototype['first_name'] = undefined;
/**
 * Last name
 * @member {String} last_name
 */

OrderShipping.prototype['last_name'] = undefined;
/**
 * If true, instructs UltraCart to apply the cheapest shipping method to this order.  Used only for channel partner order inserts.
 * @member {Boolean} least_cost_route
 */

OrderShipping.prototype['least_cost_route'] = undefined;
/**
 * List of shipping methods to consider if least_code_route is true. Used only for channel parter order inserts.
 * @member {Array.<String>} least_cost_route_shipping_methods
 */

OrderShipping.prototype['least_cost_route_shipping_methods'] = undefined;
/**
 * Lift gate requested (LTL shipping methods only)
 * @member {Boolean} lift_gate
 */

OrderShipping.prototype['lift_gate'] = undefined;
/**
 * Postal code
 * @member {String} postal_code
 */

OrderShipping.prototype['postal_code'] = undefined;
/**
 * RMA number
 * @member {String} rma
 */

OrderShipping.prototype['rma'] = undefined;
/**
 * Date the customer is requesting that the order ship on.  Typically used for perishable product delivery.
 * @member {String} ship_on_date
 */

OrderShipping.prototype['ship_on_date'] = undefined;
/**
 * True if the shipping address is residential.  Effects the methods that are available to the customer as well as the price of the shipping method.
 * @member {Boolean} ship_to_residential
 */

OrderShipping.prototype['ship_to_residential'] = undefined;
/**
 * Shipping 3rd party account number
 * @member {String} shipping_3rd_party_account_number
 */

OrderShipping.prototype['shipping_3rd_party_account_number'] = undefined;
/**
 * Date/time the order shipped on.  This date is set once the first shipment is sent to the customer.
 * @member {String} shipping_date
 */

OrderShipping.prototype['shipping_date'] = undefined;
/**
 * Shipping department status
 * @member {String} shipping_department_status
 */

OrderShipping.prototype['shipping_department_status'] = undefined;
/**
 * Shipping method
 * @member {String} shipping_method
 */

OrderShipping.prototype['shipping_method'] = undefined;
/**
 * Shipping method accounting code
 * @member {String} shipping_method_accounting_code
 */

OrderShipping.prototype['shipping_method_accounting_code'] = undefined;
/**
 * Special instructions from the customer regarding shipping
 * @member {String} special_instructions
 */

OrderShipping.prototype['special_instructions'] = undefined;
/**
 * State
 * @member {String} state_region
 */

OrderShipping.prototype['state_region'] = undefined;
/**
 * Title
 * @member {String} title
 */

OrderShipping.prototype['title'] = undefined;
/**
 * Tracking number details
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderTrackingNumberDetails>} tracking_number_details
 */

OrderShipping.prototype['tracking_number_details'] = undefined;
/**
 * Tracking numbers
 * @member {Array.<String>} tracking_numbers
 */

OrderShipping.prototype['tracking_numbers'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Weight} weight
 */

OrderShipping.prototype['weight'] = undefined;
var _default = OrderShipping;
exports["default"] = _default;