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
    root.UltraCartRestApiV2.OrderReason = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderReason model module.
   * @module com.ultracart.admin.v2.models/OrderReason
   * @version 3.10.119
   */

  /**
   * Constructs a new <code>OrderReason</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderReason
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderReason</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderReason} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderReason} The populated <code>OrderReason</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('default_reason'))
        obj.default_reason = ApiClient.convertToType(data['default_reason'], 'Boolean');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
    }
    return obj;
  }

  /**
   * Default reason
   * @member {Boolean} default_reason
   */
  exports.prototype.default_reason = undefined;

  /**
   * Reason description.  This is the friendly description of the reason that should be displayed to the user.
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * Reason value.  This is what should be submitted with a refund operation.
   * @member {String} value
   */
  exports.prototype.value = undefined;

  return exports;

}));