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
    root.UltraCartRestApiV2.EmailCommseqPostcardSendTestRequest = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EmailCommseqPostcardSendTestRequest model module.
   * @module com.ultracart.admin.v2.models/EmailCommseqPostcardSendTestRequest
   * @version 3.10.84
   */

  /**
   * Constructs a new <code>EmailCommseqPostcardSendTestRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailCommseqPostcardSendTestRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EmailCommseqPostcardSendTestRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailCommseqPostcardSendTestRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailCommseqPostcardSendTestRequest} The populated <code>EmailCommseqPostcardSendTestRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('address_1'))
        obj.address_1 = ApiClient.convertToType(data['address_1'], 'String');
      if (data.hasOwnProperty('address_2'))
        obj.address_2 = ApiClient.convertToType(data['address_2'], 'String');
      if (data.hasOwnProperty('cart_id'))
        obj.cart_id = ApiClient.convertToType(data['cart_id'], 'String');
      if (data.hasOwnProperty('cart_item_ids'))
        obj.cart_item_ids = ApiClient.convertToType(data['cart_item_ids'], ['String']);
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('esp_commseq_postcard_uuid'))
        obj.esp_commseq_postcard_uuid = ApiClient.convertToType(data['esp_commseq_postcard_uuid'], 'String');
      if (data.hasOwnProperty('esp_commseq_step_uuid'))
        obj.esp_commseq_step_uuid = ApiClient.convertToType(data['esp_commseq_step_uuid'], 'String');
      if (data.hasOwnProperty('esp_commseq_uuid'))
        obj.esp_commseq_uuid = ApiClient.convertToType(data['esp_commseq_uuid'], 'String');
      if (data.hasOwnProperty('mail_card'))
        obj.mail_card = ApiClient.convertToType(data['mail_card'], 'Boolean');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('order_id'))
        obj.order_id = ApiClient.convertToType(data['order_id'], 'String');
      if (data.hasOwnProperty('postal_code'))
        obj.postal_code = ApiClient.convertToType(data['postal_code'], 'String');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} address_1
   */
  exports.prototype.address_1 = undefined;

  /**
   * @member {String} address_2
   */
  exports.prototype.address_2 = undefined;

  /**
   * @member {String} cart_id
   */
  exports.prototype.cart_id = undefined;

  /**
   * @member {Array.<String>} cart_item_ids
   */
  exports.prototype.cart_item_ids = undefined;

  /**
   * @member {String} city
   */
  exports.prototype.city = undefined;

  /**
   * @member {String} esp_commseq_postcard_uuid
   */
  exports.prototype.esp_commseq_postcard_uuid = undefined;

  /**
   * @member {String} esp_commseq_step_uuid
   */
  exports.prototype.esp_commseq_step_uuid = undefined;

  /**
   * @member {String} esp_commseq_uuid
   */
  exports.prototype.esp_commseq_uuid = undefined;

  /**
   * @member {Boolean} mail_card
   */
  exports.prototype.mail_card = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} order_id
   */
  exports.prototype.order_id = undefined;

  /**
   * @member {String} postal_code
   */
  exports.prototype.postal_code = undefined;

  /**
   * @member {String} state
   */
  exports.prototype.state = undefined;

  return exports;

}));
