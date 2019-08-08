/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'com.ultracart.admin.v2.models/Distance', 'com.ultracart.admin.v2.models/ItemShippingCase', 'com.ultracart.admin.v2.models/ItemShippingDestinationMarkup', 'com.ultracart.admin.v2.models/ItemShippingDestinationRestriction', 'com.ultracart.admin.v2.models/ItemShippingDistributionCenter', 'com.ultracart.admin.v2.models/ItemShippingMethod', 'com.ultracart.admin.v2.models/ItemShippingPackageRequirement', 'com.ultracart.admin.v2.models/Weight'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Distance'), require('./ItemShippingCase'), require('./ItemShippingDestinationMarkup'), require('./ItemShippingDestinationRestriction'), require('./ItemShippingDistributionCenter'), require('./ItemShippingMethod'), require('./ItemShippingPackageRequirement'), require('./Weight'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ItemShipping = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Distance, root.UltraCartRestApiV2.ItemShippingCase, root.UltraCartRestApiV2.ItemShippingDestinationMarkup, root.UltraCartRestApiV2.ItemShippingDestinationRestriction, root.UltraCartRestApiV2.ItemShippingDistributionCenter, root.UltraCartRestApiV2.ItemShippingMethod, root.UltraCartRestApiV2.ItemShippingPackageRequirement, root.UltraCartRestApiV2.Weight);
  }
}(this, function(ApiClient, Distance, ItemShippingCase, ItemShippingDestinationMarkup, ItemShippingDestinationRestriction, ItemShippingDistributionCenter, ItemShippingMethod, ItemShippingPackageRequirement, Weight) {
  'use strict';




  /**
   * The ItemShipping model module.
   * @module com.ultracart.admin.v2.models/ItemShipping
   * @version 2.4.16
   */

  /**
   * Constructs a new <code>ItemShipping</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemShipping
   * @class
   */
  var exports = function() {
    var _this = this;

















































  };

  /**
   * Constructs a <code>ItemShipping</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemShipping} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemShipping} The populated <code>ItemShipping</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('allow_back_order')) {
        obj['allow_back_order'] = ApiClient.convertToType(data['allow_back_order'], 'Boolean');
      }
      if (data.hasOwnProperty('amazon_fba')) {
        obj['amazon_fba'] = ApiClient.convertToType(data['amazon_fba'], 'Boolean');
      }
      if (data.hasOwnProperty('case_inner_packs')) {
        obj['case_inner_packs'] = ApiClient.convertToType(data['case_inner_packs'], 'Number');
      }
      if (data.hasOwnProperty('case_units')) {
        obj['case_units'] = ApiClient.convertToType(data['case_units'], 'Number');
      }
      if (data.hasOwnProperty('cases')) {
        obj['cases'] = ApiClient.convertToType(data['cases'], [ItemShippingCase]);
      }
      if (data.hasOwnProperty('collect_serial_numbers')) {
        obj['collect_serial_numbers'] = ApiClient.convertToType(data['collect_serial_numbers'], 'Boolean');
      }
      if (data.hasOwnProperty('country_code_of_origin')) {
        obj['country_code_of_origin'] = ApiClient.convertToType(data['country_code_of_origin'], 'String');
      }
      if (data.hasOwnProperty('customs_description')) {
        obj['customs_description'] = ApiClient.convertToType(data['customs_description'], 'String');
      }
      if (data.hasOwnProperty('customs_value')) {
        obj['customs_value'] = ApiClient.convertToType(data['customs_value'], 'Number');
      }
      if (data.hasOwnProperty('delivery_on_friday')) {
        obj['delivery_on_friday'] = ApiClient.convertToType(data['delivery_on_friday'], 'Boolean');
      }
      if (data.hasOwnProperty('delivery_on_monday')) {
        obj['delivery_on_monday'] = ApiClient.convertToType(data['delivery_on_monday'], 'Boolean');
      }
      if (data.hasOwnProperty('delivery_on_saturday')) {
        obj['delivery_on_saturday'] = ApiClient.convertToType(data['delivery_on_saturday'], 'Boolean');
      }
      if (data.hasOwnProperty('delivery_on_sunday')) {
        obj['delivery_on_sunday'] = ApiClient.convertToType(data['delivery_on_sunday'], 'Boolean');
      }
      if (data.hasOwnProperty('delivery_on_thursday')) {
        obj['delivery_on_thursday'] = ApiClient.convertToType(data['delivery_on_thursday'], 'Boolean');
      }
      if (data.hasOwnProperty('delivery_on_tuesday')) {
        obj['delivery_on_tuesday'] = ApiClient.convertToType(data['delivery_on_tuesday'], 'Boolean');
      }
      if (data.hasOwnProperty('delivery_on_wednesday')) {
        obj['delivery_on_wednesday'] = ApiClient.convertToType(data['delivery_on_wednesday'], 'Boolean');
      }
      if (data.hasOwnProperty('destination_markups')) {
        obj['destination_markups'] = ApiClient.convertToType(data['destination_markups'], [ItemShippingDestinationMarkup]);
      }
      if (data.hasOwnProperty('destination_restrictions')) {
        obj['destination_restrictions'] = ApiClient.convertToType(data['destination_restrictions'], [ItemShippingDestinationRestriction]);
      }
      if (data.hasOwnProperty('distribution_centers')) {
        obj['distribution_centers'] = ApiClient.convertToType(data['distribution_centers'], [ItemShippingDistributionCenter]);
      }
      if (data.hasOwnProperty('eta')) {
        obj['eta'] = ApiClient.convertToType(data['eta'], 'String');
      }
      if (data.hasOwnProperty('free_shipping')) {
        obj['free_shipping'] = ApiClient.convertToType(data['free_shipping'], 'Boolean');
      }
      if (data.hasOwnProperty('freight_class')) {
        obj['freight_class'] = ApiClient.convertToType(data['freight_class'], 'String');
      }
      if (data.hasOwnProperty('hazmat')) {
        obj['hazmat'] = ApiClient.convertToType(data['hazmat'], 'Boolean');
      }
      if (data.hasOwnProperty('made_to_order')) {
        obj['made_to_order'] = ApiClient.convertToType(data['made_to_order'], 'Boolean');
      }
      if (data.hasOwnProperty('made_to_order_lead_time')) {
        obj['made_to_order_lead_time'] = ApiClient.convertToType(data['made_to_order_lead_time'], 'Number');
      }
      if (data.hasOwnProperty('max_days_time_in_transit')) {
        obj['max_days_time_in_transit'] = ApiClient.convertToType(data['max_days_time_in_transit'], 'Number');
      }
      if (data.hasOwnProperty('methods')) {
        obj['methods'] = ApiClient.convertToType(data['methods'], [ItemShippingMethod]);
      }
      if (data.hasOwnProperty('no_shipping_discount')) {
        obj['no_shipping_discount'] = ApiClient.convertToType(data['no_shipping_discount'], 'Boolean');
      }
      if (data.hasOwnProperty('package_requirements')) {
        obj['package_requirements'] = ApiClient.convertToType(data['package_requirements'], [ItemShippingPackageRequirement]);
      }
      if (data.hasOwnProperty('perishable_class_name')) {
        obj['perishable_class_name'] = ApiClient.convertToType(data['perishable_class_name'], 'String');
      }
      if (data.hasOwnProperty('perishable_class_oid')) {
        obj['perishable_class_oid'] = ApiClient.convertToType(data['perishable_class_oid'], 'Number');
      }
      if (data.hasOwnProperty('preorder')) {
        obj['preorder'] = ApiClient.convertToType(data['preorder'], 'Boolean');
      }
      if (data.hasOwnProperty('require_delivery_date')) {
        obj['require_delivery_date'] = ApiClient.convertToType(data['require_delivery_date'], 'Boolean');
      }
      if (data.hasOwnProperty('restrict_shipment_on_friday')) {
        obj['restrict_shipment_on_friday'] = ApiClient.convertToType(data['restrict_shipment_on_friday'], 'Boolean');
      }
      if (data.hasOwnProperty('restrict_shipment_on_monday')) {
        obj['restrict_shipment_on_monday'] = ApiClient.convertToType(data['restrict_shipment_on_monday'], 'Boolean');
      }
      if (data.hasOwnProperty('restrict_shipment_on_saturday')) {
        obj['restrict_shipment_on_saturday'] = ApiClient.convertToType(data['restrict_shipment_on_saturday'], 'Boolean');
      }
      if (data.hasOwnProperty('restrict_shipment_on_sunday')) {
        obj['restrict_shipment_on_sunday'] = ApiClient.convertToType(data['restrict_shipment_on_sunday'], 'Boolean');
      }
      if (data.hasOwnProperty('restrict_shipment_on_thursday')) {
        obj['restrict_shipment_on_thursday'] = ApiClient.convertToType(data['restrict_shipment_on_thursday'], 'Boolean');
      }
      if (data.hasOwnProperty('restrict_shipment_on_tuesday')) {
        obj['restrict_shipment_on_tuesday'] = ApiClient.convertToType(data['restrict_shipment_on_tuesday'], 'Boolean');
      }
      if (data.hasOwnProperty('restrict_shipment_on_wednesday')) {
        obj['restrict_shipment_on_wednesday'] = ApiClient.convertToType(data['restrict_shipment_on_wednesday'], 'Boolean');
      }
      if (data.hasOwnProperty('ship_separately')) {
        obj['ship_separately'] = ApiClient.convertToType(data['ship_separately'], 'Boolean');
      }
      if (data.hasOwnProperty('ship_separately_additional_weight')) {
        obj['ship_separately_additional_weight'] = Weight.constructFromObject(data['ship_separately_additional_weight']);
      }
      if (data.hasOwnProperty('ship_separately_height')) {
        obj['ship_separately_height'] = Distance.constructFromObject(data['ship_separately_height']);
      }
      if (data.hasOwnProperty('ship_separately_length')) {
        obj['ship_separately_length'] = Distance.constructFromObject(data['ship_separately_length']);
      }
      if (data.hasOwnProperty('ship_separately_package_special_type')) {
        obj['ship_separately_package_special_type'] = ApiClient.convertToType(data['ship_separately_package_special_type'], 'String');
      }
      if (data.hasOwnProperty('ship_separately_width')) {
        obj['ship_separately_width'] = Distance.constructFromObject(data['ship_separately_width']);
      }
      if (data.hasOwnProperty('special_product_type')) {
        obj['special_product_type'] = ApiClient.convertToType(data['special_product_type'], 'String');
      }
      if (data.hasOwnProperty('track_inventory')) {
        obj['track_inventory'] = ApiClient.convertToType(data['track_inventory'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Allow back order
   * @member {Boolean} allow_back_order
   */
  exports.prototype['allow_back_order'] = undefined;
  /**
   * Fulfillment by Amazon.com
   * @member {Boolean} amazon_fba
   */
  exports.prototype['amazon_fba'] = undefined;
  /**
   * Case inner packs
   * @member {Number} case_inner_packs
   */
  exports.prototype['case_inner_packs'] = undefined;
  /**
   * Case units
   * @member {Number} case_units
   */
  exports.prototype['case_units'] = undefined;
  /**
   * Cases
   * @member {Array.<module:com.ultracart.admin.v2.models/ItemShippingCase>} cases
   */
  exports.prototype['cases'] = undefined;
  /**
   * This item is on pre-order
   * @member {Boolean} collect_serial_numbers
   */
  exports.prototype['collect_serial_numbers'] = undefined;
  /**
   * Country code of origin for customs forms.  (ISO-3166 two letter code)
   * @member {String} country_code_of_origin
   */
  exports.prototype['country_code_of_origin'] = undefined;
  /**
   * Customs description
   * @member {String} customs_description
   */
  exports.prototype['customs_description'] = undefined;
  /**
   * Customs value
   * @member {Number} customs_value
   */
  exports.prototype['customs_value'] = undefined;
  /**
   * Delivery on Friday
   * @member {Boolean} delivery_on_friday
   */
  exports.prototype['delivery_on_friday'] = undefined;
  /**
   * Delivery on Monday
   * @member {Boolean} delivery_on_monday
   */
  exports.prototype['delivery_on_monday'] = undefined;
  /**
   * Delivery on Saturday
   * @member {Boolean} delivery_on_saturday
   */
  exports.prototype['delivery_on_saturday'] = undefined;
  /**
   * Delivery on Sunday
   * @member {Boolean} delivery_on_sunday
   */
  exports.prototype['delivery_on_sunday'] = undefined;
  /**
   * Delivery on Thursday
   * @member {Boolean} delivery_on_thursday
   */
  exports.prototype['delivery_on_thursday'] = undefined;
  /**
   * Delivery on Tuesday
   * @member {Boolean} delivery_on_tuesday
   */
  exports.prototype['delivery_on_tuesday'] = undefined;
  /**
   * Delivery on Wednesday
   * @member {Boolean} delivery_on_wednesday
   */
  exports.prototype['delivery_on_wednesday'] = undefined;
  /**
   * Destination markups
   * @member {Array.<module:com.ultracart.admin.v2.models/ItemShippingDestinationMarkup>} destination_markups
   */
  exports.prototype['destination_markups'] = undefined;
  /**
   * Destination restrictions
   * @member {Array.<module:com.ultracart.admin.v2.models/ItemShippingDestinationRestriction>} destination_restrictions
   */
  exports.prototype['destination_restrictions'] = undefined;
  /**
   * Distribution centers
   * @member {Array.<module:com.ultracart.admin.v2.models/ItemShippingDistributionCenter>} distribution_centers
   */
  exports.prototype['distribution_centers'] = undefined;
  /**
   * Estimated time of arrival
   * @member {String} eta
   */
  exports.prototype['eta'] = undefined;
  /**
   * Qualifies for free shipping
   * @member {Boolean} free_shipping
   */
  exports.prototype['free_shipping'] = undefined;
  /**
   * Freight class
   * @member {String} freight_class
   */
  exports.prototype['freight_class'] = undefined;
  /**
   * Hazardous material
   * @member {Boolean} hazmat
   */
  exports.prototype['hazmat'] = undefined;
  /**
   * True if this item is made to order
   * @member {Boolean} made_to_order
   */
  exports.prototype['made_to_order'] = undefined;
  /**
   * Number of days lead time it takes to make the item before ite can ship
   * @member {Number} made_to_order_lead_time
   */
  exports.prototype['made_to_order_lead_time'] = undefined;
  /**
   * Maximum days allowed in transit
   * @member {Number} max_days_time_in_transit
   */
  exports.prototype['max_days_time_in_transit'] = undefined;
  /**
   * Methods
   * @member {Array.<module:com.ultracart.admin.v2.models/ItemShippingMethod>} methods
   */
  exports.prototype['methods'] = undefined;
  /**
   * No shipping discounts
   * @member {Boolean} no_shipping_discount
   */
  exports.prototype['no_shipping_discount'] = undefined;
  /**
   * Package requirements
   * @member {Array.<module:com.ultracart.admin.v2.models/ItemShippingPackageRequirement>} package_requirements
   */
  exports.prototype['package_requirements'] = undefined;
  /**
   * Perishable class name
   * @member {String} perishable_class_name
   */
  exports.prototype['perishable_class_name'] = undefined;
  /**
   * Perishable class object identifier
   * @member {Number} perishable_class_oid
   */
  exports.prototype['perishable_class_oid'] = undefined;
  /**
   * This item is on pre-order
   * @member {Boolean} preorder
   */
  exports.prototype['preorder'] = undefined;
  /**
   * True to require customer to select a delivery date
   * @member {Boolean} require_delivery_date
   */
  exports.prototype['require_delivery_date'] = undefined;
  /**
   * Restrict shipment on Friday
   * @member {Boolean} restrict_shipment_on_friday
   */
  exports.prototype['restrict_shipment_on_friday'] = undefined;
  /**
   * Restrict shipment on Monday
   * @member {Boolean} restrict_shipment_on_monday
   */
  exports.prototype['restrict_shipment_on_monday'] = undefined;
  /**
   * Restrict shipment on Saturday
   * @member {Boolean} restrict_shipment_on_saturday
   */
  exports.prototype['restrict_shipment_on_saturday'] = undefined;
  /**
   * Restrict shipment on Sunday
   * @member {Boolean} restrict_shipment_on_sunday
   */
  exports.prototype['restrict_shipment_on_sunday'] = undefined;
  /**
   * Restrict shipment on Thursday
   * @member {Boolean} restrict_shipment_on_thursday
   */
  exports.prototype['restrict_shipment_on_thursday'] = undefined;
  /**
   * Restrict shipment on Tuesday
   * @member {Boolean} restrict_shipment_on_tuesday
   */
  exports.prototype['restrict_shipment_on_tuesday'] = undefined;
  /**
   * Restrict shipment on Wednesday
   * @member {Boolean} restrict_shipment_on_wednesday
   */
  exports.prototype['restrict_shipment_on_wednesday'] = undefined;
  /**
   * Ship this item in a separate box
   * @member {Boolean} ship_separately
   */
  exports.prototype['ship_separately'] = undefined;
  /**
   * @member {module:com.ultracart.admin.v2.models/Weight} ship_separately_additional_weight
   */
  exports.prototype['ship_separately_additional_weight'] = undefined;
  /**
   * @member {module:com.ultracart.admin.v2.models/Distance} ship_separately_height
   */
  exports.prototype['ship_separately_height'] = undefined;
  /**
   * @member {module:com.ultracart.admin.v2.models/Distance} ship_separately_length
   */
  exports.prototype['ship_separately_length'] = undefined;
  /**
   * Ship separately package special type
   * @member {String} ship_separately_package_special_type
   */
  exports.prototype['ship_separately_package_special_type'] = undefined;
  /**
   * @member {module:com.ultracart.admin.v2.models/Distance} ship_separately_width
   */
  exports.prototype['ship_separately_width'] = undefined;
  /**
   * Special product type (USPS Media Mail)
   * @member {String} special_product_type
   */
  exports.prototype['special_product_type'] = undefined;
  /**
   * Track inventory
   * @member {Boolean} track_inventory
   */
  exports.prototype['track_inventory'] = undefined;



  return exports;
}));


