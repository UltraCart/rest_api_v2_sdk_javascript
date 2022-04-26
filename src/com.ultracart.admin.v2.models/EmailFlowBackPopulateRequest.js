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
    root.UltraCartRestApiV2.EmailFlowBackPopulateRequest = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EmailFlowBackPopulateRequest model module.
   * @module com.ultracart.admin.v2.models/EmailFlowBackPopulateRequest
   * @version 3.9.8
   */

  /**
   * Constructs a new <code>EmailFlowBackPopulateRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailFlowBackPopulateRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EmailFlowBackPopulateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailFlowBackPopulateRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailFlowBackPopulateRequest} The populated <code>EmailFlowBackPopulateRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('order_days_old'))
        obj.order_days_old = ApiClient.convertToType(data['order_days_old'], 'Number');
      if (data.hasOwnProperty('relative_to_event'))
        obj.relative_to_event = ApiClient.convertToType(data['relative_to_event'], 'Boolean');
    }
    return obj;
  }

  /**
   * The age of the orders that should be considered for order triggers.
   * @member {Number} order_days_old
   */
  exports.prototype.order_days_old = undefined;

  /**
   * True if the age of the event should be considered when reducing the initial flow wait step
   * @member {Boolean} relative_to_event
   */
  exports.prototype.relative_to_event = undefined;

  return exports;

}));
