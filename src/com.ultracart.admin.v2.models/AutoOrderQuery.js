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
    root.UltraCartRestApiV2.AutoOrderQuery = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AutoOrderQuery model module.
   * @module com.ultracart.admin.v2.models/AutoOrderQuery
   * @version 3.1.39
   */

  /**
   * Constructs a new <code>AutoOrderQuery</code>.
   * @alias module:com.ultracart.admin.v2.models/AutoOrderQuery
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AutoOrderQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/AutoOrderQuery} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/AutoOrderQuery} The populated <code>AutoOrderQuery</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('auto_order_code'))
        obj.auto_order_code = ApiClient.convertToType(data['auto_order_code'], 'String');
      if (data.hasOwnProperty('card_type'))
        obj.card_type = ApiClient.convertToType(data['card_type'], 'String');
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('company'))
        obj.company = ApiClient.convertToType(data['company'], 'String');
      if (data.hasOwnProperty('country_code'))
        obj.country_code = ApiClient.convertToType(data['country_code'], 'String');
      if (data.hasOwnProperty('customer_profile_oid'))
        obj.customer_profile_oid = ApiClient.convertToType(data['customer_profile_oid'], 'Number');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('first_name'))
        obj.first_name = ApiClient.convertToType(data['first_name'], 'String');
      if (data.hasOwnProperty('item_id'))
        obj.item_id = ApiClient.convertToType(data['item_id'], 'String');
      if (data.hasOwnProperty('last_name'))
        obj.last_name = ApiClient.convertToType(data['last_name'], 'String');
      if (data.hasOwnProperty('next_shipment_date_begin'))
        obj.next_shipment_date_begin = ApiClient.convertToType(data['next_shipment_date_begin'], 'String');
      if (data.hasOwnProperty('next_shipment_date_end'))
        obj.next_shipment_date_end = ApiClient.convertToType(data['next_shipment_date_end'], 'String');
      if (data.hasOwnProperty('original_order_date_begin'))
        obj.original_order_date_begin = ApiClient.convertToType(data['original_order_date_begin'], 'String');
      if (data.hasOwnProperty('original_order_date_end'))
        obj.original_order_date_end = ApiClient.convertToType(data['original_order_date_end'], 'String');
      if (data.hasOwnProperty('original_order_id'))
        obj.original_order_id = ApiClient.convertToType(data['original_order_id'], 'String');
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
      if (data.hasOwnProperty('postal_code'))
        obj.postal_code = ApiClient.convertToType(data['postal_code'], 'String');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
    }
    return obj;
  }

  /**
   * Auto order code
   * @member {String} auto_order_code
   */
  exports.prototype.auto_order_code = undefined;

  /**
   * Card type
   * @member {String} card_type
   */
  exports.prototype.card_type = undefined;

  /**
   * City
   * @member {String} city
   */
  exports.prototype.city = undefined;

  /**
   * Company
   * @member {String} company
   */
  exports.prototype.company = undefined;

  /**
   * ISO-3166 two letter country code
   * @member {String} country_code
   */
  exports.prototype.country_code = undefined;

  /**
   * Customer profile object identifier
   * @member {Number} customer_profile_oid
   */
  exports.prototype.customer_profile_oid = undefined;

  /**
   * Email
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * First name
   * @member {String} first_name
   */
  exports.prototype.first_name = undefined;

  /**
   * Item ID
   * @member {String} item_id
   */
  exports.prototype.item_id = undefined;

  /**
   * Last name
   * @member {String} last_name
   */
  exports.prototype.last_name = undefined;

  /**
   * Next shipment date begin
   * @member {String} next_shipment_date_begin
   */
  exports.prototype.next_shipment_date_begin = undefined;

  /**
   * Next shipment date end
   * @member {String} next_shipment_date_end
   */
  exports.prototype.next_shipment_date_end = undefined;

  /**
   * Original order date begin
   * @member {String} original_order_date_begin
   */
  exports.prototype.original_order_date_begin = undefined;

  /**
   * Original order date end
   * @member {String} original_order_date_end
   */
  exports.prototype.original_order_date_end = undefined;

  /**
   * Original order ID
   * @member {String} original_order_id
   */
  exports.prototype.original_order_id = undefined;

  /**
   * Phone
   * @member {String} phone
   */
  exports.prototype.phone = undefined;

  /**
   * Postal code
   * @member {String} postal_code
   */
  exports.prototype.postal_code = undefined;

  /**
   * State
   * @member {String} state
   */
  exports.prototype.state = undefined;

  /**
   * Status
   * @member {String} status
   */
  exports.prototype.status = undefined;

  return exports;

}));
