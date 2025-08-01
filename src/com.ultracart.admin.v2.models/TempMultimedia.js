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
 * The TempMultimedia model module.
 * @module com.ultracart.admin.v2.models/TempMultimedia
 * @version 4.1.16
 */
class TempMultimedia {
    /**
     * Constructs a new <code>TempMultimedia</code>.
     * @alias module:com.ultracart.admin.v2.models/TempMultimedia
     */
    constructor() { 
        
        TempMultimedia.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TempMultimedia</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TempMultimedia} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TempMultimedia} The populated <code>TempMultimedia</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TempMultimedia();

            if (data.hasOwnProperty('filename')) {
                obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('multimedia_type')) {
                obj['multimedia_type'] = ApiClient.convertToType(data['multimedia_type'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('temp_multimedia_oid')) {
                obj['temp_multimedia_oid'] = ApiClient.convertToType(data['temp_multimedia_oid'], 'Number');
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
 * Filename
 * @member {String} filename
 */
TempMultimedia.prototype['filename'] = undefined;

/**
 * Height
 * @member {Number} height
 */
TempMultimedia.prototype['height'] = undefined;

/**
 * Multimedia type
 * @member {module:com.ultracart.admin.v2.models/TempMultimedia.MultimediaTypeEnum} multimedia_type
 */
TempMultimedia.prototype['multimedia_type'] = undefined;

/**
 * Size
 * @member {Number} size
 */
TempMultimedia.prototype['size'] = undefined;

/**
 * Temporary multimedia object identifier
 * @member {Number} temp_multimedia_oid
 */
TempMultimedia.prototype['temp_multimedia_oid'] = undefined;

/**
 * URL
 * @member {String} url
 */
TempMultimedia.prototype['url'] = undefined;

/**
 * Width
 * @member {Number} width
 */
TempMultimedia.prototype['width'] = undefined;





/**
 * Allowed values for the <code>multimedia_type</code> property.
 * @enum {String}
 * @readonly
 */
TempMultimedia['MultimediaTypeEnum'] = {

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
     * value: "Video"
     * @const
     */
    "Video": "Video"
};



export default TempMultimedia;

