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
    root.UltraCartRestApiV2.ItemRevguard = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ItemRevguard model module.
   * @module com.ultracart.admin.v2.models/ItemRevguard
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>ItemRevguard</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemRevguard
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemRevguard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemRevguard} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemRevguard} The populated <code>ItemRevguard</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('revguard_canceled_csr_prompt_group'))
        obj.revguard_canceled_csr_prompt_group = ApiClient.convertToType(data['revguard_canceled_csr_prompt_group'], 'Number');
      if (data.hasOwnProperty('revguard_canceled_ivr_prompt_group'))
        obj.revguard_canceled_ivr_prompt_group = ApiClient.convertToType(data['revguard_canceled_ivr_prompt_group'], 'Number');
      if (data.hasOwnProperty('revguard_canceled_web_prompt_group'))
        obj.revguard_canceled_web_prompt_group = ApiClient.convertToType(data['revguard_canceled_web_prompt_group'], 'Number');
      if (data.hasOwnProperty('revguard_client_brand'))
        obj.revguard_client_brand = ApiClient.convertToType(data['revguard_client_brand'], 'Number');
      if (data.hasOwnProperty('revguard_csr_prompt_group'))
        obj.revguard_csr_prompt_group = ApiClient.convertToType(data['revguard_csr_prompt_group'], 'Number');
      if (data.hasOwnProperty('revguard_ivr_prompt_group'))
        obj.revguard_ivr_prompt_group = ApiClient.convertToType(data['revguard_ivr_prompt_group'], 'Number');
      if (data.hasOwnProperty('revguard_web_prompt_group'))
        obj.revguard_web_prompt_group = ApiClient.convertToType(data['revguard_web_prompt_group'], 'Number');
    }
    return obj;
  }

  /**
   * Canceled CSR prompt group
   * @member {Number} revguard_canceled_csr_prompt_group
   */
  exports.prototype.revguard_canceled_csr_prompt_group = undefined;

  /**
   * IVR prompt group
   * @member {Number} revguard_canceled_ivr_prompt_group
   */
  exports.prototype.revguard_canceled_ivr_prompt_group = undefined;

  /**
   * Canceled web prompt group
   * @member {Number} revguard_canceled_web_prompt_group
   */
  exports.prototype.revguard_canceled_web_prompt_group = undefined;

  /**
   * Client brand
   * @member {Number} revguard_client_brand
   */
  exports.prototype.revguard_client_brand = undefined;

  /**
   * CSR prompt group
   * @member {Number} revguard_csr_prompt_group
   */
  exports.prototype.revguard_csr_prompt_group = undefined;

  /**
   * IVR prompt group
   * @member {Number} revguard_ivr_prompt_group
   */
  exports.prototype.revguard_ivr_prompt_group = undefined;

  /**
   * Web prompt group
   * @member {Number} revguard_web_prompt_group
   */
  exports.prototype.revguard_web_prompt_group = undefined;

  return exports;

}));
