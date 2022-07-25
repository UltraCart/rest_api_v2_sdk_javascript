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
 * The CouponFreeItemAndShippingWithSubtotal model module.
 * @module com.ultracart.admin.v2.models/CouponFreeItemAndShippingWithSubtotal
 * @version 4.0.40-RC
 */
var CouponFreeItemAndShippingWithSubtotal = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponFreeItemAndShippingWithSubtotal</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponFreeItemAndShippingWithSubtotal
   */
  function CouponFreeItemAndShippingWithSubtotal() {
    _classCallCheck(this, CouponFreeItemAndShippingWithSubtotal);

    CouponFreeItemAndShippingWithSubtotal.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponFreeItemAndShippingWithSubtotal, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponFreeItemAndShippingWithSubtotal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponFreeItemAndShippingWithSubtotal} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponFreeItemAndShippingWithSubtotal} The populated <code>CouponFreeItemAndShippingWithSubtotal</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponFreeItemAndShippingWithSubtotal();

        if (data.hasOwnProperty('currency_code')) {
          obj['currency_code'] = _ApiClient["default"].convertToType(data['currency_code'], 'String');
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], ['String']);
        }

        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient["default"].convertToType(data['limit'], 'Number');
        }

        if (data.hasOwnProperty('shipping_methods')) {
          obj['shipping_methods'] = _ApiClient["default"].convertToType(data['shipping_methods'], ['String']);
        }

        if (data.hasOwnProperty('subtotal_amount')) {
          obj['subtotal_amount'] = _ApiClient["default"].convertToType(data['subtotal_amount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CouponFreeItemAndShippingWithSubtotal;
}();
/**
 * The ISO-4217 three letter currency code the customer is viewing prices in
 * @member {String} currency_code
 */


CouponFreeItemAndShippingWithSubtotal.prototype['currency_code'] = undefined;
/**
 * A list of items that are eligible for this discount_price.
 * @member {Array.<String>} items
 */

CouponFreeItemAndShippingWithSubtotal.prototype['items'] = undefined;
/**
 * The limit of free items that may be received when purchasing multiple items
 * @member {Number} limit
 */

CouponFreeItemAndShippingWithSubtotal.prototype['limit'] = undefined;
/**
 * One or more shipping methods that may be free
 * @member {Array.<String>} shipping_methods
 */

CouponFreeItemAndShippingWithSubtotal.prototype['shipping_methods'] = undefined;
/**
 * The amount of subtotal required to receive the discount percent
 * @member {Number} subtotal_amount
 */

CouponFreeItemAndShippingWithSubtotal.prototype['subtotal_amount'] = undefined;
var _default = CouponFreeItemAndShippingWithSubtotal;
exports["default"] = _default;