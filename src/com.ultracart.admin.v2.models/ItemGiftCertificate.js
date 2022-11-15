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

/**
 * The ItemGiftCertificate model module.
 * @module com.ultracart.admin.v2.models/ItemGiftCertificate
 * @version 4.0.82-RC
 */
class ItemGiftCertificate {
    /**
     * Constructs a new <code>ItemGiftCertificate</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemGiftCertificate
     */
    constructor() { 
        
        ItemGiftCertificate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemGiftCertificate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemGiftCertificate} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemGiftCertificate} The populated <code>ItemGiftCertificate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemGiftCertificate();

            if (data.hasOwnProperty('gift_certificate')) {
                obj['gift_certificate'] = ApiClient.convertToType(data['gift_certificate'], 'Boolean');
            }
            if (data.hasOwnProperty('gift_certificate_expiration_days')) {
                obj['gift_certificate_expiration_days'] = ApiClient.convertToType(data['gift_certificate_expiration_days'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * True if the purchase of this item generates a gift certificate
 * @member {Boolean} gift_certificate
 */
ItemGiftCertificate.prototype['gift_certificate'] = undefined;

/**
 * The number of days that the gift certificate is good for (optional)
 * @member {Number} gift_certificate_expiration_days
 */
ItemGiftCertificate.prototype['gift_certificate_expiration_days'] = undefined;






export default ItemGiftCertificate;

