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
import EmailCommseqStep from './EmailCommseqStep';

/**
 * The EmailCommseq model module.
 * @module com.ultracart.admin.v2.models/EmailCommseq
 * @version 4.0.56-RC
 */
class EmailCommseq {
    /**
     * Constructs a new <code>EmailCommseq</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailCommseq
     */
    constructor() { 
        
        EmailCommseq.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailCommseq</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseq} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailCommseq} The populated <code>EmailCommseq</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailCommseq();

            if (data.hasOwnProperty('email_communication_sequence_steps')) {
                obj['email_communication_sequence_steps'] = ApiClient.convertToType(data['email_communication_sequence_steps'], [EmailCommseqStep]);
            }
            if (data.hasOwnProperty('email_communication_sequence_uuid')) {
                obj['email_communication_sequence_uuid'] = ApiClient.convertToType(data['email_communication_sequence_uuid'], 'String');
            }
            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('storefront_oid')) {
                obj['storefront_oid'] = ApiClient.convertToType(data['storefront_oid'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Array of steps
 * @member {Array.<module:com.ultracart.admin.v2.models/EmailCommseqStep>} email_communication_sequence_steps
 */
EmailCommseq.prototype['email_communication_sequence_steps'] = undefined;

/**
 * Email commseq UUID
 * @member {String} email_communication_sequence_uuid
 */
EmailCommseq.prototype['email_communication_sequence_uuid'] = undefined;

/**
 * Merchant ID
 * @member {String} merchant_id
 */
EmailCommseq.prototype['merchant_id'] = undefined;

/**
 * Storefront oid
 * @member {Number} storefront_oid
 */
EmailCommseq.prototype['storefront_oid'] = undefined;






export default EmailCommseq;

