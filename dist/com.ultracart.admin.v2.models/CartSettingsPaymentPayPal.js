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
 * The CartSettingsPaymentPayPal model module.
 * @module com.ultracart.admin.v2.models/CartSettingsPaymentPayPal
 * @version 4.0.167
 */
var CartSettingsPaymentPayPal = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartSettingsPaymentPayPal</code>.
   * @alias module:com.ultracart.admin.v2.models/CartSettingsPaymentPayPal
   */
  function CartSettingsPaymentPayPal() {
    _classCallCheck(this, CartSettingsPaymentPayPal);

    CartSettingsPaymentPayPal.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartSettingsPaymentPayPal, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartSettingsPaymentPayPal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartSettingsPaymentPayPal} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartSettingsPaymentPayPal} The populated <code>CartSettingsPaymentPayPal</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartSettingsPaymentPayPal();

        if (data.hasOwnProperty('paypal_button_alt_text')) {
          obj['paypal_button_alt_text'] = _ApiClient["default"].convertToType(data['paypal_button_alt_text'], 'String');
        }

        if (data.hasOwnProperty('paypal_button_url')) {
          obj['paypal_button_url'] = _ApiClient["default"].convertToType(data['paypal_button_url'], 'String');
        }

        if (data.hasOwnProperty('paypal_credit_button_url')) {
          obj['paypal_credit_button_url'] = _ApiClient["default"].convertToType(data['paypal_credit_button_url'], 'String');
        }

        if (data.hasOwnProperty('paypal_credit_legal_image_url')) {
          obj['paypal_credit_legal_image_url'] = _ApiClient["default"].convertToType(data['paypal_credit_legal_image_url'], 'String');
        }

        if (data.hasOwnProperty('paypal_credit_legal_url')) {
          obj['paypal_credit_legal_url'] = _ApiClient["default"].convertToType(data['paypal_credit_legal_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CartSettingsPaymentPayPal;
}();
/**
 * PayPal button alt text
 * @member {String} paypal_button_alt_text
 */


CartSettingsPaymentPayPal.prototype['paypal_button_alt_text'] = undefined;
/**
 * PayPal button URL
 * @member {String} paypal_button_url
 */

CartSettingsPaymentPayPal.prototype['paypal_button_url'] = undefined;
/**
 * PayPal Credit button URL
 * @member {String} paypal_credit_button_url
 */

CartSettingsPaymentPayPal.prototype['paypal_credit_button_url'] = undefined;
/**
 * PayPal Credit legal image URL
 * @member {String} paypal_credit_legal_image_url
 */

CartSettingsPaymentPayPal.prototype['paypal_credit_legal_image_url'] = undefined;
/**
 * PayPal Credit legal URL
 * @member {String} paypal_credit_legal_url
 */

CartSettingsPaymentPayPal.prototype['paypal_credit_legal_url'] = undefined;
var _default = CartSettingsPaymentPayPal;
exports["default"] = _default;