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
    define(['ApiClient', 'com.ultracart.admin.v2.models/PaymentsConfigurationRestrictions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentsConfigurationRestrictions'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.PaymentsConfigurationPurchaseOrder = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.PaymentsConfigurationRestrictions);
  }
}(this, function(ApiClient, PaymentsConfigurationRestrictions) {
  'use strict';

  /**
   * The PaymentsConfigurationPurchaseOrder model module.
   * @module com.ultracart.admin.v2.models/PaymentsConfigurationPurchaseOrder
   * @version 3.6.37
   */

  /**
   * Constructs a new <code>PaymentsConfigurationPurchaseOrder</code>.
   * @alias module:com.ultracart.admin.v2.models/PaymentsConfigurationPurchaseOrder
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PaymentsConfigurationPurchaseOrder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/PaymentsConfigurationPurchaseOrder} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/PaymentsConfigurationPurchaseOrder} The populated <code>PaymentsConfigurationPurchaseOrder</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accept_purchase_orders'))
        obj.accept_purchase_orders = ApiClient.convertToType(data['accept_purchase_orders'], 'Boolean');
      if (data.hasOwnProperty('approved_customers_only'))
        obj.approved_customers_only = ApiClient.convertToType(data['approved_customers_only'], 'Boolean');
      if (data.hasOwnProperty('prevent_duplicate_number'))
        obj.prevent_duplicate_number = ApiClient.convertToType(data['prevent_duplicate_number'], 'Boolean');
      if (data.hasOwnProperty('restrictions'))
        obj.restrictions = PaymentsConfigurationRestrictions.constructFromObject(data['restrictions']);
    }
    return obj;
  }

  /**
   * Master flag indicating this merchant accepts purchase orders
   * @member {Boolean} accept_purchase_orders
   */
  exports.prototype.accept_purchase_orders = undefined;

  /**
   * If true, only approved customers may pay with a purchase order
   * @member {Boolean} approved_customers_only
   */
  exports.prototype.approved_customers_only = undefined;

  /**
   * If true, customers may not use duplicate PO numbers for any order
   * @member {Boolean} prevent_duplicate_number
   */
  exports.prototype.prevent_duplicate_number = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationRestrictions} restrictions
   */
  exports.prototype.restrictions = undefined;

  return exports;

}));
