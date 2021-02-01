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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ItemEbayMarketListing'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ItemEbayMarketListing'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ItemEbayMarketPlaceAnalysis = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ItemEbayMarketListing);
  }
}(this, function(ApiClient, ItemEbayMarketListing) {
  'use strict';

  /**
   * The ItemEbayMarketPlaceAnalysis model module.
   * @module com.ultracart.admin.v2.models/ItemEbayMarketPlaceAnalysis
   * @version 3.0.76
   */

  /**
   * Constructs a new <code>ItemEbayMarketPlaceAnalysis</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemEbayMarketPlaceAnalysis
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemEbayMarketPlaceAnalysis</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemEbayMarketPlaceAnalysis} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemEbayMarketPlaceAnalysis} The populated <code>ItemEbayMarketPlaceAnalysis</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('adjusted_price'))
        obj.adjusted_price = ApiClient.convertToType(data['adjusted_price'], 'Number');
      if (data.hasOwnProperty('adjusted_shipping'))
        obj.adjusted_shipping = ApiClient.convertToType(data['adjusted_shipping'], 'Number');
      if (data.hasOwnProperty('adjusted_total'))
        obj.adjusted_total = ApiClient.convertToType(data['adjusted_total'], 'Number');
      if (data.hasOwnProperty('cogs'))
        obj.cogs = ApiClient.convertToType(data['cogs'], 'Number');
      if (data.hasOwnProperty('final_value_fee'))
        obj.final_value_fee = ApiClient.convertToType(data['final_value_fee'], 'Number');
      if (data.hasOwnProperty('minimum_advertised_price'))
        obj.minimum_advertised_price = ApiClient.convertToType(data['minimum_advertised_price'], 'Number');
      if (data.hasOwnProperty('other_listings'))
        obj.other_listings = ApiClient.convertToType(data['other_listings'], [ItemEbayMarketListing]);
      if (data.hasOwnProperty('our_listing'))
        obj.our_listing = ItemEbayMarketListing.constructFromObject(data['our_listing']);
      if (data.hasOwnProperty('overhead'))
        obj.overhead = ApiClient.convertToType(data['overhead'], 'Number');
      if (data.hasOwnProperty('profit_potential'))
        obj.profit_potential = ApiClient.convertToType(data['profit_potential'], 'Number');
    }
    return obj;
  }

  /**
   * Adjusted price
   * @member {Number} adjusted_price
   */
  exports.prototype.adjusted_price = undefined;

  /**
   * Adjusted shipping
   * @member {Number} adjusted_shipping
   */
  exports.prototype.adjusted_shipping = undefined;

  /**
   * Adjusted total
   * @member {Number} adjusted_total
   */
  exports.prototype.adjusted_total = undefined;

  /**
   * Cost of goods sold
   * @member {Number} cogs
   */
  exports.prototype.cogs = undefined;

  /**
   * Final value fee
   * @member {Number} final_value_fee
   */
  exports.prototype.final_value_fee = undefined;

  /**
   * Minimum advertised price
   * @member {Number} minimum_advertised_price
   */
  exports.prototype.minimum_advertised_price = undefined;

  /**
   * Other listings
   * @member {Array.<module:com.ultracart.admin.v2.models/ItemEbayMarketListing>} other_listings
   */
  exports.prototype.other_listings = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemEbayMarketListing} our_listing
   */
  exports.prototype.our_listing = undefined;

  /**
   * Overhead
   * @member {Number} overhead
   */
  exports.prototype.overhead = undefined;

  /**
   * Profit potential
   * @member {Number} profit_potential
   */
  exports.prototype.profit_potential = undefined;

  return exports;

}));
