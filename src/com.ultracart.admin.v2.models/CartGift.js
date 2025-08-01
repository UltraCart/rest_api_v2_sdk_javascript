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
 * The CartGift model module.
 * @module com.ultracart.admin.v2.models/CartGift
 * @version 4.1.16
 */
class CartGift {
    /**
     * Constructs a new <code>CartGift</code>.
     * @alias module:com.ultracart.admin.v2.models/CartGift
     */
    constructor() { 
        
        CartGift.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartGift</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartGift} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartGift} The populated <code>CartGift</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartGift();

            if (data.hasOwnProperty('gift')) {
                obj['gift'] = ApiClient.convertToType(data['gift'], 'Boolean');
            }
            if (data.hasOwnProperty('gift_charge')) {
                obj['gift_charge'] = Currency.constructFromObject(data['gift_charge']);
            }
            if (data.hasOwnProperty('gift_email')) {
                obj['gift_email'] = ApiClient.convertToType(data['gift_email'], 'String');
            }
            if (data.hasOwnProperty('gift_message')) {
                obj['gift_message'] = ApiClient.convertToType(data['gift_message'], 'String');
            }
            if (data.hasOwnProperty('gift_wrap_cost')) {
                obj['gift_wrap_cost'] = Currency.constructFromObject(data['gift_wrap_cost']);
            }
            if (data.hasOwnProperty('gift_wrap_title')) {
                obj['gift_wrap_title'] = ApiClient.convertToType(data['gift_wrap_title'], 'String');
            }
        }
        return obj;
    }


}

/**
 * True if this order is a gift
 * @member {Boolean} gift
 */
CartGift.prototype['gift'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} gift_charge
 */
CartGift.prototype['gift_charge'] = undefined;

/**
 * Email address of the gift recipient
 * @member {String} gift_email
 */
CartGift.prototype['gift_email'] = undefined;

/**
 * Message to the gift recipient
 * @member {String} gift_message
 */
CartGift.prototype['gift_message'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} gift_wrap_cost
 */
CartGift.prototype['gift_wrap_cost'] = undefined;

/**
 * Title of the selected gift wrap
 * @member {String} gift_wrap_title
 */
CartGift.prototype['gift_wrap_title'] = undefined;






export default CartGift;

