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
    root.UltraCartRestApiV2.EmailTemplate = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EmailTemplate model module.
   * @module com.ultracart.admin.v2.models/EmailTemplate
   * @version 2.4.118
   */

  /**
   * Constructs a new <code>EmailTemplate</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailTemplate
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>EmailTemplate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailTemplate} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailTemplate} The populated <code>EmailTemplate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('container_cjson')) {
        obj['container_cjson'] = ApiClient.convertToType(data['container_cjson'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('email_template_oid')) {
        obj['email_template_oid'] = ApiClient.convertToType(data['email_template_oid'], 'Number');
      }
      if (data.hasOwnProperty('email_template_vm_path')) {
        obj['email_template_vm_path'] = ApiClient.convertToType(data['email_template_vm_path'], 'String');
      }
      if (data.hasOwnProperty('merchant_id')) {
        obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('preview_amazon_listing_key')) {
        obj['preview_amazon_listing_key'] = ApiClient.convertToType(data['preview_amazon_listing_key'], 'String');
      }
      if (data.hasOwnProperty('sort_order')) {
        obj['sort_order'] = ApiClient.convertToType(data['sort_order'], 'Number');
      }
      if (data.hasOwnProperty('storefront_oid')) {
        obj['storefront_oid'] = ApiClient.convertToType(data['storefront_oid'], 'Number');
      }
      if (data.hasOwnProperty('system')) {
        obj['system'] = ApiClient.convertToType(data['system'], 'Boolean');
      }
      if (data.hasOwnProperty('trigger_type')) {
        obj['trigger_type'] = ApiClient.convertToType(data['trigger_type'], 'String');
      }
    }
    return obj;
  }

  /**
   * Container cjson
   * @member {String} container_cjson
   */
  exports.prototype['container_cjson'] = undefined;
  /**
   * Description of email template
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Email template oid
   * @member {Number} email_template_oid
   */
  exports.prototype['email_template_oid'] = undefined;
  /**
   * Email Template VM Path
   * @member {String} email_template_vm_path
   */
  exports.prototype['email_template_vm_path'] = undefined;
  /**
   * Merchant ID
   * @member {String} merchant_id
   */
  exports.prototype['merchant_id'] = undefined;
  /**
   * Name of email template
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Amazon key for preview png image
   * @member {String} preview_amazon_listing_key
   */
  exports.prototype['preview_amazon_listing_key'] = undefined;
  /**
   * Sort order (optional)
   * @member {Number} sort_order
   */
  exports.prototype['sort_order'] = undefined;
  /**
   * StoreFront oid
   * @member {Number} storefront_oid
   */
  exports.prototype['storefront_oid'] = undefined;
  /**
   * True if this email template is system-wide,false if merchant specific
   * @member {Boolean} system
   */
  exports.prototype['system'] = undefined;
  /**
   * Trigger type
   * @member {String} trigger_type
   */
  exports.prototype['trigger_type'] = undefined;



  return exports;
}));


