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
 * The ItemShippingDistributionCenter model module.
 * @module com.ultracart.admin.v2.models/ItemShippingDistributionCenter
 * @version 4.0.169
 */
var ItemShippingDistributionCenter = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemShippingDistributionCenter</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemShippingDistributionCenter
   */
  function ItemShippingDistributionCenter() {
    _classCallCheck(this, ItemShippingDistributionCenter);

    ItemShippingDistributionCenter.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemShippingDistributionCenter, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemShippingDistributionCenter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemShippingDistributionCenter} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemShippingDistributionCenter} The populated <code>ItemShippingDistributionCenter</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemShippingDistributionCenter();

        if (data.hasOwnProperty('allocated_to_placed_orders')) {
          obj['allocated_to_placed_orders'] = _ApiClient["default"].convertToType(data['allocated_to_placed_orders'], 'Number');
        }

        if (data.hasOwnProperty('allocated_to_shopping_carts')) {
          obj['allocated_to_shopping_carts'] = _ApiClient["default"].convertToType(data['allocated_to_shopping_carts'], 'Number');
        }

        if (data.hasOwnProperty('available_to_allocate')) {
          obj['available_to_allocate'] = _ApiClient["default"].convertToType(data['available_to_allocate'], 'Number');
        }

        if (data.hasOwnProperty('cogs')) {
          obj['cogs'] = _ApiClient["default"].convertToType(data['cogs'], 'Number');
        }

        if (data.hasOwnProperty('desired_inventory_level')) {
          obj['desired_inventory_level'] = _ApiClient["default"].convertToType(data['desired_inventory_level'], 'Number');
        }

        if (data.hasOwnProperty('distribution_center_code')) {
          obj['distribution_center_code'] = _ApiClient["default"].convertToType(data['distribution_center_code'], 'String');
        }

        if (data.hasOwnProperty('distribution_center_oid')) {
          obj['distribution_center_oid'] = _ApiClient["default"].convertToType(data['distribution_center_oid'], 'Number');
        }

        if (data.hasOwnProperty('eta')) {
          obj['eta'] = _ApiClient["default"].convertToType(data['eta'], 'String');
        }

        if (data.hasOwnProperty('handles')) {
          obj['handles'] = _ApiClient["default"].convertToType(data['handles'], 'Boolean');
        }

        if (data.hasOwnProperty('inventory_level')) {
          obj['inventory_level'] = _ApiClient["default"].convertToType(data['inventory_level'], 'Number');
        }

        if (data.hasOwnProperty('maximum_backorder')) {
          obj['maximum_backorder'] = _ApiClient["default"].convertToType(data['maximum_backorder'], 'Number');
        }

        if (data.hasOwnProperty('reorder_inventory_level')) {
          obj['reorder_inventory_level'] = _ApiClient["default"].convertToType(data['reorder_inventory_level'], 'Number');
        }

        if (data.hasOwnProperty('sku')) {
          obj['sku'] = _ApiClient["default"].convertToType(data['sku'], 'String');
        }

        if (data.hasOwnProperty('stock_picking_location')) {
          obj['stock_picking_location'] = _ApiClient["default"].convertToType(data['stock_picking_location'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ItemShippingDistributionCenter;
}();
/**
 * Allocated to placed orders
 * @member {Number} allocated_to_placed_orders
 */


ItemShippingDistributionCenter.prototype['allocated_to_placed_orders'] = undefined;
/**
 * Allocated to shopping carts
 * @member {Number} allocated_to_shopping_carts
 */

ItemShippingDistributionCenter.prototype['allocated_to_shopping_carts'] = undefined;
/**
 * Available to allocate
 * @member {Number} available_to_allocate
 */

ItemShippingDistributionCenter.prototype['available_to_allocate'] = undefined;
/**
 * Cost of goods sold override at the distribution center level
 * @member {Number} cogs
 */

ItemShippingDistributionCenter.prototype['cogs'] = undefined;
/**
 * Desired inventory level
 * @member {Number} desired_inventory_level
 */

ItemShippingDistributionCenter.prototype['desired_inventory_level'] = undefined;
/**
 * Distribution center code
 * @member {String} distribution_center_code
 */

ItemShippingDistributionCenter.prototype['distribution_center_code'] = undefined;
/**
 * Distribution center object identifier
 * @member {Number} distribution_center_oid
 */

ItemShippingDistributionCenter.prototype['distribution_center_oid'] = undefined;
/**
 * Estimated time of arrival
 * @member {String} eta
 */

ItemShippingDistributionCenter.prototype['eta'] = undefined;
/**
 * True if this distribution center handles this item
 * @member {Boolean} handles
 */

ItemShippingDistributionCenter.prototype['handles'] = undefined;
/**
 * Inventory level
 * @member {Number} inventory_level
 */

ItemShippingDistributionCenter.prototype['inventory_level'] = undefined;
/**
 * Maximum back-order
 * @member {Number} maximum_backorder
 */

ItemShippingDistributionCenter.prototype['maximum_backorder'] = undefined;
/**
 * Reorder inventory level (triggers notification)
 * @member {Number} reorder_inventory_level
 */

ItemShippingDistributionCenter.prototype['reorder_inventory_level'] = undefined;
/**
 * SKU
 * @member {String} sku
 */

ItemShippingDistributionCenter.prototype['sku'] = undefined;
/**
 * Stock picking location
 * @member {String} stock_picking_location
 */

ItemShippingDistributionCenter.prototype['stock_picking_location'] = undefined;
var _default = ItemShippingDistributionCenter;
exports["default"] = _default;