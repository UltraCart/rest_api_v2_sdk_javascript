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
 * The AffiliateLink model module.
 * @module com.ultracart.admin.v2.models/AffiliateLink
 * @version 4.0.109-RC
 */
class AffiliateLink {
    /**
     * Constructs a new <code>AffiliateLink</code>.
     * @alias module:com.ultracart.admin.v2.models/AffiliateLink
     */
    constructor() { 
        
        AffiliateLink.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AffiliateLink</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AffiliateLink} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AffiliateLink} The populated <code>AffiliateLink</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AffiliateLink();

            if (data.hasOwnProperty('affiliate_link_oid')) {
                obj['affiliate_link_oid'] = ApiClient.convertToType(data['affiliate_link_oid'], 'Number');
            }
            if (data.hasOwnProperty('affiliate_managed_link_oid')) {
                obj['affiliate_managed_link_oid'] = ApiClient.convertToType(data['affiliate_managed_link_oid'], 'Number');
            }
            if (data.hasOwnProperty('affiliate_oid')) {
                obj['affiliate_oid'] = ApiClient.convertToType(data['affiliate_oid'], 'Number');
            }
            if (data.hasOwnProperty('affiliate_program_item_oid')) {
                obj['affiliate_program_item_oid'] = ApiClient.convertToType(data['affiliate_program_item_oid'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('creative_oid')) {
                obj['creative_oid'] = ApiClient.convertToType(data['creative_oid'], 'Number');
            }
            if (data.hasOwnProperty('custom_html')) {
                obj['custom_html'] = ApiClient.convertToType(data['custom_html'], 'String');
            }
            if (data.hasOwnProperty('custom_html_approval_status')) {
                obj['custom_html_approval_status'] = ApiClient.convertToType(data['custom_html_approval_status'], 'String');
            }
            if (data.hasOwnProperty('custom_landing_url')) {
                obj['custom_landing_url'] = ApiClient.convertToType(data['custom_landing_url'], 'String');
            }
            if (data.hasOwnProperty('deleted')) {
                obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
            }
            if (data.hasOwnProperty('invisible_link_approval_status')) {
                obj['invisible_link_approval_status'] = ApiClient.convertToType(data['invisible_link_approval_status'], 'String');
            }
            if (data.hasOwnProperty('invisible_link_url_prefix')) {
                obj['invisible_link_url_prefix'] = ApiClient.convertToType(data['invisible_link_url_prefix'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Unique object identifier associated with this link
 * @member {Number} affiliate_link_oid
 */
AffiliateLink.prototype['affiliate_link_oid'] = undefined;

/**
 * Managed link OID that this link object was generated from
 * @member {Number} affiliate_managed_link_oid
 */
AffiliateLink.prototype['affiliate_managed_link_oid'] = undefined;

/**
 * Affiliate object ID associated with this link
 * @member {Number} affiliate_oid
 */
AffiliateLink.prototype['affiliate_oid'] = undefined;

/**
 * The affiliate program item this managed link is associated with
 * @member {Number} affiliate_program_item_oid
 */
AffiliateLink.prototype['affiliate_program_item_oid'] = undefined;

/**
 * Code associated with the link
 * @member {String} code
 */
AffiliateLink.prototype['code'] = undefined;

/**
 * Creative (image or text) associated with this link
 * @member {Number} creative_oid
 */
AffiliateLink.prototype['creative_oid'] = undefined;

/**
 * Custom HTML associated with this link
 * @member {String} custom_html
 */
AffiliateLink.prototype['custom_html'] = undefined;

/**
 * Approved status of the custom html
 * @member {module:com.ultracart.admin.v2.models/AffiliateLink.CustomHtmlApprovalStatusEnum} custom_html_approval_status
 */
AffiliateLink.prototype['custom_html_approval_status'] = undefined;

/**
 * Custom landing page URL if configured
 * @member {String} custom_landing_url
 */
AffiliateLink.prototype['custom_landing_url'] = undefined;

/**
 * True if the link has been deleted
 * @member {Boolean} deleted
 */
AffiliateLink.prototype['deleted'] = undefined;

/**
 * Invisible link approval status
 * @member {module:com.ultracart.admin.v2.models/AffiliateLink.InvisibleLinkApprovalStatusEnum} invisible_link_approval_status
 */
AffiliateLink.prototype['invisible_link_approval_status'] = undefined;

/**
 * Invisible link URL prefix
 * @member {String} invisible_link_url_prefix
 */
AffiliateLink.prototype['invisible_link_url_prefix'] = undefined;

/**
 * Name of the link
 * @member {String} name
 */
AffiliateLink.prototype['name'] = undefined;

/**
 * Type of link
 * @member {module:com.ultracart.admin.v2.models/AffiliateLink.TypeEnum} type
 */
AffiliateLink.prototype['type'] = undefined;





/**
 * Allowed values for the <code>custom_html_approval_status</code> property.
 * @enum {String}
 * @readonly
 */
AffiliateLink['CustomHtmlApprovalStatusEnum'] = {

    /**
     * value: "Pending"
     * @const
     */
    "Pending": "Pending",

    /**
     * value: "Approved"
     * @const
     */
    "Approved": "Approved",

    /**
     * value: "Rejected"
     * @const
     */
    "Rejected": "Rejected"
};


/**
 * Allowed values for the <code>invisible_link_approval_status</code> property.
 * @enum {String}
 * @readonly
 */
AffiliateLink['InvisibleLinkApprovalStatusEnum'] = {

    /**
     * value: "Pending"
     * @const
     */
    "Pending": "Pending",

    /**
     * value: "Approved"
     * @const
     */
    "Approved": "Approved",

    /**
     * value: "Rejected"
     * @const
     */
    "Rejected": "Rejected"
};


/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
AffiliateLink['TypeEnum'] = {

    /**
     * value: "image"
     * @const
     */
    "image": "image",

    /**
     * value: "text"
     * @const
     */
    "text": "text",

    /**
     * value: "invisible"
     * @const
     */
    "invisible": "invisible",

    /**
     * value: "direct"
     * @const
     */
    "direct": "direct"
};



export default AffiliateLink;

