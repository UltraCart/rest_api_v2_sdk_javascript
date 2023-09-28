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
    define(['ApiClient', 'com.ultracart.admin.v2.models/Mailgun', 'com.ultracart.admin.v2.models/VerificationRecord'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Mailgun'), require('./VerificationRecord'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.EmailDomain = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Mailgun, root.UltraCartRestApiV2.VerificationRecord);
  }
}(this, function(ApiClient, Mailgun, VerificationRecord) {
  'use strict';

  /**
   * The EmailDomain model module.
   * @module com.ultracart.admin.v2.models/EmailDomain
   * @version 3.10.162
   */

  /**
   * Constructs a new <code>EmailDomain</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailDomain
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EmailDomain</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailDomain} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailDomain} The populated <code>EmailDomain</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('comment'))
        obj.comment = ApiClient.convertToType(data['comment'], 'String');
      if (data.hasOwnProperty('dkim'))
        obj.dkim = ApiClient.convertToType(data['dkim'], [VerificationRecord]);
      if (data.hasOwnProperty('dkim_status'))
        obj.dkim_status = ApiClient.convertToType(data['dkim_status'], 'String');
      if (data.hasOwnProperty('domain'))
        obj.domain = ApiClient.convertToType(data['domain'], 'String');
      if (data.hasOwnProperty('esp_domain_uuid'))
        obj.esp_domain_uuid = ApiClient.convertToType(data['esp_domain_uuid'], 'String');
      if (data.hasOwnProperty('identity_status'))
        obj.identity_status = ApiClient.convertToType(data['identity_status'], 'String');
      if (data.hasOwnProperty('mailgun'))
        obj.mailgun = Mailgun.constructFromObject(data['mailgun']);
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('provider'))
        obj.provider = ApiClient.convertToType(data['provider'], 'String');
      if (data.hasOwnProperty('spf'))
        obj.spf = VerificationRecord.constructFromObject(data['spf']);
      if (data.hasOwnProperty('start_dkim_dts'))
        obj.start_dkim_dts = ApiClient.convertToType(data['start_dkim_dts'], 'String');
      if (data.hasOwnProperty('start_identity_dts'))
        obj.start_identity_dts = ApiClient.convertToType(data['start_identity_dts'], 'String');
      if (data.hasOwnProperty('verification'))
        obj.verification = VerificationRecord.constructFromObject(data['verification']);
    }
    return obj;
  }

  /**
   * @member {String} comment
   */
  exports.prototype.comment = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/VerificationRecord>} dkim
   */
  exports.prototype.dkim = undefined;

  /**
   * @member {String} dkim_status
   */
  exports.prototype.dkim_status = undefined;

  /**
   * @member {String} domain
   */
  exports.prototype.domain = undefined;

  /**
   * @member {String} esp_domain_uuid
   */
  exports.prototype.esp_domain_uuid = undefined;

  /**
   * @member {String} identity_status
   */
  exports.prototype.identity_status = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Mailgun} mailgun
   */
  exports.prototype.mailgun = undefined;

  /**
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * @member {String} provider
   */
  exports.prototype.provider = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/VerificationRecord} spf
   */
  exports.prototype.spf = undefined;

  /**
   * @member {String} start_dkim_dts
   */
  exports.prototype.start_dkim_dts = undefined;

  /**
   * @member {String} start_identity_dts
   */
  exports.prototype.start_identity_dts = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/VerificationRecord} verification
   */
  exports.prototype.verification = undefined;

  return exports;

}));
