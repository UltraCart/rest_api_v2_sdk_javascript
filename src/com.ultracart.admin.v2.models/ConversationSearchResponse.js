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
import ConversationSummary from './ConversationSummary';

/**
 * The ConversationSearchResponse model module.
 * @module com.ultracart.admin.v2.models/ConversationSearchResponse
 * @version 4.1.16
 */
class ConversationSearchResponse {
    /**
     * Constructs a new <code>ConversationSearchResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationSearchResponse
     */
    constructor() { 
        
        ConversationSearchResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationSearchResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationSearchResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationSearchResponse} The populated <code>ConversationSearchResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationSearchResponse();

            if (data.hasOwnProperty('range_begin')) {
                obj['range_begin'] = ApiClient.convertToType(data['range_begin'], 'Number');
            }
            if (data.hasOwnProperty('range_end')) {
                obj['range_end'] = ApiClient.convertToType(data['range_end'], 'Number');
            }
            if (data.hasOwnProperty('records')) {
                obj['records'] = ApiClient.convertToType(data['records'], [ConversationSummary]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} range_begin
 */
ConversationSearchResponse.prototype['range_begin'] = undefined;

/**
 * @member {Number} range_end
 */
ConversationSearchResponse.prototype['range_end'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ConversationSummary>} records
 */
ConversationSearchResponse.prototype['records'] = undefined;

/**
 * @member {Number} total
 */
ConversationSearchResponse.prototype['total'] = undefined;






export default ConversationSearchResponse;

