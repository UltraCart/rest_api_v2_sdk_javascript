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
import ConversationPbxAgent from './ConversationPbxAgent';
import Error from './Error';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The ConversationPbxAgentsResponse model module.
 * @module com.ultracart.admin.v2.models/ConversationPbxAgentsResponse
 * @version 4.1.0
 */
class ConversationPbxAgentsResponse {
    /**
     * Constructs a new <code>ConversationPbxAgentsResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationPbxAgentsResponse
     */
    constructor() { 
        
        ConversationPbxAgentsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationPbxAgentsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxAgentsResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationPbxAgentsResponse} The populated <code>ConversationPbxAgentsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationPbxAgentsResponse();

            if (data.hasOwnProperty('agents')) {
                obj['agents'] = ApiClient.convertToType(data['agents'], [ConversationPbxAgent]);
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
 * @member {Array.<module:com.ultracart.admin.v2.models/ConversationPbxAgent>} agents
 */
ConversationPbxAgentsResponse.prototype['agents'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
ConversationPbxAgentsResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
ConversationPbxAgentsResponse.prototype['metadata'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
ConversationPbxAgentsResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
ConversationPbxAgentsResponse.prototype['warning'] = undefined;






export default ConversationPbxAgentsResponse;

