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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.EmailCommseqEmail = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EmailCommseqEmail model module.
   * @module com.ultracart.admin.v2.models/EmailCommseqEmail
   * @version 2.4.83
   */

  /**
   * Constructs a new <code>EmailCommseqEmail</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailCommseqEmail
   * @class
   */
  var exports = function() {
    var _this = this;
















  };

  /**
   * Constructs a <code>EmailCommseqEmail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailCommseqEmail} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailCommseqEmail} The populated <code>EmailCommseqEmail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('deleted')) {
        obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
      }
      if (data.hasOwnProperty('edited_by_user')) {
        obj['edited_by_user'] = ApiClient.convertToType(data['edited_by_user'], 'String');
      }
      if (data.hasOwnProperty('email_communication_sequence_email_uuid')) {
        obj['email_communication_sequence_email_uuid'] = ApiClient.convertToType(data['email_communication_sequence_email_uuid'], 'String');
      }
      if (data.hasOwnProperty('email_container_cjson')) {
        obj['email_container_cjson'] = ApiClient.convertToType(data['email_container_cjson'], 'String');
      }
      if (data.hasOwnProperty('email_container_cjson_last_modified_dts')) {
        obj['email_container_cjson_last_modified_dts'] = ApiClient.convertToType(data['email_container_cjson_last_modified_dts'], 'String');
      }
      if (data.hasOwnProperty('email_template_vm_path')) {
        obj['email_template_vm_path'] = ApiClient.convertToType(data['email_template_vm_path'], 'String');
      }
      if (data.hasOwnProperty('filter_profile_equation_json')) {
        obj['filter_profile_equation_json'] = ApiClient.convertToType(data['filter_profile_equation_json'], 'String');
      }
      if (data.hasOwnProperty('individually_render')) {
        obj['individually_render'] = ApiClient.convertToType(data['individually_render'], 'Boolean');
      }
      if (data.hasOwnProperty('merchant_id')) {
        obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
      }
      if (data.hasOwnProperty('preview_text')) {
        obj['preview_text'] = ApiClient.convertToType(data['preview_text'], 'String');
      }
      if (data.hasOwnProperty('smart_sending')) {
        obj['smart_sending'] = ApiClient.convertToType(data['smart_sending'], 'Boolean');
      }
      if (data.hasOwnProperty('storefront_oid')) {
        obj['storefront_oid'] = ApiClient.convertToType(data['storefront_oid'], 'Number');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('transactional_email')) {
        obj['transactional_email'] = ApiClient.convertToType(data['transactional_email'], 'Boolean');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Deleted
   * @member {Boolean} deleted
   */
  exports.prototype['deleted'] = undefined;
  /**
   * Edited by user
   * @member {String} edited_by_user
   */
  exports.prototype['edited_by_user'] = undefined;
  /**
   * Email communication sequence email uuid
   * @member {String} email_communication_sequence_email_uuid
   */
  exports.prototype['email_communication_sequence_email_uuid'] = undefined;
  /**
   * Email container cjson
   * @member {String} email_container_cjson
   */
  exports.prototype['email_container_cjson'] = undefined;
  /**
   * Timestamp the last time the container was modified.
   * @member {String} email_container_cjson_last_modified_dts
   */
  exports.prototype['email_container_cjson_last_modified_dts'] = undefined;
  /**
   * Email template virtual path
   * @member {String} email_template_vm_path
   */
  exports.prototype['email_template_vm_path'] = undefined;
  /**
   * Filter profile equation json
   * @member {String} filter_profile_equation_json
   */
  exports.prototype['filter_profile_equation_json'] = undefined;
  /**
   * Individually render
   * @member {Boolean} individually_render
   */
  exports.prototype['individually_render'] = undefined;
  /**
   * Merchant ID
   * @member {String} merchant_id
   */
  exports.prototype['merchant_id'] = undefined;
  /**
   * Preview text
   * @member {String} preview_text
   */
  exports.prototype['preview_text'] = undefined;
  /**
   * Smart sending
   * @member {Boolean} smart_sending
   */
  exports.prototype['smart_sending'] = undefined;
  /**
   * Storefront oid
   * @member {Number} storefront_oid
   */
  exports.prototype['storefront_oid'] = undefined;
  /**
   * Subject
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * Transactional email
   * @member {Boolean} transactional_email
   */
  exports.prototype['transactional_email'] = undefined;
  /**
   * Version
   * @member {Number} version
   */
  exports.prototype['version'] = undefined;



  return exports;
}));


