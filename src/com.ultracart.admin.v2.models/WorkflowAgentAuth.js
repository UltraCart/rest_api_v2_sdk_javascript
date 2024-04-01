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
    root.UltraCartRestApiV2.WorkflowAgentAuth = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The WorkflowAgentAuth model module.
   * @module com.ultracart.admin.v2.models/WorkflowAgentAuth
   * @version 3.10.192
   */

  /**
   * Constructs a new <code>WorkflowAgentAuth</code>.
   * @alias module:com.ultracart.admin.v2.models/WorkflowAgentAuth
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>WorkflowAgentAuth</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/WorkflowAgentAuth} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/WorkflowAgentAuth} The populated <code>WorkflowAgentAuth</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('jwt'))
        obj.jwt = ApiClient.convertToType(data['jwt'], 'String');
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('websocket_url'))
        obj.websocket_url = ApiClient.convertToType(data['websocket_url'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} jwt
   */
  exports.prototype.jwt = undefined;

  /**
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * @member {String} websocket_url
   */
  exports.prototype.websocket_url = undefined;

  return exports;

}));
