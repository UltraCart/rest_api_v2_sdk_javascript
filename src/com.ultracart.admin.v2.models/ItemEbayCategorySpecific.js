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
 * The ItemEbayCategorySpecific model module.
 * @module com.ultracart.admin.v2.models/ItemEbayCategorySpecific
 * @version 4.0.110-RC
 */
class ItemEbayCategorySpecific {
    /**
     * Constructs a new <code>ItemEbayCategorySpecific</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemEbayCategorySpecific
     */
    constructor() { 
        
        ItemEbayCategorySpecific.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemEbayCategorySpecific</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemEbayCategorySpecific} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemEbayCategorySpecific} The populated <code>ItemEbayCategorySpecific</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemEbayCategorySpecific();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name of the category specification field
 * @member {String} name
 */
ItemEbayCategorySpecific.prototype['name'] = undefined;

/**
 * Value
 * @member {String} value
 */
ItemEbayCategorySpecific.prototype['value'] = undefined;






export default ItemEbayCategorySpecific;

