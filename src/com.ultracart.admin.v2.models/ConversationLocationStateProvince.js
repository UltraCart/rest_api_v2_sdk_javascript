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
 * The ConversationLocationStateProvince model module.
 * @module com.ultracart.admin.v2.models/ConversationLocationStateProvince
 * @version 4.1.16
 */
class ConversationLocationStateProvince {
    /**
     * Constructs a new <code>ConversationLocationStateProvince</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationLocationStateProvince
     */
    constructor() { 
        
        ConversationLocationStateProvince.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationLocationStateProvince</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationLocationStateProvince} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationLocationStateProvince} The populated <code>ConversationLocationStateProvince</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationLocationStateProvince();

            if (data.hasOwnProperty('abbreviation')) {
                obj['abbreviation'] = ApiClient.convertToType(data['abbreviation'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} abbreviation
 */
ConversationLocationStateProvince.prototype['abbreviation'] = undefined;

/**
 * @member {String} name
 */
ConversationLocationStateProvince.prototype['name'] = undefined;






export default ConversationLocationStateProvince;

