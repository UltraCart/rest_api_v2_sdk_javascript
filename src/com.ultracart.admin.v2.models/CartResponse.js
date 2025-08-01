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
import Cart from './Cart';

/**
 * The CartResponse model module.
 * @module com.ultracart.admin.v2.models/CartResponse
 * @version 4.1.16
 */
class CartResponse {
    /**
     * Constructs a new <code>CartResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/CartResponse
     */
    constructor() { 
        
        CartResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartResponse} The populated <code>CartResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartResponse();

            if (data.hasOwnProperty('cart')) {
                obj['cart'] = Cart.constructFromObject(data['cart']);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/Cart} cart
 */
CartResponse.prototype['cart'] = undefined;

/**
 * Errors that should be displayed to the customer
 * @member {Array.<String>} errors
 */
CartResponse.prototype['errors'] = undefined;






export default CartResponse;

