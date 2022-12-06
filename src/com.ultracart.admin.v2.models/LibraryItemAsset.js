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
 * The LibraryItemAsset model module.
 * @module com.ultracart.admin.v2.models/LibraryItemAsset
 * @version 4.0.92-RC
 */
class LibraryItemAsset {
    /**
     * Constructs a new <code>LibraryItemAsset</code>.
     * @alias module:com.ultracart.admin.v2.models/LibraryItemAsset
     */
    constructor() { 
        
        LibraryItemAsset.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LibraryItemAsset</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/LibraryItemAsset} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/LibraryItemAsset} The populated <code>LibraryItemAsset</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LibraryItemAsset();

            if (data.hasOwnProperty('mime_type')) {
                obj['mime_type'] = ApiClient.convertToType(data['mime_type'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} mime_type
 */
LibraryItemAsset.prototype['mime_type'] = undefined;

/**
 * @member {String} url
 */
LibraryItemAsset.prototype['url'] = undefined;






export default LibraryItemAsset;

