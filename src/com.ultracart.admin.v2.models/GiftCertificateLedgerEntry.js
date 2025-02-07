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
    root.UltraCartRestApiV2.GiftCertificateLedgerEntry = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GiftCertificateLedgerEntry model module.
   * @module com.ultracart.admin.v2.models/GiftCertificateLedgerEntry
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>GiftCertificateLedgerEntry</code>.
   * @alias module:com.ultracart.admin.v2.models/GiftCertificateLedgerEntry
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GiftCertificateLedgerEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/GiftCertificateLedgerEntry} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/GiftCertificateLedgerEntry} The populated <code>GiftCertificateLedgerEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('entry_dts'))
        obj.entry_dts = ApiClient.convertToType(data['entry_dts'], 'String');
      if (data.hasOwnProperty('gift_certificate_ledger_oid'))
        obj.gift_certificate_ledger_oid = ApiClient.convertToType(data['gift_certificate_ledger_oid'], 'Number');
      if (data.hasOwnProperty('gift_certificate_oid'))
        obj.gift_certificate_oid = ApiClient.convertToType(data['gift_certificate_oid'], 'Number');
      if (data.hasOwnProperty('reference_order_id'))
        obj.reference_order_id = ApiClient.convertToType(data['reference_order_id'], 'String');
    }
    return obj;
  }

  /**
   * The amount of the activity.
   * @member {Number} amount
   */
  exports.prototype.amount = undefined;

  /**
   * Description of what this ledger entry is used.
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * Date time of this ledger activity.
   * @member {String} entry_dts
   */
  exports.prototype.entry_dts = undefined;

  /**
   * Gift certificate ledger oid is a primary key for this object, used internally.
   * @member {Number} gift_certificate_ledger_oid
   */
  exports.prototype.gift_certificate_ledger_oid = undefined;

  /**
   * Gift certificate oid.
   * @member {Number} gift_certificate_oid
   */
  exports.prototype.gift_certificate_oid = undefined;

  /**
   * The order id if this gift certificate was used as part of the payment.
   * @member {String} reference_order_id
   */
  exports.prototype.reference_order_id = undefined;

  return exports;

}));
