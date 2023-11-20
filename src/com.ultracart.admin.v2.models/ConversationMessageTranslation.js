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
 * The ConversationMessageTranslation model module.
 * @module com.ultracart.admin.v2.models/ConversationMessageTranslation
 * @version 4.0.190
 */
class ConversationMessageTranslation {
    /**
     * Constructs a new <code>ConversationMessageTranslation</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationMessageTranslation
     */
    constructor() { 
        
        ConversationMessageTranslation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationMessageTranslation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationMessageTranslation} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationMessageTranslation} The populated <code>ConversationMessageTranslation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationMessageTranslation();

            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('language_iso_code')) {
                obj['language_iso_code'] = ApiClient.convertToType(data['language_iso_code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} body
 */
ConversationMessageTranslation.prototype['body'] = undefined;

/**
 * @member {String} language_iso_code
 */
ConversationMessageTranslation.prototype['language_iso_code'] = undefined;






export default ConversationMessageTranslation;

