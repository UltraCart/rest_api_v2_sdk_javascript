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
 * The CouponPercentOffMsrpItems model module.
 * @module com.ultracart.admin.v2.models/CouponPercentOffMsrpItems
 * @version 4.0.167
 */
var CouponPercentOffMsrpItems = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponPercentOffMsrpItems</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponPercentOffMsrpItems
   */
  function CouponPercentOffMsrpItems() {
    _classCallCheck(this, CouponPercentOffMsrpItems);

    CouponPercentOffMsrpItems.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponPercentOffMsrpItems, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponPercentOffMsrpItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponPercentOffMsrpItems} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponPercentOffMsrpItems} The populated <code>CouponPercentOffMsrpItems</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponPercentOffMsrpItems();

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

        if (data.hasOwnProperty('minimum_cumulative_msrp')) {
          obj['minimum_cumulative_msrp'] = _ApiClient["default"].convertToType(data['minimum_cumulative_msrp'], 'Number');
        }

        if (data.hasOwnProperty('minimum_subtotal')) {
          obj['minimum_subtotal'] = _ApiClient["default"].convertToType(data['minimum_subtotal'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CouponPercentOffMsrpItems;
}();
/**
 * The percentage of subtotal discount
 * @member {Number} discount_percent
 */


CouponPercentOffMsrpItems.prototype['discount_percent'] = undefined;
/**
 * A list of items which cannot be discounted.
 * @member {Array.<String>} excluded_items
 */

CouponPercentOffMsrpItems.prototype['excluded_items'] = undefined;
/**
 * An list of items which will receive a discount.
 * @member {Array.<String>} items
 */

CouponPercentOffMsrpItems.prototype['items'] = undefined;
/**
 * The (optional) maximum quantity of discounted items.
 * @member {Number} limit
 */

CouponPercentOffMsrpItems.prototype['limit'] = undefined;
/**
 * The (optional) minimum cumulative msrp of qualifying items.
 * @member {Number} minimum_cumulative_msrp
 */

CouponPercentOffMsrpItems.prototype['minimum_cumulative_msrp'] = undefined;
/**
 * The (optional) minimum subtotal of qualifying items.
 * @member {Number} minimum_subtotal
 */

CouponPercentOffMsrpItems.prototype['minimum_subtotal'] = undefined;
var _default = CouponPercentOffMsrpItems;
exports["default"] = _default;