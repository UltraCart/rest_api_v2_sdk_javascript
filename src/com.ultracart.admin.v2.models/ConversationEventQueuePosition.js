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
 * The ConversationEventQueuePosition model module.
 * @module com.ultracart.admin.v2.models/ConversationEventQueuePosition
 * @version 4.0.92-RC
 */
class ConversationEventQueuePosition {
    /**
     * Constructs a new <code>ConversationEventQueuePosition</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationEventQueuePosition
     */
    constructor() { 
        
        ConversationEventQueuePosition.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationEventQueuePosition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationEventQueuePosition} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationEventQueuePosition} The populated <code>ConversationEventQueuePosition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationEventQueuePosition();

            if (data.hasOwnProperty('available')) {
                obj['available'] = ApiClient.convertToType(data['available'], 'Boolean');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * True if agents are logged into the queue
 * @member {Boolean} available
 */
ConversationEventQueuePosition.prototype['available'] = undefined;

/**
 * Position in the queue.  Value will be -1 if they cant be found in the queue.
 * @member {Number} position
 */
ConversationEventQueuePosition.prototype['position'] = undefined;






export default ConversationEventQueuePosition;

