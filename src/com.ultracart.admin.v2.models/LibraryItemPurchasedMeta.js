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
 * The LibraryItemPurchasedMeta model module.
 * @module com.ultracart.admin.v2.models/LibraryItemPurchasedMeta
 * @version 4.0.170
 */
class LibraryItemPurchasedMeta {
    /**
     * Constructs a new <code>LibraryItemPurchasedMeta</code>.
     * @alias module:com.ultracart.admin.v2.models/LibraryItemPurchasedMeta
     */
    constructor() { 
        
        LibraryItemPurchasedMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LibraryItemPurchasedMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/LibraryItemPurchasedMeta} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/LibraryItemPurchasedMeta} The populated <code>LibraryItemPurchasedMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LibraryItemPurchasedMeta();

            if (data.hasOwnProperty('most_recent_version')) {
                obj['most_recent_version'] = ApiClient.convertToType(data['most_recent_version'], 'Number');
            }
            if (data.hasOwnProperty('my_purchased_version')) {
                obj['my_purchased_version'] = ApiClient.convertToType(data['my_purchased_version'], 'Number');
            }
            if (data.hasOwnProperty('upgrade_available')) {
                obj['upgrade_available'] = ApiClient.convertToType(data['upgrade_available'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The most recent version of the item purchased
 * @member {Number} most_recent_version
 */
LibraryItemPurchasedMeta.prototype['most_recent_version'] = undefined;

/**
 * If this is a public item and the merchant has already purchased it, this is their version.  If not yet purchased, this will be zero.  This value will only be populated during a searchPublicItems() call.
 * @member {Number} my_purchased_version
 */
LibraryItemPurchasedMeta.prototype['my_purchased_version'] = undefined;

/**
 * True if the most recent version of this purchase it greater than what was purchased
 * @member {Boolean} upgrade_available
 */
LibraryItemPurchasedMeta.prototype['upgrade_available'] = undefined;






export default LibraryItemPurchasedMeta;

