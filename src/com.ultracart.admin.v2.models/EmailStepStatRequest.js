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
 * The EmailStepStatRequest model module.
 * @module com.ultracart.admin.v2.models/EmailStepStatRequest
 * @version 4.0.178
 */
class EmailStepStatRequest {
    /**
     * Constructs a new <code>EmailStepStatRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailStepStatRequest
     */
    constructor() { 
        
        EmailStepStatRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailStepStatRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailStepStatRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailStepStatRequest} The populated <code>EmailStepStatRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailStepStatRequest();

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
 * @member {Array.<String>} commseq_step_uuids
 */
EmailStepStatRequest.prototype['commseq_step_uuids'] = undefined;

/**
 * @member {Number} days
 */
EmailStepStatRequest.prototype['days'] = undefined;






export default EmailStepStatRequest;

