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
    root.UltraCartRestApiV2.EmailCommseqSmsSendTestRequest = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EmailCommseqSmsSendTestRequest model module.
   * @module com.ultracart.admin.v2.models/EmailCommseqSmsSendTestRequest
   * @version 3.10.147
   */

  /**
   * Constructs a new <code>EmailCommseqSmsSendTestRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailCommseqSmsSendTestRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EmailCommseqSmsSendTestRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailCommseqSmsSendTestRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailCommseqSmsSendTestRequest} The populated <code>EmailCommseqSmsSendTestRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('esp_commseq_step_uuid'))
        obj.esp_commseq_step_uuid = ApiClient.convertToType(data['esp_commseq_step_uuid'], 'String');
      if (data.hasOwnProperty('esp_commseq_uuid'))
        obj.esp_commseq_uuid = ApiClient.convertToType(data['esp_commseq_uuid'], 'String');
      if (data.hasOwnProperty('send_to_cellphone_e164'))
        obj.send_to_cellphone_e164 = ApiClient.convertToType(data['send_to_cellphone_e164'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} esp_commseq_step_uuid
   */
  exports.prototype.esp_commseq_step_uuid = undefined;

  /**
   * @member {String} esp_commseq_uuid
   */
  exports.prototype.esp_commseq_uuid = undefined;

  /**
   * @member {String} send_to_cellphone_e164
   */
  exports.prototype.send_to_cellphone_e164 = undefined;

  return exports;

}));
