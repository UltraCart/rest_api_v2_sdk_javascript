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
import ConversationPermissions from './ConversationPermissions';
import Error from './Error';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The ConversationPermissionsResponse model module.
 * @module com.ultracart.admin.v2.models/ConversationPermissionsResponse
 * @version 4.0.150
 */
class ConversationPermissionsResponse {
    /**
     * Constructs a new <code>ConversationPermissionsResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationPermissionsResponse
     */
    constructor() { 
        
        ConversationPermissionsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationPermissionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationPermissionsResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationPermissionsResponse} The populated <code>ConversationPermissionsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationPermissionsResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ConversationPermissions.constructFromObject(data['permissions']);
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
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
ConversationPermissionsResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
ConversationPermissionsResponse.prototype['metadata'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ConversationPermissions} permissions
 */
ConversationPermissionsResponse.prototype['permissions'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
ConversationPermissionsResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
ConversationPermissionsResponse.prototype['warning'] = undefined;






export default ConversationPermissionsResponse;

