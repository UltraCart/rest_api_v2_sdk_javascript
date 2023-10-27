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
 * The ItemOptionValueDigitalItem model module.
 * @module com.ultracart.admin.v2.models/ItemOptionValueDigitalItem
 * @version 4.0.182
 */
var ItemOptionValueDigitalItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemOptionValueDigitalItem</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemOptionValueDigitalItem
   */
  function ItemOptionValueDigitalItem() {
    _classCallCheck(this, ItemOptionValueDigitalItem);

    ItemOptionValueDigitalItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemOptionValueDigitalItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemOptionValueDigitalItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemOptionValueDigitalItem} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemOptionValueDigitalItem} The populated <code>ItemOptionValueDigitalItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemOptionValueDigitalItem();

        if (data.hasOwnProperty('digital_item_oid')) {
          obj['digital_item_oid'] = _ApiClient["default"].convertToType(data['digital_item_oid'], 'Number');
        }

        if (data.hasOwnProperty('original_filename')) {
          obj['original_filename'] = _ApiClient["default"].convertToType(data['original_filename'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ItemOptionValueDigitalItem;
}();
/**
 * Digital item object identifier
 * @member {Number} digital_item_oid
 */


ItemOptionValueDigitalItem.prototype['digital_item_oid'] = undefined;
/**
 * Original filename
 * @member {String} original_filename
 */

ItemOptionValueDigitalItem.prototype['original_filename'] = undefined;
var _default = ItemOptionValueDigitalItem;
exports["default"] = _default;