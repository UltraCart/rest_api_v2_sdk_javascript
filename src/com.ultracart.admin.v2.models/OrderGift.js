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
 * The OrderGift model module.
 * @module com.ultracart.admin.v2.models/OrderGift
 * @version 4.0.5
 */
class OrderGift {
    /**
     * Constructs a new <code>OrderGift</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderGift
     */
    constructor() { 
        
        OrderGift.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderGift</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderGift} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderGift} The populated <code>OrderGift</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderGift();

            if (data.hasOwnProperty('gift')) {
                obj['gift'] = ApiClient.convertToType(data['gift'], 'Boolean');
            }
            if (data.hasOwnProperty('gift_charge')) {
                obj['gift_charge'] = Currency.constructFromObject(data['gift_charge']);
            }
            if (data.hasOwnProperty('gift_charge_accounting_code')) {
                obj['gift_charge_accounting_code'] = ApiClient.convertToType(data['gift_charge_accounting_code'], 'String');
            }
            if (data.hasOwnProperty('gift_charge_refunded')) {
                obj['gift_charge_refunded'] = Currency.constructFromObject(data['gift_charge_refunded']);
            }
            if (data.hasOwnProperty('gift_email')) {
                obj['gift_email'] = ApiClient.convertToType(data['gift_email'], 'String');
            }
            if (data.hasOwnProperty('gift_message')) {
                obj['gift_message'] = ApiClient.convertToType(data['gift_message'], 'String');
            }
            if (data.hasOwnProperty('gift_wrap_accounting_code')) {
                obj['gift_wrap_accounting_code'] = ApiClient.convertToType(data['gift_wrap_accounting_code'], 'String');
            }
            if (data.hasOwnProperty('gift_wrap_cost')) {
                obj['gift_wrap_cost'] = Currency.constructFromObject(data['gift_wrap_cost']);
            }
            if (data.hasOwnProperty('gift_wrap_refunded')) {
                obj['gift_wrap_refunded'] = Currency.constructFromObject(data['gift_wrap_refunded']);
            }
            if (data.hasOwnProperty('gift_wrap_title')) {
                obj['gift_wrap_title'] = ApiClient.convertToType(data['gift_wrap_title'], 'String');
            }
        }
        return obj;
    }


}

/**
 * True if the order is a gift
 * @member {Boolean} gift
 */
OrderGift.prototype['gift'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} gift_charge
 */
OrderGift.prototype['gift_charge'] = undefined;

/**
 * QuickBooks code for the gift charge
 * @member {String} gift_charge_accounting_code
 */
OrderGift.prototype['gift_charge_accounting_code'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} gift_charge_refunded
 */
OrderGift.prototype['gift_charge_refunded'] = undefined;

/**
 * Email address of the gift recipient
 * @member {String} gift_email
 */
OrderGift.prototype['gift_email'] = undefined;

/**
 * Message to the gift recipient
 * @member {String} gift_message
 */
OrderGift.prototype['gift_message'] = undefined;

/**
 * QuickBooks code for the gift wrap charge
 * @member {String} gift_wrap_accounting_code
 */
OrderGift.prototype['gift_wrap_accounting_code'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} gift_wrap_cost
 */
OrderGift.prototype['gift_wrap_cost'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} gift_wrap_refunded
 */
OrderGift.prototype['gift_wrap_refunded'] = undefined;

/**
 * Title of the gift wrap that the customer wants used
 * @member {String} gift_wrap_title
 */
OrderGift.prototype['gift_wrap_title'] = undefined;






export default OrderGift;

