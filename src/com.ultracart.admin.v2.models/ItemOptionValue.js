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
import Distance from './Distance';
import ItemOptionValueAdditionalItem from './ItemOptionValueAdditionalItem';
import ItemOptionValueDigitalItem from './ItemOptionValueDigitalItem';
import Weight from './Weight';

/**
 * The ItemOptionValue model module.
 * @module com.ultracart.admin.v2.models/ItemOptionValue
 * @version 4.0.116-RC
 */
class ItemOptionValue {
    /**
     * Constructs a new <code>ItemOptionValue</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemOptionValue
     */
    constructor() { 
        
        ItemOptionValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemOptionValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemOptionValue} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemOptionValue} The populated <code>ItemOptionValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemOptionValue();

            if (data.hasOwnProperty('additional_dimension_application')) {
                obj['additional_dimension_application'] = ApiClient.convertToType(data['additional_dimension_application'], 'String');
            }
            if (data.hasOwnProperty('additional_items')) {
                obj['additional_items'] = ApiClient.convertToType(data['additional_items'], [ItemOptionValueAdditionalItem]);
            }
            if (data.hasOwnProperty('cost_change')) {
                obj['cost_change'] = ApiClient.convertToType(data['cost_change'], 'Number');
            }
            if (data.hasOwnProperty('default_value')) {
                obj['default_value'] = ApiClient.convertToType(data['default_value'], 'Boolean');
            }
            if (data.hasOwnProperty('digital_items')) {
                obj['digital_items'] = ApiClient.convertToType(data['digital_items'], [ItemOptionValueDigitalItem]);
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = Distance.constructFromObject(data['height']);
            }
            if (data.hasOwnProperty('length')) {
                obj['length'] = Distance.constructFromObject(data['length']);
            }
            if (data.hasOwnProperty('merchant_item_multimedia_oid')) {
                obj['merchant_item_multimedia_oid'] = ApiClient.convertToType(data['merchant_item_multimedia_oid'], 'Number');
            }
            if (data.hasOwnProperty('option_value_oid')) {
                obj['option_value_oid'] = ApiClient.convertToType(data['option_value_oid'], 'Number');
            }
            if (data.hasOwnProperty('percent_cost_change')) {
                obj['percent_cost_change'] = ApiClient.convertToType(data['percent_cost_change'], 'Number');
            }
            if (data.hasOwnProperty('translated_text_instance_oid')) {
                obj['translated_text_instance_oid'] = ApiClient.convertToType(data['translated_text_instance_oid'], 'Number');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('weight_change')) {
                obj['weight_change'] = Weight.constructFromObject(data['weight_change']);
            }
            if (data.hasOwnProperty('weight_change_percent')) {
                obj['weight_change_percent'] = ApiClient.convertToType(data['weight_change_percent'], 'Number');
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = Distance.constructFromObject(data['width']);
            }
        }
        return obj;
    }


}

/**
 * Additional dimensions application
 * @member {module:com.ultracart.admin.v2.models/ItemOptionValue.AdditionalDimensionApplicationEnum} additional_dimension_application
 */
ItemOptionValue.prototype['additional_dimension_application'] = undefined;

/**
 * Additional items to add to the order if this value is selected
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemOptionValueAdditionalItem>} additional_items
 */
ItemOptionValue.prototype['additional_items'] = undefined;

/**
 * Cost change
 * @member {Number} cost_change
 */
ItemOptionValue.prototype['cost_change'] = undefined;

/**
 * True if default value
 * @member {Boolean} default_value
 */
ItemOptionValue.prototype['default_value'] = undefined;

/**
 * Digital items to allow the customer to download if this option value is selected
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemOptionValueDigitalItem>} digital_items
 */
ItemOptionValue.prototype['digital_items'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Distance} height
 */
ItemOptionValue.prototype['height'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Distance} length
 */
ItemOptionValue.prototype['length'] = undefined;

/**
 * Multimedia object identifier associated with this option value
 * @member {Number} merchant_item_multimedia_oid
 */
ItemOptionValue.prototype['merchant_item_multimedia_oid'] = undefined;

/**
 * Option value object identifier
 * @member {Number} option_value_oid
 */
ItemOptionValue.prototype['option_value_oid'] = undefined;

/**
 * Percentage cost change
 * @member {Number} percent_cost_change
 */
ItemOptionValue.prototype['percent_cost_change'] = undefined;

/**
 * Translated text instance id
 * @member {Number} translated_text_instance_oid
 */
ItemOptionValue.prototype['translated_text_instance_oid'] = undefined;

/**
 * Value
 * @member {String} value
 */
ItemOptionValue.prototype['value'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Weight} weight_change
 */
ItemOptionValue.prototype['weight_change'] = undefined;

/**
 * Percentage weight change
 * @member {Number} weight_change_percent
 */
ItemOptionValue.prototype['weight_change_percent'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Distance} width
 */
ItemOptionValue.prototype['width'] = undefined;





/**
 * Allowed values for the <code>additional_dimension_application</code> property.
 * @enum {String}
 * @readonly
 */
ItemOptionValue['AdditionalDimensionApplicationEnum'] = {

    /**
     * value: "none"
     * @const
     */
    "none": "none",

    /**
     * value: "set item to"
     * @const
     */
    "set item to": "set item to",

    /**
     * value: "add item"
     * @const
     */
    "add item": "add item"
};



export default ItemOptionValue;

