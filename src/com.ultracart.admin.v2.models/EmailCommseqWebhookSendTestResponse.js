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
    define(['ApiClient', 'com.ultracart.admin.v2.models/Error', 'com.ultracart.admin.v2.models/ResponseMetadata', 'com.ultracart.admin.v2.models/Warning'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Error'), require('./ResponseMetadata'), require('./Warning'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.EmailCommseqWebhookSendTestResponse = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Error, root.UltraCartRestApiV2.ResponseMetadata, root.UltraCartRestApiV2.Warning);
  }
}(this, function(ApiClient, Error, ResponseMetadata, Warning) {
  'use strict';

  /**
   * The EmailCommseqWebhookSendTestResponse model module.
   * @module com.ultracart.admin.v2.models/EmailCommseqWebhookSendTestResponse
   * @version 3.10.98
   */

  /**
   * Constructs a new <code>EmailCommseqWebhookSendTestResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailCommseqWebhookSendTestResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EmailCommseqWebhookSendTestResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailCommseqWebhookSendTestResponse} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailCommseqWebhookSendTestResponse} The populated <code>EmailCommseqWebhookSendTestResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('error'))
        obj.error = Error.constructFromObject(data['error']);
      if (data.hasOwnProperty('metadata'))
        obj.metadata = ResponseMetadata.constructFromObject(data['metadata']);
      if (data.hasOwnProperty('request'))
        obj.request = ApiClient.convertToType(data['request'], 'String');
      if (data.hasOwnProperty('response'))
        obj.response = ApiClient.convertToType(data['response'], 'String');
      if (data.hasOwnProperty('status_code'))
        obj.status_code = ApiClient.convertToType(data['status_code'], 'Number');
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
   * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
   */
  exports.prototype.metadata = undefined;

  /**
   * HTTP Request
   * @member {String} request
   */
  exports.prototype.request = undefined;

  /**
   * HTTP Response
   * @member {String} response
   */
  exports.prototype.response = undefined;

  /**
   * HTTP Status Code
   * @member {Number} status_code
   */
  exports.prototype.status_code = undefined;

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
