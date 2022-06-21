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
 * The CartProfileRegisterRequest model module.
 * @module com.ultracart.admin.v2.models/CartProfileRegisterRequest
 * @version 4.0.3
 */
class CartProfileRegisterRequest {
    /**
     * Constructs a new <code>CartProfileRegisterRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/CartProfileRegisterRequest
     */
    constructor() { 
        
        CartProfileRegisterRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartProfileRegisterRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartProfileRegisterRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartProfileRegisterRequest} The populated <code>CartProfileRegisterRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartProfileRegisterRequest();

            if (data.hasOwnProperty('cart')) {
                obj['cart'] = Cart.constructFromObject(data['cart']);
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/Cart} cart
 */
CartProfileRegisterRequest.prototype['cart'] = undefined;

/**
 * Password for the profile
 * @member {String} password
 */
CartProfileRegisterRequest.prototype['password'] = undefined;






export default CartProfileRegisterRequest;

