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
 * The OrderChannelPartner model module.
 * @module com.ultracart.admin.v2.models/OrderChannelPartner
 * @version 4.0.95-RC
 */
var OrderChannelPartner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderChannelPartner</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderChannelPartner
   */
  function OrderChannelPartner() {
    _classCallCheck(this, OrderChannelPartner);

    OrderChannelPartner.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderChannelPartner, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderChannelPartner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderChannelPartner} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderChannelPartner} The populated <code>OrderChannelPartner</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderChannelPartner();

        if (data.hasOwnProperty('auto_approve_purchase_order')) {
          obj['auto_approve_purchase_order'] = _ApiClient["default"].convertToType(data['auto_approve_purchase_order'], 'Boolean');
        }

        if (data.hasOwnProperty('channel_partner_code')) {
          obj['channel_partner_code'] = _ApiClient["default"].convertToType(data['channel_partner_code'], 'String');
        }

        if (data.hasOwnProperty('channel_partner_data')) {
          obj['channel_partner_data'] = _ApiClient["default"].convertToType(data['channel_partner_data'], 'String');
        }

        if (data.hasOwnProperty('channel_partner_oid')) {
          obj['channel_partner_oid'] = _ApiClient["default"].convertToType(data['channel_partner_oid'], 'Number');
        }

        if (data.hasOwnProperty('channel_partner_order_id')) {
          obj['channel_partner_order_id'] = _ApiClient["default"].convertToType(data['channel_partner_order_id'], 'String');
        }

        if (data.hasOwnProperty('ignore_invalid_shipping_method')) {
          obj['ignore_invalid_shipping_method'] = _ApiClient["default"].convertToType(data['ignore_invalid_shipping_method'], 'Boolean');
        }

        if (data.hasOwnProperty('no_realtime_payment_processing')) {
          obj['no_realtime_payment_processing'] = _ApiClient["default"].convertToType(data['no_realtime_payment_processing'], 'Boolean');
        }

        if (data.hasOwnProperty('skip_payment_processing')) {
          obj['skip_payment_processing'] = _ApiClient["default"].convertToType(data['skip_payment_processing'], 'Boolean');
        }

        if (data.hasOwnProperty('store_completed')) {
          obj['store_completed'] = _ApiClient["default"].convertToType(data['store_completed'], 'Boolean');
        }

        if (data.hasOwnProperty('store_if_payment_declines')) {
          obj['store_if_payment_declines'] = _ApiClient["default"].convertToType(data['store_if_payment_declines'], 'Boolean');
        }

        if (data.hasOwnProperty('treat_warnings_as_errors')) {
          obj['treat_warnings_as_errors'] = _ApiClient["default"].convertToType(data['treat_warnings_as_errors'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return OrderChannelPartner;
}();
/**
 * If true, any purchase order submitted is automatically approved
 * @member {Boolean} auto_approve_purchase_order
 */


OrderChannelPartner.prototype['auto_approve_purchase_order'] = undefined;
/**
 * The code of the channel partner
 * @member {String} channel_partner_code
 */

OrderChannelPartner.prototype['channel_partner_code'] = undefined;
/**
 * Additional data provided by the channel partner, read-only
 * @member {String} channel_partner_data
 */

OrderChannelPartner.prototype['channel_partner_data'] = undefined;
/**
 * Channel partner object identifier, read-only and available on existing channel orders only.
 * @member {Number} channel_partner_oid
 */

OrderChannelPartner.prototype['channel_partner_oid'] = undefined;
/**
 * The order ID assigned by the channel partner for this order.
 * @member {String} channel_partner_order_id
 */

OrderChannelPartner.prototype['channel_partner_order_id'] = undefined;
/**
 * Set to true to ignore invalid shipping method being specified.  Only applicable on inserting orders.
 * @member {Boolean} ignore_invalid_shipping_method
 */

OrderChannelPartner.prototype['ignore_invalid_shipping_method'] = undefined;
/**
 * Indicates this order should be placed in Account Receivable for later payment processing
 * @member {Boolean} no_realtime_payment_processing
 */

OrderChannelPartner.prototype['no_realtime_payment_processing'] = undefined;
/**
 * Indicates this order was already paid for via a channel purchase and no payment collection should be attempted
 * @member {Boolean} skip_payment_processing
 */

OrderChannelPartner.prototype['skip_payment_processing'] = undefined;
/**
 * Instructs UltraCart to skip shipping department and mark this order as fully complete.  This flag defaults to true.  Set this flag to false to shipped product for this order.
 * @member {Boolean} store_completed
 */

OrderChannelPartner.prototype['store_completed'] = undefined;
/**
 * If true, any failed payment will place the order in Accounts Receivable rather than rejecting it.
 * @member {Boolean} store_if_payment_declines
 */

OrderChannelPartner.prototype['store_if_payment_declines'] = undefined;
/**
 * Any warnings are raised as errors and halt the import of the order
 * @member {Boolean} treat_warnings_as_errors
 */

OrderChannelPartner.prototype['treat_warnings_as_errors'] = undefined;
var _default = OrderChannelPartner;
exports["default"] = _default;