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
    define(['com.ultracart.admin.v2.swagger/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.OrderFormat = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OrderFormat model module.
   * @module com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/OrderFormat
   * @version 2.1.0
   */

  /**
   * Constructs a new <code>OrderFormat</code>.
   * @alias module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/OrderFormat
   * @class
   */
  var exports = function() {
    var _this = this;

















  };

  /**
   * Constructs a <code>OrderFormat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/OrderFormat} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/OrderFormat} The populated <code>OrderFormat</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('context')) {
        obj['context'] = ApiClient.convertToType(data['context'], 'String');
      }
      if (data.hasOwnProperty('dont_link_email_to_search')) {
        obj['dont_link_email_to_search'] = ApiClient.convertToType(data['dont_link_email_to_search'], 'Boolean');
      }
      if (data.hasOwnProperty('email_as_link')) {
        obj['email_as_link'] = ApiClient.convertToType(data['email_as_link'], 'Boolean');
      }
      if (data.hasOwnProperty('filter_distribution_center_oid')) {
        obj['filter_distribution_center_oid'] = ApiClient.convertToType(data['filter_distribution_center_oid'], 'Number');
      }
      if (data.hasOwnProperty('filter_to_items_in_contact_oid')) {
        obj['filter_to_items_in_contact_oid'] = ApiClient.convertToType(data['filter_to_items_in_contact_oid'], 'Number');
      }
      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }
      if (data.hasOwnProperty('hide_bill_to_address')) {
        obj['hide_bill_to_address'] = ApiClient.convertToType(data['hide_bill_to_address'], 'Boolean');
      }
      if (data.hasOwnProperty('hide_price_information')) {
        obj['hide_price_information'] = ApiClient.convertToType(data['hide_price_information'], 'Boolean');
      }
      if (data.hasOwnProperty('link_file_attachments')) {
        obj['link_file_attachments'] = ApiClient.convertToType(data['link_file_attachments'], 'Boolean');
      }
      if (data.hasOwnProperty('show_contact_info')) {
        obj['show_contact_info'] = ApiClient.convertToType(data['show_contact_info'], 'Boolean');
      }
      if (data.hasOwnProperty('show_in_merchant_currency')) {
        obj['show_in_merchant_currency'] = ApiClient.convertToType(data['show_in_merchant_currency'], 'Boolean');
      }
      if (data.hasOwnProperty('show_internal_information')) {
        obj['show_internal_information'] = ApiClient.convertToType(data['show_internal_information'], 'Boolean');
      }
      if (data.hasOwnProperty('show_merchant_notes')) {
        obj['show_merchant_notes'] = ApiClient.convertToType(data['show_merchant_notes'], 'Boolean');
      }
      if (data.hasOwnProperty('show_non_sensitive_payment_info')) {
        obj['show_non_sensitive_payment_info'] = ApiClient.convertToType(data['show_non_sensitive_payment_info'], 'Boolean');
      }
      if (data.hasOwnProperty('show_payment_info')) {
        obj['show_payment_info'] = ApiClient.convertToType(data['show_payment_info'], 'Boolean');
      }
      if (data.hasOwnProperty('translate')) {
        obj['translate'] = ApiClient.convertToType(data['translate'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The context to generate the order view for.
   * @member {String} context
   */
  exports.prototype['context'] = undefined;
  /**
   * True to not link the email address to the order search
   * @member {Boolean} dont_link_email_to_search
   */
  exports.prototype['dont_link_email_to_search'] = undefined;
  /**
   * True to make the email address a clickable mailto link
   * @member {Boolean} email_as_link
   */
  exports.prototype['email_as_link'] = undefined;
  /**
   * Specify a distribution center oid to filter the items displayed to that particular distribution center.
   * @member {Number} filter_distribution_center_oid
   */
  exports.prototype['filter_distribution_center_oid'] = undefined;
  /**
   * The container oid to filter items to.
   * @member {Number} filter_to_items_in_contact_oid
   */
  exports.prototype['filter_to_items_in_contact_oid'] = undefined;
  /**
   * The desired format.
   * @member {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/OrderFormat.FormatEnum} format
   */
  exports.prototype['format'] = undefined;
  /**
   * True to ide the bill to address
   * @member {Boolean} hide_bill_to_address
   */
  exports.prototype['hide_bill_to_address'] = undefined;
  /**
   * True to hide price information
   * @member {Boolean} hide_price_information
   */
  exports.prototype['hide_price_information'] = undefined;
  /**
   * True to link file attachments for download
   * @member {Boolean} link_file_attachments
   */
  exports.prototype['link_file_attachments'] = undefined;
  /**
   * True to show contact information
   * @member {Boolean} show_contact_info
   */
  exports.prototype['show_contact_info'] = undefined;
  /**
   * True to show the order in the merchant currency
   * @member {Boolean} show_in_merchant_currency
   */
  exports.prototype['show_in_merchant_currency'] = undefined;
  /**
   * True to show internal information about the order
   * @member {Boolean} show_internal_information
   */
  exports.prototype['show_internal_information'] = undefined;
  /**
   * True to show merchant notes
   * @member {Boolean} show_merchant_notes
   */
  exports.prototype['show_merchant_notes'] = undefined;
  /**
   * True to show non-sensitive payment information
   * @member {Boolean} show_non_sensitive_payment_info
   */
  exports.prototype['show_non_sensitive_payment_info'] = undefined;
  /**
   * True to show payment information
   * @member {Boolean} show_payment_info
   */
  exports.prototype['show_payment_info'] = undefined;
  /**
   * True to translate the order into the native language of the customer
   * @member {Boolean} translate
   */
  exports.prototype['translate'] = undefined;


  /**
   * Allowed values for the <code>format</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FormatEnum = {
    /**
     * value: "text"
     * @const
     */
    "text": "text",
    /**
     * value: "div"
     * @const
     */
    "div": "div",
    /**
     * value: "table"
     * @const
     */
    "table": "table",
    /**
     * value: "email"
     * @const
     */
    "email": "email"  };


  return exports;
}));


