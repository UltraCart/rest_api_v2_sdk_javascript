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
 * The ItemRestrictionItem model module.
 * @module com.ultracart.admin.v2.models/ItemRestrictionItem
 * @version 4.0.163
 */
var ItemRestrictionItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemRestrictionItem</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemRestrictionItem
   */
  function ItemRestrictionItem() {
    _classCallCheck(this, ItemRestrictionItem);

    ItemRestrictionItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemRestrictionItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemRestrictionItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemRestrictionItem} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemRestrictionItem} The populated <code>ItemRestrictionItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemRestrictionItem();

        if (data.hasOwnProperty('restrict_merchant_item_id')) {
          obj['restrict_merchant_item_id'] = _ApiClient["default"].convertToType(data['restrict_merchant_item_id'], 'String');
        }

        if (data.hasOwnProperty('restrict_merchant_item_oid')) {
          obj['restrict_merchant_item_oid'] = _ApiClient["default"].convertToType(data['restrict_merchant_item_oid'], 'Number');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ItemRestrictionItem;
}();
/**
 * Restrict item id
 * @member {String} restrict_merchant_item_id
 */


ItemRestrictionItem.prototype['restrict_merchant_item_id'] = undefined;
/**
 * Restrict item object identifier
 * @member {Number} restrict_merchant_item_oid
 */

ItemRestrictionItem.prototype['restrict_merchant_item_oid'] = undefined;
/**
 * Restriction type
 * @member {module:com.ultracart.admin.v2.models/ItemRestrictionItem.TypeEnum} type
 */

ItemRestrictionItem.prototype['type'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

ItemRestrictionItem['TypeEnum'] = {
  /**
   * value: "can not be purchased with"
   * @const
   */
  "can not be purchased with": "can not be purchased with",

  /**
   * value: "can only be purchased with"
   * @const
   */
  "can only be purchased with": "can only be purchased with",

  /**
   * value: "must be purchased with"
   * @const
   */
  "must be purchased with": "must be purchased with"
};
var _default = ItemRestrictionItem;
exports["default"] = _default;