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
 * The CouponPercentOffItems model module.
 * @module com.ultracart.admin.v2.models/CouponPercentOffItems
 * @version 4.0.189
 */
var CouponPercentOffItems = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponPercentOffItems</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponPercentOffItems
   */
  function CouponPercentOffItems() {
    _classCallCheck(this, CouponPercentOffItems);

    CouponPercentOffItems.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponPercentOffItems, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponPercentOffItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponPercentOffItems} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponPercentOffItems} The populated <code>CouponPercentOffItems</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponPercentOffItems();

        if (data.hasOwnProperty('discount_percent')) {
          obj['discount_percent'] = _ApiClient["default"].convertToType(data['discount_percent'], 'Number');
        }

        if (data.hasOwnProperty('excluded_item_tags')) {
          obj['excluded_item_tags'] = _ApiClient["default"].convertToType(data['excluded_item_tags'], ['String']);
        }

        if (data.hasOwnProperty('excluded_items')) {
          obj['excluded_items'] = _ApiClient["default"].convertToType(data['excluded_items'], ['String']);
        }

        if (data.hasOwnProperty('item_tags')) {
          obj['item_tags'] = _ApiClient["default"].convertToType(data['item_tags'], ['String']);
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

  return CouponPercentOffItems;
}();
/**
 * The percentage of subtotal discount
 * @member {Number} discount_percent
 */


CouponPercentOffItems.prototype['discount_percent'] = undefined;
/**
 * A list of item tags which cannot be discounted.
 * @member {Array.<String>} excluded_item_tags
 */

CouponPercentOffItems.prototype['excluded_item_tags'] = undefined;
/**
 * A list of items which cannot be discounted.
 * @member {Array.<String>} excluded_items
 */

CouponPercentOffItems.prototype['excluded_items'] = undefined;
/**
 * An optional list of item tags which will receive a discount.  If blank, discount applies to all items except excluded items.
 * @member {Array.<String>} item_tags
 */

CouponPercentOffItems.prototype['item_tags'] = undefined;
/**
 * An optional list of items which will receive a discount.  If blank, discount applies to all items except excluded items.
 * @member {Array.<String>} items
 */

CouponPercentOffItems.prototype['items'] = undefined;
/**
 * The (optional) maximum quantity of discounted items.
 * @member {Number} limit
 */

CouponPercentOffItems.prototype['limit'] = undefined;
var _default = CouponPercentOffItems;
exports["default"] = _default;