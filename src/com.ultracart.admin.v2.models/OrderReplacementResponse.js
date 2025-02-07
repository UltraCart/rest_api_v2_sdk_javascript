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
    root.UltraCartRestApiV2.OrderReplacementResponse = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderReplacementResponse model module.
   * @module com.ultracart.admin.v2.models/OrderReplacementResponse
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>OrderReplacementResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderReplacementResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderReplacementResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderReplacementResponse} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderReplacementResponse} The populated <code>OrderReplacementResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('chargeSuccessful'))
        obj.chargeSuccessful = ApiClient.convertToType(data['chargeSuccessful'], 'Boolean');
      if (data.hasOwnProperty('errorMessage'))
        obj.errorMessage = ApiClient.convertToType(data['errorMessage'], 'String');
      if (data.hasOwnProperty('feedback'))
        obj.feedback = ApiClient.convertToType(data['feedback'], 'String');
      if (data.hasOwnProperty('free'))
        obj.free = ApiClient.convertToType(data['free'], 'Boolean');
      if (data.hasOwnProperty('orderId'))
        obj.orderId = ApiClient.convertToType(data['orderId'], 'String');
      if (data.hasOwnProperty('successful'))
        obj.successful = ApiClient.convertToType(data['successful'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {Boolean} chargeSuccessful
   */
  exports.prototype.chargeSuccessful = undefined;

  /**
   * @member {String} errorMessage
   */
  exports.prototype.errorMessage = undefined;

  /**
   * @member {String} feedback
   */
  exports.prototype.feedback = undefined;

  /**
   * @member {Boolean} free
   */
  exports.prototype.free = undefined;

  /**
   * @member {String} orderId
   */
  exports.prototype.orderId = undefined;

  /**
   * @member {Boolean} successful
   */
  exports.prototype.successful = undefined;

  return exports;

}));
