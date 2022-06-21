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
import CartFinalizeOrderRequestOptions from './CartFinalizeOrderRequestOptions';

/**
 * The CartFinalizeOrderRequest model module.
 * @module com.ultracart.admin.v2.models/CartFinalizeOrderRequest
 * @version 4.0.6-RC
 */
class CartFinalizeOrderRequest {
    /**
     * Constructs a new <code>CartFinalizeOrderRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/CartFinalizeOrderRequest
     */
    constructor() { 
        
        CartFinalizeOrderRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartFinalizeOrderRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartFinalizeOrderRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartFinalizeOrderRequest} The populated <code>CartFinalizeOrderRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartFinalizeOrderRequest();

            if (data.hasOwnProperty('cart')) {
                obj['cart'] = Cart.constructFromObject(data['cart']);
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = CartFinalizeOrderRequestOptions.constructFromObject(data['options']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/Cart} cart
 */
CartFinalizeOrderRequest.prototype['cart'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CartFinalizeOrderRequestOptions} options
 */
CartFinalizeOrderRequest.prototype['options'] = undefined;






export default CartFinalizeOrderRequest;

