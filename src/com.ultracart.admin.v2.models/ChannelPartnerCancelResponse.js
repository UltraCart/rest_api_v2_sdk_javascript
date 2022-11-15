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
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The ChannelPartnerCancelResponse model module.
 * @module com.ultracart.admin.v2.models/ChannelPartnerCancelResponse
 * @version 4.0.82-RC
 */
class ChannelPartnerCancelResponse {
    /**
     * Constructs a new <code>ChannelPartnerCancelResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/ChannelPartnerCancelResponse
     */
    constructor() { 
        
        ChannelPartnerCancelResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChannelPartnerCancelResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ChannelPartnerCancelResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ChannelPartnerCancelResponse} The populated <code>ChannelPartnerCancelResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChannelPartnerCancelResponse();

            if (data.hasOwnProperty('cancel_errors')) {
                obj['cancel_errors'] = ApiClient.convertToType(data['cancel_errors'], ['String']);
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
 * Array of errors if errors occurred
 * @member {Array.<String>} cancel_errors
 */
ChannelPartnerCancelResponse.prototype['cancel_errors'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
ChannelPartnerCancelResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
ChannelPartnerCancelResponse.prototype['metadata'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
ChannelPartnerCancelResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
ChannelPartnerCancelResponse.prototype['warning'] = undefined;






export default ChannelPartnerCancelResponse;

