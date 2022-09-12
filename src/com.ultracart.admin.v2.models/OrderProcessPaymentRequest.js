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
 * The OrderProcessPaymentRequest model module.
 * @module com.ultracart.admin.v2.models/OrderProcessPaymentRequest
 * @version 4.0.62-RC
 */
class OrderProcessPaymentRequest {
    /**
     * Constructs a new <code>OrderProcessPaymentRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderProcessPaymentRequest
     */
    constructor() { 
        
        OrderProcessPaymentRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderProcessPaymentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderProcessPaymentRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderProcessPaymentRequest} The populated <code>OrderProcessPaymentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderProcessPaymentRequest();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('card_verification_number_token')) {
                obj['card_verification_number_token'] = ApiClient.convertToType(data['card_verification_number_token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Specific amount to bill (optional).  If not specified the total of the order is billed.
 * @member {Number} amount
 */
OrderProcessPaymentRequest.prototype['amount'] = undefined;

/**
 * Card verification number token from hosted fields used during credit card transaction processing (optional)
 * @member {String} card_verification_number_token
 */
OrderProcessPaymentRequest.prototype['card_verification_number_token'] = undefined;






export default OrderProcessPaymentRequest;

