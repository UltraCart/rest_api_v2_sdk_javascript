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
 * The PublishLibraryItemRequest model module.
 * @module com.ultracart.admin.v2.models/PublishLibraryItemRequest
 * @version 4.0.188
 */
class PublishLibraryItemRequest {
    /**
     * Constructs a new <code>PublishLibraryItemRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/PublishLibraryItemRequest
     */
    constructor() { 
        
        PublishLibraryItemRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PublishLibraryItemRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/PublishLibraryItemRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/PublishLibraryItemRequest} The populated <code>PublishLibraryItemRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PublishLibraryItemRequest();

            if (data.hasOwnProperty('release_notes')) {
                obj['release_notes'] = ApiClient.convertToType(data['release_notes'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Release notes for this release version.
 * @member {String} release_notes
 */
PublishLibraryItemRequest.prototype['release_notes'] = undefined;






export default PublishLibraryItemRequest;

