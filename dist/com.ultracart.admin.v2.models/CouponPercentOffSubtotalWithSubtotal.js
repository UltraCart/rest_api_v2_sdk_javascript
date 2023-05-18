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
 * The CouponPercentOffSubtotalWithSubtotal model module.
 * @module com.ultracart.admin.v2.models/CouponPercentOffSubtotalWithSubtotal
 * @version 4.0.154
 */
var CouponPercentOffSubtotalWithSubtotal = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponPercentOffSubtotalWithSubtotal</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponPercentOffSubtotalWithSubtotal
   */
  function CouponPercentOffSubtotalWithSubtotal() {
    _classCallCheck(this, CouponPercentOffSubtotalWithSubtotal);

    CouponPercentOffSubtotalWithSubtotal.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponPercentOffSubtotalWithSubtotal, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponPercentOffSubtotalWithSubtotal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponPercentOffSubtotalWithSubtotal} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponPercentOffSubtotalWithSubtotal} The populated <code>CouponPercentOffSubtotalWithSubtotal</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponPercentOffSubtotalWithSubtotal();

        if (data.hasOwnProperty('currency_code')) {
          obj['currency_code'] = _ApiClient["default"].convertToType(data['currency_code'], 'String');
        }

        if (data.hasOwnProperty('discount_percent')) {
          obj['discount_percent'] = _ApiClient["default"].convertToType(data['discount_percent'], 'Number');
        }

        if (data.hasOwnProperty('subtotal_amount')) {
          obj['subtotal_amount'] = _ApiClient["default"].convertToType(data['subtotal_amount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CouponPercentOffSubtotalWithSubtotal;
}();
/**
 * The ISO-4217 three letter currency code the customer is viewing prices in
 * @member {String} currency_code
 */


CouponPercentOffSubtotalWithSubtotal.prototype['currency_code'] = undefined;
/**
 * The percentage of subtotal discount
 * @member {Number} discount_percent
 */

CouponPercentOffSubtotalWithSubtotal.prototype['discount_percent'] = undefined;
/**
 * The amount of subtotal required to receive the discount percent
 * @member {Number} subtotal_amount
 */

CouponPercentOffSubtotalWithSubtotal.prototype['subtotal_amount'] = undefined;
var _default = CouponPercentOffSubtotalWithSubtotal;
exports["default"] = _default;