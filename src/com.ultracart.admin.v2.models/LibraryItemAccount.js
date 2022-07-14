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
 * The LibraryItemAccount model module.
 * @module com.ultracart.admin.v2.models/LibraryItemAccount
 * @version 4.0.35-RC
 */
class LibraryItemAccount {
    /**
     * Constructs a new <code>LibraryItemAccount</code>.
     * @alias module:com.ultracart.admin.v2.models/LibraryItemAccount
     */
    constructor() { 
        
        LibraryItemAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LibraryItemAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/LibraryItemAccount} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/LibraryItemAccount} The populated <code>LibraryItemAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LibraryItemAccount();

            if (data.hasOwnProperty('library_item_account_oid')) {
                obj['library_item_account_oid'] = ApiClient.convertToType(data['library_item_account_oid'], 'Number');
            }
            if (data.hasOwnProperty('library_item_oid')) {
                obj['library_item_oid'] = ApiClient.convertToType(data['library_item_oid'], 'Number');
            }
            if (data.hasOwnProperty('other_merchant_id')) {
                obj['other_merchant_id'] = ApiClient.convertToType(data['other_merchant_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} library_item_account_oid
 */
LibraryItemAccount.prototype['library_item_account_oid'] = undefined;

/**
 * @member {Number} library_item_oid
 */
LibraryItemAccount.prototype['library_item_oid'] = undefined;

/**
 * @member {String} other_merchant_id
 */
LibraryItemAccount.prototype['other_merchant_id'] = undefined;






export default LibraryItemAccount;

