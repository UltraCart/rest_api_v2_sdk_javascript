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
    root.UltraCartRestApiV2.EmailOrder = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Currency);
  }
}(this, function(ApiClient, Currency) {
  'use strict';




  /**
   * The EmailOrder model module.
   * @module com.ultracart.admin.v2.models/EmailOrder
   * @version 2.4.83
   */

  /**
   * Constructs a new <code>EmailOrder</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailOrder
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>EmailOrder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailOrder} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailOrder} The populated <code>EmailOrder</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('order_dts')) {
        obj['order_dts'] = ApiClient.convertToType(data['order_dts'], 'String');
      }
      if (data.hasOwnProperty('order_id')) {
        obj['order_id'] = ApiClient.convertToType(data['order_id'], 'String');
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = Currency.constructFromObject(data['total']);
      }
    }
    return obj;
  }

  /**
   * email
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * order_dts
   * @member {String} order_dts
   */
  exports.prototype['order_dts'] = undefined;
  /**
   * order_id
   * @member {String} order_id
   */
  exports.prototype['order_id'] = undefined;
  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} total
   */
  exports.prototype['total'] = undefined;



  return exports;
}));


