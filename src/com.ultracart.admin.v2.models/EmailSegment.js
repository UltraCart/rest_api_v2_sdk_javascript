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
    root.UltraCartRestApiV2.EmailSegment = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.EmailListSegmentUsedBy);
  }
}(this, function(ApiClient, EmailListSegmentUsedBy) {
  'use strict';

  /**
   * The EmailSegment model module.
   * @module com.ultracart.admin.v2.models/EmailSegment
   * @version 3.10.195
   */

  /**
   * Constructs a new <code>EmailSegment</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailSegment
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EmailSegment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailSegment} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailSegment} The populated <code>EmailSegment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('allow_csv_download'))
        obj.allow_csv_download = ApiClient.convertToType(data['allow_csv_download'], 'Boolean');
      if (data.hasOwnProperty('allow_facebook_audiences'))
        obj.allow_facebook_audiences = ApiClient.convertToType(data['allow_facebook_audiences'], 'Boolean');
      if (data.hasOwnProperty('created_dts'))
        obj.created_dts = ApiClient.convertToType(data['created_dts'], 'String');
      if (data.hasOwnProperty('deleted'))
        obj.deleted = ApiClient.convertToType(data['deleted'], 'Boolean');
      if (data.hasOwnProperty('email_segment_uuid'))
        obj.email_segment_uuid = ApiClient.convertToType(data['email_segment_uuid'], 'String');
      if (data.hasOwnProperty('esp_list_segment_folder_uuid'))
        obj.esp_list_segment_folder_uuid = ApiClient.convertToType(data['esp_list_segment_folder_uuid'], 'String');
      if (data.hasOwnProperty('facebook_custom_audience'))
        obj.facebook_custom_audience = ApiClient.convertToType(data['facebook_custom_audience'], 'Boolean');
      if (data.hasOwnProperty('filter_profile_equation_json'))
        obj.filter_profile_equation_json = ApiClient.convertToType(data['filter_profile_equation_json'], 'String');
      if (data.hasOwnProperty('member_count'))
        obj.member_count = ApiClient.convertToType(data['member_count'], 'Number');
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('rank_json'))
        obj.rank_json = ApiClient.convertToType(data['rank_json'], 'String');
      if (data.hasOwnProperty('rebuild_percentage'))
        obj.rebuild_percentage = ApiClient.convertToType(data['rebuild_percentage'], 'Number');
      if (data.hasOwnProperty('rebuild_required'))
        obj.rebuild_required = ApiClient.convertToType(data['rebuild_required'], 'Boolean');
      if (data.hasOwnProperty('storefront_oid'))
        obj.storefront_oid = ApiClient.convertToType(data['storefront_oid'], 'Number');
      if (data.hasOwnProperty('thirdparty_join_add_tags'))
        obj.thirdparty_join_add_tags = ApiClient.convertToType(data['thirdparty_join_add_tags'], ['String']);
      if (data.hasOwnProperty('thirdparty_join_remove_tags'))
        obj.thirdparty_join_remove_tags = ApiClient.convertToType(data['thirdparty_join_remove_tags'], ['String']);
      if (data.hasOwnProperty('thirdparty_leave_add_tags'))
        obj.thirdparty_leave_add_tags = ApiClient.convertToType(data['thirdparty_leave_add_tags'], ['String']);
      if (data.hasOwnProperty('thirdparty_leave_remove_tags'))
        obj.thirdparty_leave_remove_tags = ApiClient.convertToType(data['thirdparty_leave_remove_tags'], ['String']);
      if (data.hasOwnProperty('thirdparty_list_id'))
        obj.thirdparty_list_id = ApiClient.convertToType(data['thirdparty_list_id'], 'String');
      if (data.hasOwnProperty('thirdparty_provider_name'))
        obj.thirdparty_provider_name = ApiClient.convertToType(data['thirdparty_provider_name'], 'String');
      if (data.hasOwnProperty('used_by'))
        obj.used_by = ApiClient.convertToType(data['used_by'], [EmailListSegmentUsedBy]);
    }
    return obj;
  }

  /**
   * True if the current user has the rights to download this segment.
   * @member {Boolean} allow_csv_download
   */
  exports.prototype.allow_csv_download = undefined;

  /**
   * True if this StoreFront has the Facebook Analytics app connected and supports them
   * @member {Boolean} allow_facebook_audiences
   */
  exports.prototype.allow_facebook_audiences = undefined;

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
   * Email segment UUID
   * @member {String} email_segment_uuid
   */
  exports.prototype.email_segment_uuid = undefined;

  /**
   * List/Segment folder UUID
   * @member {String} esp_list_segment_folder_uuid
   */
  exports.prototype.esp_list_segment_folder_uuid = undefined;

  /**
   * True if you want to sync to a facebook custom audience
   * @member {Boolean} facebook_custom_audience
   */
  exports.prototype.facebook_custom_audience = undefined;

  /**
   * File profile equation json
   * @member {String} filter_profile_equation_json
   */
  exports.prototype.filter_profile_equation_json = undefined;

  /**
   * Count of members in this segment
   * @member {Number} member_count
   */
  exports.prototype.member_count = undefined;

  /**
   * Merchant ID
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * Name of email segment
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Rank settings json
   * @member {String} rank_json
   */
  exports.prototype.rank_json = undefined;

  /**
   * Percentage of completion for a rebuild.  The value range will be 0-1.  Multiply by 100 to format for display.
   * @member {Number} rebuild_percentage
   */
  exports.prototype.rebuild_percentage = undefined;

  /**
   * True if a rebuild is required because some part of the segment has changed
   * @member {Boolean} rebuild_required
   */
  exports.prototype.rebuild_required = undefined;

  /**
   * Storefront oid
   * @member {Number} storefront_oid
   */
  exports.prototype.storefront_oid = undefined;

  /**
   * Third party provider tags to add when a customer joins the segment.
   * @member {Array.<String>} thirdparty_join_add_tags
   */
  exports.prototype.thirdparty_join_add_tags = undefined;

  /**
   * Third party provider tags to remove when a customer joins the segment.
   * @member {Array.<String>} thirdparty_join_remove_tags
   */
  exports.prototype.thirdparty_join_remove_tags = undefined;

  /**
   * Third party provider tags to add when a customer leaves the segment.
   * @member {Array.<String>} thirdparty_leave_add_tags
   */
  exports.prototype.thirdparty_leave_add_tags = undefined;

  /**
   * Third party provider tags to remove when a customer leaves the segment.
   * @member {Array.<String>} thirdparty_leave_remove_tags
   */
  exports.prototype.thirdparty_leave_remove_tags = undefined;

  /**
   * List id of third party provider to sync with.
   * @member {String} thirdparty_list_id
   */
  exports.prototype.thirdparty_list_id = undefined;

  /**
   * Name of third party provider to sync segment to a list with.
   * @member {String} thirdparty_provider_name
   */
  exports.prototype.thirdparty_provider_name = undefined;

  /**
   * Details on the flows or campaigns that use this list.
   * @member {Array.<module:com.ultracart.admin.v2.models/EmailListSegmentUsedBy>} used_by
   */
  exports.prototype.used_by = undefined;

  return exports;

}));
