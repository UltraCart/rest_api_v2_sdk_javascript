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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ChannelPartner', 'com.ultracart.admin.v2.models/Country', 'com.ultracart.admin.v2.models/CustomerAffiliate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ChannelPartner'), require('./Country'), require('./CustomerAffiliate'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CustomerEditorValues = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ChannelPartner, root.UltraCartRestApiV2.Country, root.UltraCartRestApiV2.CustomerAffiliate);
  }
}(this, function(ApiClient, ChannelPartner, Country, CustomerAffiliate) {
  'use strict';

  /**
   * The CustomerEditorValues model module.
   * @module com.ultracart.admin.v2.models/CustomerEditorValues
   * @version 3.10.107
   */

  /**
   * Constructs a new <code>CustomerEditorValues</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerEditorValues
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CustomerEditorValues</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CustomerEditorValues} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CustomerEditorValues} The populated <code>CustomerEditorValues</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('affiliates'))
        obj.affiliates = ApiClient.convertToType(data['affiliates'], [CustomerAffiliate]);
      if (data.hasOwnProperty('card_exp_months'))
        obj.card_exp_months = ApiClient.convertToType(data['card_exp_months'], ['String']);
      if (data.hasOwnProperty('card_exp_years'))
        obj.card_exp_years = ApiClient.convertToType(data['card_exp_years'], ['String']);
      if (data.hasOwnProperty('card_types'))
        obj.card_types = ApiClient.convertToType(data['card_types'], ['String']);
      if (data.hasOwnProperty('countries'))
        obj.countries = ApiClient.convertToType(data['countries'], [Country]);
      if (data.hasOwnProperty('edi_channel_partners'))
        obj.edi_channel_partners = ApiClient.convertToType(data['edi_channel_partners'], [ChannelPartner]);
      if (data.hasOwnProperty('loyalty_ledger_descriptions'))
        obj.loyalty_ledger_descriptions = ApiClient.convertToType(data['loyalty_ledger_descriptions'], ['String']);
      if (data.hasOwnProperty('loyalty_program_type'))
        obj.loyalty_program_type = ApiClient.convertToType(data['loyalty_program_type'], 'String');
      if (data.hasOwnProperty('qb_classes'))
        obj.qb_classes = ApiClient.convertToType(data['qb_classes'], ['String']);
      if (data.hasOwnProperty('sales_rep_codes'))
        obj.sales_rep_codes = ApiClient.convertToType(data['sales_rep_codes'], ['String']);
      if (data.hasOwnProperty('state_optional_countries'))
        obj.state_optional_countries = ApiClient.convertToType(data['state_optional_countries'], [Country]);
      if (data.hasOwnProperty('terms'))
        obj.terms = ApiClient.convertToType(data['terms'], ['String']);
    }
    return obj;
  }

  /**
   * affiliates
   * @member {Array.<module:com.ultracart.admin.v2.models/CustomerAffiliate>} affiliates
   */
  exports.prototype.affiliates = undefined;

  /**
   * card_exp_months
   * @member {Array.<String>} card_exp_months
   */
  exports.prototype.card_exp_months = undefined;

  /**
   * card_exp_years
   * @member {Array.<String>} card_exp_years
   */
  exports.prototype.card_exp_years = undefined;

  /**
   * card_types
   * @member {Array.<String>} card_types
   */
  exports.prototype.card_types = undefined;

  /**
   * countries
   * @member {Array.<module:com.ultracart.admin.v2.models/Country>} countries
   */
  exports.prototype.countries = undefined;

  /**
   * EDI channel partners
   * @member {Array.<module:com.ultracart.admin.v2.models/ChannelPartner>} edi_channel_partners
   */
  exports.prototype.edi_channel_partners = undefined;

  /**
   * loyalty_ledger_descriptions
   * @member {Array.<String>} loyalty_ledger_descriptions
   */
  exports.prototype.loyalty_ledger_descriptions = undefined;

  /**
   * loyalty_program_type
   * @member {String} loyalty_program_type
   */
  exports.prototype.loyalty_program_type = undefined;

  /**
   * qb_classes
   * @member {Array.<String>} qb_classes
   */
  exports.prototype.qb_classes = undefined;

  /**
   * sales_rep_codes
   * @member {Array.<String>} sales_rep_codes
   */
  exports.prototype.sales_rep_codes = undefined;

  /**
   * state_optional_countries
   * @member {Array.<module:com.ultracart.admin.v2.models/Country>} state_optional_countries
   */
  exports.prototype.state_optional_countries = undefined;

  /**
   * terms
   * @member {Array.<String>} terms
   */
  exports.prototype.terms = undefined;

  return exports;

}));
