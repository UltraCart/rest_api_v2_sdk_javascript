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
    define(['ApiClient', 'com.ultracart.admin.v2.models/HTTPHeader'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./HTTPHeader'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.WebhookSampleRequest = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.HTTPHeader);
  }
}(this, function(ApiClient, HTTPHeader) {
  'use strict';

  /**
   * The WebhookSampleRequest model module.
   * @module com.ultracart.admin.v2.models/WebhookSampleRequest
   * @version 3.0.66
   */

  /**
   * Constructs a new <code>WebhookSampleRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/WebhookSampleRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>WebhookSampleRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/WebhookSampleRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/WebhookSampleRequest} The populated <code>WebhookSampleRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('request'))
        obj.request = ApiClient.convertToType(data['request'], 'String');
      if (data.hasOwnProperty('request_headers'))
        obj.request_headers = ApiClient.convertToType(data['request_headers'], [HTTPHeader]);
      if (data.hasOwnProperty('request_id'))
        obj.request_id = ApiClient.convertToType(data['request_id'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }

  /**
   * Request
   * @member {String} request
   */
  exports.prototype.request = undefined;

  /**
   * Request headers
   * @member {Array.<module:com.ultracart.admin.v2.models/HTTPHeader>} request_headers
   */
  exports.prototype.request_headers = undefined;

  /**
   * Request id
   * @member {String} request_id
   */
  exports.prototype.request_id = undefined;

  /**
   * URI to send request to
   * @member {String} uri
   */
  exports.prototype.uri = undefined;

  return exports;

}));
