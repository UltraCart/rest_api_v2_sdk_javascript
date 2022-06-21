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
 * The ItemRelatedItem model module.
 * @module com.ultracart.admin.v2.models/ItemRelatedItem
 * @version 4.0.5
 */
class ItemRelatedItem {
    /**
     * Constructs a new <code>ItemRelatedItem</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemRelatedItem
     */
    constructor() { 
        
        ItemRelatedItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemRelatedItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemRelatedItem} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemRelatedItem} The populated <code>ItemRelatedItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemRelatedItem();

            if (data.hasOwnProperty('related_merchant_item_id')) {
                obj['related_merchant_item_id'] = ApiClient.convertToType(data['related_merchant_item_id'], 'String');
            }
            if (data.hasOwnProperty('related_merchant_item_oid')) {
                obj['related_merchant_item_oid'] = ApiClient.convertToType(data['related_merchant_item_oid'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Related item id
 * @member {String} related_merchant_item_id
 */
ItemRelatedItem.prototype['related_merchant_item_id'] = undefined;

/**
 * Related item object identifier
 * @member {Number} related_merchant_item_oid
 */
ItemRelatedItem.prototype['related_merchant_item_oid'] = undefined;

/**
 * Relationship type
 * @member {module:com.ultracart.admin.v2.models/ItemRelatedItem.TypeEnum} type
 */
ItemRelatedItem.prototype['type'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ItemRelatedItem['TypeEnum'] = {

    /**
     * value: "System"
     * @const
     */
    "System": "System",

    /**
     * value: "UserDefined"
     * @const
     */
    "UserDefined": "UserDefined"
};



export default ItemRelatedItem;

