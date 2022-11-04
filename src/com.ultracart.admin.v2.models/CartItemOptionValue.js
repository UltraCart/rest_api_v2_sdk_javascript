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
import Weight from './Weight';

/**
 * The CartItemOptionValue model module.
 * @module com.ultracart.admin.v2.models/CartItemOptionValue
 * @version 4.0.78-RC
 */
class CartItemOptionValue {
    /**
     * Constructs a new <code>CartItemOptionValue</code>.
     * @alias module:com.ultracart.admin.v2.models/CartItemOptionValue
     */
    constructor() { 
        
        CartItemOptionValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartItemOptionValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartItemOptionValue} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartItemOptionValue} The populated <code>CartItemOptionValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartItemOptionValue();

            if (data.hasOwnProperty('additional_cost')) {
                obj['additional_cost'] = Currency.constructFromObject(data['additional_cost']);
            }
            if (data.hasOwnProperty('additional_weight')) {
                obj['additional_weight'] = Weight.constructFromObject(data['additional_weight']);
            }
            if (data.hasOwnProperty('default_value')) {
                obj['default_value'] = ApiClient.convertToType(data['default_value'], 'Boolean');
            }
            if (data.hasOwnProperty('display_order')) {
                obj['display_order'] = ApiClient.convertToType(data['display_order'], 'Number');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} additional_cost
 */
CartItemOptionValue.prototype['additional_cost'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Weight} additional_weight
 */
CartItemOptionValue.prototype['additional_weight'] = undefined;

/**
 * True if this is the default value
 * @member {Boolean} default_value
 */
CartItemOptionValue.prototype['default_value'] = undefined;

/**
 * Display order of the option value
 * @member {Number} display_order
 */
CartItemOptionValue.prototype['display_order'] = undefined;

/**
 * Value of the option the customer can select
 * @member {String} value
 */
CartItemOptionValue.prototype['value'] = undefined;






export default CartItemOptionValue;

