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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ItemEbayCategorySpecific', 'com.ultracart.admin.v2.models/ItemEbayMarketPlaceAnalysis'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ItemEbayCategorySpecific'), require('./ItemEbayMarketPlaceAnalysis'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ItemEbay = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ItemEbayCategorySpecific, root.UltraCartRestApiV2.ItemEbayMarketPlaceAnalysis);
  }
}(this, function(ApiClient, ItemEbayCategorySpecific, ItemEbayMarketPlaceAnalysis) {
  'use strict';

  /**
   * The ItemEbay model module.
   * @module com.ultracart.admin.v2.models/ItemEbay
   * @version 3.10.4
   */

  /**
   * Constructs a new <code>ItemEbay</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemEbay
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemEbay</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemEbay} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemEbay} The populated <code>ItemEbay</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('active'))
        obj.active = ApiClient.convertToType(data['active'], 'Boolean');
      if (data.hasOwnProperty('category_id'))
        obj.category_id = ApiClient.convertToType(data['category_id'], 'Number');
      if (data.hasOwnProperty('category_specifics'))
        obj.category_specifics = ApiClient.convertToType(data['category_specifics'], [ItemEbayCategorySpecific]);
      if (data.hasOwnProperty('condition_description'))
        obj.condition_description = ApiClient.convertToType(data['condition_description'], 'String');
      if (data.hasOwnProperty('condition_id'))
        obj.condition_id = ApiClient.convertToType(data['condition_id'], 'Number');
      if (data.hasOwnProperty('consecutive_failures'))
        obj.consecutive_failures = ApiClient.convertToType(data['consecutive_failures'], 'Number');
      if (data.hasOwnProperty('custom_category1'))
        obj.custom_category1 = ApiClient.convertToType(data['custom_category1'], 'Number');
      if (data.hasOwnProperty('custom_category2'))
        obj.custom_category2 = ApiClient.convertToType(data['custom_category2'], 'Number');
      if (data.hasOwnProperty('dispatch_time_max'))
        obj.dispatch_time_max = ApiClient.convertToType(data['dispatch_time_max'], 'Number');
      if (data.hasOwnProperty('domestic_1_additional_cost'))
        obj.domestic_1_additional_cost = ApiClient.convertToType(data['domestic_1_additional_cost'], 'Number');
      if (data.hasOwnProperty('domestic_1_first_cost'))
        obj.domestic_1_first_cost = ApiClient.convertToType(data['domestic_1_first_cost'], 'Number');
      if (data.hasOwnProperty('domestic_2_additional_cost'))
        obj.domestic_2_additional_cost = ApiClient.convertToType(data['domestic_2_additional_cost'], 'Number');
      if (data.hasOwnProperty('domestic_2_first_cost'))
        obj.domestic_2_first_cost = ApiClient.convertToType(data['domestic_2_first_cost'], 'Number');
      if (data.hasOwnProperty('domestic_3_additional_cost'))
        obj.domestic_3_additional_cost = ApiClient.convertToType(data['domestic_3_additional_cost'], 'Number');
      if (data.hasOwnProperty('domestic_3_first_cost'))
        obj.domestic_3_first_cost = ApiClient.convertToType(data['domestic_3_first_cost'], 'Number');
      if (data.hasOwnProperty('domestic_4_additional_cost'))
        obj.domestic_4_additional_cost = ApiClient.convertToType(data['domestic_4_additional_cost'], 'Number');
      if (data.hasOwnProperty('domestic_4_first_cost'))
        obj.domestic_4_first_cost = ApiClient.convertToType(data['domestic_4_first_cost'], 'Number');
      if (data.hasOwnProperty('ebay_auction_id'))
        obj.ebay_auction_id = ApiClient.convertToType(data['ebay_auction_id'], 'String');
      if (data.hasOwnProperty('ebay_specific_inventory'))
        obj.ebay_specific_inventory = ApiClient.convertToType(data['ebay_specific_inventory'], 'Number');
      if (data.hasOwnProperty('ebay_template_name'))
        obj.ebay_template_name = ApiClient.convertToType(data['ebay_template_name'], 'String');
      if (data.hasOwnProperty('ebay_template_oid'))
        obj.ebay_template_oid = ApiClient.convertToType(data['ebay_template_oid'], 'Number');
      if (data.hasOwnProperty('end_time'))
        obj.end_time = ApiClient.convertToType(data['end_time'], 'String');
      if (data.hasOwnProperty('free_shipping'))
        obj.free_shipping = ApiClient.convertToType(data['free_shipping'], 'Boolean');
      if (data.hasOwnProperty('free_shipping_method'))
        obj.free_shipping_method = ApiClient.convertToType(data['free_shipping_method'], 'String');
      if (data.hasOwnProperty('international_1_additional_cost'))
        obj.international_1_additional_cost = ApiClient.convertToType(data['international_1_additional_cost'], 'Number');
      if (data.hasOwnProperty('international_1_first_cost'))
        obj.international_1_first_cost = ApiClient.convertToType(data['international_1_first_cost'], 'Number');
      if (data.hasOwnProperty('international_2_additional_cost'))
        obj.international_2_additional_cost = ApiClient.convertToType(data['international_2_additional_cost'], 'Number');
      if (data.hasOwnProperty('international_2_first_cost'))
        obj.international_2_first_cost = ApiClient.convertToType(data['international_2_first_cost'], 'Number');
      if (data.hasOwnProperty('international_3_additional_cost'))
        obj.international_3_additional_cost = ApiClient.convertToType(data['international_3_additional_cost'], 'Number');
      if (data.hasOwnProperty('international_3_first_cost'))
        obj.international_3_first_cost = ApiClient.convertToType(data['international_3_first_cost'], 'Number');
      if (data.hasOwnProperty('international_4_additional_cost'))
        obj.international_4_additional_cost = ApiClient.convertToType(data['international_4_additional_cost'], 'Number');
      if (data.hasOwnProperty('international_4_first_cost'))
        obj.international_4_first_cost = ApiClient.convertToType(data['international_4_first_cost'], 'Number');
      if (data.hasOwnProperty('last_status_dts'))
        obj.last_status_dts = ApiClient.convertToType(data['last_status_dts'], 'String');
      if (data.hasOwnProperty('listed_dispatch_time_max'))
        obj.listed_dispatch_time_max = ApiClient.convertToType(data['listed_dispatch_time_max'], 'Number');
      if (data.hasOwnProperty('listed_ebay_template_oid'))
        obj.listed_ebay_template_oid = ApiClient.convertToType(data['listed_ebay_template_oid'], 'Number');
      if (data.hasOwnProperty('listing_dts'))
        obj.listing_dts = ApiClient.convertToType(data['listing_dts'], 'String');
      if (data.hasOwnProperty('listing_duration'))
        obj.listing_duration = ApiClient.convertToType(data['listing_duration'], 'String');
      if (data.hasOwnProperty('listing_price'))
        obj.listing_price = ApiClient.convertToType(data['listing_price'], 'Number');
      if (data.hasOwnProperty('listing_price_override'))
        obj.listing_price_override = ApiClient.convertToType(data['listing_price_override'], 'Number');
      if (data.hasOwnProperty('listing_type'))
        obj.listing_type = ApiClient.convertToType(data['listing_type'], 'String');
      if (data.hasOwnProperty('marketplace_analysis'))
        obj.marketplace_analysis = ItemEbayMarketPlaceAnalysis.constructFromObject(data['marketplace_analysis']);
      if (data.hasOwnProperty('marketplace_analysis_perform'))
        obj.marketplace_analysis_perform = ApiClient.convertToType(data['marketplace_analysis_perform'], 'Boolean');
      if (data.hasOwnProperty('marketplace_final_value_fee_percentage'))
        obj.marketplace_final_value_fee_percentage = ApiClient.convertToType(data['marketplace_final_value_fee_percentage'], 'Number');
      if (data.hasOwnProperty('marketplace_last_check_dts'))
        obj.marketplace_last_check_dts = ApiClient.convertToType(data['marketplace_last_check_dts'], 'String');
      if (data.hasOwnProperty('marketplace_lowest'))
        obj.marketplace_lowest = ApiClient.convertToType(data['marketplace_lowest'], 'Boolean');
      if (data.hasOwnProperty('marketplace_map_violation'))
        obj.marketplace_map_violation = ApiClient.convertToType(data['marketplace_map_violation'], 'Boolean');
      if (data.hasOwnProperty('marketplace_multiplier'))
        obj.marketplace_multiplier = ApiClient.convertToType(data['marketplace_multiplier'], 'Number');
      if (data.hasOwnProperty('marketplace_other_price'))
        obj.marketplace_other_price = ApiClient.convertToType(data['marketplace_other_price'], 'Number');
      if (data.hasOwnProperty('marketplace_other_seller'))
        obj.marketplace_other_seller = ApiClient.convertToType(data['marketplace_other_seller'], 'String');
      if (data.hasOwnProperty('marketplace_other_shipping'))
        obj.marketplace_other_shipping = ApiClient.convertToType(data['marketplace_other_shipping'], 'Number');
      if (data.hasOwnProperty('marketplace_other_total'))
        obj.marketplace_other_total = ApiClient.convertToType(data['marketplace_other_total'], 'Number');
      if (data.hasOwnProperty('marketplace_our_additional_profit_potential'))
        obj.marketplace_our_additional_profit_potential = ApiClient.convertToType(data['marketplace_our_additional_profit_potential'], 'Number');
      if (data.hasOwnProperty('marketplace_our_price'))
        obj.marketplace_our_price = ApiClient.convertToType(data['marketplace_our_price'], 'Number');
      if (data.hasOwnProperty('marketplace_our_profit'))
        obj.marketplace_our_profit = ApiClient.convertToType(data['marketplace_our_profit'], 'Number');
      if (data.hasOwnProperty('marketplace_our_shipping'))
        obj.marketplace_our_shipping = ApiClient.convertToType(data['marketplace_our_shipping'], 'Number');
      if (data.hasOwnProperty('marketplace_our_total'))
        obj.marketplace_our_total = ApiClient.convertToType(data['marketplace_our_total'], 'Number');
      if (data.hasOwnProperty('marketplace_overhead'))
        obj.marketplace_overhead = ApiClient.convertToType(data['marketplace_overhead'], 'Number');
      if (data.hasOwnProperty('marketplace_profitable'))
        obj.marketplace_profitable = ApiClient.convertToType(data['marketplace_profitable'], 'Boolean');
      if (data.hasOwnProperty('next_attempt_dts'))
        obj.next_attempt_dts = ApiClient.convertToType(data['next_attempt_dts'], 'String');
      if (data.hasOwnProperty('next_listing_duration'))
        obj.next_listing_duration = ApiClient.convertToType(data['next_listing_duration'], 'String');
      if (data.hasOwnProperty('no_promotional_shipping'))
        obj.no_promotional_shipping = ApiClient.convertToType(data['no_promotional_shipping'], 'Boolean');
      if (data.hasOwnProperty('packaging_handling_costs'))
        obj.packaging_handling_costs = ApiClient.convertToType(data['packaging_handling_costs'], 'Number');
      if (data.hasOwnProperty('previous_ebay_auction_id'))
        obj.previous_ebay_auction_id = ApiClient.convertToType(data['previous_ebay_auction_id'], 'String');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
      if (data.hasOwnProperty('reserve_price'))
        obj.reserve_price = ApiClient.convertToType(data['reserve_price'], 'Number');
      if (data.hasOwnProperty('send_dimensions_and_weight'))
        obj.send_dimensions_and_weight = ApiClient.convertToType(data['send_dimensions_and_weight'], 'String');
      if (data.hasOwnProperty('start_time'))
        obj.start_time = ApiClient.convertToType(data['start_time'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('target_dispatch_time_max'))
        obj.target_dispatch_time_max = ApiClient.convertToType(data['target_dispatch_time_max'], 'Number');
    }
    return obj;
  }

  /**
   * True if the item is active for listing
   * @member {Boolean} active
   */
  exports.prototype.active = undefined;

  /**
   * e-Bay category ID
   * @member {Number} category_id
   */
  exports.prototype.category_id = undefined;

  /**
   * Answers to category specific questions
   * @member {Array.<module:com.ultracart.admin.v2.models/ItemEbayCategorySpecific>} category_specifics
   */
  exports.prototype.category_specifics = undefined;

  /**
   * Description of the condition (e-Bay constant)
   * @member {String} condition_description
   */
  exports.prototype.condition_description = undefined;

  /**
   * Numerical ID of the condition (e-Bay constant)
   * @member {Number} condition_id
   */
  exports.prototype.condition_id = undefined;

  /**
   * Number of consecutive failures trying to list this item
   * @member {Number} consecutive_failures
   */
  exports.prototype.consecutive_failures = undefined;

  /**
   * e-Bay Store category 1
   * @member {Number} custom_category1
   */
  exports.prototype.custom_category1 = undefined;

  /**
   * e-Bay Store category 2
   * @member {Number} custom_category2
   */
  exports.prototype.custom_category2 = undefined;

  /**
   * Maximum number of days it will take to ship the item
   * @member {Number} dispatch_time_max
   */
  exports.prototype.dispatch_time_max = undefined;

  /**
   * Domestic 1 method additional item cost
   * @member {Number} domestic_1_additional_cost
   */
  exports.prototype.domestic_1_additional_cost = undefined;

  /**
   * Domestic 1 method first item cost
   * @member {Number} domestic_1_first_cost
   */
  exports.prototype.domestic_1_first_cost = undefined;

  /**
   * Domestic 2 method additional item cost
   * @member {Number} domestic_2_additional_cost
   */
  exports.prototype.domestic_2_additional_cost = undefined;

  /**
   * Domestic 2 method first item cost
   * @member {Number} domestic_2_first_cost
   */
  exports.prototype.domestic_2_first_cost = undefined;

  /**
   * Domestic 3 method additional item cost
   * @member {Number} domestic_3_additional_cost
   */
  exports.prototype.domestic_3_additional_cost = undefined;

  /**
   * Domestic 3 method first item cost
   * @member {Number} domestic_3_first_cost
   */
  exports.prototype.domestic_3_first_cost = undefined;

  /**
   * Domestic 4 method additional item cost
   * @member {Number} domestic_4_additional_cost
   */
  exports.prototype.domestic_4_additional_cost = undefined;

  /**
   * Domestic 4 method first item cost
   * @member {Number} domestic_4_first_cost
   */
  exports.prototype.domestic_4_first_cost = undefined;

  /**
   * If listed, this is the e-Bay auction id
   * @member {String} ebay_auction_id
   */
  exports.prototype.ebay_auction_id = undefined;

  /**
   * e-Bay specific inventory
   * @member {Number} ebay_specific_inventory
   */
  exports.prototype.ebay_specific_inventory = undefined;

  /**
   * The template name to use hwen rendering the e-Bay listing
   * @member {String} ebay_template_name
   */
  exports.prototype.ebay_template_name = undefined;

  /**
   * The template object identifier to use when rendering the e-Bay listing
   * @member {Number} ebay_template_oid
   */
  exports.prototype.ebay_template_oid = undefined;

  /**
   * Date/time of the auction end
   * @member {String} end_time
   */
  exports.prototype.end_time = undefined;

  /**
   * True if item receives free shipping
   * @member {Boolean} free_shipping
   */
  exports.prototype.free_shipping = undefined;

  /**
   * The method that is free for free shipping
   * @member {String} free_shipping_method
   */
  exports.prototype.free_shipping_method = undefined;

  /**
   * International 1 method additional item cost
   * @member {Number} international_1_additional_cost
   */
  exports.prototype.international_1_additional_cost = undefined;

  /**
   * International 1 method first item cost
   * @member {Number} international_1_first_cost
   */
  exports.prototype.international_1_first_cost = undefined;

  /**
   * International 2 method additional item cost
   * @member {Number} international_2_additional_cost
   */
  exports.prototype.international_2_additional_cost = undefined;

  /**
   * International 2 method first item cost
   * @member {Number} international_2_first_cost
   */
  exports.prototype.international_2_first_cost = undefined;

  /**
   * International 3 method additional item cost
   * @member {Number} international_3_additional_cost
   */
  exports.prototype.international_3_additional_cost = undefined;

  /**
   * International 3 method first item cost
   * @member {Number} international_3_first_cost
   */
  exports.prototype.international_3_first_cost = undefined;

  /**
   * International 4 method additional item cost
   * @member {Number} international_4_additional_cost
   */
  exports.prototype.international_4_additional_cost = undefined;

  /**
   * International 4 method first item cost
   * @member {Number} international_4_first_cost
   */
  exports.prototype.international_4_first_cost = undefined;

  /**
   * Date/time of the last status check
   * @member {String} last_status_dts
   */
  exports.prototype.last_status_dts = undefined;

  /**
   * Current listing dispatch time maximum
   * @member {Number} listed_dispatch_time_max
   */
  exports.prototype.listed_dispatch_time_max = undefined;

  /**
   * The template object identifier used for the listing
   * @member {Number} listed_ebay_template_oid
   */
  exports.prototype.listed_ebay_template_oid = undefined;

  /**
   * Date/time of the listing
   * @member {String} listing_dts
   */
  exports.prototype.listing_dts = undefined;

  /**
   * The duration of the listing
   * @member {String} listing_duration
   */
  exports.prototype.listing_duration = undefined;

  /**
   * Price to list the item at
   * @member {Number} listing_price
   */
  exports.prototype.listing_price = undefined;

  /**
   * The price to list the item at if different than the regular UltraCart item price
   * @member {Number} listing_price_override
   */
  exports.prototype.listing_price_override = undefined;

  /**
   * The type of e-Bay listing
   * @member {String} listing_type
   */
  exports.prototype.listing_type = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemEbayMarketPlaceAnalysis} marketplace_analysis
   */
  exports.prototype.marketplace_analysis = undefined;

  /**
   * True if marketplace analysis should be performed
   * @member {Boolean} marketplace_analysis_perform
   */
  exports.prototype.marketplace_analysis_perform = undefined;

  /**
   * Marketplace FVF percentage
   * @member {Number} marketplace_final_value_fee_percentage
   */
  exports.prototype.marketplace_final_value_fee_percentage = undefined;

  /**
   * Date/time of the marketplace analysis last check
   * @member {String} marketplace_last_check_dts
   */
  exports.prototype.marketplace_last_check_dts = undefined;

  /**
   * True if we are the lowest offer in the marketplace
   * @member {Boolean} marketplace_lowest
   */
  exports.prototype.marketplace_lowest = undefined;

  /**
   * True if another seller is violating MAP
   * @member {Boolean} marketplace_map_violation
   */
  exports.prototype.marketplace_map_violation = undefined;

  /**
   * Marketplace multiplier
   * @member {Number} marketplace_multiplier
   */
  exports.prototype.marketplace_multiplier = undefined;

  /**
   * Marketplace other price
   * @member {Number} marketplace_other_price
   */
  exports.prototype.marketplace_other_price = undefined;

  /**
   * Marketplace other seller
   * @member {String} marketplace_other_seller
   */
  exports.prototype.marketplace_other_seller = undefined;

  /**
   * Marketplace other shipping
   * @member {Number} marketplace_other_shipping
   */
  exports.prototype.marketplace_other_shipping = undefined;

  /**
   * Marketplace other total
   * @member {Number} marketplace_other_total
   */
  exports.prototype.marketplace_other_total = undefined;

  /**
   * Marketplace our additional profit potential
   * @member {Number} marketplace_our_additional_profit_potential
   */
  exports.prototype.marketplace_our_additional_profit_potential = undefined;

  /**
   * Marketplace our price
   * @member {Number} marketplace_our_price
   */
  exports.prototype.marketplace_our_price = undefined;

  /**
   * Marketplace our profit
   * @member {Number} marketplace_our_profit
   */
  exports.prototype.marketplace_our_profit = undefined;

  /**
   * Marketplace our shipping
   * @member {Number} marketplace_our_shipping
   */
  exports.prototype.marketplace_our_shipping = undefined;

  /**
   * Marketplace our total
   * @member {Number} marketplace_our_total
   */
  exports.prototype.marketplace_our_total = undefined;

  /**
   * Marketplace overhead
   * @member {Number} marketplace_overhead
   */
  exports.prototype.marketplace_overhead = undefined;

  /**
   * True if our listing is profitable to sell
   * @member {Boolean} marketplace_profitable
   */
  exports.prototype.marketplace_profitable = undefined;

  /**
   * Date/time for the next attempt to list
   * @member {String} next_attempt_dts
   */
  exports.prototype.next_attempt_dts = undefined;

  /**
   * The next listing duration to use when the current listing ends.
   * @member {String} next_listing_duration
   */
  exports.prototype.next_listing_duration = undefined;

  /**
   * True if the item should not qualify for promotional shipping
   * @member {Boolean} no_promotional_shipping
   */
  exports.prototype.no_promotional_shipping = undefined;

  /**
   * Packaging and handling costs
   * @member {Number} packaging_handling_costs
   */
  exports.prototype.packaging_handling_costs = undefined;

  /**
   * Previous e-Bay auction id
   * @member {String} previous_ebay_auction_id
   */
  exports.prototype.previous_ebay_auction_id = undefined;

  /**
   * Quantity available of the item
   * @member {Number} quantity
   */
  exports.prototype.quantity = undefined;

  /**
   * Reserve price
   * @member {Number} reserve_price
   */
  exports.prototype.reserve_price = undefined;

  /**
   * How to send the item dimensions and weights to e-Bay
   * @member {String} send_dimensions_and_weight
   */
  exports.prototype.send_dimensions_and_weight = undefined;

  /**
   * Date/time of the auction start
   * @member {String} start_time
   */
  exports.prototype.start_time = undefined;

  /**
   * Status of the item's listing
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * Typical number of days it will take to ship the item
   * @member {Number} target_dispatch_time_max
   */
  exports.prototype.target_dispatch_time_max = undefined;

  return exports;

}));
