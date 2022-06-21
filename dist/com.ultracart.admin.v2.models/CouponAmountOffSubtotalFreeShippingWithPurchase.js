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
 * The CouponAmountOffSubtotalFreeShippingWithPurchase model module.
 * @module com.ultracart.admin.v2.models/CouponAmountOffSubtotalFreeShippingWithPurchase
 * @version 4.0.5
 */
var CouponAmountOffSubtotalFreeShippingWithPurchase = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponAmountOffSubtotalFreeShippingWithPurchase</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponAmountOffSubtotalFreeShippingWithPurchase
   */
  function CouponAmountOffSubtotalFreeShippingWithPurchase() {
    _classCallCheck(this, CouponAmountOffSubtotalFreeShippingWithPurchase);

    CouponAmountOffSubtotalFreeShippingWithPurchase.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponAmountOffSubtotalFreeShippingWithPurchase, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponAmountOffSubtotalFreeShippingWithPurchase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponAmountOffSubtotalFreeShippingWithPurchase} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponAmountOffSubtotalFreeShippingWithPurchase} The populated <code>CouponAmountOffSubtotalFreeShippingWithPurchase</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponAmountOffSubtotalFreeShippingWithPurchase();

        if (data.hasOwnProperty('currency_code')) {
          obj['currency_code'] = _ApiClient["default"].convertToType(data['currency_code'], 'String');
        }

        if (data.hasOwnProperty('discount_amount')) {
          obj['discount_amount'] = _ApiClient["default"].convertToType(data['discount_amount'], 'Number');
        }

        if (data.hasOwnProperty('purchase_amount')) {
          obj['purchase_amount'] = _ApiClient["default"].convertToType(data['purchase_amount'], 'Number');
        }

        if (data.hasOwnProperty('shipping_methods')) {
          obj['shipping_methods'] = _ApiClient["default"].convertToType(data['shipping_methods'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return CouponAmountOffSubtotalFreeShippingWithPurchase;
}();
/**
 * The ISO-4217 three letter currency code the customer is viewing prices in
 * @member {String} currency_code
 */


CouponAmountOffSubtotalFreeShippingWithPurchase.prototype['currency_code'] = undefined;
/**
 * The amount of subtotal discount
 * @member {Number} discount_amount
 */

CouponAmountOffSubtotalFreeShippingWithPurchase.prototype['discount_amount'] = undefined;
/**
 * The purchase amount to qualify for subtotal discount and free shipping
 * @member {Number} purchase_amount
 */

CouponAmountOffSubtotalFreeShippingWithPurchase.prototype['purchase_amount'] = undefined;
/**
 * One or more shipping methods that may be free
 * @member {Array.<String>} shipping_methods
 */

CouponAmountOffSubtotalFreeShippingWithPurchase.prototype['shipping_methods'] = undefined;
var _default = CouponAmountOffSubtotalFreeShippingWithPurchase;
exports["default"] = _default;