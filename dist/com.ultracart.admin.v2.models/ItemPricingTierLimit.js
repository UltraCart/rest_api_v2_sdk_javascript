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
 * The ItemPricingTierLimit model module.
 * @module com.ultracart.admin.v2.models/ItemPricingTierLimit
 * @version 4.0.173
 */
var ItemPricingTierLimit = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemPricingTierLimit</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemPricingTierLimit
   */
  function ItemPricingTierLimit() {
    _classCallCheck(this, ItemPricingTierLimit);

    ItemPricingTierLimit.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemPricingTierLimit, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemPricingTierLimit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemPricingTierLimit} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemPricingTierLimit} The populated <code>ItemPricingTierLimit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemPricingTierLimit();

        if (data.hasOwnProperty('cumulative_order_limit')) {
          obj['cumulative_order_limit'] = _ApiClient["default"].convertToType(data['cumulative_order_limit'], 'Number');
        }

        if (data.hasOwnProperty('exempt_from_minimum_item_count')) {
          obj['exempt_from_minimum_item_count'] = _ApiClient["default"].convertToType(data['exempt_from_minimum_item_count'], 'Boolean');
        }

        if (data.hasOwnProperty('individual_order_limit')) {
          obj['individual_order_limit'] = _ApiClient["default"].convertToType(data['individual_order_limit'], 'Number');
        }

        if (data.hasOwnProperty('multiple_quantity')) {
          obj['multiple_quantity'] = _ApiClient["default"].convertToType(data['multiple_quantity'], 'Number');
        }

        if (data.hasOwnProperty('payment_method_validity')) {
          obj['payment_method_validity'] = _ApiClient["default"].convertToType(data['payment_method_validity'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return ItemPricingTierLimit;
}();
/**
 * Cumulative order limit
 * @member {Number} cumulative_order_limit
 */


ItemPricingTierLimit.prototype['cumulative_order_limit'] = undefined;
/**
 * Exempt from Minimum Item Count
 * @member {Boolean} exempt_from_minimum_item_count
 */

ItemPricingTierLimit.prototype['exempt_from_minimum_item_count'] = undefined;
/**
 * Individual order limit
 * @member {Number} individual_order_limit
 */

ItemPricingTierLimit.prototype['individual_order_limit'] = undefined;
/**
 * Multiple quantity
 * @member {Number} multiple_quantity
 */

ItemPricingTierLimit.prototype['multiple_quantity'] = undefined;
/**
 * Payment method validity
 * @member {Array.<String>} payment_method_validity
 */

ItemPricingTierLimit.prototype['payment_method_validity'] = undefined;
var _default = ItemPricingTierLimit;
exports["default"] = _default;