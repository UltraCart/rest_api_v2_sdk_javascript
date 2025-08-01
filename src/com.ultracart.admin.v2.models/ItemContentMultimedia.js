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
import ItemContentMultimediaThumbnail from './ItemContentMultimediaThumbnail';

/**
 * The ItemContentMultimedia model module.
 * @module com.ultracart.admin.v2.models/ItemContentMultimedia
 * @version 4.1.16
 */
class ItemContentMultimedia {
    /**
     * Constructs a new <code>ItemContentMultimedia</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemContentMultimedia
     */
    constructor() { 
        
        ItemContentMultimedia.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemContentMultimedia</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemContentMultimedia} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemContentMultimedia} The populated <code>ItemContentMultimedia</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemContentMultimedia();

            if (data.hasOwnProperty('cloud_url')) {
                obj['cloud_url'] = ApiClient.convertToType(data['cloud_url'], 'String');
            }
            if (data.hasOwnProperty('cloud_url_expiration')) {
                obj['cloud_url_expiration'] = ApiClient.convertToType(data['cloud_url_expiration'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('exclude_from_gallery')) {
                obj['exclude_from_gallery'] = ApiClient.convertToType(data['exclude_from_gallery'], 'Boolean');
            }
            if (data.hasOwnProperty('file_name')) {
                obj['file_name'] = ApiClient.convertToType(data['file_name'], 'String');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('merchant_item_multimedia_oid')) {
                obj['merchant_item_multimedia_oid'] = ApiClient.convertToType(data['merchant_item_multimedia_oid'], 'Number');
            }
            if (data.hasOwnProperty('orphan')) {
                obj['orphan'] = ApiClient.convertToType(data['orphan'], 'Boolean');
            }
            if (data.hasOwnProperty('placeholder')) {
                obj['placeholder'] = ApiClient.convertToType(data['placeholder'], 'Boolean');
            }
            if (data.hasOwnProperty('temp_multimedia_oid')) {
                obj['temp_multimedia_oid'] = ApiClient.convertToType(data['temp_multimedia_oid'], 'Number');
            }
            if (data.hasOwnProperty('thumbnails')) {
                obj['thumbnails'] = ApiClient.convertToType(data['thumbnails'], [ItemContentMultimediaThumbnail]);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * URL where the image can be downloaded from the cloud
 * @member {String} cloud_url
 */
ItemContentMultimedia.prototype['cloud_url'] = undefined;

/**
 * Expiration date of the cloud URL
 * @member {String} cloud_url_expiration
 */
ItemContentMultimedia.prototype['cloud_url_expiration'] = undefined;

/**
 * Code assigned to the file
 * @member {String} code
 */
ItemContentMultimedia.prototype['code'] = undefined;

/**
 * Description
 * @member {String} description
 */
ItemContentMultimedia.prototype['description'] = undefined;

/**
 * True to exclude from multimedia gallery
 * @member {Boolean} exclude_from_gallery
 */
ItemContentMultimedia.prototype['exclude_from_gallery'] = undefined;

/**
 * File name
 * @member {String} file_name
 */
ItemContentMultimedia.prototype['file_name'] = undefined;

/**
 * Height of the image
 * @member {Number} height
 */
ItemContentMultimedia.prototype['height'] = undefined;

/**
 * Item multimedia object identifier
 * @member {Number} merchant_item_multimedia_oid
 */
ItemContentMultimedia.prototype['merchant_item_multimedia_oid'] = undefined;

/**
 * True if the multimedia is an orphan of the active StoreFront themes
 * @member {Boolean} orphan
 */
ItemContentMultimedia.prototype['orphan'] = undefined;

/**
 * True if the object is a place holder that can be populated
 * @member {Boolean} placeholder
 */
ItemContentMultimedia.prototype['placeholder'] = undefined;

/**
 * Temporary multimedia object identifier assigned if uploading new multimedia
 * @member {Number} temp_multimedia_oid
 */
ItemContentMultimedia.prototype['temp_multimedia_oid'] = undefined;

/**
 * Thumbnails of this image
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemContentMultimediaThumbnail>} thumbnails
 */
ItemContentMultimedia.prototype['thumbnails'] = undefined;

/**
 * Type of file
 * @member {module:com.ultracart.admin.v2.models/ItemContentMultimedia.TypeEnum} type
 */
ItemContentMultimedia.prototype['type'] = undefined;

/**
 * URL to download file (on new multimedia record this can be a URL for UltraCart to fetch)
 * @member {String} url
 */
ItemContentMultimedia.prototype['url'] = undefined;

/**
 * Width of the image
 * @member {Number} width
 */
ItemContentMultimedia.prototype['width'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ItemContentMultimedia['TypeEnum'] = {

    /**
     * value: "Image"
     * @const
     */
    "Image": "Image",

    /**
     * value: "PDF"
     * @const
     */
    "PDF": "PDF",

    /**
     * value: "Text"
     * @const
     */
    "Text": "Text",

    /**
     * value: "Unknown"
     * @const
     */
    "Unknown": "Unknown",

    /**
     * value: "Video"
     * @const
     */
    "Video": "Video"
};



export default ItemContentMultimedia;

