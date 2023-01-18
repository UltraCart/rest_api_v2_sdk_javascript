"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ItemPricingTierDiscount = _interopRequireDefault(require("./ItemPricingTierDiscount"));

var _ItemPricingTierLimit = _interopRequireDefault(require("./ItemPricingTierLimit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ItemPricingTier model module.
 * @module com.ultracart.admin.v2.models/ItemPricingTier
 * @version 4.0.116-RC
 */
var ItemPricingTier = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemPricingTier</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemPricingTier
   */
  function ItemPricingTier() {
    _classCallCheck(this, ItemPricingTier);

    ItemPricingTier.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemPricingTier, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemPricingTier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemPricingTier} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemPricingTier} The populated <code>ItemPricingTier</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemPricingTier();

        if (data.hasOwnProperty('default_tier')) {
          obj['default_tier'] = _ApiClient["default"].convertToType(data['default_tier'], 'Boolean');
        }

        if (data.hasOwnProperty('discounts')) {
          obj['discounts'] = _ApiClient["default"].convertToType(data['discounts'], [_ItemPricingTierDiscount["default"]]);
        }

        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ItemPricingTierLimit["default"].constructFromObject(data['limit']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('pricing_tier_oid')) {
          obj['pricing_tier_oid'] = _ApiClient["default"].convertToType(data['pricing_tier_oid'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ItemPricingTier;
}();
/**
 * True if this is the default tier
 * @member {Boolean} default_tier
 */


ItemPricingTier.prototype['default_tier'] = undefined;
/**
 * Discounts
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemPricingTierDiscount>} discounts
 */

ItemPricingTier.prototype['discounts'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ItemPricingTierLimit} limit
 */

ItemPricingTier.prototype['limit'] = undefined;
/**
 * Pricing tier name
 * @member {String} name
 */

ItemPricingTier.prototype['name'] = undefined;
/**
 * Pricing tier object identifier
 * @member {Number} pricing_tier_oid
 */

ItemPricingTier.prototype['pricing_tier_oid'] = undefined;
var _default = ItemPricingTier;
exports["default"] = _default;