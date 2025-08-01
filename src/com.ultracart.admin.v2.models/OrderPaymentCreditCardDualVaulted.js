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
import OrderPaymentCreditCardDualVaultedProperty from './OrderPaymentCreditCardDualVaultedProperty';

/**
 * The OrderPaymentCreditCardDualVaulted model module.
 * @module com.ultracart.admin.v2.models/OrderPaymentCreditCardDualVaulted
 * @version 4.1.16
 */
class OrderPaymentCreditCardDualVaulted {
    /**
     * Constructs a new <code>OrderPaymentCreditCardDualVaulted</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderPaymentCreditCardDualVaulted
     */
    constructor() { 
        
        OrderPaymentCreditCardDualVaulted.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderPaymentCreditCardDualVaulted</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderPaymentCreditCardDualVaulted} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderPaymentCreditCardDualVaulted} The populated <code>OrderPaymentCreditCardDualVaulted</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderPaymentCreditCardDualVaulted();

            if (data.hasOwnProperty('gateway_name')) {
                obj['gateway_name'] = ApiClient.convertToType(data['gateway_name'], 'String');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], [OrderPaymentCreditCardDualVaultedProperty]);
            }
            if (data.hasOwnProperty('rotating_transaction_gateway_code')) {
                obj['rotating_transaction_gateway_code'] = ApiClient.convertToType(data['rotating_transaction_gateway_code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} gateway_name
 */
OrderPaymentCreditCardDualVaulted.prototype['gateway_name'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderPaymentCreditCardDualVaultedProperty>} properties
 */
OrderPaymentCreditCardDualVaulted.prototype['properties'] = undefined;

/**
 * @member {String} rotating_transaction_gateway_code
 */
OrderPaymentCreditCardDualVaulted.prototype['rotating_transaction_gateway_code'] = undefined;






export default OrderPaymentCreditCardDualVaulted;

