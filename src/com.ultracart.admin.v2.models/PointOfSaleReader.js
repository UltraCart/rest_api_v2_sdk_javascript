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
    root.UltraCartRestApiV2.PointOfSaleReader = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PointOfSaleReader model module.
   * @module com.ultracart.admin.v2.models/PointOfSaleReader
   * @version 3.10.107
   */

  /**
   * Constructs a new <code>PointOfSaleReader</code>.
   * @alias module:com.ultracart.admin.v2.models/PointOfSaleReader
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PointOfSaleReader</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/PointOfSaleReader} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/PointOfSaleReader} The populated <code>PointOfSaleReader</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('device_type'))
        obj.device_type = ApiClient.convertToType(data['device_type'], 'String');
      if (data.hasOwnProperty('label'))
        obj.label = ApiClient.convertToType(data['label'], 'String');
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('payment_provider'))
        obj.payment_provider = ApiClient.convertToType(data['payment_provider'], 'String');
      if (data.hasOwnProperty('pos_reader_id'))
        obj.pos_reader_id = ApiClient.convertToType(data['pos_reader_id'], 'Number');
      if (data.hasOwnProperty('pos_register_oid'))
        obj.pos_register_oid = ApiClient.convertToType(data['pos_register_oid'], 'Number');
      if (data.hasOwnProperty('serial_number'))
        obj.serial_number = ApiClient.convertToType(data['serial_number'], 'String');
      if (data.hasOwnProperty('stripe_account_id'))
        obj.stripe_account_id = ApiClient.convertToType(data['stripe_account_id'], 'String');
      if (data.hasOwnProperty('stripe_reader_id'))
        obj.stripe_reader_id = ApiClient.convertToType(data['stripe_reader_id'], 'String');
    }
    return obj;
  }

  /**
   * The device type of the reader.
   * @member {String} device_type
   */
  exports.prototype.device_type = undefined;

  /**
   * The label of the reader.
   * @member {String} label
   */
  exports.prototype.label = undefined;

  /**
   * The merchant id that owns this point of sale reader.
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * The payment provider for the card reader.
   * @member {module:com.ultracart.admin.v2.models/PointOfSaleReader.PaymentProviderEnum} payment_provider
   */
  exports.prototype.payment_provider = undefined;

  /**
   * Object identifier of the point of sale reader.
   * @member {Number} pos_reader_id
   */
  exports.prototype.pos_reader_id = undefined;

  /**
   * Object identifier of the point of sale register this reader is assigned to.
   * @member {Number} pos_register_oid
   */
  exports.prototype.pos_register_oid = undefined;

  /**
   * The serial number of the reader.
   * @member {String} serial_number
   */
  exports.prototype.serial_number = undefined;

  /**
   * If the payment provider is Stripe, this is the Stripe account id
   * @member {String} stripe_account_id
   */
  exports.prototype.stripe_account_id = undefined;

  /**
   * If the payment provide is Stripe, this is the Stripe terminal reader id
   * @member {String} stripe_reader_id
   */
  exports.prototype.stripe_reader_id = undefined;


  /**
   * Allowed values for the <code>payment_provider</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PaymentProviderEnum = {
    /**
     * value: "stripe"
     * @const
     */
    stripe: "stripe"
  };

  return exports;

}));
