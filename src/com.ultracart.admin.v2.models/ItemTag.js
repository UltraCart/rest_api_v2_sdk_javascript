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
 * The ItemTag model module.
 * @module com.ultracart.admin.v2.models/ItemTag
 * @version 4.0.150
 */
class ItemTag {
    /**
     * Constructs a new <code>ItemTag</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemTag
     */
    constructor() { 
        
        ItemTag.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemTag</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemTag} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemTag} The populated <code>ItemTag</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemTag();

            if (data.hasOwnProperty('tagType')) {
                obj['tagType'] = ApiClient.convertToType(data['tagType'], 'String');
            }
            if (data.hasOwnProperty('tagValue')) {
                obj['tagValue'] = ApiClient.convertToType(data['tagValue'], 'String');
            }
        }
        return obj;
    }


}

/**
 * tag_tpe
 * @member {module:com.ultracart.admin.v2.models/ItemTag.TagTypeEnum} tagType
 */
ItemTag.prototype['tagType'] = undefined;

/**
 * tag_value
 * @member {String} tagValue
 */
ItemTag.prototype['tagValue'] = undefined;





/**
 * Allowed values for the <code>tagType</code> property.
 * @enum {String}
 * @readonly
 */
ItemTag['TagTypeEnum'] = {

    /**
     * value: "item"
     * @const
     */
    "item": "item",

    /**
     * value: "order"
     * @const
     */
    "order": "order",

    /**
     * value: "customer"
     * @const
     */
    "customer": "customer"
};



export default ItemTag;

