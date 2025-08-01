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
 * The ApplyLibraryItemRequest model module.
 * @module com.ultracart.admin.v2.models/ApplyLibraryItemRequest
 * @version 4.1.16
 */
class ApplyLibraryItemRequest {
    /**
     * Constructs a new <code>ApplyLibraryItemRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/ApplyLibraryItemRequest
     */
    constructor() { 
        
        ApplyLibraryItemRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplyLibraryItemRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ApplyLibraryItemRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ApplyLibraryItemRequest} The populated <code>ApplyLibraryItemRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplyLibraryItemRequest();

            if (data.hasOwnProperty('email_uuid')) {
                obj['email_uuid'] = ApiClient.convertToType(data['email_uuid'], 'String');
            }
            if (data.hasOwnProperty('library_item_oid')) {
                obj['library_item_oid'] = ApiClient.convertToType(data['library_item_oid'], 'Number');
            }
            if (data.hasOwnProperty('postcard_uuid')) {
                obj['postcard_uuid'] = ApiClient.convertToType(data['postcard_uuid'], 'String');
            }
            if (data.hasOwnProperty('storefront_oid')) {
                obj['storefront_oid'] = ApiClient.convertToType(data['storefront_oid'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Normal emails are applied to an existing email object, so when requesting a library item to be applied to an email, supply the email uuid.  This is only for normal emails.  Transactional emails do not have a uuid.
 * @member {String} email_uuid
 */
ApplyLibraryItemRequest.prototype['email_uuid'] = undefined;

/**
 * Library item oid that you wish to apply to the given StoreFront
 * @member {Number} library_item_oid
 */
ApplyLibraryItemRequest.prototype['library_item_oid'] = undefined;

/**
 * The postcard uuid you wish to apply to a given StoreFront.
 * @member {String} postcard_uuid
 */
ApplyLibraryItemRequest.prototype['postcard_uuid'] = undefined;

/**
 * StoreFront oid where content originates necessary for tracking down relative assets
 * @member {Number} storefront_oid
 */
ApplyLibraryItemRequest.prototype['storefront_oid'] = undefined;






export default ApplyLibraryItemRequest;

