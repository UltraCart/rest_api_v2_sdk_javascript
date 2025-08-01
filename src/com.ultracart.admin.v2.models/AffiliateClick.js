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
import AffiliateLink from './AffiliateLink';

/**
 * The AffiliateClick model module.
 * @module com.ultracart.admin.v2.models/AffiliateClick
 * @version 4.1.16
 */
class AffiliateClick {
    /**
     * Constructs a new <code>AffiliateClick</code>.
     * @alias module:com.ultracart.admin.v2.models/AffiliateClick
     */
    constructor() { 
        
        AffiliateClick.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AffiliateClick</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AffiliateClick} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AffiliateClick} The populated <code>AffiliateClick</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AffiliateClick();

            if (data.hasOwnProperty('affiliate_click_oid')) {
                obj['affiliate_click_oid'] = ApiClient.convertToType(data['affiliate_click_oid'], 'Number');
            }
            if (data.hasOwnProperty('affiliate_link_oid')) {
                obj['affiliate_link_oid'] = ApiClient.convertToType(data['affiliate_link_oid'], 'Number');
            }
            if (data.hasOwnProperty('affiliate_oid')) {
                obj['affiliate_oid'] = ApiClient.convertToType(data['affiliate_oid'], 'Number');
            }
            if (data.hasOwnProperty('click_dts')) {
                obj['click_dts'] = ApiClient.convertToType(data['click_dts'], 'String');
            }
            if (data.hasOwnProperty('ip_address')) {
                obj['ip_address'] = ApiClient.convertToType(data['ip_address'], 'String');
            }
            if (data.hasOwnProperty('landing_page')) {
                obj['landing_page'] = ApiClient.convertToType(data['landing_page'], 'String');
            }
            if (data.hasOwnProperty('landing_page_query_string')) {
                obj['landing_page_query_string'] = ApiClient.convertToType(data['landing_page_query_string'], 'String');
            }
            if (data.hasOwnProperty('link')) {
                obj['link'] = AffiliateLink.constructFromObject(data['link']);
            }
            if (data.hasOwnProperty('referrer')) {
                obj['referrer'] = ApiClient.convertToType(data['referrer'], 'String');
            }
            if (data.hasOwnProperty('referrer_query_string')) {
                obj['referrer_query_string'] = ApiClient.convertToType(data['referrer_query_string'], 'String');
            }
            if (data.hasOwnProperty('screen_recording_uuid')) {
                obj['screen_recording_uuid'] = ApiClient.convertToType(data['screen_recording_uuid'], 'String');
            }
            if (data.hasOwnProperty('sub_id')) {
                obj['sub_id'] = ApiClient.convertToType(data['sub_id'], 'String');
            }
            if (data.hasOwnProperty('ucacid')) {
                obj['ucacid'] = ApiClient.convertToType(data['ucacid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Unique object identifier for this click
 * @member {Number} affiliate_click_oid
 */
AffiliateClick.prototype['affiliate_click_oid'] = undefined;

/**
 * Unique object identifier for for the link that this click is associated with
 * @member {Number} affiliate_link_oid
 */
AffiliateClick.prototype['affiliate_link_oid'] = undefined;

/**
 * Affiliate object ID associated with this click
 * @member {Number} affiliate_oid
 */
AffiliateClick.prototype['affiliate_oid'] = undefined;

/**
 * Date/time that the click was made
 * @member {String} click_dts
 */
AffiliateClick.prototype['click_dts'] = undefined;

/**
 * IP address that generated the click
 * @member {String} ip_address
 */
AffiliateClick.prototype['ip_address'] = undefined;

/**
 * URL of the landing page the customer was sent to.
 * @member {String} landing_page
 */
AffiliateClick.prototype['landing_page'] = undefined;

/**
 * Query string on the landing page URL the customer was sent to.
 * @member {String} landing_page_query_string
 */
AffiliateClick.prototype['landing_page_query_string'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/AffiliateLink} link
 */
AffiliateClick.prototype['link'] = undefined;

/**
 * URL that referred the click (Browser Header Referer)
 * @member {String} referrer
 */
AffiliateClick.prototype['referrer'] = undefined;

/**
 * Query string that was on the referrer URL.
 * @member {String} referrer_query_string
 */
AffiliateClick.prototype['referrer_query_string'] = undefined;

/**
 * Screen recording UUID
 * @member {String} screen_recording_uuid
 */
AffiliateClick.prototype['screen_recording_uuid'] = undefined;

/**
 * Sub ID value passed on the click
 * @member {String} sub_id
 */
AffiliateClick.prototype['sub_id'] = undefined;

/**
 * UC Analytics Identifier
 * @member {String} ucacid
 */
AffiliateClick.prototype['ucacid'] = undefined;






export default AffiliateClick;

