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
import CartItem from './CartItem';

/**
 * The ConversationEventAddItem model module.
 * @module com.ultracart.admin.v2.models/ConversationEventAddItem
 * @version 4.0.170
 */
class ConversationEventAddItem {
    /**
     * Constructs a new <code>ConversationEventAddItem</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationEventAddItem
     */
    constructor() { 
        
        ConversationEventAddItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationEventAddItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationEventAddItem} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationEventAddItem} The populated <code>ConversationEventAddItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationEventAddItem();

            if (data.hasOwnProperty('agent_arn')) {
                obj['agent_arn'] = ApiClient.convertToType(data['agent_arn'], 'String');
            }
            if (data.hasOwnProperty('agent_name')) {
                obj['agent_name'] = ApiClient.convertToType(data['agent_name'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [CartItem]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} agent_arn
 */
ConversationEventAddItem.prototype['agent_arn'] = undefined;

/**
 * @member {String} agent_name
 */
ConversationEventAddItem.prototype['agent_name'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/CartItem>} items
 */
ConversationEventAddItem.prototype['items'] = undefined;






export default ConversationEventAddItem;

