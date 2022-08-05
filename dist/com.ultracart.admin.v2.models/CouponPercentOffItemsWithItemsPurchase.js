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
 * The CouponPercentOffItemsWithItemsPurchase model module.
 * @module com.ultracart.admin.v2.models/CouponPercentOffItemsWithItemsPurchase
 * @version 4.0.50-RC
 */
var CouponPercentOffItemsWithItemsPurchase = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponPercentOffItemsWithItemsPurchase</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponPercentOffItemsWithItemsPurchase
   */
  function CouponPercentOffItemsWithItemsPurchase() {
    _classCallCheck(this, CouponPercentOffItemsWithItemsPurchase);

    CouponPercentOffItemsWithItemsPurchase.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponPercentOffItemsWithItemsPurchase, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponPercentOffItemsWithItemsPurchase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponPercentOffItemsWithItemsPurchase} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponPercentOffItemsWithItemsPurchase} The populated <code>CouponPercentOffItemsWithItemsPurchase</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponPercentOffItemsWithItemsPurchase();

        if (data.hasOwnProperty('discount_percent')) {
          obj['discount_percent'] = _ApiClient["default"].convertToType(data['discount_percent'], 'Number');
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], ['String']);
        }

        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient["default"].convertToType(data['limit'], 'Number');
        }

        if (data.hasOwnProperty('required_purchase_items')) {
          obj['required_purchase_items'] = _ApiClient["default"].convertToType(data['required_purchase_items'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return CouponPercentOffItemsWithItemsPurchase;
}();
/**
 * The percentage of subtotal discount
 * @member {Number} discount_percent
 */


CouponPercentOffItemsWithItemsPurchase.prototype['discount_percent'] = undefined;
/**
 * A list of items which will receive a discount if one of the required purchase items is purchased.
 * @member {Array.<String>} items
 */

CouponPercentOffItemsWithItemsPurchase.prototype['items'] = undefined;
/**
 * The (optional) maximum quantity of discounted items.
 * @member {Number} limit
 */

CouponPercentOffItemsWithItemsPurchase.prototype['limit'] = undefined;
/**
 * Required items (at least one from the list) that must be purchased for coupon to be valid
 * @member {Array.<String>} required_purchase_items
 */

CouponPercentOffItemsWithItemsPurchase.prototype['required_purchase_items'] = undefined;
var _default = CouponPercentOffItemsWithItemsPurchase;
exports["default"] = _default;