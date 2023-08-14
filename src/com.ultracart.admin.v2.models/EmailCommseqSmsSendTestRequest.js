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
 * The EmailCommseqSmsSendTestRequest model module.
 * @module com.ultracart.admin.v2.models/EmailCommseqSmsSendTestRequest
 * @version 4.0.170
 */
class EmailCommseqSmsSendTestRequest {
    /**
     * Constructs a new <code>EmailCommseqSmsSendTestRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailCommseqSmsSendTestRequest
     */
    constructor() { 
        
        EmailCommseqSmsSendTestRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailCommseqSmsSendTestRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqSmsSendTestRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailCommseqSmsSendTestRequest} The populated <code>EmailCommseqSmsSendTestRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailCommseqSmsSendTestRequest();

            if (data.hasOwnProperty('esp_commseq_step_uuid')) {
                obj['esp_commseq_step_uuid'] = ApiClient.convertToType(data['esp_commseq_step_uuid'], 'String');
            }
            if (data.hasOwnProperty('esp_commseq_uuid')) {
                obj['esp_commseq_uuid'] = ApiClient.convertToType(data['esp_commseq_uuid'], 'String');
            }
            if (data.hasOwnProperty('send_to_cellphone_e164')) {
                obj['send_to_cellphone_e164'] = ApiClient.convertToType(data['send_to_cellphone_e164'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} esp_commseq_step_uuid
 */
EmailCommseqSmsSendTestRequest.prototype['esp_commseq_step_uuid'] = undefined;

/**
 * @member {String} esp_commseq_uuid
 */
EmailCommseqSmsSendTestRequest.prototype['esp_commseq_uuid'] = undefined;

/**
 * @member {String} send_to_cellphone_e164
 */
EmailCommseqSmsSendTestRequest.prototype['send_to_cellphone_e164'] = undefined;






export default EmailCommseqSmsSendTestRequest;

