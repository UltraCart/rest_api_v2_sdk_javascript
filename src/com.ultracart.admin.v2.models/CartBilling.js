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
 * The CartBilling model module.
 * @module com.ultracart.admin.v2.models/CartBilling
 * @version 4.0.70-RC
 */
class CartBilling {
    /**
     * Constructs a new <code>CartBilling</code>.
     * @alias module:com.ultracart.admin.v2.models/CartBilling
     */
    constructor() { 
        
        CartBilling.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartBilling</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartBilling} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartBilling} The populated <code>CartBilling</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartBilling();

            if (data.hasOwnProperty('address1')) {
                obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
            }
            if (data.hasOwnProperty('address2')) {
                obj['address2'] = ApiClient.convertToType(data['address2'], 'String');
            }
            if (data.hasOwnProperty('cc_emails')) {
                obj['cc_emails'] = ApiClient.convertToType(data['cc_emails'], ['String']);
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('company')) {
                obj['company'] = ApiClient.convertToType(data['company'], 'String');
            }
            if (data.hasOwnProperty('country_code')) {
                obj['country_code'] = ApiClient.convertToType(data['country_code'], 'String');
            }
            if (data.hasOwnProperty('day_phone')) {
                obj['day_phone'] = ApiClient.convertToType(data['day_phone'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('email_confirm')) {
                obj['email_confirm'] = ApiClient.convertToType(data['email_confirm'], 'String');
            }
            if (data.hasOwnProperty('evening_phone')) {
                obj['evening_phone'] = ApiClient.convertToType(data['evening_phone'], 'String');
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('postal_code')) {
                obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
            }
            if (data.hasOwnProperty('state_region')) {
                obj['state_region'] = ApiClient.convertToType(data['state_region'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Address line 1
 * @member {String} address1
 */
CartBilling.prototype['address1'] = undefined;

/**
 * Address line 2
 * @member {String} address2
 */
CartBilling.prototype['address2'] = undefined;

/**
 * CC emails.  Multiple allowed, but total length of all emails can not exceed 100 characters.
 * @member {Array.<String>} cc_emails
 */
CartBilling.prototype['cc_emails'] = undefined;

/**
 * City
 * @member {String} city
 */
CartBilling.prototype['city'] = undefined;

/**
 * Company
 * @member {String} company
 */
CartBilling.prototype['company'] = undefined;

/**
 * ISO-3166 two letter country code
 * @member {String} country_code
 */
CartBilling.prototype['country_code'] = undefined;

/**
 * Day phone
 * @member {String} day_phone
 */
CartBilling.prototype['day_phone'] = undefined;

/**
 * Email
 * @member {String} email
 */
CartBilling.prototype['email'] = undefined;

/**
 * Email entered for confirmation
 * @member {String} email_confirm
 */
CartBilling.prototype['email_confirm'] = undefined;

/**
 * Evening phone
 * @member {String} evening_phone
 */
CartBilling.prototype['evening_phone'] = undefined;

/**
 * First name
 * @member {String} first_name
 */
CartBilling.prototype['first_name'] = undefined;

/**
 * Last name
 * @member {String} last_name
 */
CartBilling.prototype['last_name'] = undefined;

/**
 * Postal code
 * @member {String} postal_code
 */
CartBilling.prototype['postal_code'] = undefined;

/**
 * State for United States otherwise region or province for other countries
 * @member {String} state_region
 */
CartBilling.prototype['state_region'] = undefined;

/**
 * Title
 * @member {String} title
 */
CartBilling.prototype['title'] = undefined;






export default CartBilling;

