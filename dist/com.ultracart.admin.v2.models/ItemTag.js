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
 * The ItemTag model module.
 * @module com.ultracart.admin.v2.models/ItemTag
 * @version 4.0.83-RC
 */
var ItemTag = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemTag</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemTag
   */
  function ItemTag() {
    _classCallCheck(this, ItemTag);

    ItemTag.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemTag, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemTag</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemTag} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemTag} The populated <code>ItemTag</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemTag();

        if (data.hasOwnProperty('tagType')) {
          obj['tagType'] = _ApiClient["default"].convertToType(data['tagType'], 'String');
        }

        if (data.hasOwnProperty('tagValue')) {
          obj['tagValue'] = _ApiClient["default"].convertToType(data['tagValue'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ItemTag;
}();
/**
 * tag_tpe
 * @member {module:com.ultracart.admin.v2.models/ItemTag.TagTypeEnum} tagType
 */


ItemTag.prototype['tagType'] = undefined;
/**
 * tag_value
 * @member {String} tagValue
 */

ItemTag.prototype['tagValue'] = undefined;
/**
 * Allowed values for the <code>tagType</code> property.
 * @enum {String}
 * @readonly
 */

ItemTag['TagTypeEnum'] = {
  /**
   * value: "item"
   * @const
   */
  "item": "item",

  /**
   * value: "order"
   * @const
   */
  "order": "order",

  /**
   * value: "customer"
   * @const
   */
  "customer": "customer"
};
var _default = ItemTag;
exports["default"] = _default;