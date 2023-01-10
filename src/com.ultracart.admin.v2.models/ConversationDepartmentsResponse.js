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
import ConversationDepartment from './ConversationDepartment';
import Error from './Error';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The ConversationDepartmentsResponse model module.
 * @module com.ultracart.admin.v2.models/ConversationDepartmentsResponse
 * @version 4.0.109-RC
 */
class ConversationDepartmentsResponse {
    /**
     * Constructs a new <code>ConversationDepartmentsResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationDepartmentsResponse
     */
    constructor() { 
        
        ConversationDepartmentsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationDepartmentsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationDepartmentsResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationDepartmentsResponse} The populated <code>ConversationDepartmentsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationDepartmentsResponse();

            if (data.hasOwnProperty('conversation_departments')) {
                obj['conversation_departments'] = ApiClient.convertToType(data['conversation_departments'], [ConversationDepartment]);
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
 * @member {Array.<module:com.ultracart.admin.v2.models/ConversationDepartment>} conversation_departments
 */
ConversationDepartmentsResponse.prototype['conversation_departments'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
ConversationDepartmentsResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
ConversationDepartmentsResponse.prototype['metadata'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
ConversationDepartmentsResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
ConversationDepartmentsResponse.prototype['warning'] = undefined;






export default ConversationDepartmentsResponse;

