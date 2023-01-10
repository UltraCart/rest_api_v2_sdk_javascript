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
import ChannelPartnerShippingEstimate from './ChannelPartnerShippingEstimate';
import Error from './Error';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The ChannelPartnerEstimateShippingResponse model module.
 * @module com.ultracart.admin.v2.models/ChannelPartnerEstimateShippingResponse
 * @version 4.0.109-RC
 */
class ChannelPartnerEstimateShippingResponse {
    /**
     * Constructs a new <code>ChannelPartnerEstimateShippingResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/ChannelPartnerEstimateShippingResponse
     */
    constructor() { 
        
        ChannelPartnerEstimateShippingResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChannelPartnerEstimateShippingResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ChannelPartnerEstimateShippingResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ChannelPartnerEstimateShippingResponse} The populated <code>ChannelPartnerEstimateShippingResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChannelPartnerEstimateShippingResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('estimates')) {
                obj['estimates'] = ApiClient.convertToType(data['estimates'], [ChannelPartnerShippingEstimate]);
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
ChannelPartnerEstimateShippingResponse.prototype['error'] = undefined;

/**
 * An array of shipping methods and their costs
 * @member {Array.<module:com.ultracart.admin.v2.models/ChannelPartnerShippingEstimate>} estimates
 */
ChannelPartnerEstimateShippingResponse.prototype['estimates'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
ChannelPartnerEstimateShippingResponse.prototype['metadata'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
ChannelPartnerEstimateShippingResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
ChannelPartnerEstimateShippingResponse.prototype['warning'] = undefined;






export default ChannelPartnerEstimateShippingResponse;

