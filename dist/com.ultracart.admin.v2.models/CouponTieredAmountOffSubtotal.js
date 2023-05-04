"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CouponTierAmount = _interopRequireDefault(require("./CouponTierAmount"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CouponTieredAmountOffSubtotal model module.
 * @module com.ultracart.admin.v2.models/CouponTieredAmountOffSubtotal
 * @version 4.0.153
 */
var CouponTieredAmountOffSubtotal = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponTieredAmountOffSubtotal</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponTieredAmountOffSubtotal
   */
  function CouponTieredAmountOffSubtotal() {
    _classCallCheck(this, CouponTieredAmountOffSubtotal);

    CouponTieredAmountOffSubtotal.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponTieredAmountOffSubtotal, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponTieredAmountOffSubtotal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponTieredAmountOffSubtotal} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponTieredAmountOffSubtotal} The populated <code>CouponTieredAmountOffSubtotal</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponTieredAmountOffSubtotal();

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], ['String']);
        }

        if (data.hasOwnProperty('tiers')) {
          obj['tiers'] = _ApiClient["default"].convertToType(data['tiers'], [_CouponTierAmount["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CouponTieredAmountOffSubtotal;
}();
/**
 * An optional list of items of which a quantity of one or many must be purchased for coupon to be valid.  If empty, all items apply toward subtotal amount.
 * @member {Array.<String>} items
 */


CouponTieredAmountOffSubtotal.prototype['items'] = undefined;
/**
 * A list of discount tiers.
 * @member {Array.<module:com.ultracart.admin.v2.models/CouponTierAmount>} tiers
 */

CouponTieredAmountOffSubtotal.prototype['tiers'] = undefined;
var _default = CouponTieredAmountOffSubtotal;
exports["default"] = _default;