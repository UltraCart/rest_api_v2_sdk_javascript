"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OrderReplacementItem = _interopRequireDefault(require("./OrderReplacementItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The OrderReplacement model module.
 * @module com.ultracart.admin.v2.models/OrderReplacement
 * @version 4.0.160
 */
var OrderReplacement = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderReplacement</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderReplacement
   */
  function OrderReplacement() {
    _classCallCheck(this, OrderReplacement);

    OrderReplacement.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderReplacement, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderReplacement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderReplacement} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderReplacement} The populated <code>OrderReplacement</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderReplacement();

        if (data.hasOwnProperty('additional_merchant_notes_new_order')) {
          obj['additional_merchant_notes_new_order'] = _ApiClient["default"].convertToType(data['additional_merchant_notes_new_order'], 'String');
        }

        if (data.hasOwnProperty('additional_merchant_notes_original_order')) {
          obj['additional_merchant_notes_original_order'] = _ApiClient["default"].convertToType(data['additional_merchant_notes_original_order'], 'String');
        }

        if (data.hasOwnProperty('custom_field1')) {
          obj['custom_field1'] = _ApiClient["default"].convertToType(data['custom_field1'], 'String');
        }

        if (data.hasOwnProperty('custom_field2')) {
          obj['custom_field2'] = _ApiClient["default"].convertToType(data['custom_field2'], 'String');
        }

        if (data.hasOwnProperty('custom_field3')) {
          obj['custom_field3'] = _ApiClient["default"].convertToType(data['custom_field3'], 'String');
        }

        if (data.hasOwnProperty('custom_field4')) {
          obj['custom_field4'] = _ApiClient["default"].convertToType(data['custom_field4'], 'String');
        }

        if (data.hasOwnProperty('custom_field5')) {
          obj['custom_field5'] = _ApiClient["default"].convertToType(data['custom_field5'], 'String');
        }

        if (data.hasOwnProperty('custom_field6')) {
          obj['custom_field6'] = _ApiClient["default"].convertToType(data['custom_field6'], 'String');
        }

        if (data.hasOwnProperty('custom_field7')) {
          obj['custom_field7'] = _ApiClient["default"].convertToType(data['custom_field7'], 'String');
        }

        if (data.hasOwnProperty('free')) {
          obj['free'] = _ApiClient["default"].convertToType(data['free'], 'Boolean');
        }

        if (data.hasOwnProperty('immediate_charge')) {
          obj['immediate_charge'] = _ApiClient["default"].convertToType(data['immediate_charge'], 'Boolean');
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_OrderReplacementItem["default"]]);
        }

        if (data.hasOwnProperty('original_order_id')) {
          obj['original_order_id'] = _ApiClient["default"].convertToType(data['original_order_id'], 'String');
        }

        if (data.hasOwnProperty('shipping_method')) {
          obj['shipping_method'] = _ApiClient["default"].convertToType(data['shipping_method'], 'String');
        }

        if (data.hasOwnProperty('skip_payment')) {
          obj['skip_payment'] = _ApiClient["default"].convertToType(data['skip_payment'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return OrderReplacement;
}();
/**
 * Additional merchant notes to append to the new order
 * @member {String} additional_merchant_notes_new_order
 */


OrderReplacement.prototype['additional_merchant_notes_new_order'] = undefined;
/**
 * Additional merchant notes to append to the original order
 * @member {String} additional_merchant_notes_original_order
 */

OrderReplacement.prototype['additional_merchant_notes_original_order'] = undefined;
/**
 * Custom field 1
 * @member {String} custom_field1
 */

OrderReplacement.prototype['custom_field1'] = undefined;
/**
 * Custom field 2
 * @member {String} custom_field2
 */

OrderReplacement.prototype['custom_field2'] = undefined;
/**
 * Custom field 3
 * @member {String} custom_field3
 */

OrderReplacement.prototype['custom_field3'] = undefined;
/**
 * Custom field 4
 * @member {String} custom_field4
 */

OrderReplacement.prototype['custom_field4'] = undefined;
/**
 * Custom field 5
 * @member {String} custom_field5
 */

OrderReplacement.prototype['custom_field5'] = undefined;
/**
 * Custom field 6
 * @member {String} custom_field6
 */

OrderReplacement.prototype['custom_field6'] = undefined;
/**
 * Custom field 7
 * @member {String} custom_field7
 */

OrderReplacement.prototype['custom_field7'] = undefined;
/**
 * Set to true if this replacement shipment should be free for the customer.
 * @member {Boolean} free
 */

OrderReplacement.prototype['free'] = undefined;
/**
 * Set to true if you want to immediately charge the payment on this order, otherwise it will go to Accounts Receivable.
 * @member {Boolean} immediate_charge
 */

OrderReplacement.prototype['immediate_charge'] = undefined;
/**
 * Items to include in the replacement order
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderReplacementItem>} items
 */

OrderReplacement.prototype['items'] = undefined;
/**
 * Original order id
 * @member {String} original_order_id
 */

OrderReplacement.prototype['original_order_id'] = undefined;
/**
 * Shipping method to use.  If not specified or invalid then least cost shipping will take place.
 * @member {String} shipping_method
 */

OrderReplacement.prototype['shipping_method'] = undefined;
/**
 * Set to true if you want to skip the payment as if it was successful.
 * @member {Boolean} skip_payment
 */

OrderReplacement.prototype['skip_payment'] = undefined;
var _default = OrderReplacement;
exports["default"] = _default;