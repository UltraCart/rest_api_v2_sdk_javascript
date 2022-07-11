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
 * The OrderQuery model module.
 * @module com.ultracart.admin.v2.models/OrderQuery
 * @version 4.0.33-RC
 */
var OrderQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderQuery</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderQuery
   */
  function OrderQuery() {
    _classCallCheck(this, OrderQuery);

    OrderQuery.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderQuery, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderQuery} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderQuery} The populated <code>OrderQuery</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderQuery();

        if (data.hasOwnProperty('cc_email')) {
          obj['cc_email'] = _ApiClient["default"].convertToType(data['cc_email'], 'String');
        }

        if (data.hasOwnProperty('channel_partner_code')) {
          obj['channel_partner_code'] = _ApiClient["default"].convertToType(data['channel_partner_code'], 'String');
        }

        if (data.hasOwnProperty('channel_partner_order_id')) {
          obj['channel_partner_order_id'] = _ApiClient["default"].convertToType(data['channel_partner_order_id'], 'String');
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

        if (data.hasOwnProperty('creation_date_begin')) {
          obj['creation_date_begin'] = _ApiClient["default"].convertToType(data['creation_date_begin'], 'String');
        }

        if (data.hasOwnProperty('creation_date_end')) {
          obj['creation_date_end'] = _ApiClient["default"].convertToType(data['creation_date_end'], 'String');
        }

        if (data.hasOwnProperty('current_stage')) {
          obj['current_stage'] = _ApiClient["default"].convertToType(data['current_stage'], 'String');
        }

        if (data.hasOwnProperty('custom_field_1')) {
          obj['custom_field_1'] = _ApiClient["default"].convertToType(data['custom_field_1'], 'String');
        }

        if (data.hasOwnProperty('custom_field_2')) {
          obj['custom_field_2'] = _ApiClient["default"].convertToType(data['custom_field_2'], 'String');
        }

        if (data.hasOwnProperty('custom_field_3')) {
          obj['custom_field_3'] = _ApiClient["default"].convertToType(data['custom_field_3'], 'String');
        }

        if (data.hasOwnProperty('custom_field_4')) {
          obj['custom_field_4'] = _ApiClient["default"].convertToType(data['custom_field_4'], 'String');
        }

        if (data.hasOwnProperty('custom_field_5')) {
          obj['custom_field_5'] = _ApiClient["default"].convertToType(data['custom_field_5'], 'String');
        }

        if (data.hasOwnProperty('custom_field_6')) {
          obj['custom_field_6'] = _ApiClient["default"].convertToType(data['custom_field_6'], 'String');
        }

        if (data.hasOwnProperty('custom_field_7')) {
          obj['custom_field_7'] = _ApiClient["default"].convertToType(data['custom_field_7'], 'String');
        }

        if (data.hasOwnProperty('customer_profile_oid')) {
          obj['customer_profile_oid'] = _ApiClient["default"].convertToType(data['customer_profile_oid'], 'Number');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('first_name')) {
          obj['first_name'] = _ApiClient["default"].convertToType(data['first_name'], 'String');
        }

        if (data.hasOwnProperty('item_id')) {
          obj['item_id'] = _ApiClient["default"].convertToType(data['item_id'], 'String');
        }

        if (data.hasOwnProperty('last_name')) {
          obj['last_name'] = _ApiClient["default"].convertToType(data['last_name'], 'String');
        }

        if (data.hasOwnProperty('order_id')) {
          obj['order_id'] = _ApiClient["default"].convertToType(data['order_id'], 'String');
        }

        if (data.hasOwnProperty('payment_date_begin')) {
          obj['payment_date_begin'] = _ApiClient["default"].convertToType(data['payment_date_begin'], 'String');
        }

        if (data.hasOwnProperty('payment_date_end')) {
          obj['payment_date_end'] = _ApiClient["default"].convertToType(data['payment_date_end'], 'String');
        }

        if (data.hasOwnProperty('payment_method')) {
          obj['payment_method'] = _ApiClient["default"].convertToType(data['payment_method'], 'String');
        }

        if (data.hasOwnProperty('phone')) {
          obj['phone'] = _ApiClient["default"].convertToType(data['phone'], 'String');
        }

        if (data.hasOwnProperty('postal_code')) {
          obj['postal_code'] = _ApiClient["default"].convertToType(data['postal_code'], 'String');
        }

        if (data.hasOwnProperty('purchase_order_number')) {
          obj['purchase_order_number'] = _ApiClient["default"].convertToType(data['purchase_order_number'], 'String');
        }

        if (data.hasOwnProperty('refund_date_begin')) {
          obj['refund_date_begin'] = _ApiClient["default"].convertToType(data['refund_date_begin'], 'String');
        }

        if (data.hasOwnProperty('refund_date_end')) {
          obj['refund_date_end'] = _ApiClient["default"].convertToType(data['refund_date_end'], 'String');
        }

        if (data.hasOwnProperty('rma')) {
          obj['rma'] = _ApiClient["default"].convertToType(data['rma'], 'String');
        }

        if (data.hasOwnProperty('screen_branding_theme_code')) {
          obj['screen_branding_theme_code'] = _ApiClient["default"].convertToType(data['screen_branding_theme_code'], 'String');
        }

        if (data.hasOwnProperty('shipment_date_begin')) {
          obj['shipment_date_begin'] = _ApiClient["default"].convertToType(data['shipment_date_begin'], 'String');
        }

        if (data.hasOwnProperty('shipment_date_end')) {
          obj['shipment_date_end'] = _ApiClient["default"].convertToType(data['shipment_date_end'], 'String');
        }

        if (data.hasOwnProperty('shipped_on_date_begin')) {
          obj['shipped_on_date_begin'] = _ApiClient["default"].convertToType(data['shipped_on_date_begin'], 'String');
        }

        if (data.hasOwnProperty('shipped_on_date_end')) {
          obj['shipped_on_date_end'] = _ApiClient["default"].convertToType(data['shipped_on_date_end'], 'String');
        }

        if (data.hasOwnProperty('state_region')) {
          obj['state_region'] = _ApiClient["default"].convertToType(data['state_region'], 'String');
        }

        if (data.hasOwnProperty('storefront_host_name')) {
          obj['storefront_host_name'] = _ApiClient["default"].convertToType(data['storefront_host_name'], 'String');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return OrderQuery;
}();
/**
 * CC Email
 * @member {String} cc_email
 */


OrderQuery.prototype['cc_email'] = undefined;
/**
 * The code of the channel partner
 * @member {String} channel_partner_code
 */

OrderQuery.prototype['channel_partner_code'] = undefined;
/**
 * The order ID assigned by the channel partner for this order
 * @member {String} channel_partner_order_id
 */

OrderQuery.prototype['channel_partner_order_id'] = undefined;
/**
 * City
 * @member {String} city
 */

OrderQuery.prototype['city'] = undefined;
/**
 * Company
 * @member {String} company
 */

OrderQuery.prototype['company'] = undefined;
/**
 * ISO-3166 two letter country code
 * @member {String} country_code
 */

OrderQuery.prototype['country_code'] = undefined;
/**
 * Date/time that the order was created
 * @member {String} creation_date_begin
 */

OrderQuery.prototype['creation_date_begin'] = undefined;
/**
 * Date/time that the order was created
 * @member {String} creation_date_end
 */

OrderQuery.prototype['creation_date_end'] = undefined;
/**
 * Current stage that the order is in.
 * @member {module:com.ultracart.admin.v2.models/OrderQuery.CurrentStageEnum} current_stage
 */

OrderQuery.prototype['current_stage'] = undefined;
/**
 * Custom field 1
 * @member {String} custom_field_1
 */

OrderQuery.prototype['custom_field_1'] = undefined;
/**
 * Custom field 2
 * @member {String} custom_field_2
 */

OrderQuery.prototype['custom_field_2'] = undefined;
/**
 * Custom field 3
 * @member {String} custom_field_3
 */

OrderQuery.prototype['custom_field_3'] = undefined;
/**
 * Custom field 4
 * @member {String} custom_field_4
 */

OrderQuery.prototype['custom_field_4'] = undefined;
/**
 * Custom field 5
 * @member {String} custom_field_5
 */

OrderQuery.prototype['custom_field_5'] = undefined;
/**
 * Custom field 6
 * @member {String} custom_field_6
 */

OrderQuery.prototype['custom_field_6'] = undefined;
/**
 * Custom field 7
 * @member {String} custom_field_7
 */

OrderQuery.prototype['custom_field_7'] = undefined;
/**
 * The customer profile to find associated orders for
 * @member {Number} customer_profile_oid
 */

OrderQuery.prototype['customer_profile_oid'] = undefined;
/**
 * Email
 * @member {String} email
 */

OrderQuery.prototype['email'] = undefined;
/**
 * First name
 * @member {String} first_name
 */

OrderQuery.prototype['first_name'] = undefined;
/**
 * Item ID
 * @member {String} item_id
 */

OrderQuery.prototype['item_id'] = undefined;
/**
 * Last name
 * @member {String} last_name
 */

OrderQuery.prototype['last_name'] = undefined;
/**
 * Order ID
 * @member {String} order_id
 */

OrderQuery.prototype['order_id'] = undefined;
/**
 * Date/time that the order was successfully processed
 * @member {String} payment_date_begin
 */

OrderQuery.prototype['payment_date_begin'] = undefined;
/**
 * Date/time that the order was successfully processed
 * @member {String} payment_date_end
 */

OrderQuery.prototype['payment_date_end'] = undefined;
/**
 * Payment method
 * @member {module:com.ultracart.admin.v2.models/OrderQuery.PaymentMethodEnum} payment_method
 */

OrderQuery.prototype['payment_method'] = undefined;
/**
 * Phone
 * @member {String} phone
 */

OrderQuery.prototype['phone'] = undefined;
/**
 * Postal code
 * @member {String} postal_code
 */

OrderQuery.prototype['postal_code'] = undefined;
/**
 * Purchase order number
 * @member {String} purchase_order_number
 */

OrderQuery.prototype['purchase_order_number'] = undefined;
/**
 * Date/time that the order was refunded
 * @member {String} refund_date_begin
 */

OrderQuery.prototype['refund_date_begin'] = undefined;
/**
 * Date/time that the order was refunded
 * @member {String} refund_date_end
 */

OrderQuery.prototype['refund_date_end'] = undefined;
/**
 * RMA number
 * @member {String} rma
 */

OrderQuery.prototype['rma'] = undefined;
/**
 * Screen branding theme code associated with the order (legacy checkout)
 * @member {String} screen_branding_theme_code
 */

OrderQuery.prototype['screen_branding_theme_code'] = undefined;
/**
 * Date/time that the order was shipped
 * @member {String} shipment_date_begin
 */

OrderQuery.prototype['shipment_date_begin'] = undefined;
/**
 * Date/time that the order was shipped
 * @member {String} shipment_date_end
 */

OrderQuery.prototype['shipment_date_end'] = undefined;
/**
 * Date/time that the order should ship on
 * @member {String} shipped_on_date_begin
 */

OrderQuery.prototype['shipped_on_date_begin'] = undefined;
/**
 * Date/time that the order should ship on
 * @member {String} shipped_on_date_end
 */

OrderQuery.prototype['shipped_on_date_end'] = undefined;
/**
 * State for United States otherwise region or province for other countries
 * @member {String} state_region
 */

OrderQuery.prototype['state_region'] = undefined;
/**
 * StoreFront host name associated with the order
 * @member {String} storefront_host_name
 */

OrderQuery.prototype['storefront_host_name'] = undefined;
/**
 * Total
 * @member {Number} total
 */

OrderQuery.prototype['total'] = undefined;
/**
 * Allowed values for the <code>current_stage</code> property.
 * @enum {String}
 * @readonly
 */

OrderQuery['CurrentStageEnum'] = {
  /**
   * value: "Accounts Receivable"
   * @const
   */
  "Accounts Receivable": "Accounts Receivable",

  /**
   * value: "Pending Clearance"
   * @const
   */
  "Pending Clearance": "Pending Clearance",

  /**
   * value: "Fraud Review"
   * @const
   */
  "Fraud Review": "Fraud Review",

  /**
   * value: "Rejected"
   * @const
   */
  "Rejected": "Rejected",

  /**
   * value: "Shipping Department"
   * @const
   */
  "Shipping Department": "Shipping Department",

  /**
   * value: "Completed Order"
   * @const
   */
  "Completed Order": "Completed Order",

  /**
   * value: "Quote Request"
   * @const
   */
  "Quote Request": "Quote Request",

  /**
   * value: "Quote Sent"
   * @const
   */
  "Quote Sent": "Quote Sent",

  /**
   * value: "Least Cost Routing"
   * @const
   */
  "Least Cost Routing": "Least Cost Routing",

  /**
   * value: "Unknown"
   * @const
   */
  "Unknown": "Unknown"
};
/**
 * Allowed values for the <code>payment_method</code> property.
 * @enum {String}
 * @readonly
 */

OrderQuery['PaymentMethodEnum'] = {
  /**
   * value: "Affirm"
   * @const
   */
  "Affirm": "Affirm",

  /**
   * value: "Amazon"
   * @const
   */
  "Amazon": "Amazon",

  /**
   * value: "Amazon SC"
   * @const
   */
  "Amazon SC": "Amazon SC",

  /**
   * value: "Cash"
   * @const
   */
  "Cash": "Cash",

  /**
   * value: "Check"
   * @const
   */
  "Check": "Check",

  /**
   * value: "COD"
   * @const
   */
  "COD": "COD",

  /**
   * value: "Credit Card"
   * @const
   */
  "Credit Card": "Credit Card",

  /**
   * value: "eCheck"
   * @const
   */
  "eCheck": "eCheck",

  /**
   * value: "LoanHero"
   * @const
   */
  "LoanHero": "LoanHero",

  /**
   * value: "Money Order"
   * @const
   */
  "Money Order": "Money Order",

  /**
   * value: "PayPal"
   * @const
   */
  "PayPal": "PayPal",

  /**
   * value: "Purchase Order"
   * @const
   */
  "Purchase Order": "Purchase Order",

  /**
   * value: "Quote Request"
   * @const
   */
  "Quote Request": "Quote Request",

  /**
   * value: "Unknown"
   * @const
   */
  "Unknown": "Unknown",

  /**
   * value: "Wire Transfer"
   * @const
   */
  "Wire Transfer": "Wire Transfer"
};
var _default = OrderQuery;
exports["default"] = _default;