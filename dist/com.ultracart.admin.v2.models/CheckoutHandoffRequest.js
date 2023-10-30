"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Cart = _interopRequireDefault(require("./Cart"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CheckoutHandoffRequest model module.
 * @module com.ultracart.admin.v2.models/CheckoutHandoffRequest
 * @version 4.0.183
 */
var CheckoutHandoffRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CheckoutHandoffRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/CheckoutHandoffRequest
   */
  function CheckoutHandoffRequest() {
    _classCallCheck(this, CheckoutHandoffRequest);

    CheckoutHandoffRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CheckoutHandoffRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CheckoutHandoffRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CheckoutHandoffRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CheckoutHandoffRequest} The populated <code>CheckoutHandoffRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CheckoutHandoffRequest();

        if (data.hasOwnProperty('cart')) {
          obj['cart'] = _Cart["default"].constructFromObject(data['cart']);
        }

        if (data.hasOwnProperty('error_parameter_name')) {
          obj['error_parameter_name'] = _ApiClient["default"].convertToType(data['error_parameter_name'], 'String');
        }

        if (data.hasOwnProperty('error_return_url')) {
          obj['error_return_url'] = _ApiClient["default"].convertToType(data['error_return_url'], 'String');
        }

        if (data.hasOwnProperty('operation')) {
          obj['operation'] = _ApiClient["default"].convertToType(data['operation'], 'String');
        }

        if (data.hasOwnProperty('paypal_maximum_upsell_revenue')) {
          obj['paypal_maximum_upsell_revenue'] = _ApiClient["default"].convertToType(data['paypal_maximum_upsell_revenue'], 'Number');
        }

        if (data.hasOwnProperty('paypal_return_url')) {
          obj['paypal_return_url'] = _ApiClient["default"].convertToType(data['paypal_return_url'], 'String');
        }

        if (data.hasOwnProperty('secure_host_name')) {
          obj['secure_host_name'] = _ApiClient["default"].convertToType(data['secure_host_name'], 'String');
        }

        if (data.hasOwnProperty('ucacid')) {
          obj['ucacid'] = _ApiClient["default"].convertToType(data['ucacid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CheckoutHandoffRequest;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/Cart} cart
 */


CheckoutHandoffRequest.prototype['cart'] = undefined;
/**
 * If any error happen during the processing on the UltraCart side, the browser will be redirected to your error_return_url with the error passed in this parameter name.
 * @member {String} error_parameter_name
 */

CheckoutHandoffRequest.prototype['error_parameter_name'] = undefined;
/**
 * The URL to return the browser to if there are processing errors on the UltraCart side.
 * @member {String} error_return_url
 */

CheckoutHandoffRequest.prototype['error_return_url'] = undefined;
/**
 * The type of handoff operation to perform
 * @member {module:com.ultracart.admin.v2.models/CheckoutHandoffRequest.OperationEnum} operation
 */

CheckoutHandoffRequest.prototype['operation'] = undefined;
/**
 * The maximum amount of revenue that you think the customer could add during a custom upsell after sequence on your checkout.
 * @member {Number} paypal_maximum_upsell_revenue
 */

CheckoutHandoffRequest.prototype['paypal_maximum_upsell_revenue'] = undefined;
/**
 * The URl to return the customers browser to after they have completed the PayPal process.
 * @member {String} paypal_return_url
 */

CheckoutHandoffRequest.prototype['paypal_return_url'] = undefined;
/**
 * The desired secure host name to perform the handoff on.  This should match the desired StoreFront.
 * @member {String} secure_host_name
 */

CheckoutHandoffRequest.prototype['secure_host_name'] = undefined;
/**
 * The UltraCart Analytics cookie value.  Populate this if you're handing off from a different domain than the checkout.
 * @member {String} ucacid
 */

CheckoutHandoffRequest.prototype['ucacid'] = undefined;
/**
 * Allowed values for the <code>operation</code> property.
 * @enum {String}
 * @readonly
 */

CheckoutHandoffRequest['OperationEnum'] = {
  /**
   * value: "checkout"
   * @const
   */
  "checkout": "checkout",

  /**
   * value: "payPal"
   * @const
   */
  "payPal": "payPal",

  /**
   * value: "payPalCredit"
   * @const
   */
  "payPalCredit": "payPalCredit",

  /**
   * value: "view"
   * @const
   */
  "view": "view",

  /**
   * value: "affirm"
   * @const
   */
  "affirm": "affirm",

  /**
   * value: "sezzle"
   * @const
   */
  "sezzle": "sezzle"
};
var _default = CheckoutHandoffRequest;
exports["default"] = _default;