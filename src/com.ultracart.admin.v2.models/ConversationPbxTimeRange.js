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
import ConversationPbxTimeRangeConfig from './ConversationPbxTimeRangeConfig';

/**
 * The ConversationPbxTimeRange model module.
 * @module com.ultracart.admin.v2.models/ConversationPbxTimeRange
 * @version 4.1.16
 */
class ConversationPbxTimeRange {
    /**
     * Constructs a new <code>ConversationPbxTimeRange</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationPbxTimeRange
     */
    constructor() { 
        
        ConversationPbxTimeRange.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationPbxTimeRange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxTimeRange} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationPbxTimeRange} The populated <code>ConversationPbxTimeRange</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationPbxTimeRange();

            if (data.hasOwnProperty('configs')) {
                obj['configs'] = ApiClient.convertToType(data['configs'], [ConversationPbxTimeRangeConfig]);
            }
            if (data.hasOwnProperty('conversation_pbx_time_range_uuid')) {
                obj['conversation_pbx_time_range_uuid'] = ApiClient.convertToType(data['conversation_pbx_time_range_uuid'], 'String');
            }
            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('time_range_name')) {
                obj['time_range_name'] = ApiClient.convertToType(data['time_range_name'], 'String');
            }
            if (data.hasOwnProperty('timezone')) {
                obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Configurations for all ranges in this time range
 * @member {Array.<module:com.ultracart.admin.v2.models/ConversationPbxTimeRangeConfig>} configs
 */
ConversationPbxTimeRange.prototype['configs'] = undefined;

/**
 * Conversation Pbx Time Range UUID
 * @member {String} conversation_pbx_time_range_uuid
 */
ConversationPbxTimeRange.prototype['conversation_pbx_time_range_uuid'] = undefined;

/**
 * Merchant Id
 * @member {String} merchant_id
 */
ConversationPbxTimeRange.prototype['merchant_id'] = undefined;

/**
 * Time range name
 * @member {String} time_range_name
 */
ConversationPbxTimeRange.prototype['time_range_name'] = undefined;

/**
 * Timezone
 * @member {String} timezone
 */
ConversationPbxTimeRange.prototype['timezone'] = undefined;






export default ConversationPbxTimeRange;

