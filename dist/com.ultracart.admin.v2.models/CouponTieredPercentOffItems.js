"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CouponTierQuantityPercent = _interopRequireDefault(require("./CouponTierQuantityPercent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CouponTieredPercentOffItems model module.
 * @module com.ultracart.admin.v2.models/CouponTieredPercentOffItems
 * @version 4.0.127
 */
var CouponTieredPercentOffItems = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponTieredPercentOffItems</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponTieredPercentOffItems
   */
  function CouponTieredPercentOffItems() {
    _classCallCheck(this, CouponTieredPercentOffItems);

    CouponTieredPercentOffItems.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponTieredPercentOffItems, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponTieredPercentOffItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponTieredPercentOffItems} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponTieredPercentOffItems} The populated <code>CouponTieredPercentOffItems</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponTieredPercentOffItems();

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], ['String']);
        }

        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient["default"].convertToType(data['limit'], 'Number');
        }

        if (data.hasOwnProperty('tiers')) {
          obj['tiers'] = _ApiClient["default"].convertToType(data['tiers'], [_CouponTierQuantityPercent["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CouponTieredPercentOffItems;
}();
/**
 * A list of items of which at least one must be purchased for coupon to be valid.
 * @member {Array.<String>} items
 */


CouponTieredPercentOffItems.prototype['items'] = undefined;
/**
 * The (optional) maximum quantity of discounted items.
 * @member {Number} limit
 */

CouponTieredPercentOffItems.prototype['limit'] = undefined;
/**
 * A list of discount tiers.
 * @member {Array.<module:com.ultracart.admin.v2.models/CouponTierQuantityPercent>} tiers
 */

CouponTieredPercentOffItems.prototype['tiers'] = undefined;
var _default = CouponTieredPercentOffItems;
exports["default"] = _default;