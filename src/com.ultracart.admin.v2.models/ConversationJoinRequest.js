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
 * The ConversationJoinRequest model module.
 * @module com.ultracart.admin.v2.models/ConversationJoinRequest
 * @version 4.0.159
 */
class ConversationJoinRequest {
    /**
     * Constructs a new <code>ConversationJoinRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationJoinRequest
     */
    constructor() { 
        
        ConversationJoinRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationJoinRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationJoinRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationJoinRequest} The populated <code>ConversationJoinRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationJoinRequest();

            if (data.hasOwnProperty('participant_language_iso_code')) {
                obj['participant_language_iso_code'] = ApiClient.convertToType(data['participant_language_iso_code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} participant_language_iso_code
 */
ConversationJoinRequest.prototype['participant_language_iso_code'] = undefined;






export default ConversationJoinRequest;

