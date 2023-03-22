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
import Order from './Order';

/**
 * The CartFinalizeOrderResponse model module.
 * @module com.ultracart.admin.v2.models/CartFinalizeOrderResponse
 * @version 4.0.141
 */
class CartFinalizeOrderResponse {
    /**
     * Constructs a new <code>CartFinalizeOrderResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/CartFinalizeOrderResponse
     */
    constructor() { 
        
        CartFinalizeOrderResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartFinalizeOrderResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartFinalizeOrderResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartFinalizeOrderResponse} The populated <code>CartFinalizeOrderResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartFinalizeOrderResponse();

            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], ['String']);
            }
            if (data.hasOwnProperty('next_cart')) {
                obj['next_cart'] = Cart.constructFromObject(data['next_cart']);
            }
            if (data.hasOwnProperty('order')) {
                obj['order'] = Order.constructFromObject(data['order']);
            }
            if (data.hasOwnProperty('order_id')) {
                obj['order_id'] = ApiClient.convertToType(data['order_id'], 'String');
            }
            if (data.hasOwnProperty('successful')) {
                obj['successful'] = ApiClient.convertToType(data['successful'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Error messages if the order could not be completed
 * @member {Array.<String>} errors
 */
CartFinalizeOrderResponse.prototype['errors'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Cart} next_cart
 */
CartFinalizeOrderResponse.prototype['next_cart'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Order} order
 */
CartFinalizeOrderResponse.prototype['order'] = undefined;

/**
 * Order ID assigned to the order
 * @member {String} order_id
 */
CartFinalizeOrderResponse.prototype['order_id'] = undefined;

/**
 * True if the cart was converted successfully to an order
 * @member {Boolean} successful
 */
CartFinalizeOrderResponse.prototype['successful'] = undefined;






export default CartFinalizeOrderResponse;

