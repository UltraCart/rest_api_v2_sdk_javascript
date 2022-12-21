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
 * The EmailStatPostcardSummaryRequest model module.
 * @module com.ultracart.admin.v2.models/EmailStatPostcardSummaryRequest
 * @version 4.0.102-RC
 */
class EmailStatPostcardSummaryRequest {
    /**
     * Constructs a new <code>EmailStatPostcardSummaryRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailStatPostcardSummaryRequest
     */
    constructor() { 
        
        EmailStatPostcardSummaryRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailStatPostcardSummaryRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailStatPostcardSummaryRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailStatPostcardSummaryRequest} The populated <code>EmailStatPostcardSummaryRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailStatPostcardSummaryRequest();

            if (data.hasOwnProperty('commseq_postcard_uuids')) {
                obj['commseq_postcard_uuids'] = ApiClient.convertToType(data['commseq_postcard_uuids'], ['String']);
            }
            if (data.hasOwnProperty('days')) {
                obj['days'] = ApiClient.convertToType(data['days'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} commseq_postcard_uuids
 */
EmailStatPostcardSummaryRequest.prototype['commseq_postcard_uuids'] = undefined;

/**
 * @member {Number} days
 */
EmailStatPostcardSummaryRequest.prototype['days'] = undefined;






export default EmailStatPostcardSummaryRequest;

