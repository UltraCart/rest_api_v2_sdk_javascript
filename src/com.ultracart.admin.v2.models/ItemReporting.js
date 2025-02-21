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
    root.UltraCartRestApiV2.ItemReporting = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ItemReporting model module.
   * @module com.ultracart.admin.v2.models/ItemReporting
   * @version 3.11.0
   */

  /**
   * Constructs a new <code>ItemReporting</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemReporting
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemReporting</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemReporting} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemReporting} The populated <code>ItemReporting</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('report_as_upsell'))
        obj.report_as_upsell = ApiClient.convertToType(data['report_as_upsell'], 'Boolean');
      if (data.hasOwnProperty('report_pickable_quantities'))
        obj.report_pickable_quantities = ApiClient.convertToType(data['report_pickable_quantities'], ['Number']);
    }
    return obj;
  }

  /**
   * Report as an upsell
   * @member {Boolean} report_as_upsell
   */
  exports.prototype.report_as_upsell = undefined;

  /**
   * Report pickable quantities (deprecated)
   * @member {Array.<Number>} report_pickable_quantities
   */
  exports.prototype.report_pickable_quantities = undefined;

  return exports;

}));
