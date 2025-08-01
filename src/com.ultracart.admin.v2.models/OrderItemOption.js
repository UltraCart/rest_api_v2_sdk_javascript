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
import Currency from './Currency';
import Distance from './Distance';
import OrderItemOptionFileAttachment from './OrderItemOptionFileAttachment';
import Weight from './Weight';

/**
 * The OrderItemOption model module.
 * @module com.ultracart.admin.v2.models/OrderItemOption
 * @version 4.1.16
 */
class OrderItemOption {
    /**
     * Constructs a new <code>OrderItemOption</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderItemOption
     */
    constructor() { 
        
        OrderItemOption.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderItemOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderItemOption} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderItemOption} The populated <code>OrderItemOption</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderItemOption();

            if (data.hasOwnProperty('additional_dimension_application')) {
                obj['additional_dimension_application'] = ApiClient.convertToType(data['additional_dimension_application'], 'String');
            }
            if (data.hasOwnProperty('cost_change')) {
                obj['cost_change'] = Currency.constructFromObject(data['cost_change']);
            }
            if (data.hasOwnProperty('file_attachment')) {
                obj['file_attachment'] = OrderItemOptionFileAttachment.constructFromObject(data['file_attachment']);
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = Distance.constructFromObject(data['height']);
            }
            if (data.hasOwnProperty('hidden')) {
                obj['hidden'] = ApiClient.convertToType(data['hidden'], 'Boolean');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('length')) {
                obj['length'] = Distance.constructFromObject(data['length']);
            }
            if (data.hasOwnProperty('one_time_fee')) {
                obj['one_time_fee'] = ApiClient.convertToType(data['one_time_fee'], 'Boolean');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('weight_change')) {
                obj['weight_change'] = Weight.constructFromObject(data['weight_change']);
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = Distance.constructFromObject(data['width']);
            }
        }
        return obj;
    }


}

/**
 * How the additional dimensions are applied to the item.
 * @member {module:com.ultracart.admin.v2.models/OrderItemOption.AdditionalDimensionApplicationEnum} additional_dimension_application
 */
OrderItemOption.prototype['additional_dimension_application'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} cost_change
 */
OrderItemOption.prototype['cost_change'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/OrderItemOptionFileAttachment} file_attachment
 */
OrderItemOption.prototype['file_attachment'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Distance} height
 */
OrderItemOption.prototype['height'] = undefined;

/**
 * True if this option is hidden from display on the order
 * @member {Boolean} hidden
 */
OrderItemOption.prototype['hidden'] = undefined;

/**
 * Label
 * @member {String} label
 */
OrderItemOption.prototype['label'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Distance} length
 */
OrderItemOption.prototype['length'] = undefined;

/**
 * True if the cost associated with this option is a one time fee or multiplied by the quantity of the item
 * @member {Boolean} one_time_fee
 */
OrderItemOption.prototype['one_time_fee'] = undefined;

/**
 * Value
 * @member {String} value
 */
OrderItemOption.prototype['value'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Weight} weight_change
 */
OrderItemOption.prototype['weight_change'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Distance} width
 */
OrderItemOption.prototype['width'] = undefined;





/**
 * Allowed values for the <code>additional_dimension_application</code> property.
 * @enum {String}
 * @readonly
 */
OrderItemOption['AdditionalDimensionApplicationEnum'] = {

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



export default OrderItemOption;

