/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EmailListSegmentUsedBy from './EmailListSegmentUsedBy';

/**
 * The EmailSegment model module.
 * @module com.ultracart.admin.v2.models/EmailSegment
 * @version 4.0.244
 */
class EmailSegment {
    /**
     * Constructs a new <code>EmailSegment</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailSegment
     */
    constructor() { 
        
        EmailSegment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailSegment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailSegment} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailSegment} The populated <code>EmailSegment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailSegment();

            if (data.hasOwnProperty('allow_csv_download')) {
                obj['allow_csv_download'] = ApiClient.convertToType(data['allow_csv_download'], 'Boolean');
            }
            if (data.hasOwnProperty('allow_facebook_audiences')) {
                obj['allow_facebook_audiences'] = ApiClient.convertToType(data['allow_facebook_audiences'], 'Boolean');
            }
            if (data.hasOwnProperty('created_dts')) {
                obj['created_dts'] = ApiClient.convertToType(data['created_dts'], 'String');
            }
            if (data.hasOwnProperty('deleted')) {
                obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
            }
            if (data.hasOwnProperty('email_segment_uuid')) {
                obj['email_segment_uuid'] = ApiClient.convertToType(data['email_segment_uuid'], 'String');
            }
            if (data.hasOwnProperty('esp_list_segment_folder_uuid')) {
                obj['esp_list_segment_folder_uuid'] = ApiClient.convertToType(data['esp_list_segment_folder_uuid'], 'String');
            }
            if (data.hasOwnProperty('facebook_custom_audience')) {
                obj['facebook_custom_audience'] = ApiClient.convertToType(data['facebook_custom_audience'], 'Boolean');
            }
            if (data.hasOwnProperty('filter_profile_equation_json')) {
                obj['filter_profile_equation_json'] = ApiClient.convertToType(data['filter_profile_equation_json'], 'String');
            }
            if (data.hasOwnProperty('member_count')) {
                obj['member_count'] = ApiClient.convertToType(data['member_count'], 'Number');
            }
            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('rank_json')) {
                obj['rank_json'] = ApiClient.convertToType(data['rank_json'], 'String');
            }
            if (data.hasOwnProperty('rebuild_percentage')) {
                obj['rebuild_percentage'] = ApiClient.convertToType(data['rebuild_percentage'], 'Number');
            }
            if (data.hasOwnProperty('rebuild_required')) {
                obj['rebuild_required'] = ApiClient.convertToType(data['rebuild_required'], 'Boolean');
            }
            if (data.hasOwnProperty('storefront_oid')) {
                obj['storefront_oid'] = ApiClient.convertToType(data['storefront_oid'], 'Number');
            }
            if (data.hasOwnProperty('thirdparty_join_add_tags')) {
                obj['thirdparty_join_add_tags'] = ApiClient.convertToType(data['thirdparty_join_add_tags'], ['String']);
            }
            if (data.hasOwnProperty('thirdparty_join_remove_tags')) {
                obj['thirdparty_join_remove_tags'] = ApiClient.convertToType(data['thirdparty_join_remove_tags'], ['String']);
            }
            if (data.hasOwnProperty('thirdparty_leave_add_tags')) {
                obj['thirdparty_leave_add_tags'] = ApiClient.convertToType(data['thirdparty_leave_add_tags'], ['String']);
            }
            if (data.hasOwnProperty('thirdparty_leave_remove_tags')) {
                obj['thirdparty_leave_remove_tags'] = ApiClient.convertToType(data['thirdparty_leave_remove_tags'], ['String']);
            }
            if (data.hasOwnProperty('thirdparty_list_id')) {
                obj['thirdparty_list_id'] = ApiClient.convertToType(data['thirdparty_list_id'], 'String');
            }
            if (data.hasOwnProperty('thirdparty_provider_name')) {
                obj['thirdparty_provider_name'] = ApiClient.convertToType(data['thirdparty_provider_name'], 'String');
            }
            if (data.hasOwnProperty('used_by')) {
                obj['used_by'] = ApiClient.convertToType(data['used_by'], [EmailListSegmentUsedBy]);
            }
        }
        return obj;
    }


}

/**
 * True if the current user has the rights to download this segment.
 * @member {Boolean} allow_csv_download
 */
EmailSegment.prototype['allow_csv_download'] = undefined;

/**
 * True if this StoreFront has the Facebook Analytics app connected and supports them
 * @member {Boolean} allow_facebook_audiences
 */
EmailSegment.prototype['allow_facebook_audiences'] = undefined;

/**
 * Created date
 * @member {String} created_dts
 */
EmailSegment.prototype['created_dts'] = undefined;

/**
 * True if this campaign was deleted
 * @member {Boolean} deleted
 */
EmailSegment.prototype['deleted'] = undefined;

/**
 * Email segment UUID
 * @member {String} email_segment_uuid
 */
EmailSegment.prototype['email_segment_uuid'] = undefined;

/**
 * List/Segment folder UUID
 * @member {String} esp_list_segment_folder_uuid
 */
EmailSegment.prototype['esp_list_segment_folder_uuid'] = undefined;

/**
 * True if you want to sync to a facebook custom audience
 * @member {Boolean} facebook_custom_audience
 */
EmailSegment.prototype['facebook_custom_audience'] = undefined;

/**
 * File profile equation json
 * @member {String} filter_profile_equation_json
 */
EmailSegment.prototype['filter_profile_equation_json'] = undefined;

/**
 * Count of members in this segment
 * @member {Number} member_count
 */
EmailSegment.prototype['member_count'] = undefined;

/**
 * Merchant ID
 * @member {String} merchant_id
 */
EmailSegment.prototype['merchant_id'] = undefined;

/**
 * Name of email segment
 * @member {String} name
 */
EmailSegment.prototype['name'] = undefined;

/**
 * Rank settings json
 * @member {String} rank_json
 */
EmailSegment.prototype['rank_json'] = undefined;

/**
 * Percentage of completion for a rebuild.  The value range will be 0-1.  Multiply by 100 to format for display.
 * @member {Number} rebuild_percentage
 */
EmailSegment.prototype['rebuild_percentage'] = undefined;

/**
 * True if a rebuild is required because some part of the segment has changed
 * @member {Boolean} rebuild_required
 */
EmailSegment.prototype['rebuild_required'] = undefined;

/**
 * Storefront oid
 * @member {Number} storefront_oid
 */
EmailSegment.prototype['storefront_oid'] = undefined;

/**
 * Third party provider tags to add when a customer joins the segment.
 * @member {Array.<String>} thirdparty_join_add_tags
 */
EmailSegment.prototype['thirdparty_join_add_tags'] = undefined;

/**
 * Third party provider tags to remove when a customer joins the segment.
 * @member {Array.<String>} thirdparty_join_remove_tags
 */
EmailSegment.prototype['thirdparty_join_remove_tags'] = undefined;

/**
 * Third party provider tags to add when a customer leaves the segment.
 * @member {Array.<String>} thirdparty_leave_add_tags
 */
EmailSegment.prototype['thirdparty_leave_add_tags'] = undefined;

/**
 * Third party provider tags to remove when a customer leaves the segment.
 * @member {Array.<String>} thirdparty_leave_remove_tags
 */
EmailSegment.prototype['thirdparty_leave_remove_tags'] = undefined;

/**
 * List id of third party provider to sync with.
 * @member {String} thirdparty_list_id
 */
EmailSegment.prototype['thirdparty_list_id'] = undefined;

/**
 * Name of third party provider to sync segment to a list with.
 * @member {String} thirdparty_provider_name
 */
EmailSegment.prototype['thirdparty_provider_name'] = undefined;

/**
 * Details on the flows or campaigns that use this list.
 * @member {Array.<module:com.ultracart.admin.v2.models/EmailListSegmentUsedBy>} used_by
 */
EmailSegment.prototype['used_by'] = undefined;






export default EmailSegment;

