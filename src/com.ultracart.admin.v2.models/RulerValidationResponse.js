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
 * The RulerValidationResponse model module.
 * @module com.ultracart.admin.v2.models/RulerValidationResponse
 * @version 4.0.64-RC
 */
class RulerValidationResponse {
    /**
     * Constructs a new <code>RulerValidationResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/RulerValidationResponse
     */
    constructor() { 
        
        RulerValidationResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RulerValidationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/RulerValidationResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/RulerValidationResponse} The populated <code>RulerValidationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RulerValidationResponse();

            if (data.hasOwnProperty('error_message')) {
                obj['error_message'] = ApiClient.convertToType(data['error_message'], 'String');
            }
            if (data.hasOwnProperty('valid')) {
                obj['valid'] = ApiClient.convertToType(data['valid'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} error_message
 */
RulerValidationResponse.prototype['error_message'] = undefined;

/**
 * @member {Boolean} valid
 */
RulerValidationResponse.prototype['valid'] = undefined;






export default RulerValidationResponse;
