"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Currency = _interopRequireDefault(require("./Currency"));

var _Distance = _interopRequireDefault(require("./Distance"));

var _OrderItemEdi = _interopRequireDefault(require("./OrderItemEdi"));

var _OrderItemOption = _interopRequireDefault(require("./OrderItemOption"));

var _OrderItemProperty = _interopRequireDefault(require("./OrderItemProperty"));

var _OrderItemTag = _interopRequireDefault(require("./OrderItemTag"));

var _Weight = _interopRequireDefault(require("./Weight"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The OrderItem model module.
 * @module com.ultracart.admin.v2.models/OrderItem
 * @version 4.0.90-RC
 */
var OrderItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderItem</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderItem
   */
  function OrderItem() {
    _classCallCheck(this, OrderItem);

    OrderItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderItem} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderItem} The populated <code>OrderItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderItem();

        if (data.hasOwnProperty('accounting_code')) {
          obj['accounting_code'] = _ApiClient["default"].convertToType(data['accounting_code'], 'String');
        }

        if (data.hasOwnProperty('activation_codes')) {
          obj['activation_codes'] = _ApiClient["default"].convertToType(data['activation_codes'], ['String']);
        }

        if (data.hasOwnProperty('arbitrary_unit_cost')) {
          obj['arbitrary_unit_cost'] = _Currency["default"].constructFromObject(data['arbitrary_unit_cost']);
        }

        if (data.hasOwnProperty('auto_order_last_rebill_dts')) {
          obj['auto_order_last_rebill_dts'] = _ApiClient["default"].convertToType(data['auto_order_last_rebill_dts'], 'String');
        }

        if (data.hasOwnProperty('auto_order_schedule')) {
          obj['auto_order_schedule'] = _ApiClient["default"].convertToType(data['auto_order_schedule'], 'String');
        }

        if (data.hasOwnProperty('barcode')) {
          obj['barcode'] = _ApiClient["default"].convertToType(data['barcode'], 'String');
        }

        if (data.hasOwnProperty('channel_partner_item_id')) {
          obj['channel_partner_item_id'] = _ApiClient["default"].convertToType(data['channel_partner_item_id'], 'String');
        }

        if (data.hasOwnProperty('cogs')) {
          obj['cogs'] = _ApiClient["default"].convertToType(data['cogs'], 'Number');
        }

        if (data.hasOwnProperty('component_unit_value')) {
          obj['component_unit_value'] = _ApiClient["default"].convertToType(data['component_unit_value'], 'Number');
        }

        if (data.hasOwnProperty('cost')) {
          obj['cost'] = _Currency["default"].constructFromObject(data['cost']);
        }

        if (data.hasOwnProperty('country_code_of_origin')) {
          obj['country_code_of_origin'] = _ApiClient["default"].convertToType(data['country_code_of_origin'], 'String');
        }

        if (data.hasOwnProperty('customs_description')) {
          obj['customs_description'] = _ApiClient["default"].convertToType(data['customs_description'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('discount')) {
          obj['discount'] = _Currency["default"].constructFromObject(data['discount']);
        }

        if (data.hasOwnProperty('discount_quantity')) {
          obj['discount_quantity'] = _ApiClient["default"].convertToType(data['discount_quantity'], 'Number');
        }

        if (data.hasOwnProperty('discount_shipping_weight')) {
          obj['discount_shipping_weight'] = _Weight["default"].constructFromObject(data['discount_shipping_weight']);
        }

        if (data.hasOwnProperty('distribution_center_code')) {
          obj['distribution_center_code'] = _ApiClient["default"].convertToType(data['distribution_center_code'], 'String');
        }

        if (data.hasOwnProperty('edi')) {
          obj['edi'] = _OrderItemEdi["default"].constructFromObject(data['edi']);
        }

        if (data.hasOwnProperty('exclude_coupon')) {
          obj['exclude_coupon'] = _ApiClient["default"].convertToType(data['exclude_coupon'], 'Boolean');
        }

        if (data.hasOwnProperty('free_shipping')) {
          obj['free_shipping'] = _ApiClient["default"].convertToType(data['free_shipping'], 'Boolean');
        }

        if (data.hasOwnProperty('hazmat')) {
          obj['hazmat'] = _ApiClient["default"].convertToType(data['hazmat'], 'Boolean');
        }

        if (data.hasOwnProperty('height')) {
          obj['height'] = _Distance["default"].constructFromObject(data['height']);
        }

        if (data.hasOwnProperty('item_index')) {
          obj['item_index'] = _ApiClient["default"].convertToType(data['item_index'], 'Number');
        }

        if (data.hasOwnProperty('item_reference_oid')) {
          obj['item_reference_oid'] = _ApiClient["default"].convertToType(data['item_reference_oid'], 'Number');
        }

        if (data.hasOwnProperty('kit')) {
          obj['kit'] = _ApiClient["default"].convertToType(data['kit'], 'Boolean');
        }

        if (data.hasOwnProperty('kit_component')) {
          obj['kit_component'] = _ApiClient["default"].convertToType(data['kit_component'], 'Boolean');
        }

        if (data.hasOwnProperty('length')) {
          obj['length'] = _Distance["default"].constructFromObject(data['length']);
        }

        if (data.hasOwnProperty('manufacturer_sku')) {
          obj['manufacturer_sku'] = _ApiClient["default"].convertToType(data['manufacturer_sku'], 'String');
        }

        if (data.hasOwnProperty('max_days_time_in_transit')) {
          obj['max_days_time_in_transit'] = _ApiClient["default"].convertToType(data['max_days_time_in_transit'], 'Number');
        }

        if (data.hasOwnProperty('merchant_item_id')) {
          obj['merchant_item_id'] = _ApiClient["default"].convertToType(data['merchant_item_id'], 'String');
        }

        if (data.hasOwnProperty('mix_and_match_group_name')) {
          obj['mix_and_match_group_name'] = _ApiClient["default"].convertToType(data['mix_and_match_group_name'], 'String');
        }

        if (data.hasOwnProperty('mix_and_match_group_oid')) {
          obj['mix_and_match_group_oid'] = _ApiClient["default"].convertToType(data['mix_and_match_group_oid'], 'Number');
        }

        if (data.hasOwnProperty('no_shipping_discount')) {
          obj['no_shipping_discount'] = _ApiClient["default"].convertToType(data['no_shipping_discount'], 'Boolean');
        }

        if (data.hasOwnProperty('options')) {
          obj['options'] = _ApiClient["default"].convertToType(data['options'], [_OrderItemOption["default"]]);
        }

        if (data.hasOwnProperty('packed_by_user')) {
          obj['packed_by_user'] = _ApiClient["default"].convertToType(data['packed_by_user'], 'String');
        }

        if (data.hasOwnProperty('parent_item_index')) {
          obj['parent_item_index'] = _ApiClient["default"].convertToType(data['parent_item_index'], 'Number');
        }

        if (data.hasOwnProperty('parent_merchant_item_id')) {
          obj['parent_merchant_item_id'] = _ApiClient["default"].convertToType(data['parent_merchant_item_id'], 'String');
        }

        if (data.hasOwnProperty('perishable_class')) {
          obj['perishable_class'] = _ApiClient["default"].convertToType(data['perishable_class'], 'String');
        }

        if (data.hasOwnProperty('pricing_tier_name')) {
          obj['pricing_tier_name'] = _ApiClient["default"].convertToType(data['pricing_tier_name'], 'String');
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ApiClient["default"].convertToType(data['properties'], [_OrderItemProperty["default"]]);
        }

        if (data.hasOwnProperty('quantity')) {
          obj['quantity'] = _ApiClient["default"].convertToType(data['quantity'], 'Number');
        }

        if (data.hasOwnProperty('quantity_refunded')) {
          obj['quantity_refunded'] = _ApiClient["default"].convertToType(data['quantity_refunded'], 'Number');
        }

        if (data.hasOwnProperty('quickbooks_class')) {
          obj['quickbooks_class'] = _ApiClient["default"].convertToType(data['quickbooks_class'], 'String');
        }

        if (data.hasOwnProperty('ship_separately')) {
          obj['ship_separately'] = _ApiClient["default"].convertToType(data['ship_separately'], 'Boolean');
        }

        if (data.hasOwnProperty('shipped_by_user')) {
          obj['shipped_by_user'] = _ApiClient["default"].convertToType(data['shipped_by_user'], 'String');
        }

        if (data.hasOwnProperty('shipped_dts')) {
          obj['shipped_dts'] = _ApiClient["default"].convertToType(data['shipped_dts'], 'String');
        }

        if (data.hasOwnProperty('shipping_status')) {
          obj['shipping_status'] = _ApiClient["default"].convertToType(data['shipping_status'], 'String');
        }

        if (data.hasOwnProperty('special_product_type')) {
          obj['special_product_type'] = _ApiClient["default"].convertToType(data['special_product_type'], 'String');
        }

        if (data.hasOwnProperty('tags')) {
          obj['tags'] = _ApiClient["default"].convertToType(data['tags'], [_OrderItemTag["default"]]);
        }

        if (data.hasOwnProperty('tax_free')) {
          obj['tax_free'] = _ApiClient["default"].convertToType(data['tax_free'], 'Boolean');
        }

        if (data.hasOwnProperty('tax_product_type')) {
          obj['tax_product_type'] = _ApiClient["default"].convertToType(data['tax_product_type'], 'String');
        }

        if (data.hasOwnProperty('taxable_cost')) {
          obj['taxable_cost'] = _Currency["default"].constructFromObject(data['taxable_cost']);
        }

        if (data.hasOwnProperty('total_cost_with_discount')) {
          obj['total_cost_with_discount'] = _Currency["default"].constructFromObject(data['total_cost_with_discount']);
        }

        if (data.hasOwnProperty('total_refunded')) {
          obj['total_refunded'] = _Currency["default"].constructFromObject(data['total_refunded']);
        }

        if (data.hasOwnProperty('transmitted_to_distribution_center_dts')) {
          obj['transmitted_to_distribution_center_dts'] = _ApiClient["default"].convertToType(data['transmitted_to_distribution_center_dts'], 'String');
        }

        if (data.hasOwnProperty('unit_cost_with_discount')) {
          obj['unit_cost_with_discount'] = _Currency["default"].constructFromObject(data['unit_cost_with_discount']);
        }

        if (data.hasOwnProperty('upsell')) {
          obj['upsell'] = _ApiClient["default"].convertToType(data['upsell'], 'Boolean');
        }

        if (data.hasOwnProperty('weight')) {
          obj['weight'] = _Weight["default"].constructFromObject(data['weight']);
        }

        if (data.hasOwnProperty('width')) {
          obj['width'] = _Distance["default"].constructFromObject(data['width']);
        }
      }

      return obj;
    }
  }]);

  return OrderItem;
}();
/**
 * QuickBooks code
 * @member {String} accounting_code
 */


OrderItem.prototype['accounting_code'] = undefined;
/**
 * Activation codes assigned to this item
 * @member {Array.<String>} activation_codes
 */

OrderItem.prototype['activation_codes'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} arbitrary_unit_cost
 */

OrderItem.prototype['arbitrary_unit_cost'] = undefined;
/**
 * Date/time of the last rebill, used only during order insert to help project future rebills
 * @member {String} auto_order_last_rebill_dts
 */

OrderItem.prototype['auto_order_last_rebill_dts'] = undefined;
/**
 * Auto order schedule, used only during inserts supplying the recurring schedule
 * @member {String} auto_order_schedule
 */

OrderItem.prototype['auto_order_schedule'] = undefined;
/**
 * Barcode
 * @member {String} barcode
 */

OrderItem.prototype['barcode'] = undefined;
/**
 * Channel partner item id if this order came through a channel partner and the channel partner item id was mapped to an internal item id
 * @member {String} channel_partner_item_id
 */

OrderItem.prototype['channel_partner_item_id'] = undefined;
/**
 * Cost of goods sold
 * @member {Number} cogs
 */

OrderItem.prototype['cogs'] = undefined;
/**
 * Value of the kit component item
 * @member {Number} component_unit_value
 */

OrderItem.prototype['component_unit_value'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} cost
 */

OrderItem.prototype['cost'] = undefined;
/**
 * Country of origin (ISO-3166 two letter code)
 * @member {String} country_code_of_origin
 */

OrderItem.prototype['country_code_of_origin'] = undefined;
/**
 * Customs description
 * @member {String} customs_description
 */

OrderItem.prototype['customs_description'] = undefined;
/**
 * Description
 * @member {String} description
 */

OrderItem.prototype['description'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} discount
 */

OrderItem.prototype['discount'] = undefined;
/**
 * Discount quantity
 * @member {Number} discount_quantity
 */

OrderItem.prototype['discount_quantity'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Weight} discount_shipping_weight
 */

OrderItem.prototype['discount_shipping_weight'] = undefined;
/**
 * Distribution center code responsible for shipping this item
 * @member {String} distribution_center_code
 */

OrderItem.prototype['distribution_center_code'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/OrderItemEdi} edi
 */

OrderItem.prototype['edi'] = undefined;
/**
 * True if this item is excluded from coupons
 * @member {Boolean} exclude_coupon
 */

OrderItem.prototype['exclude_coupon'] = undefined;
/**
 * True if the item receives free shipping
 * @member {Boolean} free_shipping
 */

OrderItem.prototype['free_shipping'] = undefined;
/**
 * Hazardous materials indicator
 * @member {Boolean} hazmat
 */

OrderItem.prototype['hazmat'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Distance} height
 */

OrderItem.prototype['height'] = undefined;
/**
 * Index of the item on the order (one based index)
 * @member {Number} item_index
 */

OrderItem.prototype['item_index'] = undefined;
/**
 * Item reference object identifier used to linked to auto order item record
 * @member {Number} item_reference_oid
 */

OrderItem.prototype['item_reference_oid'] = undefined;
/**
 * True if this item is a kit
 * @member {Boolean} kit
 */

OrderItem.prototype['kit'] = undefined;
/**
 * True if this item is a kit component
 * @member {Boolean} kit_component
 */

OrderItem.prototype['kit_component'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Distance} length
 */

OrderItem.prototype['length'] = undefined;
/**
 * Manufacturer SKU
 * @member {String} manufacturer_sku
 */

OrderItem.prototype['manufacturer_sku'] = undefined;
/**
 * Maximum days that the item can be in transit before spoilage (perishable products)
 * @member {Number} max_days_time_in_transit
 */

OrderItem.prototype['max_days_time_in_transit'] = undefined;
/**
 * Item ID
 * @member {String} merchant_item_id
 */

OrderItem.prototype['merchant_item_id'] = undefined;
/**
 * Mix and match group name
 * @member {String} mix_and_match_group_name
 */

OrderItem.prototype['mix_and_match_group_name'] = undefined;
/**
 * Mix and match group object identifier
 * @member {Number} mix_and_match_group_oid
 */

OrderItem.prototype['mix_and_match_group_oid'] = undefined;
/**
 * True if this item is excluded from shipping discounts
 * @member {Boolean} no_shipping_discount
 */

OrderItem.prototype['no_shipping_discount'] = undefined;
/**
 * Options
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderItemOption>} options
 */

OrderItem.prototype['options'] = undefined;
/**
 * Packed by user
 * @member {String} packed_by_user
 */

OrderItem.prototype['packed_by_user'] = undefined;
/**
 * If this item is a kit component, this is the item index of the parent item (kit)
 * @member {Number} parent_item_index
 */

OrderItem.prototype['parent_item_index'] = undefined;
/**
 * If this item is a kit component, this is the item id of the parent item (kit)
 * @member {String} parent_merchant_item_id
 */

OrderItem.prototype['parent_merchant_item_id'] = undefined;
/**
 * Perishable class of the item
 * @member {String} perishable_class
 */

OrderItem.prototype['perishable_class'] = undefined;
/**
 * Pricing tier that granted the particular price for this item if the customer profile had pricing tiers assigned
 * @member {String} pricing_tier_name
 */

OrderItem.prototype['pricing_tier_name'] = undefined;
/**
 * Properties
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderItemProperty>} properties
 */

OrderItem.prototype['properties'] = undefined;
/**
 * Quantity
 * @member {Number} quantity
 */

OrderItem.prototype['quantity'] = undefined;
/**
 * Quantity refunded on this item (read only except refund operation)
 * @member {Number} quantity_refunded
 */

OrderItem.prototype['quantity_refunded'] = undefined;
/**
 * QuickBooks class
 * @member {String} quickbooks_class
 */

OrderItem.prototype['quickbooks_class'] = undefined;
/**
 * True if this item ships in a separate box
 * @member {Boolean} ship_separately
 */

OrderItem.prototype['ship_separately'] = undefined;
/**
 * Shipped by user
 * @member {String} shipped_by_user
 */

OrderItem.prototype['shipped_by_user'] = undefined;
/**
 * Date/time that this item was marked shipped
 * @member {String} shipped_dts
 */

OrderItem.prototype['shipped_dts'] = undefined;
/**
 * Shipping status for this item.  This is the replacement for the old order level shipping status.
 * @member {String} shipping_status
 */

OrderItem.prototype['shipping_status'] = undefined;
/**
 * Special product type (USPS Media Mail)
 * @member {String} special_product_type
 */

OrderItem.prototype['special_product_type'] = undefined;
/**
 * Tags
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderItemTag>} tags
 */

OrderItem.prototype['tags'] = undefined;
/**
 * True if the item is tax free
 * @member {Boolean} tax_free
 */

OrderItem.prototype['tax_free'] = undefined;
/**
 * Type of product for tax purposes (self or UltraCart Managed taxes)
 * @member {module:com.ultracart.admin.v2.models/OrderItem.TaxProductTypeEnum} tax_product_type
 */

OrderItem.prototype['tax_product_type'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} taxable_cost
 */

OrderItem.prototype['taxable_cost'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} total_cost_with_discount
 */

OrderItem.prototype['total_cost_with_discount'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} total_refunded
 */

OrderItem.prototype['total_refunded'] = undefined;
/**
 * Date/time that this item was transmitted to the distribution center
 * @member {String} transmitted_to_distribution_center_dts
 */

OrderItem.prototype['transmitted_to_distribution_center_dts'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} unit_cost_with_discount
 */

OrderItem.prototype['unit_cost_with_discount'] = undefined;
/**
 * True if this item was added to the order as part of an upsell
 * @member {Boolean} upsell
 */

OrderItem.prototype['upsell'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Weight} weight
 */

OrderItem.prototype['weight'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Distance} width
 */

OrderItem.prototype['width'] = undefined;
/**
 * Allowed values for the <code>tax_product_type</code> property.
 * @enum {String}
 * @readonly
 */

OrderItem['TaxProductTypeEnum'] = {
  /**
   * value: ""
   * @const
   */
  "empty": "",

  /**
   * value: "digital"
   * @const
   */
  "digital": "digital",

  /**
   * value: "physical"
   * @const
   */
  "physical": "physical",

  /**
   * value: "service"
   * @const
   */
  "service": "service"
};
var _default = OrderItem;
exports["default"] = _default;