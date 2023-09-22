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
import EmailStepStat from './EmailStepStat';
import Error from './Error';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The EmailStepStatResponse model module.
 * @module com.ultracart.admin.v2.models/EmailStepStatResponse
 * @version 4.0.178
 */
class EmailStepStatResponse {
    /**
     * Constructs a new <code>EmailStepStatResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailStepStatResponse
     */
    constructor() { 
        
        EmailStepStatResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailStepStatResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailStepStatResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailStepStatResponse} The populated <code>EmailStepStatResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailStepStatResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('stats')) {
                obj['stats'] = ApiClient.convertToType(data['stats'], [EmailStepStat]);
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
EmailStepStatResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
EmailStepStatResponse.prototype['metadata'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/EmailStepStat>} stats
 */
EmailStepStatResponse.prototype['stats'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
EmailStepStatResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
EmailStepStatResponse.prototype['warning'] = undefined;






export default EmailStepStatResponse;

