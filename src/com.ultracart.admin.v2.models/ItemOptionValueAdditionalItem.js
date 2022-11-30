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
 * The ItemOptionValueAdditionalItem model module.
 * @module com.ultracart.admin.v2.models/ItemOptionValueAdditionalItem
 * @version 4.0.90-RC
 */
class ItemOptionValueAdditionalItem {
    /**
     * Constructs a new <code>ItemOptionValueAdditionalItem</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemOptionValueAdditionalItem
     */
    constructor() { 
        
        ItemOptionValueAdditionalItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemOptionValueAdditionalItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemOptionValueAdditionalItem} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemOptionValueAdditionalItem} The populated <code>ItemOptionValueAdditionalItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemOptionValueAdditionalItem();

            if (data.hasOwnProperty('additional_merchant_item_id')) {
                obj['additional_merchant_item_id'] = ApiClient.convertToType(data['additional_merchant_item_id'], 'String');
            }
            if (data.hasOwnProperty('additional_merchant_item_oid')) {
                obj['additional_merchant_item_oid'] = ApiClient.convertToType(data['additional_merchant_item_oid'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Additional item id
 * @member {String} additional_merchant_item_id
 */
ItemOptionValueAdditionalItem.prototype['additional_merchant_item_id'] = undefined;

/**
 * Additional item object identifier
 * @member {Number} additional_merchant_item_oid
 */
ItemOptionValueAdditionalItem.prototype['additional_merchant_item_oid'] = undefined;






export default ItemOptionValueAdditionalItem;

