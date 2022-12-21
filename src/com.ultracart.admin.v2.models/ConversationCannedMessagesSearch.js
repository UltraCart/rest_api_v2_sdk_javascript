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
 * The ConversationCannedMessagesSearch model module.
 * @module com.ultracart.admin.v2.models/ConversationCannedMessagesSearch
 * @version 4.0.102-RC
 */
class ConversationCannedMessagesSearch {
    /**
     * Constructs a new <code>ConversationCannedMessagesSearch</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationCannedMessagesSearch
     */
    constructor() { 
        
        ConversationCannedMessagesSearch.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationCannedMessagesSearch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationCannedMessagesSearch} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationCannedMessagesSearch} The populated <code>ConversationCannedMessagesSearch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationCannedMessagesSearch();

            if (data.hasOwnProperty('max_results')) {
                obj['max_results'] = ApiClient.convertToType(data['max_results'], 'Number');
            }
            if (data.hasOwnProperty('short_code')) {
                obj['short_code'] = ApiClient.convertToType(data['short_code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} max_results
 */
ConversationCannedMessagesSearch.prototype['max_results'] = undefined;

/**
 * @member {String} short_code
 */
ConversationCannedMessagesSearch.prototype['short_code'] = undefined;






export default ConversationCannedMessagesSearch;

