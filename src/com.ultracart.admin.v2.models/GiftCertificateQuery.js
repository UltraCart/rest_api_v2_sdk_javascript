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
 * The GiftCertificateQuery model module.
 * @module com.ultracart.admin.v2.models/GiftCertificateQuery
 * @version 4.0.92-RC
 */
class GiftCertificateQuery {
    /**
     * Constructs a new <code>GiftCertificateQuery</code>.
     * @alias module:com.ultracart.admin.v2.models/GiftCertificateQuery
     */
    constructor() { 
        
        GiftCertificateQuery.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GiftCertificateQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/GiftCertificateQuery} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/GiftCertificateQuery} The populated <code>GiftCertificateQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GiftCertificateQuery();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('expiration_dts_end')) {
                obj['expiration_dts_end'] = ApiClient.convertToType(data['expiration_dts_end'], 'String');
            }
            if (data.hasOwnProperty('expiration_dts_start')) {
                obj['expiration_dts_start'] = ApiClient.convertToType(data['expiration_dts_start'], 'String');
            }
            if (data.hasOwnProperty('original_balance_end')) {
                obj['original_balance_end'] = ApiClient.convertToType(data['original_balance_end'], 'Number');
            }
            if (data.hasOwnProperty('original_balance_start')) {
                obj['original_balance_start'] = ApiClient.convertToType(data['original_balance_start'], 'Number');
            }
            if (data.hasOwnProperty('reference_order_id')) {
                obj['reference_order_id'] = ApiClient.convertToType(data['reference_order_id'], 'String');
            }
            if (data.hasOwnProperty('remaining_balance_end')) {
                obj['remaining_balance_end'] = ApiClient.convertToType(data['remaining_balance_end'], 'Number');
            }
            if (data.hasOwnProperty('remaining_balance_start')) {
                obj['remaining_balance_start'] = ApiClient.convertToType(data['remaining_balance_start'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Gift certificate code
 * @member {String} code
 */
GiftCertificateQuery.prototype['code'] = undefined;

/**
 * Email address of this gift certificate
 * @member {String} email
 */
GiftCertificateQuery.prototype['email'] = undefined;

/**
 * Expiration date end
 * @member {String} expiration_dts_end
 */
GiftCertificateQuery.prototype['expiration_dts_end'] = undefined;

/**
 * Expiration date start
 * @member {String} expiration_dts_start
 */
GiftCertificateQuery.prototype['expiration_dts_start'] = undefined;

/**
 * Original balance end
 * @member {Number} original_balance_end
 */
GiftCertificateQuery.prototype['original_balance_end'] = undefined;

/**
 * Original balance start
 * @member {Number} original_balance_start
 */
GiftCertificateQuery.prototype['original_balance_start'] = undefined;

/**
 * Gift certificate reference order id
 * @member {String} reference_order_id
 */
GiftCertificateQuery.prototype['reference_order_id'] = undefined;

/**
 * Remaining balance end
 * @member {Number} remaining_balance_end
 */
GiftCertificateQuery.prototype['remaining_balance_end'] = undefined;

/**
 * Remaining balance start
 * @member {Number} remaining_balance_start
 */
GiftCertificateQuery.prototype['remaining_balance_start'] = undefined;






export default GiftCertificateQuery;

