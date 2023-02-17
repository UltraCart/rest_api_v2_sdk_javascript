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
 * The CouponDiscountItems model module.
 * @module com.ultracart.admin.v2.models/CouponDiscountItems
 * @version 4.0.134
 */
var CouponDiscountItems = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponDiscountItems</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponDiscountItems
   */
  function CouponDiscountItems() {
    _classCallCheck(this, CouponDiscountItems);

    CouponDiscountItems.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponDiscountItems, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponDiscountItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponDiscountItems} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponDiscountItems} The populated <code>CouponDiscountItems</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponDiscountItems();

        if (data.hasOwnProperty('currency_code')) {
          obj['currency_code'] = _ApiClient["default"].convertToType(data['currency_code'], 'String');
        }

        if (data.hasOwnProperty('discount_price')) {
          obj['discount_price'] = _ApiClient["default"].convertToType(data['discount_price'], 'Number');
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

  return CouponDiscountItems;
}();
/**
 * The ISO-4217 three letter currency code the customer is viewing prices in
 * @member {String} currency_code
 */


CouponDiscountItems.prototype['currency_code'] = undefined;
/**
 * The price (unit cost) of the discounted item
 * @member {Number} discount_price
 */

CouponDiscountItems.prototype['discount_price'] = undefined;
/**
 * A list of items that are eligible for this discount_price.
 * @member {Array.<String>} items
 */

CouponDiscountItems.prototype['items'] = undefined;
/**
 * The (optional) maximum quantity of discounted items.
 * @member {Number} limit
 */

CouponDiscountItems.prototype['limit'] = undefined;
var _default = CouponDiscountItems;
exports["default"] = _default;