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
 * The StepWaiting model module.
 * @module com.ultracart.admin.v2.models/StepWaiting
 * @version 4.0.142
 */
class StepWaiting {
    /**
     * Constructs a new <code>StepWaiting</code>.
     * @alias module:com.ultracart.admin.v2.models/StepWaiting
     */
    constructor() { 
        
        StepWaiting.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StepWaiting</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/StepWaiting} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/StepWaiting} The populated <code>StepWaiting</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StepWaiting();

            if (data.hasOwnProperty('commseq_step_uuid')) {
                obj['commseq_step_uuid'] = ApiClient.convertToType(data['commseq_step_uuid'], 'String');
            }
            if (data.hasOwnProperty('number_waiting')) {
                obj['number_waiting'] = ApiClient.convertToType(data['number_waiting'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} commseq_step_uuid
 */
StepWaiting.prototype['commseq_step_uuid'] = undefined;

/**
 * @member {Number} number_waiting
 */
StepWaiting.prototype['number_waiting'] = undefined;






export default StepWaiting;

