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
    root.UltraCartRestApiV2.CustomerTaxCodes = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CustomerTaxCodes model module.
   * @module com.ultracart.admin.v2.models/CustomerTaxCodes
   * @version 3.10.160
   */

  /**
   * Constructs a new <code>CustomerTaxCodes</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerTaxCodes
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CustomerTaxCodes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CustomerTaxCodes} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CustomerTaxCodes} The populated <code>CustomerTaxCodes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('avalara_customer_code'))
        obj.avalara_customer_code = ApiClient.convertToType(data['avalara_customer_code'], 'String');
      if (data.hasOwnProperty('avalara_entity_use_code'))
        obj.avalara_entity_use_code = ApiClient.convertToType(data['avalara_entity_use_code'], 'String');
      if (data.hasOwnProperty('sovos_customer_code'))
        obj.sovos_customer_code = ApiClient.convertToType(data['sovos_customer_code'], 'String');
      if (data.hasOwnProperty('taxjar_customer_id'))
        obj.taxjar_customer_id = ApiClient.convertToType(data['taxjar_customer_id'], 'String');
      if (data.hasOwnProperty('taxjar_exemption_type'))
        obj.taxjar_exemption_type = ApiClient.convertToType(data['taxjar_exemption_type'], 'String');
    }
    return obj;
  }

  /**
   * Avalara customer code
   * @member {String} avalara_customer_code
   */
  exports.prototype.avalara_customer_code = undefined;

  /**
   * Avalara entity use code
   * @member {String} avalara_entity_use_code
   */
  exports.prototype.avalara_entity_use_code = undefined;

  /**
   * Sovos customer code
   * @member {String} sovos_customer_code
   */
  exports.prototype.sovos_customer_code = undefined;

  /**
   * TaxJar customer id
   * @member {String} taxjar_customer_id
   */
  exports.prototype.taxjar_customer_id = undefined;

  /**
   * TaxJar exemption type
   * @member {String} taxjar_exemption_type
   */
  exports.prototype.taxjar_exemption_type = undefined;

  return exports;

}));
