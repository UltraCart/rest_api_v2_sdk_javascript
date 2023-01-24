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
 * The CouponTierItemDiscount model module.
 * @module com.ultracart.admin.v2.models/CouponTierItemDiscount
 * @version 4.0.121-RC
 */
var CouponTierItemDiscount = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponTierItemDiscount</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponTierItemDiscount
   */
  function CouponTierItemDiscount() {
    _classCallCheck(this, CouponTierItemDiscount);

    CouponTierItemDiscount.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponTierItemDiscount, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponTierItemDiscount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponTierItemDiscount} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponTierItemDiscount} The populated <code>CouponTierItemDiscount</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponTierItemDiscount();

        if (data.hasOwnProperty('discount_amount')) {
          obj['discount_amount'] = _ApiClient["default"].convertToType(data['discount_amount'], 'Number');
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return CouponTierItemDiscount;
}();
/**
 * The amount of subtotal discount
 * @member {Number} discount_amount
 */


CouponTierItemDiscount.prototype['discount_amount'] = undefined;
/**
 * A list of items which will receive this discount.
 * @member {Array.<String>} items
 */

CouponTierItemDiscount.prototype['items'] = undefined;
var _default = CouponTierItemDiscount;
exports["default"] = _default;