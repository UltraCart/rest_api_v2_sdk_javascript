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
 * The OrderProcessPaymentRequest model module.
 * @module com.ultracart.admin.v2.models/OrderProcessPaymentRequest
 * @version 4.0.151
 */
var OrderProcessPaymentRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderProcessPaymentRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderProcessPaymentRequest
   */
  function OrderProcessPaymentRequest() {
    _classCallCheck(this, OrderProcessPaymentRequest);

    OrderProcessPaymentRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderProcessPaymentRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderProcessPaymentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderProcessPaymentRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderProcessPaymentRequest} The populated <code>OrderProcessPaymentRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderProcessPaymentRequest();

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }

        if (data.hasOwnProperty('card_verification_number_token')) {
          obj['card_verification_number_token'] = _ApiClient["default"].convertToType(data['card_verification_number_token'], 'String');
        }
      }

      return obj;
    }
  }]);

  return OrderProcessPaymentRequest;
}();
/**
 * Specific amount to bill (optional).  If not specified the total of the order is billed.
 * @member {Number} amount
 */


OrderProcessPaymentRequest.prototype['amount'] = undefined;
/**
 * Card verification number token from hosted fields used during credit card transaction processing (optional)
 * @member {String} card_verification_number_token
 */

OrderProcessPaymentRequest.prototype['card_verification_number_token'] = undefined;
var _default = OrderProcessPaymentRequest;
exports["default"] = _default;