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
 * The CartPaymentAmazon model module.
 * @module com.ultracart.admin.v2.models/CartPaymentAmazon
 * @version 4.0.53-RC
 */
class CartPaymentAmazon {
    /**
     * Constructs a new <code>CartPaymentAmazon</code>.
     * @alias module:com.ultracart.admin.v2.models/CartPaymentAmazon
     */
    constructor() { 
        
        CartPaymentAmazon.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartPaymentAmazon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartPaymentAmazon} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartPaymentAmazon} The populated <code>CartPaymentAmazon</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartPaymentAmazon();

            if (data.hasOwnProperty('amazon_order_reference_id')) {
                obj['amazon_order_reference_id'] = ApiClient.convertToType(data['amazon_order_reference_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Amazon order reference id
 * @member {String} amazon_order_reference_id
 */
CartPaymentAmazon.prototype['amazon_order_reference_id'] = undefined;






export default CartPaymentAmazon;

