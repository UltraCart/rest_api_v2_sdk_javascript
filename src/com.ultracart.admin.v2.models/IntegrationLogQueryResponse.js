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
    define(['ApiClient', 'com.ultracart.admin.v2.models/Error', 'com.ultracart.admin.v2.models/IntegrationLog', 'com.ultracart.admin.v2.models/IntegrationLogQueryFilterValues', 'com.ultracart.admin.v2.models/ResponseMetadata', 'com.ultracart.admin.v2.models/Warning'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Error'), require('./IntegrationLog'), require('./IntegrationLogQueryFilterValues'), require('./ResponseMetadata'), require('./Warning'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.IntegrationLogQueryResponse = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Error, root.UltraCartRestApiV2.IntegrationLog, root.UltraCartRestApiV2.IntegrationLogQueryFilterValues, root.UltraCartRestApiV2.ResponseMetadata, root.UltraCartRestApiV2.Warning);
  }
}(this, function(ApiClient, Error, IntegrationLog, IntegrationLogQueryFilterValues, ResponseMetadata, Warning) {
  'use strict';

  /**
   * The IntegrationLogQueryResponse model module.
   * @module com.ultracart.admin.v2.models/IntegrationLogQueryResponse
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>IntegrationLogQueryResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/IntegrationLogQueryResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>IntegrationLogQueryResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/IntegrationLogQueryResponse} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/IntegrationLogQueryResponse} The populated <code>IntegrationLogQueryResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('error'))
        obj.error = Error.constructFromObject(data['error']);
      if (data.hasOwnProperty('filter_values'))
        obj.filter_values = IntegrationLogQueryFilterValues.constructFromObject(data['filter_values']);
      if (data.hasOwnProperty('integration_logs'))
        obj.integration_logs = ApiClient.convertToType(data['integration_logs'], [IntegrationLog]);
      if (data.hasOwnProperty('metadata'))
        obj.metadata = ResponseMetadata.constructFromObject(data['metadata']);
      if (data.hasOwnProperty('success'))
        obj.success = ApiClient.convertToType(data['success'], 'Boolean');
      if (data.hasOwnProperty('warning'))
        obj.warning = Warning.constructFromObject(data['warning']);
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/Error} error
   */
  exports.prototype.error = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/IntegrationLogQueryFilterValues} filter_values
   */
  exports.prototype.filter_values = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/IntegrationLog>} integration_logs
   */
  exports.prototype.integration_logs = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
   */
  exports.prototype.metadata = undefined;

  /**
   * Indicates if API call was successful
   * @member {Boolean} success
   */
  exports.prototype.success = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Warning} warning
   */
  exports.prototype.warning = undefined;

  return exports;

}));
