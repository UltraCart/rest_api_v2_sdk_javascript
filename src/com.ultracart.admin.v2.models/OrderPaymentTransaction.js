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
import OrderPaymentTransactionDetail from './OrderPaymentTransactionDetail';

/**
 * The OrderPaymentTransaction model module.
 * @module com.ultracart.admin.v2.models/OrderPaymentTransaction
 * @version 4.0.110-RC
 */
class OrderPaymentTransaction {
    /**
     * Constructs a new <code>OrderPaymentTransaction</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderPaymentTransaction
     */
    constructor() { 
        
        OrderPaymentTransaction.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderPaymentTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderPaymentTransaction} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderPaymentTransaction} The populated <code>OrderPaymentTransaction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderPaymentTransaction();

            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], [OrderPaymentTransactionDetail]);
            }
            if (data.hasOwnProperty('successful')) {
                obj['successful'] = ApiClient.convertToType(data['successful'], 'Boolean');
            }
            if (data.hasOwnProperty('transaction_gateway')) {
                obj['transaction_gateway'] = ApiClient.convertToType(data['transaction_gateway'], 'String');
            }
            if (data.hasOwnProperty('transaction_timestamp')) {
                obj['transaction_timestamp'] = ApiClient.convertToType(data['transaction_timestamp'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Details
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderPaymentTransactionDetail>} details
 */
OrderPaymentTransaction.prototype['details'] = undefined;

/**
 * True if the transaction was successful
 * @member {Boolean} successful
 */
OrderPaymentTransaction.prototype['successful'] = undefined;

/**
 * Transaction gateway
 * @member {String} transaction_gateway
 */
OrderPaymentTransaction.prototype['transaction_gateway'] = undefined;

/**
 * Transaction date/time
 * @member {String} transaction_timestamp
 */
OrderPaymentTransaction.prototype['transaction_timestamp'] = undefined;






export default OrderPaymentTransaction;

