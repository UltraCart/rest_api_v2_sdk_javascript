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
 * The CartGiftCertificate model module.
 * @module com.ultracart.admin.v2.models/CartGiftCertificate
 * @version 4.0.129
 */
class CartGiftCertificate {
    /**
     * Constructs a new <code>CartGiftCertificate</code>.
     * @alias module:com.ultracart.admin.v2.models/CartGiftCertificate
     */
    constructor() { 
        
        CartGiftCertificate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartGiftCertificate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartGiftCertificate} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartGiftCertificate} The populated <code>CartGiftCertificate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartGiftCertificate();

            if (data.hasOwnProperty('gift_certificate_amount')) {
                obj['gift_certificate_amount'] = Currency.constructFromObject(data['gift_certificate_amount']);
            }
            if (data.hasOwnProperty('gift_certificate_code')) {
                obj['gift_certificate_code'] = ApiClient.convertToType(data['gift_certificate_code'], 'String');
            }
            if (data.hasOwnProperty('gift_certificate_remaining_balance_after_order')) {
                obj['gift_certificate_remaining_balance_after_order'] = Currency.constructFromObject(data['gift_certificate_remaining_balance_after_order']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} gift_certificate_amount
 */
CartGiftCertificate.prototype['gift_certificate_amount'] = undefined;

/**
 * Gift certificate code
 * @member {String} gift_certificate_code
 */
CartGiftCertificate.prototype['gift_certificate_code'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} gift_certificate_remaining_balance_after_order
 */
CartGiftCertificate.prototype['gift_certificate_remaining_balance_after_order'] = undefined;






export default CartGiftCertificate;

