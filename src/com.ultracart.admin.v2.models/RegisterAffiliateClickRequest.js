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
 * The RegisterAffiliateClickRequest model module.
 * @module com.ultracart.admin.v2.models/RegisterAffiliateClickRequest
 * @version 4.0.90-RC
 */
class RegisterAffiliateClickRequest {
    /**
     * Constructs a new <code>RegisterAffiliateClickRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/RegisterAffiliateClickRequest
     */
    constructor() { 
        
        RegisterAffiliateClickRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RegisterAffiliateClickRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/RegisterAffiliateClickRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/RegisterAffiliateClickRequest} The populated <code>RegisterAffiliateClickRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RegisterAffiliateClickRequest();

            if (data.hasOwnProperty('affid')) {
                obj['affid'] = ApiClient.convertToType(data['affid'], 'Number');
            }
            if (data.hasOwnProperty('ip_address')) {
                obj['ip_address'] = ApiClient.convertToType(data['ip_address'], 'String');
            }
            if (data.hasOwnProperty('landing_page_url')) {
                obj['landing_page_url'] = ApiClient.convertToType(data['landing_page_url'], 'String');
            }
            if (data.hasOwnProperty('referrer_url')) {
                obj['referrer_url'] = ApiClient.convertToType(data['referrer_url'], 'String');
            }
            if (data.hasOwnProperty('subid')) {
                obj['subid'] = ApiClient.convertToType(data['subid'], 'String');
            }
            if (data.hasOwnProperty('user_agent')) {
                obj['user_agent'] = ApiClient.convertToType(data['user_agent'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Affiliate Id (must be specified if landing_page_url is not)
 * @member {Number} affid
 */
RegisterAffiliateClickRequest.prototype['affid'] = undefined;

/**
 * IP Address (must be specified for non-browser key authenticated)
 * @member {String} ip_address
 */
RegisterAffiliateClickRequest.prototype['ip_address'] = undefined;

/**
 * Landing Page URL
 * @member {String} landing_page_url
 */
RegisterAffiliateClickRequest.prototype['landing_page_url'] = undefined;

/**
 * Referrer URL (used for detecting invisible linking)
 * @member {String} referrer_url
 */
RegisterAffiliateClickRequest.prototype['referrer_url'] = undefined;

/**
 * Sub Id (optional value if affid is specified.
 * @member {String} subid
 */
RegisterAffiliateClickRequest.prototype['subid'] = undefined;

/**
 * User agent of the browser (must be specified for non-browser key authenticated)
 * @member {String} user_agent
 */
RegisterAffiliateClickRequest.prototype['user_agent'] = undefined;






export default RegisterAffiliateClickRequest;

