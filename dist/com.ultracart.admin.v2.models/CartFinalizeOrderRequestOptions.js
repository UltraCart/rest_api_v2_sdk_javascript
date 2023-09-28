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
 * The CartFinalizeOrderRequestOptions model module.
 * @module com.ultracart.admin.v2.models/CartFinalizeOrderRequestOptions
 * @version 4.0.178
 */
var CartFinalizeOrderRequestOptions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartFinalizeOrderRequestOptions</code>.
   * @alias module:com.ultracart.admin.v2.models/CartFinalizeOrderRequestOptions
   */
  function CartFinalizeOrderRequestOptions() {
    _classCallCheck(this, CartFinalizeOrderRequestOptions);

    CartFinalizeOrderRequestOptions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartFinalizeOrderRequestOptions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartFinalizeOrderRequestOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartFinalizeOrderRequestOptions} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartFinalizeOrderRequestOptions} The populated <code>CartFinalizeOrderRequestOptions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartFinalizeOrderRequestOptions();

        if (data.hasOwnProperty('auto_approve_purchase_order')) {
          obj['auto_approve_purchase_order'] = _ApiClient["default"].convertToType(data['auto_approve_purchase_order'], 'Boolean');
        }

        if (data.hasOwnProperty('channel_partner_code')) {
          obj['channel_partner_code'] = _ApiClient["default"].convertToType(data['channel_partner_code'], 'String');
        }

        if (data.hasOwnProperty('channel_partner_oid')) {
          obj['channel_partner_oid'] = _ApiClient["default"].convertToType(data['channel_partner_oid'], 'Number');
        }

        if (data.hasOwnProperty('channel_partner_order_id')) {
          obj['channel_partner_order_id'] = _ApiClient["default"].convertToType(data['channel_partner_order_id'], 'String');
        }

        if (data.hasOwnProperty('consider_recurring')) {
          obj['consider_recurring'] = _ApiClient["default"].convertToType(data['consider_recurring'], 'Boolean');
        }

        if (data.hasOwnProperty('credit_card_authorization_amount')) {
          obj['credit_card_authorization_amount'] = _ApiClient["default"].convertToType(data['credit_card_authorization_amount'], 'Number');
        }

        if (data.hasOwnProperty('credit_card_authorization_date')) {
          obj['credit_card_authorization_date'] = _ApiClient["default"].convertToType(data['credit_card_authorization_date'], 'String');
        }

        if (data.hasOwnProperty('credit_card_authorization_reference_number')) {
          obj['credit_card_authorization_reference_number'] = _ApiClient["default"].convertToType(data['credit_card_authorization_reference_number'], 'String');
        }

        if (data.hasOwnProperty('no_realtime_payment_processing')) {
          obj['no_realtime_payment_processing'] = _ApiClient["default"].convertToType(data['no_realtime_payment_processing'], 'Boolean');
        }

        if (data.hasOwnProperty('setup_next_cart')) {
          obj['setup_next_cart'] = _ApiClient["default"].convertToType(data['setup_next_cart'], 'Boolean');
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
      }

      return obj;
    }
  }]);

  return CartFinalizeOrderRequestOptions;
}();
/**
 * Automatically approve the purchase order
 * @member {Boolean} auto_approve_purchase_order
 */


CartFinalizeOrderRequestOptions.prototype['auto_approve_purchase_order'] = undefined;
/**
 * Channel partner code to associate this order with
 * @member {String} channel_partner_code
 */

CartFinalizeOrderRequestOptions.prototype['channel_partner_code'] = undefined;
/**
 * Channel partner oid to associate this order with
 * @member {Number} channel_partner_oid
 */

CartFinalizeOrderRequestOptions.prototype['channel_partner_oid'] = undefined;
/**
 * Channel partner order id for reference
 * @member {String} channel_partner_order_id
 */

CartFinalizeOrderRequestOptions.prototype['channel_partner_order_id'] = undefined;
/**
 * Consider this order a recurring order for the purposes of payment gateway recurring flag
 * @member {Boolean} consider_recurring
 */

CartFinalizeOrderRequestOptions.prototype['consider_recurring'] = undefined;
/**
 * If the order was authorized outside of UltraCart, this is the amount of the authorization
 * @member {Number} credit_card_authorization_amount
 */

CartFinalizeOrderRequestOptions.prototype['credit_card_authorization_amount'] = undefined;
/**
 * If the order was authorized outside of UltraCart, this is the date/time of the authorization
 * @member {String} credit_card_authorization_date
 */

CartFinalizeOrderRequestOptions.prototype['credit_card_authorization_date'] = undefined;
/**
 * If the order was authorized outside of UltraCart, this is the authorization reference number
 * @member {String} credit_card_authorization_reference_number
 */

CartFinalizeOrderRequestOptions.prototype['credit_card_authorization_reference_number'] = undefined;
/**
 * Prevents normal real-time processing of the payment and sends the order to Accounts Receivable
 * @member {Boolean} no_realtime_payment_processing
 */

CartFinalizeOrderRequestOptions.prototype['no_realtime_payment_processing'] = undefined;
/**
 * True if the system should create another cart automatically if the current cart was logged into a profile
 * @member {Boolean} setup_next_cart
 */

CartFinalizeOrderRequestOptions.prototype['setup_next_cart'] = undefined;
/**
 * Skip payment processing and move the order on to shipping (or completed if no shipping required)
 * @member {Boolean} skip_payment_processing
 */

CartFinalizeOrderRequestOptions.prototype['skip_payment_processing'] = undefined;
/**
 * True the order in the completed stage
 * @member {Boolean} store_completed
 */

CartFinalizeOrderRequestOptions.prototype['store_completed'] = undefined;
/**
 * Store the order in accounts receivable if the payment declines
 * @member {Boolean} store_if_payment_declines
 */

CartFinalizeOrderRequestOptions.prototype['store_if_payment_declines'] = undefined;
var _default = CartFinalizeOrderRequestOptions;
exports["default"] = _default;