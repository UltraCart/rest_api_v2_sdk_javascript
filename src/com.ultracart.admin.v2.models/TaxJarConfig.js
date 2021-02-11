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
    root.UltraCartRestApiV2.TaxJarConfig = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TaxJarConfig model module.
   * @module com.ultracart.admin.v2.models/TaxJarConfig
   * @version 3.1.2
   */

  /**
   * Constructs a new <code>TaxJarConfig</code>.
   * @alias module:com.ultracart.admin.v2.models/TaxJarConfig
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TaxJarConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/TaxJarConfig} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/TaxJarConfig} The populated <code>TaxJarConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('active'))
        obj.active = ApiClient.convertToType(data['active'], 'Boolean');
      if (data.hasOwnProperty('api_key'))
        obj.api_key = ApiClient.convertToType(data['api_key'], 'String');
      if (data.hasOwnProperty('estimate_only'))
        obj.estimate_only = ApiClient.convertToType(data['estimate_only'], 'Boolean');
      if (data.hasOwnProperty('send_outside_nexus'))
        obj.send_outside_nexus = ApiClient.convertToType(data['send_outside_nexus'], 'Boolean');
      if (data.hasOwnProperty('send_test_orders'))
        obj.send_test_orders = ApiClient.convertToType(data['send_test_orders'], 'Boolean');
      if (data.hasOwnProperty('use_distribution_center_from'))
        obj.use_distribution_center_from = ApiClient.convertToType(data['use_distribution_center_from'], 'Boolean');
    }
    return obj;
  }

  /**
   * True if TaxJar is active for this merchant
   * @member {Boolean} active
   */
  exports.prototype.active = undefined;

  /**
   * TaxJar API key
   * @member {String} api_key
   */
  exports.prototype.api_key = undefined;

  /**
   * True if this TaxJar configuration is to estimate taxes only and not report placed orders to TaxJar
   * @member {Boolean} estimate_only
   */
  exports.prototype.estimate_only = undefined;

  /**
   * Send orders outside your nexus TaxJar.  The default is to not transmit outside orders to TaxJar to reduce API calls.  However, this will prevent TaxJar from dynamically creating new Nexus when thresholds are exceeded for a state.
   * @member {Boolean} send_outside_nexus
   */
  exports.prototype.send_outside_nexus = undefined;

  /**
   * Send test orders through to TaxJar.  The default is to not transmit test orders to TaxJar.
   * @member {Boolean} send_test_orders
   */
  exports.prototype.send_test_orders = undefined;

  /**
   * Use distribution center from address
   * @member {Boolean} use_distribution_center_from
   */
  exports.prototype.use_distribution_center_from = undefined;

  return exports;

}));
