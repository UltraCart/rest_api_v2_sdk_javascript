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
    root.UltraCartRestApiV2.EmailFlowFolder = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EmailFlowFolder model module.
   * @module com.ultracart.admin.v2.models/EmailFlowFolder
   * @version 3.10.191
   */

  /**
   * Constructs a new <code>EmailFlowFolder</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailFlowFolder
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EmailFlowFolder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailFlowFolder} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailFlowFolder} The populated <code>EmailFlowFolder</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('esp_flow_folder_uuid'))
        obj.esp_flow_folder_uuid = ApiClient.convertToType(data['esp_flow_folder_uuid'], 'String');
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('storefront_oid'))
        obj.storefront_oid = ApiClient.convertToType(data['storefront_oid'], 'Number');
      if (data.hasOwnProperty('system_generated'))
        obj.system_generated = ApiClient.convertToType(data['system_generated'], 'Boolean');
    }
    return obj;
  }

  /**
   * Email flow folder UUID
   * @member {String} esp_flow_folder_uuid
   */
  exports.prototype.esp_flow_folder_uuid = undefined;

  /**
   * Merchant ID
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * Name of email flow folder
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Storefront oid
   * @member {Number} storefront_oid
   */
  exports.prototype.storefront_oid = undefined;

  /**
   * System generated folder
   * @member {Boolean} system_generated
   */
  exports.prototype.system_generated = undefined;

  return exports;

}));
