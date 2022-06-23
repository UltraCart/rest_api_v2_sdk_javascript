"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ItemRelatedItem = _interopRequireDefault(require("./ItemRelatedItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ItemRelated model module.
 * @module com.ultracart.admin.v2.models/ItemRelated
 * @version 4.0.23-RC
 */
var ItemRelated = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemRelated</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemRelated
   */
  function ItemRelated() {
    _classCallCheck(this, ItemRelated);

    ItemRelated.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemRelated, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemRelated</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemRelated} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemRelated} The populated <code>ItemRelated</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemRelated();

        if (data.hasOwnProperty('no_system_calculated_related_items')) {
          obj['no_system_calculated_related_items'] = _ApiClient["default"].convertToType(data['no_system_calculated_related_items'], 'Boolean');
        }

        if (data.hasOwnProperty('not_relatable')) {
          obj['not_relatable'] = _ApiClient["default"].convertToType(data['not_relatable'], 'Boolean');
        }

        if (data.hasOwnProperty('related_items')) {
          obj['related_items'] = _ApiClient["default"].convertToType(data['related_items'], [_ItemRelatedItem["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ItemRelated;
}();
/**
 * True to suppress system calculated relationships
 * @member {Boolean} no_system_calculated_related_items
 */


ItemRelated.prototype['no_system_calculated_related_items'] = undefined;
/**
 * Not relatable
 * @member {Boolean} not_relatable
 */

ItemRelated.prototype['not_relatable'] = undefined;
/**
 * Related items
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemRelatedItem>} related_items
 */

ItemRelated.prototype['related_items'] = undefined;
var _default = ItemRelated;
exports["default"] = _default;