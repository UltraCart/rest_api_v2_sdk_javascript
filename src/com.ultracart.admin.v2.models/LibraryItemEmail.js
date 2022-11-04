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
 * The LibraryItemEmail model module.
 * @module com.ultracart.admin.v2.models/LibraryItemEmail
 * @version 4.0.78-RC
 */
class LibraryItemEmail {
    /**
     * Constructs a new <code>LibraryItemEmail</code>.
     * @alias module:com.ultracart.admin.v2.models/LibraryItemEmail
     */
    constructor() { 
        
        LibraryItemEmail.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LibraryItemEmail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/LibraryItemEmail} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/LibraryItemEmail} The populated <code>LibraryItemEmail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LibraryItemEmail();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('library_item_email_oid')) {
                obj['library_item_email_oid'] = ApiClient.convertToType(data['library_item_email_oid'], 'Number');
            }
            if (data.hasOwnProperty('library_item_oid')) {
                obj['library_item_oid'] = ApiClient.convertToType(data['library_item_oid'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} email
 */
LibraryItemEmail.prototype['email'] = undefined;

/**
 * @member {Number} library_item_email_oid
 */
LibraryItemEmail.prototype['library_item_email_oid'] = undefined;

/**
 * @member {Number} library_item_oid
 */
LibraryItemEmail.prototype['library_item_oid'] = undefined;






export default LibraryItemEmail;

