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
 * The CouponAmountOffSubtotalWithItemsPurchase model module.
 * @module com.ultracart.admin.v2.models/CouponAmountOffSubtotalWithItemsPurchase
 * @version 4.0.59-RC
 */
var CouponAmountOffSubtotalWithItemsPurchase = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponAmountOffSubtotalWithItemsPurchase</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponAmountOffSubtotalWithItemsPurchase
   */
  function CouponAmountOffSubtotalWithItemsPurchase() {
    _classCallCheck(this, CouponAmountOffSubtotalWithItemsPurchase);

    CouponAmountOffSubtotalWithItemsPurchase.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponAmountOffSubtotalWithItemsPurchase, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponAmountOffSubtotalWithItemsPurchase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponAmountOffSubtotalWithItemsPurchase} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponAmountOffSubtotalWithItemsPurchase} The populated <code>CouponAmountOffSubtotalWithItemsPurchase</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponAmountOffSubtotalWithItemsPurchase();

        if (data.hasOwnProperty('currency_code')) {
          obj['currency_code'] = _ApiClient["default"].convertToType(data['currency_code'], 'String');
        }

        if (data.hasOwnProperty('discount_amount')) {
          obj['discount_amount'] = _ApiClient["default"].convertToType(data['discount_amount'], 'Number');
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], ['String']);
        }

        if (data.hasOwnProperty('required_purchase_quantity')) {
          obj['required_purchase_quantity'] = _ApiClient["default"].convertToType(data['required_purchase_quantity'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CouponAmountOffSubtotalWithItemsPurchase;
}();
/**
 * The ISO-4217 three letter currency code the customer is viewing prices in
 * @member {String} currency_code
 */


CouponAmountOffSubtotalWithItemsPurchase.prototype['currency_code'] = undefined;
/**
 * The amount of shipping discount
 * @member {Number} discount_amount
 */

CouponAmountOffSubtotalWithItemsPurchase.prototype['discount_amount'] = undefined;
/**
 * A list of items of which a quantity of one or many must be purchased for coupon to be valid.
 * @member {Array.<String>} items
 */

CouponAmountOffSubtotalWithItemsPurchase.prototype['items'] = undefined;
/**
 * The quantity of items that must be purchased for the discount to be applied.
 * @member {Number} required_purchase_quantity
 */

CouponAmountOffSubtotalWithItemsPurchase.prototype['required_purchase_quantity'] = undefined;
var _default = CouponAmountOffSubtotalWithItemsPurchase;
exports["default"] = _default;