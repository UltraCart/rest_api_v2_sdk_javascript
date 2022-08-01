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
 * The CartProfileLoginRequest model module.
 * @module com.ultracart.admin.v2.models/CartProfileLoginRequest
 * @version 4.0.47-RC
 */
class CartProfileLoginRequest {
    /**
     * Constructs a new <code>CartProfileLoginRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/CartProfileLoginRequest
     */
    constructor() { 
        
        CartProfileLoginRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartProfileLoginRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartProfileLoginRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartProfileLoginRequest} The populated <code>CartProfileLoginRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartProfileLoginRequest();

            if (data.hasOwnProperty('cart')) {
                obj['cart'] = Cart.constructFromObject(data['cart']);
            }
            if (data.hasOwnProperty('customer_profile_oid')) {
                obj['customer_profile_oid'] = ApiClient.convertToType(data['customer_profile_oid'], 'Number');
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
CartProfileLoginRequest.prototype['cart'] = undefined;

/**
 * Unique identifier for customer profile.  Can not be used with browser key authentication type.
 * @member {Number} customer_profile_oid
 */
CartProfileLoginRequest.prototype['customer_profile_oid'] = undefined;

/**
 * Password for the profile
 * @member {String} password
 */
CartProfileLoginRequest.prototype['password'] = undefined;






export default CartProfileLoginRequest;

