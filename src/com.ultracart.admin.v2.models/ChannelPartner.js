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
    root.UltraCartRestApiV2.ChannelPartner = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ChannelPartner model module.
   * @module com.ultracart.admin.v2.models/ChannelPartner
   * @version 3.10.188
   */

  /**
   * Constructs a new <code>ChannelPartner</code>.
   * @alias module:com.ultracart.admin.v2.models/ChannelPartner
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ChannelPartner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ChannelPartner} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ChannelPartner} The populated <code>ChannelPartner</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('channel_partner_oid'))
        obj.channel_partner_oid = ApiClient.convertToType(data['channel_partner_oid'], 'Number');
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('communication_method'))
        obj.communication_method = ApiClient.convertToType(data['communication_method'], 'String');
      if (data.hasOwnProperty('dont_hold_shipment'))
        obj.dont_hold_shipment = ApiClient.convertToType(data['dont_hold_shipment'], 'Boolean');
      if (data.hasOwnProperty('inactive'))
        obj.inactive = ApiClient.convertToType(data['inactive'], 'Boolean');
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('skip_customer_emails'))
        obj.skip_customer_emails = ApiClient.convertToType(data['skip_customer_emails'], 'Boolean');
    }
    return obj;
  }

  /**
   * Channel partner object id
   * @member {Number} channel_partner_oid
   */
  exports.prototype.channel_partner_oid = undefined;

  /**
   * Code associated with the channel partner
   * @member {String} code
   */
  exports.prototype.code = undefined;

  /**
   * Communication method of the channel partner
   * @member {String} communication_method
   */
  exports.prototype.communication_method = undefined;

  /**
   * True if shipments should immediately process for this channel partner.
   * @member {Boolean} dont_hold_shipment
   */
  exports.prototype.dont_hold_shipment = undefined;

  /**
   * True if the channel partner is inactive
   * @member {Boolean} inactive
   */
  exports.prototype.inactive = undefined;

  /**
   * Merchant ID of the channel partner
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * Name of the channel partner
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * True if emails to the customer are skipped for this channel partner.
   * @member {Boolean} skip_customer_emails
   */
  exports.prototype.skip_customer_emails = undefined;

  return exports;

}));
