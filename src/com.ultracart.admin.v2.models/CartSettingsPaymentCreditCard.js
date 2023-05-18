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
 * The CartSettingsPaymentCreditCard model module.
 * @module com.ultracart.admin.v2.models/CartSettingsPaymentCreditCard
 * @version 4.0.155
 */
class CartSettingsPaymentCreditCard {
    /**
     * Constructs a new <code>CartSettingsPaymentCreditCard</code>.
     * @alias module:com.ultracart.admin.v2.models/CartSettingsPaymentCreditCard
     */
    constructor() { 
        
        CartSettingsPaymentCreditCard.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartSettingsPaymentCreditCard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartSettingsPaymentCreditCard} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartSettingsPaymentCreditCard} The populated <code>CartSettingsPaymentCreditCard</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartSettingsPaymentCreditCard();

            if (data.hasOwnProperty('collect_credit_card_verification_number')) {
                obj['collect_credit_card_verification_number'] = ApiClient.convertToType(data['collect_credit_card_verification_number'], 'Boolean');
            }
            if (data.hasOwnProperty('credit_card_types')) {
                obj['credit_card_types'] = ApiClient.convertToType(data['credit_card_types'], ['String']);
            }
            if (data.hasOwnProperty('hosted_fields_shopping_cart_token')) {
                obj['hosted_fields_shopping_cart_token'] = ApiClient.convertToType(data['hosted_fields_shopping_cart_token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * True if the credit card verification number should be collected
 * @member {Boolean} collect_credit_card_verification_number
 */
CartSettingsPaymentCreditCard.prototype['collect_credit_card_verification_number'] = undefined;

/**
 * Available credit card types
 * @member {Array.<String>} credit_card_types
 */
CartSettingsPaymentCreditCard.prototype['credit_card_types'] = undefined;

/**
 * The shoppingCartToken needed for proper initialization of hosted fields collection
 * @member {String} hosted_fields_shopping_cart_token
 */
CartSettingsPaymentCreditCard.prototype['hosted_fields_shopping_cart_token'] = undefined;






export default CartSettingsPaymentCreditCard;

