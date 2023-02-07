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
 * The ItemFulfillmentAddon model module.
 * @module com.ultracart.admin.v2.models/ItemFulfillmentAddon
 * @version 4.0.130
 */
var ItemFulfillmentAddon = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemFulfillmentAddon</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemFulfillmentAddon
   */
  function ItemFulfillmentAddon() {
    _classCallCheck(this, ItemFulfillmentAddon);

    ItemFulfillmentAddon.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemFulfillmentAddon, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemFulfillmentAddon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemFulfillmentAddon} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemFulfillmentAddon} The populated <code>ItemFulfillmentAddon</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemFulfillmentAddon();

        if (data.hasOwnProperty('add_item_id')) {
          obj['add_item_id'] = _ApiClient["default"].convertToType(data['add_item_id'], 'String');
        }

        if (data.hasOwnProperty('add_item_oid')) {
          obj['add_item_oid'] = _ApiClient["default"].convertToType(data['add_item_oid'], 'Number');
        }

        if (data.hasOwnProperty('initial_order_only')) {
          obj['initial_order_only'] = _ApiClient["default"].convertToType(data['initial_order_only'], 'Boolean');
        }

        if (data.hasOwnProperty('once_per_order')) {
          obj['once_per_order'] = _ApiClient["default"].convertToType(data['once_per_order'], 'Boolean');
        }

        if (data.hasOwnProperty('quantity')) {
          obj['quantity'] = _ApiClient["default"].convertToType(data['quantity'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ItemFulfillmentAddon;
}();
/**
 * Add Item Id
 * @member {String} add_item_id
 */


ItemFulfillmentAddon.prototype['add_item_id'] = undefined;
/**
 * Add Item object identifier
 * @member {Number} add_item_oid
 */

ItemFulfillmentAddon.prototype['add_item_oid'] = undefined;
/**
 * Initial Order Only
 * @member {Boolean} initial_order_only
 */

ItemFulfillmentAddon.prototype['initial_order_only'] = undefined;
/**
 * Once Per Order
 * @member {Boolean} once_per_order
 */

ItemFulfillmentAddon.prototype['once_per_order'] = undefined;
/**
 * Quantity
 * @member {Number} quantity
 */

ItemFulfillmentAddon.prototype['quantity'] = undefined;
var _default = ItemFulfillmentAddon;
exports["default"] = _default;