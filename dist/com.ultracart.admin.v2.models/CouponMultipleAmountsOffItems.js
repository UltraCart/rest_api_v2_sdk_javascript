"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CouponTierItemDiscount = _interopRequireDefault(require("./CouponTierItemDiscount"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CouponMultipleAmountsOffItems model module.
 * @module com.ultracart.admin.v2.models/CouponMultipleAmountsOffItems
 * @version 4.0.168
 */
var CouponMultipleAmountsOffItems = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponMultipleAmountsOffItems</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponMultipleAmountsOffItems
   */
  function CouponMultipleAmountsOffItems() {
    _classCallCheck(this, CouponMultipleAmountsOffItems);

    CouponMultipleAmountsOffItems.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponMultipleAmountsOffItems, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponMultipleAmountsOffItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponMultipleAmountsOffItems} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponMultipleAmountsOffItems} The populated <code>CouponMultipleAmountsOffItems</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponMultipleAmountsOffItems();

        if (data.hasOwnProperty('discounts')) {
          obj['discounts'] = _ApiClient["default"].convertToType(data['discounts'], [_CouponTierItemDiscount["default"]]);
        }

        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient["default"].convertToType(data['limit'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CouponMultipleAmountsOffItems;
}();
/**
 * A list of item discounts.
 * @member {Array.<module:com.ultracart.admin.v2.models/CouponTierItemDiscount>} discounts
 */


CouponMultipleAmountsOffItems.prototype['discounts'] = undefined;
/**
 * The (optional) maximum quantity of items that may receive a discount.
 * @member {Number} limit
 */

CouponMultipleAmountsOffItems.prototype['limit'] = undefined;
var _default = CouponMultipleAmountsOffItems;
exports["default"] = _default;