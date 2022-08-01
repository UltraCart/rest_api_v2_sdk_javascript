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
 * The ItemDigitalItem model module.
 * @module com.ultracart.admin.v2.models/ItemDigitalItem
 * @version 4.0.47-RC
 */
class ItemDigitalItem {
    /**
     * Constructs a new <code>ItemDigitalItem</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemDigitalItem
     */
    constructor() { 
        
        ItemDigitalItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemDigitalItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemDigitalItem} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemDigitalItem} The populated <code>ItemDigitalItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemDigitalItem();

            if (data.hasOwnProperty('creation_dts')) {
                obj['creation_dts'] = ApiClient.convertToType(data['creation_dts'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('file_size')) {
                obj['file_size'] = ApiClient.convertToType(data['file_size'], 'Number');
            }
            if (data.hasOwnProperty('mime_type')) {
                obj['mime_type'] = ApiClient.convertToType(data['mime_type'], 'String');
            }
            if (data.hasOwnProperty('original_filename')) {
                obj['original_filename'] = ApiClient.convertToType(data['original_filename'], 'String');
            }
        }
        return obj;
    }


}

/**
 * File creation date
 * @member {String} creation_dts
 */
ItemDigitalItem.prototype['creation_dts'] = undefined;

/**
 * Description of the digital item
 * @member {String} description
 */
ItemDigitalItem.prototype['description'] = undefined;

/**
 * File size
 * @member {Number} file_size
 */
ItemDigitalItem.prototype['file_size'] = undefined;

/**
 * Mime type associated with the file
 * @member {String} mime_type
 */
ItemDigitalItem.prototype['mime_type'] = undefined;

/**
 * Original filename
 * @member {String} original_filename
 */
ItemDigitalItem.prototype['original_filename'] = undefined;






export default ItemDigitalItem;

