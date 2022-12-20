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
 * The ItemOptionValueAdditionalItem model module.
 * @module com.ultracart.admin.v2.models/ItemOptionValueAdditionalItem
 * @version 4.0.100-RC
 */
var ItemOptionValueAdditionalItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemOptionValueAdditionalItem</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemOptionValueAdditionalItem
   */
  function ItemOptionValueAdditionalItem() {
    _classCallCheck(this, ItemOptionValueAdditionalItem);

    ItemOptionValueAdditionalItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemOptionValueAdditionalItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemOptionValueAdditionalItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemOptionValueAdditionalItem} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemOptionValueAdditionalItem} The populated <code>ItemOptionValueAdditionalItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemOptionValueAdditionalItem();

        if (data.hasOwnProperty('additional_merchant_item_id')) {
          obj['additional_merchant_item_id'] = _ApiClient["default"].convertToType(data['additional_merchant_item_id'], 'String');
        }

        if (data.hasOwnProperty('additional_merchant_item_oid')) {
          obj['additional_merchant_item_oid'] = _ApiClient["default"].convertToType(data['additional_merchant_item_oid'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ItemOptionValueAdditionalItem;
}();
/**
 * Additional item id
 * @member {String} additional_merchant_item_id
 */


ItemOptionValueAdditionalItem.prototype['additional_merchant_item_id'] = undefined;
/**
 * Additional item object identifier
 * @member {Number} additional_merchant_item_oid
 */

ItemOptionValueAdditionalItem.prototype['additional_merchant_item_oid'] = undefined;
var _default = ItemOptionValueAdditionalItem;
exports["default"] = _default;