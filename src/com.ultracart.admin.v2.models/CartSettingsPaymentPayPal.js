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
 * The CartSettingsPaymentPayPal model module.
 * @module com.ultracart.admin.v2.models/CartSettingsPaymentPayPal
 * @version 4.1.16
 */
class CartSettingsPaymentPayPal {
    /**
     * Constructs a new <code>CartSettingsPaymentPayPal</code>.
     * @alias module:com.ultracart.admin.v2.models/CartSettingsPaymentPayPal
     */
    constructor() { 
        
        CartSettingsPaymentPayPal.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartSettingsPaymentPayPal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartSettingsPaymentPayPal} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartSettingsPaymentPayPal} The populated <code>CartSettingsPaymentPayPal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartSettingsPaymentPayPal();

            if (data.hasOwnProperty('paypal_button_alt_text')) {
                obj['paypal_button_alt_text'] = ApiClient.convertToType(data['paypal_button_alt_text'], 'String');
            }
            if (data.hasOwnProperty('paypal_button_url')) {
                obj['paypal_button_url'] = ApiClient.convertToType(data['paypal_button_url'], 'String');
            }
            if (data.hasOwnProperty('paypal_credit_button_url')) {
                obj['paypal_credit_button_url'] = ApiClient.convertToType(data['paypal_credit_button_url'], 'String');
            }
            if (data.hasOwnProperty('paypal_credit_legal_image_url')) {
                obj['paypal_credit_legal_image_url'] = ApiClient.convertToType(data['paypal_credit_legal_image_url'], 'String');
            }
            if (data.hasOwnProperty('paypal_credit_legal_url')) {
                obj['paypal_credit_legal_url'] = ApiClient.convertToType(data['paypal_credit_legal_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * PayPal button alt text
 * @member {String} paypal_button_alt_text
 */
CartSettingsPaymentPayPal.prototype['paypal_button_alt_text'] = undefined;

/**
 * PayPal button URL
 * @member {String} paypal_button_url
 */
CartSettingsPaymentPayPal.prototype['paypal_button_url'] = undefined;

/**
 * PayPal Credit button URL
 * @member {String} paypal_credit_button_url
 */
CartSettingsPaymentPayPal.prototype['paypal_credit_button_url'] = undefined;

/**
 * PayPal Credit legal image URL
 * @member {String} paypal_credit_legal_image_url
 */
CartSettingsPaymentPayPal.prototype['paypal_credit_legal_image_url'] = undefined;

/**
 * PayPal Credit legal URL
 * @member {String} paypal_credit_legal_url
 */
CartSettingsPaymentPayPal.prototype['paypal_credit_legal_url'] = undefined;






export default CartSettingsPaymentPayPal;

