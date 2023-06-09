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
import EmailPlan from './EmailPlan';
import Error from './Error';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The EmailPlanResponse model module.
 * @module com.ultracart.admin.v2.models/EmailPlanResponse
 * @version 4.0.159
 */
class EmailPlanResponse {
    /**
     * Constructs a new <code>EmailPlanResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailPlanResponse
     */
    constructor() { 
        
        EmailPlanResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailPlanResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailPlanResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailPlanResponse} The populated <code>EmailPlanResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailPlanResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('plan')) {
                obj['plan'] = EmailPlan.constructFromObject(data['plan']);
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
EmailPlanResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
EmailPlanResponse.prototype['metadata'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/EmailPlan} plan
 */
EmailPlanResponse.prototype['plan'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
EmailPlanResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
EmailPlanResponse.prototype['warning'] = undefined;






export default EmailPlanResponse;

