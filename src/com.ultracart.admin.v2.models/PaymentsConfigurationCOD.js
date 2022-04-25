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
    root.UltraCartRestApiV2.PaymentsConfigurationCOD = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.PaymentsConfigurationRestrictions);
  }
}(this, function(ApiClient, PaymentsConfigurationRestrictions) {
  'use strict';

  /**
   * The PaymentsConfigurationCOD model module.
   * @module com.ultracart.admin.v2.models/PaymentsConfigurationCOD
   * @version 3.9.6
   */

  /**
   * Constructs a new <code>PaymentsConfigurationCOD</code>.
   * @alias module:com.ultracart.admin.v2.models/PaymentsConfigurationCOD
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PaymentsConfigurationCOD</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/PaymentsConfigurationCOD} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/PaymentsConfigurationCOD} The populated <code>PaymentsConfigurationCOD</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accept_cod'))
        obj.accept_cod = ApiClient.convertToType(data['accept_cod'], 'Boolean');
      if (data.hasOwnProperty('approved_customers_only'))
        obj.approved_customers_only = ApiClient.convertToType(data['approved_customers_only'], 'Boolean');
      if (data.hasOwnProperty('restrictions'))
        obj.restrictions = PaymentsConfigurationRestrictions.constructFromObject(data['restrictions']);
      if (data.hasOwnProperty('surcharge_accounting_code'))
        obj.surcharge_accounting_code = ApiClient.convertToType(data['surcharge_accounting_code'], 'String');
      if (data.hasOwnProperty('surcharge_fee'))
        obj.surcharge_fee = ApiClient.convertToType(data['surcharge_fee'], 'Number');
      if (data.hasOwnProperty('surcharge_percentage'))
        obj.surcharge_percentage = ApiClient.convertToType(data['surcharge_percentage'], 'Number');
    }
    return obj;
  }

  /**
   * Master flag indicating this merchant accepts COD
   * @member {Boolean} accept_cod
   */
  exports.prototype.accept_cod = undefined;

  /**
   * If true, only approved customers may pay with COD
   * @member {Boolean} approved_customers_only
   */
  exports.prototype.approved_customers_only = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationRestrictions} restrictions
   */
  exports.prototype.restrictions = undefined;

  /**
   * Optional field, if surcharge is set, this is the accounting code the surcharge is tagged with when sent to Quickbooks
   * @member {String} surcharge_accounting_code
   */
  exports.prototype.surcharge_accounting_code = undefined;

  /**
   * Additional cost for using COD
   * @member {Number} surcharge_fee
   */
  exports.prototype.surcharge_fee = undefined;

  /**
   * Additional percentage cost for using COD
   * @member {Number} surcharge_percentage
   */
  exports.prototype.surcharge_percentage = undefined;

  return exports;

}));
