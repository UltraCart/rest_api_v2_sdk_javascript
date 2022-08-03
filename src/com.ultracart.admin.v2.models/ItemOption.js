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
import ItemOptionValue from './ItemOptionValue';

/**
 * The ItemOption model module.
 * @module com.ultracart.admin.v2.models/ItemOption
 * @version 4.0.50-RC
 */
class ItemOption {
    /**
     * Constructs a new <code>ItemOption</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemOption
     */
    constructor() { 
        
        ItemOption.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemOption} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemOption} The populated <code>ItemOption</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemOption();

            if (data.hasOwnProperty('cost_if_specified')) {
                obj['cost_if_specified'] = ApiClient.convertToType(data['cost_if_specified'], 'Number');
            }
            if (data.hasOwnProperty('cost_per_letter')) {
                obj['cost_per_letter'] = ApiClient.convertToType(data['cost_per_letter'], 'Number');
            }
            if (data.hasOwnProperty('cost_per_line')) {
                obj['cost_per_line'] = ApiClient.convertToType(data['cost_per_line'], 'Number');
            }
            if (data.hasOwnProperty('ignore_if_default')) {
                obj['ignore_if_default'] = ApiClient.convertToType(data['ignore_if_default'], 'Boolean');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('label_translated_text_instance_oid')) {
                obj['label_translated_text_instance_oid'] = ApiClient.convertToType(data['label_translated_text_instance_oid'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('name_translated_text_instance_oid')) {
                obj['name_translated_text_instance_oid'] = ApiClient.convertToType(data['name_translated_text_instance_oid'], 'Number');
            }
            if (data.hasOwnProperty('one_time_fee')) {
                obj['one_time_fee'] = ApiClient.convertToType(data['one_time_fee'], 'Boolean');
            }
            if (data.hasOwnProperty('option_oid')) {
                obj['option_oid'] = ApiClient.convertToType(data['option_oid'], 'Number');
            }
            if (data.hasOwnProperty('required')) {
                obj['required'] = ApiClient.convertToType(data['required'], 'Boolean');
            }
            if (data.hasOwnProperty('system_option')) {
                obj['system_option'] = ApiClient.convertToType(data['system_option'], 'Boolean');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], [ItemOptionValue]);
            }
        }
        return obj;
    }


}

/**
 * Cost if specified
 * @member {Number} cost_if_specified
 */
ItemOption.prototype['cost_if_specified'] = undefined;

/**
 * Cost per letter
 * @member {Number} cost_per_letter
 */
ItemOption.prototype['cost_per_letter'] = undefined;

/**
 * Cost per line
 * @member {Number} cost_per_line
 */
ItemOption.prototype['cost_per_line'] = undefined;

/**
 * Ignore this option on the order if the default value is selected
 * @member {Boolean} ignore_if_default
 */
ItemOption.prototype['ignore_if_default'] = undefined;

/**
 * Label
 * @member {String} label
 */
ItemOption.prototype['label'] = undefined;

/**
 * Label translated text instance ID
 * @member {Number} label_translated_text_instance_oid
 */
ItemOption.prototype['label_translated_text_instance_oid'] = undefined;

/**
 * Name
 * @member {String} name
 */
ItemOption.prototype['name'] = undefined;

/**
 * Name translated text instance ID
 * @member {Number} name_translated_text_instance_oid
 */
ItemOption.prototype['name_translated_text_instance_oid'] = undefined;

/**
 * One time fee
 * @member {Boolean} one_time_fee
 */
ItemOption.prototype['one_time_fee'] = undefined;

/**
 * Option object identifier
 * @member {Number} option_oid
 */
ItemOption.prototype['option_oid'] = undefined;

/**
 * True if the customer is required to specify an answer
 * @member {Boolean} required
 */
ItemOption.prototype['required'] = undefined;

/**
 * True if this is a system option
 * @member {Boolean} system_option
 */
ItemOption.prototype['system_option'] = undefined;

/**
 * Type of option
 * @member {module:com.ultracart.admin.v2.models/ItemOption.TypeEnum} type
 */
ItemOption.prototype['type'] = undefined;

/**
 * Values
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemOptionValue>} values
 */
ItemOption.prototype['values'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ItemOption['TypeEnum'] = {

    /**
     * value: "dropdown"
     * @const
     */
    "dropdown": "dropdown",

    /**
     * value: "file attachment"
     * @const
     */
    "file attachment": "file attachment",

    /**
     * value: "fixed"
     * @const
     */
    "fixed": "fixed",

    /**
     * value: "hidden"
     * @const
     */
    "hidden": "hidden",

    /**
     * value: "multiline"
     * @const
     */
    "multiline": "multiline",

    /**
     * value: "radio"
     * @const
     */
    "radio": "radio",

    /**
     * value: "single"
     * @const
     */
    "single": "single"
};



export default ItemOption;

