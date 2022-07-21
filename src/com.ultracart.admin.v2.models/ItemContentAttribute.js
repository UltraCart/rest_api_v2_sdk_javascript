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
 * The ItemContentAttribute model module.
 * @module com.ultracart.admin.v2.models/ItemContentAttribute
 * @version 4.0.39-RC
 */
class ItemContentAttribute {
    /**
     * Constructs a new <code>ItemContentAttribute</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemContentAttribute
     */
    constructor() { 
        
        ItemContentAttribute.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemContentAttribute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemContentAttribute} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemContentAttribute} The populated <code>ItemContentAttribute</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemContentAttribute();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('translated_text_instance_oid')) {
                obj['translated_text_instance_oid'] = ApiClient.convertToType(data['translated_text_instance_oid'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Attribute name
 * @member {String} name
 */
ItemContentAttribute.prototype['name'] = undefined;

/**
 * Attribute translated text instance identifier
 * @member {Number} translated_text_instance_oid
 */
ItemContentAttribute.prototype['translated_text_instance_oid'] = undefined;

/**
 * Attribute type
 * @member {String} type
 */
ItemContentAttribute.prototype['type'] = undefined;

/**
 * Attribute value
 * @member {String} value
 */
ItemContentAttribute.prototype['value'] = undefined;






export default ItemContentAttribute;

