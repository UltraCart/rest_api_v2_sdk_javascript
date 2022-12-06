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
import EmailPostcardStat from './EmailPostcardStat';
import Error from './Error';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The EmailStatPostcardSummaryResponse model module.
 * @module com.ultracart.admin.v2.models/EmailStatPostcardSummaryResponse
 * @version 4.0.92-RC
 */
class EmailStatPostcardSummaryResponse {
    /**
     * Constructs a new <code>EmailStatPostcardSummaryResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailStatPostcardSummaryResponse
     */
    constructor() { 
        
        EmailStatPostcardSummaryResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailStatPostcardSummaryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailStatPostcardSummaryResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailStatPostcardSummaryResponse} The populated <code>EmailStatPostcardSummaryResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailStatPostcardSummaryResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('stats')) {
                obj['stats'] = ApiClient.convertToType(data['stats'], [EmailPostcardStat]);
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('warning')) {
                obj['warning'] = Warning.constructFromObject(data['warning']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
EmailStatPostcardSummaryResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
EmailStatPostcardSummaryResponse.prototype['metadata'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/EmailPostcardStat>} stats
 */
EmailStatPostcardSummaryResponse.prototype['stats'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
EmailStatPostcardSummaryResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
EmailStatPostcardSummaryResponse.prototype['warning'] = undefined;






export default EmailStatPostcardSummaryResponse;

