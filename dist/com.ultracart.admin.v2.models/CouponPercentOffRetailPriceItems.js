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
 * The CouponPercentOffRetailPriceItems model module.
 * @module com.ultracart.admin.v2.models/CouponPercentOffRetailPriceItems
 * @version 4.0.36-RC
 */
var CouponPercentOffRetailPriceItems = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponPercentOffRetailPriceItems</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponPercentOffRetailPriceItems
   */
  function CouponPercentOffRetailPriceItems() {
    _classCallCheck(this, CouponPercentOffRetailPriceItems);

    CouponPercentOffRetailPriceItems.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponPercentOffRetailPriceItems, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponPercentOffRetailPriceItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponPercentOffRetailPriceItems} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponPercentOffRetailPriceItems} The populated <code>CouponPercentOffRetailPriceItems</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponPercentOffRetailPriceItems();

        if (data.hasOwnProperty('discount_percent')) {
          obj['discount_percent'] = _ApiClient["default"].convertToType(data['discount_percent'], 'Number');
        }

        if (data.hasOwnProperty('excluded_items')) {
          obj['excluded_items'] = _ApiClient["default"].convertToType(data['excluded_items'], ['String']);
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], ['String']);
        }

        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient["default"].convertToType(data['limit'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CouponPercentOffRetailPriceItems;
}();
/**
 * The percentage of subtotal discount
 * @member {Number} discount_percent
 */


CouponPercentOffRetailPriceItems.prototype['discount_percent'] = undefined;
/**
 * A list of items which cannot be discounted.
 * @member {Array.<String>} excluded_items
 */

CouponPercentOffRetailPriceItems.prototype['excluded_items'] = undefined;
/**
 * An optional list of items which will receive a discount.  If blank, discount applies to all items except excluded items.
 * @member {Array.<String>} items
 */

CouponPercentOffRetailPriceItems.prototype['items'] = undefined;
/**
 * The (optional) maximum quantity of discounted items.
 * @member {Number} limit
 */

CouponPercentOffRetailPriceItems.prototype['limit'] = undefined;
var _default = CouponPercentOffRetailPriceItems;
exports["default"] = _default;