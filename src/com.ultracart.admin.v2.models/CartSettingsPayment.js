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
import CartSettingsPaymentAmazon from './CartSettingsPaymentAmazon';
import CartSettingsPaymentCreditCard from './CartSettingsPaymentCreditCard';
import CartSettingsPaymentPayPal from './CartSettingsPaymentPayPal';

/**
 * The CartSettingsPayment model module.
 * @module com.ultracart.admin.v2.models/CartSettingsPayment
 * @version 4.0.94-RC
 */
class CartSettingsPayment {
    /**
     * Constructs a new <code>CartSettingsPayment</code>.
     * @alias module:com.ultracart.admin.v2.models/CartSettingsPayment
     */
    constructor() { 
        
        CartSettingsPayment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartSettingsPayment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartSettingsPayment} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartSettingsPayment} The populated <code>CartSettingsPayment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartSettingsPayment();

            if (data.hasOwnProperty('amazon')) {
                obj['amazon'] = CartSettingsPaymentAmazon.constructFromObject(data['amazon']);
            }
            if (data.hasOwnProperty('credit_card')) {
                obj['credit_card'] = CartSettingsPaymentCreditCard.constructFromObject(data['credit_card']);
            }
            if (data.hasOwnProperty('need_payment')) {
                obj['need_payment'] = ApiClient.convertToType(data['need_payment'], 'Boolean');
            }
            if (data.hasOwnProperty('paypal')) {
                obj['paypal'] = CartSettingsPaymentPayPal.constructFromObject(data['paypal']);
            }
            if (data.hasOwnProperty('supports_amazon')) {
                obj['supports_amazon'] = ApiClient.convertToType(data['supports_amazon'], 'Boolean');
            }
            if (data.hasOwnProperty('supports_check')) {
                obj['supports_check'] = ApiClient.convertToType(data['supports_check'], 'Boolean');
            }
            if (data.hasOwnProperty('supports_cod')) {
                obj['supports_cod'] = ApiClient.convertToType(data['supports_cod'], 'Boolean');
            }
            if (data.hasOwnProperty('supports_credit_card')) {
                obj['supports_credit_card'] = ApiClient.convertToType(data['supports_credit_card'], 'Boolean');
            }
            if (data.hasOwnProperty('supports_money_order')) {
                obj['supports_money_order'] = ApiClient.convertToType(data['supports_money_order'], 'Boolean');
            }
            if (data.hasOwnProperty('supports_paypal')) {
                obj['supports_paypal'] = ApiClient.convertToType(data['supports_paypal'], 'Boolean');
            }
            if (data.hasOwnProperty('supports_purchase_order')) {
                obj['supports_purchase_order'] = ApiClient.convertToType(data['supports_purchase_order'], 'Boolean');
            }
            if (data.hasOwnProperty('supports_quote_request')) {
                obj['supports_quote_request'] = ApiClient.convertToType(data['supports_quote_request'], 'Boolean');
            }
            if (data.hasOwnProperty('supports_wire_transfer')) {
                obj['supports_wire_transfer'] = ApiClient.convertToType(data['supports_wire_transfer'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/CartSettingsPaymentAmazon} amazon
 */
CartSettingsPayment.prototype['amazon'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CartSettingsPaymentCreditCard} credit_card
 */
CartSettingsPayment.prototype['credit_card'] = undefined;

/**
 * True if this card requires a payment from the customer
 * @member {Boolean} need_payment
 */
CartSettingsPayment.prototype['need_payment'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CartSettingsPaymentPayPal} paypal
 */
CartSettingsPayment.prototype['paypal'] = undefined;

/**
 * True if Amazon payments are available on this order
 * @member {Boolean} supports_amazon
 */
CartSettingsPayment.prototype['supports_amazon'] = undefined;

/**
 * True if check payments are available on this order
 * @member {Boolean} supports_check
 */
CartSettingsPayment.prototype['supports_check'] = undefined;

/**
 * True if COD payments are available on this order
 * @member {Boolean} supports_cod
 */
CartSettingsPayment.prototype['supports_cod'] = undefined;

/**
 * True if credit card payments are available on this order
 * @member {Boolean} supports_credit_card
 */
CartSettingsPayment.prototype['supports_credit_card'] = undefined;

/**
 * True if money order payments are available on this order
 * @member {Boolean} supports_money_order
 */
CartSettingsPayment.prototype['supports_money_order'] = undefined;

/**
 * True if PayPal payments are available on this order
 * @member {Boolean} supports_paypal
 */
CartSettingsPayment.prototype['supports_paypal'] = undefined;

/**
 * True if purchase order payments are available on this order
 * @member {Boolean} supports_purchase_order
 */
CartSettingsPayment.prototype['supports_purchase_order'] = undefined;

/**
 * True if quote requests payments are available on this order
 * @member {Boolean} supports_quote_request
 */
CartSettingsPayment.prototype['supports_quote_request'] = undefined;

/**
 * True if wire transfer payments are available on this order
 * @member {Boolean} supports_wire_transfer
 */
CartSettingsPayment.prototype['supports_wire_transfer'] = undefined;






export default CartSettingsPayment;

