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
    root.UltraCartRestApiV2.ReportPageFilter = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ReportPageFilter model module.
   * @module com.ultracart.admin.v2.models/ReportPageFilter
   * @version 3.10.182
   */

  /**
   * Constructs a new <code>ReportPageFilter</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportPageFilter
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ReportPageFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ReportPageFilter} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ReportPageFilter} The populated <code>ReportPageFilter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('config'))
        obj.config = ApiClient.convertToType(data['config'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('styles'))
        obj.styles = ApiClient.convertToType(data['styles'], 'String');
      if (data.hasOwnProperty('uuid'))
        obj.uuid = ApiClient.convertToType(data['uuid'], 'String');
    }
    return obj;
  }

  /**
   * A JSON representation of the configuration for this visualization
   * @member {String} config
   */
  exports.prototype.config = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * A JSON representation of the style configuration for this visualization
   * @member {String} styles
   */
  exports.prototype.styles = undefined;

  /**
   * Unique UUID assigned to the filter.  Assists when returning values that the filter can use.
   * @member {String} uuid
   */
  exports.prototype.uuid = undefined;

  return exports;

}));
