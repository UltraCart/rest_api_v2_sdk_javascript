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
    root.UltraCartRestApiV2.OrderInternal = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderInternal model module.
   * @module com.ultracart.admin.v2.models/OrderInternal
   * @version 3.6.0
   */

  /**
   * Constructs a new <code>OrderInternal</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderInternal
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderInternal</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderInternal} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderInternal} The populated <code>OrderInternal</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('exported_to_accounting'))
        obj.exported_to_accounting = ApiClient.convertToType(data['exported_to_accounting'], 'Boolean');
      if (data.hasOwnProperty('merchant_notes'))
        obj.merchant_notes = ApiClient.convertToType(data['merchant_notes'], 'String');
      if (data.hasOwnProperty('placed_by_user'))
        obj.placed_by_user = ApiClient.convertToType(data['placed_by_user'], 'String');
      if (data.hasOwnProperty('refund_by_user'))
        obj.refund_by_user = ApiClient.convertToType(data['refund_by_user'], 'String');
      if (data.hasOwnProperty('sales_rep_code'))
        obj.sales_rep_code = ApiClient.convertToType(data['sales_rep_code'], 'String');
    }
    return obj;
  }

  /**
   * True if the order has been exported to QuickBooks. If QuickBooks is not configured, then this will already be true
   * @member {Boolean} exported_to_accounting
   */
  exports.prototype.exported_to_accounting = undefined;

  /**
   * Merchant notes
   * @member {String} merchant_notes
   */
  exports.prototype.merchant_notes = undefined;

  /**
   * If placed via the BEOE, this is the user that placed the order
   * @member {String} placed_by_user
   */
  exports.prototype.placed_by_user = undefined;

  /**
   * User that issued the refund
   * @member {String} refund_by_user
   */
  exports.prototype.refund_by_user = undefined;

  /**
   * Sales rep code associated with the order
   * @member {String} sales_rep_code
   */
  exports.prototype.sales_rep_code = undefined;

  return exports;

}));
