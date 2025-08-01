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
import ConversationPbxTimeRange from './ConversationPbxTimeRange';
import Error from './Error';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The ConversationPbxTimeRangesResponse model module.
 * @module com.ultracart.admin.v2.models/ConversationPbxTimeRangesResponse
 * @version 4.1.16
 */
class ConversationPbxTimeRangesResponse {
    /**
     * Constructs a new <code>ConversationPbxTimeRangesResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationPbxTimeRangesResponse
     */
    constructor() { 
        
        ConversationPbxTimeRangesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationPbxTimeRangesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxTimeRangesResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationPbxTimeRangesResponse} The populated <code>ConversationPbxTimeRangesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationPbxTimeRangesResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('time_ranges')) {
                obj['time_ranges'] = ApiClient.convertToType(data['time_ranges'], [ConversationPbxTimeRange]);
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
ConversationPbxTimeRangesResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
ConversationPbxTimeRangesResponse.prototype['metadata'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
ConversationPbxTimeRangesResponse.prototype['success'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ConversationPbxTimeRange>} time_ranges
 */
ConversationPbxTimeRangesResponse.prototype['time_ranges'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
ConversationPbxTimeRangesResponse.prototype['warning'] = undefined;






export default ConversationPbxTimeRangesResponse;

