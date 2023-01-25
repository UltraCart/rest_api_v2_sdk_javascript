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
 * The CartValidationRequest model module.
 * @module com.ultracart.admin.v2.models/CartValidationRequest
 * @version 4.0.123-RC
 */
class CartValidationRequest {
    /**
     * Constructs a new <code>CartValidationRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/CartValidationRequest
     */
    constructor() { 
        
        CartValidationRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartValidationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartValidationRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartValidationRequest} The populated <code>CartValidationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartValidationRequest();

            if (data.hasOwnProperty('cart')) {
                obj['cart'] = Cart.constructFromObject(data['cart']);
            }
            if (data.hasOwnProperty('checks')) {
                obj['checks'] = ApiClient.convertToType(data['checks'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/Cart} cart
 */
CartValidationRequest.prototype['cart'] = undefined;

/**
 * Checks to perform
 * @member {Array.<String>} checks
 */
CartValidationRequest.prototype['checks'] = undefined;






export default CartValidationRequest;

