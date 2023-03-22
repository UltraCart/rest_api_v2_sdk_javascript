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
import ConversationTwilioAccount from './ConversationTwilioAccount';

/**
 * The ConversationAgentAuth model module.
 * @module com.ultracart.admin.v2.models/ConversationAgentAuth
 * @version 4.0.142
 */
class ConversationAgentAuth {
    /**
     * Constructs a new <code>ConversationAgentAuth</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationAgentAuth
     */
    constructor() { 
        
        ConversationAgentAuth.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationAgentAuth</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationAgentAuth} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationAgentAuth} The populated <code>ConversationAgentAuth</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationAgentAuth();

            if (data.hasOwnProperty('conversation_participant_arn')) {
                obj['conversation_participant_arn'] = ApiClient.convertToType(data['conversation_participant_arn'], 'String');
            }
            if (data.hasOwnProperty('conversation_participant_name')) {
                obj['conversation_participant_name'] = ApiClient.convertToType(data['conversation_participant_name'], 'String');
            }
            if (data.hasOwnProperty('jwt')) {
                obj['jwt'] = ApiClient.convertToType(data['jwt'], 'String');
            }
            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('twilio_accounts')) {
                obj['twilio_accounts'] = ApiClient.convertToType(data['twilio_accounts'], [ConversationTwilioAccount]);
            }
            if (data.hasOwnProperty('websocket_url')) {
                obj['websocket_url'] = ApiClient.convertToType(data['websocket_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} conversation_participant_arn
 */
ConversationAgentAuth.prototype['conversation_participant_arn'] = undefined;

/**
 * @member {String} conversation_participant_name
 */
ConversationAgentAuth.prototype['conversation_participant_name'] = undefined;

/**
 * @member {String} jwt
 */
ConversationAgentAuth.prototype['jwt'] = undefined;

/**
 * @member {String} merchant_id
 */
ConversationAgentAuth.prototype['merchant_id'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ConversationTwilioAccount>} twilio_accounts
 */
ConversationAgentAuth.prototype['twilio_accounts'] = undefined;

/**
 * @member {String} websocket_url
 */
ConversationAgentAuth.prototype['websocket_url'] = undefined;






export default ConversationAgentAuth;

