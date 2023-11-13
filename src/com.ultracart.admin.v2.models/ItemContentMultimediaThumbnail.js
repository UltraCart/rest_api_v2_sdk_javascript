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
 * The ItemContentMultimediaThumbnail model module.
 * @module com.ultracart.admin.v2.models/ItemContentMultimediaThumbnail
 * @version 4.0.188
 */
class ItemContentMultimediaThumbnail {
    /**
     * Constructs a new <code>ItemContentMultimediaThumbnail</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemContentMultimediaThumbnail
     */
    constructor() { 
        
        ItemContentMultimediaThumbnail.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemContentMultimediaThumbnail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemContentMultimediaThumbnail} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemContentMultimediaThumbnail} The populated <code>ItemContentMultimediaThumbnail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemContentMultimediaThumbnail();

            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('http_url')) {
                obj['http_url'] = ApiClient.convertToType(data['http_url'], 'String');
            }
            if (data.hasOwnProperty('https_url')) {
                obj['https_url'] = ApiClient.convertToType(data['https_url'], 'String');
            }
            if (data.hasOwnProperty('png_format')) {
                obj['png_format'] = ApiClient.convertToType(data['png_format'], 'Boolean');
            }
            if (data.hasOwnProperty('square')) {
                obj['square'] = ApiClient.convertToType(data['square'], 'Boolean');
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Height of the thumbnail
 * @member {Number} height
 */
ItemContentMultimediaThumbnail.prototype['height'] = undefined;

/**
 * HTTP URL to view the thumbnail
 * @member {String} http_url
 */
ItemContentMultimediaThumbnail.prototype['http_url'] = undefined;

/**
 * HTTPS URL to view the thumbnail
 * @member {String} https_url
 */
ItemContentMultimediaThumbnail.prototype['https_url'] = undefined;

/**
 * True if PNG, false if JPEG
 * @member {Boolean} png_format
 */
ItemContentMultimediaThumbnail.prototype['png_format'] = undefined;

/**
 * True if the thumbnail is square
 * @member {Boolean} square
 */
ItemContentMultimediaThumbnail.prototype['square'] = undefined;

/**
 * Width of the thumbnail
 * @member {Number} width
 */
ItemContentMultimediaThumbnail.prototype['width'] = undefined;






export default ItemContentMultimediaThumbnail;

