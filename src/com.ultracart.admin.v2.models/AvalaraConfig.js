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
    root.UltraCartRestApiV2.AvalaraConfig = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AvalaraConfig model module.
   * @module com.ultracart.admin.v2.models/AvalaraConfig
   * @version 3.10.189
   */

  /**
   * Constructs a new <code>AvalaraConfig</code>.
   * @alias module:com.ultracart.admin.v2.models/AvalaraConfig
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AvalaraConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/AvalaraConfig} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/AvalaraConfig} The populated <code>AvalaraConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('account_id'))
        obj.account_id = ApiClient.convertToType(data['account_id'], 'String');
      if (data.hasOwnProperty('active'))
        obj.active = ApiClient.convertToType(data['active'], 'Boolean');
      if (data.hasOwnProperty('avalara_oid'))
        obj.avalara_oid = ApiClient.convertToType(data['avalara_oid'], 'Number');
      if (data.hasOwnProperty('company_id'))
        obj.company_id = ApiClient.convertToType(data['company_id'], 'String');
      if (data.hasOwnProperty('enable_upc'))
        obj.enable_upc = ApiClient.convertToType(data['enable_upc'], 'Boolean');
      if (data.hasOwnProperty('estimate_only'))
        obj.estimate_only = ApiClient.convertToType(data['estimate_only'], 'Boolean');
      if (data.hasOwnProperty('guest_customer_code'))
        obj.guest_customer_code = ApiClient.convertToType(data['guest_customer_code'], 'String');
      if (data.hasOwnProperty('last_test_dts'))
        obj.last_test_dts = ApiClient.convertToType(data['last_test_dts'], 'String');
      if (data.hasOwnProperty('license_key'))
        obj.license_key = ApiClient.convertToType(data['license_key'], 'String');
      if (data.hasOwnProperty('sandbox'))
        obj.sandbox = ApiClient.convertToType(data['sandbox'], 'Boolean');
      if (data.hasOwnProperty('send_test_orders'))
        obj.send_test_orders = ApiClient.convertToType(data['send_test_orders'], 'Boolean');
      if (data.hasOwnProperty('service_url'))
        obj.service_url = ApiClient.convertToType(data['service_url'], 'String');
      if (data.hasOwnProperty('test_results'))
        obj.test_results = ApiClient.convertToType(data['test_results'], 'String');
    }
    return obj;
  }

  /**
   * Avalara account ID
   * @member {String} account_id
   */
  exports.prototype.account_id = undefined;

  /**
   * True if Avalara is active for this merchant
   * @member {Boolean} active
   */
  exports.prototype.active = undefined;

  /**
   * Unique identifier for this avalara config object
   * @member {Number} avalara_oid
   */
  exports.prototype.avalara_oid = undefined;

  /**
   * Avalara company ID
   * @member {String} company_id
   */
  exports.prototype.company_id = undefined;

  /**
   * True if this Avalara configuration is set to enable tax valuation by UPC
   * @member {Boolean} enable_upc
   */
  exports.prototype.enable_upc = undefined;

  /**
   * True if this Avalara configuration is to estimate taxes only and not report placed orders to Avalara
   * @member {Boolean} estimate_only
   */
  exports.prototype.estimate_only = undefined;

  /**
   * Optional customer code for customers without profiles, defaults to GuestCustomer
   * @member {String} guest_customer_code
   */
  exports.prototype.guest_customer_code = undefined;

  /**
   * Date/time of the connection test to Avalara
   * @member {String} last_test_dts
   */
  exports.prototype.last_test_dts = undefined;

  /**
   * Avalara license key
   * @member {String} license_key
   */
  exports.prototype.license_key = undefined;

  /**
   * True if this Avalara instance is pointed at the Avalara Sandbox
   * @member {Boolean} sandbox
   */
  exports.prototype.sandbox = undefined;

  /**
   * Send test orders through to Avalara.  The default is to not transmit test orders to Avalara.
   * @member {Boolean} send_test_orders
   */
  exports.prototype.send_test_orders = undefined;

  /**
   * Avalara service URL
   * @member {String} service_url
   */
  exports.prototype.service_url = undefined;

  /**
   * Test results of the last connection test to Avalara
   * @member {String} test_results
   */
  exports.prototype.test_results = undefined;

  return exports;

}));
