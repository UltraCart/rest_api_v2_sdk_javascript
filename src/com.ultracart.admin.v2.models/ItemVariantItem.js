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
 * The ItemVariantItem model module.
 * @module com.ultracart.admin.v2.models/ItemVariantItem
 * @version 4.0.109-RC
 */
class ItemVariantItem {
    /**
     * Constructs a new <code>ItemVariantItem</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemVariantItem
     */
    constructor() { 
        
        ItemVariantItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemVariantItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemVariantItem} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemVariantItem} The populated <code>ItemVariantItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemVariantItem();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('merchant_item_multimedia_oid')) {
                obj['merchant_item_multimedia_oid'] = ApiClient.convertToType(data['merchant_item_multimedia_oid'], 'Number');
            }
            if (data.hasOwnProperty('variant_merchant_item_id')) {
                obj['variant_merchant_item_id'] = ApiClient.convertToType(data['variant_merchant_item_id'], 'String');
            }
            if (data.hasOwnProperty('variant_merchant_item_oid')) {
                obj['variant_merchant_item_oid'] = ApiClient.convertToType(data['variant_merchant_item_oid'], 'Number');
            }
            if (data.hasOwnProperty('variation_options')) {
                obj['variation_options'] = ApiClient.convertToType(data['variation_options'], ['String']);
            }
            if (data.hasOwnProperty('variations')) {
                obj['variations'] = ApiClient.convertToType(data['variations'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Description
 * @member {String} description
 */
ItemVariantItem.prototype['description'] = undefined;

/**
 * Multimedia object identifier
 * @member {Number} merchant_item_multimedia_oid
 */
ItemVariantItem.prototype['merchant_item_multimedia_oid'] = undefined;

/**
 * Variant item id
 * @member {String} variant_merchant_item_id
 */
ItemVariantItem.prototype['variant_merchant_item_id'] = undefined;

/**
 * Variant item object identifier
 * @member {Number} variant_merchant_item_oid
 */
ItemVariantItem.prototype['variant_merchant_item_oid'] = undefined;

/**
 * Variation options
 * @member {Array.<String>} variation_options
 */
ItemVariantItem.prototype['variation_options'] = undefined;

/**
 * Variations
 * @member {Array.<String>} variations
 */
ItemVariantItem.prototype['variations'] = undefined;






export default ItemVariantItem;

