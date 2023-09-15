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
    root.UltraCartRestApiV2.ChannelPartnerShipToPreference = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ChannelPartnerShipToPreference model module.
   * @module com.ultracart.admin.v2.models/ChannelPartnerShipToPreference
   * @version 3.10.160
   */

  /**
   * Constructs a new <code>ChannelPartnerShipToPreference</code>.
   * @alias module:com.ultracart.admin.v2.models/ChannelPartnerShipToPreference
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ChannelPartnerShipToPreference</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ChannelPartnerShipToPreference} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ChannelPartnerShipToPreference} The populated <code>ChannelPartnerShipToPreference</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('additional_kit_component_item_ids'))
        obj.additional_kit_component_item_ids = ApiClient.convertToType(data['additional_kit_component_item_ids'], ['String']);
      if (data.hasOwnProperty('channel_partner_oid'))
        obj.channel_partner_oid = ApiClient.convertToType(data['channel_partner_oid'], 'Number');
      if (data.hasOwnProperty('channel_partner_ship_to_preference_oid'))
        obj.channel_partner_ship_to_preference_oid = ApiClient.convertToType(data['channel_partner_ship_to_preference_oid'], 'Number');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('return_policy'))
        obj.return_policy = ApiClient.convertToType(data['return_policy'], 'String');
      if (data.hasOwnProperty('ship_to_edi_code'))
        obj.ship_to_edi_code = ApiClient.convertToType(data['ship_to_edi_code'], 'String');
    }
    return obj;
  }

  /**
   * Additional item ids to add as kit components to the order with a zero price.
   * @member {Array.<String>} additional_kit_component_item_ids
   */
  exports.prototype.additional_kit_component_item_ids = undefined;

  /**
   * The channel partner object identifier this preference is associated with
   * @member {Number} channel_partner_oid
   */
  exports.prototype.channel_partner_oid = undefined;

  /**
   * Object identifier for the ship to preference
   * @member {Number} channel_partner_ship_to_preference_oid
   */
  exports.prototype.channel_partner_ship_to_preference_oid = undefined;

  /**
   * A description that is meaningful to the merchant.
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * The merchant id that owns the channel partner
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * Alternate return policy to print on the packing slip.
   * @member {String} return_policy
   */
  exports.prototype.return_policy = undefined;

  /**
   * The ship to EDI code that the preferences are for
   * @member {String} ship_to_edi_code
   */
  exports.prototype.ship_to_edi_code = undefined;

  return exports;

}));
