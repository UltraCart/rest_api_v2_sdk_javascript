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
 * The EmailTemplate model module.
 * @module com.ultracart.admin.v2.models/EmailTemplate
 * @version 4.0.105-RC
 */
class EmailTemplate {
    /**
     * Constructs a new <code>EmailTemplate</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailTemplate
     */
    constructor() { 
        
        EmailTemplate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailTemplate} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailTemplate} The populated <code>EmailTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailTemplate();

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


}

/**
 * Container cjson
 * @member {String} container_cjson
 */
EmailTemplate.prototype['container_cjson'] = undefined;

/**
 * Description of email template
 * @member {String} description
 */
EmailTemplate.prototype['description'] = undefined;

/**
 * Email template oid
 * @member {Number} email_template_oid
 */
EmailTemplate.prototype['email_template_oid'] = undefined;

/**
 * Email Template VM Path
 * @member {String} email_template_vm_path
 */
EmailTemplate.prototype['email_template_vm_path'] = undefined;

/**
 * Merchant ID
 * @member {String} merchant_id
 */
EmailTemplate.prototype['merchant_id'] = undefined;

/**
 * Name of email template
 * @member {String} name
 */
EmailTemplate.prototype['name'] = undefined;

/**
 * Amazon key for preview png image
 * @member {String} preview_amazon_listing_key
 */
EmailTemplate.prototype['preview_amazon_listing_key'] = undefined;

/**
 * Sort order (optional)
 * @member {Number} sort_order
 */
EmailTemplate.prototype['sort_order'] = undefined;

/**
 * StoreFront oid
 * @member {Number} storefront_oid
 */
EmailTemplate.prototype['storefront_oid'] = undefined;

/**
 * True if this email template is system-wide,false if merchant specific
 * @member {Boolean} system
 */
EmailTemplate.prototype['system'] = undefined;

/**
 * Trigger type
 * @member {String} trigger_type
 */
EmailTemplate.prototype['trigger_type'] = undefined;






export default EmailTemplate;

