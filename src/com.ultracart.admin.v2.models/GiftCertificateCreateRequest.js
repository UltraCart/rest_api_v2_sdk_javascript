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
 * The GiftCertificateCreateRequest model module.
 * @module com.ultracart.admin.v2.models/GiftCertificateCreateRequest
 * @version 4.0.165
 */
class GiftCertificateCreateRequest {
    /**
     * Constructs a new <code>GiftCertificateCreateRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/GiftCertificateCreateRequest
     */
    constructor() { 
        
        GiftCertificateCreateRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GiftCertificateCreateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/GiftCertificateCreateRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/GiftCertificateCreateRequest} The populated <code>GiftCertificateCreateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GiftCertificateCreateRequest();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('expiration_dts')) {
                obj['expiration_dts'] = ApiClient.convertToType(data['expiration_dts'], 'String');
            }
            if (data.hasOwnProperty('initial_ledger_description')) {
                obj['initial_ledger_description'] = ApiClient.convertToType(data['initial_ledger_description'], 'String');
            }
            if (data.hasOwnProperty('merchant_note')) {
                obj['merchant_note'] = ApiClient.convertToType(data['merchant_note'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Initial amount of this gift certificate.
 * @member {Number} amount
 */
GiftCertificateCreateRequest.prototype['amount'] = undefined;

/**
 * The email address (customer/owner) associated with this gift certificate.
 * @member {String} email
 */
GiftCertificateCreateRequest.prototype['email'] = undefined;

/**
 * Expiration date time.
 * @member {String} expiration_dts
 */
GiftCertificateCreateRequest.prototype['expiration_dts'] = undefined;

/**
 * A brief description of how and/or why this gift certificate was created.
 * @member {String} initial_ledger_description
 */
GiftCertificateCreateRequest.prototype['initial_ledger_description'] = undefined;

/**
 * Any internal details you wish to record about this gift certificate.
 * @member {String} merchant_note
 */
GiftCertificateCreateRequest.prototype['merchant_note'] = undefined;






export default GiftCertificateCreateRequest;

