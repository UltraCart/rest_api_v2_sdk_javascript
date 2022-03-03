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
    define(['ApiClient', 'com.ultracart.admin.v2.models/RtgSummaryGateway'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RtgSummaryGateway'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.RtgSummaryResponse = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.RtgSummaryGateway);
  }
}(this, function(ApiClient, RtgSummaryGateway) {
  'use strict';

  /**
   * The RtgSummaryResponse model module.
   * @module com.ultracart.admin.v2.models/RtgSummaryResponse
   * @version 3.9.0
   */

  /**
   * Constructs a new <code>RtgSummaryResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/RtgSummaryResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RtgSummaryResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/RtgSummaryResponse} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/RtgSummaryResponse} The populated <code>RtgSummaryResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('gateways'))
        obj.gateways = ApiClient.convertToType(data['gateways'], [RtgSummaryGateway]);
      if (data.hasOwnProperty('info_message'))
        obj.info_message = ApiClient.convertToType(data['info_message'], 'String');
      if (data.hasOwnProperty('migration_rtg_code'))
        obj.migration_rtg_code = ApiClient.convertToType(data['migration_rtg_code'], 'String');
      if (data.hasOwnProperty('migration_single_gateway_name'))
        obj.migration_single_gateway_name = ApiClient.convertToType(data['migration_single_gateway_name'], 'String');
      if (data.hasOwnProperty('show_delay_auto_orders'))
        obj.show_delay_auto_orders = ApiClient.convertToType(data['show_delay_auto_orders'], 'Boolean');
      if (data.hasOwnProperty('show_migration'))
        obj.show_migration = ApiClient.convertToType(data['show_migration'], 'Boolean');
      if (data.hasOwnProperty('warning'))
        obj.warning = ApiClient.convertToType(data['warning'], 'String');
    }
    return obj;
  }

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/RtgSummaryGateway>} gateways
   */
  exports.prototype.gateways = undefined;

  /**
   * @member {String} info_message
   */
  exports.prototype.info_message = undefined;

  /**
   * @member {String} migration_rtg_code
   */
  exports.prototype.migration_rtg_code = undefined;

  /**
   * @member {String} migration_single_gateway_name
   */
  exports.prototype.migration_single_gateway_name = undefined;

  /**
   * @member {Boolean} show_delay_auto_orders
   */
  exports.prototype.show_delay_auto_orders = undefined;

  /**
   * @member {Boolean} show_migration
   */
  exports.prototype.show_migration = undefined;

  /**
   * @member {String} warning
   */
  exports.prototype.warning = undefined;

  return exports;

}));
