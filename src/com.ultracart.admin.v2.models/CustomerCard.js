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
 * The CustomerCard model module.
 * @module com.ultracart.admin.v2.models/CustomerCard
 * @version 4.0.109-RC
 */
class CustomerCard {
    /**
     * Constructs a new <code>CustomerCard</code>.
     * @alias module:com.ultracart.admin.v2.models/CustomerCard
     */
    constructor() { 
        
        CustomerCard.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerCard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerCard} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerCard} The populated <code>CustomerCard</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerCard();

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
            if (data.hasOwnProperty('customer_profile_credit_card_id')) {
                obj['customer_profile_credit_card_id'] = ApiClient.convertToType(data['customer_profile_credit_card_id'], 'Number');
            }
            if (data.hasOwnProperty('customer_profile_oid')) {
                obj['customer_profile_oid'] = ApiClient.convertToType(data['customer_profile_oid'], 'Number');
            }
            if (data.hasOwnProperty('last_used_dts')) {
                obj['last_used_dts'] = ApiClient.convertToType(data['last_used_dts'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Card expiration month (1-12)
 * @member {Number} card_expiration_month
 */
CustomerCard.prototype['card_expiration_month'] = undefined;

/**
 * Card expiration year (four digit year)
 * @member {Number} card_expiration_year
 */
CustomerCard.prototype['card_expiration_year'] = undefined;

/**
 * Card number (masked to the last 4)
 * @member {String} card_number
 */
CustomerCard.prototype['card_number'] = undefined;

/**
 * Hosted field token for the card number
 * @member {String} card_number_token
 */
CustomerCard.prototype['card_number_token'] = undefined;

/**
 * Card type
 * @member {String} card_type
 */
CustomerCard.prototype['card_type'] = undefined;

/**
 * ID of the stored credit card to use
 * @member {Number} customer_profile_credit_card_id
 */
CustomerCard.prototype['customer_profile_credit_card_id'] = undefined;

/**
 * Customer profile object identifier
 * @member {Number} customer_profile_oid
 */
CustomerCard.prototype['customer_profile_oid'] = undefined;

/**
 * Last used date
 * @member {String} last_used_dts
 */
CustomerCard.prototype['last_used_dts'] = undefined;






export default CustomerCard;

