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
import ConversationLocationStateProvince from './ConversationLocationStateProvince';

/**
 * The ConversationLocationCountry model module.
 * @module com.ultracart.admin.v2.models/ConversationLocationCountry
 * @version 4.1.16
 */
class ConversationLocationCountry {
    /**
     * Constructs a new <code>ConversationLocationCountry</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationLocationCountry
     */
    constructor() { 
        
        ConversationLocationCountry.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationLocationCountry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationLocationCountry} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationLocationCountry} The populated <code>ConversationLocationCountry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationLocationCountry();

            if (data.hasOwnProperty('iso2')) {
                obj['iso2'] = ApiClient.convertToType(data['iso2'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('state_provinces')) {
                obj['state_provinces'] = ApiClient.convertToType(data['state_provinces'], [ConversationLocationStateProvince]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} iso2
 */
ConversationLocationCountry.prototype['iso2'] = undefined;

/**
 * @member {String} name
 */
ConversationLocationCountry.prototype['name'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ConversationLocationStateProvince>} state_provinces
 */
ConversationLocationCountry.prototype['state_provinces'] = undefined;






export default ConversationLocationCountry;

