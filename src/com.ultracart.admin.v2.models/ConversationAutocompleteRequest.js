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
 * The ConversationAutocompleteRequest model module.
 * @module com.ultracart.admin.v2.models/ConversationAutocompleteRequest
 * @version 4.0.244
 */
class ConversationAutocompleteRequest {
    /**
     * Constructs a new <code>ConversationAutocompleteRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationAutocompleteRequest
     */
    constructor() { 
        
        ConversationAutocompleteRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationAutocompleteRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationAutocompleteRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationAutocompleteRequest} The populated <code>ConversationAutocompleteRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationAutocompleteRequest();

            if (data.hasOwnProperty('field')) {
                obj['field'] = ApiClient.convertToType(data['field'], 'String');
            }
            if (data.hasOwnProperty('term')) {
                obj['term'] = ApiClient.convertToType(data['term'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} field
 */
ConversationAutocompleteRequest.prototype['field'] = undefined;

/**
 * @member {String} term
 */
ConversationAutocompleteRequest.prototype['term'] = undefined;






export default ConversationAutocompleteRequest;

