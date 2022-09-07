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
 * The CouponAmountOffSubtotalWithBlockPurchase model module.
 * @module com.ultracart.admin.v2.models/CouponAmountOffSubtotalWithBlockPurchase
 * @version 4.0.60-RC
 */
var CouponAmountOffSubtotalWithBlockPurchase = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponAmountOffSubtotalWithBlockPurchase</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponAmountOffSubtotalWithBlockPurchase
   */
  function CouponAmountOffSubtotalWithBlockPurchase() {
    _classCallCheck(this, CouponAmountOffSubtotalWithBlockPurchase);

    CouponAmountOffSubtotalWithBlockPurchase.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponAmountOffSubtotalWithBlockPurchase, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponAmountOffSubtotalWithBlockPurchase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponAmountOffSubtotalWithBlockPurchase} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponAmountOffSubtotalWithBlockPurchase} The populated <code>CouponAmountOffSubtotalWithBlockPurchase</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponAmountOffSubtotalWithBlockPurchase();

        if (data.hasOwnProperty('currency_code')) {
          obj['currency_code'] = _ApiClient["default"].convertToType(data['currency_code'], 'String');
        }

        if (data.hasOwnProperty('discount_amount')) {
          obj['discount_amount'] = _ApiClient["default"].convertToType(data['discount_amount'], 'Number');
        }

        if (data.hasOwnProperty('required_purchase_item')) {
          obj['required_purchase_item'] = _ApiClient["default"].convertToType(data['required_purchase_item'], 'String');
        }

        if (data.hasOwnProperty('required_purchase_quantity')) {
          obj['required_purchase_quantity'] = _ApiClient["default"].convertToType(data['required_purchase_quantity'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CouponAmountOffSubtotalWithBlockPurchase;
}();
/**
 * The ISO-4217 three letter currency code the customer is viewing prices in
 * @member {String} currency_code
 */


CouponAmountOffSubtotalWithBlockPurchase.prototype['currency_code'] = undefined;
/**
 * The amount of subtotal discount
 * @member {Number} discount_amount
 */

CouponAmountOffSubtotalWithBlockPurchase.prototype['discount_amount'] = undefined;
/**
 * Required item that must be purchased for coupon to be valid
 * @member {String} required_purchase_item
 */

CouponAmountOffSubtotalWithBlockPurchase.prototype['required_purchase_item'] = undefined;
/**
 * Discount amount is multiplied by the number of blocks.  A block is this many quantity of the required item.
 * @member {Number} required_purchase_quantity
 */

CouponAmountOffSubtotalWithBlockPurchase.prototype['required_purchase_quantity'] = undefined;
var _default = CouponAmountOffSubtotalWithBlockPurchase;
exports["default"] = _default;