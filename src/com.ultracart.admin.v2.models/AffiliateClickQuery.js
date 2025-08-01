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

/**
 * The AffiliateClickQuery model module.
 * @module com.ultracart.admin.v2.models/AffiliateClickQuery
 * @version 4.1.16
 */
class AffiliateClickQuery {
    /**
     * Constructs a new <code>AffiliateClickQuery</code>.
     * @alias module:com.ultracart.admin.v2.models/AffiliateClickQuery
     */
    constructor() { 
        
        AffiliateClickQuery.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AffiliateClickQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AffiliateClickQuery} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AffiliateClickQuery} The populated <code>AffiliateClickQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AffiliateClickQuery();

            if (data.hasOwnProperty('affiliate_link_oid')) {
                obj['affiliate_link_oid'] = ApiClient.convertToType(data['affiliate_link_oid'], 'Number');
            }
            if (data.hasOwnProperty('affiliate_oid')) {
                obj['affiliate_oid'] = ApiClient.convertToType(data['affiliate_oid'], 'Number');
            }
            if (data.hasOwnProperty('click_dts_begin')) {
                obj['click_dts_begin'] = ApiClient.convertToType(data['click_dts_begin'], 'String');
            }
            if (data.hasOwnProperty('click_dts_end')) {
                obj['click_dts_end'] = ApiClient.convertToType(data['click_dts_end'], 'String');
            }
            if (data.hasOwnProperty('ip_address')) {
                obj['ip_address'] = ApiClient.convertToType(data['ip_address'], 'String');
            }
            if (data.hasOwnProperty('sub_id')) {
                obj['sub_id'] = ApiClient.convertToType(data['sub_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Unique object identifier for for the link that this click is associated with
 * @member {Number} affiliate_link_oid
 */
AffiliateClickQuery.prototype['affiliate_link_oid'] = undefined;

/**
 * Affiliate ID associated with the click
 * @member {Number} affiliate_oid
 */
AffiliateClickQuery.prototype['affiliate_oid'] = undefined;

/**
 * Minimum click date/time to return
 * @member {String} click_dts_begin
 */
AffiliateClickQuery.prototype['click_dts_begin'] = undefined;

/**
 * Maximum click date/time to return
 * @member {String} click_dts_end
 */
AffiliateClickQuery.prototype['click_dts_end'] = undefined;

/**
 * IP address that generated the click
 * @member {String} ip_address
 */
AffiliateClickQuery.prototype['ip_address'] = undefined;

/**
 * Sub ID value passed on the click
 * @member {String} sub_id
 */
AffiliateClickQuery.prototype['sub_id'] = undefined;






export default AffiliateClickQuery;

