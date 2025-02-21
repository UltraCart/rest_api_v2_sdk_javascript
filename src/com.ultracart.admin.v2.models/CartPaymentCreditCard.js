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
 * The CartPaymentCreditCard model module.
 * @module com.ultracart.admin.v2.models/CartPaymentCreditCard
 * @version 4.1.0
 */
class CartPaymentCreditCard {
    /**
     * Constructs a new <code>CartPaymentCreditCard</code>.
     * @alias module:com.ultracart.admin.v2.models/CartPaymentCreditCard
     */
    constructor() { 
        
        CartPaymentCreditCard.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartPaymentCreditCard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartPaymentCreditCard} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartPaymentCreditCard} The populated <code>CartPaymentCreditCard</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartPaymentCreditCard();

            if (data.hasOwnProperty('card_expiration_month')) {
                obj['card_expiration_month'] = ApiClient.convertToType(data['card_expiration_month'], 'Number');
            }
            if (data.hasOwnProperty('card_expiration_year')) {
                obj['card_expiration_year'] = ApiClient.convertToType(data['card_expiration_year'], 'Number');
            }
            if (data.hasOwnProperty('card_number')) {
                obj['card_number'] = ApiClient.convertToType(data['card_number'], 'String');
            }
            if (data.hasOwnProperty('card_number_token')) {
                obj['card_number_token'] = ApiClient.convertToType(data['card_number_token'], 'String');
            }
            if (data.hasOwnProperty('card_type')) {
                obj['card_type'] = ApiClient.convertToType(data['card_type'], 'String');
            }
            if (data.hasOwnProperty('card_verification_number')) {
                obj['card_verification_number'] = ApiClient.convertToType(data['card_verification_number'], 'String');
            }
            if (data.hasOwnProperty('card_verification_number_token')) {
                obj['card_verification_number_token'] = ApiClient.convertToType(data['card_verification_number_token'], 'String');
            }
            if (data.hasOwnProperty('customer_profile_credit_card_id')) {
                obj['customer_profile_credit_card_id'] = ApiClient.convertToType(data['customer_profile_credit_card_id'], 'Number');
            }
            if (data.hasOwnProperty('store_credit_card')) {
                obj['store_credit_card'] = ApiClient.convertToType(data['store_credit_card'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Card expiration month (1-12)
 * @member {Number} card_expiration_month
 */
CartPaymentCreditCard.prototype['card_expiration_month'] = undefined;

/**
 * Card expiration year (four digit year)
 * @member {Number} card_expiration_year
 */
CartPaymentCreditCard.prototype['card_expiration_year'] = undefined;

/**
 * Card number (masked to the last 4)
 * @member {String} card_number
 */
CartPaymentCreditCard.prototype['card_number'] = undefined;

/**
 * Hosted field token for the card number
 * @member {String} card_number_token
 */
CartPaymentCreditCard.prototype['card_number_token'] = undefined;

/**
 * Card type
 * @member {String} card_type
 */
CartPaymentCreditCard.prototype['card_type'] = undefined;

/**
 * Card verification number (masked)
 * @member {String} card_verification_number
 */
CartPaymentCreditCard.prototype['card_verification_number'] = undefined;

/**
 * Hosted field token for the card verification number
 * @member {String} card_verification_number_token
 */
CartPaymentCreditCard.prototype['card_verification_number_token'] = undefined;

/**
 * ID of the stored credit card to use
 * @member {Number} customer_profile_credit_card_id
 */
CartPaymentCreditCard.prototype['customer_profile_credit_card_id'] = undefined;

/**
 * True if the customer wants to store the card on their profile for future re-use
 * @member {Boolean} store_credit_card
 */
CartPaymentCreditCard.prototype['store_credit_card'] = undefined;






export default CartPaymentCreditCard;

