"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AutoOrderItem = _interopRequireDefault(require("./AutoOrderItem"));

var _Order = _interopRequireDefault(require("./Order"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The OrderAutoOrder model module.
 * @module com.ultracart.admin.v2.models/OrderAutoOrder
 * @version 4.0.157
 */
var OrderAutoOrder = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderAutoOrder</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderAutoOrder
   */
  function OrderAutoOrder() {
    _classCallCheck(this, OrderAutoOrder);

    OrderAutoOrder.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderAutoOrder, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderAutoOrder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderAutoOrder} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderAutoOrder} The populated <code>OrderAutoOrder</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderAutoOrder();

        if (data.hasOwnProperty('auto_order_code')) {
          obj['auto_order_code'] = _ApiClient["default"].convertToType(data['auto_order_code'], 'String');
        }

        if (data.hasOwnProperty('auto_order_oid')) {
          obj['auto_order_oid'] = _ApiClient["default"].convertToType(data['auto_order_oid'], 'Number');
        }

        if (data.hasOwnProperty('cancel_after_next_x_orders')) {
          obj['cancel_after_next_x_orders'] = _ApiClient["default"].convertToType(data['cancel_after_next_x_orders'], 'Number');
        }

        if (data.hasOwnProperty('cancel_downgrade')) {
          obj['cancel_downgrade'] = _ApiClient["default"].convertToType(data['cancel_downgrade'], 'Boolean');
        }

        if (data.hasOwnProperty('cancel_reason')) {
          obj['cancel_reason'] = _ApiClient["default"].convertToType(data['cancel_reason'], 'String');
        }

        if (data.hasOwnProperty('cancel_upgrade')) {
          obj['cancel_upgrade'] = _ApiClient["default"].convertToType(data['cancel_upgrade'], 'Boolean');
        }

        if (data.hasOwnProperty('canceled_by_user')) {
          obj['canceled_by_user'] = _ApiClient["default"].convertToType(data['canceled_by_user'], 'String');
        }

        if (data.hasOwnProperty('canceled_dts')) {
          obj['canceled_dts'] = _ApiClient["default"].convertToType(data['canceled_dts'], 'String');
        }

        if (data.hasOwnProperty('completed')) {
          obj['completed'] = _ApiClient["default"].convertToType(data['completed'], 'Boolean');
        }

        if (data.hasOwnProperty('credit_card_attempt')) {
          obj['credit_card_attempt'] = _ApiClient["default"].convertToType(data['credit_card_attempt'], 'Number');
        }

        if (data.hasOwnProperty('disabled_dts')) {
          obj['disabled_dts'] = _ApiClient["default"].convertToType(data['disabled_dts'], 'String');
        }

        if (data.hasOwnProperty('enabled')) {
          obj['enabled'] = _ApiClient["default"].convertToType(data['enabled'], 'Boolean');
        }

        if (data.hasOwnProperty('failure_reason')) {
          obj['failure_reason'] = _ApiClient["default"].convertToType(data['failure_reason'], 'String');
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_AutoOrderItem["default"]]);
        }

        if (data.hasOwnProperty('next_attempt')) {
          obj['next_attempt'] = _ApiClient["default"].convertToType(data['next_attempt'], 'String');
        }

        if (data.hasOwnProperty('original_order_id')) {
          obj['original_order_id'] = _ApiClient["default"].convertToType(data['original_order_id'], 'String');
        }

        if (data.hasOwnProperty('override_affiliate_id')) {
          obj['override_affiliate_id'] = _ApiClient["default"].convertToType(data['override_affiliate_id'], 'Number');
        }

        if (data.hasOwnProperty('rebill_orders')) {
          obj['rebill_orders'] = _ApiClient["default"].convertToType(data['rebill_orders'], [_Order["default"]]);
        }

        if (data.hasOwnProperty('rotating_transaction_gateway_code')) {
          obj['rotating_transaction_gateway_code'] = _ApiClient["default"].convertToType(data['rotating_transaction_gateway_code'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
      }

      return obj;
    }
  }]);

  return OrderAutoOrder;
}();
/**
 * Unique code assigned to this auto order
 * @member {String} auto_order_code
 */


OrderAutoOrder.prototype['auto_order_code'] = undefined;
/**
 * Auto order object identifier
 * @member {Number} auto_order_oid
 */

OrderAutoOrder.prototype['auto_order_oid'] = undefined;
/**
 * Cancel this auto order after X additional rebills
 * @member {Number} cancel_after_next_x_orders
 */

OrderAutoOrder.prototype['cancel_after_next_x_orders'] = undefined;
/**
 * True if the auto order was canceled because the customer purchased a downgrade item
 * @member {Boolean} cancel_downgrade
 */

OrderAutoOrder.prototype['cancel_downgrade'] = undefined;
/**
 * The reason this auto order was canceled by either merchant or customer
 * @member {String} cancel_reason
 */

OrderAutoOrder.prototype['cancel_reason'] = undefined;
/**
 * True if the auto order was canceled because the customer purchased an upgrade item
 * @member {Boolean} cancel_upgrade
 */

OrderAutoOrder.prototype['cancel_upgrade'] = undefined;
/**
 * The user that canceled the auto order
 * @member {String} canceled_by_user
 */

OrderAutoOrder.prototype['canceled_by_user'] = undefined;
/**
 * The date/time that the auto order was canceled
 * @member {String} canceled_dts
 */

OrderAutoOrder.prototype['canceled_dts'] = undefined;
/**
 * True if the auto order ran successfully to completion
 * @member {Boolean} completed
 */

OrderAutoOrder.prototype['completed'] = undefined;
/**
 * The number of credit card attempts that have taken place
 * @member {Number} credit_card_attempt
 */

OrderAutoOrder.prototype['credit_card_attempt'] = undefined;
/**
 * The date/time the auto order was disabled due to failed rebills
 * @member {String} disabled_dts
 */

OrderAutoOrder.prototype['disabled_dts'] = undefined;
/**
 * True if this auto order is enabled
 * @member {Boolean} enabled
 */

OrderAutoOrder.prototype['enabled'] = undefined;
/**
 * The reason this auto order failed during the last rebill attempt
 * @member {String} failure_reason
 */

OrderAutoOrder.prototype['failure_reason'] = undefined;
/**
 * The items that are setup to rebill
 * @member {Array.<module:com.ultracart.admin.v2.models/AutoOrderItem>} items
 */

OrderAutoOrder.prototype['items'] = undefined;
/**
 * The next time that the auto order will be attempted for processing
 * @member {String} next_attempt
 */

OrderAutoOrder.prototype['next_attempt'] = undefined;
/**
 * The original order id that this auto order is associated with.
 * @member {String} original_order_id
 */

OrderAutoOrder.prototype['original_order_id'] = undefined;
/**
 * Override the affiliate id given credit for rebills of this auto order
 * @member {Number} override_affiliate_id
 */

OrderAutoOrder.prototype['override_affiliate_id'] = undefined;
/**
 * Rebill orders that have taken place on this auto order
 * @member {Array.<module:com.ultracart.admin.v2.models/Order>} rebill_orders
 */

OrderAutoOrder.prototype['rebill_orders'] = undefined;
/**
 * The RTG code associated with this order for future rebills
 * @member {String} rotating_transaction_gateway_code
 */

OrderAutoOrder.prototype['rotating_transaction_gateway_code'] = undefined;
/**
 * The status of the auto order
 * @member {module:com.ultracart.admin.v2.models/OrderAutoOrder.StatusEnum} status
 */

OrderAutoOrder.prototype['status'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

OrderAutoOrder['StatusEnum'] = {
  /**
   * value: "active"
   * @const
   */
  "active": "active",

  /**
   * value: "canceled"
   * @const
   */
  "canceled": "canceled",

  /**
   * value: "disabled"
   * @const
   */
  "disabled": "disabled"
};
var _default = OrderAutoOrder;
exports["default"] = _default;