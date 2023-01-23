"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OrderPaymentTransactionDetail = _interopRequireDefault(require("./OrderPaymentTransactionDetail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The OrderPaymentTransaction model module.
 * @module com.ultracart.admin.v2.models/OrderPaymentTransaction
 * @version 4.0.120-RC
 */
var OrderPaymentTransaction = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderPaymentTransaction</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderPaymentTransaction
   */
  function OrderPaymentTransaction() {
    _classCallCheck(this, OrderPaymentTransaction);

    OrderPaymentTransaction.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderPaymentTransaction, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderPaymentTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderPaymentTransaction} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderPaymentTransaction} The populated <code>OrderPaymentTransaction</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderPaymentTransaction();

        if (data.hasOwnProperty('details')) {
          obj['details'] = _ApiClient["default"].convertToType(data['details'], [_OrderPaymentTransactionDetail["default"]]);
        }

        if (data.hasOwnProperty('successful')) {
          obj['successful'] = _ApiClient["default"].convertToType(data['successful'], 'Boolean');
        }

        if (data.hasOwnProperty('transaction_gateway')) {
          obj['transaction_gateway'] = _ApiClient["default"].convertToType(data['transaction_gateway'], 'String');
        }

        if (data.hasOwnProperty('transaction_timestamp')) {
          obj['transaction_timestamp'] = _ApiClient["default"].convertToType(data['transaction_timestamp'], 'String');
        }
      }

      return obj;
    }
  }]);

  return OrderPaymentTransaction;
}();
/**
 * Details
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderPaymentTransactionDetail>} details
 */


OrderPaymentTransaction.prototype['details'] = undefined;
/**
 * True if the transaction was successful
 * @member {Boolean} successful
 */

OrderPaymentTransaction.prototype['successful'] = undefined;
/**
 * Transaction gateway
 * @member {String} transaction_gateway
 */

OrderPaymentTransaction.prototype['transaction_gateway'] = undefined;
/**
 * Transaction date/time
 * @member {String} transaction_timestamp
 */

OrderPaymentTransaction.prototype['transaction_timestamp'] = undefined;
var _default = OrderPaymentTransaction;
exports["default"] = _default;