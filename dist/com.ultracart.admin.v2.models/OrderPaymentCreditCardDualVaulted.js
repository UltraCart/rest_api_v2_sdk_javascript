"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OrderPaymentCreditCardDualVaultedProperty = _interopRequireDefault(require("./OrderPaymentCreditCardDualVaultedProperty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The OrderPaymentCreditCardDualVaulted model module.
 * @module com.ultracart.admin.v2.models/OrderPaymentCreditCardDualVaulted
 * @version 4.0.176
 */
var OrderPaymentCreditCardDualVaulted = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderPaymentCreditCardDualVaulted</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderPaymentCreditCardDualVaulted
   */
  function OrderPaymentCreditCardDualVaulted() {
    _classCallCheck(this, OrderPaymentCreditCardDualVaulted);

    OrderPaymentCreditCardDualVaulted.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderPaymentCreditCardDualVaulted, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderPaymentCreditCardDualVaulted</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderPaymentCreditCardDualVaulted} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderPaymentCreditCardDualVaulted} The populated <code>OrderPaymentCreditCardDualVaulted</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderPaymentCreditCardDualVaulted();

        if (data.hasOwnProperty('gateway_name')) {
          obj['gateway_name'] = _ApiClient["default"].convertToType(data['gateway_name'], 'String');
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ApiClient["default"].convertToType(data['properties'], [_OrderPaymentCreditCardDualVaultedProperty["default"]]);
        }

        if (data.hasOwnProperty('rotating_transaction_gateway_code')) {
          obj['rotating_transaction_gateway_code'] = _ApiClient["default"].convertToType(data['rotating_transaction_gateway_code'], 'String');
        }
      }

      return obj;
    }
  }]);

  return OrderPaymentCreditCardDualVaulted;
}();
/**
 * @member {String} gateway_name
 */


OrderPaymentCreditCardDualVaulted.prototype['gateway_name'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderPaymentCreditCardDualVaultedProperty>} properties
 */

OrderPaymentCreditCardDualVaulted.prototype['properties'] = undefined;
/**
 * @member {String} rotating_transaction_gateway_code
 */

OrderPaymentCreditCardDualVaulted.prototype['rotating_transaction_gateway_code'] = undefined;
var _default = OrderPaymentCreditCardDualVaulted;
exports["default"] = _default;