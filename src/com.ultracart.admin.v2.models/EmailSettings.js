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
    root.UltraCartRestApiV2.EmailSettings = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EmailSettings model module.
   * @module com.ultracart.admin.v2.models/EmailSettings
   * @version 3.0.48
   */

  /**
   * Constructs a new <code>EmailSettings</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailSettings
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EmailSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailSettings} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailSettings} The populated <code>EmailSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('marketing_esp_domain_user'))
        obj.marketing_esp_domain_user = ApiClient.convertToType(data['marketing_esp_domain_user'], 'String');
      if (data.hasOwnProperty('marketing_esp_domain_uuid'))
        obj.marketing_esp_domain_uuid = ApiClient.convertToType(data['marketing_esp_domain_uuid'], 'String');
      if (data.hasOwnProperty('marketing_esp_friendly_name'))
        obj.marketing_esp_friendly_name = ApiClient.convertToType(data['marketing_esp_friendly_name'], 'String');
      if (data.hasOwnProperty('postcard_from_address1'))
        obj.postcard_from_address1 = ApiClient.convertToType(data['postcard_from_address1'], 'String');
      if (data.hasOwnProperty('postcard_from_address2'))
        obj.postcard_from_address2 = ApiClient.convertToType(data['postcard_from_address2'], 'String');
      if (data.hasOwnProperty('postcard_from_city'))
        obj.postcard_from_city = ApiClient.convertToType(data['postcard_from_city'], 'String');
      if (data.hasOwnProperty('postcard_from_name'))
        obj.postcard_from_name = ApiClient.convertToType(data['postcard_from_name'], 'String');
      if (data.hasOwnProperty('postcard_from_postal_code'))
        obj.postcard_from_postal_code = ApiClient.convertToType(data['postcard_from_postal_code'], 'String');
      if (data.hasOwnProperty('postcard_from_state'))
        obj.postcard_from_state = ApiClient.convertToType(data['postcard_from_state'], 'String');
      if (data.hasOwnProperty('transactional_esp_domain_user'))
        obj.transactional_esp_domain_user = ApiClient.convertToType(data['transactional_esp_domain_user'], 'String');
      if (data.hasOwnProperty('transactional_esp_domain_uuid'))
        obj.transactional_esp_domain_uuid = ApiClient.convertToType(data['transactional_esp_domain_uuid'], 'String');
      if (data.hasOwnProperty('transactional_esp_friendly_name'))
        obj.transactional_esp_friendly_name = ApiClient.convertToType(data['transactional_esp_friendly_name'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} marketing_esp_domain_user
   */
  exports.prototype.marketing_esp_domain_user = undefined;

  /**
   * @member {String} marketing_esp_domain_uuid
   */
  exports.prototype.marketing_esp_domain_uuid = undefined;

  /**
   * @member {String} marketing_esp_friendly_name
   */
  exports.prototype.marketing_esp_friendly_name = undefined;

  /**
   * @member {String} postcard_from_address1
   */
  exports.prototype.postcard_from_address1 = undefined;

  /**
   * @member {String} postcard_from_address2
   */
  exports.prototype.postcard_from_address2 = undefined;

  /**
   * @member {String} postcard_from_city
   */
  exports.prototype.postcard_from_city = undefined;

  /**
   * @member {String} postcard_from_name
   */
  exports.prototype.postcard_from_name = undefined;

  /**
   * @member {String} postcard_from_postal_code
   */
  exports.prototype.postcard_from_postal_code = undefined;

  /**
   * @member {String} postcard_from_state
   */
  exports.prototype.postcard_from_state = undefined;

  /**
   * @member {String} transactional_esp_domain_user
   */
  exports.prototype.transactional_esp_domain_user = undefined;

  /**
   * @member {String} transactional_esp_domain_uuid
   */
  exports.prototype.transactional_esp_domain_uuid = undefined;

  /**
   * @member {String} transactional_esp_friendly_name
   */
  exports.prototype.transactional_esp_friendly_name = undefined;

  return exports;

}));
