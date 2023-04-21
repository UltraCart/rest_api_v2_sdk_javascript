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
 * The OrderGiftCertificate model module.
 * @module com.ultracart.admin.v2.models/OrderGiftCertificate
 * @version 4.0.150
 */
class OrderGiftCertificate {
    /**
     * Constructs a new <code>OrderGiftCertificate</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderGiftCertificate
     */
    constructor() { 
        
        OrderGiftCertificate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderGiftCertificate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderGiftCertificate} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderGiftCertificate} The populated <code>OrderGiftCertificate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderGiftCertificate();

            if (data.hasOwnProperty('gift_certificate_amount')) {
                obj['gift_certificate_amount'] = Currency.constructFromObject(data['gift_certificate_amount']);
            }
            if (data.hasOwnProperty('gift_certificate_code')) {
                obj['gift_certificate_code'] = ApiClient.convertToType(data['gift_certificate_code'], 'String');
            }
            if (data.hasOwnProperty('gift_certificate_oid')) {
                obj['gift_certificate_oid'] = ApiClient.convertToType(data['gift_certificate_oid'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} gift_certificate_amount
 */
OrderGiftCertificate.prototype['gift_certificate_amount'] = undefined;

/**
 * Gift certificate code used on the order
 * @member {String} gift_certificate_code
 */
OrderGiftCertificate.prototype['gift_certificate_code'] = undefined;

/**
 * Gift certificate object identifier
 * @member {Number} gift_certificate_oid
 */
OrderGiftCertificate.prototype['gift_certificate_oid'] = undefined;






export default OrderGiftCertificate;

