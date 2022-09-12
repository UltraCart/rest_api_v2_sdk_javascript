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
import Mailgun from './Mailgun';
import VerificationRecord from './VerificationRecord';

/**
 * The EmailDomain model module.
 * @module com.ultracart.admin.v2.models/EmailDomain
 * @version 4.0.62-RC
 */
class EmailDomain {
    /**
     * Constructs a new <code>EmailDomain</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailDomain
     */
    constructor() { 
        
        EmailDomain.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailDomain</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailDomain} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailDomain} The populated <code>EmailDomain</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailDomain();

            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('dkim')) {
                obj['dkim'] = ApiClient.convertToType(data['dkim'], [VerificationRecord]);
            }
            if (data.hasOwnProperty('dkim_status')) {
                obj['dkim_status'] = ApiClient.convertToType(data['dkim_status'], 'String');
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
            if (data.hasOwnProperty('esp_domain_uuid')) {
                obj['esp_domain_uuid'] = ApiClient.convertToType(data['esp_domain_uuid'], 'String');
            }
            if (data.hasOwnProperty('identity_status')) {
                obj['identity_status'] = ApiClient.convertToType(data['identity_status'], 'String');
            }
            if (data.hasOwnProperty('mailgun')) {
                obj['mailgun'] = Mailgun.constructFromObject(data['mailgun']);
            }
            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('provider')) {
                obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
            }
            if (data.hasOwnProperty('spf')) {
                obj['spf'] = VerificationRecord.constructFromObject(data['spf']);
            }
            if (data.hasOwnProperty('start_dkim_dts')) {
                obj['start_dkim_dts'] = ApiClient.convertToType(data['start_dkim_dts'], 'String');
            }
            if (data.hasOwnProperty('start_identity_dts')) {
                obj['start_identity_dts'] = ApiClient.convertToType(data['start_identity_dts'], 'String');
            }
            if (data.hasOwnProperty('verification')) {
                obj['verification'] = VerificationRecord.constructFromObject(data['verification']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} comment
 */
EmailDomain.prototype['comment'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/VerificationRecord>} dkim
 */
EmailDomain.prototype['dkim'] = undefined;

/**
 * @member {String} dkim_status
 */
EmailDomain.prototype['dkim_status'] = undefined;

/**
 * @member {String} domain
 */
EmailDomain.prototype['domain'] = undefined;

/**
 * @member {String} esp_domain_uuid
 */
EmailDomain.prototype['esp_domain_uuid'] = undefined;

/**
 * @member {String} identity_status
 */
EmailDomain.prototype['identity_status'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Mailgun} mailgun
 */
EmailDomain.prototype['mailgun'] = undefined;

/**
 * @member {String} merchant_id
 */
EmailDomain.prototype['merchant_id'] = undefined;

/**
 * @member {String} provider
 */
EmailDomain.prototype['provider'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/VerificationRecord} spf
 */
EmailDomain.prototype['spf'] = undefined;

/**
 * @member {String} start_dkim_dts
 */
EmailDomain.prototype['start_dkim_dts'] = undefined;

/**
 * @member {String} start_identity_dts
 */
EmailDomain.prototype['start_identity_dts'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/VerificationRecord} verification
 */
EmailDomain.prototype['verification'] = undefined;






export default EmailDomain;

