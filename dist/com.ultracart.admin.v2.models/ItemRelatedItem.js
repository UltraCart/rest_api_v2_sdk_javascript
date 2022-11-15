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
 * The ItemRelatedItem model module.
 * @module com.ultracart.admin.v2.models/ItemRelatedItem
 * @version 4.0.82-RC
 */
var ItemRelatedItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemRelatedItem</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemRelatedItem
   */
  function ItemRelatedItem() {
    _classCallCheck(this, ItemRelatedItem);

    ItemRelatedItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemRelatedItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemRelatedItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemRelatedItem} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemRelatedItem} The populated <code>ItemRelatedItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemRelatedItem();

        if (data.hasOwnProperty('related_merchant_item_id')) {
          obj['related_merchant_item_id'] = _ApiClient["default"].convertToType(data['related_merchant_item_id'], 'String');
        }

        if (data.hasOwnProperty('related_merchant_item_oid')) {
          obj['related_merchant_item_oid'] = _ApiClient["default"].convertToType(data['related_merchant_item_oid'], 'Number');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ItemRelatedItem;
}();
/**
 * Related item id
 * @member {String} related_merchant_item_id
 */


ItemRelatedItem.prototype['related_merchant_item_id'] = undefined;
/**
 * Related item object identifier
 * @member {Number} related_merchant_item_oid
 */

ItemRelatedItem.prototype['related_merchant_item_oid'] = undefined;
/**
 * Relationship type
 * @member {module:com.ultracart.admin.v2.models/ItemRelatedItem.TypeEnum} type
 */

ItemRelatedItem.prototype['type'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

ItemRelatedItem['TypeEnum'] = {
  /**
   * value: "System"
   * @const
   */
  "System": "System",

  /**
   * value: "UserDefined"
   * @const
   */
  "UserDefined": "UserDefined"
};
var _default = ItemRelatedItem;
exports["default"] = _default;