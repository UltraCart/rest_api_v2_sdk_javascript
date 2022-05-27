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
    root.UltraCartRestApiV2.SovosConfig = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SovosConfig model module.
   * @module com.ultracart.admin.v2.models/SovosConfig
   * @version 3.10.8
   */

  /**
   * Constructs a new <code>SovosConfig</code>.
   * @alias module:com.ultracart.admin.v2.models/SovosConfig
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SovosConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/SovosConfig} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/SovosConfig} The populated <code>SovosConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('access_key'))
        obj.access_key = ApiClient.convertToType(data['access_key'], 'String');
      if (data.hasOwnProperty('estimate_only'))
        obj.estimate_only = ApiClient.convertToType(data['estimate_only'], 'Boolean');
      if (data.hasOwnProperty('last_test_dts'))
        obj.last_test_dts = ApiClient.convertToType(data['last_test_dts'], 'String');
      if (data.hasOwnProperty('secret_key'))
        obj.secret_key = ApiClient.convertToType(data['secret_key'], 'String');
      if (data.hasOwnProperty('send_test_orders'))
        obj.send_test_orders = ApiClient.convertToType(data['send_test_orders'], 'Boolean');
      if (data.hasOwnProperty('test_results'))
        obj.test_results = ApiClient.convertToType(data['test_results'], 'String');
      if (data.hasOwnProperty('uat'))
        obj.uat = ApiClient.convertToType(data['uat'], 'Boolean');
    }
    return obj;
  }

  /**
   * Sovos access key
   * @member {String} access_key
   */
  exports.prototype.access_key = undefined;

  /**
   * True if this Sovos configuration is to estimate taxes only and not report placed orders to Sovos
   * @member {Boolean} estimate_only
   */
  exports.prototype.estimate_only = undefined;

  /**
   * Date/time of the connection test to Sovos
   * @member {String} last_test_dts
   */
  exports.prototype.last_test_dts = undefined;

  /**
   * Sovos secret key
   * @member {String} secret_key
   */
  exports.prototype.secret_key = undefined;

  /**
   * Send test orders through to Sovos.  The default is to not transmit test orders to Sovos.
   * @member {Boolean} send_test_orders
   */
  exports.prototype.send_test_orders = undefined;

  /**
   * Test results of the last connection test to Sovos
   * @member {String} test_results
   */
  exports.prototype.test_results = undefined;

  /**
   * True if this Sovos configuration is currently undergoing user acceptance testing
   * @member {Boolean} uat
   */
  exports.prototype.uat = undefined;

  return exports;

}));
