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
 * The CartSettingsPaymentAmazon model module.
 * @module com.ultracart.admin.v2.models/CartSettingsPaymentAmazon
 * @version 4.0.70-RC
 */
var CartSettingsPaymentAmazon = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartSettingsPaymentAmazon</code>.
   * @alias module:com.ultracart.admin.v2.models/CartSettingsPaymentAmazon
   */
  function CartSettingsPaymentAmazon() {
    _classCallCheck(this, CartSettingsPaymentAmazon);

    CartSettingsPaymentAmazon.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartSettingsPaymentAmazon, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartSettingsPaymentAmazon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartSettingsPaymentAmazon} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartSettingsPaymentAmazon} The populated <code>CartSettingsPaymentAmazon</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartSettingsPaymentAmazon();

        if (data.hasOwnProperty('amazon_button_url')) {
          obj['amazon_button_url'] = _ApiClient["default"].convertToType(data['amazon_button_url'], 'String');
        }

        if (data.hasOwnProperty('amazon_merchant_id')) {
          obj['amazon_merchant_id'] = _ApiClient["default"].convertToType(data['amazon_merchant_id'], 'String');
        }

        if (data.hasOwnProperty('amazon_widget_url')) {
          obj['amazon_widget_url'] = _ApiClient["default"].convertToType(data['amazon_widget_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CartSettingsPaymentAmazon;
}();
/**
 * Amazon button URL
 * @member {String} amazon_button_url
 */


CartSettingsPaymentAmazon.prototype['amazon_button_url'] = undefined;
/**
 * Amazon merchant ID
 * @member {String} amazon_merchant_id
 */

CartSettingsPaymentAmazon.prototype['amazon_merchant_id'] = undefined;
/**
 * Amazon widget URL
 * @member {String} amazon_widget_url
 */

CartSettingsPaymentAmazon.prototype['amazon_widget_url'] = undefined;
var _default = CartSettingsPaymentAmazon;
exports["default"] = _default;