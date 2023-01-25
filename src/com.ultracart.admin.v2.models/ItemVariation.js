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
import ItemVariationOption from './ItemVariationOption';

/**
 * The ItemVariation model module.
 * @module com.ultracart.admin.v2.models/ItemVariation
 * @version 4.0.123-RC
 */
class ItemVariation {
    /**
     * Constructs a new <code>ItemVariation</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemVariation
     */
    constructor() { 
        
        ItemVariation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemVariation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemVariation} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemVariation} The populated <code>ItemVariation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemVariation();

            if (data.hasOwnProperty('default_text')) {
                obj['default_text'] = ApiClient.convertToType(data['default_text'], 'String');
            }
            if (data.hasOwnProperty('default_text_translated_text_instance_oid')) {
                obj['default_text_translated_text_instance_oid'] = ApiClient.convertToType(data['default_text_translated_text_instance_oid'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('name_translated_text_instance_oid')) {
                obj['name_translated_text_instance_oid'] = ApiClient.convertToType(data['name_translated_text_instance_oid'], 'Number');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], [ItemVariationOption]);
            }
        }
        return obj;
    }


}

/**
 * Default text
 * @member {String} default_text
 */
ItemVariation.prototype['default_text'] = undefined;

/**
 * Default text translated text instance id
 * @member {Number} default_text_translated_text_instance_oid
 */
ItemVariation.prototype['default_text_translated_text_instance_oid'] = undefined;

/**
 * Name
 * @member {String} name
 */
ItemVariation.prototype['name'] = undefined;

/**
 * Name translated text instance id
 * @member {Number} name_translated_text_instance_oid
 */
ItemVariation.prototype['name_translated_text_instance_oid'] = undefined;

/**
 * Options
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemVariationOption>} options
 */
ItemVariation.prototype['options'] = undefined;






export default ItemVariation;

