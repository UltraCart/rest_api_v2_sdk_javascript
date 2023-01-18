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
 * The CouponPercentOffShipping model module.
 * @module com.ultracart.admin.v2.models/CouponPercentOffShipping
 * @version 4.0.115-RC
 */
var CouponPercentOffShipping = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponPercentOffShipping</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponPercentOffShipping
   */
  function CouponPercentOffShipping() {
    _classCallCheck(this, CouponPercentOffShipping);

    CouponPercentOffShipping.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponPercentOffShipping, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponPercentOffShipping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponPercentOffShipping} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponPercentOffShipping} The populated <code>CouponPercentOffShipping</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponPercentOffShipping();

        if (data.hasOwnProperty('discount_percent')) {
          obj['discount_percent'] = _ApiClient["default"].convertToType(data['discount_percent'], 'Number');
        }

        if (data.hasOwnProperty('shipping_methods')) {
          obj['shipping_methods'] = _ApiClient["default"].convertToType(data['shipping_methods'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return CouponPercentOffShipping;
}();
/**
 * The percentage of subtotal discount
 * @member {Number} discount_percent
 */


CouponPercentOffShipping.prototype['discount_percent'] = undefined;
/**
 * One or more shipping methods that may be used with this coupon
 * @member {Array.<String>} shipping_methods
 */

CouponPercentOffShipping.prototype['shipping_methods'] = undefined;
var _default = CouponPercentOffShipping;
exports["default"] = _default;