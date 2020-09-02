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
    define(['ApiClient', 'com.ultracart.admin.v2.models/Currency'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Currency'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.OrderBuysafe = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Currency);
  }
}(this, function(ApiClient, Currency) {
  'use strict';

  /**
   * The OrderBuysafe model module.
   * @module com.ultracart.admin.v2.models/OrderBuysafe
   * @version 3.0.23
   */

  /**
   * Constructs a new <code>OrderBuysafe</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderBuysafe
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderBuysafe</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderBuysafe} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderBuysafe} The populated <code>OrderBuysafe</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('buysafe_bond_available'))
        obj.buysafe_bond_available = ApiClient.convertToType(data['buysafe_bond_available'], 'Boolean');
      if (data.hasOwnProperty('buysafe_bond_cost'))
        obj.buysafe_bond_cost = Currency.constructFromObject(data['buysafe_bond_cost']);
      if (data.hasOwnProperty('buysafe_bond_free'))
        obj.buysafe_bond_free = ApiClient.convertToType(data['buysafe_bond_free'], 'Boolean');
      if (data.hasOwnProperty('buysafe_bond_refunded'))
        obj.buysafe_bond_refunded = Currency.constructFromObject(data['buysafe_bond_refunded']);
      if (data.hasOwnProperty('buysafe_bond_wanted'))
        obj.buysafe_bond_wanted = ApiClient.convertToType(data['buysafe_bond_wanted'], 'Boolean');
      if (data.hasOwnProperty('buysafe_shopping_cart_id'))
        obj.buysafe_shopping_cart_id = ApiClient.convertToType(data['buysafe_shopping_cart_id'], 'String');
    }
    return obj;
  }

  /**
   * True if a buySAFE bond was available for purchase on this order
   * @member {Boolean} buysafe_bond_available
   */
  exports.prototype.buysafe_bond_available = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} buysafe_bond_cost
   */
  exports.prototype.buysafe_bond_cost = undefined;

  /**
   * True if the buySAFE bond was free for this order
   * @member {Boolean} buysafe_bond_free
   */
  exports.prototype.buysafe_bond_free = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} buysafe_bond_refunded
   */
  exports.prototype.buysafe_bond_refunded = undefined;

  /**
   * True if the buySAFE bond was wanted by the customer
   * @member {Boolean} buysafe_bond_wanted
   */
  exports.prototype.buysafe_bond_wanted = undefined;

  /**
   * Shopping cart ID associated with the buySAFE bond
   * @member {String} buysafe_shopping_cart_id
   */
  exports.prototype.buysafe_shopping_cart_id = undefined;

  return exports;

}));
