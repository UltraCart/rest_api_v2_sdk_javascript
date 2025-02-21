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
import Currency from './Currency';
import OrderPaymentCheck from './OrderPaymentCheck';
import OrderPaymentCreditCard from './OrderPaymentCreditCard';
import OrderPaymentECheck from './OrderPaymentECheck';
import OrderPaymentHealthBenefitCard from './OrderPaymentHealthBenefitCard';
import OrderPaymentInsurance from './OrderPaymentInsurance';
import OrderPaymentPayPal from './OrderPaymentPayPal';
import OrderPaymentPurchaseOrder from './OrderPaymentPurchaseOrder';
import OrderPaymentTransaction from './OrderPaymentTransaction';

/**
 * The OrderPayment model module.
 * @module com.ultracart.admin.v2.models/OrderPayment
 * @version 4.1.0
 */
class OrderPayment {
    /**
     * Constructs a new <code>OrderPayment</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderPayment
     */
    constructor() { 
        
        OrderPayment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderPayment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderPayment} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderPayment} The populated <code>OrderPayment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderPayment();

            if (data.hasOwnProperty('check')) {
                obj['check'] = OrderPaymentCheck.constructFromObject(data['check']);
            }
            if (data.hasOwnProperty('credit_card')) {
                obj['credit_card'] = OrderPaymentCreditCard.constructFromObject(data['credit_card']);
            }
            if (data.hasOwnProperty('echeck')) {
                obj['echeck'] = OrderPaymentECheck.constructFromObject(data['echeck']);
            }
            if (data.hasOwnProperty('health_benefit_card')) {
                obj['health_benefit_card'] = OrderPaymentHealthBenefitCard.constructFromObject(data['health_benefit_card']);
            }
            if (data.hasOwnProperty('hold_for_fraud_review')) {
                obj['hold_for_fraud_review'] = ApiClient.convertToType(data['hold_for_fraud_review'], 'Boolean');
            }
            if (data.hasOwnProperty('insurance')) {
                obj['insurance'] = OrderPaymentInsurance.constructFromObject(data['insurance']);
            }
            if (data.hasOwnProperty('payment_dts')) {
                obj['payment_dts'] = ApiClient.convertToType(data['payment_dts'], 'String');
            }
            if (data.hasOwnProperty('payment_method')) {
                obj['payment_method'] = ApiClient.convertToType(data['payment_method'], 'String');
            }
            if (data.hasOwnProperty('payment_method_accounting_code')) {
                obj['payment_method_accounting_code'] = ApiClient.convertToType(data['payment_method_accounting_code'], 'String');
            }
            if (data.hasOwnProperty('payment_method_deposit_to_account')) {
                obj['payment_method_deposit_to_account'] = ApiClient.convertToType(data['payment_method_deposit_to_account'], 'String');
            }
            if (data.hasOwnProperty('payment_status')) {
                obj['payment_status'] = ApiClient.convertToType(data['payment_status'], 'String');
            }
            if (data.hasOwnProperty('paypal')) {
                obj['paypal'] = OrderPaymentPayPal.constructFromObject(data['paypal']);
            }
            if (data.hasOwnProperty('purchase_order')) {
                obj['purchase_order'] = OrderPaymentPurchaseOrder.constructFromObject(data['purchase_order']);
            }
            if (data.hasOwnProperty('rotating_transaction_gateway_code')) {
                obj['rotating_transaction_gateway_code'] = ApiClient.convertToType(data['rotating_transaction_gateway_code'], 'String');
            }
            if (data.hasOwnProperty('surcharge')) {
                obj['surcharge'] = Currency.constructFromObject(data['surcharge']);
            }
            if (data.hasOwnProperty('surcharge_accounting_code')) {
                obj['surcharge_accounting_code'] = ApiClient.convertToType(data['surcharge_accounting_code'], 'String');
            }
            if (data.hasOwnProperty('surcharge_transaction_fee')) {
                obj['surcharge_transaction_fee'] = ApiClient.convertToType(data['surcharge_transaction_fee'], 'Number');
            }
            if (data.hasOwnProperty('surcharge_transaction_percentage')) {
                obj['surcharge_transaction_percentage'] = ApiClient.convertToType(data['surcharge_transaction_percentage'], 'Number');
            }
            if (data.hasOwnProperty('test_order')) {
                obj['test_order'] = ApiClient.convertToType(data['test_order'], 'Boolean');
            }
            if (data.hasOwnProperty('transactions')) {
                obj['transactions'] = ApiClient.convertToType(data['transactions'], [OrderPaymentTransaction]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/OrderPaymentCheck} check
 */
OrderPayment.prototype['check'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/OrderPaymentCreditCard} credit_card
 */
OrderPayment.prototype['credit_card'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/OrderPaymentECheck} echeck
 */
OrderPayment.prototype['echeck'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/OrderPaymentHealthBenefitCard} health_benefit_card
 */
OrderPayment.prototype['health_benefit_card'] = undefined;

/**
 * True if order has been held for fraud review
 * @member {Boolean} hold_for_fraud_review
 */
OrderPayment.prototype['hold_for_fraud_review'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/OrderPaymentInsurance} insurance
 */
OrderPayment.prototype['insurance'] = undefined;

/**
 * Date/time that the payment was successfully processed, for new orders, this field is only considered if channel_partner.skip_payment_processing is true
 * @member {String} payment_dts
 */
OrderPayment.prototype['payment_dts'] = undefined;

/**
 * Payment method
 * @member {module:com.ultracart.admin.v2.models/OrderPayment.PaymentMethodEnum} payment_method
 */
OrderPayment.prototype['payment_method'] = undefined;

/**
 * Payment method QuickBooks code
 * @member {String} payment_method_accounting_code
 */
OrderPayment.prototype['payment_method_accounting_code'] = undefined;

/**
 * Payment method QuickBooks deposit account
 * @member {String} payment_method_deposit_to_account
 */
OrderPayment.prototype['payment_method_deposit_to_account'] = undefined;

/**
 * Payment status
 * @member {module:com.ultracart.admin.v2.models/OrderPayment.PaymentStatusEnum} payment_status
 */
OrderPayment.prototype['payment_status'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/OrderPaymentPayPal} paypal
 */
OrderPayment.prototype['paypal'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/OrderPaymentPurchaseOrder} purchase_order
 */
OrderPayment.prototype['purchase_order'] = undefined;

/**
 * Rotating transaction gateway code used to process this order
 * @member {String} rotating_transaction_gateway_code
 */
OrderPayment.prototype['rotating_transaction_gateway_code'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} surcharge
 */
OrderPayment.prototype['surcharge'] = undefined;

/**
 * Surcharge accounting code
 * @member {String} surcharge_accounting_code
 */
OrderPayment.prototype['surcharge_accounting_code'] = undefined;

/**
 * Surcharge transaction fee
 * @member {Number} surcharge_transaction_fee
 */
OrderPayment.prototype['surcharge_transaction_fee'] = undefined;

/**
 * Surcharge transaction percentage
 * @member {Number} surcharge_transaction_percentage
 */
OrderPayment.prototype['surcharge_transaction_percentage'] = undefined;

/**
 * True if this is a test order
 * @member {Boolean} test_order
 */
OrderPayment.prototype['test_order'] = undefined;

/**
 * Transactions associated with processing this payment
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderPaymentTransaction>} transactions
 */
OrderPayment.prototype['transactions'] = undefined;





/**
 * Allowed values for the <code>payment_method</code> property.
 * @enum {String}
 * @readonly
 */
OrderPayment['PaymentMethodEnum'] = {

    /**
     * value: "Affirm"
     * @const
     */
    "Affirm": "Affirm",

    /**
     * value: "Amazon"
     * @const
     */
    "Amazon": "Amazon",

    /**
     * value: "Amazon Pay"
     * @const
     */
    "Amazon Pay": "Amazon Pay",

    /**
     * value: "Amazon SC"
     * @const
     */
    "Amazon SC": "Amazon SC",

    /**
     * value: "Cash"
     * @const
     */
    "Cash": "Cash",

    /**
     * value: "Check"
     * @const
     */
    "Check": "Check",

    /**
     * value: "COD"
     * @const
     */
    "COD": "COD",

    /**
     * value: "Credit Card"
     * @const
     */
    "Credit Card": "Credit Card",

    /**
     * value: "eBay"
     * @const
     */
    "eBay": "eBay",

    /**
     * value: "eCheck"
     * @const
     */
    "eCheck": "eCheck",

    /**
     * value: "Google Shopping"
     * @const
     */
    "Google Shopping": "Google Shopping",

    /**
     * value: "Insurance"
     * @const
     */
    "Insurance": "Insurance",

    /**
     * value: "Link"
     * @const
     */
    "Link": "Link",

    /**
     * value: "LoanHero"
     * @const
     */
    "LoanHero": "LoanHero",

    /**
     * value: "Money Order"
     * @const
     */
    "Money Order": "Money Order",

    /**
     * value: "PayPal"
     * @const
     */
    "PayPal": "PayPal",

    /**
     * value: "Purchase Order"
     * @const
     */
    "Purchase Order": "Purchase Order",

    /**
     * value: "Quote Request"
     * @const
     */
    "Quote Request": "Quote Request",

    /**
     * value: "Unknown"
     * @const
     */
    "Unknown": "Unknown",

    /**
     * value: "Wire Transfer"
     * @const
     */
    "Wire Transfer": "Wire Transfer",

    /**
     * value: "Walmart"
     * @const
     */
    "Walmart": "Walmart",

    /**
     * value: "Shop.com"
     * @const
     */
    "Shop.com": "Shop.com",

    /**
     * value: "Sezzle"
     * @const
     */
    "Sezzle": "Sezzle",

    /**
     * value: "Venmo"
     * @const
     */
    "Venmo": "Venmo",

    /**
     * value: "Apple Pay"
     * @const
     */
    "Apple Pay": "Apple Pay",

    /**
     * value: "Google Pay"
     * @const
     */
    "Google Pay": "Google Pay",

    /**
     * value: "Health Benefit Card"
     * @const
     */
    "Health Benefit Card": "Health Benefit Card"
};


/**
 * Allowed values for the <code>payment_status</code> property.
 * @enum {String}
 * @readonly
 */
OrderPayment['PaymentStatusEnum'] = {

    /**
     * value: "Unprocessed"
     * @const
     */
    "Unprocessed": "Unprocessed",

    /**
     * value: "Authorized"
     * @const
     */
    "Authorized": "Authorized",

    /**
     * value: "Capture Failed"
     * @const
     */
    "Capture Failed": "Capture Failed",

    /**
     * value: "Processed"
     * @const
     */
    "Processed": "Processed",

    /**
     * value: "Declined"
     * @const
     */
    "Declined": "Declined",

    /**
     * value: "Voided"
     * @const
     */
    "Voided": "Voided",

    /**
     * value: "Refunded"
     * @const
     */
    "Refunded": "Refunded",

    /**
     * value: "Skipped"
     * @const
     */
    "Skipped": "Skipped"
};



export default OrderPayment;

