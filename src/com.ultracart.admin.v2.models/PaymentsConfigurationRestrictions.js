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
    define(['ApiClient', 'com.ultracart.admin.v2.models/PaymentsConfigurationRestrictionsTheme'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentsConfigurationRestrictionsTheme'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.PaymentsConfigurationRestrictions = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.PaymentsConfigurationRestrictionsTheme);
  }
}(this, function(ApiClient, PaymentsConfigurationRestrictionsTheme) {
  'use strict';

  /**
   * The PaymentsConfigurationRestrictions model module.
   * @module com.ultracart.admin.v2.models/PaymentsConfigurationRestrictions
   * @version 3.10.6
   */

  /**
   * Constructs a new <code>PaymentsConfigurationRestrictions</code>.
   * @alias module:com.ultracart.admin.v2.models/PaymentsConfigurationRestrictions
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PaymentsConfigurationRestrictions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/PaymentsConfigurationRestrictions} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/PaymentsConfigurationRestrictions} The populated <code>PaymentsConfigurationRestrictions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('descriptions'))
        obj.descriptions = ApiClient.convertToType(data['descriptions'], ['String']);
      if (data.hasOwnProperty('maximum_subtotal'))
        obj.maximum_subtotal = ApiClient.convertToType(data['maximum_subtotal'], 'Number');
      if (data.hasOwnProperty('minimum_subtotal'))
        obj.minimum_subtotal = ApiClient.convertToType(data['minimum_subtotal'], 'Number');
      if (data.hasOwnProperty('payment_method'))
        obj.payment_method = ApiClient.convertToType(data['payment_method'], 'String');
      if (data.hasOwnProperty('restriction_alaska_hawaii'))
        obj.restriction_alaska_hawaii = ApiClient.convertToType(data['restriction_alaska_hawaii'], 'String');
      if (data.hasOwnProperty('restriction_apo_fpo'))
        obj.restriction_apo_fpo = ApiClient.convertToType(data['restriction_apo_fpo'], 'String');
      if (data.hasOwnProperty('restriction_canada'))
        obj.restriction_canada = ApiClient.convertToType(data['restriction_canada'], 'String');
      if (data.hasOwnProperty('restriction_continental_us'))
        obj.restriction_continental_us = ApiClient.convertToType(data['restriction_continental_us'], 'String');
      if (data.hasOwnProperty('restriction_domestic_only'))
        obj.restriction_domestic_only = ApiClient.convertToType(data['restriction_domestic_only'], 'String');
      if (data.hasOwnProperty('restriction_international_only'))
        obj.restriction_international_only = ApiClient.convertToType(data['restriction_international_only'], 'String');
      if (data.hasOwnProperty('restriction_po_box'))
        obj.restriction_po_box = ApiClient.convertToType(data['restriction_po_box'], 'String');
      if (data.hasOwnProperty('restriction_puerto_rico'))
        obj.restriction_puerto_rico = ApiClient.convertToType(data['restriction_puerto_rico'], 'String');
      if (data.hasOwnProperty('restriction_us_territories'))
        obj.restriction_us_territories = ApiClient.convertToType(data['restriction_us_territories'], 'String');
      if (data.hasOwnProperty('themes'))
        obj.themes = ApiClient.convertToType(data['themes'], [PaymentsConfigurationRestrictionsTheme]);
    }
    return obj;
  }

  /**
   * @member {Array.<String>} descriptions
   */
  exports.prototype.descriptions = undefined;

  /**
   * Maximum subtotal
   * @member {Number} maximum_subtotal
   */
  exports.prototype.maximum_subtotal = undefined;

  /**
   * Minimum subtotal
   * @member {Number} minimum_subtotal
   */
  exports.prototype.minimum_subtotal = undefined;

  /**
   * Payment method
   * @member {String} payment_method
   */
  exports.prototype.payment_method = undefined;

  /**
   * Alaska and Hawaii restriction
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationRestrictions.RestrictionAlaskaHawaiiEnum} restriction_alaska_hawaii
   */
  exports.prototype.restriction_alaska_hawaii = undefined;

  /**
   * APO/FPO restriction
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationRestrictions.RestrictionApoFpoEnum} restriction_apo_fpo
   */
  exports.prototype.restriction_apo_fpo = undefined;

  /**
   * Canada restriction
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationRestrictions.RestrictionCanadaEnum} restriction_canada
   */
  exports.prototype.restriction_canada = undefined;

  /**
   * Continental US restriction
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationRestrictions.RestrictionContinentalUsEnum} restriction_continental_us
   */
  exports.prototype.restriction_continental_us = undefined;

  /**
   * Domestic only restriction
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationRestrictions.RestrictionDomesticOnlyEnum} restriction_domestic_only
   */
  exports.prototype.restriction_domestic_only = undefined;

  /**
   * International only restriction
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationRestrictions.RestrictionInternationalOnlyEnum} restriction_international_only
   */
  exports.prototype.restriction_international_only = undefined;

  /**
   * PO Box restriction
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationRestrictions.RestrictionPoBoxEnum} restriction_po_box
   */
  exports.prototype.restriction_po_box = undefined;

  /**
   * Puerto Rico restriction
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationRestrictions.RestrictionPuertoRicoEnum} restriction_puerto_rico
   */
  exports.prototype.restriction_puerto_rico = undefined;

  /**
   * US Territories restriction
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationRestrictions.RestrictionUsTerritoriesEnum} restriction_us_territories
   */
  exports.prototype.restriction_us_territories = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/PaymentsConfigurationRestrictionsTheme>} themes
   */
  exports.prototype.themes = undefined;


  /**
   * Allowed values for the <code>restriction_alaska_hawaii</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RestrictionAlaskaHawaiiEnum = {
    /**
     * value: "invalid"
     * @const
     */
    invalid: "invalid",

    /**
     * value: "invalidOnly"
     * @const
     */
    invalidOnly: "invalidOnly",

    /**
     * value: "valid"
     * @const
     */
    valid: "valid"
  };


  /**
   * Allowed values for the <code>restriction_apo_fpo</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RestrictionApoFpoEnum = {
    /**
     * value: "invalid"
     * @const
     */
    invalid: "invalid",

    /**
     * value: "invalidOnly"
     * @const
     */
    invalidOnly: "invalidOnly",

    /**
     * value: "valid"
     * @const
     */
    valid: "valid"
  };


  /**
   * Allowed values for the <code>restriction_canada</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RestrictionCanadaEnum = {
    /**
     * value: "invalid"
     * @const
     */
    invalid: "invalid",

    /**
     * value: "invalidOnly"
     * @const
     */
    invalidOnly: "invalidOnly",

    /**
     * value: "valid"
     * @const
     */
    valid: "valid"
  };


  /**
   * Allowed values for the <code>restriction_continental_us</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RestrictionContinentalUsEnum = {
    /**
     * value: "invalid"
     * @const
     */
    invalid: "invalid",

    /**
     * value: "invalidOnly"
     * @const
     */
    invalidOnly: "invalidOnly",

    /**
     * value: "valid"
     * @const
     */
    valid: "valid"
  };


  /**
   * Allowed values for the <code>restriction_domestic_only</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RestrictionDomesticOnlyEnum = {
    /**
     * value: "invalid"
     * @const
     */
    invalid: "invalid",

    /**
     * value: "invalidOnly"
     * @const
     */
    invalidOnly: "invalidOnly",

    /**
     * value: "valid"
     * @const
     */
    valid: "valid"
  };


  /**
   * Allowed values for the <code>restriction_international_only</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RestrictionInternationalOnlyEnum = {
    /**
     * value: "invalid"
     * @const
     */
    invalid: "invalid",

    /**
     * value: "invalidOnly"
     * @const
     */
    invalidOnly: "invalidOnly",

    /**
     * value: "valid"
     * @const
     */
    valid: "valid"
  };


  /**
   * Allowed values for the <code>restriction_po_box</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RestrictionPoBoxEnum = {
    /**
     * value: "invalid"
     * @const
     */
    invalid: "invalid",

    /**
     * value: "invalidOnly"
     * @const
     */
    invalidOnly: "invalidOnly",

    /**
     * value: "valid"
     * @const
     */
    valid: "valid"
  };


  /**
   * Allowed values for the <code>restriction_puerto_rico</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RestrictionPuertoRicoEnum = {
    /**
     * value: "invalid"
     * @const
     */
    invalid: "invalid",

    /**
     * value: "invalidOnly"
     * @const
     */
    invalidOnly: "invalidOnly",

    /**
     * value: "valid"
     * @const
     */
    valid: "valid"
  };


  /**
   * Allowed values for the <code>restriction_us_territories</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RestrictionUsTerritoriesEnum = {
    /**
     * value: "invalid"
     * @const
     */
    invalid: "invalid",

    /**
     * value: "invalidOnly"
     * @const
     */
    invalidOnly: "invalidOnly",

    /**
     * value: "valid"
     * @const
     */
    valid: "valid"
  };

  return exports;

}));
