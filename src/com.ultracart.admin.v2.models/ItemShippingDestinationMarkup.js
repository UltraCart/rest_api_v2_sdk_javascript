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
    root.UltraCartRestApiV2.ItemShippingDestinationMarkup = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ItemShippingDestinationMarkup model module.
   * @module com.ultracart.admin.v2.models/ItemShippingDestinationMarkup
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>ItemShippingDestinationMarkup</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemShippingDestinationMarkup
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemShippingDestinationMarkup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemShippingDestinationMarkup} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemShippingDestinationMarkup} The populated <code>ItemShippingDestinationMarkup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('adult_signature_required'))
        obj.adult_signature_required = ApiClient.convertToType(data['adult_signature_required'], 'Boolean');
      if (data.hasOwnProperty('country_code'))
        obj.country_code = ApiClient.convertToType(data['country_code'], 'String');
      if (data.hasOwnProperty('flat_fee'))
        obj.flat_fee = ApiClient.convertToType(data['flat_fee'], 'Number');
      if (data.hasOwnProperty('per_item'))
        obj.per_item = ApiClient.convertToType(data['per_item'], 'Number');
      if (data.hasOwnProperty('postal_code'))
        obj.postal_code = ApiClient.convertToType(data['postal_code'], 'String');
      if (data.hasOwnProperty('shipping_method'))
        obj.shipping_method = ApiClient.convertToType(data['shipping_method'], 'String');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
    }
    return obj;
  }

  /**
   * Adult Signature Required (only updated if not-null value provided)
   * @member {Boolean} adult_signature_required
   */
  exports.prototype.adult_signature_required = undefined;

  /**
   * Country code (ISO-3166 two letter)
   * @member {String} country_code
   */
  exports.prototype.country_code = undefined;

  /**
   * Flat fee
   * @member {Number} flat_fee
   */
  exports.prototype.flat_fee = undefined;

  /**
   * Per item
   * @member {Number} per_item
   */
  exports.prototype.per_item = undefined;

  /**
   * Postal code
   * @member {String} postal_code
   */
  exports.prototype.postal_code = undefined;

  /**
   * Shipping method
   * @member {String} shipping_method
   */
  exports.prototype.shipping_method = undefined;

  /**
   * State
   * @member {String} state
   */
  exports.prototype.state = undefined;

  return exports;

}));
