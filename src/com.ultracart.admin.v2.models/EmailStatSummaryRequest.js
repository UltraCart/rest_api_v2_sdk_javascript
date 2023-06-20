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
 * The EmailStatSummaryRequest model module.
 * @module com.ultracart.admin.v2.models/EmailStatSummaryRequest
 * @version 4.0.163
 */
class EmailStatSummaryRequest {
    /**
     * Constructs a new <code>EmailStatSummaryRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailStatSummaryRequest
     */
    constructor() { 
        
        EmailStatSummaryRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailStatSummaryRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailStatSummaryRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailStatSummaryRequest} The populated <code>EmailStatSummaryRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailStatSummaryRequest();

            if (data.hasOwnProperty('commseq_email_uuids')) {
                obj['commseq_email_uuids'] = ApiClient.convertToType(data['commseq_email_uuids'], ['String']);
            }
            if (data.hasOwnProperty('commseq_step_uuids')) {
                obj['commseq_step_uuids'] = ApiClient.convertToType(data['commseq_step_uuids'], ['String']);
            }
            if (data.hasOwnProperty('days')) {
                obj['days'] = ApiClient.convertToType(data['days'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} commseq_email_uuids
 */
EmailStatSummaryRequest.prototype['commseq_email_uuids'] = undefined;

/**
 * @member {Array.<String>} commseq_step_uuids
 */
EmailStatSummaryRequest.prototype['commseq_step_uuids'] = undefined;

/**
 * @member {Number} days
 */
EmailStatSummaryRequest.prototype['days'] = undefined;






export default EmailStatSummaryRequest;

