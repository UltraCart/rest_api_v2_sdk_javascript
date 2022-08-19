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
 * The CartAffirmCheckoutResponse model module.
 * @module com.ultracart.admin.v2.models/CartAffirmCheckoutResponse
 * @version 4.0.56-RC
 */
class CartAffirmCheckoutResponse {
    /**
     * Constructs a new <code>CartAffirmCheckoutResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/CartAffirmCheckoutResponse
     */
    constructor() { 
        
        CartAffirmCheckoutResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartAffirmCheckoutResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartAffirmCheckoutResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartAffirmCheckoutResponse} The populated <code>CartAffirmCheckoutResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartAffirmCheckoutResponse();

            if (data.hasOwnProperty('checkout_json')) {
                obj['checkout_json'] = ApiClient.convertToType(data['checkout_json'], 'String');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Checkout JSON object
 * @member {String} checkout_json
 */
CartAffirmCheckoutResponse.prototype['checkout_json'] = undefined;

/**
 * Errors that should be displayed to the customer
 * @member {Array.<String>} errors
 */
CartAffirmCheckoutResponse.prototype['errors'] = undefined;






export default CartAffirmCheckoutResponse;

