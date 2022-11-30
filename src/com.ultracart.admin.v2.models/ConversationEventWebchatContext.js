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
 * The ConversationEventWebchatContext model module.
 * @module com.ultracart.admin.v2.models/ConversationEventWebchatContext
 * @version 4.0.89-RC
 */
class ConversationEventWebchatContext {
    /**
     * Constructs a new <code>ConversationEventWebchatContext</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationEventWebchatContext
     */
    constructor() { 
        
        ConversationEventWebchatContext.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationEventWebchatContext</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationEventWebchatContext} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationEventWebchatContext} The populated <code>ConversationEventWebchatContext</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationEventWebchatContext();

            if (data.hasOwnProperty('cart_id')) {
                obj['cart_id'] = ApiClient.convertToType(data['cart_id'], 'String');
            }
            if (data.hasOwnProperty('ucacid')) {
                obj['ucacid'] = ApiClient.convertToType(data['ucacid'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} cart_id
 */
ConversationEventWebchatContext.prototype['cart_id'] = undefined;

/**
 * @member {String} ucacid
 */
ConversationEventWebchatContext.prototype['ucacid'] = undefined;

/**
 * @member {String} url
 */
ConversationEventWebchatContext.prototype['url'] = undefined;






export default ConversationEventWebchatContext;
