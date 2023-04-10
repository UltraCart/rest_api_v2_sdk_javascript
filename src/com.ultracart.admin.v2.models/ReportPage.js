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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ReportPageVisualization'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportPageVisualization'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ReportPage = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ReportPageVisualization);
  }
}(this, function(ApiClient, ReportPageVisualization) {
  'use strict';

  /**
   * The ReportPage model module.
   * @module com.ultracart.admin.v2.models/ReportPage
   * @version 3.10.128
   */

  /**
   * Constructs a new <code>ReportPage</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportPage
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ReportPage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ReportPage} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ReportPage} The populated <code>ReportPage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('height'))
        obj.height = ApiClient.convertToType(data['height'], 'Number');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('visualizations'))
        obj.visualizations = ApiClient.convertToType(data['visualizations'], [ReportPageVisualization]);
      if (data.hasOwnProperty('width'))
        obj.width = ApiClient.convertToType(data['width'], 'Number');
    }
    return obj;
  }

  /**
   * Height of the report page in inches
   * @member {Number} height
   */
  exports.prototype.height = undefined;

  /**
   * @member {String} title
   */
  exports.prototype.title = undefined;

  /**
   * Visualizations on the report page.
   * @member {Array.<module:com.ultracart.admin.v2.models/ReportPageVisualization>} visualizations
   */
  exports.prototype.visualizations = undefined;

  /**
   * Width of the report page in inches
   * @member {Number} width
   */
  exports.prototype.width = undefined;

  return exports;

}));
