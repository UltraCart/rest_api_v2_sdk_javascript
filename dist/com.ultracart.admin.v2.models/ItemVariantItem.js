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
 * The ItemVariantItem model module.
 * @module com.ultracart.admin.v2.models/ItemVariantItem
 * @version 4.0.156
 */
var ItemVariantItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemVariantItem</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemVariantItem
   */
  function ItemVariantItem() {
    _classCallCheck(this, ItemVariantItem);

    ItemVariantItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemVariantItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemVariantItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemVariantItem} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemVariantItem} The populated <code>ItemVariantItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemVariantItem();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('merchant_item_multimedia_oid')) {
          obj['merchant_item_multimedia_oid'] = _ApiClient["default"].convertToType(data['merchant_item_multimedia_oid'], 'Number');
        }

        if (data.hasOwnProperty('variant_merchant_item_id')) {
          obj['variant_merchant_item_id'] = _ApiClient["default"].convertToType(data['variant_merchant_item_id'], 'String');
        }

        if (data.hasOwnProperty('variant_merchant_item_oid')) {
          obj['variant_merchant_item_oid'] = _ApiClient["default"].convertToType(data['variant_merchant_item_oid'], 'Number');
        }

        if (data.hasOwnProperty('variation_options')) {
          obj['variation_options'] = _ApiClient["default"].convertToType(data['variation_options'], ['String']);
        }

        if (data.hasOwnProperty('variations')) {
          obj['variations'] = _ApiClient["default"].convertToType(data['variations'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return ItemVariantItem;
}();
/**
 * Description
 * @member {String} description
 */


ItemVariantItem.prototype['description'] = undefined;
/**
 * Multimedia object identifier
 * @member {Number} merchant_item_multimedia_oid
 */

ItemVariantItem.prototype['merchant_item_multimedia_oid'] = undefined;
/**
 * Variant item id
 * @member {String} variant_merchant_item_id
 */

ItemVariantItem.prototype['variant_merchant_item_id'] = undefined;
/**
 * Variant item object identifier
 * @member {Number} variant_merchant_item_oid
 */

ItemVariantItem.prototype['variant_merchant_item_oid'] = undefined;
/**
 * Variation options
 * @member {Array.<String>} variation_options
 */

ItemVariantItem.prototype['variation_options'] = undefined;
/**
 * Variations
 * @member {Array.<String>} variations
 */

ItemVariantItem.prototype['variations'] = undefined;
var _default = ItemVariantItem;
exports["default"] = _default;