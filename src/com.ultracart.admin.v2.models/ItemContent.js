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
import ItemContentAssignment from './ItemContentAssignment';
import ItemContentAttribute from './ItemContentAttribute';
import ItemContentMultimedia from './ItemContentMultimedia';

/**
 * The ItemContent model module.
 * @module com.ultracart.admin.v2.models/ItemContent
 * @version 4.0.188
 */
class ItemContent {
    /**
     * Constructs a new <code>ItemContent</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemContent
     */
    constructor() { 
        
        ItemContent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemContent} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemContent} The populated <code>ItemContent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemContent();

            if (data.hasOwnProperty('assignments')) {
                obj['assignments'] = ApiClient.convertToType(data['assignments'], [ItemContentAssignment]);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], [ItemContentAttribute]);
            }
            if (data.hasOwnProperty('custom_thank_you_url')) {
                obj['custom_thank_you_url'] = ApiClient.convertToType(data['custom_thank_you_url'], 'String');
            }
            if (data.hasOwnProperty('exclude_from_search')) {
                obj['exclude_from_search'] = ApiClient.convertToType(data['exclude_from_search'], 'Boolean');
            }
            if (data.hasOwnProperty('exclude_from_sitemap')) {
                obj['exclude_from_sitemap'] = ApiClient.convertToType(data['exclude_from_sitemap'], 'Boolean');
            }
            if (data.hasOwnProperty('exclude_from_top_sellers')) {
                obj['exclude_from_top_sellers'] = ApiClient.convertToType(data['exclude_from_top_sellers'], 'Boolean');
            }
            if (data.hasOwnProperty('extended_description')) {
                obj['extended_description'] = ApiClient.convertToType(data['extended_description'], 'String');
            }
            if (data.hasOwnProperty('extended_description_translated_text_instance_oid')) {
                obj['extended_description_translated_text_instance_oid'] = ApiClient.convertToType(data['extended_description_translated_text_instance_oid'], 'Number');
            }
            if (data.hasOwnProperty('multimedia')) {
                obj['multimedia'] = ApiClient.convertToType(data['multimedia'], [ItemContentMultimedia]);
            }
            if (data.hasOwnProperty('new_item')) {
                obj['new_item'] = ApiClient.convertToType(data['new_item'], 'Boolean');
            }
            if (data.hasOwnProperty('new_item_end')) {
                obj['new_item_end'] = ApiClient.convertToType(data['new_item_end'], 'String');
            }
            if (data.hasOwnProperty('new_item_start')) {
                obj['new_item_start'] = ApiClient.convertToType(data['new_item_start'], 'String');
            }
            if (data.hasOwnProperty('view_url')) {
                obj['view_url'] = ApiClient.convertToType(data['view_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * StoreFront assignments
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemContentAssignment>} assignments
 */
ItemContent.prototype['assignments'] = undefined;

/**
 * StoreFront attributes
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemContentAttribute>} attributes
 */
ItemContent.prototype['attributes'] = undefined;

/**
 * Custom Thank You URL
 * @member {String} custom_thank_you_url
 */
ItemContent.prototype['custom_thank_you_url'] = undefined;

/**
 * Exclude from search
 * @member {Boolean} exclude_from_search
 */
ItemContent.prototype['exclude_from_search'] = undefined;

/**
 * Exclude from the sitemap for the StoreFront
 * @member {Boolean} exclude_from_sitemap
 */
ItemContent.prototype['exclude_from_sitemap'] = undefined;

/**
 * Exclude from the top sellers list in the StoreFront
 * @member {Boolean} exclude_from_top_sellers
 */
ItemContent.prototype['exclude_from_top_sellers'] = undefined;

/**
 * Extended description (max 10000 characters)
 * @member {String} extended_description
 */
ItemContent.prototype['extended_description'] = undefined;

/**
 * Extneded description text translation instance identifier
 * @member {Number} extended_description_translated_text_instance_oid
 */
ItemContent.prototype['extended_description_translated_text_instance_oid'] = undefined;

/**
 * Multimedia
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemContentMultimedia>} multimedia
 */
ItemContent.prototype['multimedia'] = undefined;

/**
 * True if the item is new
 * @member {Boolean} new_item
 */
ItemContent.prototype['new_item'] = undefined;

/**
 * The date the item should no longer be considered new
 * @member {String} new_item_end
 */
ItemContent.prototype['new_item_end'] = undefined;

/**
 * The date the item should start being considered new
 * @member {String} new_item_start
 */
ItemContent.prototype['new_item_start'] = undefined;

/**
 * Legacy view URL (not used by StoreFronts)
 * @member {String} view_url
 */
ItemContent.prototype['view_url'] = undefined;






export default ItemContent;

