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
    root.UltraCartRestApiV2.TaxProviderUltraCartState = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TaxProviderUltraCartState model module.
   * @module com.ultracart.admin.v2.models/TaxProviderUltraCartState
   * @version 3.10.155
   */

  /**
   * Constructs a new <code>TaxProviderUltraCartState</code>.
   * @alias module:com.ultracart.admin.v2.models/TaxProviderUltraCartState
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TaxProviderUltraCartState</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/TaxProviderUltraCartState} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/TaxProviderUltraCartState} The populated <code>TaxProviderUltraCartState</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('exempt_digital_items'))
        obj.exempt_digital_items = ApiClient.convertToType(data['exempt_digital_items'], 'Boolean');
      if (data.hasOwnProperty('exempt_physical_items'))
        obj.exempt_physical_items = ApiClient.convertToType(data['exempt_physical_items'], 'Boolean');
      if (data.hasOwnProperty('exempt_service_items'))
        obj.exempt_service_items = ApiClient.convertToType(data['exempt_service_items'], 'Boolean');
      if (data.hasOwnProperty('state_code'))
        obj.state_code = ApiClient.convertToType(data['state_code'], 'String');
      if (data.hasOwnProperty('state_name'))
        obj.state_name = ApiClient.convertToType(data['state_name'], 'String');
      if (data.hasOwnProperty('tax_gift_charge'))
        obj.tax_gift_charge = ApiClient.convertToType(data['tax_gift_charge'], 'Boolean');
      if (data.hasOwnProperty('tax_gift_wrap'))
        obj.tax_gift_wrap = ApiClient.convertToType(data['tax_gift_wrap'], 'Boolean');
      if (data.hasOwnProperty('tax_rate_formatted'))
        obj.tax_rate_formatted = ApiClient.convertToType(data['tax_rate_formatted'], 'String');
      if (data.hasOwnProperty('tax_shipping'))
        obj.tax_shipping = ApiClient.convertToType(data['tax_shipping'], 'Boolean');
    }
    return obj;
  }

  /**
   * True if this state taxes are managed by UltraCart
   * @member {Boolean} enabled
   */
  exports.prototype.enabled = undefined;

  /**
   * True if digital items are exempt from sales tax in this state.
   * @member {Boolean} exempt_digital_items
   */
  exports.prototype.exempt_digital_items = undefined;

  /**
   * True if physical items are exempt from sales tax in this state.
   * @member {Boolean} exempt_physical_items
   */
  exports.prototype.exempt_physical_items = undefined;

  /**
   * True if service items are exempt from sales tax in this state.
   * @member {Boolean} exempt_service_items
   */
  exports.prototype.exempt_service_items = undefined;

  /**
   * State Code (2 digits)
   * @member {String} state_code
   */
  exports.prototype.state_code = undefined;

  /**
   * Fully spelled out state name
   * @member {String} state_name
   */
  exports.prototype.state_name = undefined;

  /**
   * True if gift charges should be taxed in this state.
   * @member {Boolean} tax_gift_charge
   */
  exports.prototype.tax_gift_charge = undefined;

  /**
   * True if gift wrap should be taxed in this state.
   * @member {Boolean} tax_gift_wrap
   */
  exports.prototype.tax_gift_wrap = undefined;

  /**
   * State tax rate formatted for display
   * @member {String} tax_rate_formatted
   */
  exports.prototype.tax_rate_formatted = undefined;

  /**
   * True if shipping should be taxed in this state.
   * @member {Boolean} tax_shipping
   */
  exports.prototype.tax_shipping = undefined;

  return exports;

}));
