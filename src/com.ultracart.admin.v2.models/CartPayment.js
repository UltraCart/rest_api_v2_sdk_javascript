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
import CartPaymentAffirm from './CartPaymentAffirm';
import CartPaymentAmazon from './CartPaymentAmazon';
import CartPaymentCheck from './CartPaymentCheck';
import CartPaymentCreditCard from './CartPaymentCreditCard';
import CartPaymentHealthBenefitCard from './CartPaymentHealthBenefitCard';
import CartPaymentPurchaseOrder from './CartPaymentPurchaseOrder';

/**
 * The CartPayment model module.
 * @module com.ultracart.admin.v2.models/CartPayment
 * @version 4.1.16
 */
class CartPayment {
    /**
     * Constructs a new <code>CartPayment</code>.
     * @alias module:com.ultracart.admin.v2.models/CartPayment
     */
    constructor() { 
        
        CartPayment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartPayment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartPayment} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartPayment} The populated <code>CartPayment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartPayment();

            if (data.hasOwnProperty('affirm')) {
                obj['affirm'] = CartPaymentAffirm.constructFromObject(data['affirm']);
            }
            if (data.hasOwnProperty('amazon')) {
                obj['amazon'] = CartPaymentAmazon.constructFromObject(data['amazon']);
            }
            if (data.hasOwnProperty('check')) {
                obj['check'] = CartPaymentCheck.constructFromObject(data['check']);
            }
            if (data.hasOwnProperty('credit_card')) {
                obj['credit_card'] = CartPaymentCreditCard.constructFromObject(data['credit_card']);
            }
            if (data.hasOwnProperty('health_benefit_card')) {
                obj['health_benefit_card'] = CartPaymentHealthBenefitCard.constructFromObject(data['health_benefit_card']);
            }
            if (data.hasOwnProperty('payment_method')) {
                obj['payment_method'] = ApiClient.convertToType(data['payment_method'], 'String');
            }
            if (data.hasOwnProperty('purchase_order')) {
                obj['purchase_order'] = CartPaymentPurchaseOrder.constructFromObject(data['purchase_order']);
            }
            if (data.hasOwnProperty('rtg_code')) {
                obj['rtg_code'] = ApiClient.convertToType(data['rtg_code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/CartPaymentAffirm} affirm
 */
CartPayment.prototype['affirm'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CartPaymentAmazon} amazon
 */
CartPayment.prototype['amazon'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CartPaymentCheck} check
 */
CartPayment.prototype['check'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CartPaymentCreditCard} credit_card
 */
CartPayment.prototype['credit_card'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CartPaymentHealthBenefitCard} health_benefit_card
 */
CartPayment.prototype['health_benefit_card'] = undefined;

/**
 * Payment method
 * @member {String} payment_method
 */
CartPayment.prototype['payment_method'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CartPaymentPurchaseOrder} purchase_order
 */
CartPayment.prototype['purchase_order'] = undefined;

/**
 * Rotating transaction gateway code
 * @member {String} rtg_code
 */
CartPayment.prototype['rtg_code'] = undefined;






export default CartPayment;

