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
 * The ConversationTwilioAccount model module.
 * @module com.ultracart.admin.v2.models/ConversationTwilioAccount
 * @version 4.0.109-RC
 */
class ConversationTwilioAccount {
    /**
     * Constructs a new <code>ConversationTwilioAccount</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationTwilioAccount
     */
    constructor() { 
        
        ConversationTwilioAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationTwilioAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationTwilioAccount} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationTwilioAccount} The populated <code>ConversationTwilioAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationTwilioAccount();

            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('twilio_phone_numbers')) {
                obj['twilio_phone_numbers'] = ApiClient.convertToType(data['twilio_phone_numbers'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} merchant_id
 */
ConversationTwilioAccount.prototype['merchant_id'] = undefined;

/**
 * @member {Array.<String>} twilio_phone_numbers
 */
ConversationTwilioAccount.prototype['twilio_phone_numbers'] = undefined;






export default ConversationTwilioAccount;

