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
    define(['ApiClient', 'com.ultracart.admin.v2.models/Currency'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Currency'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CartBuysafe = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Currency);
  }
}(this, function(ApiClient, Currency) {
  'use strict';




  /**
   * The CartBuysafe model module.
   * @module com.ultracart.admin.v2.models/CartBuysafe
   * @version 2.4.110
   */

  /**
   * Constructs a new <code>CartBuysafe</code>.
   * @alias module:com.ultracart.admin.v2.models/CartBuysafe
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>CartBuysafe</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CartBuysafe} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CartBuysafe} The populated <code>CartBuysafe</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bond_available')) {
        obj['bond_available'] = ApiClient.convertToType(data['bond_available'], 'Boolean');
      }
      if (data.hasOwnProperty('bond_cost')) {
        obj['bond_cost'] = Currency.constructFromObject(data['bond_cost']);
      }
      if (data.hasOwnProperty('bond_free')) {
        obj['bond_free'] = ApiClient.convertToType(data['bond_free'], 'Boolean');
      }
      if (data.hasOwnProperty('bond_wanted')) {
        obj['bond_wanted'] = ApiClient.convertToType(data['bond_wanted'], 'Boolean');
      }
      if (data.hasOwnProperty('cart_display_text')) {
        obj['cart_display_text'] = ApiClient.convertToType(data['cart_display_text'], 'String');
      }
      if (data.hasOwnProperty('cart_display_url')) {
        obj['cart_display_url'] = ApiClient.convertToType(data['cart_display_url'], 'String');
      }
    }
    return obj;
  }

  /**
   * True if buySAFE is willing to bond the order
   * @member {Boolean} bond_available
   */
  exports.prototype['bond_available'] = undefined;
  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} bond_cost
   */
  exports.prototype['bond_cost'] = undefined;
  /**
   * True if the bond is free (merchant paying for it)
   * @member {Boolean} bond_free
   */
  exports.prototype['bond_free'] = undefined;
  /**
   * True if the customer wants the bond
   * @member {Boolean} bond_wanted
   */
  exports.prototype['bond_wanted'] = undefined;
  /**
   * Recommend text to display to the customer
   * @member {String} cart_display_text
   */
  exports.prototype['cart_display_text'] = undefined;
  /**
   * URL associated with the recommended text
   * @member {String} cart_display_url
   */
  exports.prototype['cart_display_url'] = undefined;



  return exports;
}));


