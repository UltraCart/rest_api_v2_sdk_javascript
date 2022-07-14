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
import GiftCertificateLedgerEntry from './GiftCertificateLedgerEntry';

/**
 * The GiftCertificate model module.
 * @module com.ultracart.admin.v2.models/GiftCertificate
 * @version 4.0.35-RC
 */
class GiftCertificate {
    /**
     * Constructs a new <code>GiftCertificate</code>.
     * @alias module:com.ultracart.admin.v2.models/GiftCertificate
     */
    constructor() { 
        
        GiftCertificate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GiftCertificate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/GiftCertificate} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/GiftCertificate} The populated <code>GiftCertificate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GiftCertificate();

            if (data.hasOwnProperty('activated')) {
                obj['activated'] = ApiClient.convertToType(data['activated'], 'Boolean');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('customer_profile_oid')) {
                obj['customer_profile_oid'] = ApiClient.convertToType(data['customer_profile_oid'], 'Number');
            }
            if (data.hasOwnProperty('deleted')) {
                obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('expiration_dts')) {
                obj['expiration_dts'] = ApiClient.convertToType(data['expiration_dts'], 'String');
            }
            if (data.hasOwnProperty('gift_certificate_oid')) {
                obj['gift_certificate_oid'] = ApiClient.convertToType(data['gift_certificate_oid'], 'Number');
            }
            if (data.hasOwnProperty('internal')) {
                obj['internal'] = ApiClient.convertToType(data['internal'], 'Boolean');
            }
            if (data.hasOwnProperty('ledger_entries')) {
                obj['ledger_entries'] = ApiClient.convertToType(data['ledger_entries'], [GiftCertificateLedgerEntry]);
            }
            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('merchant_note')) {
                obj['merchant_note'] = ApiClient.convertToType(data['merchant_note'], 'String');
            }
            if (data.hasOwnProperty('original_balance')) {
                obj['original_balance'] = ApiClient.convertToType(data['original_balance'], 'Number');
            }
            if (data.hasOwnProperty('reference_order_id')) {
                obj['reference_order_id'] = ApiClient.convertToType(data['reference_order_id'], 'String');
            }
            if (data.hasOwnProperty('remaining_balance')) {
                obj['remaining_balance'] = ApiClient.convertToType(data['remaining_balance'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * True if this gift certificate is activated and ready to apply to purchases.
 * @member {Boolean} activated
 */
GiftCertificate.prototype['activated'] = undefined;

/**
 * The code used by the customer to purchase against this gift certificate.
 * @member {String} code
 */
GiftCertificate.prototype['code'] = undefined;

/**
 * This is the customer profile oid associated with this internally managed gift certificate.
 * @member {Number} customer_profile_oid
 */
GiftCertificate.prototype['customer_profile_oid'] = undefined;

/**
 * True if this gift certificate was deleted.
 * @member {Boolean} deleted
 */
GiftCertificate.prototype['deleted'] = undefined;

/**
 * Email of the customer associated with this gift certificate.
 * @member {String} email
 */
GiftCertificate.prototype['email'] = undefined;

/**
 * Expiration date time.
 * @member {String} expiration_dts
 */
GiftCertificate.prototype['expiration_dts'] = undefined;

/**
 * Gift certificate oid.
 * @member {Number} gift_certificate_oid
 */
GiftCertificate.prototype['gift_certificate_oid'] = undefined;

/**
 * This is an internally managed gift certificate associated with the loyalty cash rewards program.
 * @member {Boolean} internal
 */
GiftCertificate.prototype['internal'] = undefined;

/**
 * A list of all ledger activity for this gift certificate.
 * @member {Array.<module:com.ultracart.admin.v2.models/GiftCertificateLedgerEntry>} ledger_entries
 */
GiftCertificate.prototype['ledger_entries'] = undefined;

/**
 * Merchant Id
 * @member {String} merchant_id
 */
GiftCertificate.prototype['merchant_id'] = undefined;

/**
 * A list of all ledger activity for this gift certificate.
 * @member {String} merchant_note
 */
GiftCertificate.prototype['merchant_note'] = undefined;

/**
 * Original balance of the gift certificate.
 * @member {Number} original_balance
 */
GiftCertificate.prototype['original_balance'] = undefined;

/**
 * The order used to purchase this gift certificate.  This value is ONLY set during checkout when a certificate is purchased, not when it is used.  Any usage is recorded in the ledger
 * @member {String} reference_order_id
 */
GiftCertificate.prototype['reference_order_id'] = undefined;

/**
 * The remaining balance on the gift certificate.  This is never set directly, but calculated from the ledger.  To change the remaining balance, add a ledger entry.
 * @member {Number} remaining_balance
 */
GiftCertificate.prototype['remaining_balance'] = undefined;






export default GiftCertificate;

