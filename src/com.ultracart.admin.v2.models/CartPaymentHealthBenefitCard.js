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
 * The CartPaymentHealthBenefitCard model module.
 * @module com.ultracart.admin.v2.models/CartPaymentHealthBenefitCard
 * @version 4.0.187
 */
class CartPaymentHealthBenefitCard {
    /**
     * Constructs a new <code>CartPaymentHealthBenefitCard</code>.
     * @alias module:com.ultracart.admin.v2.models/CartPaymentHealthBenefitCard
     */
    constructor() { 
        
        CartPaymentHealthBenefitCard.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartPaymentHealthBenefitCard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartPaymentHealthBenefitCard} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartPaymentHealthBenefitCard} The populated <code>CartPaymentHealthBenefitCard</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartPaymentHealthBenefitCard();

            if (data.hasOwnProperty('health_benefit_card_expiration_month')) {
                obj['health_benefit_card_expiration_month'] = ApiClient.convertToType(data['health_benefit_card_expiration_month'], 'Number');
            }
            if (data.hasOwnProperty('health_benefit_card_expiration_year')) {
                obj['health_benefit_card_expiration_year'] = ApiClient.convertToType(data['health_benefit_card_expiration_year'], 'Number');
            }
            if (data.hasOwnProperty('health_benefit_card_number')) {
                obj['health_benefit_card_number'] = ApiClient.convertToType(data['health_benefit_card_number'], 'String');
            }
            if (data.hasOwnProperty('health_benefit_card_number_token')) {
                obj['health_benefit_card_number_token'] = ApiClient.convertToType(data['health_benefit_card_number_token'], 'String');
            }
            if (data.hasOwnProperty('health_benefit_card_verification_number')) {
                obj['health_benefit_card_verification_number'] = ApiClient.convertToType(data['health_benefit_card_verification_number'], 'String');
            }
            if (data.hasOwnProperty('health_benefit_card_verification_number_token')) {
                obj['health_benefit_card_verification_number_token'] = ApiClient.convertToType(data['health_benefit_card_verification_number_token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Health benefit expiration month (1-12)
 * @member {Number} health_benefit_card_expiration_month
 */
CartPaymentHealthBenefitCard.prototype['health_benefit_card_expiration_month'] = undefined;

/**
 * Health benefit card expiration year (four digit year)
 * @member {Number} health_benefit_card_expiration_year
 */
CartPaymentHealthBenefitCard.prototype['health_benefit_card_expiration_year'] = undefined;

/**
 * Health benefit card number (masked to the last 4)
 * @member {String} health_benefit_card_number
 */
CartPaymentHealthBenefitCard.prototype['health_benefit_card_number'] = undefined;

/**
 * Hosted field token for the card number
 * @member {String} health_benefit_card_number_token
 */
CartPaymentHealthBenefitCard.prototype['health_benefit_card_number_token'] = undefined;

/**
 * Health benefit card verification number (masked)
 * @member {String} health_benefit_card_verification_number
 */
CartPaymentHealthBenefitCard.prototype['health_benefit_card_verification_number'] = undefined;

/**
 * Hosted field token for the health benefit card verification number
 * @member {String} health_benefit_card_verification_number_token
 */
CartPaymentHealthBenefitCard.prototype['health_benefit_card_verification_number_token'] = undefined;






export default CartPaymentHealthBenefitCard;

