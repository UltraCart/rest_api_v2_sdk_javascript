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
    define(['ApiClient', 'com.ultracart.admin.v2.models/CustomerLoyaltyLedger', 'com.ultracart.admin.v2.models/CustomerLoyaltyRedemption', 'com.ultracart.admin.v2.models/GiftCertificate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CustomerLoyaltyLedger'), require('./CustomerLoyaltyRedemption'), require('./GiftCertificate'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CustomerLoyalty = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.CustomerLoyaltyLedger, root.UltraCartRestApiV2.CustomerLoyaltyRedemption, root.UltraCartRestApiV2.GiftCertificate);
  }
}(this, function(ApiClient, CustomerLoyaltyLedger, CustomerLoyaltyRedemption, GiftCertificate) {
  'use strict';

  /**
   * The CustomerLoyalty model module.
   * @module com.ultracart.admin.v2.models/CustomerLoyalty
   * @version 3.10.99
   */

  /**
   * Constructs a new <code>CustomerLoyalty</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerLoyalty
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CustomerLoyalty</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CustomerLoyalty} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CustomerLoyalty} The populated <code>CustomerLoyalty</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('current_points'))
        obj.current_points = ApiClient.convertToType(data['current_points'], 'Number');
      if (data.hasOwnProperty('internal_gift_certificate'))
        obj.internal_gift_certificate = GiftCertificate.constructFromObject(data['internal_gift_certificate']);
      if (data.hasOwnProperty('internal_gift_certificate_balance'))
        obj.internal_gift_certificate_balance = ApiClient.convertToType(data['internal_gift_certificate_balance'], 'String');
      if (data.hasOwnProperty('internal_gift_certificate_oid'))
        obj.internal_gift_certificate_oid = ApiClient.convertToType(data['internal_gift_certificate_oid'], 'Number');
      if (data.hasOwnProperty('ledger_entries'))
        obj.ledger_entries = ApiClient.convertToType(data['ledger_entries'], [CustomerLoyaltyLedger]);
      if (data.hasOwnProperty('pending_points'))
        obj.pending_points = ApiClient.convertToType(data['pending_points'], 'Number');
      if (data.hasOwnProperty('redemptions'))
        obj.redemptions = ApiClient.convertToType(data['redemptions'], [CustomerLoyaltyRedemption]);
    }
    return obj;
  }

  /**
   * Current points
   * @member {Number} current_points
   */
  exports.prototype.current_points = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/GiftCertificate} internal_gift_certificate
   */
  exports.prototype.internal_gift_certificate = undefined;

  /**
   * Loyalty Cashback / Store credit balance (internal gift certificate balance)
   * @member {String} internal_gift_certificate_balance
   */
  exports.prototype.internal_gift_certificate_balance = undefined;

  /**
   * Internal gift certificate oid used to tracking loyalty cashback / store credit.
   * @member {Number} internal_gift_certificate_oid
   */
  exports.prototype.internal_gift_certificate_oid = undefined;

  /**
   * Ledger entries
   * @member {Array.<module:com.ultracart.admin.v2.models/CustomerLoyaltyLedger>} ledger_entries
   */
  exports.prototype.ledger_entries = undefined;

  /**
   * Pending Points
   * @member {Number} pending_points
   */
  exports.prototype.pending_points = undefined;

  /**
   * Redemptions
   * @member {Array.<module:com.ultracart.admin.v2.models/CustomerLoyaltyRedemption>} redemptions
   */
  exports.prototype.redemptions = undefined;

  return exports;

}));
