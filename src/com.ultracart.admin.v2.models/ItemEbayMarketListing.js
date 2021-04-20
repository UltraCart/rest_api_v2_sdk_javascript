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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ItemEbayMarketListing = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ItemEbayMarketListing model module.
   * @module com.ultracart.admin.v2.models/ItemEbayMarketListing
   * @version 3.1.26
   */

  /**
   * Constructs a new <code>ItemEbayMarketListing</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemEbayMarketListing
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemEbayMarketListing</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemEbayMarketListing} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemEbayMarketListing} The populated <code>ItemEbayMarketListing</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('auction_id'))
        obj.auction_id = ApiClient.convertToType(data['auction_id'], 'String');
      if (data.hasOwnProperty('price'))
        obj.price = ApiClient.convertToType(data['price'], 'Number');
      if (data.hasOwnProperty('seller'))
        obj.seller = ApiClient.convertToType(data['seller'], 'String');
      if (data.hasOwnProperty('shipping'))
        obj.shipping = ApiClient.convertToType(data['shipping'], 'Number');
      if (data.hasOwnProperty('total'))
        obj.total = ApiClient.convertToType(data['total'], 'Number');
    }
    return obj;
  }

  /**
   * Auction ID
   * @member {String} auction_id
   */
  exports.prototype.auction_id = undefined;

  /**
   * Price
   * @member {Number} price
   */
  exports.prototype.price = undefined;

  /**
   * Seller
   * @member {String} seller
   */
  exports.prototype.seller = undefined;

  /**
   * Shipping
   * @member {Number} shipping
   */
  exports.prototype.shipping = undefined;

  /**
   * Total
   * @member {Number} total
   */
  exports.prototype.total = undefined;

  return exports;

}));
