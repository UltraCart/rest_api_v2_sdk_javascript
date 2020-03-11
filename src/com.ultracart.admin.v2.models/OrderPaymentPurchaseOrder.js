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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.OrderPaymentPurchaseOrder = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OrderPaymentPurchaseOrder model module.
   * @module com.ultracart.admin.v2.models/OrderPaymentPurchaseOrder
   * @version 2.4.83
   */

  /**
   * Constructs a new <code>OrderPaymentPurchaseOrder</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderPaymentPurchaseOrder
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>OrderPaymentPurchaseOrder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderPaymentPurchaseOrder} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderPaymentPurchaseOrder} The populated <code>OrderPaymentPurchaseOrder</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('purchase_order_number')) {
        obj['purchase_order_number'] = ApiClient.convertToType(data['purchase_order_number'], 'String');
      }
    }
    return obj;
  }

  /**
   * Purchase order number
   * @member {String} purchase_order_number
   */
  exports.prototype['purchase_order_number'] = undefined;



  return exports;
}));


