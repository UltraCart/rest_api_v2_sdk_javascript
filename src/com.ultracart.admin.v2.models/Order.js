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
import Customer from './Customer';
import OrderAffiliate from './OrderAffiliate';
import OrderAutoOrder from './OrderAutoOrder';
import OrderBilling from './OrderBilling';
import OrderBuysafe from './OrderBuysafe';
import OrderChannelPartner from './OrderChannelPartner';
import OrderCheckout from './OrderCheckout';
import OrderCoupon from './OrderCoupon';
import OrderDigitalOrder from './OrderDigitalOrder';
import OrderEdi from './OrderEdi';
import OrderFraudScore from './OrderFraudScore';
import OrderGift from './OrderGift';
import OrderGiftCertificate from './OrderGiftCertificate';
import OrderInternal from './OrderInternal';
import OrderItem from './OrderItem';
import OrderLinkedShipment from './OrderLinkedShipment';
import OrderMarketing from './OrderMarketing';
import OrderPayment from './OrderPayment';
import OrderPointOfSale from './OrderPointOfSale';
import OrderProperty from './OrderProperty';
import OrderQuote from './OrderQuote';
import OrderSalesforce from './OrderSalesforce';
import OrderShipping from './OrderShipping';
import OrderSummary from './OrderSummary';
import OrderTag from './OrderTag';
import OrderTaxes from './OrderTaxes';

/**
 * The Order model module.
 * @module com.ultracart.admin.v2.models/Order
 * @version 4.0.126-RC
 */
class Order {
    /**
     * Constructs a new <code>Order</code>.
     * @alias module:com.ultracart.admin.v2.models/Order
     */
    constructor() { 
        
        Order.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Order</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Order} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Order} The populated <code>Order</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Order();

            if (data.hasOwnProperty('affiliates')) {
                obj['affiliates'] = ApiClient.convertToType(data['affiliates'], [OrderAffiliate]);
            }
            if (data.hasOwnProperty('auto_order')) {
                obj['auto_order'] = OrderAutoOrder.constructFromObject(data['auto_order']);
            }
            if (data.hasOwnProperty('billing')) {
                obj['billing'] = OrderBilling.constructFromObject(data['billing']);
            }
            if (data.hasOwnProperty('buysafe')) {
                obj['buysafe'] = OrderBuysafe.constructFromObject(data['buysafe']);
            }
            if (data.hasOwnProperty('channel_partner')) {
                obj['channel_partner'] = OrderChannelPartner.constructFromObject(data['channel_partner']);
            }
            if (data.hasOwnProperty('checkout')) {
                obj['checkout'] = OrderCheckout.constructFromObject(data['checkout']);
            }
            if (data.hasOwnProperty('coupons')) {
                obj['coupons'] = ApiClient.convertToType(data['coupons'], [OrderCoupon]);
            }
            if (data.hasOwnProperty('creation_dts')) {
                obj['creation_dts'] = ApiClient.convertToType(data['creation_dts'], 'String');
            }
            if (data.hasOwnProperty('currency_code')) {
                obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
            }
            if (data.hasOwnProperty('current_stage')) {
                obj['current_stage'] = ApiClient.convertToType(data['current_stage'], 'String');
            }
            if (data.hasOwnProperty('customer_profile')) {
                obj['customer_profile'] = Customer.constructFromObject(data['customer_profile']);
            }
            if (data.hasOwnProperty('digital_order')) {
                obj['digital_order'] = OrderDigitalOrder.constructFromObject(data['digital_order']);
            }
            if (data.hasOwnProperty('edi')) {
                obj['edi'] = OrderEdi.constructFromObject(data['edi']);
            }
            if (data.hasOwnProperty('exchange_rate')) {
                obj['exchange_rate'] = ApiClient.convertToType(data['exchange_rate'], 'Number');
            }
            if (data.hasOwnProperty('fraud_score')) {
                obj['fraud_score'] = OrderFraudScore.constructFromObject(data['fraud_score']);
            }
            if (data.hasOwnProperty('gift')) {
                obj['gift'] = OrderGift.constructFromObject(data['gift']);
            }
            if (data.hasOwnProperty('gift_certificate')) {
                obj['gift_certificate'] = OrderGiftCertificate.constructFromObject(data['gift_certificate']);
            }
            if (data.hasOwnProperty('internal')) {
                obj['internal'] = OrderInternal.constructFromObject(data['internal']);
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [OrderItem]);
            }
            if (data.hasOwnProperty('language_iso_code')) {
                obj['language_iso_code'] = ApiClient.convertToType(data['language_iso_code'], 'String');
            }
            if (data.hasOwnProperty('linked_shipment')) {
                obj['linked_shipment'] = OrderLinkedShipment.constructFromObject(data['linked_shipment']);
            }
            if (data.hasOwnProperty('marketing')) {
                obj['marketing'] = OrderMarketing.constructFromObject(data['marketing']);
            }
            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('order_id')) {
                obj['order_id'] = ApiClient.convertToType(data['order_id'], 'String');
            }
            if (data.hasOwnProperty('payment')) {
                obj['payment'] = OrderPayment.constructFromObject(data['payment']);
            }
            if (data.hasOwnProperty('point_of_sale')) {
                obj['point_of_sale'] = OrderPointOfSale.constructFromObject(data['point_of_sale']);
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], [OrderProperty]);
            }
            if (data.hasOwnProperty('quote')) {
                obj['quote'] = OrderQuote.constructFromObject(data['quote']);
            }
            if (data.hasOwnProperty('refund_dts')) {
                obj['refund_dts'] = ApiClient.convertToType(data['refund_dts'], 'String');
            }
            if (data.hasOwnProperty('reject_dts')) {
                obj['reject_dts'] = ApiClient.convertToType(data['reject_dts'], 'String');
            }
            if (data.hasOwnProperty('salesforce')) {
                obj['salesforce'] = OrderSalesforce.constructFromObject(data['salesforce']);
            }
            if (data.hasOwnProperty('shipping')) {
                obj['shipping'] = OrderShipping.constructFromObject(data['shipping']);
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = OrderSummary.constructFromObject(data['summary']);
            }
            if (data.hasOwnProperty('Tags')) {
                obj['Tags'] = ApiClient.convertToType(data['Tags'], [OrderTag]);
            }
            if (data.hasOwnProperty('taxes')) {
                obj['taxes'] = OrderTaxes.constructFromObject(data['taxes']);
            }
        }
        return obj;
    }


}

/**
 * Affiliates if any were associated with the order.  The first one in the array sent the order and each subsequent affiliate is the recruiter that earns a downline commission.
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderAffiliate>} affiliates
 */
Order.prototype['affiliates'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/OrderAutoOrder} auto_order
 */
Order.prototype['auto_order'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/OrderBilling} billing
 */
Order.prototype['billing'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/OrderBuysafe} buysafe
 */
Order.prototype['buysafe'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/OrderChannelPartner} channel_partner
 */
Order.prototype['channel_partner'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/OrderCheckout} checkout
 */
Order.prototype['checkout'] = undefined;

/**
 * Coupons
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderCoupon>} coupons
 */
Order.prototype['coupons'] = undefined;

/**
 * Date/time that the order was created
 * @member {String} creation_dts
 */
Order.prototype['creation_dts'] = undefined;

/**
 * Currency code that the customer used if different than the merchant's base currency code
 * @member {String} currency_code
 */
Order.prototype['currency_code'] = undefined;

/**
 * Current stage that the order is in.
 * @member {module:com.ultracart.admin.v2.models/Order.CurrentStageEnum} current_stage
 */
Order.prototype['current_stage'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Customer} customer_profile
 */
Order.prototype['customer_profile'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/OrderDigitalOrder} digital_order
 */
Order.prototype['digital_order'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/OrderEdi} edi
 */
Order.prototype['edi'] = undefined;

/**
 * Exchange rate at the time the order was placed if currency code is different than the base currency
 * @member {Number} exchange_rate
 */
Order.prototype['exchange_rate'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/OrderFraudScore} fraud_score
 */
Order.prototype['fraud_score'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/OrderGift} gift
 */
Order.prototype['gift'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/OrderGiftCertificate} gift_certificate
 */
Order.prototype['gift_certificate'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/OrderInternal} internal
 */
Order.prototype['internal'] = undefined;

/**
 * Items
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderItem>} items
 */
Order.prototype['items'] = undefined;

/**
 * Three letter ISO-639 language code used by the customer during the checkout if different than the default language
 * @member {String} language_iso_code
 */
Order.prototype['language_iso_code'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/OrderLinkedShipment} linked_shipment
 */
Order.prototype['linked_shipment'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/OrderMarketing} marketing
 */
Order.prototype['marketing'] = undefined;

/**
 * UltraCart merchant ID owning this order
 * @member {String} merchant_id
 */
Order.prototype['merchant_id'] = undefined;

/**
 * Order ID
 * @member {String} order_id
 */
Order.prototype['order_id'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/OrderPayment} payment
 */
Order.prototype['payment'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/OrderPointOfSale} point_of_sale
 */
Order.prototype['point_of_sale'] = undefined;

/**
 * Properties, available only through update, not through insert due to the nature of how properties are handled internally
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderProperty>} properties
 */
Order.prototype['properties'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/OrderQuote} quote
 */
Order.prototype['quote'] = undefined;

/**
 * If the order was refunded, the date/time that the last refund occurred
 * @member {String} refund_dts
 */
Order.prototype['refund_dts'] = undefined;

/**
 * If the order was rejected, the date/time that the rejection occurred
 * @member {String} reject_dts
 */
Order.prototype['reject_dts'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/OrderSalesforce} salesforce
 */
Order.prototype['salesforce'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/OrderShipping} shipping
 */
Order.prototype['shipping'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/OrderSummary} summary
 */
Order.prototype['summary'] = undefined;

/**
 * tags, available only through update, not through insert due to the nature of how tags are handled internally
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderTag>} Tags
 */
Order.prototype['Tags'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/OrderTaxes} taxes
 */
Order.prototype['taxes'] = undefined;





/**
 * Allowed values for the <code>current_stage</code> property.
 * @enum {String}
 * @readonly
 */
Order['CurrentStageEnum'] = {

    /**
     * value: "Accounts Receivable"
     * @const
     */
    "Accounts Receivable": "Accounts Receivable",

    /**
     * value: "Pending Clearance"
     * @const
     */
    "Pending Clearance": "Pending Clearance",

    /**
     * value: "Fraud Review"
     * @const
     */
    "Fraud Review": "Fraud Review",

    /**
     * value: "Rejected"
     * @const
     */
    "Rejected": "Rejected",

    /**
     * value: "Shipping Department"
     * @const
     */
    "Shipping Department": "Shipping Department",

    /**
     * value: "Completed Order"
     * @const
     */
    "Completed Order": "Completed Order",

    /**
     * value: "Quote Request"
     * @const
     */
    "Quote Request": "Quote Request",

    /**
     * value: "Quote Sent"
     * @const
     */
    "Quote Sent": "Quote Sent",

    /**
     * value: "Least Cost Routing"
     * @const
     */
    "Least Cost Routing": "Least Cost Routing",

    /**
     * value: "Unknown"
     * @const
     */
    "Unknown": "Unknown",

    /**
     * value: "Pre-ordered"
     * @const
     */
    "Pre-ordered": "Pre-ordered",

    /**
     * value: "Advanced Order Routing"
     * @const
     */
    "Advanced Order Routing": "Advanced Order Routing"
};



export default Order;

