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
 * The ItemPaymentProcessing model module.
 * @module com.ultracart.admin.v2.models/ItemPaymentProcessing
 * @version 4.1.16
 */
class ItemPaymentProcessing {
    /**
     * Constructs a new <code>ItemPaymentProcessing</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemPaymentProcessing
     */
    constructor() { 
        
        ItemPaymentProcessing.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemPaymentProcessing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemPaymentProcessing} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemPaymentProcessing} The populated <code>ItemPaymentProcessing</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemPaymentProcessing();

            if (data.hasOwnProperty('block_prepaid')) {
                obj['block_prepaid'] = ApiClient.convertToType(data['block_prepaid'], 'Boolean');
            }
            if (data.hasOwnProperty('block_refunds')) {
                obj['block_refunds'] = ApiClient.convertToType(data['block_refunds'], 'Boolean');
            }
            if (data.hasOwnProperty('credit_card_transaction_type')) {
                obj['credit_card_transaction_type'] = ApiClient.convertToType(data['credit_card_transaction_type'], 'String');
            }
            if (data.hasOwnProperty('no_realtime_charge')) {
                obj['no_realtime_charge'] = ApiClient.convertToType(data['no_realtime_charge'], 'Boolean');
            }
            if (data.hasOwnProperty('payment_method_validity')) {
                obj['payment_method_validity'] = ApiClient.convertToType(data['payment_method_validity'], ['String']);
            }
            if (data.hasOwnProperty('rotating_transaction_gateway_codes')) {
                obj['rotating_transaction_gateway_codes'] = ApiClient.convertToType(data['rotating_transaction_gateway_codes'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * True if prepaid cards should be blocked from buying this item
 * @member {Boolean} block_prepaid
 */
ItemPaymentProcessing.prototype['block_prepaid'] = undefined;

/**
 * True if this item should block any refund attempts, set to false otherwise, null value will not update the field
 * @member {Boolean} block_refunds
 */
ItemPaymentProcessing.prototype['block_refunds'] = undefined;

/**
 * Credit card transaction type
 * @member {String} credit_card_transaction_type
 */
ItemPaymentProcessing.prototype['credit_card_transaction_type'] = undefined;

/**
 * True if no real-time charge should be performed on this item.
 * @member {Boolean} no_realtime_charge
 */
ItemPaymentProcessing.prototype['no_realtime_charge'] = undefined;

/**
 * Payment method validity
 * @member {Array.<String>} payment_method_validity
 */
ItemPaymentProcessing.prototype['payment_method_validity'] = undefined;

/**
 * Rotating transaction gateway codes
 * @member {Array.<String>} rotating_transaction_gateway_codes
 */
ItemPaymentProcessing.prototype['rotating_transaction_gateway_codes'] = undefined;






export default ItemPaymentProcessing;

