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
 * The ConversationMessageTransportStatus model module.
 * @module com.ultracart.admin.v2.models/ConversationMessageTransportStatus
 * @version 4.0.141
 */
class ConversationMessageTransportStatus {
    /**
     * Constructs a new <code>ConversationMessageTransportStatus</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationMessageTransportStatus
     */
    constructor() { 
        
        ConversationMessageTransportStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationMessageTransportStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationMessageTransportStatus} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationMessageTransportStatus} The populated <code>ConversationMessageTransportStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationMessageTransportStatus();

            if (data.hasOwnProperty('conversation_participant_arn')) {
                obj['conversation_participant_arn'] = ApiClient.convertToType(data['conversation_participant_arn'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} conversation_participant_arn
 */
ConversationMessageTransportStatus.prototype['conversation_participant_arn'] = undefined;

/**
 * The status of the message transport
 * @member {module:com.ultracart.admin.v2.models/ConversationMessageTransportStatus.StatusEnum} status
 */
ConversationMessageTransportStatus.prototype['status'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
ConversationMessageTransportStatus['StatusEnum'] = {

    /**
     * value: "accepted"
     * @const
     */
    "accepted": "accepted",

    /**
     * value: "scheduled"
     * @const
     */
    "scheduled": "scheduled",

    /**
     * value: "queued"
     * @const
     */
    "queued": "queued",

    /**
     * value: "sending"
     * @const
     */
    "sending": "sending",

    /**
     * value: "sent"
     * @const
     */
    "sent": "sent",

    /**
     * value: "read"
     * @const
     */
    "read": "read",

    /**
     * value: "TWILIO_CREDENTIALS_MISSING"
     * @const
     */
    "TWILIO_CREDENTIALS_MISSING": "TWILIO_CREDENTIALS_MISSING",

    /**
     * value: "SENT_TO_TWILIO"
     * @const
     */
    "SENT_TO_TWILIO": "SENT_TO_TWILIO",

    /**
     * value: "TWILIO_ERROR"
     * @const
     */
    "TWILIO_ERROR": "TWILIO_ERROR",

    /**
     * value: "SENT_TO_PINPOINT"
     * @const
     */
    "SENT_TO_PINPOINT": "SENT_TO_PINPOINT",

    /**
     * value: "PINPOINT_ERROR"
     * @const
     */
    "PINPOINT_ERROR": "PINPOINT_ERROR"
};



export default ConversationMessageTransportStatus;

