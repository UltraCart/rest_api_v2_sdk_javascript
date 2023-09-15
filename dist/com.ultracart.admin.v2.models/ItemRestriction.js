"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ItemRestrictionItem = _interopRequireDefault(require("./ItemRestrictionItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ItemRestriction model module.
 * @module com.ultracart.admin.v2.models/ItemRestriction
 * @version 4.0.176
 */
var ItemRestriction = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemRestriction</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemRestriction
   */
  function ItemRestriction() {
    _classCallCheck(this, ItemRestriction);

    ItemRestriction.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemRestriction, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemRestriction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemRestriction} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemRestriction} The populated <code>ItemRestriction</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemRestriction();

        if (data.hasOwnProperty('exclude_coupon')) {
          obj['exclude_coupon'] = _ApiClient["default"].convertToType(data['exclude_coupon'], 'Boolean');
        }

        if (data.hasOwnProperty('exclude_from_free_promotion')) {
          obj['exclude_from_free_promotion'] = _ApiClient["default"].convertToType(data['exclude_from_free_promotion'], 'Boolean');
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_ItemRestrictionItem["default"]]);
        }

        if (data.hasOwnProperty('maximum_quantity')) {
          obj['maximum_quantity'] = _ApiClient["default"].convertToType(data['maximum_quantity'], 'Number');
        }

        if (data.hasOwnProperty('minimum_quantity')) {
          obj['minimum_quantity'] = _ApiClient["default"].convertToType(data['minimum_quantity'], 'Number');
        }

        if (data.hasOwnProperty('multiple_quantity')) {
          obj['multiple_quantity'] = _ApiClient["default"].convertToType(data['multiple_quantity'], 'Number');
        }

        if (data.hasOwnProperty('one_per_customer')) {
          obj['one_per_customer'] = _ApiClient["default"].convertToType(data['one_per_customer'], 'Boolean');
        }

        if (data.hasOwnProperty('purchase_separately')) {
          obj['purchase_separately'] = _ApiClient["default"].convertToType(data['purchase_separately'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ItemRestriction;
}();
/**
 * Exclude coupons
 * @member {Boolean} exclude_coupon
 */


ItemRestriction.prototype['exclude_coupon'] = undefined;
/**
 * Exclude from free promotion
 * @member {Boolean} exclude_from_free_promotion
 */

ItemRestriction.prototype['exclude_from_free_promotion'] = undefined;
/**
 * Items
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemRestrictionItem>} items
 */

ItemRestriction.prototype['items'] = undefined;
/**
 * Maximum quantity
 * @member {Number} maximum_quantity
 */

ItemRestriction.prototype['maximum_quantity'] = undefined;
/**
 * Minimum quantity (defaults to 1)
 * @member {Number} minimum_quantity
 */

ItemRestriction.prototype['minimum_quantity'] = undefined;
/**
 * Multiple of quantity
 * @member {Number} multiple_quantity
 */

ItemRestriction.prototype['multiple_quantity'] = undefined;
/**
 * One per customer
 * @member {Boolean} one_per_customer
 */

ItemRestriction.prototype['one_per_customer'] = undefined;
/**
 * Purchase separately
 * @member {Boolean} purchase_separately
 */

ItemRestriction.prototype['purchase_separately'] = undefined;
var _default = ItemRestriction;
exports["default"] = _default;