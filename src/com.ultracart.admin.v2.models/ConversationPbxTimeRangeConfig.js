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
 * The ConversationPbxTimeRangeConfig model module.
 * @module com.ultracart.admin.v2.models/ConversationPbxTimeRangeConfig
 * @version 4.1.0
 */
class ConversationPbxTimeRangeConfig {
    /**
     * Constructs a new <code>ConversationPbxTimeRangeConfig</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationPbxTimeRangeConfig
     */
    constructor() { 
        
        ConversationPbxTimeRangeConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationPbxTimeRangeConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxTimeRangeConfig} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationPbxTimeRangeConfig} The populated <code>ConversationPbxTimeRangeConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationPbxTimeRangeConfig();

            if (data.hasOwnProperty('end_date')) {
                obj['end_date'] = ApiClient.convertToType(data['end_date'], 'String');
            }
            if (data.hasOwnProperty('end_day_of_week')) {
                obj['end_day_of_week'] = ApiClient.convertToType(data['end_day_of_week'], 'Number');
            }
            if (data.hasOwnProperty('end_time')) {
                obj['end_time'] = ApiClient.convertToType(data['end_time'], 'String');
            }
            if (data.hasOwnProperty('start_date')) {
                obj['start_date'] = ApiClient.convertToType(data['start_date'], 'String');
            }
            if (data.hasOwnProperty('start_day_of_week')) {
                obj['start_day_of_week'] = ApiClient.convertToType(data['start_day_of_week'], 'Number');
            }
            if (data.hasOwnProperty('start_time')) {
                obj['start_time'] = ApiClient.convertToType(data['start_time'], 'String');
            }
        }
        return obj;
    }


}

/**
 * End date
 * @member {String} end_date
 */
ConversationPbxTimeRangeConfig.prototype['end_date'] = undefined;

/**
 * End day of week
 * @member {Number} end_day_of_week
 */
ConversationPbxTimeRangeConfig.prototype['end_day_of_week'] = undefined;

/**
 * End time
 * @member {String} end_time
 */
ConversationPbxTimeRangeConfig.prototype['end_time'] = undefined;

/**
 * Start date
 * @member {String} start_date
 */
ConversationPbxTimeRangeConfig.prototype['start_date'] = undefined;

/**
 * Start day of week
 * @member {Number} start_day_of_week
 */
ConversationPbxTimeRangeConfig.prototype['start_day_of_week'] = undefined;

/**
 * Start time
 * @member {String} start_time
 */
ConversationPbxTimeRangeConfig.prototype['start_time'] = undefined;






export default ConversationPbxTimeRangeConfig;

