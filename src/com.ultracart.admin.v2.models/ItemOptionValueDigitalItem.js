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
 * The ItemOptionValueDigitalItem model module.
 * @module com.ultracart.admin.v2.models/ItemOptionValueDigitalItem
 * @version 4.0.78-RC
 */
class ItemOptionValueDigitalItem {
    /**
     * Constructs a new <code>ItemOptionValueDigitalItem</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemOptionValueDigitalItem
     */
    constructor() { 
        
        ItemOptionValueDigitalItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemOptionValueDigitalItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemOptionValueDigitalItem} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemOptionValueDigitalItem} The populated <code>ItemOptionValueDigitalItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemOptionValueDigitalItem();

            if (data.hasOwnProperty('digital_item_oid')) {
                obj['digital_item_oid'] = ApiClient.convertToType(data['digital_item_oid'], 'Number');
            }
            if (data.hasOwnProperty('original_filename')) {
                obj['original_filename'] = ApiClient.convertToType(data['original_filename'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Digital item object identifier
 * @member {Number} digital_item_oid
 */
ItemOptionValueDigitalItem.prototype['digital_item_oid'] = undefined;

/**
 * Original filename
 * @member {String} original_filename
 */
ItemOptionValueDigitalItem.prototype['original_filename'] = undefined;






export default ItemOptionValueDigitalItem;

