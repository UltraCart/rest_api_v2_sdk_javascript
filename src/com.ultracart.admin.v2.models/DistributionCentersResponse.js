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
import DistributionCenter from './DistributionCenter';
import Error from './Error';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The DistributionCentersResponse model module.
 * @module com.ultracart.admin.v2.models/DistributionCentersResponse
 * @version 4.0.165
 */
class DistributionCentersResponse {
    /**
     * Constructs a new <code>DistributionCentersResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/DistributionCentersResponse
     */
    constructor() { 
        
        DistributionCentersResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DistributionCentersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/DistributionCentersResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/DistributionCentersResponse} The populated <code>DistributionCentersResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DistributionCentersResponse();

            if (data.hasOwnProperty('distribution_centers')) {
                obj['distribution_centers'] = ApiClient.convertToType(data['distribution_centers'], [DistributionCenter]);
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
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
 * @member {Array.<module:com.ultracart.admin.v2.models/DistributionCenter>} distribution_centers
 */
DistributionCentersResponse.prototype['distribution_centers'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
DistributionCentersResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
DistributionCentersResponse.prototype['metadata'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
DistributionCentersResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
DistributionCentersResponse.prototype['warning'] = undefined;






export default DistributionCentersResponse;

