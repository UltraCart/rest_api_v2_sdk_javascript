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
 * The CartItemAttribute model module.
 * @module com.ultracart.admin.v2.models/CartItemAttribute
 * @version 4.0.105-RC
 */
class CartItemAttribute {
    /**
     * Constructs a new <code>CartItemAttribute</code>.
     * @alias module:com.ultracart.admin.v2.models/CartItemAttribute
     */
    constructor() { 
        
        CartItemAttribute.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartItemAttribute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartItemAttribute} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartItemAttribute} The populated <code>CartItemAttribute</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartItemAttribute();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
 * Name of the attribute
 * @member {String} name
 */
CartItemAttribute.prototype['name'] = undefined;

/**
 * Type of attribute
 * @member {String} type
 */
CartItemAttribute.prototype['type'] = undefined;

/**
 * Value of the attribute
 * @member {String} value
 */
CartItemAttribute.prototype['value'] = undefined;






export default CartItemAttribute;

