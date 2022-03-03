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
    root.UltraCartRestApiV2.GiftCertificateCreateRequest = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GiftCertificateCreateRequest model module.
   * @module com.ultracart.admin.v2.models/GiftCertificateCreateRequest
   * @version 3.9.0
   */

  /**
   * Constructs a new <code>GiftCertificateCreateRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/GiftCertificateCreateRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GiftCertificateCreateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/GiftCertificateCreateRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/GiftCertificateCreateRequest} The populated <code>GiftCertificateCreateRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('expiration_dts'))
        obj.expiration_dts = ApiClient.convertToType(data['expiration_dts'], 'String');
      if (data.hasOwnProperty('initial_ledger_description'))
        obj.initial_ledger_description = ApiClient.convertToType(data['initial_ledger_description'], 'String');
      if (data.hasOwnProperty('merchant_note'))
        obj.merchant_note = ApiClient.convertToType(data['merchant_note'], 'String');
    }
    return obj;
  }

  /**
   * Initial amount of this gift certificate.
   * @member {Number} amount
   */
  exports.prototype.amount = undefined;

  /**
   * The email address (customer/owner) associated with this gift certificate.
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * Expiration date time.
   * @member {String} expiration_dts
   */
  exports.prototype.expiration_dts = undefined;

  /**
   * A brief description of how and/or why this gift certificate was created.
   * @member {String} initial_ledger_description
   */
  exports.prototype.initial_ledger_description = undefined;

  /**
   * Any internal details you wish to record about this gift certificate.
   * @member {String} merchant_note
   */
  exports.prototype.merchant_note = undefined;

  return exports;

}));
