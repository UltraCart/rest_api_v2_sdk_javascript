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
import Error from './Error';
import Experiment from './Experiment';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The ExperimentsResponse model module.
 * @module com.ultracart.admin.v2.models/ExperimentsResponse
 * @version 4.0.70-RC
 */
class ExperimentsResponse {
    /**
     * Constructs a new <code>ExperimentsResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/ExperimentsResponse
     */
    constructor() { 
        
        ExperimentsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExperimentsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ExperimentsResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ExperimentsResponse} The populated <code>ExperimentsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExperimentsResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('experiments')) {
                obj['experiments'] = ApiClient.convertToType(data['experiments'], [Experiment]);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
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
ExperimentsResponse.prototype['error'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/Experiment>} experiments
 */
ExperimentsResponse.prototype['experiments'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
ExperimentsResponse.prototype['metadata'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
ExperimentsResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
ExperimentsResponse.prototype['warning'] = undefined;






export default ExperimentsResponse;

