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
import ConversationAgentAuth from './ConversationAgentAuth';
import Error from './Error';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The ConversationAgentAuthResponse model module.
 * @module com.ultracart.admin.v2.models/ConversationAgentAuthResponse
 * @version 4.0.159
 */
class ConversationAgentAuthResponse {
    /**
     * Constructs a new <code>ConversationAgentAuthResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationAgentAuthResponse
     */
    constructor() { 
        
        ConversationAgentAuthResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationAgentAuthResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationAgentAuthResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationAgentAuthResponse} The populated <code>ConversationAgentAuthResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationAgentAuthResponse();

            if (data.hasOwnProperty('agent_auth')) {
                obj['agent_auth'] = ConversationAgentAuth.constructFromObject(data['agent_auth']);
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('warning')) {
                obj['warning'] = Warning.constructFromObject(data['warning']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/ConversationAgentAuth} agent_auth
 */
ConversationAgentAuthResponse.prototype['agent_auth'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
ConversationAgentAuthResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
ConversationAgentAuthResponse.prototype['metadata'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
ConversationAgentAuthResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
ConversationAgentAuthResponse.prototype['warning'] = undefined;






export default ConversationAgentAuthResponse;

