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
 * The ItemRestrictionItem model module.
 * @module com.ultracart.admin.v2.models/ItemRestrictionItem
 * @version 4.0.82-RC
 */
class ItemRestrictionItem {
    /**
     * Constructs a new <code>ItemRestrictionItem</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemRestrictionItem
     */
    constructor() { 
        
        ItemRestrictionItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemRestrictionItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemRestrictionItem} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemRestrictionItem} The populated <code>ItemRestrictionItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemRestrictionItem();

            if (data.hasOwnProperty('restrict_merchant_item_id')) {
                obj['restrict_merchant_item_id'] = ApiClient.convertToType(data['restrict_merchant_item_id'], 'String');
            }
            if (data.hasOwnProperty('restrict_merchant_item_oid')) {
                obj['restrict_merchant_item_oid'] = ApiClient.convertToType(data['restrict_merchant_item_oid'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Restrict item id
 * @member {String} restrict_merchant_item_id
 */
ItemRestrictionItem.prototype['restrict_merchant_item_id'] = undefined;

/**
 * Restrict item object identifier
 * @member {Number} restrict_merchant_item_oid
 */
ItemRestrictionItem.prototype['restrict_merchant_item_oid'] = undefined;

/**
 * Restriction type
 * @member {module:com.ultracart.admin.v2.models/ItemRestrictionItem.TypeEnum} type
 */
ItemRestrictionItem.prototype['type'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ItemRestrictionItem['TypeEnum'] = {

    /**
     * value: "can not be purchased with"
     * @const
     */
    "can not be purchased with": "can not be purchased with",

    /**
     * value: "can only be purchased with"
     * @const
     */
    "can only be purchased with": "can only be purchased with",

    /**
     * value: "must be purchased with"
     * @const
     */
    "must be purchased with": "must be purchased with"
};



export default ItemRestrictionItem;

