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
    define(['ApiClient', 'com.ultracart.admin.v2.models/EmailListSegmentUsedBy'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EmailListSegmentUsedBy'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.EmailList = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.EmailListSegmentUsedBy);
  }
}(this, function(ApiClient, EmailListSegmentUsedBy) {
  'use strict';

  /**
   * The EmailList model module.
   * @module com.ultracart.admin.v2.models/EmailList
   * @version 3.10.133
   */

  /**
   * Constructs a new <code>EmailList</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailList
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EmailList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailList} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailList} The populated <code>EmailList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('allow_csv_download'))
        obj.allow_csv_download = ApiClient.convertToType(data['allow_csv_download'], 'Boolean');
      if (data.hasOwnProperty('created_dts'))
        obj.created_dts = ApiClient.convertToType(data['created_dts'], 'String');
      if (data.hasOwnProperty('deleted'))
        obj.deleted = ApiClient.convertToType(data['deleted'], 'Boolean');
      if (data.hasOwnProperty('email_list_uuid'))
        obj.email_list_uuid = ApiClient.convertToType(data['email_list_uuid'], 'String');
      if (data.hasOwnProperty('esp_list_segment_folder_uuid'))
        obj.esp_list_segment_folder_uuid = ApiClient.convertToType(data['esp_list_segment_folder_uuid'], 'String');
      if (data.hasOwnProperty('member_count'))
        obj.member_count = ApiClient.convertToType(data['member_count'], 'Number');
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('public_description'))
        obj.public_description = ApiClient.convertToType(data['public_description'], 'String');
      if (data.hasOwnProperty('public_list'))
        obj.public_list = ApiClient.convertToType(data['public_list'], 'Boolean');
      if (data.hasOwnProperty('storefront_oid'))
        obj.storefront_oid = ApiClient.convertToType(data['storefront_oid'], 'Number');
      if (data.hasOwnProperty('used_by'))
        obj.used_by = ApiClient.convertToType(data['used_by'], [EmailListSegmentUsedBy]);
    }
    return obj;
  }

  /**
   * True if the current user has the rights to download this list.
   * @member {Boolean} allow_csv_download
   */
  exports.prototype.allow_csv_download = undefined;

  /**
   * Created date
   * @member {String} created_dts
   */
  exports.prototype.created_dts = undefined;

  /**
   * True if this campaign was deleted
   * @member {Boolean} deleted
   */
  exports.prototype.deleted = undefined;

  /**
   * Email list UUID
   * @member {String} email_list_uuid
   */
  exports.prototype.email_list_uuid = undefined;

  /**
   * List/Segment folder UUID
   * @member {String} esp_list_segment_folder_uuid
   */
  exports.prototype.esp_list_segment_folder_uuid = undefined;

  /**
   * Count of members in this list
   * @member {Number} member_count
   */
  exports.prototype.member_count = undefined;

  /**
   * Merchant ID
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * Name of email list
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Description of list shown to customer.
   * @member {String} public_description
   */
  exports.prototype.public_description = undefined;

  /**
   * True if this list is public
   * @member {Boolean} public_list
   */
  exports.prototype.public_list = undefined;

  /**
   * Storefront oid
   * @member {Number} storefront_oid
   */
  exports.prototype.storefront_oid = undefined;

  /**
   * Details on the flows or campaigns that use this list.
   * @member {Array.<module:com.ultracart.admin.v2.models/EmailListSegmentUsedBy>} used_by
   */
  exports.prototype.used_by = undefined;

  return exports;

}));
