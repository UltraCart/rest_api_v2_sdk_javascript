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
import Error from './Error';
import OrderPaymentTransaction from './OrderPaymentTransaction';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The OrderProcessPaymentResponse model module.
 * @module com.ultracart.admin.v2.models/OrderProcessPaymentResponse
 * @version 4.0.129
 */
class OrderProcessPaymentResponse {
    /**
     * Constructs a new <code>OrderProcessPaymentResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderProcessPaymentResponse
     */
    constructor() { 
        
        OrderProcessPaymentResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderProcessPaymentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderProcessPaymentResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderProcessPaymentResponse} The populated <code>OrderProcessPaymentResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderProcessPaymentResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('payment_transaction')) {
                obj['payment_transaction'] = OrderPaymentTransaction.constructFromObject(data['payment_transaction']);
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('warning')) {
                obj['warning'] = Warning.constructFromObject(data['warning']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
OrderProcessPaymentResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
OrderProcessPaymentResponse.prototype['metadata'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/OrderPaymentTransaction} payment_transaction
 */
OrderProcessPaymentResponse.prototype['payment_transaction'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
OrderProcessPaymentResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
OrderProcessPaymentResponse.prototype['warning'] = undefined;






export default OrderProcessPaymentResponse;

