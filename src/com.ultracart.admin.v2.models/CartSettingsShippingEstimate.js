/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'com.ultracart.admin.v2.models/Currency'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Currency'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CartSettingsShippingEstimate = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Currency);
  }
}(this, function(ApiClient, Currency) {
  'use strict';




  /**
   * The CartSettingsShippingEstimate model module.
   * @module com.ultracart.admin.v2.models/CartSettingsShippingEstimate
   * @version 2.4.0
   */

  /**
   * Constructs a new <code>CartSettingsShippingEstimate</code>.
   * @alias module:com.ultracart.admin.v2.models/CartSettingsShippingEstimate
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>CartSettingsShippingEstimate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CartSettingsShippingEstimate} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CartSettingsShippingEstimate} The populated <code>CartSettingsShippingEstimate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('allow_3rd_party_billing')) {
        obj['allow_3rd_party_billing'] = ApiClient.convertToType(data['allow_3rd_party_billing'], 'Boolean');
      }
      if (data.hasOwnProperty('comment')) {
        obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
      }
      if (data.hasOwnProperty('cost')) {
        obj['cost'] = Currency.constructFromObject(data['cost']);
      }
      if (data.hasOwnProperty('cost_before_discount')) {
        obj['cost_before_discount'] = Currency.constructFromObject(data['cost_before_discount']);
      }
      if (data.hasOwnProperty('default_method')) {
        obj['default_method'] = ApiClient.convertToType(data['default_method'], 'Boolean');
      }
      if (data.hasOwnProperty('discount')) {
        obj['discount'] = Currency.constructFromObject(data['discount']);
      }
      if (data.hasOwnProperty('discounted')) {
        obj['discounted'] = ApiClient.convertToType(data['discounted'], 'Boolean');
      }
      if (data.hasOwnProperty('display_name')) {
        obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
      }
      if (data.hasOwnProperty('estimated_delivery')) {
        obj['estimated_delivery'] = ApiClient.convertToType(data['estimated_delivery'], 'String');
      }
      if (data.hasOwnProperty('lift_gate_option')) {
        obj['lift_gate_option'] = ApiClient.convertToType(data['lift_gate_option'], 'Boolean');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('tax')) {
        obj['tax'] = Currency.constructFromObject(data['tax']);
      }
      if (data.hasOwnProperty('total_tax')) {
        obj['total_tax'] = Currency.constructFromObject(data['total_tax']);
      }
    }
    return obj;
  }

  /**
   * True if this method allows the customer to use their own shipper account number
   * @member {Boolean} allow_3rd_party_billing
   */
  exports.prototype['allow_3rd_party_billing'] = undefined;
  /**
   * Comment to display to the customer about this method
   * @member {String} comment
   */
  exports.prototype['comment'] = undefined;
  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} cost
   */
  exports.prototype['cost'] = undefined;
  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} cost_before_discount
   */
  exports.prototype['cost_before_discount'] = undefined;
  /**
   * True if this is the default method
   * @member {Boolean} default_method
   */
  exports.prototype['default_method'] = undefined;
  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} discount
   */
  exports.prototype['discount'] = undefined;
  /**
   * True if this method is discounted because of a coupon
   * @member {Boolean} discounted
   */
  exports.prototype['discounted'] = undefined;
  /**
   * The name to display to the customer
   * @member {String} display_name
   */
  exports.prototype['display_name'] = undefined;
  /**
   * Date of the estimated delivery (or range)
   * @member {String} estimated_delivery
   */
  exports.prototype['estimated_delivery'] = undefined;
  /**
   * True if a lift gate option for this method should be offered to the customer
   * @member {Boolean} lift_gate_option
   */
  exports.prototype['lift_gate_option'] = undefined;
  /**
   * Shipping method name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} tax
   */
  exports.prototype['tax'] = undefined;
  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} total_tax
   */
  exports.prototype['total_tax'] = undefined;



  return exports;
}));


