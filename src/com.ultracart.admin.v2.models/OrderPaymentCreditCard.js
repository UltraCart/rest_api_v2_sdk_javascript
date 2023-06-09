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
import OrderPaymentCreditCardDualVaulted from './OrderPaymentCreditCardDualVaulted';

/**
 * The OrderPaymentCreditCard model module.
 * @module com.ultracart.admin.v2.models/OrderPaymentCreditCard
 * @version 4.0.159
 */
class OrderPaymentCreditCard {
    /**
     * Constructs a new <code>OrderPaymentCreditCard</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderPaymentCreditCard
     */
    constructor() { 
        
        OrderPaymentCreditCard.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderPaymentCreditCard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderPaymentCreditCard} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderPaymentCreditCard} The populated <code>OrderPaymentCreditCard</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderPaymentCreditCard();

            if (data.hasOwnProperty('card_auth_ticket')) {
                obj['card_auth_ticket'] = ApiClient.convertToType(data['card_auth_ticket'], 'String');
            }
            if (data.hasOwnProperty('card_authorization_amount')) {
                obj['card_authorization_amount'] = ApiClient.convertToType(data['card_authorization_amount'], 'Number');
            }
            if (data.hasOwnProperty('card_authorization_dts')) {
                obj['card_authorization_dts'] = ApiClient.convertToType(data['card_authorization_dts'], 'String');
            }
            if (data.hasOwnProperty('card_authorization_reference_number')) {
                obj['card_authorization_reference_number'] = ApiClient.convertToType(data['card_authorization_reference_number'], 'String');
            }
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
            if (data.hasOwnProperty('card_number_truncated')) {
                obj['card_number_truncated'] = ApiClient.convertToType(data['card_number_truncated'], 'Boolean');
            }
            if (data.hasOwnProperty('card_type')) {
                obj['card_type'] = ApiClient.convertToType(data['card_type'], 'String');
            }
            if (data.hasOwnProperty('card_verification_number_token')) {
                obj['card_verification_number_token'] = ApiClient.convertToType(data['card_verification_number_token'], 'String');
            }
            if (data.hasOwnProperty('dual_vaulted')) {
                obj['dual_vaulted'] = OrderPaymentCreditCardDualVaulted.constructFromObject(data['dual_vaulted']);
            }
        }
        return obj;
    }


}

/**
 * Card authorization ticket
 * @member {String} card_auth_ticket
 */
OrderPaymentCreditCard.prototype['card_auth_ticket'] = undefined;

/**
 * Card authorization amount
 * @member {Number} card_authorization_amount
 */
OrderPaymentCreditCard.prototype['card_authorization_amount'] = undefined;

/**
 * Card authorization date/time
 * @member {String} card_authorization_dts
 */
OrderPaymentCreditCard.prototype['card_authorization_dts'] = undefined;

/**
 * Card authorization reference number
 * @member {String} card_authorization_reference_number
 */
OrderPaymentCreditCard.prototype['card_authorization_reference_number'] = undefined;

/**
 * Card expiration month (1-12)
 * @member {Number} card_expiration_month
 */
OrderPaymentCreditCard.prototype['card_expiration_month'] = undefined;

/**
 * Card expiration year (Four digit year)
 * @member {Number} card_expiration_year
 */
OrderPaymentCreditCard.prototype['card_expiration_year'] = undefined;

/**
 * Card number (masked to last 4)
 * @member {String} card_number
 */
OrderPaymentCreditCard.prototype['card_number'] = undefined;

/**
 * Card number token from hosted fields used to update the card number
 * @member {String} card_number_token
 */
OrderPaymentCreditCard.prototype['card_number_token'] = undefined;

/**
 * True if the card has been truncated
 * @member {Boolean} card_number_truncated
 */
OrderPaymentCreditCard.prototype['card_number_truncated'] = undefined;

/**
 * Card type
 * @member {module:com.ultracart.admin.v2.models/OrderPaymentCreditCard.CardTypeEnum} card_type
 */
OrderPaymentCreditCard.prototype['card_type'] = undefined;

/**
 * Card verification number token from hosted fields, only for import/insert of new orders, completely ignored for updates, and always null/empty for queries
 * @member {String} card_verification_number_token
 */
OrderPaymentCreditCard.prototype['card_verification_number_token'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/OrderPaymentCreditCardDualVaulted} dual_vaulted
 */
OrderPaymentCreditCard.prototype['dual_vaulted'] = undefined;





/**
 * Allowed values for the <code>card_type</code> property.
 * @enum {String}
 * @readonly
 */
OrderPaymentCreditCard['CardTypeEnum'] = {

    /**
     * value: "AMEX"
     * @const
     */
    "AMEX": "AMEX",

    /**
     * value: "Diners Club"
     * @const
     */
    "Diners Club": "Diners Club",

    /**
     * value: "Discover"
     * @const
     */
    "Discover": "Discover",

    /**
     * value: "JCB"
     * @const
     */
    "JCB": "JCB",

    /**
     * value: "MasterCard"
     * @const
     */
    "MasterCard": "MasterCard",

    /**
     * value: "VISA"
     * @const
     */
    "VISA": "VISA"
};



export default OrderPaymentCreditCard;

