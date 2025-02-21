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
 * The CartItemVariationSelection model module.
 * @module com.ultracart.admin.v2.models/CartItemVariationSelection
 * @version 4.1.0
 */
class CartItemVariationSelection {
    /**
     * Constructs a new <code>CartItemVariationSelection</code>.
     * @alias module:com.ultracart.admin.v2.models/CartItemVariationSelection
     */
    constructor() { 
        
        CartItemVariationSelection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartItemVariationSelection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartItemVariationSelection} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartItemVariationSelection} The populated <code>CartItemVariationSelection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartItemVariationSelection();

            if (data.hasOwnProperty('variation_name')) {
                obj['variation_name'] = ApiClient.convertToType(data['variation_name'], 'String');
            }
            if (data.hasOwnProperty('variation_value')) {
                obj['variation_value'] = ApiClient.convertToType(data['variation_value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Variation name
 * @member {String} variation_name
 */
CartItemVariationSelection.prototype['variation_name'] = undefined;

/**
 * Variation value
 * @member {String} variation_value
 */
CartItemVariationSelection.prototype['variation_value'] = undefined;






export default CartItemVariationSelection;

