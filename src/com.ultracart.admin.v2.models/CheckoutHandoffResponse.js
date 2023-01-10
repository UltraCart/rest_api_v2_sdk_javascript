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
 * The CheckoutHandoffResponse model module.
 * @module com.ultracart.admin.v2.models/CheckoutHandoffResponse
 * @version 4.0.110-RC
 */
class CheckoutHandoffResponse {
    /**
     * Constructs a new <code>CheckoutHandoffResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/CheckoutHandoffResponse
     */
    constructor() { 
        
        CheckoutHandoffResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CheckoutHandoffResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CheckoutHandoffResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CheckoutHandoffResponse} The populated <code>CheckoutHandoffResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CheckoutHandoffResponse();

            if (data.hasOwnProperty('cart')) {
                obj['cart'] = Cart.constructFromObject(data['cart']);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], ['String']);
            }
            if (data.hasOwnProperty('redirect_to_url')) {
                obj['redirect_to_url'] = ApiClient.convertToType(data['redirect_to_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/Cart} cart
 */
CheckoutHandoffResponse.prototype['cart'] = undefined;

/**
 * Errors that occurred which are preventing the handoff operation.  Display these to the customer.
 * @member {Array.<String>} errors
 */
CheckoutHandoffResponse.prototype['errors'] = undefined;

/**
 * The URL that you should redirect the customers browser to
 * @member {String} redirect_to_url
 */
CheckoutHandoffResponse.prototype['redirect_to_url'] = undefined;






export default CheckoutHandoffResponse;

