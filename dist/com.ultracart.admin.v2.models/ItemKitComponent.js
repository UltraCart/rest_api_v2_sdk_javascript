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
 * The ItemKitComponent model module.
 * @module com.ultracart.admin.v2.models/ItemKitComponent
 * @version 4.0.152
 */
var ItemKitComponent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemKitComponent</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemKitComponent
   */
  function ItemKitComponent() {
    _classCallCheck(this, ItemKitComponent);

    ItemKitComponent.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemKitComponent, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemKitComponent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemKitComponent} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemKitComponent} The populated <code>ItemKitComponent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemKitComponent();

        if (data.hasOwnProperty('component_cost')) {
          obj['component_cost'] = _ApiClient["default"].convertToType(data['component_cost'], 'Number');
        }

        if (data.hasOwnProperty('component_description')) {
          obj['component_description'] = _ApiClient["default"].convertToType(data['component_description'], 'String');
        }

        if (data.hasOwnProperty('component_merchant_item_id')) {
          obj['component_merchant_item_id'] = _ApiClient["default"].convertToType(data['component_merchant_item_id'], 'String');
        }

        if (data.hasOwnProperty('component_merchant_item_oid')) {
          obj['component_merchant_item_oid'] = _ApiClient["default"].convertToType(data['component_merchant_item_oid'], 'Number');
        }

        if (data.hasOwnProperty('quantity')) {
          obj['quantity'] = _ApiClient["default"].convertToType(data['quantity'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ItemKitComponent;
}();
/**
 * Component item cost
 * @member {Number} component_cost
 */


ItemKitComponent.prototype['component_cost'] = undefined;
/**
 * Component item description
 * @member {String} component_description
 */

ItemKitComponent.prototype['component_description'] = undefined;
/**
 * Component item ID
 * @member {String} component_merchant_item_id
 */

ItemKitComponent.prototype['component_merchant_item_id'] = undefined;
/**
 * Component item object identifier
 * @member {Number} component_merchant_item_oid
 */

ItemKitComponent.prototype['component_merchant_item_oid'] = undefined;
/**
 * Quantity
 * @member {Number} quantity
 */

ItemKitComponent.prototype['quantity'] = undefined;
var _default = ItemKitComponent;
exports["default"] = _default;