/*
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'com.ultracart.admin.v2.models/Currency', 'com.ultracart.admin.v2.models/Distance', 'com.ultracart.admin.v2.models/OrderItemEdi', 'com.ultracart.admin.v2.models/OrderItemOption', 'com.ultracart.admin.v2.models/OrderItemProperty', 'com.ultracart.admin.v2.models/OrderItemTag', 'com.ultracart.admin.v2.models/Weight'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Currency'), require('./Distance'), require('./OrderItemEdi'), require('./OrderItemOption'), require('./OrderItemProperty'), require('./OrderItemTag'), require('./Weight'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.OrderItem = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Currency, root.UltraCartRestApiV2.Distance, root.UltraCartRestApiV2.OrderItemEdi, root.UltraCartRestApiV2.OrderItemOption, root.UltraCartRestApiV2.OrderItemProperty, root.UltraCartRestApiV2.OrderItemTag, root.UltraCartRestApiV2.Weight);
  }
}(this, function(ApiClient, Currency, Distance, OrderItemEdi, OrderItemOption, OrderItemProperty, OrderItemTag, Weight) {
  'use strict';

  /**
   * The OrderItem model module.
   * @module com.ultracart.admin.v2.models/OrderItem
   * @version 3.4.3
   */

  /**
   * Constructs a new <code>OrderItem</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderItem
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderItem} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderItem} The populated <code>OrderItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accounting_code'))
        obj.accounting_code = ApiClient.convertToType(data['accounting_code'], 'String');
      if (data.hasOwnProperty('activation_codes'))
        obj.activation_codes = ApiClient.convertToType(data['activation_codes'], ['String']);
      if (data.hasOwnProperty('arbitrary_unit_cost'))
        obj.arbitrary_unit_cost = Currency.constructFromObject(data['arbitrary_unit_cost']);
      if (data.hasOwnProperty('auto_order_last_rebill_dts'))
        obj.auto_order_last_rebill_dts = ApiClient.convertToType(data['auto_order_last_rebill_dts'], 'String');
      if (data.hasOwnProperty('auto_order_schedule'))
        obj.auto_order_schedule = ApiClient.convertToType(data['auto_order_schedule'], 'String');
      if (data.hasOwnProperty('barcode'))
        obj.barcode = ApiClient.convertToType(data['barcode'], 'String');
      if (data.hasOwnProperty('channel_partner_item_id'))
        obj.channel_partner_item_id = ApiClient.convertToType(data['channel_partner_item_id'], 'String');
      if (data.hasOwnProperty('cogs'))
        obj.cogs = ApiClient.convertToType(data['cogs'], 'Number');
      if (data.hasOwnProperty('component_unit_value'))
        obj.component_unit_value = ApiClient.convertToType(data['component_unit_value'], 'Number');
      if (data.hasOwnProperty('cost'))
        obj.cost = Currency.constructFromObject(data['cost']);
      if (data.hasOwnProperty('country_code_of_origin'))
        obj.country_code_of_origin = ApiClient.convertToType(data['country_code_of_origin'], 'String');
      if (data.hasOwnProperty('customs_description'))
        obj.customs_description = ApiClient.convertToType(data['customs_description'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('discount'))
        obj.discount = Currency.constructFromObject(data['discount']);
      if (data.hasOwnProperty('discount_quantity'))
        obj.discount_quantity = ApiClient.convertToType(data['discount_quantity'], 'Number');
      if (data.hasOwnProperty('discount_shipping_weight'))
        obj.discount_shipping_weight = Weight.constructFromObject(data['discount_shipping_weight']);
      if (data.hasOwnProperty('distribution_center_code'))
        obj.distribution_center_code = ApiClient.convertToType(data['distribution_center_code'], 'String');
      if (data.hasOwnProperty('edi'))
        obj.edi = OrderItemEdi.constructFromObject(data['edi']);
      if (data.hasOwnProperty('exclude_coupon'))
        obj.exclude_coupon = ApiClient.convertToType(data['exclude_coupon'], 'Boolean');
      if (data.hasOwnProperty('free_shipping'))
        obj.free_shipping = ApiClient.convertToType(data['free_shipping'], 'Boolean');
      if (data.hasOwnProperty('hazmat'))
        obj.hazmat = ApiClient.convertToType(data['hazmat'], 'Boolean');
      if (data.hasOwnProperty('height'))
        obj.height = Distance.constructFromObject(data['height']);
      if (data.hasOwnProperty('item_reference_oid'))
        obj.item_reference_oid = ApiClient.convertToType(data['item_reference_oid'], 'Number');
      if (data.hasOwnProperty('kit'))
        obj.kit = ApiClient.convertToType(data['kit'], 'Boolean');
      if (data.hasOwnProperty('kit_component'))
        obj.kit_component = ApiClient.convertToType(data['kit_component'], 'Boolean');
      if (data.hasOwnProperty('length'))
        obj.length = Distance.constructFromObject(data['length']);
      if (data.hasOwnProperty('manufacturer_sku'))
        obj.manufacturer_sku = ApiClient.convertToType(data['manufacturer_sku'], 'String');
      if (data.hasOwnProperty('max_days_time_in_transit'))
        obj.max_days_time_in_transit = ApiClient.convertToType(data['max_days_time_in_transit'], 'Number');
      if (data.hasOwnProperty('merchant_item_id'))
        obj.merchant_item_id = ApiClient.convertToType(data['merchant_item_id'], 'String');
      if (data.hasOwnProperty('mix_and_match_group_name'))
        obj.mix_and_match_group_name = ApiClient.convertToType(data['mix_and_match_group_name'], 'String');
      if (data.hasOwnProperty('mix_and_match_group_oid'))
        obj.mix_and_match_group_oid = ApiClient.convertToType(data['mix_and_match_group_oid'], 'Number');
      if (data.hasOwnProperty('no_shipping_discount'))
        obj.no_shipping_discount = ApiClient.convertToType(data['no_shipping_discount'], 'Boolean');
      if (data.hasOwnProperty('options'))
        obj.options = ApiClient.convertToType(data['options'], [OrderItemOption]);
      if (data.hasOwnProperty('packed_by_user'))
        obj.packed_by_user = ApiClient.convertToType(data['packed_by_user'], 'String');
      if (data.hasOwnProperty('perishable_class'))
        obj.perishable_class = ApiClient.convertToType(data['perishable_class'], 'String');
      if (data.hasOwnProperty('pricing_tier_name'))
        obj.pricing_tier_name = ApiClient.convertToType(data['pricing_tier_name'], 'String');
      if (data.hasOwnProperty('properties'))
        obj.properties = ApiClient.convertToType(data['properties'], [OrderItemProperty]);
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
      if (data.hasOwnProperty('quantity_refunded'))
        obj.quantity_refunded = ApiClient.convertToType(data['quantity_refunded'], 'Number');
      if (data.hasOwnProperty('quickbooks_class'))
        obj.quickbooks_class = ApiClient.convertToType(data['quickbooks_class'], 'String');
      if (data.hasOwnProperty('ship_separately'))
        obj.ship_separately = ApiClient.convertToType(data['ship_separately'], 'Boolean');
      if (data.hasOwnProperty('shipped_by_user'))
        obj.shipped_by_user = ApiClient.convertToType(data['shipped_by_user'], 'String');
      if (data.hasOwnProperty('shipped_dts'))
        obj.shipped_dts = ApiClient.convertToType(data['shipped_dts'], 'String');
      if (data.hasOwnProperty('special_product_type'))
        obj.special_product_type = ApiClient.convertToType(data['special_product_type'], 'String');
      if (data.hasOwnProperty('tags'))
        obj.tags = ApiClient.convertToType(data['tags'], [OrderItemTag]);
      if (data.hasOwnProperty('tax_free'))
        obj.tax_free = ApiClient.convertToType(data['tax_free'], 'Boolean');
      if (data.hasOwnProperty('taxable_cost'))
        obj.taxable_cost = Currency.constructFromObject(data['taxable_cost']);
      if (data.hasOwnProperty('total_cost_with_discount'))
        obj.total_cost_with_discount = Currency.constructFromObject(data['total_cost_with_discount']);
      if (data.hasOwnProperty('total_refunded'))
        obj.total_refunded = Currency.constructFromObject(data['total_refunded']);
      if (data.hasOwnProperty('transmitted_to_distribution_center_dts'))
        obj.transmitted_to_distribution_center_dts = ApiClient.convertToType(data['transmitted_to_distribution_center_dts'], 'String');
      if (data.hasOwnProperty('unit_cost_with_discount'))
        obj.unit_cost_with_discount = Currency.constructFromObject(data['unit_cost_with_discount']);
      if (data.hasOwnProperty('upsell'))
        obj.upsell = ApiClient.convertToType(data['upsell'], 'Boolean');
      if (data.hasOwnProperty('weight'))
        obj.weight = Weight.constructFromObject(data['weight']);
      if (data.hasOwnProperty('width'))
        obj.width = Distance.constructFromObject(data['width']);
    }
    return obj;
  }

  /**
   * QuickBooks code
   * @member {String} accounting_code
   */
  exports.prototype.accounting_code = undefined;

  /**
   * Activation codes assigned to this item
   * @member {Array.<String>} activation_codes
   */
  exports.prototype.activation_codes = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} arbitrary_unit_cost
   */
  exports.prototype.arbitrary_unit_cost = undefined;

  /**
   * Date/time of the last rebill, used only during order insert to help project future rebills
   * @member {String} auto_order_last_rebill_dts
   */
  exports.prototype.auto_order_last_rebill_dts = undefined;

  /**
   * Auto order schedule, used only during inserts supplying the recurring schedule
   * @member {String} auto_order_schedule
   */
  exports.prototype.auto_order_schedule = undefined;

  /**
   * Barcode
   * @member {String} barcode
   */
  exports.prototype.barcode = undefined;

  /**
   * Channel partner item id if this order came through a channel partner and the channel partner item id was mapped to an internal item id
   * @member {String} channel_partner_item_id
   */
  exports.prototype.channel_partner_item_id = undefined;

  /**
   * Cost of goods sold
   * @member {Number} cogs
   */
  exports.prototype.cogs = undefined;

  /**
   * Value of the kit component item
   * @member {Number} component_unit_value
   */
  exports.prototype.component_unit_value = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} cost
   */
  exports.prototype.cost = undefined;

  /**
   * Country of origin (ISO-3166 two letter code)
   * @member {String} country_code_of_origin
   */
  exports.prototype.country_code_of_origin = undefined;

  /**
   * Customs description
   * @member {String} customs_description
   */
  exports.prototype.customs_description = undefined;

  /**
   * Description
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} discount
   */
  exports.prototype.discount = undefined;

  /**
   * Discount quantity
   * @member {Number} discount_quantity
   */
  exports.prototype.discount_quantity = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Weight} discount_shipping_weight
   */
  exports.prototype.discount_shipping_weight = undefined;

  /**
   * Distribution center code responsible for shipping this item
   * @member {String} distribution_center_code
   */
  exports.prototype.distribution_center_code = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/OrderItemEdi} edi
   */
  exports.prototype.edi = undefined;

  /**
   * True if this item is excluded from coupons
   * @member {Boolean} exclude_coupon
   */
  exports.prototype.exclude_coupon = undefined;

  /**
   * True if the item receives free shipping
   * @member {Boolean} free_shipping
   */
  exports.prototype.free_shipping = undefined;

  /**
   * Hazardous materials indicator
   * @member {Boolean} hazmat
   */
  exports.prototype.hazmat = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Distance} height
   */
  exports.prototype.height = undefined;

  /**
   * Item reference object identifier used to linked to auto order item record
   * @member {Number} item_reference_oid
   */
  exports.prototype.item_reference_oid = undefined;

  /**
   * True if this item is a kit
   * @member {Boolean} kit
   */
  exports.prototype.kit = undefined;

  /**
   * True if this item is a kit component
   * @member {Boolean} kit_component
   */
  exports.prototype.kit_component = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Distance} length
   */
  exports.prototype.length = undefined;

  /**
   * Manufacturer SKU
   * @member {String} manufacturer_sku
   */
  exports.prototype.manufacturer_sku = undefined;

  /**
   * Maximum days that the item can be in transit before spoilage (perishable products)
   * @member {Number} max_days_time_in_transit
   */
  exports.prototype.max_days_time_in_transit = undefined;

  /**
   * Item ID
   * @member {String} merchant_item_id
   */
  exports.prototype.merchant_item_id = undefined;

  /**
   * Mix and match group name
   * @member {String} mix_and_match_group_name
   */
  exports.prototype.mix_and_match_group_name = undefined;

  /**
   * Mix and match group object identifier
   * @member {Number} mix_and_match_group_oid
   */
  exports.prototype.mix_and_match_group_oid = undefined;

  /**
   * True if this item is excluded from shipping discounts
   * @member {Boolean} no_shipping_discount
   */
  exports.prototype.no_shipping_discount = undefined;

  /**
   * Options
   * @member {Array.<module:com.ultracart.admin.v2.models/OrderItemOption>} options
   */
  exports.prototype.options = undefined;

  /**
   * Packed by user
   * @member {String} packed_by_user
   */
  exports.prototype.packed_by_user = undefined;

  /**
   * Perishable class of the item
   * @member {String} perishable_class
   */
  exports.prototype.perishable_class = undefined;

  /**
   * Pricing tier that granted the particular price for this item if the customer profile had pricing tiers assigned
   * @member {String} pricing_tier_name
   */
  exports.prototype.pricing_tier_name = undefined;

  /**
   * Properties
   * @member {Array.<module:com.ultracart.admin.v2.models/OrderItemProperty>} properties
   */
  exports.prototype.properties = undefined;

  /**
   * Quantity
   * @member {Number} quantity
   */
  exports.prototype.quantity = undefined;

  /**
   * Quantity refunded on this item (read only except refund operation)
   * @member {Number} quantity_refunded
   */
  exports.prototype.quantity_refunded = undefined;

  /**
   * QuickBooks class
   * @member {String} quickbooks_class
   */
  exports.prototype.quickbooks_class = undefined;

  /**
   * True if this item ships in a separate box
   * @member {Boolean} ship_separately
   */
  exports.prototype.ship_separately = undefined;

  /**
   * Shipped by user
   * @member {String} shipped_by_user
   */
  exports.prototype.shipped_by_user = undefined;

  /**
   * Date/time that this item was marked shipped
   * @member {String} shipped_dts
   */
  exports.prototype.shipped_dts = undefined;

  /**
   * Special product type (USPS Media Mail)
   * @member {String} special_product_type
   */
  exports.prototype.special_product_type = undefined;

  /**
   * Tags
   * @member {Array.<module:com.ultracart.admin.v2.models/OrderItemTag>} tags
   */
  exports.prototype.tags = undefined;

  /**
   * True if the item is tax free
   * @member {Boolean} tax_free
   */
  exports.prototype.tax_free = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} taxable_cost
   */
  exports.prototype.taxable_cost = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} total_cost_with_discount
   */
  exports.prototype.total_cost_with_discount = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} total_refunded
   */
  exports.prototype.total_refunded = undefined;

  /**
   * Date/time that this item was transmitted to the distribution center
   * @member {String} transmitted_to_distribution_center_dts
   */
  exports.prototype.transmitted_to_distribution_center_dts = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} unit_cost_with_discount
   */
  exports.prototype.unit_cost_with_discount = undefined;

  /**
   * True if this item was added to the order as part of an upsell
   * @member {Boolean} upsell
   */
  exports.prototype.upsell = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Weight} weight
   */
  exports.prototype.weight = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Distance} width
   */
  exports.prototype.width = undefined;

  return exports;

}));
