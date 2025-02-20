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
 * The ConversationPbxMenuMapping model module.
 * @module com.ultracart.admin.v2.models/ConversationPbxMenuMapping
 * @version 4.0.244
 */
class ConversationPbxMenuMapping {
    /**
     * Constructs a new <code>ConversationPbxMenuMapping</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationPbxMenuMapping
     */
    constructor() { 
        
        ConversationPbxMenuMapping.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationPbxMenuMapping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxMenuMapping} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationPbxMenuMapping} The populated <code>ConversationPbxMenuMapping</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationPbxMenuMapping();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('action_target')) {
                obj['action_target'] = ApiClient.convertToType(data['action_target'], 'String');
            }
            if (data.hasOwnProperty('digits')) {
                obj['digits'] = ApiClient.convertToType(data['digits'], 'Number');
            }
            if (data.hasOwnProperty('speech')) {
                obj['speech'] = ApiClient.convertToType(data['speech'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Action
 * @member {module:com.ultracart.admin.v2.models/ConversationPbxMenuMapping.ActionEnum} action
 */
ConversationPbxMenuMapping.prototype['action'] = undefined;

/**
 * Action target.  This is the UUID associated with the configuration object of that particular type.
 * @member {String} action_target
 */
ConversationPbxMenuMapping.prototype['action_target'] = undefined;

/**
 * Digits
 * @member {Number} digits
 */
ConversationPbxMenuMapping.prototype['digits'] = undefined;

/**
 * Speech
 * @member {String} speech
 */
ConversationPbxMenuMapping.prototype['speech'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
ConversationPbxMenuMapping['ActionEnum'] = {

    /**
     * value: "time based"
     * @const
     */
    "time based": "time based",

    /**
     * value: "menu"
     * @const
     */
    "menu": "menu",

    /**
     * value: "queue"
     * @const
     */
    "queue": "queue",

    /**
     * value: "voicemail"
     * @const
     */
    "voicemail": "voicemail",

    /**
     * value: "agent"
     * @const
     */
    "agent": "agent"
};



export default ConversationPbxMenuMapping;

