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
 * The CartSummary model module.
 * @module com.ultracart.admin.v2.models/CartSummary
 * @version 4.1.16
 */
class CartSummary {
    /**
     * Constructs a new <code>CartSummary</code>.
     * @alias module:com.ultracart.admin.v2.models/CartSummary
     */
    constructor() { 
        
        CartSummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartSummary} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartSummary} The populated <code>CartSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartSummary();

            if (data.hasOwnProperty('arbitrary_shipping_handling_total')) {
                obj['arbitrary_shipping_handling_total'] = Currency.constructFromObject(data['arbitrary_shipping_handling_total']);
            }
            if (data.hasOwnProperty('arbitrary_tax')) {
                obj['arbitrary_tax'] = Currency.constructFromObject(data['arbitrary_tax']);
            }
            if (data.hasOwnProperty('arbitrary_tax_rate')) {
                obj['arbitrary_tax_rate'] = Currency.constructFromObject(data['arbitrary_tax_rate']);
            }
            if (data.hasOwnProperty('arbitrary_taxable_subtotal')) {
                obj['arbitrary_taxable_subtotal'] = Currency.constructFromObject(data['arbitrary_taxable_subtotal']);
            }
            if (data.hasOwnProperty('health_benefit_card_amount')) {
                obj['health_benefit_card_amount'] = Currency.constructFromObject(data['health_benefit_card_amount']);
            }
            if (data.hasOwnProperty('health_benefit_card_balance')) {
                obj['health_benefit_card_balance'] = Currency.constructFromObject(data['health_benefit_card_balance']);
            }
            if (data.hasOwnProperty('health_benefit_card_requirements')) {
                obj['health_benefit_card_requirements'] = ApiClient.convertToType(data['health_benefit_card_requirements'], 'String');
            }
            if (data.hasOwnProperty('internal_gift_certificate_amount')) {
                obj['internal_gift_certificate_amount'] = Currency.constructFromObject(data['internal_gift_certificate_amount']);
            }
            if (data.hasOwnProperty('shipping_handling')) {
                obj['shipping_handling'] = Currency.constructFromObject(data['shipping_handling']);
            }
            if (data.hasOwnProperty('shipping_handling_discount')) {
                obj['shipping_handling_discount'] = Currency.constructFromObject(data['shipping_handling_discount']);
            }
            if (data.hasOwnProperty('shipping_handling_with_discount')) {
                obj['shipping_handling_with_discount'] = Currency.constructFromObject(data['shipping_handling_with_discount']);
            }
            if (data.hasOwnProperty('subtotal')) {
                obj['subtotal'] = Currency.constructFromObject(data['subtotal']);
            }
            if (data.hasOwnProperty('subtotal_discount')) {
                obj['subtotal_discount'] = Currency.constructFromObject(data['subtotal_discount']);
            }
            if (data.hasOwnProperty('subtotal_with_discount')) {
                obj['subtotal_with_discount'] = Currency.constructFromObject(data['subtotal_with_discount']);
            }
            if (data.hasOwnProperty('surcharge')) {
                obj['surcharge'] = Currency.constructFromObject(data['surcharge']);
            }
            if (data.hasOwnProperty('tax')) {
                obj['tax'] = Currency.constructFromObject(data['tax']);
            }
            if (data.hasOwnProperty('taxable_subtotal')) {
                obj['taxable_subtotal'] = Currency.constructFromObject(data['taxable_subtotal']);
            }
            if (data.hasOwnProperty('taxable_subtotal_discount')) {
                obj['taxable_subtotal_discount'] = Currency.constructFromObject(data['taxable_subtotal_discount']);
            }
            if (data.hasOwnProperty('taxable_subtotal_with_discount')) {
                obj['taxable_subtotal_with_discount'] = Currency.constructFromObject(data['taxable_subtotal_with_discount']);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = Currency.constructFromObject(data['total']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} arbitrary_shipping_handling_total
 */
CartSummary.prototype['arbitrary_shipping_handling_total'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} arbitrary_tax
 */
CartSummary.prototype['arbitrary_tax'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} arbitrary_tax_rate
 */
CartSummary.prototype['arbitrary_tax_rate'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} arbitrary_taxable_subtotal
 */
CartSummary.prototype['arbitrary_taxable_subtotal'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} health_benefit_card_amount
 */
CartSummary.prototype['health_benefit_card_amount'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} health_benefit_card_balance
 */
CartSummary.prototype['health_benefit_card_balance'] = undefined;

/**
 * Health benefit card requirements
 * @member {String} health_benefit_card_requirements
 */
CartSummary.prototype['health_benefit_card_requirements'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} internal_gift_certificate_amount
 */
CartSummary.prototype['internal_gift_certificate_amount'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} shipping_handling
 */
CartSummary.prototype['shipping_handling'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} shipping_handling_discount
 */
CartSummary.prototype['shipping_handling_discount'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} shipping_handling_with_discount
 */
CartSummary.prototype['shipping_handling_with_discount'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} subtotal
 */
CartSummary.prototype['subtotal'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} subtotal_discount
 */
CartSummary.prototype['subtotal_discount'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} subtotal_with_discount
 */
CartSummary.prototype['subtotal_with_discount'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} surcharge
 */
CartSummary.prototype['surcharge'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} tax
 */
CartSummary.prototype['tax'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} taxable_subtotal
 */
CartSummary.prototype['taxable_subtotal'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} taxable_subtotal_discount
 */
CartSummary.prototype['taxable_subtotal_discount'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} taxable_subtotal_with_discount
 */
CartSummary.prototype['taxable_subtotal_with_discount'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} total
 */
CartSummary.prototype['total'] = undefined;






export default CartSummary;

