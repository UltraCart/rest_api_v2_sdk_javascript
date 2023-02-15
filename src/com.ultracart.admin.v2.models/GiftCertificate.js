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
    define(['ApiClient', 'com.ultracart.admin.v2.models/GiftCertificateLedgerEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GiftCertificateLedgerEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.GiftCertificate = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.GiftCertificateLedgerEntry);
  }
}(this, function(ApiClient, GiftCertificateLedgerEntry) {
  'use strict';

  /**
   * The GiftCertificate model module.
   * @module com.ultracart.admin.v2.models/GiftCertificate
   * @version 3.10.117
   */

  /**
   * Constructs a new <code>GiftCertificate</code>.
   * @alias module:com.ultracart.admin.v2.models/GiftCertificate
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GiftCertificate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/GiftCertificate} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/GiftCertificate} The populated <code>GiftCertificate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('activated'))
        obj.activated = ApiClient.convertToType(data['activated'], 'Boolean');
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('customer_profile_oid'))
        obj.customer_profile_oid = ApiClient.convertToType(data['customer_profile_oid'], 'Number');
      if (data.hasOwnProperty('deleted'))
        obj.deleted = ApiClient.convertToType(data['deleted'], 'Boolean');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('expiration_dts'))
        obj.expiration_dts = ApiClient.convertToType(data['expiration_dts'], 'String');
      if (data.hasOwnProperty('gift_certificate_oid'))
        obj.gift_certificate_oid = ApiClient.convertToType(data['gift_certificate_oid'], 'Number');
      if (data.hasOwnProperty('internal'))
        obj.internal = ApiClient.convertToType(data['internal'], 'Boolean');
      if (data.hasOwnProperty('ledger_entries'))
        obj.ledger_entries = ApiClient.convertToType(data['ledger_entries'], [GiftCertificateLedgerEntry]);
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('merchant_note'))
        obj.merchant_note = ApiClient.convertToType(data['merchant_note'], 'String');
      if (data.hasOwnProperty('original_balance'))
        obj.original_balance = ApiClient.convertToType(data['original_balance'], 'Number');
      if (data.hasOwnProperty('reference_order_id'))
        obj.reference_order_id = ApiClient.convertToType(data['reference_order_id'], 'String');
      if (data.hasOwnProperty('remaining_balance'))
        obj.remaining_balance = ApiClient.convertToType(data['remaining_balance'], 'Number');
    }
    return obj;
  }

  /**
   * True if this gift certificate is activated and ready to apply to purchases.
   * @member {Boolean} activated
   */
  exports.prototype.activated = undefined;

  /**
   * The code used by the customer to purchase against this gift certificate.
   * @member {String} code
   */
  exports.prototype.code = undefined;

  /**
   * This is the customer profile oid associated with this internally managed gift certificate.
   * @member {Number} customer_profile_oid
   */
  exports.prototype.customer_profile_oid = undefined;

  /**
   * True if this gift certificate was deleted.
   * @member {Boolean} deleted
   */
  exports.prototype.deleted = undefined;

  /**
   * Email of the customer associated with this gift certificate.
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * Expiration date time.
   * @member {String} expiration_dts
   */
  exports.prototype.expiration_dts = undefined;

  /**
   * Gift certificate oid.
   * @member {Number} gift_certificate_oid
   */
  exports.prototype.gift_certificate_oid = undefined;

  /**
   * This is an internally managed gift certificate associated with the loyalty cash rewards program.
   * @member {Boolean} internal
   */
  exports.prototype.internal = undefined;

  /**
   * A list of all ledger activity for this gift certificate.
   * @member {Array.<module:com.ultracart.admin.v2.models/GiftCertificateLedgerEntry>} ledger_entries
   */
  exports.prototype.ledger_entries = undefined;

  /**
   * Merchant Id
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * A list of all ledger activity for this gift certificate.
   * @member {String} merchant_note
   */
  exports.prototype.merchant_note = undefined;

  /**
   * Original balance of the gift certificate.
   * @member {Number} original_balance
   */
  exports.prototype.original_balance = undefined;

  /**
   * The order used to purchase this gift certificate.  This value is ONLY set during checkout when a certificate is purchased, not when it is used.  Any usage is recorded in the ledger
   * @member {String} reference_order_id
   */
  exports.prototype.reference_order_id = undefined;

  /**
   * The remaining balance on the gift certificate.  This is never set directly, but calculated from the ledger.  To change the remaining balance, add a ledger entry.
   * @member {Number} remaining_balance
   */
  exports.prototype.remaining_balance = undefined;

  return exports;

}));
