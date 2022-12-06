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
 * The ItemVariationOption model module.
 * @module com.ultracart.admin.v2.models/ItemVariationOption
 * @version 4.0.92-RC
 */
class ItemVariationOption {
    /**
     * Constructs a new <code>ItemVariationOption</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemVariationOption
     */
    constructor() { 
        
        ItemVariationOption.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemVariationOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemVariationOption} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemVariationOption} The populated <code>ItemVariationOption</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemVariationOption();

            if (data.hasOwnProperty('default_option')) {
                obj['default_option'] = ApiClient.convertToType(data['default_option'], 'Boolean');
            }
            if (data.hasOwnProperty('merchant_item_multimedia_oid')) {
                obj['merchant_item_multimedia_oid'] = ApiClient.convertToType(data['merchant_item_multimedia_oid'], 'Number');
            }
            if (data.hasOwnProperty('translated_text_instance_oid')) {
                obj['translated_text_instance_oid'] = ApiClient.convertToType(data['translated_text_instance_oid'], 'Number');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * True if default option
 * @member {Boolean} default_option
 */
ItemVariationOption.prototype['default_option'] = undefined;

/**
 * Multimedia object identifier
 * @member {Number} merchant_item_multimedia_oid
 */
ItemVariationOption.prototype['merchant_item_multimedia_oid'] = undefined;

/**
 * Translated text instance id
 * @member {Number} translated_text_instance_oid
 */
ItemVariationOption.prototype['translated_text_instance_oid'] = undefined;

/**
 * Value
 * @member {String} value
 */
ItemVariationOption.prototype['value'] = undefined;






export default ItemVariationOption;

