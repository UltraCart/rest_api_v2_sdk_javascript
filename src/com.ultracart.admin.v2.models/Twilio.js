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
 * The Twilio model module.
 * @module com.ultracart.admin.v2.models/Twilio
 * @version 4.0.126-RC
 */
class Twilio {
    /**
     * Constructs a new <code>Twilio</code>.
     * @alias module:com.ultracart.admin.v2.models/Twilio
     */
    constructor() { 
        
        Twilio.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Twilio</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Twilio} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Twilio} The populated <code>Twilio</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Twilio();

            if (data.hasOwnProperty('account_sid')) {
                obj['account_sid'] = ApiClient.convertToType(data['account_sid'], 'String');
            }
            if (data.hasOwnProperty('auth_token')) {
                obj['auth_token'] = ApiClient.convertToType(data['auth_token'], 'String');
            }
            if (data.hasOwnProperty('esp_twilio_uuid')) {
                obj['esp_twilio_uuid'] = ApiClient.convertToType(data['esp_twilio_uuid'], 'String');
            }
            if (data.hasOwnProperty('phone_numbers')) {
                obj['phone_numbers'] = ApiClient.convertToType(data['phone_numbers'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} account_sid
 */
Twilio.prototype['account_sid'] = undefined;

/**
 * @member {String} auth_token
 */
Twilio.prototype['auth_token'] = undefined;

/**
 * @member {String} esp_twilio_uuid
 */
Twilio.prototype['esp_twilio_uuid'] = undefined;

/**
 * @member {Array.<String>} phone_numbers
 */
Twilio.prototype['phone_numbers'] = undefined;






export default Twilio;

