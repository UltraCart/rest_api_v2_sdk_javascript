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

/**
 * The OrderSummary model module.
 * @module com.ultracart.admin.v2.models/OrderSummary
 * @version 4.0.163
 */
class OrderSummary {
    /**
     * Constructs a new <code>OrderSummary</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderSummary
     */
    constructor() { 
        
        OrderSummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderSummary} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderSummary} The populated <code>OrderSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderSummary();

            if (data.hasOwnProperty('actual_fulfillment')) {
                obj['actual_fulfillment'] = Currency.constructFromObject(data['actual_fulfillment']);
            }
            if (data.hasOwnProperty('actual_payment_processing')) {
                obj['actual_payment_processing'] = Currency.constructFromObject(data['actual_payment_processing']);
            }
            if (data.hasOwnProperty('actual_shipping')) {
                obj['actual_shipping'] = Currency.constructFromObject(data['actual_shipping']);
            }
            if (data.hasOwnProperty('arbitrary_shipping_handling_total')) {
                obj['arbitrary_shipping_handling_total'] = Currency.constructFromObject(data['arbitrary_shipping_handling_total']);
            }
            if (data.hasOwnProperty('internal_gift_certificate_amount')) {
                obj['internal_gift_certificate_amount'] = Currency.constructFromObject(data['internal_gift_certificate_amount']);
            }
            if (data.hasOwnProperty('internal_gift_certificate_refunded')) {
                obj['internal_gift_certificate_refunded'] = Currency.constructFromObject(data['internal_gift_certificate_refunded']);
            }
            if (data.hasOwnProperty('other_refunded')) {
                obj['other_refunded'] = Currency.constructFromObject(data['other_refunded']);
            }
            if (data.hasOwnProperty('shipping_handling_refunded')) {
                obj['shipping_handling_refunded'] = Currency.constructFromObject(data['shipping_handling_refunded']);
            }
            if (data.hasOwnProperty('shipping_handling_total')) {
                obj['shipping_handling_total'] = Currency.constructFromObject(data['shipping_handling_total']);
            }
            if (data.hasOwnProperty('shipping_handling_total_discount')) {
                obj['shipping_handling_total_discount'] = Currency.constructFromObject(data['shipping_handling_total_discount']);
            }
            if (data.hasOwnProperty('subtotal')) {
                obj['subtotal'] = Currency.constructFromObject(data['subtotal']);
            }
            if (data.hasOwnProperty('subtotal_discount')) {
                obj['subtotal_discount'] = Currency.constructFromObject(data['subtotal_discount']);
            }
            if (data.hasOwnProperty('subtotal_discount_refunded')) {
                obj['subtotal_discount_refunded'] = Currency.constructFromObject(data['subtotal_discount_refunded']);
            }
            if (data.hasOwnProperty('subtotal_refunded')) {
                obj['subtotal_refunded'] = Currency.constructFromObject(data['subtotal_refunded']);
            }
            if (data.hasOwnProperty('tax')) {
                obj['tax'] = Currency.constructFromObject(data['tax']);
            }
            if (data.hasOwnProperty('tax_refunded')) {
                obj['tax_refunded'] = Currency.constructFromObject(data['tax_refunded']);
            }
            if (data.hasOwnProperty('taxable_subtotal')) {
                obj['taxable_subtotal'] = Currency.constructFromObject(data['taxable_subtotal']);
            }
            if (data.hasOwnProperty('taxable_subtotal_discount')) {
                obj['taxable_subtotal_discount'] = Currency.constructFromObject(data['taxable_subtotal_discount']);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = Currency.constructFromObject(data['total']);
            }
            if (data.hasOwnProperty('total_refunded')) {
                obj['total_refunded'] = Currency.constructFromObject(data['total_refunded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} actual_fulfillment
 */
OrderSummary.prototype['actual_fulfillment'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} actual_payment_processing
 */
OrderSummary.prototype['actual_payment_processing'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} actual_shipping
 */
OrderSummary.prototype['actual_shipping'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} arbitrary_shipping_handling_total
 */
OrderSummary.prototype['arbitrary_shipping_handling_total'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} internal_gift_certificate_amount
 */
OrderSummary.prototype['internal_gift_certificate_amount'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} internal_gift_certificate_refunded
 */
OrderSummary.prototype['internal_gift_certificate_refunded'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} other_refunded
 */
OrderSummary.prototype['other_refunded'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} shipping_handling_refunded
 */
OrderSummary.prototype['shipping_handling_refunded'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} shipping_handling_total
 */
OrderSummary.prototype['shipping_handling_total'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} shipping_handling_total_discount
 */
OrderSummary.prototype['shipping_handling_total_discount'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} subtotal
 */
OrderSummary.prototype['subtotal'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} subtotal_discount
 */
OrderSummary.prototype['subtotal_discount'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} subtotal_discount_refunded
 */
OrderSummary.prototype['subtotal_discount_refunded'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} subtotal_refunded
 */
OrderSummary.prototype['subtotal_refunded'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} tax
 */
OrderSummary.prototype['tax'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} tax_refunded
 */
OrderSummary.prototype['tax_refunded'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} taxable_subtotal
 */
OrderSummary.prototype['taxable_subtotal'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} taxable_subtotal_discount
 */
OrderSummary.prototype['taxable_subtotal_discount'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} total
 */
OrderSummary.prototype['total'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} total_refunded
 */
OrderSummary.prototype['total_refunded'] = undefined;






export default OrderSummary;

