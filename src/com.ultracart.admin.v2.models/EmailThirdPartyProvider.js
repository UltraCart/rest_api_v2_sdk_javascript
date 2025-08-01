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
import EmailThirdPartyList from './EmailThirdPartyList';
import EmailThirdPartyTag from './EmailThirdPartyTag';

/**
 * The EmailThirdPartyProvider model module.
 * @module com.ultracart.admin.v2.models/EmailThirdPartyProvider
 * @version 4.1.16
 */
class EmailThirdPartyProvider {
    /**
     * Constructs a new <code>EmailThirdPartyProvider</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailThirdPartyProvider
     */
    constructor() { 
        
        EmailThirdPartyProvider.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailThirdPartyProvider</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailThirdPartyProvider} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailThirdPartyProvider} The populated <code>EmailThirdPartyProvider</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailThirdPartyProvider();

            if (data.hasOwnProperty('connect_url')) {
                obj['connect_url'] = ApiClient.convertToType(data['connect_url'], 'String');
            }
            if (data.hasOwnProperty('list_count')) {
                obj['list_count'] = ApiClient.convertToType(data['list_count'], 'Number');
            }
            if (data.hasOwnProperty('lists')) {
                obj['lists'] = ApiClient.convertToType(data['lists'], [EmailThirdPartyList]);
            }
            if (data.hasOwnProperty('logo_url')) {
                obj['logo_url'] = ApiClient.convertToType(data['logo_url'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('supports_add_tags')) {
                obj['supports_add_tags'] = ApiClient.convertToType(data['supports_add_tags'], 'Boolean');
            }
            if (data.hasOwnProperty('supports_list_subscribe')) {
                obj['supports_list_subscribe'] = ApiClient.convertToType(data['supports_list_subscribe'], 'Boolean');
            }
            if (data.hasOwnProperty('supports_list_unsubscribe')) {
                obj['supports_list_unsubscribe'] = ApiClient.convertToType(data['supports_list_unsubscribe'], 'Boolean');
            }
            if (data.hasOwnProperty('supports_remove_tags')) {
                obj['supports_remove_tags'] = ApiClient.convertToType(data['supports_remove_tags'], 'Boolean');
            }
            if (data.hasOwnProperty('tag_count')) {
                obj['tag_count'] = ApiClient.convertToType(data['tag_count'], 'Number');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [EmailThirdPartyTag]);
            }
        }
        return obj;
    }


}

/**
 * URL to the settings screen to connect.  Null if the provider is already connected.
 * @member {String} connect_url
 */
EmailThirdPartyProvider.prototype['connect_url'] = undefined;

/**
 * list_count
 * @member {Number} list_count
 */
EmailThirdPartyProvider.prototype['list_count'] = undefined;

/**
 * lists
 * @member {Array.<module:com.ultracart.admin.v2.models/EmailThirdPartyList>} lists
 */
EmailThirdPartyProvider.prototype['lists'] = undefined;

/**
 * logo_url
 * @member {String} logo_url
 */
EmailThirdPartyProvider.prototype['logo_url'] = undefined;

/**
 * name
 * @member {String} name
 */
EmailThirdPartyProvider.prototype['name'] = undefined;

/**
 * True if this provider can support adding tags
 * @member {Boolean} supports_add_tags
 */
EmailThirdPartyProvider.prototype['supports_add_tags'] = undefined;

/**
 * True if this provider can support list subscribe
 * @member {Boolean} supports_list_subscribe
 */
EmailThirdPartyProvider.prototype['supports_list_subscribe'] = undefined;

/**
 * True if this provider can support list unsubscribe
 * @member {Boolean} supports_list_unsubscribe
 */
EmailThirdPartyProvider.prototype['supports_list_unsubscribe'] = undefined;

/**
 * True if this provider can support remove tags
 * @member {Boolean} supports_remove_tags
 */
EmailThirdPartyProvider.prototype['supports_remove_tags'] = undefined;

/**
 * tag_count
 * @member {Number} tag_count
 */
EmailThirdPartyProvider.prototype['tag_count'] = undefined;

/**
 * tags
 * @member {Array.<module:com.ultracart.admin.v2.models/EmailThirdPartyTag>} tags
 */
EmailThirdPartyProvider.prototype['tags'] = undefined;






export default EmailThirdPartyProvider;

