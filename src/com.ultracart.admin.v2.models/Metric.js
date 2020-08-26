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
    root.UltraCartRestApiV2.Metric = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Metric model module.
   * @module com.ultracart.admin.v2.models/Metric
   * @version 3.0.17
   */

  /**
   * Constructs a new <code>Metric</code>.
   * @alias module:com.ultracart.admin.v2.models/Metric
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Metric</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/Metric} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/Metric} The populated <code>Metric</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('all_time'))
        obj.all_time = ApiClient.convertToType(data['all_time'], 'Number');
      if (data.hasOwnProperty('all_time_formatted'))
        obj.all_time_formatted = ApiClient.convertToType(data['all_time_formatted'], 'String');
      if (data.hasOwnProperty('last_30'))
        obj.last_30 = ApiClient.convertToType(data['last_30'], 'Number');
      if (data.hasOwnProperty('last_30_formatted'))
        obj.last_30_formatted = ApiClient.convertToType(data['last_30_formatted'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('prior_30'))
        obj.prior_30 = ApiClient.convertToType(data['prior_30'], 'Number');
      if (data.hasOwnProperty('prior_30_formatted'))
        obj.prior_30_formatted = ApiClient.convertToType(data['prior_30_formatted'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} all_time
   */
  exports.prototype.all_time = undefined;

  /**
   * @member {String} all_time_formatted
   */
  exports.prototype.all_time_formatted = undefined;

  /**
   * @member {Number} last_30
   */
  exports.prototype.last_30 = undefined;

  /**
   * @member {String} last_30_formatted
   */
  exports.prototype.last_30_formatted = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {Number} prior_30
   */
  exports.prototype.prior_30 = undefined;

  /**
   * @member {String} prior_30_formatted
   */
  exports.prototype.prior_30_formatted = undefined;

  /**
   * @member {String} type
   */
  exports.prototype.type = undefined;

  return exports;

}));
