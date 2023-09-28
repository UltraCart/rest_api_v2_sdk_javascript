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
import ConversationEngagementEquationFunction from './ConversationEngagementEquationFunction';

/**
 * The ConversationEngagementEquationGroup model module.
 * @module com.ultracart.admin.v2.models/ConversationEngagementEquationGroup
 * @version 4.0.179
 */
class ConversationEngagementEquationGroup {
    /**
     * Constructs a new <code>ConversationEngagementEquationGroup</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationEngagementEquationGroup
     */
    constructor() { 
        
        ConversationEngagementEquationGroup.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationEngagementEquationGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationEngagementEquationGroup} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationEngagementEquationGroup} The populated <code>ConversationEngagementEquationGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationEngagementEquationGroup();

            if (data.hasOwnProperty('functions')) {
                obj['functions'] = ApiClient.convertToType(data['functions'], [ConversationEngagementEquationFunction]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ConversationEngagementEquationFunction>} functions
 */
ConversationEngagementEquationGroup.prototype['functions'] = undefined;






export default ConversationEngagementEquationGroup;

