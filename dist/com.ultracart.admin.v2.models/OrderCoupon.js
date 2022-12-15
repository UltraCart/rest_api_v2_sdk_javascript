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
 * The OrderCoupon model module.
 * @module com.ultracart.admin.v2.models/OrderCoupon
 * @version 4.0.97-RC
 */
var OrderCoupon = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderCoupon</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderCoupon
   */
  function OrderCoupon() {
    _classCallCheck(this, OrderCoupon);

    OrderCoupon.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderCoupon, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderCoupon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderCoupon} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderCoupon} The populated <code>OrderCoupon</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderCoupon();

        if (data.hasOwnProperty('accounting_code')) {
          obj['accounting_code'] = _ApiClient["default"].convertToType(data['accounting_code'], 'String');
        }

        if (data.hasOwnProperty('automatically_applied')) {
          obj['automatically_applied'] = _ApiClient["default"].convertToType(data['automatically_applied'], 'Boolean');
        }

        if (data.hasOwnProperty('base_coupon_code')) {
          obj['base_coupon_code'] = _ApiClient["default"].convertToType(data['base_coupon_code'], 'String');
        }

        if (data.hasOwnProperty('coupon_code')) {
          obj['coupon_code'] = _ApiClient["default"].convertToType(data['coupon_code'], 'String');
        }

        if (data.hasOwnProperty('hdie_from_customer')) {
          obj['hdie_from_customer'] = _ApiClient["default"].convertToType(data['hdie_from_customer'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return OrderCoupon;
}();
/**
 * QuickBooks accounting code for this coupon
 * @member {String} accounting_code
 */


OrderCoupon.prototype['accounting_code'] = undefined;
/**
 * Whether or not the coupon was automatically applied to the order
 * @member {Boolean} automatically_applied
 */

OrderCoupon.prototype['automatically_applied'] = undefined;
/**
 * Coupon code configured by the merchant.  Will differ if the customer used a one time coupon code generated off this base coupon
 * @member {String} base_coupon_code
 */

OrderCoupon.prototype['base_coupon_code'] = undefined;
/**
 * Coupon code entered by the customer
 * @member {String} coupon_code
 */

OrderCoupon.prototype['coupon_code'] = undefined;
/**
 * True if this coupon is hidde from the customer
 * @member {Boolean} hdie_from_customer
 */

OrderCoupon.prototype['hdie_from_customer'] = undefined;
var _default = OrderCoupon;
exports["default"] = _default;