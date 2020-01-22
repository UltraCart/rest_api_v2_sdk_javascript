/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
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
    root.UltraCartRestApiV2.ItemInstantPaymentNotification = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ItemInstantPaymentNotification model module.
   * @module com.ultracart.admin.v2.models/ItemInstantPaymentNotification
   * @version 2.4.66
   */

  /**
   * Constructs a new <code>ItemInstantPaymentNotification</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemInstantPaymentNotification
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ItemInstantPaymentNotification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemInstantPaymentNotification} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemInstantPaymentNotification} The populated <code>ItemInstantPaymentNotification</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('post_operation')) {
        obj['post_operation'] = ApiClient.convertToType(data['post_operation'], 'Boolean');
      }
      if (data.hasOwnProperty('successful_response_text')) {
        obj['successful_response_text'] = ApiClient.convertToType(data['successful_response_text'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
    }
    return obj;
  }

  /**
   * True for HTTP POST instead of GET
   * @member {Boolean} post_operation
   */
  exports.prototype['post_operation'] = undefined;
  /**
   * Successful response text
   * @member {String} successful_response_text
   */
  exports.prototype['successful_response_text'] = undefined;
  /**
   * URL
   * @member {String} url
   */
  exports.prototype['url'] = undefined;



  return exports;
}));


